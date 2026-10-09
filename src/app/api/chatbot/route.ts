
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const name = searchParams.get("name")?.trim();

        if (!name || name.length < 2) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please enter at least 2 characters to search.",
                    packages: [],
                },
                { status: 400 },
            );
        }

        if (name.length > 100) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Search query is too long.",
                    packages: [],
                },
                { status: 400 },
            );
        }

        const packages = await prisma.package.findMany({
            where: {
                isPublished: true,
                OR: [
                    {
                        name: {
                            contains: name,
                            mode: "insensitive",
                        },
                    },
                    {
                        description: {
                            contains: name,
                            mode: "insensitive",
                        },
                    },
                    {
                        location: {
                            contains: name,
                            mode: "insensitive",
                        },
                    },
                    {
                        destination: {
                            is: {
                                name: {
                                    contains: name,
                                    mode: "insensitive",
                                },
                            },
                        },
                    },
                ],
            },
            select: {
                name: true,
                slug: true,
                originalPrice: true,
                heroImage: true,
                location: true,
                duration: true,
                destination: {
                    select: {
                        name: true,
                        slug: true,
                    },
                },
            },
            orderBy: {
                name: "asc",
            },
            take: 10,
        });

        const formattedPackages = packages.map((item) => ({
            ...item,
            price: item.originalPrice,
        }));

        return NextResponse.json({
            success: true,
            message: formattedPackages.length
                ? "Packages found successfully."
                : "No matching packages found.",
            packages: formattedPackages,
        });
    } catch (error) {
        console.error("Chatbot package search error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to search packages right now.",
                packages: [],
            },
            { status: 500 },
        );
    }
}