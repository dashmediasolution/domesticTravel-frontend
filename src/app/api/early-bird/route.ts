import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const offers = await prisma.offer.findMany({
            where: {
                type: "EARLY_BIRD",
                isActive: true,
                package: {
                    isPublished: true,
                },
            },
            orderBy: {
                createdAt: "desc",
            },
            select: {
                id: true,
                title: true,
                slug: true,

                originalPrice: true,
                offerPrice: true,
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
                        description: true,
                        duration: true,
                        groupSize: true,
                        location: true,
                        idealTrip: true,
                        heroImage: true,
                    },
                },
               
            },
        });

        const formattedOffers = offers.map((offer) => ({
            id: offer.id,
            title: offer.title,
            slug: offer.slug,

            originalPrice: offer.originalPrice,
            offerPrice: offer.offerPrice,
            discount: offer.discount,
            saveAmount: offer.saveAmount,

            validTill: offer.endDate,
            badgeText: offer.badgeText,

            package: {
                id: offer.package.id,
                name: offer.package.name,
                slug: offer.package.slug,
                subtitle: offer.package.subtitle,
                description: offer.package.description,
                duration: offer.package.duration,
                groupSize: offer.package.groupSize,
                location: offer.package.location,
                idealTrip: offer.package.idealTrip,
                heroImage: offer.package.heroImage,
            },
        }));

        return NextResponse.json({
            success: true,
            data: formattedOffers,
        });
    } catch (error) {
        console.error("EARLY_BIRD_OFFERS_ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch early bird offers",
            },
            { status: 500 }
        );
    }
}