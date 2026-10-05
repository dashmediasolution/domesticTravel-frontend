import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";
import { inquiryEmail } from "@/lib/emails/inquiry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const inquirySchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(100, "Name must not exceed 100 characters"),

    phone: z
        .string()
        .trim()
        .regex(
            /^\+?[0-9]{10,15}$/,
            "Enter a valid phone number"
        ),

    email: z
        .string()
        .trim()
        .email("Enter a valid email address")
        .max(254, "Email is too long"),

    message: z
        .string()
        .trim()
        .min(5, "Message must be at least 5 characters")
        .max(
            2000,
            "Message must not exceed 2000 characters"
        ),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const parsed = inquirySchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please provide valid inquiry details",
                    errors:
                        parsed.error.flatten()
                            .fieldErrors,
                },
                {
                    status: 400,
                }
            );
        }

        const {
            name,
            phone,
            email,
            message,
        } = parsed.data;

        const inquiry = await prisma.inquiry.create({
            data: {
                name,
                phone,
                email,
                message,
            },
            select: {
                id: true,
                name: true,
                phone: true,
                email: true,
                message: true,
                status: true,
                createdAt: true,
            },
        });

        const adminEmail =
            process.env.INQUIRY_ADMIN_EMAIL;

        const emailFrom =
            process.env.EMAIL_FROM;

        if (!adminEmail || !emailFrom) {
            console.error(
                "Inquiry email configuration is missing"
            );

            return NextResponse.json(
                {
                    success: true,
                    message:
                        "Inquiry submitted successfully",
                    data: {
                        id: inquiry.id,
                    },
                    warning:
                        "Inquiry was saved but admin notification email is not configured",
                },
                {
                    status: 201,
                }
            );
        }

        try {
            const html = inquiryEmail({
                inquiryId: inquiry.id,
                name: inquiry.name,
                phone: inquiry.phone,
                email: inquiry.email,
                message: inquiry.message,
            });

            const { error } =
                await resend.emails.send(
                    {
                        from: "WANDER-INDIA <onboarding@resend.dev>",
                        to: [adminEmail],
                        replyTo: inquiry.email,
                        subject: `New Website Inquiry - ${inquiry.name}`,
                        html,
                    },
                    {
                        idempotencyKey:
                            `inquiry-${inquiry.id}`,
                    }
                );

            if (error) {
                console.error(
                    "Inquiry email failed:",
                    error
                );

                return NextResponse.json(
                    {
                        success: true,
                        message:
                            "Inquiry submitted successfully",
                        data: {
                            id: inquiry.id,
                        },
                        warning:
                            "Inquiry was saved but admin notification could not be sent",
                    },
                    {
                        status: 201,
                    }
                );
            }
        } catch (emailError) {
            console.error(
                "Inquiry email exception:",
                emailError
            );

            return NextResponse.json(
                {
                    success: true,
                    message:
                        "Inquiry submitted successfully",
                    data: {
                        id: inquiry.id,
                    },
                    warning:
                        "Inquiry was saved but admin notification could not be sent",
                },
                {
                    status: 201,
                }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message:
                    "Your inquiry has been submitted successfully",
                data: {
                    id: inquiry.id,
                },
            },
            {
                status: 201,
            }
        );
    } catch (error) {
        console.error(
            "POST /api/inquiries error:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message:
                    "Failed to submit inquiry",
            },
            {
                status: 500,
            }
        );
    }
}