import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RouteContext = {
    params: Promise<{
        slug: string;
    }>;
};

export async function GET(
    request: NextRequest,
    { params }: RouteContext
) {
    try {
        const { slug } = await params;

        if (!slug) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Destination slug is required",
                },
                { status: 400 }
            );
        }

        const now = new Date();

        const destination = await prisma.destination.findUnique({
            where: {
                slug,
            },

            include: {
                attractions: {
                    orderBy: {
                        sortOrder: "asc",
                    },
                },

                faqs: {
                    orderBy: {
                        sortOrder: "asc",
                    },
                },

                packages: {
                    orderBy: {
                        createdAt: "desc",
                    },

                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        subtitle: true,
                        originalPrice: true,
                        heroImage: true,

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
                                id: true,
                                title: true,
                                slug: true,
                                type: true,
                                offerPrice: true,
                                originalPrice: true,
                                saveAmount: true,
                                discount: true,
                                startDate: true,
                                endDate: true,
                                badgeText: true,
                            },

                            orderBy: {
                                createdAt: "desc",
                            },

                            take: 1,
                        },
                    },
                },
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

        const packages = destination.packages.map((pkg) => {
            const activeOffer = pkg.offers?.[0] ?? null;

            return {
                id: pkg.id,
                name: pkg.name,
                slug: pkg.slug,
                subtitle: pkg.subtitle,
                originalPrice: pkg.originalPrice,
                heroImage: pkg.heroImage,

                hasOffer: Boolean(activeOffer),

                offer: activeOffer,
            };
        });

        return NextResponse.json(
            {
                success: true,

                data: {
                    ...destination,
                    packages,
                },
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error("Destination API error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch destination",
                error:
                    error instanceof Error
                        ? error.message
                        : "Unknown error",
            },
            {
                status: 500,
            }
        );
    }
}