import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RouteContext = {
    params: Promise<{
        id: string;
    }>;
};

export async function DELETE(
    request: NextRequest,
    context: RouteContext
) {
    try {
        const { id } = await context.params;

        if (!id) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Offer ID is required",
                },
                {
                    status: 400,
                }
            );
        }

        const existingOffer =
            await prisma.offer.findUnique({
                where: {
                    id,
                },
                select: {
                    id: true,
                },
            });

        if (!existingOffer) {
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

        await prisma.offer.delete({
            where: {
                id,
            },
        });

        return NextResponse.json(
            {
                success: true,
                message:
                    "Offer deleted successfully",
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error(
            "DELETE ADMIN OFFER ERROR:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message: "Failed to delete offer",
            },
            {
                status: 500,
            }
        );
    }
}