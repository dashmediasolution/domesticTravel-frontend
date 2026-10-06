"use client";

import { Compass } from "lucide-react";

interface ThingsToDoProps {
  title: string;
  activities?: string[];
  className?: string;
}

export default function ThingsToDo({
  title,
  activities = [],
  className = "",
}: ThingsToDoProps) {
  if (activities.length === 0) {
    return null;
  }

  return (
    <section className={`flex w-full justify-center ${className}`}>
      <div className="flex w-full flex-col gap-5">

        {/* TITLE */}
        <div className="px-3">
          <h2 className="font-semibold text-foreground sm:text-lg md:text-2xl">
            {title}
          </h2>
        </div>

        {/* ACTIVITIES */}
        <div
          className="
            w-full
            overflow-x-auto
            px-3
            py-2
            pb-4
            [scrollbar-width:thin]
            [scrollbar-color:#d1d5db_transparent]
            [&::-webkit-scrollbar]:h-1
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
          "
        >
          <div className="flex w-max min-w-full gap-4">
            {activities.map((activity, index) => (
              <div
                key={`${activity}-${index}`}
                className="
                  group
                  flex
                  h-[125px]
                  w-[150px]
                  shrink-0
                  flex-col
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  p-3
                  shadow-[0_0_12px_rgba(0,0,0,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_6px_18px_rgba(0,0,0,0.14)]
                  sm:w-[170px]
                  md:w-[180px]
                "
              >
                {/* ICON */}
                <div
                  className="
                    mb-3
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-[#E7F5F3]
                    transition-colors
                    duration-300
                    group-hover:bg-[#D6F0EC]
                  "
                >
                  <Compass
                    className="
                      h-6
                      w-6
                      text-[#00636A]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* ACTIVITY */}
                <span
                  className="
                    px-2
                    text-center
                    text-[14px]
                    font-medium
                    leading-5
                    text-foreground
                    sm:text-[15px]
                  "
                >
                  {activity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}