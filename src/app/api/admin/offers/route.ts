import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import { offerSchema } from "@/lib/validations/offer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function parseNumber(value: unknown) {
    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {
        return null;
    }

    const number = Number(value);

    return Number.isFinite(number)
        ? number
        : null;
}

export async function POST(
    request: NextRequest
) {
    try {
        const body = await request.json();

        const originalPrice =
            parseNumber(body.originalPrice);

        const offerPrice =
            parseNumber(body.offerPrice);

        const validationData = {
            title:
                String(body.title || "").trim(),

            slug:
                String(body.slug || "")
                    .trim()
                    .toLowerCase(),

            type:
                String(body.type || "").trim(),

            description:
                String(
                    body.description || ""
                ).trim(),

            packageId:
                String(
                    body.packageId || ""
                ).trim(),

            originalPrice,

            offerPrice,

            startDate:
                String(
                    body.startDate || ""
                ).trim(),

            endDate:
                String(
                    body.endDate || ""
                ).trim(),

            isActive:
                Boolean(body.isActive),

            isFeatured:
                Boolean(body.isFeatured),

            badgeText:
                String(
                    body.badgeText || ""
                ).trim(),
        };

        const validation =
            offerSchema.safeParse(
                validationData
            );

        if (!validation.success) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Validation failed",
                    errors:
                        validation.error
                            .flatten()
                            .fieldErrors,
                },
                { status: 400 }
            );
        }

        const data = validation.data;

        /*
         * Check package
         */

        const packageExists =
            await prisma.package.findUnique({
                where: {
                    id: data.packageId,
                },
                select: {
                    id: true,
                    name: true,
                },
            });

        if (!packageExists) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Package not found",
                },
                { status: 404 }
            );
        }

        /*
         * Check slug
         */

        const existingOffer =
            await prisma.offer.findUnique({
                where: {
                    slug: data.slug,
                },
                select: {
                    id: true,
                },
            });

        if (existingOffer) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "An offer with this slug already exists",
                },
                { status: 409 }
            );
        }

        /*
         * Dates
         */

        const startDate =
            new Date(data.startDate);

        const endDate =
            new Date(data.endDate);

        if (
            Number.isNaN(
                startDate.getTime()
            ) ||
            Number.isNaN(
                endDate.getTime()
            )
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Invalid offer dates",
                },
                { status: 400 }
            );
        }

        /*
         * Calculate pricing
         */

        let discount: number | null = null;
        let saveAmount: number | null = null;

        if (
            data.originalPrice !== null &&
            data.originalPrice !== undefined &&
            data.originalPrice > 0
        ) {
            saveAmount =
                Math.max(
                    data.originalPrice -
                        data.offerPrice,
                    0
                );

            discount =
                Math.round(
                    ((data.originalPrice -
                        data.offerPrice) /
                        data.originalPrice) *
                        100
                );
        }

        /*
         * Create offer
         */

        const offer =
            await prisma.offer.create({
                data: {
                    title: data.title,
                    slug: data.slug,
                    type: data.type,

                    description:
                        data.description ||
                        null,

                    packageId:
                        data.packageId,

                    originalPrice:
                        data.originalPrice,

                    offerPrice:
                        data.offerPrice,

                    discount,
                    saveAmount,

                    startDate,
                    endDate,

                    isActive:
                        data.isActive,

                    isFeatured:
                        data.isFeatured,

                    badgeText:
                        data.badgeText ||
                        null,
                },
            });

        return NextResponse.json(
            {
                success: true,
                message:
                    "Offer created successfully",
                data: offer,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(
            "CREATE_OFFER_ERROR:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Failed to create offer",
            },
            { status: 500 }
        );
    }
}