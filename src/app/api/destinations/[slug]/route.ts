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

                    include: {
                        faqs: {
                            orderBy: {
                                sortOrder: "asc",
                            },
                        },

                        offers: {
                            orderBy: {
                                createdAt: "desc",
                            },
                        },

                        children: {
                            orderBy: {
                                createdAt: "desc",
                            },
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

        return NextResponse.json(
            {
                success: true,
                data: destination,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Get destination by slug error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch destination",
            },
            { status: 500 }
        );
    }
}