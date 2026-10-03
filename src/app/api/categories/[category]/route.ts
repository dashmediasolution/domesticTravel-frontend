import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
    request: Request,
    {
        params,
    }: {
        params: Promise<{ category: string }>;
    }
) {
    try {
        const { category } = await params;

        if (!category) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Category is required",
                },
                {
                    status: 400,
                }
            );
        }

        const normalizedCategory =
            category.charAt(0).toUpperCase() +
            category.slice(1).toLowerCase();

        const packages =
            await prisma.package.findMany({
                where: {
                    category: normalizedCategory,
                    isPublished: true,
                },

                select: {
                    id: true,
                    name: true,
                    slug: true,
                    heroImage: true,
                    subtitle: true,
                    originalPrice: true,

                    destination: {
                        select: {
                            slug: true,
                        },
                    },
                },

                orderBy: [
                    {
                        isFeatured: "desc",
                    },
                    {
                        createdAt: "desc",
                    },
                ],
            });

        return NextResponse.json({
            success: true,
            count: packages.length,
            packages,
        });
    } catch (error) {
        console.error(
            "Get packages by category error:",
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
            {
                status: 500,
            }
        );
    }
}