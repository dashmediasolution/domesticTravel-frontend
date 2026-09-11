"use client";

import { CloudRain, Flame, Snowflake } from "lucide-react";
import { cn } from "@/lib/utils";

interface Season {
    name: string;
    months: string;
    description: string;
    icon: "winter" | "summer" | "monsoon";
}

interface BestTimeToVisitProps {
    months: string[];
    seasons: Season[];
    className?: string;
}

const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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
};

export default function BestTimeToVisit({ months, seasons, className }: BestTimeToVisitProps) {
    return (
        <section className={cn("w-[51%]", className)}>
            <h2 className="mb-6 font-heading text-2xl font-semibold">Best Time to Visit</h2>

            <div className="mb-8 flex gap-4 overflow-x-auto scrollbar-none">
                {allMonths.map((month) => {
                    const isBestMonth = months.includes(month);

                    return (
                        <div key={month} className={cn("shrink-0 rounded-lg px-3 py-2 text-base font-medium", isBestMonth ? "bg-teal-500 text-white" : "bg-neutral-100 text-foreground")}>
                            {month}
                        </div>
                    );
                })}
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {seasons.map((season) => {
                    const style = seasonStyles[season.icon];
                    const Icon = style.component;

                    return (
                        <div key={season.name} style={{ borderColor: style.border }} className="min-h-[287px] rounded-[24px] border bg-white p-6 shadow-sm">
                            <Icon size={32} strokeWidth={2} style={{ color: style.icon }} className="mb-3" />
                         <h3 className="font-heading text-3xl font-bold" style={{ color: style.icon }}>{season.name}</h3>
                            <p className="mt-1 text-xl text-slate-600">{season.months}</p>
                            <p className="mt-5 max-w-[250px] text-lg leading-9 text-slate-600">{season.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}