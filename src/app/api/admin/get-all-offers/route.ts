import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(
            request.url
        );

        const page = Math.max(
            Number(searchParams.get("page")) || 1,
            1
        );

        const limit = Math.min(
            Math.max(
                Number(searchParams.get("limit")) || 10,
                1
            ),
            100
        );

        const search =
            searchParams.get("search")?.trim() || "";

        const skip = (page - 1) * limit;

        const where = search
            ? {
                  OR: [
                      {
                          title: {
                              contains: search,
                              mode: "insensitive" as const,
                          },
                      },
                      {
                          slug: {
                              contains: search,
                              mode: "insensitive" as const,
                          },
                      },
                      {
                          badgeText: {
                              contains: search,
                              mode: "insensitive" as const,
                          },
                      },
                  ],
              }
            : {};

        const [offers, total] =
            await Promise.all([
                prisma.offer.findMany({
                    where,
                    skip,
                    take: limit,
                    orderBy: {
                        createdAt: "desc",
                    },
                    include: {
                        package: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
                            },
                        },
                    },
                }),

                prisma.offer.count({
                    where,
                }),
            ]);

        return NextResponse.json(
            {
                success: true,
                data: offers,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(
                        total / limit
                    ),
                    hasNextPage:
                        page <
                        Math.ceil(total / limit),
                    hasPreviousPage: page > 1,
                },
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error(
            "GET ADMIN OFFERS ERROR:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch offers",
            },
            {
                status: 500,
            }
        );
    }
}