"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Activity {
    text: string;
    icon: LucideIcon;
}

interface ThingsToDoProps {
    title: string;
    activities: Activity[];
    className?: string;
}

export default function ThingsToDo({ title, activities, className }: ThingsToDoProps) {
    return (
        <section className={cn("flex w-screen justify-center", className)}>
            <div className="flex w-[94%] flex-col gap-5">
                <div className="flex items-center justify-between px-3">
                    <h2 className=" font-semibold text-foreground sm:text-lg md:text-2xl">
                        {title}
                    </h2>

                    <button className="text-sm font-medium text-primary transition-colors hover:underline">
                        View all
                    </button>
                </div>

                <div className="w-full px-3 py-2">
                    <div className="grid w-full grid-cols-2 gap-4 border-b pb-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
                        {activities.map((activity, index) => {
                            const Icon = activity.icon;

                            return (
                                <div
                                    key={`${activity.text}-${index}`}
                                    className="group flex min-h-[110px] w-full flex-col items-center justify-center gap-2 rounded-xl bg-white p-3 shadow-[0_0_12px_rgba(0,0,0,0.15)]"
                                >
                                    <Icon
                                        size={31}
                                        strokeWidth={1.5}
                                        className="text-primary transition-transform duration-200 group-hover:scale-110"
                                    />

                                    <span className="text-center text-md font-normal text-foreground sm:text-base">
                                        {activity.text}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}