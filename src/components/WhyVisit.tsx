"use client";

import { useEffect, useRef, useState } from "react";
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
    const [isScrollable, setIsScrollable] = useState(false);
    const [isAtEnd, setIsAtEnd] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            const container = scrollRef.current;

            if (!container) {
                return;
            }

            const hasOverflow =
                container.scrollHeight > container.clientHeight + 5;

            setIsScrollable(hasOverflow);

            setIsAtEnd(
                container.scrollTop + container.clientHeight >=
                    container.scrollHeight - 5
            );
        };

        checkScroll();

        window.addEventListener("resize", checkScroll);

        return () => {
            window.removeEventListener("resize", checkScroll);
        };
    }, [items]);

    if (items.length === 0) {
        return null;
    }

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
                    className="
                        flex
                        flex-col
                        gap-3
                        md:max-h-[330px]
                        md:overflow-y-auto
                        md:pr-2
                        [scrollbar-width:thin]
                        [scrollbar-color:#d1d5db_transparent]
                        [&::-webkit-scrollbar]:w-1
                        [&::-webkit-scrollbar-track]:bg-transparent
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-gray-300
                    "
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

                {isScrollable && !isAtEnd && (
                    <button
                        type="button"
                        onClick={scrollDown}
                        aria-label="Show more reasons to visit"
                        className="
                            absolute
                            bottom-2
                            right-3
                            z-10
                            hidden
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
                            md:flex
                        "
                    >
                        <ChevronRight className="h-5 w-5 rotate-90" />
                    </button>
                )}
            </div>
        </section>
    );
}