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
        <div className="flex items-center justify-between px-3">
          <h2 className="font-semibold text-foreground sm:text-lg md:text-2xl">
            {title}
          </h2>

          <button
            type="button"
            className="text-sm font-medium text-primary transition-colors hover:underline"
          >
            View all
          </button>
        </div>

        {/* ACTIVITIES */}
        <div className="w-full py-2">
          <div className="grid w-full grid-cols-2 gap-4 border-b pb-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
            {activities.map((activity, index) => (
              <div
                key={`${activity}-${index}`}
                className="group flex min-h-[110px] w-full flex-col items-center justify-center gap-2 rounded-xl bg-white p-3 shadow-[0_0_12px_rgba(0,0,0,0.15)]"
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
 