import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const offers = await prisma.offer.findMany({
            where: {
                isActive: true,
                package: {
                    isPublished: true,
                },
            },

            select: {
                id: true,
                title: true,
                slug: true,
                offerPrice: true,
                originalPrice: true,
                discount: true,
                saveAmount: true,
                startDate: true,
                endDate: true,
                badgeText: true,

                package: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        subtitle: true,
                        location: true,
                        category: true,
                        heroImage: {
                            select: {
                                url: true,
                            },
                        },
                      
                    },
                },
            },

            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(
            {
                success: true,
                count: offers.length,
                offers,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Get offers error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch offers",
            },
            { status: 500 }
        );
    }
}