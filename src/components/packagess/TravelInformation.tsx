"use client";

import {
    Bike,
    Languages,
    Plane,
    TrainFront,
    WalletCards,
    IdCard,
    MapPin,
    Shirt,
    Sun,
    Footprints,
    BatteryCharging,
    IndianRupee,
    Pill,
    Car,
    FileCheck,
    Train,
    CloudRain,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TravelInfo {
    id: string;
    title: string;
    value: string;
}

interface TravelInformationProps {
    destination: string;
    latitude?: number | null;
    longitude?: number | null;
    travelInfo?: TravelInfo[];
    packingItems?: string[];
    mapLabel?: string;
    className?: string;
}

const packingIcons = [
    Shirt,
    Sun,
    Footprints,
    CloudRain,
    BatteryCharging,
    Pill,
];

export default function TravelInformation({
    destination,
    latitude,
    longitude,
    travelInfo = [],
    packingItems = [],
    mapLabel = "View On Map",
    className,
}: TravelInformationProps) {
    const hasMap =
        typeof latitude === "number" &&
        typeof longitude === "number";

    const googleMapsUrl = hasMap
        ? `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
        : "";

    const googleMapEmbedUrl = hasMap
        ? `https://www.google.com/maps?q=${latitude},${longitude}&z=12&output=embed`
        : "";

    if (
        travelInfo.length === 0 &&
        packingItems.length === 0 &&
        !hasMap
    ) {
        return null;
    }

    return (
        <section
            className={cn(
                "relative z-0 mx-auto grid w-[94%] grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-[1.3fr_0.9fr_0.85fr]",
                className
            )}
        >
            {travelInfo.length > 0 && (
                <div className="rounded-[20px] border border-slate-200 bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)] sm:rounded-[24px] sm:p-5 md:p-6">
                    <h2 className="mb-4 font-heading text-xl font-medium sm:mb-5 sm:text-2xl">
                        Travel Information
                    </h2>

                    <div className="space-y-4 sm:space-y-5">
                        {travelInfo.map((item) => (
                            <div
                                key={item.id}
                                className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-start sm:gap-3"
                            >
                                <span className="min-w-0 flex-1 text-sm font-medium text-foreground sm:text-base">
                                    {item.title}
                                </span>

                                <span className="min-w-0 text-sm leading-5 text-slate-400 sm:max-w-[60%] sm:text-right sm:text-base">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {packingItems.length > 0 && (
                <div className="rounded-[20px] border border-slate-200 bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)] sm:rounded-[24px] sm:p-5 md:p-6">
                    <h2 className="mb-4 font-heading text-xl font-medium sm:mb-5 sm:text-2xl">
                        What to Pack
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:gap-5">
                        {packingItems.map((item, index) => {
                            const Icon =
                                packingIcons[
                                    index % packingIcons.length
                                ];

                            return (
                                <div
                                    key={`${item}-${index}`}
                                    className="flex items-center gap-2.5 sm:gap-3"
                                >
                                    <Icon
                                        size={24}
                                        strokeWidth={1.8}
                                        className="shrink-0 text-primary sm:size-[30px]"
                                    />

                                    <span className="text-sm text-foreground sm:text-base md:text-lg">
                                        {item}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {hasMap && (
                <div className="relative z-0 h-[260px] min-h-[260px] overflow-hidden rounded-[20px] border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.05)] sm:h-[300px] sm:min-h-[300px] sm:rounded-[24px] lg:h-auto lg:min-h-[300px]">
                    <iframe
                        src={googleMapEmbedUrl}
                        title={`${destination} Google Map`}
                        className="absolute inset-0 z-0 h-full w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${destination} on Google Maps`}
                        className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-[#25C6B7] px-3.5 py-2 text-xs font-medium text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#18b5a6] sm:bottom-5 sm:right-5 sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
                    >
                        <MapPin className="size-3.5 sm:size-[17px]" />
                        {mapLabel}
                    </a>
                </div>
            )}
        </section>
    );
}