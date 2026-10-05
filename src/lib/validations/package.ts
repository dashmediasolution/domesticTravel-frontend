import { z } from "zod";

const packageTypeSchema = z.enum([
    "REGULAR",
    "SPECIAL",
    "UPCOMMING"
]);

const packageOccasionSchema = z.enum([
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
]);

const whyVisitItemSchema = z.object({
    id: z.string().optional(),

    title: z
        .string()
        .trim()
        .min(1, "Title is required"),

    description: z
        .string()
        .trim()
        .min(1, "Description is required"),
});
const travelInformationItemSchema = z.object({
    id: z.string().min(1),
    title: z
        .string()
        .trim()
        .min(1, "Title is required")
        .max(100, "Title is too long"),
    value: z
        .string()
        .trim()
        .min(1, "Value is required")
        .max(300, "Value is too long"),
});
const itineraryDaySchema = z.object({
    day: z
        .number()
        .int()
        .min(1),

    title: z
        .string()
        .trim()
        .min(1, "Day title is required"),

    description: z
        .string()
        .trim()
        .default(""),

    activities: z
        .array(z.string().trim())
        .default([]),

    meals: z
        .array(z.string().trim())
        .default([]),

    overnight: z
        .string()
        .trim()
        .default(""),
});

export const packageSchema = z.object({
    name: z
        .string()
        .trim()
        .min(
            2,
            "Package name must be at least 2 characters"
        ),
    travelInformation: z
        .array(travelInformationItemSchema)
        .default([]),

    whatToPack: z
        .array(
            z
                .string()
                .trim()
                .min(1, "Packing item cannot be empty")
                .max(150, "Packing item is too long")
        )
        .default([]),
    slug: z
        .string()
        .trim()
        .min(2, "Slug is required")
        .regex(
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
            "Slug can only contain lowercase letters, numbers and hyphens"
        ),

    category: z
        .string()
        .trim()
        .min(1, "Category is required"),

    type: packageTypeSchema,

    occasion: packageOccasionSchema,

    destinationId: z
        .string()
        .regex(
            /^[a-f\d]{24}$/i,
            "Invalid destination"
        ),

    parentId: z
        .string()
        .regex(
            /^[a-f\d]{24}$/i,
            "Invalid parent package"
        )
        .nullable()
        .default(null),

    subtitle: z
        .string()
        .trim()
        .default(""),

    description: z
        .string()
        .trim()
        .default(""),

    location: z
        .string()
        .trim()
        .default(""),

    latitude: z
        .number()
        .min(-90, "Latitude must be between -90 and 90")
        .max(90, "Latitude must be between -90 and 90")
        .nullable()
        .default(null),

    longitude: z
        .number()
        .min(-180, "Longitude must be between -180 and 180")
        .max(180, "Longitude must be between -180 and 180")
        .nullable()
        .default(null),

    duration: z
        .string()
        .trim()
        .default(""),

    groupSize: z
        .string()
        .trim()
        .default(""),

    idealTrip: z
        .string()
        .trim()
        .default(""),

    budget: z
        .string()
        .trim()
        .default(""),


    bestTimeToVisit: z.array(
        z
            .string()
            .trim()
            .min(
                1,
                "Month cannot be empty"
            )
    ),

    originalPrice: z
        .number()
        .min(0, "Original price cannot be negative")
        .nullable()
        .default(null),



  
    rating: z
        .number()
        .min(0, "Rating cannot be below 0")
        .max(5, "Rating cannot exceed 5")
        .nullable()
        .default(null),

    reviewsCount: z
        .number()
        .int("Reviews count must be a whole number")
        .min(0, "Reviews count cannot be negative")
        .nullable()
        .default(null),

    highlights: z
        .array(z.string().trim())
        .default([]),

    inclusions: z
        .array(z.string().trim())
        .default([]),

    exclusions: z
        .array(z.string().trim())
        .default([]),

    whyVisit: z
        .array(whyVisitItemSchema)
        .default([]),

    itinerary: z
        .array(itineraryDaySchema)
        .default([]),

    metaTitle: z
        .string()
        .trim()
        .default(""),

    metaDescription: z
        .string()
        .trim()
        .default(""),

    keywords: z
        .array(z.string().trim())
        .default([]),

    isPublished: z
        .boolean()
        .default(false),

    isFeatured: z
        .boolean()
        .default(false),
});

export type PackageFormInput =
    z.input<typeof packageSchema>;

export type PackageFormValues =
    z.output<typeof packageSchema>;