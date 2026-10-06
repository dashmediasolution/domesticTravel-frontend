import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface RouteContext {
    params: Promise<{
        slug: string;
    }>;
}

export async function GET(
    request: NextRequest,
    { params }: RouteContext
) {
    try {
        const { slug } = await params;

        console.log("PACKAGE SLUG:", slug);

        if (!slug) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Package slug is required",
                },
                { status: 400 }
            );
        }

        const packageData = await prisma.package.findFirst({
            where: {
                slug,
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