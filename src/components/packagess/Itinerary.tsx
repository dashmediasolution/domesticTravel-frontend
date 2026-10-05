"use client";

import {
    ChevronDown,
    MapPin,
    Moon,
    Utensils,
} from "lucide-react";

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
            {/* SECTION HEADER */}
            <div className="mb-5 flex flex-wrap items-baseline gap-1 sm:mb-6">
                <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                    {title}
                </h2>

                {subtitle && (
                    <span className="text-sm text-muted-foreground sm:text-base">
                        ({subtitle})
                    </span>
                )}
            </div>

            {/* ITINERARY LIST */}
            <div className="flex w-full flex-col gap-2.5 sm:gap-3">
                {previewItems.map((item, index) => {
                    const isLast =
                        index === previewItems.length - 1;

                    const activities =
                        item.activities?.filter(Boolean) ?? [];

                    const meals =
                        item.meals?.filter(Boolean) ?? [];

                    const overnight =
                        item.overnight?.trim() ?? "";

                    return (
                        <div
                            key={`${item.day}-${item.title}`}
                            className="
                                relative
                                w-full
                                rounded-[14px]
                                border
                                border-[#DDE9E8]
                                bg-white
                                transition-colors
                                hover:border-[#C8DDDB]
                                sm:rounded-[16px]
                            "
                        >
                            {/* DAY CONTENT */}
                            <div
                                className="
                                    relative
                                    grid
                                    grid-cols-[42px_minmax(0,1fr)]
                                    gap-3
                                    px-3
                                    py-3
                                    sm:grid-cols-[48px_minmax(0,1fr)_170px]
                                    sm:gap-4
                                    sm:px-4
                                    sm:py-4
                                    md:grid-cols-[52px_minmax(0,1fr)_190px]
                                    lg:grid-cols-[56px_minmax(0,1fr)_210px]
                                    lg:px-5
                                "
                            >
                                {/* TIMELINE */}
                                <div className="relative flex justify-center">
                                    {!isLast && (
                                        <span
                                            className="
                                                absolute
                                                left-1/2
                                                top-10
                                                bottom-[-28px]
                                                w-px
                                                -translate-x-1/2
                                                bg-[#2FC2B0]/35
                                                sm:bottom-[-32px]
                                            "
                                        />
                                    )}

                                    {/* DAY CIRCLE */}
                                    <div
                                        className="
                                            relative
                                            z-10
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            flex-col
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#00383B]
                                            text-white
                                            shadow-[0_2px_7px_rgba(0,56,59,0.16)]
                                            sm:h-10
                                            sm:w-10
                                            md:h-11
                                            md:w-11
                                        "
                                    >
                                        <span
                                            className="
                                                text-[7px]
                                                font-medium
                                                uppercase
                                                leading-none
                                                tracking-wide
                                                text-white/80
                                                sm:text-[8px]
                                            "
                                        >
                                            Day
                                        </span>

                                        <span
                                            className="
                                                mt-0.5
                                                text-[11px]
                                                font-bold
                                                leading-none
                                                sm:text-xs
                                            "
                                        >
                                            {item.day}
                                        </span>
                                    </div>
                                </div>

                                {/* MAIN CONTENT */}
                                <div className="min-w-0 pr-5 sm:pr-6">
                                    {/* TITLE */}
                                    <h3
                                        className="
                                            text-sm
                                            font-bold
                                            leading-5
                                            text-[#00383B]
                                            sm:text-[15px]
                                            sm:leading-6
                                            md:text-base
                                        "
                                    >
                                        {item.title}
                                    </h3>

                                    {/* DESCRIPTION */}
                                    {item.description?.trim() && (
                                        <p
                                            className="
                                                mt-1
                                                text-[11px]
                                                leading-[18px]
                                                text-slate-600
                                                sm:mt-1.5
                                                sm:text-xs
                                                sm:leading-5
                                                md:text-[13px]
                                                md:leading-[21px]
                                            "
                                        >
                                            {item.description}
                                        </p>
                                    )}

                                    {/* MOBILE META */}
                                    {(activities.length > 0 ||
                                        meals.length > 0 ||
                                        overnight) && (
                                        <div
                                            className="
                                                mt-2.5
                                                flex
                                                flex-wrap
                                                gap-x-3
                                                gap-y-1.5
                                                sm:mt-3
                                            "
                                        >
                                            {activities.length > 0 && (
                                                <div
                                                    className="
                                                        flex
                                                        min-w-0
                                                        items-start
                                                        gap-1.5
                                                        text-[10px]
                                                        leading-4
                                                        text-slate-500
                                                        sm:text-[11px]
                                                        md:text-[12px]
                                                    "
                                                >
                                                    <MapPin
                                                        className="
                                                            mt-0.5
                                                            h-4
                                                            w-4
                                                            shrink-0
                                                            text-[#2FC2B0]
                                                        "
                                                    />

                                                    <span>
                                                        {activities.join(
                                                            " | "
                                                        )}
                                                    </span>
                                                </div>
                                            )}

                                            {meals.length > 0 && (
                                                <div
                                                    className="
                                                        flex
                                                        min-w-0
                                                        items-start
                                                        gap-1.5
                                                        text-[10px]
                                                        leading-4
                                                        text-slate-500
                                                        sm:text-[11px]
                                                       md:text-[12px]

                                                    "
                                                >
                                                    <Utensils
                                                        className="
                                                            mt-0.5
                                                            h-4
                                                            w-4
                                                            shrink-0
                                                            text-[#2FC2B0]
                                                        "
                                                    />

                                                    <span>
                                                        {meals.join(
                                                            " | "
                                                        )}
                                                    </span>
                                                </div>
                                            )}

                                            {overnight && (
                                                <div
                                                    className="
                                                        flex
                                                        min-w-0
                                                        items-start
                                                        gap-1.5
                                                        text-[10px]
                                                        leading-4
                                                        text-slate-500
                                                        sm:text-[11px]
                                                       md:text-[12px]

                                                    "
                                                >
                                                    <Moon
                                                        className="
                                                            mt-0.5
                                                            h-4
                                                            w-4
                                                            shrink-0
                                                            text-[#2FC2B0]
                                                        "
                                                    />

                                                    <span>
                                                        {overnight}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* HIGHLIGHTS */}
                                <div
                                    className="
                                        col-span-2
                                        border-t
                                        border-[#E8EEEE]
                                        pt-3
                                        sm:col-span-1
                                        sm:border-l
                                        sm:border-t-0
                                        sm:pl-4
                                        sm:pt-0
                                        md:pl-5
                                    "
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <p
                                            className="
                                                text-[11px]
                                                font-bold
                                                text-[#00383B]
                                                sm:text-xs
                                                md:text-sm
                                            "
                                        >
                                            Highlights
                                        </p>

                                      
                                    </div>

                                    <div className="mt-1.5 flex flex-col gap-1">
                                        {activities.length > 0 ? (
                                            activities
                                                .slice(0, 4)
                                                .map(
                                                    (
                                                        activity,
                                                        activityIndex
                                                    ) => (
                                                        <div
                                                            key={`${activity}-${activityIndex}`}
                                                            className="
                                                                flex
                                                                items-start
                                                                gap-1.5
                                                            "
                                                        >
                                                            <span
                                                                className="
                                                                    mt-[6px]
                                                                    h-1
                                                                    w-1
                                                                    shrink-0
                                                                    rounded-full
                                                                    bg-[#2FC2B0]
                                                                "
                                                            />

                                                            <span
                                                                className="
                                                                     leading-4
                                                                    text-slate-500
                                                                    sm:text-[11px]
                                                                    md:text-[13px]
                                                                "
                                                            >
                                                                {activity}
                                                            </span>
                                                        </div>
                                                    )
                                                )
                                        ) : (
                                            <span className="text-[10px] text-slate-400 md:text-base">
                                                No highlights
                                            </span>
                                        )}

                                        {meals.length > 0 && (
                                            <div
                                                className="
                                                    flex
                                                    items-start
                                                    gap-1.5
                                                "
                                            >
                                                <span
                                                    className="
                                                        mt-[6px]
                                                        h-1
                                                        w-1
                                                        shrink-0
                                                        rounded-full
                                                        bg-[#2FC2B0]
                                                    "
                                                />

                                                <span
                                                    className="
                                                        text-[10px]
                                                        leading-4
                                                        text-slate-500
                                                        sm:text-[11px]
                                                        md:text-[13px]
                                                    "
                                                >
                                                    {meals.join(
                                                        " & "
                                                    )}
                                                </span>
                                            </div>
                                        )}

                                        {overnight && (
                                            <div
                                                className="
                                                    flex
                                                    items-start
                                                    gap-1.5
                                                "
                                            >
                                                <span
                                                    className="
                                                        mt-[6px]
                                                        h-1
                                                        w-1
                                                        shrink-0
                                                        rounded-full
                                                        bg-[#2FC2B0]
                                                    "
                                                />

                                                <span
                                                    className="
                                                        text-[10px]
                                                        leading-4
                                                        text-slate-500
                                                        sm:text-[11px]
                                                        md:text-[13px]
                                                    "
                                                >
                                                    Stay: {overnight}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                           
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}