import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
    request: NextRequest,
    context: {
        params: Promise<{ id: string }>;
    }
) {
    try {
        const { id } = await context.params;

        if (!id || !/^[a-f\d]{24}$/i.test(id)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid package ID",
                },
                { status: 400 }
            );
        }

        const packageData =
            await prisma.package.findUnique({
                where: {
                    id,
                },
            });

        if (!packageData) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Package not found",
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                data: packageData,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(
            "GET_PACKAGE_ERROR:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Failed to fetch package",
            },
            { status: 500 }
        );
    }
}