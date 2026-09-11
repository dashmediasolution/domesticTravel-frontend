"use client";

import { ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

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
}

export default function Itinerary({
    title = "Itinerary",
    subtitle,
    days,
    buttonText = "View Detailed Itinerary",
    onButtonClick,
     className,
}: ItineraryProps) {
    return (
        <section className="w-[40%]">
            <div className="mb-5 flex items-baseline gap-1">
                <h2 className="font-heading text-2xl font-semibold text-foreground">{title}</h2>
                {subtitle && <span className="text-lg text-foreground">({subtitle})</span>}
            </div>

            <div className="overflow-hidden rounded-[24px] border border-neutral-200 bg-white px-6 shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
                <Accordion      >
                    {days.map((item) => (
                        <AccordionItem key={item.day} value={`day-${item.day}`} className="border-b   border-neutral-200 last:border-b-0">
                            <AccordionTrigger className=" hover:no-underline font-bold">
                                <div className="flex w-full items-center gap-3">
                                    <span className="flex h-8 min-w-[48px] items-center justify-center rounded-lg bg-[#F2F3F4] px-2 text-xs  text-foreground">
                                        Day {item.day}
                                    </span>

                                    <span className="text-left text-base font-medium text-foreground">
                                        {item.title}
                                    </span>
                                </div>
                            </AccordionTrigger>

                            {item.description && (
                                <AccordionContent className="pb-4 pl-[60px] text-sm leading-6 text-muted-foreground">
                                    {item.description}
                                </AccordionContent>
                            )}
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="flex justify-center py-5">
                    <button
                        type="button"
                        onClick={onButtonClick}
                        className="flex h-10 items-center gap-2 rounded-full border border-teal-400 px-5 text-sm font-medium text-teal-500 transition-colors hover:bg-teal-50"
                    >
                        {buttonText}
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}