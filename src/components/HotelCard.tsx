"use client";

import Image from "next/image";
import {
    Bath,
    BedDouble,
    Heart,
    MapPin,
    Star,
    Utensils,
    Wifi,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Hotel {
    id: string;
    name: string;
    image: string;
    badge?: string;
    badgeColor?: "yellow" | "green" | "blue";
    location: string;
    rating: string;
    reviews: string;
    price: string;
    oldPrice?: string;
    amenities?: string[];
}

interface HotelCardProps {
    hotel: Hotel;
    onViewDetails?: (hotel: Hotel) => void;
}

const badgeStyles = {
    yellow: "bg-primary-400 text-neutral-900",
    green: "bg-emerald-500 text-white",
    blue: "bg-sky-600 text-white",
};

const amenityIcons = {
    "Free Wi-Fi": Wifi,
    Breakfast: Utensils,
    "Swimming Pool": Bath,
    "Room Service": BedDouble,
    "Free Parking": MapPin,
};

export function HotelCard({
    hotel,
    onViewDetails,
}: HotelCardProps) {
    return (
        <Card className="group overflow-hidden rounded-lg gap-0 border border-neutral-200 bg-white p-0 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            {/* Image */}
            <div className="relative aspect-[2/1] w-full overflow-hidden">
                <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

 
                {/* Badge */}
                {hotel.badge && (
                    <Badge
                        className={`absolute left-2 top-2 rounded-md border-0 px-1.5 py-0.5 text-[8px] font-semibold shadow-sm sm:text-[12px] ${
                            badgeStyles[hotel.badgeColor ?? "yellow"]
                        }`}
                    >
                        {hotel.badge}
                    </Badge>
                )}

                {/* Wishlist */}
                <button
                    type="button"
                    aria-label={`Add ${hotel.name} to wishlist`}
                    className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-red-500 sm:size-7"
                >
                    <Heart className="size-3.5 sm:size-4" />
                </button>
            </div>

            {/* Content */}
            <div className="p-2.5 sm:p-3">
                {/* Hotel name */}
                <h3 className="line-clamp-1 text-[11px] font-bold text-neutral-800 sm:text-sm">
                    {hotel.name}
                </h3>

                {/* Location */}
                <div className="mt-0.5 flex min-w-0 items-center gap-1 text-[8px] text-neutral-500 sm:text-sm">
                    <MapPin className="size-2.5 shrink-0 text-primary" />

                    <span className="truncate">
                        {hotel.location}
                    </span>
                </div>

                {/* Rating */}
                <div className="mt-1 flex items-center gap-1">
                    <div className="flex items-center gap-0.5">
                        <Star className="size-2.5 fill-primary-400 text-primary-400" />

                        <span className="text-[9px] font-semibold text-neutral-700 sm:text-sm">
                            {hotel.rating}
                        </span>
                    </div>

                    <span className="text-[8px] text-neutral-400 sm:text-[9px]">
                        ({hotel.reviews})
                    </span>
                </div>

                {/* Amenities */}
                {hotel.amenities && hotel.amenities.length > 0 && (
                    <div className="mt-2 flex min-h-[18px] flex-wrap gap-x-2.5 gap-y-1">
                        {hotel.amenities.slice(0, 3).map((amenity) => {
                            const Icon =
                                amenityIcons[
                                    amenity as keyof typeof amenityIcons
                                ] ?? Wifi;

                            return (
                                <div
                                    key={amenity}
                                    className="flex items-center gap-0.5 text-[7px] text-neutral-500 sm:text-sm"
                                >
                                    <Icon className="size-2.5 shrink-0 text-neutral-400" />

                                    <span className="whitespace-nowrap">
                                        {amenity}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Bottom */}
                <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-neutral-100 pt-2">
                    {/* Price */}
                    <div className="min-w-0">
                        {hotel.oldPrice && (
                            <span className="mr-1 text-sm text-neutral-400 line-through">
                                {hotel.oldPrice}
                            </span>
                        )}

                        <span className="text-xs font-bold text-neutral-900 sm:text-lg">
                            {hotel.price}
                        </span>

                        <span className="ml-0.5 text-[7px] text-neutral-400 sm:text-sm">
                            /night
                        </span>
                    </div>

                    {/* CTA */}
                    <Button
                        type="button"
                        onClick={() => onViewDetails?.(hotel)}
                        className="h-6 shrink-0 rounded-md bg-primary px-2.5 text-[8px] font-semibold
                         text-white hover:bg-primary-300 sm:h-8 sm:px-3 sm:text-[1rem] cursor-pointer"
                    >
                        View Details
                    </Button>
                </div>
            </div>
        </Card>
    );
}