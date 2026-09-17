import {
    CheckCircle2,
    XCircle,
    Landmark,
    Mountain,
    Route,
    Languages,
    NotebookTabs,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface InclusionExclusionItem {
    label: string;
}

interface VisitReason {
    label: string;
    icon?: React.ElementType;
}

interface InclusionsExclusionsProps {
    inclusions: InclusionExclusionItem[];
    exclusions: InclusionExclusionItem[];
    visitTitle?: string;
    visitReasons: VisitReason[];
    className?: string;
}

export default function InclusionsExclusions({
    inclusions,
    exclusions,
    visitTitle = "Why Visit Sri Lanka",
    visitReasons,
    className,
}: InclusionsExclusionsProps) {
    return (
        <section className={cn("w-full", className)}>
            <h2 className="mb-3 text-[16px] font-semibold text-foreground">
                Inclusions & Exclusions
            </h2>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {/* What's Included */}
                <Card className="rounded-2xl border-[#2FC2B0] shadow-none">
                    <CardHeader className="px-4 pb-2 pt-3">
                        <CardTitle className="text-[10px] font-medium text-[#2FC2B0]">
                            What's Included
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="px-4 pb-3">
                        <ul className="space-y-1.5">
                            {inclusions.map((item, index) => (
                                <li
                                    key={`${item.label}-${index}`}
                                    className="flex items-start gap-1.5 text-[9px] leading-[1.35] text-gray-700"
                                >
                                    <CheckCircle2
                                        className="mt-[1px] h-[12px] w-[12px] shrink-0 text-[#2FC2B0]"
                                        strokeWidth={1.7}
                                    />

                                    <span>{item.label}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* What's Excluded */}
                <Card className="rounded-2xl border-gray-200 bg-gray-50/60 shadow-none">
                    <CardHeader className="px-4 pb-2 pt-3">
                        <CardTitle className="text-[10px] font-medium text-red-500">
                            What's Excluded
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="px-4 pb-3">
                        <ul className="space-y-1.5">
                            {exclusions.map((item, index) => (
                                <li
                                    key={`${item.label}-${index}`}
                                    className="flex items-start gap-1.5 text-[9px] leading-[1.35] text-gray-700"
                                >
                                    <XCircle
                                        className="mt-[1px] h-[12px] w-[12px] shrink-0 text-red-500"
                                        strokeWidth={1.7}
                                    />

                                    <span>{item.label}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Why Visit */}
                <Card className="rounded-2xl border-gray-200 shadow-sm md:col-span-2 lg:col-span-1">
                    <CardHeader className="px-4 pb-2 pt-3">
                        <CardTitle className="text-[13px] font-semibold text-gray-800">
                            {visitTitle}
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="px-4 pb-3">
                        <ul className="space-y-3">
                            {visitReasons.map((reason, index) => {
                                const Icon = reason.icon || Landmark;

                                return (
                                    <li
                                        key={`${reason.label}-${index}`}
                                        className="flex items-start gap-2"
                                    >
                                        <Icon
                                            className="mt-[1px] h-[15px] w-[15px] shrink-0 text-[#2FC2B0]"
                                            strokeWidth={1.7}
                                        />

                                        <span className="text-[9px] leading-[1.4] text-gray-700">
                                            {reason.label}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}