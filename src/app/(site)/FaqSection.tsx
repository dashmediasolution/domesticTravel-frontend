"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Loader2 } from "lucide-react";

interface FAQ {
    id: string;
    question: string;
    answer: string;
    sortOrder?: number | null;
}

interface FAQSectionProps {
    destinationSlug?: string;
    packageSlug?: string;
    title?: string;
    description?: string;
}

export default function FAQSection({
    destinationSlug,
    packageSlug,
    title = "Frequently Asked Questions",
    description = "Find answers to the most common questions about your trip.",
}: FAQSectionProps) {
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [openId, setOpenId] = useState<string | null>(null);

    useEffect(() => {
        if (!destinationSlug) {
            setFaqs([]);
            setLoading(false);
            return;
        }

        const controller = new AbortController();

        const fetchFAQs = async () => {
            try {
                setLoading(true);
                setError("");

                const params = new URLSearchParams();

                params.set("destination", destinationSlug);

                if (packageSlug) {
                    params.set("package", packageSlug);
                }

                const response = await fetch(
                    `/api/faq?${params.toString()}`,
                    {
                        method: "GET",
                        cache: "no-store",
                        signal: controller.signal,
                    }
                );

                const result = await response.json();

                if (!response.ok || !result.success) {
                    throw new Error(
                        result.message || "Failed to fetch FAQs"
                    );
                }

                setFaqs(result.data || []);
            } catch (error) {
                if (error instanceof DOMException && error.name === "AbortError") {
                    return;
                }

                console.error("FAQ fetch error:", error);

                setError("Unable to load FAQs. Please try again.");
                setFaqs([]);
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchFAQs();

        return () => {
            controller.abort();
        };
    }, [destinationSlug, packageSlug]);

    if (loading) {
        return (
            <section className="w-full py-12 sm:py-16">
                <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
                    <div className="flex min-h-[180px] items-center justify-center">
                        <Loader2 className="h-6 w-6 animate-spin text-[#2FC2B0]" />
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="w-full py-12 sm:py-16">
                <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
                    <p className="text-sm text-red-500">{error}</p>
                </div>
            </section>
        );
    }

    if (!faqs.length) {
        return null;
    }

    return (
        <section className="w-full py-12 sm:py-16 lg:py-20">
            <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
                <div className="mb-8 text-center sm:mb-10">
                    <h2 className="text-2xl font-semibold tracking-tight text-[#00383B] sm:text-3xl lg:text-4xl">
                        {title}
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                        {description}
                    </p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq) => {
                        const isOpen = openId === faq.id;

                        return (
                            <div
                                key={faq.id}
                                className="overflow-hidden rounded-2xl border border-[#dcefeb] bg-white transition-shadow duration-200 hover:shadow-sm"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenId(
                                            isOpen ? null : faq.id
                                        )
                                    }
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${faq.id}`}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                                >
                                    <span className="text-sm font-semibold leading-6 text-[#00383B] sm:text-base">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        className={`h-5 w-5 shrink-0 text-[#2FC2B0] transition-transform duration-200 ${
                                            isOpen
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </button>

                                <div
                                    id={`faq-answer-${faq.id}`}
                                    className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
                                        isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="border-t border-[#eef5f3] px-5 pb-5 pt-4 sm:px-6">
                                            <p className="text-sm leading-7 text-gray-600 sm:text-[15px]">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}