import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        const page = Math.max(
            Number(searchParams.get("page") || "1"),
            1
        );

        const requestedLimit = Number(
            searchParams.get("limit") || "12"
        );

        const limit = Math.min(
            Math.max(requestedLimit, 1),
            50
        );

        const search =
            searchParams.get("search")?.trim() || "";

        const category =
            searchParams.get("category")?.trim() || "";

        const skip = (page - 1) * limit;

        const where = {
            isPublished: true,

            ...(search
                ? {
                      OR: [
                          {
                              title: {
                                  contains: search,
                                  mode: "insensitive" as const,
                              },
                          },
                          {
                              excerpt: {
                                  contains: search,
                                  mode: "insensitive" as const,
                              },
                          },
                      ],
                  }
                : {}),

            ...(category &&
            category !== "All Blogs"
                ? {
                      category: {
                          name: category,
                      },
                  }
                : {}),
        };

        const [
            blogs,
            total,
            categories,
        ] = await Promise.all([
            prisma.blog.findMany({
                where,
                include: {
                    category: true,
                },
                orderBy: {
                    publishedAt: "desc",
                },
                skip,
                take: limit,
            }),

            prisma.blog.count({
                where,
            }),

            prisma.blogCategory.findMany({
                orderBy: {
                    name: "asc",
                },
            }),
        ]);

        const categoryCounts =
            await Promise.all(
                categories.map(async (item) => {
                    const count =
                        await prisma.blog.count({
                            where: {
                                isPublished: true,
                                categoryId: item.id,
                            },
                        });

                    return {
                        id: item.id,
                        name: item.name,
                        count,
                    };
                })
            );

        const totalPages = Math.ceil(
            total / limit
        );

        return NextResponse.json({
            success: true,

            data: {
                blogs,

                categories:
                    categoryCounts,

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
        });
    } catch (error) {
        console.error(
            "SEARCH_BLOGS_API_ERROR:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch blogs",
            },
            {
                status: 500,
            }
        );
    }
}