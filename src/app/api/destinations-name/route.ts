import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const destinations = await prisma.destination.findMany({
            where: {
                isPublished: true,
            },
            select: {
                id: true,
                name: true,
                slug: true,
                subtitle: true,
                description: true,
                location: true,
                idealTrip: true,
                budget: true,
                activities: true,
                bestTimeToVisit: true,
                heroImage: true,
                gallery: true,
                metaTitle: true,
                metaDescription: true,
                keywords: true,
                isPublished: true,
                isFeatured: true,
                publishedAt: true,
                whyVisit: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(
            {
                success: true,
                data: destinations,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Get all destinations error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch destinations",
            },
            { status: 500 }
        );
    }
}