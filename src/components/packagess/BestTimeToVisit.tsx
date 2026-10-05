"use client";

import { useRef, useState } from "react";
import {
    CloudRain,
    Flame,
    Snowflake,
    Flower2,
    Leaf,
    Sparkles,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

interface BestTimeToVisitProps {
    months?: string[];
    className?: string;
}

type SeasonType =
    | "winter"
    | "spring"
    | "summer"
    | "monsoon"
    | "autumn"
    | "festival";

interface Season {
    name: string;
    months: string;
    description: string;
    icon: SeasonType;
}

const allMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const monthMap: Record<string, string> = {
    january: "Jan",
    february: "Feb",
    march: "Mar",
    april: "Apr",
    may: "May",
    june: "Jun",
    july: "Jul",
    august: "Aug",
    september: "Sep",
    october: "Oct",
    november: "Nov",
    december: "Dec",

    jan: "Jan",
    feb: "Feb",
    mar: "Mar",
    apr: "Apr",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dec",
};

const seasonStyles = {
    winter: {
        border: "#BDD8F7",
        icon: "#0D54B3",
        component: Snowflake,
    },

    spring: {
        border: "#F4C2D7",
        icon: "#C43D73",
        component: Flower2,
    },

    summer: {
        border: "#96D2B4",
        icon: "#097447",
        component: Flame,
    },

    monsoon: {
        border: "#BFB4E2",
        icon: "#484ACA",
        component: CloudRain,
    },

    autumn: {
        border: "#F3D4A5",
        icon: "#B86B00",
        component: Leaf,
    },

    festival: {
        border: "#E7C7F5",
        icon: "#8B3FB5",
        component: Sparkles,
    },
};

const seasonData: Record<SeasonType, Season> = {
    winter: {
        name: "Winter",
        months: "December - February",
        description:
            "Cool and pleasant weather, ideal for exploring destinations, enjoying scenic landscapes, and experiencing winter attractions.",
        icon: "winter",
    },

    spring: {
        name: "Spring",
        months: "March - May",
        description:
            "Pleasant temperatures, blooming landscapes, and comfortable conditions make spring a great time to explore.",
        icon: "spring",
    },

    summer: {
        name: "Summer",
        months: "May - June",
        description:
            "Warm days are ideal for mountain escapes, outdoor adventures, and exploring cooler destinations.",
        icon: "summer",
    },

    monsoon: {
        name: "Monsoon",
        months: "July - September",
        description:
            "Fresh greenery, misty landscapes, and rejuvenated waterfalls create a beautiful monsoon experience.",
        icon: "monsoon",
    },

    autumn: {
        name: "Autumn",
        months: "October - November",
        description:
            "Clear skies, pleasant temperatures, and beautiful landscapes make autumn an excellent season to travel.",
        icon: "autumn",
    },

    festival: {
        name: "Festival Season",
        months: "October - November",
        description:
            "Experience vibrant celebrations, cultural traditions, local festivals, and memorable seasonal events.",
        icon: "festival",
    },
};

const seasonMonths: Record<SeasonType, string[]> = {
    winter: ["Dec", "Jan", "Feb"],
    spring: ["Mar", "Apr", "May"],
    summer: ["May", "Jun"],
    monsoon: ["Jul", "Aug", "Sep"],
    autumn: ["Oct", "Nov"],
    festival: ["Oct", "Nov"],
};

export default function BestTimeToVisit({
    months = [],
    className = "",
}: BestTimeToVisitProps) {
    const carouselRef = useRef<HTMLDivElement>(null);

    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const normalizedMonths = months
        .map((month) => {
            const value = String(month).trim().toLowerCase();

            return monthMap[value];
        })
        .filter(Boolean);

    const activeSeasons = (
        [
            "winter",
            "spring",
            "summer",
            "monsoon",
            "autumn",
        ] as SeasonType[]
    ).filter((season) =>
        seasonMonths[season].some((month) =>
            normalizedMonths.includes(month)
        )
    );

    const seasons = activeSeasons.map(
        (season) => seasonData[season]
    );

    const showCarouselButtons = seasons.length > 3;

    const updateScrollState = () => {
        const container = carouselRef.current;

        if (!container) {
            return;
        }

        const { scrollLeft, scrollWidth, clientWidth } =
            container;

        setIsAtStart(scrollLeft <= 5);

        setIsAtEnd(
            scrollLeft + clientWidth >= scrollWidth - 5
        );
    };

    const scrollCarousel = (direction: "left" | "right") => {
        const container = carouselRef.current;

        if (!container) {
            return;
        }

        const cardWidth =
            container.querySelector<HTMLElement>(
                "[data-season-card]"
            )?.offsetWidth || 300;

        const gap = 16;

        container.scrollBy({
            left:
                direction === "right"
                    ? cardWidth + gap
                    : -(cardWidth + gap),
            behavior: "smooth",
        });

        setTimeout(updateScrollState, 350);
    };

    return (
        <section
            className={`w-full ${className}`}
        >
            <h2
                className="
                    mb-3
                    text-[18px]
                    font-semibold
                    tracking-tight
                    sm:mb-5
                    sm:text-[22px]
                    lg:mb-6
                    lg:text-2xl
                "
            >
                Best Time to Visit
            </h2>

            {/* MONTHS */}
            <div
                className="
                    mb-5
                    flex
                    w-full
                    gap-1
                    overflow-x-auto
                    pb-1
                    scrollbar-none
                    sm:mb-7
                    sm:gap-3
                    lg:mb-8
                    lg:gap-4
                "
            >
                {allMonths.map((month) => {
                    const isBestMonth =
                        normalizedMonths.includes(month);

                    return (
                        <div
                            key={month}
                            className={`
                                flex
                                h-7
                                min-w-[38px]
                                shrink-0
                                items-center
                                justify-center
                                rounded-md
                                px-0.5
                                text-[10px]
                                font-medium
                                sm:h-9
                                sm:min-w-[45px]
                                sm:rounded-lg
                                sm:text-sm
                                lg:text-base
                                ${
                                    isBestMonth
                                        ? "bg-primary text-white"
                                        : "bg-neutral-100 text-foreground"
                                }
                            `}
                        >
                            {month}
                        </div>
                    );
                })}
            </div>

            {/* SEASON CAROUSEL */}
            {seasons.length > 0 && (
                <div className="relative w-full">
                    {/* LEFT BUTTON */}
                    {showCarouselButtons && (
                        <button
                            type="button"
                            onClick={() =>
                                scrollCarousel("left")
                            }
                            disabled={isAtStart}
                            aria-label="Previous seasons"
                            className="
                                absolute
                                left-0
                                top-1/2
                                z-10
                                hidden
                                h-10
                                w-10
                                -translate-x-1/2
                                -translate-y-1/2
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
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                                sm:flex
                            "
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                    )}

                    {/* CARDS */}
                    <div
                        ref={carouselRef}
                        onScroll={updateScrollState}
                        className="
                            flex
                            w-full
                            gap-4
                            overflow-x-auto
                            pb-4
                            scroll-smooth
                            [scrollbar-width:thin]
                            [scrollbar-color:#d1d5db_transparent]
                            [&::-webkit-scrollbar]:h-1
                            [&::-webkit-scrollbar-track]:bg-transparent
                            [&::-webkit-scrollbar-thumb]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-gray-300
                        "
                    >
                        {seasons.map((season) => {
                            const style =
                                seasonStyles[season.icon];

                            const Icon =
                                style.component;

                            return (
                                <div
                                    key={season.name}
                                    data-season-card
                                    className="
                                        min-h-[200px]
                                        w-[280px]
                                        shrink-0
                                        rounded-[20px]
                                        border
                                        bg-white
                                        p-5
                                        shadow-sm
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:shadow-md
                                        sm:min-h-[220px]
                                        sm:w-[320px]
                                        sm:p-6
                                        lg:min-h-[250px]
                                        lg:w-[calc((100%-32px)/3)]
                                    "
                                    style={{
                                        borderColor:
                                            style.border,
                                    }}
                                >
                                    <Icon
                                        className="mb-3 h-8 w-8"
                                        strokeWidth={2}
                                        style={{
                                            color:
                                                style.icon,
                                        }}
                                    />

                                    <h3
                                        className="
                                            text-2xl
                                            font-bold
                                            leading-tight
                                        "
                                        style={{
                                            color:
                                                style.icon,
                                        }}
                                    >
                                        {season.name}
                                    </h3>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            font-medium
                                            text-slate-600
                                        "
                                    >
                                        {season.months}
                                    </p>

                                    <p
                                        className="
                                            mt-4
                                             text-sm
                                            leading-6
                                            text-slate-600
                                        "
                                    >
                                        {season.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT BUTTON */}
                    {showCarouselButtons && (
                        <button
                            type="button"
                            onClick={() =>
                                scrollCarousel("right")
                            }
                            disabled={isAtEnd}
                            aria-label="Next seasons"
                            className="
                                absolute
                                right-0
                                top-1/2
                                z-10
                                hidden
                                h-10
                                w-10
                                translate-x-1/2
                                -translate-y-1/2
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
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                                sm:flex
                            "
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    )}
                </div>
            )}
        </section>
    );
}