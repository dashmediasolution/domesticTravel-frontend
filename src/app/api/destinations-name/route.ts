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
                name: true,
            },
            distinct: ["name"],
            orderBy: {
                name: "asc",
            },
        });

        const data = destinations
            .map((item) => item.name.trim())
            .filter(Boolean);

        return NextResponse.json(
            {
                success: true,
                data,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Get destination error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch destintaions",
            },
            { status: 500 }
        );
    }
}