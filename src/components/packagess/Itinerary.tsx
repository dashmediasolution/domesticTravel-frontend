 
"use client";

import { ChevronRight } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export interface ItineraryDay {
    day: number;
    title: string;
    description?: string;
}

interface ItineraryProps {
    title?: string;
    subtitle?: string;
    days: ItineraryDay[];
    buttonText?: string;
    onButtonClick?: () => void;
    defaultOpenDay?: number;
    className?: string;
    previewDays?: number;
}

export default function Itinerary({
    title = "Itinerary",
    subtitle,
    days,
    buttonText = "View Detailed Itinerary",
    onButtonClick,
    className,
    previewDays = 5,
}: ItineraryProps) {
    const previewItems = days.slice(0, previewDays);
    const hasMoreDays = days.length > previewDays;

    return (
        <section className={`w-full   ${className ?? ""}`}>
            <div className="mb-3 flex flex-wrap items-baseline gap-1 sm:mb-5">
                <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                    {title}
                </h2>

                {subtitle && (
                    <span className="text-xs text-foreground sm:text-lg">
                        ({subtitle})
                    </span>
                )}
            </div>

            <div className="overflow-hidden rounded-[16px] border border-neutral-200 bg-white px-3 shadow-[0_2px_10px_rgba(0,0,0,0.08)] sm:rounded-[20px] sm:px-5 lg:rounded-[24px] lg:px-6">
                <Accordion>
                    {previewItems.map((item) => (
                        <AccordionItem
                            key={item.day}
                            value={`day-${item.day}`}
                            className="border-b border-neutral-200 last:border-b-0"
                        >
                            <AccordionTrigger className="w-full py-3 text-left font-bold hover:no-underline sm:py-4">
                                <div className="flex w-full min-w-0 items-start gap-2 sm:gap-3">
                                    <span className="flex h-7 min-w-[42px] shrink-0 items-center justify-center rounded-md bg-[#F2F3F4] px-1.5 text-[10px] font-medium text-foreground sm:h-8 sm:min-w-[48px] sm:rounded-lg sm:px-2 sm:text-xs">
                                        Day {item.day}
                                    </span>

                                    <span className="min-w-0 flex-1 whitespace-normal break-words text-left text-xs font-medium leading-5 text-foreground sm:text-base sm:leading-6">
                                        {item.title}
                                    </span>
                                </div>
                            </AccordionTrigger>

                            {item.description && (
                                <AccordionContent className="pb-3 pl-[50px] text-[11px] leading-5 text-muted-foreground sm:pb-4 sm:pl-[60px] sm:text-sm sm:leading-6">
                                    <p className="whitespace-normal break-words">
                                        {item.description}
                                    </p>
                                </AccordionContent>
                            )}
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="flex justify-center py-3 sm:py-5">
                    <button
                        type="button"
                        onClick={onButtonClick}
                        className="flex h-8 items-center gap-1.5 rounded-full border border-teal-400 px-3 text-[10px] font-medium text-teal-500 transition-colors hover:bg-teal-50 sm:h-10 sm:gap-2 sm:px-5 sm:text-sm"
                    >
                        {hasMoreDays
                            ? buttonText
                            : "View Detailed Itinerary"}

                        <ChevronRight
                            size={15}
                            className="sm:h-[18px] sm:w-[18px]"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
 
