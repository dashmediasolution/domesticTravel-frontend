import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import { packageSchema } from "@/lib/validations/package";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_IMAGES = 15;

const ALLOWED_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
];

function slugify(value: string) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

async function uploadToCloudinary(
    file: File,
    folder: string
): Promise<{
    url: string;
    publicId: string;
}> {
    const buffer = Buffer.from(await file.arrayBuffer());

    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: "image",
            },
            (error, result) => {
                if (error || !result) {
                    reject(
                        error ||
                            new Error("Cloudinary upload failed")
                    );
                    return;
                }

                resolve({
                    url: result.secure_url,
                    publicId: result.public_id,
                });
            }
        );

        stream.end(buffer);
    });
}

async function deleteCloudinaryImages(
    publicIds: string[]
) {
    if (!publicIds.length) return;

    await Promise.allSettled(
        publicIds.map((publicId) =>
            cloudinary.uploader.destroy(publicId)
        )
    );
}

export async function POST(request: NextRequest) {
    const uploadedPublicIds: string[] = [];

    try {
        /*
         * Add your existing NextAuth admin/session check here.
         *
         * Example:
         *
         * const session = await auth();
         *
         * if (!session?.user?.isAdmin) {
         *     return NextResponse.json(
         *         {
         *             success: false,
         *             message: "Unauthorized",
         *         },
         *         { status: 401 }
         *     );
         * }
         */

        const formData = await request.formData();

        const rawData = {
            name: formData.get("name"),
            slug: formData.get("slug"),
            category: formData.get("category"),

            subtitle: formData.get("subtitle"),
            description: formData.get("description"),

            location: formData.get("location"),
            duration: formData.get("duration"),
            groupSize: formData.get("groupSize"),

            originalPrice: formData.get("originalPrice"),
            offerPrice: formData.get("offerPrice"),
            discount: formData.get("discount"),
            saveAmount: formData.get("saveAmount"),

            validTill: formData.get("validTill"),

            rating: formData.get("rating"),
            reviewsCount: formData.get("reviewsCount"),

            idealTrip: formData.get("idealTrip"),
            budget: formData.get("budget"),

            bestTimeToVisit: formData.get(
                "bestTimeToVisit"
            ),

            highlights: JSON.parse(
                String(
                    formData.get("highlights") || "[]"
                )
            ),

            inclusions: JSON.parse(
                String(
                    formData.get("inclusions") || "[]"
                )
            ),

            exclusions: JSON.parse(
                String(
                    formData.get("exclusions") || "[]"
                )
            ),

            whyVisitTitle: formData.get(
                "whyVisitTitle"
            ),

            whyVisitDescription: formData.get(
                "whyVisitDescription"
            ),

            whyVisitHighlights: JSON.parse(
                String(
                    formData.get(
                        "whyVisitHighlights"
                    ) || "[]"
                )
            ),

            itinerary: JSON.parse(
                String(
                    formData.get("itinerary") || "[]"
                )
            ),

            metaTitle: formData.get("metaTitle"),

            metaDescription: formData.get(
                "metaDescription"
            ),

            keywords: JSON.parse(
                String(
                    formData.get("keywords") || "[]"
                )
            ),

            isPublished:
                formData.get("isPublished") === "true",

            isFeatured:
                formData.get("isFeatured") === "true",
        };

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

        const slug = slugify(data.slug);

        const existingPackage =
            await prisma.package.findUnique({
                where: {
                    slug,
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
                        "A package with this slug already exists",
                },
                { status: 409 }
            );
        }

        if (
            data.offerPrice !== undefined &&
            data.originalPrice !== undefined &&
            data.offerPrice >
                data.originalPrice
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Offer price cannot be greater than original price",
                },
                { status: 400 }
            );
        }

        const files = formData
            .getAll("images")
            .filter(
                (item): item is File =>
                    item instanceof File &&
                    item.size > 0
            );

        if (files.length === 0) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "At least one package image is required",
                },
                { status: 400 }
            );
        }

        if (files.length > MAX_IMAGES) {
            return NextResponse.json(
                {
                    success: false,
                    message: `Maximum ${MAX_IMAGES} images are allowed`,
                },
                { status: 400 }
            );
        }

        for (const file of files) {
            if (
                !ALLOWED_TYPES.includes(
                    file.type
                )
            ) {
                return NextResponse.json(
                    {
                        success: false,
                        message: `Invalid image type: ${file.name}`,
                    },
                    { status: 400 }
                );
            }

            if (file.size > MAX_FILE_SIZE) {
                return NextResponse.json(
                    {
                        success: false,
                        message: `${file.name} exceeds the 5MB limit`,
                    },
                    { status: 400 }
                );
            }
        }

        /*
         * Upload images to Cloudinary
         */
        const imageData: {
            url: string;
            publicId: string;
        }[] = [];

        for (
            let index = 0;
            index < files.length;
            index++
        ) {
            const uploaded =
                await uploadToCloudinary(
                    files[index],
                    "domesticTravel/packages"
                );

            uploadedPublicIds.push(
                uploaded.publicId
            );

            imageData.push({
                url: uploaded.url,
                publicId: uploaded.publicId,
            });
        }

        /*
         * Package data
         */
        const packageData = {
            name: data.name,

            slug,

            category: data.category,

            subtitle:
                data.subtitle || null,

            description:
                data.description || null,

            location:
                data.location || null,

            duration:
                data.duration || null,

            groupSize:
                data.groupSize || null,

            originalPrice:
                data.originalPrice ?? null,

            offerPrice:
                data.offerPrice ?? null,

            discount:
                data.discount ?? null,

            saveAmount:
                data.saveAmount ?? null,

            validTill: data.validTill
                ? new Date(data.validTill)
                : null,

            rating:
                data.rating ?? null,

            reviewsCount:
                data.reviewsCount ?? null,

            idealTrip:
                data.idealTrip || null,

            budget:
                data.budget || null,

            bestTimeToVisit:
                data.bestTimeToVisit || null,

            highlights:
                data.highlights,

            inclusions:
                data.inclusions,

            exclusions:
                data.exclusions,

            whyVisitTitle:
                data.whyVisitTitle || null,

            whyVisitDescription:
                data.whyVisitDescription || null,

            whyVisitHighlights:
                data.whyVisitHighlights,

            metaTitle:
                data.metaTitle || null,

            metaDescription:
                data.metaDescription || null,

            keywords:
                data.keywords,

            isPublished:
                data.isPublished,

            isFeatured:
                data.isFeatured,

            /*
             * First uploaded image becomes hero image
             */
            heroImage:
                imageData[0]?.url || null,

            /*
             * Composite type
             */
            gallery:
                imageData,

            /*
             * Composite type
             */
            itinerary:
                data.itinerary.map(
                    (item) => ({
                        day: item.day,

                        title: item.title,

                        description:
                            item.description ||
                            null,

                        activities:
                            item.activities,

                        meals:
                            item.meals,

                        overnight:
                            item.overnight ||
                            null,
                    })
                ),
        };

        /*
         * Create package
         */
        const createdPackage =
            await prisma.package.create({
                data: packageData,
            });

        /*
         * Success
         */
        return NextResponse.json(
            {
                success: true,
                message:
                    "Package created successfully",
                data: createdPackage,
            },
            { status: 201 }
        );
    } catch (error) {
        /*
         * If database creation fails after
         * Cloudinary uploads, remove uploaded images.
         */
        await deleteCloudinaryImages(
            uploadedPublicIds
        );

        console.error(
            "CREATE_PACKAGE_ERROR:",
            error
        );

        if (
            error instanceof z.ZodError
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Invalid package data",
                    errors:
                        error.flatten(),
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: false,
                message:
                    "Something went wrong while creating the package",
            },
            { status: 500 }
        );
    }
}