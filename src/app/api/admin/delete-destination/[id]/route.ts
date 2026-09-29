import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { deleteFromCloudinary } from "@/lib/cloudinary-upload";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type GalleryImage = {
    url?: string;
    publicId?: string;
};

function isValidObjectId(value: string) {
    return /^[a-f\d]{24}$/i.test(value);
}

function extractCloudinaryPublicId(url: string) {
    try {
        const parsed = new URL(url);

        const pathname = parsed.pathname;

        const uploadIndex = pathname.indexOf("/upload/");

        if (uploadIndex === -1) {
            return null;
        }

        let publicId = pathname.slice(
            uploadIndex + "/upload/".length
        );

        publicId = publicId.replace(
            /^v\d+\//,
            ""
        );

        publicId = publicId.replace(
            /\.[^/.]+$/,
            ""
        );

        return decodeURIComponent(publicId);
    } catch {
        return null;
    }
}

function addPublicId(
    publicIds: Set<string>,
    publicId?: string | null
) {
    if (
        typeof publicId === "string" &&
        publicId.trim()
    ) {
        publicIds.add(publicId.trim());
    }
}

export async function DELETE(
    request: NextRequest,
    {
        params,
    }: {
        params: Promise<{
            id: string;
        }>;
    }
) {
    const cloudinaryPublicIds =
        new Set<string>();

    try {
        const { id } = await params;

        if (!id) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Destination id is required",
                },
                {
                    status: 400,
                }
            );
        }

        if (!isValidObjectId(id)) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "A valid destination id is required",
                },
                {
                    status: 400,
                }
            );
        }

        const destination =
            await prisma.destination.findUnique(
                {
                    where: {
                        id,
                    },

                    select: {
                        id: true,
                        name: true,
                        heroImage: true,
                        gallery: true,

                        attractions: {
                            select: {
                                id: true,
                                imageUrl: true,
                                publicId: true,
                            },
                        },

                        _count: {
                            select: {
                                packages: true,
                            },
                        },
                    },
                }
            );

        if (!destination) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Destination not found",
                },
                {
                    status: 404,
                }
            );
        }

        /*
         * Don't delete a destination while
         * packages still reference it.
         */
        if (
            destination._count.packages > 0
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "This destination cannot be deleted because packages are associated with it",
                    data: {
                        packageCount:
                            destination
                                ._count
                                .packages,
                    },
                },
                {
                    status: 409,
                }
            );
        }

        /*
         * Hero image
         */
        if (destination.heroImage) {
            addPublicId(
                cloudinaryPublicIds,
                destination.heroImage.publicId
            );
        }

        /*
         * Gallery images
         */
        if (
            Array.isArray(
                destination.gallery
            )
        ) {
            for (
                const item of
                destination.gallery
            ) {
                if (
                    typeof item !==
                    "object" ||
                    item === null
                ) {
                    continue;
                }

                const galleryImage =
                    item as GalleryImage;

                if (
                    galleryImage.publicId
                ) {
                    addPublicId(
                        cloudinaryPublicIds,
                        galleryImage.publicId
                    );

                    continue;
                }

                if (
                    galleryImage.url
                ) {
                    const publicId =
                        extractCloudinaryPublicId(
                            galleryImage.url
                        );

                    addPublicId(
                        cloudinaryPublicIds,
                        publicId
                    );
                }
            }
        }

        /*
         * Attraction images
         */
        for (
            const attraction of
            destination.attractions
        ) {
            if (
                attraction.publicId
            ) {
                addPublicId(
                    cloudinaryPublicIds,
                    attraction.publicId
                );

                continue;
            }

            if (
                attraction.imageUrl
            ) {
                const publicId =
                    extractCloudinaryPublicId(
                        attraction.imageUrl
                    );

                addPublicId(
                    cloudinaryPublicIds,
                    publicId
                );
            }
        }

        /*
         * Delete database records first.
         */
        await prisma.$transaction(
            async (tx) => {
                await tx.attraction.deleteMany(
                    {
                        where: {
                            destinationId: id,
                        },
                    }
                );

                const result =
                    await tx.destination.deleteMany(
                        {
                            where: {
                                id,
                            },
                        }
                    );

                if (
                    result.count !== 1
                ) {
                    throw new Error(
                        "Destination could not be deleted"
                    );
                }
            }
        );

        /*
         * Delete Cloudinary assets after
         * successful database deletion.
         */
        const results =
            await Promise.allSettled(
                Array.from(
                    cloudinaryPublicIds
                ).map(
                    (publicId) =>
                        deleteFromCloudinary(
                            publicId
                        )
                )
            );

        const failedDeletes =
            results.filter(
                (result) =>
                    result.status ===
                    "rejected"
            );

        if (
            failedDeletes.length > 0
        ) {
            console.error(
                "Cloudinary cleanup failed:",
                failedDeletes
            );
        }

        return NextResponse.json(
            {
                success: true,
                message:
                    "Destination deleted successfully",
                data: {
                    id: destination.id,
                    name: destination.name,
                    cloudinaryAssets:
                        cloudinaryPublicIds.size,
                    cloudinaryCleanupFailed:
                        failedDeletes.length,
                },
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error(
            "DELETE /api/admin/delete-destination/[id] error:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Failed to delete destination",
            },
            {
                status: 500,
            }
        );
    }
}