import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import {
    deleteFromCloudinary,
    uploadBufferToCloudinary,
} from "@/lib/cloudinary-upload";

import { packageSchema } from "@/lib/validations/package";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILE_SIZE = 7 * 1024 * 1024;
const MAX_GALLERY_IMAGES = 15;

const ALLOWED_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

type CloudinaryUpload = {
    url: string;
    publicId: string;
};

type TravelInformationItem = {
    id: string;
    title: string;
    value: string;
};

function parseJSON<T>(
    value: FormDataEntryValue | null,
    fallback: T
): T {
    if (
        value === null ||
        typeof value !== "string" ||
        !value.trim()
    ) {
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
): number | null {
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
): boolean {
    return value === "true";
}

    function isValidImageUrl(value: string) {
        try {
            const url = new URL(value);
            return url.protocol === "http:" || url.protocol === "https:";
        } catch {
            return false;
        }
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
            `${fieldName} cannot exceed 7MB`
        );
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
        throw new Error(
            `${fieldName} must be JPG, PNG or WEBP`
        );
    }
}

function isValidObjectId(value: string) {
    return /^[a-f\d]{24}$/i.test(value);
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

        if (!id || !isValidObjectId(id)) {
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
                formData.get("parentId") || ""
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
         * Location coordinates
         */

        const latitude = parseNumber(
            formData.get("latitude")
        );

        const longitude = parseNumber(
            formData.get("longitude")
        );

        /*
         * Pricing
         */

        const originalPrice = parseNumber(
            formData.get("originalPrice")
        );

        const offerPrice = parseNumber(
            formData.get("offerPrice")
        );

        const discount = parseNumber(
            formData.get("discount")
        );

        const saveAmount = parseNumber(
            formData.get("saveAmount")
        );

        const validTillValue =
            String(
                formData.get("validTill") || ""
            ).trim();

        /*
         * Arrays
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
            parseJSON<any[]>(
                formData.get("whyVisit"),
                []
            );

        /*
         * Travel Information
         */

        const travelInformation =
            parseJSON<
                TravelInformationItem[]
            >(
                formData.get(
                    "travelInformation"
                ),
                []
            );

        /*
         * What To Pack
         */

        const whatToPack =
            parseJSON<string[]>(
                formData.get("whatToPack"),
                []
            );

        /*
         * Itinerary
         */

        const rawItinerary =
            parseJSON<
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

        const itinerary =
            rawItinerary.map(
                ({
                    id: _id,
                    ...item
                }) => item
            );

        /*
         * Keywords
         */

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
         */

        const existingGallery =
            parseJSON<
                {
                    url: string;
                    publicId: string | null;
                }[]
            >(
                formData.get(
                    "existingGallery"
                ),
                []
            );

        /*
         * Removed gallery
         */

        const removedGalleryPublicIds =
            parseJSON<string[]>(
                formData.get(
                    "removedGalleryPublicIds"
                ),
                []
            );

        /*
         * Basic validation
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

        if (
            !isValidObjectId(destinationId)
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Invalid destination ID",
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
                    select: {
                        id: true,
                        name: true,
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
                !isValidObjectId(parentId)
            ) {
                return NextResponse.json(
                    {
                        success: false,
                        message:
                            "Invalid parent package ID",
                    },
                    { status: 400 }
                );
            }

            if (parentId === id) {
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
                        select: {
                            id: true,
                            destinationId:
                                true,
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

            if (
                parentPackage.destinationId !==
                destinationId
            ) {
                return NextResponse.json(
                    {
                        success: false,
                        message:
                            "Parent package must belong to the same destination",
                    },
                    { status: 400 }
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
                select: {
                    id: true,
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
         * Validate date
         */

        let validTill: Date | null = null;

        if (validTillValue) {
            const parsedDate =
                new Date(validTillValue);

            if (
                Number.isNaN(
                    parsedDate.getTime()
                )
            ) {
                return NextResponse.json(
                    {
                        success: false,
                        message:
                            "Invalid valid till date",
                    },
                    { status: 400 }
                );
            }

            validTill = parsedDate;
        }

        /*
         * Hero image
         */

        let heroImage =
            existingPackage.heroImage;

        const heroFile =
            formData.get("heroImage");
            const heroImageUrl = String(
                formData.get("heroImageUrl") || ""
            ).trim();

            const hasHeroFile =
                heroFile instanceof File && heroFile.size > 0;

            if (hasHeroFile && heroImageUrl) {
                return NextResponse.json(
                    {
                        success: false,
                        message: "Choose either an uploaded hero image or an image URL",
                    },
                    { status: 400 }
                );
            }

            if (heroImageUrl && !isValidImageUrl(heroImageUrl)) {
                return NextResponse.json(
                    {
                        success: false,
                        message: "Hero image URL must use HTTP or HTTPS",
                    },
                    { status: 400 }
                );
            }

            if (hasHeroFile && heroFile instanceof File) {
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
            } else if (heroImageUrl) {
                if (existingPackage.heroImage?.publicId) {
                    oldPublicIdsToDelete.push(
                        existingPackage.heroImage.publicId
                    );
                }

                heroImage = {
                    url: heroImageUrl,
                    publicId: null,
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

        const galleryUrls = parseJSON<string[]>(
            formData.get("galleryUrls"),
            []
        )
            .map((url) => url.trim())
            .filter(Boolean);

        if (galleryUrls.some((url) => !isValidImageUrl(url))) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Gallery image URLs must use HTTP or HTTPS",
                },
                { status: 400 }
            );
        }

        for (const file of validGalleryFiles) {
            validateImage(
                file,
                "Gallery image"
            );
        }

        const finalGalleryCount =
            existingGallery.length +
                validGalleryFiles.length +
                galleryUrls.length;

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

        for (
            const publicId of
            removedGalleryPublicIds
        ) {
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
                ...galleryUrls.map((url) => ({
                    url,
                    publicId: null,
                })),
            ...newGalleryUploads,
        ].filter(
            (image) =>
                    !image.publicId ||
                    !removedGalleryPublicIds.includes(image.publicId)
        );

        /*
         * Validation object
         */

        const validationData = {
            name,
            slug,
            category,
            type,
            occasion,

            destinationId,

            parentId:
                parentId || null,

            subtitle,
            description,
            location,

            latitude,
            longitude,

            duration,
            groupSize,
            idealTrip,
            budget,

            bestTimeToVisit,

            originalPrice,
            offerPrice,
            discount,
            saveAmount,

            validTill:
                validTillValue,

            rating:
                parseNumber(
                    formData.get("rating")
                ),

            reviewsCount:
                parseNumber(
                    formData.get(
                        "reviewsCount"
                    )
                ),

            highlights,
            inclusions,
            exclusions,

            whyVisit,

            travelInformation,

            whatToPack,

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
                        validation.error
                            .flatten()
                            .fieldErrors,
                },
                { status: 400 }
            );
        }

        const data =
            validation.data;

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
         * Update package
         */

        const updatedPackage =
            await prisma.package.update({
                where: {
                    id,
                },

                data: {
                    name:
                        data.name,

                    slug:
                        data.slug,

                    category:
                        data.category,

                    type:
                        data.type,

                    occasion:
                        data.occasion,

                    subtitle:
                        data.subtitle ||
                        null,

                    destinationId:
                        data.destinationId,

                    parentId:
                        data.parentId ||
                        null,

                    description:
                        data.description ||
                        null,

                    location:
                        data.location ||
                        null,

                    latitude:
                        data.latitude ??
                        null,

                    longitude:
                        data.longitude ??
                        null,

                    duration:
                        data.duration ||
                        null,

                    groupSize:
                        data.groupSize ||
                        null,

                    originalPrice:
                        data.originalPrice ??
                        null,
 

                    discount:
                        data.discount ??
                        null,

                    saveAmount:
                        data.saveAmount ??
                        null,

                    validTill,

                    idealTrip:
                        data.idealTrip ||
                        null,

                    budget:
                        data.budget ||
                        null,

                    bestTimeToVisit:
                        data.bestTimeToVisit,

                    rating:
                        data.rating ??
                        null,

                    reviewsCount:
                        data.reviewsCount ??
                        null,

                    highlights:
                        data.highlights,

                    inclusions:
                        data.inclusions,

                    exclusions:
                        data.exclusions,

                    whyVisit:
                        data.whyVisit,

                    travelInformation:
                        data.travelInformation,

                    whatToPack:
                        data.whatToPack,

                    itinerary:
                        data.itinerary,

                    keywords:
                        data.keywords,

                    metaTitle:
                        data.metaTitle ||
                        null,

                    metaDescription:
                        data.metaDescription ||
                        null,

                    isPublished:
                        data.isPublished,

                    isFeatured:
                        data.isFeatured,

                    publishedAt,

                    heroImage,

                    gallery: {
                        set: finalGallery,
                    },
                },
            });

        /*
         * Delete old Cloudinary assets
         */

        for (
            const publicId of
            [
                ...new Set(
                    oldPublicIdsToDelete
                ),
            ]
        ) {
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
         * Cloudinary assets.
         */

        await Promise.allSettled(
            newlyUploadedPublicIds.map(
                (publicId) =>
                    deleteFromCloudinary(
                        publicId
                    )
            )
        );

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