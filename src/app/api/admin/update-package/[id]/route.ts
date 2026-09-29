import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import {
    deleteFromCloudinary,
    uploadBufferToCloudinary,
} from "@/lib/cloudinary-upload";

import { packageSchema } from "@/lib/validations/package";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_GALLERY_IMAGES = 15;

const ALLOWED_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
];

type CloudinaryUpload = {
    url: string;
    publicId: string;
};

function parseJSON<T>(
    value: FormDataEntryValue | null,
    fallback: T
): T {
    if (!value || typeof value !== "string") {
        return fallback;
    }

    try {
        return JSON.parse(value) as T;
    } catch {
        return fallback;
    }
}

function parseNumber(
    value: FormDataEntryValue | null
) {
    if (
        value === null ||
        typeof value !== "string" ||
        value.trim() === ""
    ) {
        return null;
    }

    const number = Number(value);

    return Number.isFinite(number)
        ? number
        : null;
}

function parseBoolean(
    value: FormDataEntryValue | null
) {
    return value === "true";
}

function validateImage(
    file: File,
    fieldName: string
) {
    if (!file || file.size === 0) {
        throw new Error(
            `${fieldName} is empty`
        );
    }

    if (file.size > MAX_FILE_SIZE) {
        throw new Error(
            `${fieldName} cannot exceed 5MB`
        );
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
        throw new Error(
            `${fieldName} must be JPG, PNG or WEBP`
        );
    }
}

export async function PATCH(
    request: NextRequest,
    context: {
        params: Promise<{ id: string }>;
    }
) {
    const newlyUploadedPublicIds: string[] = [];
    const oldPublicIdsToDelete: string[] = [];

    try {
        const { id } = await context.params;

        if (!id || !/^[a-f\d]{24}$/i.test(id)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid package ID",
                },
                { status: 400 }
            );
        }

        const existingPackage =
            await prisma.package.findUnique({
                where: {
                    id,
                },
            });

        if (!existingPackage) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Package not found",
                },
                { status: 404 }
            );
        }

        const formData =
            await request.formData();

        /*
         * Basic fields
         */

        const name =
            String(
                formData.get("name") || ""
            ).trim();

        const slug =
            String(
                formData.get("slug") || ""
            ).trim();

        const category =
            String(
                formData.get("category") || ""
            ).trim();

        const subtitle =
            String(
                formData.get("subtitle") || ""
            ).trim();

        const destinationId =
            String(
                formData.get("destinationId") || ""
            ).trim();

        const parentId =
            String(
                formData.get(
                    "parentId"
                ) || ""
            ).trim();

        const description =
            String(
                formData.get("description") || ""
            ).trim();
        const type =
            String(
                formData.get("type") || "REGULAR"
            ).trim();

        const occasion =
            String(
                formData.get("occasion") || "NONE"
            ).trim();
        const location =
            String(
                formData.get("location") || ""
            ).trim();

        const duration =
            String(
                formData.get("duration") || ""
            ).trim();

        const groupSize =
            String(
                formData.get("groupSize") || ""
            ).trim();

        const idealTrip =
            String(
                formData.get("idealTrip") || ""
            ).trim();

        const budget =
            String(
                formData.get("budget") || ""
            ).trim();

        /*
         * Pricing
         */

        const originalPrice =
            parseNumber(
                formData.get("originalPrice")
            );

      const saveAmount =
            parseNumber(
                formData.get("saveAmount")
            );
      const discount =
            parseNumber(
                formData.get("discount")
            );
        const validTillValue =
            String(
                formData.get("validTill") || ""
            ).trim();

        /*
         * Arrays / JSON
         */

        const bestTimeToVisit =
            parseJSON<string[]>(
                formData.get(
                    "bestTimeToVisit"
                ),
                []
            );

        const highlights =
            parseJSON<string[]>(
                formData.get("highlights"),
                []
            );

        const inclusions =
            parseJSON<string[]>(
                formData.get("inclusions"),
                []
            );

        const exclusions =
            parseJSON<string[]>(
                formData.get("exclusions"),
                []
            );

        const whyVisit =
            parseJSON(
                formData.get("whyVisit"),
                []
            );

        const rawItinerary = parseJSON<
    {
        id?: string;
        day: number;
        title: string;
        description?: string;
        activities: string[];
        meals: string[];
        overnight?: string;
    }[]
>(
    formData.get("itinerary"),
    []
);

const itinerary = rawItinerary.map(
    ({
        id,
        ...item
    }) => item
);

        const keywords =
            parseJSON<string[]>(
                formData.get("keywords"),
                []
            );

        /*
         * SEO
         */

        const metaTitle =
            String(
                formData.get("metaTitle") || ""
            ).trim();

        const metaDescription =
            String(
                formData.get(
                    "metaDescription"
                ) || ""
            ).trim();

        /*
         * Publishing
         */

        const isPublished =
            parseBoolean(
                formData.get("isPublished")
            );

        const isFeatured =
            parseBoolean(
                formData.get("isFeatured")
            );

        /*
         * Existing gallery
         *
         * These are the images the admin
         * wants to keep.
         */

        const existingGallery =
            parseJSON<
                {
                    url: string;
                    publicId: string;
                }[]
            >(
                formData.get(
                    "existingGallery"
                ),
                []
            );

        /*
         * Removed gallery public IDs
         */

        const removedGalleryPublicIds =
            parseJSON<string[]>(
                formData.get(
                    "removedGalleryPublicIds"
                ),
                []
            );

        /*
         * Validation
         */

        if (!name) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Package name is required",
                },
                { status: 400 }
            );
        }

        if (!slug) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Package slug is required",
                },
                { status: 400 }
            );
        }

        if (!destinationId) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Destination is required",
                },
                { status: 400 }
            );
        }


        

  
        

        /*
         * Destination
         */

        const destination =
            await prisma.destination.findUnique(
                {
                    where: {
                        id: destinationId,
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
                { status: 404 }
            );
        }

        /*
         * Parent package
         */

        if (parentId) {
            if (
                parentId === id
            ) {
                return NextResponse.json(
                    {
                        success: false,
                        message:
                            "A package cannot be its own parent",
                    },
                    { status: 400 }
                );
            }

            const parentPackage =
                await prisma.package.findUnique(
                    {
                        where: {
                            id: parentId,
                        },
                    }
                );

            if (!parentPackage) {
                return NextResponse.json(
                    {
                        success: false,
                        message:
                            "Parent package not found",
                    },
                    { status: 404 }
                );
            }
        }

        /*
         * Slug uniqueness
         */

        const duplicatePackage =
            await prisma.package.findFirst({
                where: {
                    destinationId,
                    slug,
                    NOT: {
                        id,
                    },
                },
            });

        if (duplicatePackage) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "A package with this slug already exists for this destination",
                },
                { status: 409 }
            );
        }

        /*
         * Existing hero
         */

        let heroImage =
            existingPackage.heroImage;

        const heroFile =
            formData.get("heroImage");

        if (
            heroFile instanceof File &&
            heroFile.size > 0
        ) {
            validateImage(
                heroFile,
                "Hero image"
            );

            const upload =
                await uploadBufferToCloudinary(
                    {
                        buffer: Buffer.from(
                            await heroFile.arrayBuffer()
                        ),
                        folder:
                            "domesticTravel/packages",
                    }
                );

            newlyUploadedPublicIds.push(
                upload.publicId
            );

            if (
                existingPackage.heroImage
                    ?.publicId
            ) {
                oldPublicIdsToDelete.push(
                    existingPackage
                        .heroImage
                        .publicId
                );
            }

            heroImage = {
                url: upload.url,
                publicId:
                    upload.publicId,
            };
        }

        /*
         * New gallery files
         */

        const galleryFiles =
            formData.getAll("gallery");

        const validGalleryFiles =
            galleryFiles.filter(
                (file): file is File =>
                    file instanceof File &&
                    file.size > 0
            );

        for (const file of validGalleryFiles) {
            validateImage(
                file,
                "Gallery image"
            );
        }

        const finalGalleryCount =
            existingGallery.length +
            validGalleryFiles.length;

        if (
            finalGalleryCount >
            MAX_GALLERY_IMAGES
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: `Gallery cannot contain more than ${MAX_GALLERY_IMAGES} images`,
                },
                { status: 400 }
            );
        }

        const newGalleryUploads: CloudinaryUpload[] =
            [];

        for (const file of validGalleryFiles) {
            const upload =
                await uploadBufferToCloudinary(
                    {
                        buffer: Buffer.from(
                            await file.arrayBuffer()
                        ),
                        folder:
                            "domesticTravel/packages",
                    }
                );

            newlyUploadedPublicIds.push(
                upload.publicId
            );

            newGalleryUploads.push({
                url: upload.url,
                publicId:
                    upload.publicId,
            });
        }

        /*
         * Determine removed images
         */

        const existingPublicIds =
            new Set(
                existingGallery.map(
                    (image) =>
                        image.publicId
                )
            );

        for (const publicId of removedGalleryPublicIds) {
            if (
                existingPublicIds.has(
                    publicId
                )
            ) {
                oldPublicIdsToDelete.push(
                    publicId
                );
            }
        }

        /*
         * Final gallery
         */

        const finalGallery = [
            ...existingGallery,
            ...newGalleryUploads,
        ].filter(
            (image) =>
                !removedGalleryPublicIds.includes(
                    image.publicId
                )
        );

        /*
         * Calculated pricing
         */

   
        /*
         * Date
         */

let validTill: Date | null = null;

if (validTillValue) {
    const parsedDate = new Date(validTillValue);

    if (Number.isNaN(parsedDate.getTime())) {
        return NextResponse.json(
            {
                success: false,
                message: "Invalid valid till date",
            },
            { status: 400 }
        );
    }

    validTill = parsedDate;
}

        /*
         * Validation object
         */

        const validationData = {
            name,
            slug,
            category,
            subtitle,
            destinationId,
            parentId:
                parentId || null,
            description,
            location,
            duration,
            groupSize,
            originalPrice,
            occasion,
            type,
             validTill: validTillValue,
            idealTrip,
            budget,
            bestTimeToVisit,
            highlights,
            inclusions,
            exclusions,
            whyVisit,
            itinerary,
            keywords,
            metaTitle,
            metaDescription,
            isPublished,
            isFeatured,
        };

        const validation =
            packageSchema.safeParse(
                validationData
            );

        if (!validation.success) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Validation failed",
                    errors:
                        validation.error.flatten()
                            .fieldErrors,
                },
                { status: 400 }
            );
        }

        /*
         * Published date
         */

        let publishedAt =
            existingPackage.publishedAt;

        if (
            isPublished &&
            !publishedAt
        ) {
            publishedAt = new Date();
        }

        if (!isPublished) {
            publishedAt = null;
        }

        /*
         * Update
         */

        const updatedPackage =
            await prisma.package.update({
                where: {
                    id,
                },

                data: {
                    name,
                    slug,
                    category,
                    subtitle,

                    destinationId,

                    parentId:
                        parentId ||
                        null,

                    description,
                    location,
                    duration,
                    groupSize,

                    originalPrice,
                     discount,
                    saveAmount,

                    validTill,

                    idealTrip,
                    budget,

                    bestTimeToVisit,

                    highlights,
                    inclusions,
                    exclusions,

                    whyVisit,
                    itinerary,

                    keywords,

                    metaTitle,
                    metaDescription,

                    isPublished,
                    isFeatured,

                    publishedAt,

                    heroImage,

                    gallery: {
                        set: finalGallery,
                    },
                },
            });

        /*
         * Delete old Cloudinary assets
         *
         * Only delete after the database
         * update succeeds.
         */

        for (const publicId of [
            ...new Set(
                oldPublicIdsToDelete
            ),
        ]) {
            try {
                await deleteFromCloudinary(
                    publicId
                );
            } catch (error) {
                console.error(
                    "CLOUDINARY_DELETE_ERROR:",
                    publicId,
                    error
                );
            }
        }

        return NextResponse.json(
            {
                success: true,
                message:
                    "Package updated successfully",
                data: updatedPackage,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(
            "UPDATE_PACKAGE_ERROR:",
            error
        );

        /*
         * Rollback newly uploaded
         * Cloudinary images.
         */

        for (const publicId of newlyUploadedPublicIds) {
            try {
                await deleteFromCloudinary(
                    publicId
                );
            } catch (cleanupError) {
                console.error(
                    "CLOUDINARY_ROLLBACK_ERROR:",
                    cleanupError
                );
            }
        }

        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Failed to update package",
            },
            { status: 500 }
        );
    }
}