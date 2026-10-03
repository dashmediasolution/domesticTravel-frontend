import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;

        const offer = await prisma.offer.findFirst({
            where: {
                slug,
            },

            include: {
                package: true,
            },
        });

        if (!offer) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Offer not found",
                },
                {
                    status: 404,
                }
            );
        }

        return NextResponse.json({
            success: true,
            offer,
        });
    } catch (error) {
        console.error("Get offer by slug error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch offer",
            },
            {
                status: 500,
            }
        );
    }
}