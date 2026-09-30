import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const categories = await prisma.package.findMany({
            where: {
                isPublished: true,
            },
            select: {
                category: true,
            },
            distinct: ["category"],
            orderBy: {
                category: "asc",
            },
        });

        const data = categories
            .map((item) => item.category.trim())
            .filter(Boolean);

        return NextResponse.json(
            {
                success: true,
                data,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Get categories error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch categories",
            },
            { status: 500 }
        );
    }
}