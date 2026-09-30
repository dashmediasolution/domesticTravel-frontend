"use client";

import { MapPin, Moon, Utensils } from "lucide-react";

export interface ItineraryDay {
    day: number;
    title: string;
    description?: string;
    activities?: string[];
    meals?: string[];
    overnight?: string;
}

interface ItineraryProps {
    title?: string;
    subtitle?: string;
    days: ItineraryDay[];
    previewDays?: number;
    className?: string;
}

export default function Itinerary({
    title = "Itinerary",
    subtitle,
    days,
    previewDays = 5,
    className,
}: ItineraryProps) {
    const previewItems = days.slice(0, previewDays);

    return (
        <section className={`w-full ${className ?? ""}`}>
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

                        return (
                            <div
                                key={item.day}
                                className="relative flex gap-3 sm:gap-5"
                            >
                                {!isLast && (
                                    <div className="absolute left-[17px] top-10 bottom-0 w-px bg-[#2FC2B0]/40 sm:left-[21px]" />
                                )}

                                <div className="relative z-10 flex shrink-0 flex-col items-center">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00383B] text-[10px] font-semibold text-white shadow-sm sm:h-11 sm:w-11 sm:text-xs">
                                        Day
                                        <span className="ml-1">
                                            {item.day}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    className={`
                                        min-w-0 flex-1
                                        rounded-[14px]
                                        border border-neutral-100
                                        bg-[#FAFCFC]
                                        px-4 py-3.5
                                        shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                                        sm:rounded-[18px]
                                        sm:px-5 sm:py-4
                                        ${isLast ? "mb-0" : "mb-3 sm:mb-4"}
                                    `}
                                >
                                    <h3 className="text-sm font-semibold leading-5 text-[#00383B] sm:text-base sm:leading-6">
                                        {item.title}
                                    </h3>

                                    {(item.activities?.length ||
                                        item.meals?.length ||
                                        item.overnight) && (
                                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] text-muted-foreground sm:text-xs">
                                            {item.activities &&
                                                item.activities.length > 0 && (
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="h-3 w-3 shrink-0 text-[#2FC2B0]" />
                                                        <span>
                                                            {item.activities.join(
                                                                " | "
                                                            )}
                                                        </span>
                                                    </div>
                                                )}

                                            {item.meals &&
                                                item.meals.length > 0 && (
                                                    <div className="flex items-center gap-1">
                                                        <Utensils className="h-3 w-3 shrink-0 text-[#2FC2B0]" />
                                                        <span>
                                                            {item.meals.join(
                                                                " | "
                                                            )}
                                                        </span>
                                                    </div>
                                                )}

                                            {item.overnight && (
                                                <div className="flex items-center gap-1">
                                                    <Moon className="h-3 w-3 shrink-0 text-[#2FC2B0]" />
                                                    <span>
                                                        {item.overnight}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {item.description && (
                                        <p className="mt-2 text-[11px] leading-5 text-muted-foreground sm:text-sm sm:leading-6">
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