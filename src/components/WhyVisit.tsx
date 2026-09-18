import { Check } from "lucide-react";

interface WhyVisitProps {
    title: string;
     highlights: string[];
}

export default function WhyVisit({
    title,
     highlights,
}: WhyVisitProps) {
    return (
        <section className="w-[50%] h-fit mt-10 rounded-[28px] border bg-white p-6 sm:p-7 lg:p-6">
            <div className="mb-6">
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#2FC2B0]">
                    Explore More
                </p>

                <h2 className="font-bebas text-2xl leading-none  ">
                    {title}
                </h2>
 
            </div>

            <div className="flex flex-col gap-3">
                {highlights.map((highlight) => (
                    <div
                        key={highlight}
                        className="flex items-center gap-3 rounded-xl bg-muted/50 px-4 py-3"
                    >
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#2FC2B0]/15 text-[#2FC2B0]">
                            <Check className="size-4" />
                        </span>

                        <span className="text-sm font-medium">
                            {highlight}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}