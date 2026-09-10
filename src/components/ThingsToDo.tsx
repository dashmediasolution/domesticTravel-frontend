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

export default function ThingsToDo({
  title,
  activities,
  className,
}: ThingsToDoProps) {
  return (
    <section className="w-screen flex justify-center  items-center">
        <div className="w-[94%] flex flex-col justify-center items-start">

      <h2 className="mb-3 ml-3 text-base font-semibold text-foreground sm:text-lg">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-auto    w-full items-start pb-2 scrollbar-none sm:gap-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={`${activity.text}-${index}`}
              className="
                group
                flex
                h-[85px]
                min-w-[130px]
                my-2
                ml-2
                shrink-0
                flex-col
                items-center
                justify-center
                gap-1
                rounded-xl
                 border-neutral-200
                bg-white
shadow-[0_0_12px_rgba(0,0,0,0.15)]         
              "
            >
              <Icon
                size={31}
                strokeWidth={1.5}
                className="
                  text-primary
                  transition-transform
                  duration-200
                  group-hover:scale-110
                "
              />

              <span className="text-md font-normal text-foreground">
                {activity.text}
              </span>
            </div>
          );
        })}
      </div>
        </div>
    </section>
  );
}