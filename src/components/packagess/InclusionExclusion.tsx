
import Image from "next/image";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
    CheckCircle2,
    XCircle,
    Phone,
} from "lucide-react";
interface InclusionsExclusionsProps {
    inclusions: string[];
    exclusions: string[];
    title: string;
    highlights: string[];
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
                <Card className="rounded-2xl border border-gray-200 bg-gray-50/60 shadow-none">
                    <CardHeader className="px-5">
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

                {/* CTA Image */}
                {/* CTA Image */}
                <div className="relative min-h-[300px] overflow-hidden rounded-2xl">
                    <Image
                        src="/images/signup.png"
                        alt="Plan your trip with WANDER-INDIA"
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/30 to-black/75" />

                    {/* Top Right Content */}
                    <div className="absolute right-5 top-5 max-w-[210px] text-right">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#2FC2B0]">
                            WANDER-INDIA
                        </p>

                        <h3 className="mt-1 text-2xl font-bold leading-tight text-white">
                            Plan Your Trip
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-white/90">
                            Explore India with Us.
                        </p>
                    </div>

                    {/* Travel Information */}
                    <div className="absolute bottom-20 left-5 right-5">
                        <div className="mb-3 flex flex-wrap gap-2">
                            <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                                ✓ Trusted Travel
                            </span>

                            <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                                ✓ Expert Support
                            </span>
                        </div>

                        <p className="max-w-[260px] text-sm leading-relaxed text-white/90">
                            Get personalized help with packages, dates, stays and your complete
                            travel plan.
                        </p>
                    </div>

                    {/* Call Button */}
                    <a
                        href="tel:+919876543210"
                        className="absolute bottom-5 left-5 right-5 flex h-11 items-center justify-center gap-2 rounded-full bg-[#2FC2B0] px-5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#25aa9b] hover:shadow-xl"
                    >
                        <Phone className="h-4 w-4" />
                        Call Us
                    </a>
                </div>
            </div>
        </section>
    );
}