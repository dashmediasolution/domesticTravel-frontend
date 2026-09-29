import { z } from "zod";

export const offerSchema = z
    .object({
        title: z
            .string()
            .trim()
            .min(1, "Offer title is required"),

        slug: z
            .string()
            .trim()
            .min(1, "Offer slug is required"),

        type: z.enum([
            "REGULAR",
            "EARLY_BIRD",
            "FLASH_SALE",
            "SEASONAL",
            "FESTIVE",
            "LIMITED_TIME",
            "SPECIAL",
        ]),

        description: z
            .string()
            .optional()
            .default(""),

        packageId: z
            .string()
            .trim()
            .min(1, "Package is required"),

        originalPrice: z
            .number()
            .positive("Original price must be greater than 0")
            .nullable()
            .optional(),

        offerPrice: z
            .number()
            .positive("Offer price must be greater than 0"),

        startDate: z
            .string()
            .min(1, "Start date is required"),

        endDate: z
            .string()
            .min(1, "End date is required"),

        isActive: z.boolean(),

        isFeatured: z.boolean(),

        badgeText: z
            .string()
            .optional()
            .default(""),
    })
    .refine(
        (data) => {
            if (
                data.originalPrice === null ||
                data.originalPrice === undefined
            ) {
                return true;
            }

            return data.offerPrice <= data.originalPrice;
        },
        {
            message:
                "Offer price cannot be greater than original price",
            path: ["offerPrice"],
        }
    )
    .refine(
        (data) => {
            return (
                new Date(data.endDate).getTime() >
                new Date(data.startDate).getTime()
            );
        },
        {
            message:
                "End date must be after start date",
            path: ["endDate"],
        }
    );

export type OfferFormInput =
    z.input<typeof offerSchema>;

export type OfferFormData =
    z.output<typeof offerSchema>;