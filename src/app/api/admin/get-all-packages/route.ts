import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 50;

export async function GET(request: NextRequest) {
    try {
        const { searchParams } =
            new URL(request.url);

        const pageParam = Number(
            searchParams.get("page") || "1"
        );

        const limitParam = Number(
            searchParams.get("limit") ||
                DEFAULT_LIMIT
        );

        const search =
            searchParams.get("search")?.trim() || "";

        const destinationId =
            searchParams
                .get("destinationId")
                ?.trim() || "";

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

        const where: {
            name?: {
                contains: string;
                mode: "insensitive";
            };
            destinationId?: string;
        } = {};

        if (search) {
            where.name = {
                contains: search,
                mode: "insensitive",
            };
        }

        if (destinationId) {
            where.destinationId =
                destinationId;
        }

        const [packages, total] =
            await prisma.$transaction([
                prisma.package.findMany({
                    where,

                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        category: true,

                        destinationId: true,

                        heroImage: true,

                        originalPrice: true,
                         discount: true,
                        saveAmount: true,

                        duration: true,
                        groupSize: true,

                        isPublished: true,
                        isFeatured: true,

                        createdAt: true,
                        updatedAt: true,
                    },

                    orderBy: {
                        createdAt: "desc",
                    },

                    skip,
                    take: limit,
                }),

                prisma.package.count({
                    where,
                }),
            ]);

        const totalPages =
            Math.ceil(total / limit);

        return NextResponse.json(
            {
                success: true,
                data: packages,

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
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(
            "GET_ALL_PACKAGES_ERROR:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Failed to fetch packages",
            },
            { status: 500 }
        );
    }
}