"use client";

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
    py-2
    overflow-x-auto
    px-3
    pb-4
    [scrollbar-width:thin]
    [scrollbar-color:#d1d5db_transparent]
    [&::-webkit-scrollbar]:h-1
    [&::-webkit-scrollbar-track]:bg-transparent
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-gray-300
  "
>
          <div className="flex w-max min-w-full gap-4   ">
            {activities.map((activity, index) => (
              <div
                key={`${activity}-${index}`}
                className="
                  group
                  flex
                  h-[110px]
                  w-[150px]
                  shrink-0
                  flex-col
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  p-3
                  shadow-[0_0_12px_rgba(0,0,0,0.15)]
                  sm:w-[170px]
                  md:w-[180px]
                "
              >
                <span className="text-center text-md font-normal text-foreground sm:text-base">
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