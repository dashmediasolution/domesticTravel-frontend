import {
    CheckCircle2,
    XCircle,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import WhyVisit from "../WhyVisit";
import { cn } from "@/lib/utils";

interface InclusionsExclusionsProps {
    inclusions: string[];
    exclusions: string[];
    title:string;
    highlights:string[]
    className?: string;
}

export default function InclusionsExclusions({
    inclusions,
    exclusions,
    title,
    highlights,
    className,
}: InclusionsExclusionsProps) {
    return (
        <section className={cn("w-full", className)}>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
                Inclusions & Exclusions
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* Included */}
                <Card className="rounded-2xl border border-[#2FC2B0] shadow-none">
                    <CardHeader className="px-5">
                        <CardTitle className="text-2xl font-semibold text-[#2FC2B0]">
                            What's Included
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="px-5">
                        <ul className="space-y-2">
                            {inclusions.map((item, index) => (
                                <li
                                    key={`${item}-${index}`}
                                    className="flex items-center justify-start gap-2.5 text-[1rem] leading-relaxed text-gray-700"
                                >
                                    <CheckCircle2
                                        className="mt-0.5 h-4 w-4 shrink-0 text-[#2FC2B0]"
                                        strokeWidth={2}
                                    />

                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Excluded */}
                <Card className="rounded-2xl border-gray-200 bg-gray-50/60 shadow-none">
                    <CardHeader className="px-5 ">
                        <CardTitle className="text-2xl font-semibold text-red-500">
                            What's Excluded
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="px-5">
                        <ul className="space-y-2">
                            {exclusions.map((item, index) => (
                                <li
                                    key={`${item}-${index}`}
                                    className="flex items-center justify-start gap-2.5 text-[1rem] leading-relaxed text-gray-700"
                                >
                                    <XCircle
                                        className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                                        strokeWidth={2}
                                    />

                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                 <WhyVisit
                    title={title}
                    highlights={highlights}
                    />
            </div>
        </section>
    );
}