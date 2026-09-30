import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { deleteFromCloudinary } from "@/lib/cloudinary-upload";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function DELETE(
    request: NextRequest,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    }
) {
    try {
        const { id } = await params;

        if (!id) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Package ID is required",
                },
                { status: 400 }
            );
        }

        const packageData = await prisma.package.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                name: true,
                heroImage: true,
                gallery: {
                    select: {
                        publicId: true,
                    },
                },
            },
        });

        if (!packageData) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Package not found",
                },
                { status: 404 }
            );
        }

        const publicIds: string[] = [];

        if (packageData.heroImage) {
            try {
                const heroImage =
                    typeof packageData.heroImage === "string"
                        ? JSON.parse(packageData.heroImage)
                        : packageData.heroImage;

                if (heroImage?.publicId) {
                    publicIds.push(heroImage.publicId);
                }
            } catch {
                console.error(
                    "Failed to parse package hero image:",
                    packageData.id
                );
            }
        }

        for (const image of packageData.gallery) {
            if (image.publicId) {
                publicIds.push(image.publicId);
            }
        }

        const uniquePublicIds = [
            ...new Set(publicIds),
        ];

        /*
         * Delete database record first.
         *
         * If PackageImage / ItineraryDay relations have
         * onDelete: Cascade, Prisma will remove them automatically.
         */
        await prisma.package.delete({
            where: {
                id,
            },
        });

        const cloudinaryResults =
            await Promise.allSettled(
                uniquePublicIds.map((publicId) =>
                    deleteFromCloudinary(publicId)
                )
            );

        const failedDeletes =
            cloudinaryResults.filter(
                (result) =>
                    result.status === "rejected"
            );

        if (failedDeletes.length > 0) {
            console.error(
                "Some Cloudinary images could not be deleted:",
                failedDeletes
            );

            return NextResponse.json(
                {
                    success: true,
                    message:
                        "Package deleted successfully, but some images could not be removed from Cloudinary",
                    warning: true,
                },
                { status: 200 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Package and images deleted successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(
            "DELETE /api/admin/delete-package/[id] error:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message: "Failed to delete package",
            },
            { status: 500 }
        );
    }
}