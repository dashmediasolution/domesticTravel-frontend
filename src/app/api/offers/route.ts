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
                        heroImage: true,

                        destination: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
                            },
                        },
                    },
                },
            },

            orderBy: {
                createdAt: "desc",
            },
        });

        const data = offers.map((offer) => ({
            id: offer.id,
            title: offer.title,
            slug: offer.slug,

            subtitle: offer.package.subtitle,

            image: offer.package.heroImage,

            price: offer.offerPrice,
            originalPrice: offer.originalPrice,
            discount: offer.discount,
            saveAmount: offer.saveAmount,

            badgeText: offer.badgeText,

            startDate: offer.startDate,
            endDate: offer.endDate,

            package: {
                id: offer.package.id,
                name: offer.package.name,
                slug: offer.package.slug,
            },

            destination: offer.package.destination,
        }));

        return NextResponse.json(
            {
                success: true,
                count: data.length,
                data,
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