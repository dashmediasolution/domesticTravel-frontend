"use client";

import { useRef, useState } from "react";
import {
    Check,
    ChevronRight,
} from "lucide-react";

interface WhyVisitItem {
    id: string;
    title: string;
    description: string;
}

interface WhyVisitProps {
    items?: WhyVisitItem[];
    destination: string;
}

export default function WhyVisit({
    items = [],
    destination,
}: WhyVisitProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isAtEnd, setIsAtEnd] = useState(false);

    if (items.length === 0) {
        return null;
    }

    const showScroller = items.length > 4;

    const handleScroll = () => {
        const container = scrollRef.current;

        if (!container) {
            return;
        }

        setIsAtEnd(
            container.scrollTop + container.clientHeight >=
                container.scrollHeight - 5
        );
    };

    const scrollDown = () => {
        const container = scrollRef.current;

        if (!container) {
            return;
        }

        container.scrollBy({
            top: 250,
            behavior: "smooth",
        });

        setTimeout(handleScroll, 350);
    };

    return (
        <section className="relative h-fit w-full rounded-[28px] border bg-white p-6 sm:p-7 lg:p-6">
            <div className="mb-6">
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#2FC2B0]">
                    Explore More
                </p>

                <h2 className="font-bebas text-2xl leading-none">
                    Why Visit {destination}
                </h2>
            </div>

            <div className="relative">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className={`
                        flex
                        flex-col
                        gap-3
                        ${showScroller ? "max-h-[420px] overflow-y-auto pr-2" : ""}
                        [scrollbar-width:thin]
                        [scrollbar-color:#d1d5db_transparent]
                        [&::-webkit-scrollbar]:w-1
                        [&::-webkit-scrollbar-track]:bg-transparent
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-gray-300
                    `}
                >
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex shrink-0 items-start gap-3 rounded-xl bg-muted/50 px-4 py-3"
                        >
                            <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#2FC2B0]/15 text-[#2FC2B0]">
                                <Check className="size-4" />
                            </span>

                            <div>
                                <h3 className="text-sm font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {showScroller && !isAtEnd && (
                    <button
                        type="button"
                        onClick={scrollDown}
                        aria-label="Show more reasons to visit"
                        className="
                            absolute
                            bottom-2
                            right-3
                            z-10
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-slate-200
                            bg-white
                            text-slate-700
                            shadow-md
                            transition-all
                            hover:bg-slate-50
                        "
                    >
                        <ChevronRight className="h-5 w-5 rotate-90" />
                    </button>
                )}
            </div>
        </section>
    );
}