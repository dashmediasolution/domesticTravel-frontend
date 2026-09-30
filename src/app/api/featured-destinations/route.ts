import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const destinations = await prisma.destination.findMany({
            where: {
                isPublished: true,
                isFeatured: true,
            },
            select: {
                id: true,
                name: true,
                subtitle: true,
                heroImage: true,

                packages: {
                    where: {
                        isPublished: true,
                    },
                    select: {
                        originalPrice: true,
                        rating: true,
                    },
                    orderBy: {
                        originalPrice: "asc",
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        const data = destinations.map((destination) => {
            const packages = destination.packages;

            const packageWithPrice = packages.find(
                (pkg) => pkg.originalPrice !== null
            );

            const packageWithRating = packages.find(
                (pkg) => pkg.rating !== null
            );

            return {
                id: destination.id,
                name: destination.name,
                subtitle: destination.subtitle,
                heroImage: destination.heroImage,

                price: packageWithPrice?.originalPrice ?? null,
                rating: packageWithRating?.rating ?? null,
            };
        });

        return NextResponse.json(
            {
                success: true,
                data,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Get featured destinations error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch featured destinations",
            },
            { status: 500 }
        );
    }
}