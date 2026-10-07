import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface RouteContext {
    params: Promise<{
        locationSlug: string;
        packageSlug: string;
    }>;
}

export async function GET(
    request: NextRequest,
    { params }: RouteContext
) {
    try {
        const { locationSlug, packageSlug } = await params;

        if (!locationSlug) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Destination slug is required",
                },
                { status: 400 }
            );
        }

        if (!packageSlug) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Package slug is required",
                },
                { status: 400 }
            );
        }

        // Find destination first
        const destination = await prisma.destination.findFirst({
            where: {
                slug: locationSlug,
                isPublished: true,
            },
            select: {
                id: true,
                name: true,
                slug: true,
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

        // Find package belonging to this destination
        const packageData = await prisma.package.findFirst({
            where: {
                slug: packageSlug,
                destinationId: destination.id,
                isPublished: true,
            },
            include: {
                faqs: {
                    orderBy: {
                        sortOrder: "asc",
                    },
                },

                offers: {
                    where: {
                        isActive: true,
                    },
                    orderBy: {
                        endDate: "asc",
                    },
                },
            },
        });

        if (!packageData) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Package not found for this destination",
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
        console.error("GET PACKAGE ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch package",
            },
            { status: 500 }
        );
    }
}