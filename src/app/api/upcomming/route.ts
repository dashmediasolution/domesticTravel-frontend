import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const packages = await prisma.package.findMany({
            where: {
                type: "UPCOMMING",
                isPublished: true,
            },

            select: {
                id: true,
                name: true,
                slug: true,
                category: true,
                type: true,
                occasion: true,
                subtitle: true,
                description: true,
                location: true,
                duration: true,
                groupSize: true,
                idealTrip: true,
                budget: true,
                originalPrice: true,
                discount: true,
                saveAmount: true,
                validTill: true,
                rating: true,
                reviewsCount: true,
                highlights: true,
                heroImage: true,
                gallery: true,
                isPublished: true,
                isFeatured: true,
                publishedAt: true,
                createdAt: true,

                destination: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
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
                count: packages.length,
                data: packages,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Get upcoming packages error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch upcoming packages",
            },
            { status: 500 }
        );
    }
}