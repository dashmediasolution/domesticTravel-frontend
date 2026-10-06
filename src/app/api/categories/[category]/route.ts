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

        const now = new Date();

        const packages = await prisma.package.findMany({
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

                offers: {
                    where: {
                        isActive: true,
                        startDate: {
                            lte: now,
                        },
                        endDate: {
                            gte: now,
                        },
                    },

                    select: {
                        slug: true,
                        title: true,
                        offerPrice: true,
                        originalPrice: true,
                        discount: true,
                        saveAmount: true,
                        badgeText: true,
                    },

                    orderBy: [
                        {
                            isFeatured: "desc",
                        },
                        {
                            offerPrice: "asc",
                        },
                    ],

                    take: 1,
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

        const data = packages.map((pkg) => {
            const offer = pkg.offers[0] ?? null;

            return {
                id: pkg.id,
                name: pkg.name,
                slug: pkg.slug,
                heroImage: pkg.heroImage,
                subtitle: pkg.subtitle,
                originalPrice: pkg.originalPrice,

                destination: pkg.destination,

                hasOffer: !!offer,

                offer: offer
                    ? {
                          slug: offer.slug,
                          title: offer.title,
                          offerPrice: offer.offerPrice,
                          originalPrice: offer.originalPrice,
                          discount: offer.discount,
                          saveAmount: offer.saveAmount,
                          badgeText: offer.badgeText,
                      }
                    : null,
            };
        });

        return NextResponse.json({
            success: true,
            count: data.length,
            packages: data,
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