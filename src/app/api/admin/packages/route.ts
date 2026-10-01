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

type UploadedAsset = {
    url: string;
    publicId: string;
};

function isValidObjectId(value: string) {
    return /^[a-f\d]{24}$/i.test(value);
}

function parseJSON<T>(
    value: FormDataEntryValue | null,
    fallback: T
): T {
    if (typeof value !== "string" || !value.trim()) {
        return fallback;
    }

    try {
        return JSON.parse(value) as T;
    } catch {
        return fallback;
    }
}

function getNumber(
    value: FormDataEntryValue | null
): number | null {
    if (typeof value !== "string" || !value.trim()) {
        return null;
    }

    const parsed = Number(value);

    return Number.isFinite(parsed) ? parsed : null;
}

function getBoolean(
    value: FormDataEntryValue | null
) {
    return value === "true";
}

function validateFile(
    file: File,
    label: string
) {
    if (!file || file.size === 0) {
        throw new Error(`${label} is required`);
    }

    if (file.size > MAX_FILE_SIZE) {
        throw new Error(
            `${label} must be 7MB or smaller`
        );
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
        throw new Error(
            `${label} must be JPG, PNG or WEBP`
        );
    }
}

function isValidImageUrl(value: string) {
    try {
        const url = new URL(value);

        return (
            url.protocol === "http:" ||
            url.protocol === "https:"
        );
    } catch {
        return false;
    }
}

export async function POST(
    request: NextRequest
) {
    const uploadedAssets: string[] = [];

    try {
        const formData = await request.formData();

        /* =========================================================
           DESTINATION
        ========================================================= */

        const destinationId = String(
            formData.get("destinationId") || ""
        ).trim();

        if (!isValidObjectId(destinationId)) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "A valid destination is required",
                },
                { status: 400 }
            );
        }

        const destination =
            await prisma.destination.findUnique({
                where: {
                    id: destinationId,
                },
                select: {
                    id: true,
                    name: true,
                },
            });

        if (!destination) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Destination not found",
                },
                { status: 404 }
            );
        }

        /* =========================================================
           JSON FIELDS
        ========================================================= */

        const highlights = parseJSON<string[]>(
            formData.get("highlights"),
            []
        );

        const inclusions = parseJSON<string[]>(
            formData.get("inclusions"),
            []
        );

        const exclusions = parseJSON<string[]>(
            formData.get("exclusions"),
            []
        );

        const whyVisit = parseJSON<any[]>(
            formData.get("whyVisit"),
            []
        );

        const itinerary = parseJSON<any[]>(
            formData.get("itinerary"),
            []
        );

        const keywords = parseJSON<string[]>(
            formData.get("keywords"),
            []
        );

        const bestTimeToVisit =
            parseJSON<string[]>(
                formData.get("bestTimeToVisit"),
                []
            );

        const travelInformation =
            parseJSON<
                {
                    id: string;
                    title: string;
                    value: string;
                }[]
            >(
                formData.get("travelInformation"),
                []
            );

        const whatToPack = parseJSON<string[]>(
            formData.get("whatToPack"),
            []
        );

        /* =========================================================
           RAW DATA
        ========================================================= */

        const rawData = {
            name: String(
                formData.get("name") || ""
            ).trim(),

            slug: String(
                formData.get("slug") || ""
            ).trim(),

            category: String(
                formData.get("category") || ""
            ).trim(),

            type: String(
                formData.get("type") || "REGULAR"
            ),

            occasion: String(
                formData.get("occasion") || "NONE"
            ),

            destinationId,

            parentId:
                String(
                    formData.get("parentId") || ""
                ).trim() || null,

            subtitle:
                String(
                    formData.get("subtitle") || ""
                ).trim(),

            description:
                String(
                    formData.get("description") || ""
                ).trim(),

            location:
                String(
                    formData.get("location") || ""
                ).trim(),

            latitude: getNumber(
                formData.get("latitude")
            ),

            longitude: getNumber(
                formData.get("longitude")
            ),

            duration:
                String(
                    formData.get("duration") || ""
                ).trim(),

            groupSize:
                String(
                    formData.get("groupSize") || ""
                ).trim(),

            idealTrip:
                String(
                    formData.get("idealTrip") || ""
                ).trim(),

            budget:
                String(
                    formData.get("budget") || ""
                ).trim(),

            bestTimeToVisit,

            originalPrice: getNumber(
                formData.get("originalPrice")
            ),

            offerPrice: getNumber(
                formData.get("offerPrice")
            ),

            discount: null,

            saveAmount: null,

            validTill:
                String(
                    formData.get("validTill") || ""
                ).trim(),

            rating: getNumber(
                formData.get("rating")
            ),

            reviewsCount: getNumber(
                formData.get("reviewsCount")
            ),

            highlights,

            inclusions,

            exclusions,

            whyVisit,

            itinerary,

            travelInformation,

            whatToPack,

            metaTitle:
                String(
                    formData.get("metaTitle") || ""
                ).trim(),

            metaDescription:
                String(
                    formData.get("metaDescription") ||
                        ""
                ).trim(),

            keywords,

            isPublished: getBoolean(
                formData.get("isPublished")
            ),

            isFeatured: getBoolean(
                formData.get("isFeatured")
            ),
        };

        /* =========================================================
           VALIDATION
        ========================================================= */

        const validation =
            packageSchema.safeParse(rawData);

        if (!validation.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Validation failed",
                    errors:
                        validation.error.flatten(),
                },
                { status: 400 }
            );
        }

        const data = validation.data;

        /* =========================================================
           PARENT PACKAGE VALIDATION
        ========================================================= */

        if (
            data.parentId &&
            data.parentId === data.destinationId
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid parent package",
                },
                { status: 400 }
            );
        }

        if (data.parentId) {
            const parent =
                await prisma.package.findUnique({
                    where: {
                        id: data.parentId,
                    },
                    select: {
                        id: true,
                        destinationId: true,
                    },
                });

            if (!parent) {
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
                parent.destinationId !==
                data.destinationId
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

        /* =========================================================
           DUPLICATE SLUG
        ========================================================= */

        const existingPackage =
            await prisma.package.findFirst({
                where: {
                    destinationId:
                        data.destinationId,
                    slug: data.slug,
                },
                select: {
                    id: true,
                },
            });

        if (existingPackage) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "A package with this slug already exists for this destination",
                },
                { status: 409 }
            );
        }

        /* =========================================================
           HERO IMAGE
        ========================================================= */

        const heroImage =
            formData.get("heroImage");

        const heroImageUrl = String(
            formData.get("heroImageUrl") || ""
        ).trim();

        const hasHeroUpload =
            heroImage instanceof File &&
            heroImage.size > 0;

        const hasHeroUrl =
            Boolean(heroImageUrl);

        /*
         * Require either upload or URL.
         */

        if (
            !hasHeroUpload &&
            !hasHeroUrl
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Hero image or hero image URL is required",
                },
                { status: 400 }
            );
        }

        /*
         * Do not allow both at the same time.
         */

        if (
            hasHeroUpload &&
            hasHeroUrl
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Provide either a hero image upload or a hero image URL, not both",
                },
                { status: 400 }
            );
        }

        /*
         * Validate uploaded hero.
         */

        if (hasHeroUpload) {
            validateFile(
                heroImage,
                "Hero image"
            );
        }

        /*
         * Validate hero URL.
         */

        if (
            hasHeroUrl &&
            !isValidImageUrl(heroImageUrl)
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Hero image URL must be a valid HTTP or HTTPS URL",
                },
                { status: 400 }
            );
        }

        /* =========================================================
           GALLERY
        ========================================================= */

        const galleryFiles =
            formData
                .getAll("gallery")
                .filter(
                    (item): item is File =>
                        item instanceof File &&
                        item.size > 0
                );

        /*
         * URL gallery images.
         *
         * Frontend should send:
         *
         * formData.append(
         *     "galleryUrls",
         *     JSON.stringify([...])
         * );
         */

        const galleryUrls = parseJSON<string[]>(
            formData.get("galleryUrls"),
            []
        )
            .map((url) => url.trim())
            .filter(Boolean);

        /*
         * Validate gallery URLs.
         */

        for (const url of galleryUrls) {
            if (!isValidImageUrl(url)) {
                return NextResponse.json(
                    {
                        success: false,
                        message:
                            `Invalid gallery image URL: ${url}`,
                    },
                    { status: 400 }
                );
            }
        }

        /*
         * Total gallery images =
         *
         * uploaded files + URL images
         */

        const totalGalleryImages =
            galleryFiles.length +
            galleryUrls.length;

        if (
            totalGalleryImages >
            MAX_GALLERY_IMAGES
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: `Maximum ${MAX_GALLERY_IMAGES} gallery images are allowed`,
                },
                { status: 400 }
            );
        }

        /*
         * Validate uploaded gallery files.
         */

        for (const file of galleryFiles) {
            validateFile(
                file,
                "Gallery image"
            );
        }

        /* =========================================================
           UPLOAD HERO
        ========================================================= */

        let uploadedHero:
            | UploadedAsset
            | null = null;

        if (hasHeroUpload) {
            uploadedHero =
                await uploadBufferToCloudinary({
                    buffer: Buffer.from(
                        await heroImage.arrayBuffer()
                    ),
                    folder:
                        "domesticTravel/packages",
                });

            uploadedAssets.push(
                uploadedHero.publicId
            );
        }

        /* =========================================================
           UPLOAD GALLERY
        ========================================================= */

        const uploadedGallery: UploadedAsset[] =
            [];

        for (const file of galleryFiles) {
            const uploaded =
                await uploadBufferToCloudinary({
                    buffer: Buffer.from(
                        await file.arrayBuffer()
                    ),
                    folder:
                        "domesticTravel/packages",
                });

            uploadedGallery.push({
                url: uploaded.url,
                publicId:
                    uploaded.publicId,
            });

            uploadedAssets.push(
                uploaded.publicId
            );
        }

        /* =========================================================
           FINAL GALLERY
        ========================================================= */

        const finalGallery = [
            ...galleryUrls.map((url) => ({
                url,
                publicId: null,
            })),

            ...uploadedGallery.map(
                (image) => ({
                    url: image.url,
                    publicId:
                        image.publicId,
                })
            ),
        ];

        /* =========================================================
           PUBLISHED DATE
        ========================================================= */

        const publishedAt =
            data.isPublished
                ? new Date()
                : null;

        /* =========================================================
           HERO IMAGE DATA
        ========================================================= */

        const finalHeroImage =
            hasHeroUrl
                ? {
                      url: heroImageUrl,
                      publicId: null,
                  }
                : {
                      url: uploadedHero!.url,
                      publicId:
                          uploadedHero!.publicId,
                  };

        /* =========================================================
           CREATE PACKAGE
        ========================================================= */

        const created =
            await prisma.package.create({
                data: {
                    name: data.name,

                    slug: data.slug,

                    category:
                        data.category,

                    type: data.type,

                    occasion:
                        data.occasion,

                    destinationId:
                        data.destinationId,

                    parentId:
                        data.parentId || null,

                    subtitle:
                        data.subtitle ||
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

                    idealTrip:
                        data.idealTrip ||
                        null,

                    budget:
                        data.budget ||
                        null,

                    bestTimeToVisit:
                        data.bestTimeToVisit,

                    originalPrice:
                        data.originalPrice ??
                        null,

                    discount:
                        data.discount,

                    saveAmount:
                        data.saveAmount,

                    validTill:
                        data.validTill
                            ? new Date(
                                  data.validTill
                              )
                            : null,

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

                    heroImage:
                        finalHeroImage,

                    gallery:
                        finalGallery,

                    itinerary:
                        data.itinerary,

                    metaTitle:
                        data.metaTitle ||
                        null,

                    metaDescription:
                        data.metaDescription ||
                        null,

                    keywords:
                        data.keywords,

                    isPublished:
                        data.isPublished,

                    isFeatured:
                        data.isFeatured,

                    publishedAt,
                },
            });

        /* =========================================================
           SUCCESS
        ========================================================= */

        return NextResponse.json(
            {
                success: true,
                message:
                    "Package created successfully",
                data: created,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(
            "CREATE_PACKAGE_ERROR",
            error
        );

        /* =========================================================
           CLEANUP CLOUDINARY FILES
        ========================================================= */

        await Promise.allSettled(
            uploadedAssets.map(
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
                        : "Failed to create package",
            },
            { status: 500 }
        );
    }
}