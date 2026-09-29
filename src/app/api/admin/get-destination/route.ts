import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isValidObjectId(value: string) {
    return /^[a-f\d]{24}$/i.test(value);
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const destinationId = searchParams.get("id");

        if (!destinationId) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Destination id is required",
                },
                { status: 400 }
            );
        }

        if (!isValidObjectId(destinationId)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "A valid destination id is required",
                },
                { status: 400 }
            );
        }

        const destination =
            await prisma.destination.findUnique({
                where: {
                    id: destinationId,
                },
                include: {
                    attractions: {
                        orderBy: {
                            sortOrder: "asc",
                        },
                    },
                    _count: {
                        select: {
                            packages: true,
                        },
                    },
                },
            });

        if (!destination) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Destination not found",
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Destination fetched successfully",
                data: destination,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(
            "GET /api/admin/get-destination error:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch destination",
            },
            { status: 500 }
        );
    }
}