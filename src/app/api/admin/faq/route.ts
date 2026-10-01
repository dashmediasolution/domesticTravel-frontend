import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const faqItemSchema = z.object({
    question: z
        .string()
        .trim()
        .min(5, "Question must be at least 5 characters")
        .max(300, "Question must not exceed 300 characters"),

    answer: z
        .string()
        .trim()
        .min(5, "Answer must be at least 5 characters")
        .max(5000, "Answer must not exceed 5000 characters"),


});

const createFAQsSchema = z
    .object({
        destinationId: z
            .string()
            .trim()
            .optional()
            .or(z.literal("")),

        packageId: z
            .string()
            .trim()
            .optional()
            .or(z.literal("")),

        faqs: z
            .array(faqItemSchema)
            .min(1, "At least one FAQ is required")
            .max(50, "You can create a maximum of 50 FAQs at once"),
    })
    .superRefine((data, ctx) => {
        const hasDestination = Boolean(data.destinationId);
        const hasPackage = Boolean(data.packageId);

        if (!hasDestination && !hasPackage) {
            ctx.addIssue({
                code: "custom",
                path: ["destinationId"],
                message:
                    "Select either a destination or a package",
            });
        }

        if (hasDestination && hasPackage) {
            ctx.addIssue({
                code: "custom",
                path: ["destinationId"],
                message:
                    "FAQ can belong to either a destination or a package, not both",
            });
        }
    });

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const parsed = createFAQsSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid FAQ data",
                    errors: parsed.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        const {
            destinationId,
            packageId,
            faqs,
        } = parsed.data;

        if (destinationId) {
            const destination =
                await prisma.destination.findUnique({
                    where: {
                        id: destinationId,
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
        }

        if (packageId) {
            const packageData =
                await prisma.package.findUnique({
                    where: {
                        id: packageId,
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
        }

        const faqData = faqs.map((faq, index) => ({
            question: faq.question,
            answer: faq.answer,

            sortOrder: index,
            destinationId: destinationId || null,
            packageId: packageId || null,
        }));

        await prisma.fAQ.createMany({
            data: faqData,
        });

        return NextResponse.json(
            {
                success: true,
                message: `${faqs.length} FAQ${faqs.length > 1 ? "s" : ""
                    } created successfully`,
                count: faqs.length,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(
            "POST /api/admin/faqs error:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message: "Failed to create FAQs",
            },
            { status: 500 }
        );
    }
}

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