import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const destinations =
            await prisma.destination.findMany({
                where: {
                    isPublished: true,
                    isFeatured: true,
                },
                select: {
                    id: true,
                    name: true,
                    subtitle: true,
                    heroImage: true,
                    budget: true,
                    description: true,
                },
                orderBy: {
                    createdAt: "desc",
                },
            });

        return NextResponse.json(
            {
                success: true,
                destinations,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(
            "Get featured destinations error:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message:
                    "Failed to fetch featured destinations",
            },
            { status: 500 }
        );
    }
}