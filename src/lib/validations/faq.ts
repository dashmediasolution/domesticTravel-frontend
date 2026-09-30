import { z } from "zod";

const faqItemSchema = z.object({
    question: z
        .string()
        .trim()
        .min(5, "Question must be at least 5 characters")
        .max(
            300,
            "Question must not exceed 300 characters"
        ),

    answer: z
        .string()
        .trim()
        .min(5, "Answer must be at least 5 characters")
        .max(
            5000,
            "Answer must not exceed 5000 characters"
        ),
});

export const faqSchema = z
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
            .max(
                50,
                "You can create a maximum of 50 FAQs at once"
            ),
    })
    .superRefine((data, ctx) => {
        const hasDestination = Boolean(
            data.destinationId
        );

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

export type FAQFormInput = z.input<
    typeof faqSchema
>;

export type FAQFormValues = z.output<
    typeof faqSchema
>;