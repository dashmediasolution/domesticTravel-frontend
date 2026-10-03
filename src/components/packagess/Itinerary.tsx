"use client";

import { MapPin, Moon, Utensils } from "lucide-react";

export interface ItineraryDay {
    day: number;
    title: string;
    description?: string | null;
    activities?: string[];
    meals?: string[];
    overnight?: string | null;
}

interface ItineraryProps {
    title?: string;
    subtitle?: string;
    days?: ItineraryDay[];
    previewDays?: number;
    className?: string;
}

export default function Itinerary({
    title = "Itinerary",
    subtitle,
    days = [],
    previewDays = 5,
    className = "",
}: ItineraryProps) {
    const previewItems = days
        .slice()
        .sort((a, b) => a.day - b.day)
        .slice(0, previewDays);

    if (previewItems.length === 0) {
        return null;
    }

    return (
        <section className={`w-full ${className}`}>
            <div className="mb-4 flex flex-wrap items-baseline gap-1 sm:mb-5">
                <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                    {title}
                </h2>

                {subtitle && (
                    <span className="text-xs text-muted-foreground sm:text-lg">
                        ({subtitle})
                    </span>
                )}
            </div>

            <div className="rounded-[20px] border border-neutral-200 bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] sm:p-6 lg:rounded-[24px]">
                <div className="relative">
                    {previewItems.map((item, index) => {
                        const isLast =
                            index === previewItems.length - 1;

                        const hasActivities =
                            Array.isArray(item.activities) &&
                            item.activities.length > 0;

                        const hasMeals =
                            Array.isArray(item.meals) &&
                            item.meals.length > 0;

                        const hasOvernight =
                            Boolean(item.overnight?.trim());

                        const hasMeta =
                            hasActivities ||
                            hasMeals ||
                            hasOvernight;

                        return (
                            <div
                                key={`${item.day}-${item.title}`}
                                className="relative flex gap-3 sm:gap-5"
                            >
                                {!isLast && (
                                    <div className="absolute bottom-0 left-[17px] top-10 w-px bg-[#2FC2B0]/40 sm:left-[21px]" />
                                )}

                                <div className="relative z-10 flex shrink-0 flex-col items-center">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00383B] text-[10px] font-semibold text-white shadow-sm sm:h-11 sm:w-11 sm:text-xs">
                                        <span>Day</span>
                                        <span className="ml-1">
                                            {item.day}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    className={`min-w-0 flex-1 rounded-[14px] border border-neutral-100 bg-[#FAFCFC] px-4 py-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:rounded-[18px] sm:px-5 sm:py-4 ${
                                        isLast
                                            ? "mb-0"
                                            : "mb-3 sm:mb-4"
                                    }`}
                                >
                                    <h3 className="text-sm font-semibold leading-5 text-[#00383B] sm:text-base sm:leading-6">
                                        {item.title}
                                    </h3>

                                    {hasMeta && (
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {hasActivities && (
                                                <div className="flex items-center gap-1.5 rounded-full bg-[#2FC2B0]/10 px-2.5 py-1 text-[10px] text-[#00383B] sm:text-xs">
                                                    <MapPin className="h-3 w-3 shrink-0 text-[#2FC2B0]" />

                                                    <span>
                                                        {item.activities!.join(
                                                            " | "
                                                        )}
                                                    </span>
                                                </div>
                                            )}

                                            {hasMeals && (
                                                <div className="flex items-center gap-1.5 rounded-full bg-[#2FC2B0]/10 px-2.5 py-1 text-[10px] text-[#00383B] sm:text-xs">
                                                    <Utensils className="h-3 w-3 shrink-0 text-[#2FC2B0]" />

                                                    <span>
                                                        {item.meals!.join(
                                                            " | "
                                                        )}
                                                    </span>
                                                </div>
                                            )}

                                            {hasOvernight && (
                                                <div className="flex items-center gap-1.5 rounded-full bg-[#2FC2B0]/10 px-2.5 py-1 text-[10px] text-[#00383B] sm:text-xs">
                                                    <Moon className="h-3 w-3 shrink-0 text-[#2FC2B0]" />

                                                    <span>
                                                        {item.overnight}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {item.description?.trim() && (
                                        <p className="mt-3 text-[11px] leading-5 text-muted-foreground sm:text-sm sm:leading-6">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}