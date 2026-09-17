"use client";

import {
    CloudRain,
    Flame,
    Snowflake,
    Flower2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Season {
    name: string;
    months: string;
    description: string;
    icon: "winter" | "summer" | "monsoon" | "spring";
}

interface BestTimeToVisitProps {
    months: string[];
    seasons: Season[];
    className?: string;
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

const seasonStyles = {
    winter: {
        border: "#BDD8F7",
        icon: "#0D54B3",
        component: Snowflake,
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
    spring: {
        border: "#F4C2D7",
        icon: "#C43D73",
        component: Flower2,
    },
};

export default function BestTimeToVisit({
    months,
    seasons,
    className,
}: BestTimeToVisitProps) {
    return (
        <section className={cn("w-full lg:w-[51%] h-full" , className)}>
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

            <div
                className="
                    mb-5
                    flex
                    w-full
                    h-full
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
                    const isBestMonth = months.includes(month);

                    return (
                        <div
                            key={month}
                            className={cn(
                                `
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
                                `,
                                isBestMonth
                                    ? "bg-teal-500 text-white"
                                    : "bg-neutral-100 text-foreground"
                            )}
                        >
                            {month}
                        </div>
                    );
                })}
            </div>

            <div
                className="
                    grid
                    grid-cols-2
                    gap-2.5
                    sm:gap-4
                    lg:grid-cols-3
                    lg:gap-6
                "
            >
                {seasons.map((season) => {
                    const style = seasonStyles[season.icon];
                    const Icon = style.component;

                    return (
                        <div
                            key={season.name}
                            style={{
                                borderColor: style.border,
                            }}
                            className="
                                min-h-[165px]
                                overflow-hidden
                                rounded-[14px]
                                border
                                bg-white
                                p-3
                                shadow-sm
                                sm:min-h-[220px]
                                sm:rounded-[20px]
                                sm:p-5
                                lg:min-h-[287px]
                                lg:rounded-[24px]
                                lg:px-6
                            "
                        >
                            <Icon
                                strokeWidth={2}
                                className="
                                    mb-1.5
                                    h-5
                                    w-5
                                    sm:mb-3
                                    sm:h-7
                                    sm:w-7
                                    lg:h-8
                                    lg:w-8
                                "
                                style={{
                                    color: style.icon,
                                }}
                            />

                            <h3
                                className="
                                    font-heading
                                    text-[18px]
                                    font-bold
                                    leading-tight
                                    sm:text-[25px]
                                    lg:text-3xl
                                "
                                style={{
                                    color: style.icon,
                                }}
                            >
                                {season.name}
                            </h3>

                            <p
                                className="
                                    mt-0.5
                                    text-[10px]
                                    leading-4
                                    text-slate-600
                                    sm:mt-1
                                    sm:text-sm
                                    lg:text-xl
                                "
                            >
                                {season.months}
                            </p>

                            <p
                                className="
                                    mt-2
                                    line-clamp-3
                                    text-[10px]
                                    leading-2
                                    text-slate-600
                                    sm:mt-4
                                    sm:text-sm
                                    sm:leading-5
                                    lg:mt-4
                                    lg:line-clamp-none
                                    lg:max-w-[250px]
                                    lg:text-lg
                                    lg:leading-7
                                "
                            >
                                {season.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}