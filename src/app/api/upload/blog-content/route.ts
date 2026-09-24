import { NextResponse } from "next/server";

import { uploadImageToCloudinary } from "@/lib/cloudinary-upload";
import { validateImage } from "@/lib/validate-image";

export const runtime = "nodejs";

export async function POST(
    request: Request
) {
    try {
        const formData =
            await request.formData();

        const file =
            formData.get("file");

        if (!(file instanceof File)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Image file is required",
                },
                {
                    status: 400,
                }
            );
        }

        validateImage(file);

        const result =
            await uploadImageToCloudinary({
                file,
                folder:
                    "domesticTravel/blogs",
            });

        return NextResponse.json(
            {
                success: true,
                data: result,
            },
            {
                status: 201,
            }
        );
    } catch (error) {
        console.error(
            "BLOG CONTENT IMAGE UPLOAD ERROR:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Image upload failed",
            },
            {
                status: 500,
            }
        );
    }
}