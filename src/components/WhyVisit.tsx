import { Check } from "lucide-react";

interface WhyVisitItem {
    id: string;
    title: string;
    description: string;
}

interface WhyVisitProps {
    items?: WhyVisitItem[];
    destination:string
}

export default function WhyVisit({
    items = [],
    destination 
}: WhyVisitProps) {
    if (items.length === 0) {
        return null;
    }

    return (
        <section className="h-fit w-full rounded-[28px] border bg-white p-6 sm:p-7 lg:p-6">
            <div className="mb-6">
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#2FC2B0]">
                    Explore More
                </p>

                <h2 className="font-bebas text-2xl leading-none">
                    Why Visit {destination}
                </h2>
            </div>

            <div className="flex flex-col gap-3">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-start gap-3 rounded-xl bg-muted/50 px-4 py-3"
                    >
                        <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#2FC2B0]/15 text-[#2FC2B0]">
                            <Check className="size-4" />
                        </span>

                        <div>
                            <h3 className="text-sm font-semibold">
                                {item.title}
                            </h3>

                            <p className="mt-1 text-sm text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}