import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import {
    deleteFromCloudinary,
    uploadBufferToCloudinary,
} from "@/lib/cloudinary-upload";

import { bannerSchema } from "@/lib/validations/banner";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILE_SIZE = 7 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

const CLOUDINARY_FOLDER = "domesticTravel/banners";

const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 50;

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(
            request.url
        );

        const pageParam = Number(
            searchParams.get("page") ?? "1"
        );

        const limitParam = Number(
            searchParams.get("limit") ??
                DEFAULT_LIMIT
        );

        const search =
            searchParams.get("search")?.trim() ?? "";

        const page =
            Number.isFinite(pageParam) &&
            pageParam > 0
                ? Math.floor(pageParam)
                : 1;

        const limit =
            Number.isFinite(limitParam) &&
            limitParam > 0
                ? Math.min(
                      Math.floor(limitParam),
                      MAX_LIMIT
                  )
                : DEFAULT_LIMIT;

        const skip = (page - 1) * limit;

        const where = search
            ? {
                  title: {
                      contains: search,
                      mode: "insensitive" as const,
                  },
              }
            : {};

        const [banners, total] =
            await Promise.all([
                prisma.banner.findMany({
                    where,

                    select: {
                        id: true,
                        title: true,
                        imageUrl: true,
                        targetType: true,
                        targetUrl: true,
                        isActive: true,
                        isFeatured: true,
                        startDate: true,
                        endDate: true,
                        sortOrder: true,
                    },

                    orderBy: [
                        {
                            sortOrder: "asc",
                        },
                        {
                            createdAt: "desc",
                        },
                    ],

                    skip,
                    take: limit,
                }),

                prisma.banner.count({
                    where,
                }),
            ]);

        const totalPages =
            Math.ceil(total / limit);

        return NextResponse.json({
            success: true,

            data: banners,

            pagination: {
                page,
                limit,
                total,
                totalPages,
                hasNextPage:
                    page < totalPages,
                hasPreviousPage:
                    page > 1,
            },
        });
    } catch (error) {
        console.error(
            "GET_BANNERS_ERROR:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch banners",
            },
            {
                status: 500,
            }
        );
    }
}

export async function POST(request: NextRequest) {
    let uploadedPublicId: string | null = null;

    try {
        const formData = await request.formData();

        const title = String(
            formData.get("title") ?? ""
        ).trim();

        const altText = String(
            formData.get("altText") ?? ""
        ).trim();

        const targetType = String(
            formData.get("targetType") ?? ""
        );

        const targetUrl = String(
            formData.get("targetUrl") ?? ""
        ).trim();

        const isActive =
            String(
                formData.get("isActive") ?? "true"
            ) === "true";

        const isFeatured =
            String(
                formData.get("isFeatured") ?? "false"
            ) === "true";

        const startDate = String(
            formData.get("startDate") ?? ""
        );

        const endDate = String(
            formData.get("endDate") ?? ""
        );

        const sortOrder = Number(
            formData.get("sortOrder") ?? 0
        );

        const validation = bannerSchema.safeParse({
            title,
            altText,
            targetType,
            targetUrl,
            isActive,
            isFeatured,
            startDate,
            endDate,
            sortOrder,
        });

        if (!validation.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Validation failed",
                    errors: validation.error.flatten(),
                },
                { status: 400 }
            );
        }

        const data = validation.data;

        const image = formData.get("image");

        if (!(image instanceof File)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Banner image is required",
                },
                { status: 400 }
            );
        }

        if (image.size === 0) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Banner image cannot be empty",
                },
                { status: 400 }
            );
        }

        if (image.size > MAX_FILE_SIZE) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Banner image must not exceed 5MB",
                },
                { status: 400 }
            );
        }

        if (
            !ALLOWED_IMAGE_TYPES.includes(
                image.type
            )
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Only JPG, PNG and WEBP images are allowed",
                },
                { status: 400 }
            );
        }

        const buffer = Buffer.from(
            await image.arrayBuffer()
        );

        const uploadResult =
            await uploadBufferToCloudinary({
                buffer,
                folder: CLOUDINARY_FOLDER,
            });

        uploadedPublicId =
            uploadResult.publicId;

        const banner = await prisma.banner.create({
            data: {
                title: data.title,

                imageUrl: uploadResult.url,

                publicId:
                    uploadResult.publicId,

                altText:
                    data.altText || null,

                targetType:
                    data.targetType,

                targetUrl:
                    data.targetUrl,

                isActive:
                    data.isActive,

                isFeatured:
                    data.isFeatured,

                startDate:
                    data.startDate
                        ? new Date(
                              data.startDate
                          )
                        : null,

                endDate:
                    data.endDate
                        ? new Date(
                              data.endDate
                          )
                        : null,

                sortOrder:
                    data.sortOrder,
            },
        });

        return NextResponse.json(
            {
                success: true,
                message:
                    "Banner created successfully",
                data: banner,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(
            "CREATE_BANNER_ERROR:",
            error
        );

        if (uploadedPublicId) {
            try {
                await deleteFromCloudinary(
                    uploadedPublicId
                );
            } catch (cleanupError) {
                console.error(
                    "BANNER_CLOUDINARY_CLEANUP_ERROR:",
                    cleanupError
                );
            }
        }

        return NextResponse.json(
            {
                success: false,
                message:
                    "Failed to create banner",
            },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Banner ID is required",
                },
                { status: 400 }
            );
        }

        const banner = await prisma.banner.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                publicId: true,
            },
        });

        if (!banner) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Banner not found",
                },
                { status: 404 }
            );
        }

        await prisma.banner.delete({
            where: {
                id: banner.id,
            },
        });

        try {
            if (banner.publicId) {
                await deleteFromCloudinary(banner.publicId);
            }
        } catch (cloudinaryError) {
            console.error(
                "Cloudinary banner deletion failed:",
                cloudinaryError
            );

            return NextResponse.json(
                {
                    success: true,
                    message:
                        "Banner deleted successfully, but the Cloudinary image could not be deleted",
                    warning: true,
                },
                { status: 200 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Banner deleted successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Delete banner error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to delete banner",
            },
            { status: 500 }
        );
    }
}