import { NextResponse } from "next/server";
import { Resend } from "resend";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            packageId,
            packageSlug,
            packageName,
            fullName,
            phone,
            email,
            checkIn,
            checkOut,
            travellers,
            specialRequests,
        } = body;

        if (
            !fullName ||
            !phone ||
            !email ||
            !checkIn ||
            !checkOut ||
            !travellers
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please fill all required fields",
                },
                {
                    status: 400,
                }
            );
        }

        if (!packageId && !packageSlug) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Package information is required",
                },
                {
                    status: 400,
                }
            );
        }

        const packageData = await prisma.package.findFirst({
            where: packageId
                ? {
                      id: packageId,
                      isPublished: true,
                  }
                : {
                      slug: packageSlug,
                      isPublished: true,
                  },

            select: {
                id: true,
                name: true,
                slug: true,
                originalPrice: true,
                duration: true,
                location: true,

                destination: {
                    select: {
                        name: true,
                        slug: true,
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
                {
                    status: 404,
                }
            );
        }

        const message = `
Booking Request

Package:
${packageData.name}

Package Slug:
${packageData.slug}

Destination:
${packageData.destination.name}

Location:
${packageData.location || packageData.destination.name}

Duration:
${packageData.duration || "Not specified"}

Price:
₹${Number(packageData.originalPrice).toLocaleString("en-IN")}

Traveller Details:
Name: ${fullName}
Phone: ${phone}
Email: ${email}

Travel Details:
Check-in: ${checkIn}
Check-out: ${checkOut}
Travellers: ${travellers}

Special Requests:
${specialRequests || "None"}
        `.trim();

        const inquiry = await prisma.inquiry.create({
            data: {
                name: fullName.trim(),
                phone: phone.trim(),
                email: email.trim().toLowerCase(),
                message,
                status: "NEW",
            },
        });

        const adminEmail = process.env.INQUIRY_ADMIN_EMAIL;

        if (!adminEmail) {
            console.error(
                "ADMIN_EMAIL is not configured"
            );

            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Booking received but email configuration is missing",
                    bookingId: inquiry.id,
                },
                {
                    status: 500,
                }
            );
        }

        const emailResult = await resend.emails.send({
            from:"WANDER-INDIA <onboarding@resend.dev>",
            to: [adminEmail],
            replyTo: email.trim().toLowerCase(),
            subject: `New Booking Request - ${packageData.name}`,
            html: `
                <div style="margin:0;padding:30px;background:#f5f9f8;font-family:Arial,sans-serif;color:#00383b;">
                    <div style="max-width:700px;margin:auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e3eceb;">

                        <div style="padding:24px;background:#00383b;color:#ffffff;">
                            <h1 style="margin:0;font-size:24px;">
                                New Booking Request
                            </h1>

                            <p style="margin:8px 0 0;color:#b9d8d6;font-size:14px;">
                                A customer has submitted a new booking request.
                            </p>
                        </div>

                        <div style="padding:24px;">

                            <h2 style="margin:0 0 15px;font-size:18px;">
                                Package Details
                            </h2>

                            <table style="width:100%;border-collapse:collapse;">
                                <tr>
                                    <td style="padding:8px 0;color:#6d8586;">
                                        Package
                                    </td>

                                    <td style="padding:8px 0;font-weight:bold;">
                                        ${escapeHtml(packageData.name)}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:8px 0;color:#6d8586;">
                                        Destination
                                    </td>

                                    <td style="padding:8px 0;">
                                        ${escapeHtml(
                                            packageData.destination.name
                                        )}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:8px 0;color:#6d8586;">
                                        Duration
                                    </td>

                                    <td style="padding:8px 0;">
                                        ${escapeHtml(
                                            packageData.duration ||
                                                "Not specified"
                                        )}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:8px 0;color:#6d8586;">
                                        Price
                                    </td>

                                    <td style="padding:8px 0;font-weight:bold;">
                                        ₹${Number(
                                            packageData.originalPrice
                                        ).toLocaleString("en-IN")}
                                    </td>
                                </tr>
                            </table>

                            <hr style="border:0;border-top:1px solid #e5eeee;margin:20px 0;" />

                            <h2 style="margin:0 0 15px;font-size:18px;">
                                Customer Details
                            </h2>

                            <table style="width:100%;border-collapse:collapse;">
                                <tr>
                                    <td style="padding:8px 0;color:#6d8586;">
                                        Name
                                    </td>

                                    <td style="padding:8px 0;">
                                        ${escapeHtml(fullName)}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:8px 0;color:#6d8586;">
                                        Phone
                                    </td>

                                    <td style="padding:8px 0;">
                                        ${escapeHtml(phone)}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:8px 0;color:#6d8586;">
                                        Email
                                    </td>

                                    <td style="padding:8px 0;">
                                        ${escapeHtml(email)}
                                    </td>
                                </tr>
                            </table>

                            <hr style="border:0;border-top:1px solid #e5eeee;margin:20px 0;" />

                            <h2 style="margin:0 0 15px;font-size:18px;">
                                Travel Details
                            </h2>

                            <table style="width:100%;border-collapse:collapse;">
                                <tr>
                                    <td style="padding:8px 0;color:#6d8586;">
                                        Check-in
                                    </td>

                                    <td style="padding:8px 0;">
                                        ${escapeHtml(checkIn)}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:8px 0;color:#6d8586;">
                                        Check-out
                                    </td>

                                    <td style="padding:8px 0;">
                                        ${escapeHtml(checkOut)}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:8px 0;color:#6d8586;">
                                        Travellers
                                    </td>

                                    <td style="padding:8px 0;">
                                        ${escapeHtml(travellers)}
                                    </td>
                                </tr>
                            </table>

                            <hr style="border:0;border-top:1px solid #e5eeee;margin:20px 0;" />

                            <h2 style="margin:0 0 10px;font-size:18px;">
                                Special Requests
                            </h2>

                            <p style="margin:0;color:#536e70;line-height:1.6;">
                                ${escapeHtml(
                                    specialRequests || "None"
                                )}
                            </p>

                        </div>

                        <div style="padding:18px 24px;background:#f7fbfa;color:#789395;font-size:12px;">
                            Booking ID: ${inquiry.id}
                        </div>

                    </div>
                </div>
            `,
        });

        if (emailResult.error) {
            console.error(
                "Booking email failed:",
                emailResult.error
            );

            return NextResponse.json(
                {
                    success: true,
                    message:
                        "Booking request received, but notification email could not be sent",
                    bookingId: inquiry.id,
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
                    "Booking request submitted successfully",
                bookingId: inquiry.id,
            },
            {
                status: 201,
            }
        );
    } catch (error) {
        console.error(
            "Create booking error:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Failed to submit booking",
            },
            {
                status: 500,
            }
        );
    }
}

function escapeHtml(value: unknown) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}