import { NextResponse } from "next/server";

import {prisma} from "@/lib/prisma"
 
export const runtime = "nodejs";

interface RouteParams {
    params: Promise<{
        slug: string;
    }>;
}

export async function GET(
    request: Request,
    { params }: RouteParams
) {
    try {
        const { slug } = await params;

        if (!slug) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Slug is required",
                },
                {
                    status: 400,
                }
            );
        }

        const blog =
            await prisma.blog.findUnique({
                where: {
                    slug,
                },
                include: {
                    category: true,
                },
            });

        if (!blog) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Blog not found",
                },
                {
                    status: 404,
                }
            );
        }

        return NextResponse.json(
            {
                success: true,
                data: blog,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error(
            "GET BLOG BY SLUG ERROR:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch blog",
            },
            {
                status: 500,
            }
        );
    }
}