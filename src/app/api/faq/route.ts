import { NextRequest, NextResponse } from "next/server";
 
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";


export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        const destinationSlug = searchParams.get("destination");
        const packageSlug = searchParams.get("package");

        if (!destinationSlug && !packageSlug) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Either destination or package slug is required",
                },
                { status: 400 }
            );
        }

        // Package FAQ requires destination + package slug
        if (packageSlug && !destinationSlug) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Destination slug is required when fetching package FAQs",
                },
                { status: 400 }
            );
        }

        const destination = await prisma.destination.findUnique({
            where: {
                slug: destinationSlug!,
            },
            select: {
                id: true,
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

        let faqs;

        // Package FAQs
        if (packageSlug) {
            const packageData = await prisma.package.findUnique({
                where: {
                    destinationId_slug: {
                        destinationId: destination.id,
                        slug: packageSlug,
                    },
                },
                select: {
                    id: true,
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

            faqs = await prisma.fAQ.findMany({
                where: {
                    packageId: packageData.id,
                },
                orderBy: {
                    sortOrder: "asc",
                },
            });
        } else {
            // Destination FAQs
            faqs = await prisma.fAQ.findMany({
                where: {
                    destinationId: destination.id,
                },
                orderBy: {
                    sortOrder: "asc",
                },
            });
        }

        return NextResponse.json(
            {
                success: true,
                data: faqs,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Get FAQs error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch FAQs",
            },
            { status: 500 }
        );
    }
}