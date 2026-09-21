"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
    ArrowRight,
    BusFront,
    CalendarDays,
    CheckCircle2,
    ChevronDown,
    Clock3,
    MapPin,
    Plug,
    Snowflake,
    Star,
    Wifi,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Bus {
    id: number;
    name: string;
    operator: string;
    image: string;
    badge: string;
    badgeColor: "yellow" | "blue" | "green";
    rating: string;
    reviews: string;
    busType: string;
    amenities: string[];
    departure: string;
    departureCity: string;
    arrival: string;
    arrivalCity: string;
    duration: string;
    stops: string;
    price: string;
}

const buses: Bus[] = [
    {
        id: 1,
        name: "Volvo Multi-Axle AC Sleeper",
        operator: "Himachal Roadways",
        image:
            "https://images.unsplash.com/photo-1478359900967-91ec0c6edc60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsJTIwYnVzfGVufDB8fDB8fHww",
        badge: "Best Seller",
        badgeColor: "yellow",
        rating: "4.5",
        reviews: "2.8K reviews",
        busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Point", "Blanket"],
        departure: "10:00 PM",
        departureCity: "Delhi",
        arrival: "08:00 AM",
        arrivalCity: "Manali",
        duration: "10h 00m",
        stops: "Non Stop",
        price: "₹1,199",
    },
    {
        id: 2,
        name: "Scania AC Sleeper",
        operator: "Orange Travels",
        image:
            "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=85",
        badge: "Top Rated",
        badgeColor: "blue",
        rating: "4.3",
        reviews: "1.9K reviews",
        busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Point", "Blanket"],
        departure: "09:30 PM",
        departureCity: "Delhi",
        arrival: "07:30 AM",
        arrivalCity: "Manali",
        duration: "10h 00m",
        stops: "Non Stop",
        price: "₹1,249",
    },
    {
        id: 3,
        name: "Volvo AC Seater",
        operator: "KTC Travels",
        image:
            "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c3xlbnwwfHwwfHx8MA%3D%3D",
        badge: "Great Deal",
        badgeColor: "green",
        rating: "4.1",
        reviews: "1.2K reviews",
        busType: "AC Seater",
        amenities: ["WiFi", "Charging Point"],
        departure: "08:00 PM",
        departureCity: "Delhi",
        arrival: "08:00 AM",
        arrivalCity: "Manali",
        duration: "12h 00m",
        stops: "1 Stop",
        price: "₹999",
    },
    {
        id: 4,
        name: "Non-AC Sleeper",
        operator: "HRTC",
        image:
            "https://images.unsplash.com/photo-1778911276742-231724fce1c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRyYXZlbCUyMGJ1c3xlbnwwfHwwfHx8MA%3D%3D",
        badge: "Value Pick",
        badgeColor: "green",
        rating: "3.9",
        reviews: "980 reviews",
        busType: "Non-AC Sleeper",
        amenities: ["Charging Point", "Blanket"],
        departure: "06:00 PM",
        departureCity: "Delhi",
        arrival: "07:30 AM",
        arrivalCity: "Manali",
        duration: "13h 00m",
        stops: "1 Stop",
        price: "₹699",
    },
    {
        id: 5,
        name: "AC Seater (2+2)",
        operator: "VRL Travels",
        image:
            "https://images.unsplash.com/photo-1603521801204-8d9c70dd08c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsJTIwYnVzfGVufDB8fDB8fHww",
        badge: "Popular",
        badgeColor: "blue",
        rating: "4.2",
        reviews: "1.5K reviews",
        busType: "AC Seater",
        amenities: ["WiFi", "Charging Point"],
        departure: "11:00 PM",
        departureCity: "Delhi",
        arrival: "09:00 AM",
        arrivalCity: "Manali",
        duration: "10h 00m",
        stops: "Non Stop",
        price: "₹1,099",
    },
];

const badgeStyles = {
    yellow: "bg-[#F5D000] text-[#00383B]",
    blue: "bg-sky-500 text-white",
    green: "bg-emerald-500 text-white",
};

function AmenityIcon({ amenity }: { amenity: string }) {
    if (amenity === "WiFi") {
        return <Wifi className="size-3 shrink-0" />;
    }

    if (amenity === "Charging Point") {
        return <Plug className="size-3 shrink-0" />;
    }

    return <Snowflake className="size-3 shrink-0" />;
}

export function BusSearchResults() {
    const router = useRouter();

    const handleBookNow = (bus: Bus) => {
        const params = new URLSearchParams({
            service: "bus",
            from: bus.departureCity,
            to: bus.arrivalCity,
            query: `${bus.departureCity} to ${bus.arrivalCity}`,
        });

        router.push(`/search?${params.toString()}`);
    };

    return (
        <section className="w-full px-3 pb-10 sm:px-5 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
                {/* Header */}
          
                {/* Bus List */}
                <div className="space-y-2.5 sm:space-y-3">
                    {buses.map((bus) => (
                        <Card
                            key={bus.id}
                            className="group overflow-hidden rounded-xl border-[#DDEDEC] bg-white p-0 shadow-sm transition-all duration-200 hover:shadow-md"
                        >
                            <div className="flex flex-col sm:flex-row">
                                {/* Image */}
                                <div className="relative h-36 w-full shrink-0 overflow-hidden sm:h-auto sm:w-[190px] lg:w-[205px]">
                                    <Image
                                        src={bus.image}
                                        alt={bus.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 205px"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

                                    {/* Badge */}
                                    <Badge
                                        className={`absolute left-2.5 top-2.5 rounded-md border-0 px-2 py-1 text-[8px] font-semibold shadow-sm sm:text-[9px] ${badgeStyles[bus.badgeColor]}`}
                                    >
                                        {bus.badge}
                                    </Badge>
                                </div>

                                {/* Details */}
                                <div className="flex min-w-0 flex-1 flex-col p-3 sm:p-3.5 lg:p-4">
                                    {/* Name */}
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                            <h3 className="truncate text-xs font-bold text-[#00383B] sm:text-sm">
                                                {bus.name}
                                            </h3>

                                            <p className="mt-0.5 text-[9px] text-neutral-500 sm:text-[13px]">
                                                {bus.operator}
                                            </p>
                                        </div>

                                        {/* Mobile Price */}
                                        <div className="shrink-0 text-right sm:hidden">
                                            <p className="text-lf font-bold text-[#00383B]">
                                                {bus.price}
                                            </p>

                                            <span className="text-lg text-neutral-400">
                                                / seat
                                            </span>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="mt-1.5 flex items-center gap-1.5">
                                        <div className="flex items-center gap-0.5">
                                            <Star className="size-3 fill-[#F5B800] text-[#F5B800]" />

                                            <span className="text-[9px] font-semibold text-neutral-700 sm:text-[15px]">
                                                {bus.rating}
                                            </span>
                                        </div>

                                        <span className="text-[8px] text-neutral-400 sm:text-[11px]">
                                            ({bus.reviews})
                                        </span>
                                    </div>

                                    {/* Amenities */}
                                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                                        <div className="flex items-center gap-1 text-[8px] text-neutral-500 sm:text-[14px]">
                                            <BusFront className="size-3 text-neutral-400" />
                                            {bus.busType}
                                        </div>

                                        {bus.amenities.map((amenity) => (
                                            <div
                                                key={amenity}
                                                className="flex items-center gap-1 text-[11px] text-neutral-500 sm:text-[11px]"
                                            >
                                                <AmenityIcon
                                                    amenity={amenity}
                                                />
                                                {amenity}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Journey */}
                                    <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-neutral-500 sm:mt-auto sm:pt-3 sm:text-[14px]">
                                        <div className="flex items-center gap-1">
                                            <Clock3 className="size-3 text-[#2FC2B0]" />
                                            <span className="font-semibold text-[#00383B]">
                                                {bus.departure}
                                            </span>
                                            <span>{bus.departureCity}</span>
                                        </div>

                                        <ArrowRight className="hidden size-3 text-neutral-300 sm:block" />

                                        <div className="flex items-center gap-1">
                                            <span className="font-semibold text-[#00383B]">
                                                {bus.arrival}
                                            </span>
                                            <span>{bus.arrivalCity}</span>
                                        </div>

                                        <span className="text-neutral-300">
                                            |
                                        </span>

                                        <span>{bus.duration}</span>

                                        <span>({bus.stops})</span>
                                    </div>
                                </div>

                                {/* Price + Actions */}
                                <div className="flex shrink-0 items-center justify-between gap-3 border-t border-neutral-100 px-3 py-3 sm:w-[145px] sm:flex-col sm:items-end sm:justify-center sm:border-l sm:border-t-0 sm:px-4 lg:w-[170px]">
                                    {/* Price */}
                                    <div className="hidden text-right sm:block">
                                        <p className="text-base font-bold text-[#00383B] lg:text-lg">
                                            {bus.price}
                                        </p>

                                        <span className="text-[14px] text-neutral-400">
                                            / seat
                                        </span>
                                    </div>

                                    {/* Cancellation */}
                                    <div className="flex items-center gap-1 rounded-full bg-[#EAF8F4] px-2 py-1 text-[9px] font-medium text-[#16836F] sm:text-[11px]">
                                        <CheckCircle2 className="size-2.5" />
                                        Free Cancellation
                                    </div>

                                    {/* Book */}
                                    <Button
                                        type="button"
                                        onClick={() => handleBookNow(bus)}
                                        className="h-8 rounded-lg cursor-pointer bg-primary px-5 text-md font-bold text-white hover:bg-primary sm:w-full"
                                    >
                                        Book Now
                                    </Button>

                                    {/* Details */}
                                    <button
                                        type="button"
                                        className="hidden items-center gap-1 text-[12px] font-semibold text-[#168A91] transition-colors hover:text-[#00383B] sm:flex"
                                    >
                                        View Details
                                        <ArrowRight className="size-3" />
                                    </button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}