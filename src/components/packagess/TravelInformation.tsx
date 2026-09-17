 
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
    Pill,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TravelInfo {
    label: string;
    value: string;
    icon: string;
}

interface PackingItem {
    label: string;
    icon: string;
}

interface TravelInformationProps {
    destination: string;
    latitude: number;
    longitude: number;
    travelInfo: TravelInfo[];
    packingItems: PackingItem[];
    mapLabel?: string;
    className?: string;
}

const travelIcons = {
    airport: Plane,
    railway: TrainFront,
    transport: Bike,
    language: Languages,
    permit: IdCard,
    currency: WalletCards,
};

const packingIcons = {
    clothes: Shirt,
    sunglasses: Sun,
    shoes: Footprints,
    powerbank: BatteryCharging,
    medicine: Pill,
};

export default function TravelInformation({
    destination,
    latitude,
    longitude,
    travelInfo,
    packingItems,
    mapLabel = "View On Map",
    className,
}: TravelInformationProps) {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    const googleMapEmbedUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=12&output=embed`;

    return (
        <section
            className={cn(
                "grid w-[94%] grid-cols-1 gap-5 lg:grid-cols-[1.3fr_0.9fr_0.85fr]",
                className
            )}
        >
            {/* Travel Information */}
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
                <h2 className="mb-5 font-heading text-2xl font-semibold">
                    Travel Information
                </h2>

                <div className="space-y-5">
                    {travelInfo.map((item, index) => {
                        const Icon =
                            travelIcons[
                                item.icon as keyof typeof travelIcons
                            ];

                        if (!Icon) return null;

                        return (
                            <div
                                key={`${item.label}-${index}`}
                                className="flex items-center gap-3"
                            >
                                <Icon
                                    size={30}
                                    strokeWidth={1.8}
                                    className="shrink-0 text-primary"
                                />

                                <span className="min-w-0 text-lg font-medium text-foreground">
                                    {item.label}
                                </span>

                                <span className="ml-auto text-right text-lg text-slate-400">
                                    {item.value}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* What To Pack */}
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
                <h2 className="mb-5 font-heading text-2xl font-semibold">
                    What to Pack
                </h2>

                <div className="space-y-5">
                    {packingItems.map((item, index) => {
                        const Icon =
                            packingIcons[
                                item.icon as keyof typeof packingIcons
                            ];

                        if (!Icon) return null;

                        return (
                            <div
                                key={`${item.label}-${index}`}
                                className="flex items-center gap-3"
                            >
                                <Icon
                                    size={30}
                                    strokeWidth={1.8}
                                    className="shrink-0 text-[#16C6B2]"
                                />

                                <span className="text-lg font-medium text-foreground">
                                    {item.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Google Map */}
            <div className="relative h-full overflow-hidden rounded-[24px] border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
                <iframe
                    src={googleMapEmbedUrl}
                    title={`${destination} Google Map`}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

                <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${destination} on Google Maps`}
                    className="
                        absolute
                        bottom-5
                        right-5
                        z-10
                        flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#25C6B7]
                        px-5
                        py-3
                        text-sm
                        font-medium
                        text-white
                        shadow-lg
                        transition-all
                        duration-200
                        hover:scale-105
                        hover:bg-[#18b5a6]
                    "
                >
                    <MapPin size={17} />
                    {mapLabel}
                </a>
            </div>
        </section>
    );
}
 
