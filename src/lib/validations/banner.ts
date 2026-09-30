import { z } from "zod";

export const bannerTargetTypes = [
    "DESTINATION",
    "PACKAGE",
    "OFFER",
    "CUSTOM_URL",
] as const;

export const bannerSchema = z
    .object({
        title: z
            .string()
            .trim()
            .min(2, "Title must be at least 2 characters")
            .max(150, "Title must not exceed 150 characters"),

        altText: z
            .string()
            .trim()
            .max(250, "Alt text must not exceed 250 characters")
            .optional()
            .or(z.literal("")),

        targetType: z.enum(bannerTargetTypes),

        targetUrl: z
            .string()
            .trim()
            .min(1, "Target URL is required")
            .max(1000, "Target URL is too long"),

        isActive: z.boolean(),

        isFeatured: z.boolean(),

        startDate: z
            .string()
            .trim()
            .optional()
            .or(z.literal("")),

        endDate: z
            .string()
            .trim()
            .optional()
            .or(z.literal("")),

        sortOrder: z
            .number()
            .int("Sort order must be a whole number")
            .min(0, "Sort order cannot be negative"),
    })
    .superRefine((data, ctx) => {
        if (data.targetType === "CUSTOM_URL") {
            try {
                const url = new URL(data.targetUrl);

                if (!["http:", "https:"].includes(url.protocol)) {
                    ctx.addIssue({
                        code: "custom",
                        path: ["targetUrl"],
                        message: "Custom URL must use HTTP or HTTPS",
                    });
                }
            } catch {
                ctx.addIssue({
                    code: "custom",
                    path: ["targetUrl"],
                    message: "Enter a valid URL",
                });
            }
        }

        if (data.startDate && data.endDate) {
            const start = new Date(data.startDate);
            const end = new Date(data.endDate);

            if (
                Number.isNaN(start.getTime()) ||
                Number.isNaN(end.getTime())
            ) {
                ctx.addIssue({
                    code: "custom",
                    path: ["startDate"],
                    message: "Invalid date",
                });

                return;
            }

            if (end < start) {
                ctx.addIssue({
                    code: "custom",
                    path: ["endDate"],
                    message: "End date cannot be before start date",
                });
            }
        }
    });

export type BannerFormInput = z.input<typeof bannerSchema>;
export type BannerFormValues = z.output<typeof bannerSchema>;