import { z } from "zod";

const packageImageSchema = z.object({
    url: z.string().min(1),
    publicId: z.string().min(1),
});

const itineraryDaySchema = z.object({
    day: z.number().int().min(1),
    title: z.string().min(1, "Day title is required"),
    description: z.string().optional(),
    activities: z.array(z.string()).default([]),
    meals: z.array(z.string()).default([]),
    overnight: z.string().optional(),
});

export const packageSchema = z.object({
    name: z
        .string()
        .min(2, "Package name is required"),

    slug: z
        .string()
        .min(2, "Slug is required"),

    category: z
        .string()
        .min(1, "Category is required"),

    type: z.enum(["REGULAR", "SPECIAL"]),

    occasion: z.enum([
        "NONE",
        "CHRISTMAS",
        "DIWALI",
        "NEW_YEAR",
        "VALENTINE",
        "HOLI",
        "EID",
        "SUMMER",
        "WINTER",
        "FESTIVAL",
        "OTHER",
    ]),

    subtitle: z.string().optional(),

    description: z
        .string()
        .min(10, "Description should be at least 10 characters"),

    location: z.string().optional(),

    latitude: z
        .number()
        .optional(),

    longitude: z
        .number()
        .optional(),

    duration: z.string().optional(),

    groupSize: z.string().optional(),

    idealTrip: z.string().optional(),

    budget: z.string().optional(),

    bestTimeToVisit: z.string().optional(),

    originalPrice: z
        .number()
        .nonnegative()
        .optional(),

    offerPrice: z
        .number()
        .nonnegative()
        .optional(),

    discount: z
        .number()
        .min(0)
        .max(100)
        .optional(),

    saveAmount: z
        .number()
        .nonnegative()
        .optional(),

    validTill: z.string().optional(),

    rating: z
        .number()
        .min(0)
        .max(5)
        .optional(),

    reviewsCount: z
        .number()
        .int()
        .nonnegative()
        .optional(),

    highlights: z
        .array(z.string())
        .default([]),

    inclusions: z
        .array(z.string())
        .default([]),

    exclusions: z
        .array(z.string())
        .default([]),

    whyVisitTitle: z.string().optional(),

    whyVisitDescription: z.string().optional(),

    whyVisitHighlights: z
        .array(z.string())
        .default([]),

    heroImage: z.string().optional(),

    gallery: z
        .array(packageImageSchema)
        .default([]),

    itinerary: z
        .array(itineraryDaySchema)
        .default([]),

    metaTitle: z.string().optional(),

    metaDescription: z.string().optional(),

    keywords: z
        .array(z.string())
        .default([]),

    isPublished: z.boolean(),

    isFeatured: z.boolean(),

    publishedAt: z.string().optional(),
});

export const offerSchema = z
    .object({
        title: z
            .string()
            .min(2, "Offer title is required"),

        slug: z
            .string()
            .min(2, "Slug is required"),

        type: z.enum([
            "EARLY_BIRD",
            "FLASH_SALE",
            "SEASONAL",
            "FESTIVE",
            "LIMITED_TIME",
            "SPECIAL",
        ]),

        description: z.string().optional(),

        packageId: z
            .string()
            .min(1, "Package is required"),

        originalPrice: z
            .number()
            .nonnegative()
            .optional(),

        offerPrice: z
            .number()
            .nonnegative("Offer price is required"),

        discount: z
            .number()
            .min(0)
            .max(100)
            .optional(),

        saveAmount: z
            .number()
            .nonnegative()
            .optional(),

        startDate: z
            .string()
            .min(1, "Start date is required"),

        endDate: z
            .string()
            .min(1, "End date is required"),

        isActive: z.boolean(),

        isFeatured: z.boolean(),

        badgeText: z.string().optional(),
    })
    .refine(
        (data) =>
            new Date(data.endDate) >=
            new Date(data.startDate),
        {
            message:
                "End date must be after start date",
            path: ["endDate"],
        }
    );
export type PackageFormInput =
    z.input<typeof packageSchema>;

export type PackageFormValues =
    z.output<typeof packageSchema>;

export type OfferFormInput =
    z.input<typeof offerSchema>;

export type OfferFormValues =
    z.output<typeof offerSchema>;