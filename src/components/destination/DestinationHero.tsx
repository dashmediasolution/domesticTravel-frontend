"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Play, Star } from "lucide-react";

interface Destination {
    name: string;
    subtitle: string;
    heroImage: string;
    rating: string | number;
    reviews: string | number;
    packages: string | number;
    location: string;
    description: string;
    weather: string;
    idealTrip: string;
    budget: string;
}

interface DestinationHeroProps {
    destination: Destination;
}

export default function DestinationHero({ destination }: DestinationHeroProps) {
    return (
        <section className="relative min-h-[80vh] w-full overflow-hidden">
            <Image
                src={destination.heroImage}
                alt={destination.name}
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            <div className="absolute inset-0 z-10 bg-linear-to-tr from-black/80 via-black/10 via-50% to-transparent" />

            <div className="relative z-20 mx-auto flex min-h-[80vh] w-[95%] items-center py-16">
                <div className="flex w-full max-w-[1100px] flex-col gap-2 text-white">
                    <h1 className="text-5xl font-medium uppercase italic tracking-[-0.04em] sm:text-7xl lg:text-[120px] lg:leading-[0.95]">
                        {destination.name}
                    </h1>

                    <p className="mt-1 text-base font-semibold md:text-2xl">
                        {destination.subtitle}
                    </p>

                    <div className="mt-3 flex w-full flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm">
                        <div className="flex items-center gap-2 text-xl">
                            <div className="flex gap-1 text-amber-400">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className="h-5 w-5 fill-amber-400"
                                    />
                                ))}
                            </div>
                            <span>{destination.rating}</span>
                            <span className="opacity-80">({destination.reviews})</span>
                        </div>

                        <span className="opacity-50">|</span>

                        <div className="flex items-center gap-1.5 text-xl">
                            <CalendarDays className="h-5 w-5 text-primary" />
                            {destination.packages}
                        </div>

                        <span className="opacity-50">|</span>

                        <div className="flex items-center gap-1.5 text-xl">
                            <MapPin className="h-5 w-5 text-primary" />
                            {destination.location}
                        </div>
                    </div>

                    <p className="mt-3 max-w-[600px] text-sm leading-7 text-white/85 sm:text-base md:text-2xl">
                        {destination.description}
                    </p>

                    <div className="mt-4 flex w-20 min-w-fit flex-wrap gap-3 sm:gap-4">
                        <InfoCard label="State" value={destination.name} />
                        <InfoCard label="Weather" value={destination.weather} />
                        <InfoCard label="Ideal Trip" value={destination.idealTrip} />
                        <InfoCard label="Budget" value={destination.budget} />
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                        <Link
                            href="/packages"
                            className="rounded-full bg-primary px-5 py-2 text-xs font-medium text-white transition hover:opacity-90 sm:text-sm md:text-base"
                        >
                            Explore Packages
                        </Link>

                        <button
                            type="button"
                            className="flex items-center gap-2 text-xs font-medium text-white transition-opacity hover:opacity-80 sm:text-sm"
                        >
                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-black/20 backdrop-blur-sm">
                                <Play className="ml-0.5 h-3.5 w-3.5 fill-white" />
                            </span>
                            Watch Video
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function InfoCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex   min-h-[64px] items-center gap-2 rounded-lg bg-white p-2 sm:p-3">
            <MapPin className="h-5 w-5 shrink-0 text-primary" />
            <div className="w-fit">
                <p className="text-xs text-[#ACB1B7] sm:text-sm">{label}</p>
                <p className="whitespace-nowrap text-[13px] leading-4 text-black sm:text-sm">
                    {value}
                </p>
            </div>
        </div>
    );
}