import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        const category = searchParams.get("category")?.trim();

        if (!category) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Category is required",
                },
                { status: 400 }
            );
        }

        const packages = await prisma.package.findMany({
            where: {
                category: {
                    equals: category,
                    mode: "insensitive",
                },
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
                inclusions: true,
                exclusions: true,
                whyVisit: true,
                heroImage: true,
                gallery: true,
                travelInformation: true,
                whatToPack: true,
                metaTitle: true,
                metaDescription: true,
                keywords: true,
                isPublished: true,
                isFeatured: true,
                publishedAt: true,
                createdAt: true,
                updatedAt: true,

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
                data: packages,
                count: packages.length,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Get packages by category error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch packages",
            },
            { status: 500 }
        );
    }
}