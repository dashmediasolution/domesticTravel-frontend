 import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const querySchema = z.object({
    page: z.coerce
        .number()
        .int()
        .min(1)
        .default(1),

    limit: z.coerce
        .number()
        .int()
        .min(1)
        .max(50)
        .default(10),

    search: z
        .string()
        .trim()
        .max(100)
        .default(""),
});

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        const parsedQuery = querySchema.safeParse({
            page: searchParams.get("page") ?? undefined,
            limit: searchParams.get("limit") ?? undefined,
            search: searchParams.get("search") ?? undefined,
        });

        if (!parsedQuery.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid query parameters",
                    errors: parsedQuery.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        const { page, limit, search } = parsedQuery.data;

        const skip = (page - 1) * limit;

        const where = search
            ? {
                  name: {
                      contains: search,
                      mode: "insensitive" as const,
                  },
              }
            : undefined;

        const [destinations, total] = await Promise.all([
            prisma.destination.findMany({
                where,

                select: {
                    id: true,
                    name: true,
                    heroImage: true,
                    budget: true,
                    createdAt: true,

                    _count: {
                        select: {
                            packages: true,
                        },
                    },
                },

                orderBy: [
                    {
                        createdAt: "desc",
                    },
                    {
                        id: "desc",
                    },
                ],

                skip,
                take: limit,
            }),

            prisma.destination.count({
                where,
            }),
        ]);

        const totalPages = Math.ceil(total / limit);

        const data = destinations.map((destination) => ({
            id: destination.id,
            name: destination.name,
            heroImage: destination.heroImage,
            budget: destination.budget,
            createdAt: destination.createdAt,
            totalPackages: destination._count.packages,
        }));

        return NextResponse.json(
            {
                success: true,
                data,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages,
                    hasNextPage: page < totalPages,
                    hasPreviousPage: page > 1,
                },
            },
            {
                status: 200,
                headers: {
                    "Cache-Control": "no-store",
                },
            }
        );
    } catch (error) {
        console.error(
            "GET /api/admin/get-all-destinations error:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch destinations",
            },
            { status: 500 }
        );
    }
}
 
