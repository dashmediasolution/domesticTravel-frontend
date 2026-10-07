"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import {
    Star,
    ArrowUpRight,
} from "lucide-react";

import { MdOutlineArrowOutward } from "react-icons/md";

type FeaturedDestination = {
    id: string;
    name: string;
    subtitle: string | null;
    heroImage: {
        url: string
    };
    budget: string;
};

export function FeaturedDestination() {
    const [destinations, setDestinations] = useState<FeaturedDestination[]>([]);
    const [loading, setLoading] = useState(true);

    // =========================
    // FETCH FEATURED DESTINATIONS
    // =========================

    useEffect(() => {
        const fetchFeaturedDestinations = async () => {
            try {
                const response = await fetch(
                    "/api/featured-destinations",
                    {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                        },
                        cache: "no-store",
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        `Failed to fetch destinations: ${response.status}`
                    );
                }

                const result = await response.json();

                if (!result.success) {
                    throw new Error(
                        result.message ||
                        "Failed to fetch featured destinations"
                    );
                }

                setDestinations(result.destinations ?? []);
            } catch (error) {
                console.error(
                    "Featured destinations fetch error:",
                    error
                );

                setDestinations([]);
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedDestinations();
    }, []);

    return (
        <section className="relative bottom-8 w-full px-3 sm:px-5 md:bottom-3 md:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-[1440px]">

                {/* ================= HEADER ================= */}

                <div className="mb-5 flex w-full items-center justify-between gap-3 sm:mb-6 md:mb-7">

                    <h2
                        className="
                            text-[20px]
                            font-medium
                            tracking-[-0.5px]
                            text-black

                            sm:text-[22px]

                            md:text-[24px]

                            lg:text-[25px]
                        "
                    >
                        Featured Destinations
                    </h2>

                    {/* <Button

                        type="button"
                        variant="outline"
                        className="
                            hidden
                            h-9
                            shrink-0
                            rounded-full
                            border-primary
                            px-4
                            text-xs
                            font-normal
                            text-primary
                            hover:bg-primary
                            hover:text-white

                            sm:flex

                            md:h-10
                            md:px-5
                            md:text-sm

                            lg:h-11
                            lg:text-[15px]
                        "
                    >
                        <Link href="/explore-destinations">
                            View all destinations

                            <ArrowUpRight className="ml-1.5 h-4 w-4 md:h-5 md:w-5" />
                        </Link>
                    </Button> */}
                </div>

                {/* ================= LOADING ================= */}

                {loading && (
                    <div
                        className="
                            flex
                            gap-2
                            overflow-hidden

                            sm:gap-2.5

                            md:gap-3

                            lg:gap-4
                        "
                    >
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div
                                key={index}
                                className="
                                    aspect-[2/3]
                                    w-[180px]
                                    shrink-0
                                    animate-pulse
                                    rounded-[18px]
                                    bg-gray-100

                                    sm:w-[200px]
                                    sm:rounded-[20px]

                                    md:w-[220px]
                                    md:rounded-[22px]

                                    lg:w-[275px]
                                    lg:rounded-[24px]
                                "
                            />
                        ))}
                    </div>
                )}

                {/* ================= EMPTY STATE ================= */}

                {!loading && destinations.length === 0 && (
                    <div className="flex min-h-[250px] items-center justify-center rounded-2xl bg-gray-50">
                        <p className="text-sm text-gray-500">
                            No featured destinations available.
                        </p>
                    </div>
                )}

                {/* ================= CAROUSEL ================= */}

                {!loading && destinations.length > 0 && (
                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <div className="w-full overflow-hidden rounded-2xl">

                            <CarouselContent className="-ml-2 sm:-ml-2.5 md:-ml-3 lg:-ml-4">

                                {destinations.map((destination) => {
                                    const slug = destination.name
                                        .toLowerCase()
                                        .replace(/\s+/g, "-");

                                    return (
                                        <CarouselItem
                                            key={destination.id}
                                            className="
                                                basis-auto
                                                pl-2

                                                sm:pl-2.5

                                                md:pl-3

                                                lg:pl-4
                                            "
                                        >
                                            <Link
                                                href={`/destinations/${slug}`}
                                                className="block"
                                            >
                                                <Card
                                                    className="
                                                        group
                                                        relative
                                                        m-0
                                                        aspect-[2/3]
                                                        w-[180px]
                                                        cursor-pointer
                                                        overflow-hidden
                                                        rounded-[18px]
                                                        border-0
                                                        p-0
                                                        shadow-none

                                                        sm:w-[200px]
                                                        sm:rounded-[20px]

                                                        md:w-[220px]
                                                        md:rounded-[22px]

                                                        lg:w-[275px]
                                                        lg:rounded-[24px]
                                                    "
                                                >
                                                    <CardContent className="relative h-full w-full p-0">

                                                        {/* ================= IMAGE ================= */}

                                                        <Image
                                                            src={
                                                                destination.heroImage.url
                                                            }
                                                            alt={
                                                                destination.name
                                                            }
                                                            fill
                                                            sizes="
                                                                (max-width: 639px) 180px,
                                                                (max-width: 767px) 200px,
                                                                (max-width: 1023px) 220px,
                                                                275px
                                                            "
                                                            unoptimized
                                                            className="
                                                                object-cover
                                                                transition-transform
                                                                duration-700
                                                                ease-out
                                                                group-hover:scale-[1.04]
                                                            "
                                                        />

                                                        {/* ================= OVERLAY ================= */}

                                                        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/20" />



                                                        {/* ================= DESTINATION NAME ================= */}

                                                        <div
                                                            className="
                                                            absolute
                                                            left-3
                                                            right-3
                                                            top-[21%]
                                                            flex
                                                            flex-col
                                                            items-center
                                                            justify-center
                                                            sm:left-4
                                                            sm:right-4
                                                            md:top-[22%]
                                                        "
                                                        >
                                                            <h3
                                                                className="
                                                                max-w-full
                                                                border-b-2
                                                                border-transparent
                                                                text-center
                                                                text-[20px]
                                                                font-bold
                                                                leading-tight
                                                                tracking-[0.08em]
                                                                text-white
                                                                transition-all
                                                                duration-300
                                                                group-hover:border-current

                                                                sm:text-[24px]
                                                                md:text-[27px]
                                                                lg:text-3xl
                                                            "
                                                            >
                                                                {destination.name}
                                                            </h3>
                                                           
                                                        </div>

                                                        {/* ================= HOVER PRICE ================= */}

                                                        {destination.budget !== "" && (
                                                            <div
                                                                className="
                                                                    absolute
                                                                    bottom-0
                                                                    left-0
                                                                    flex
                                                                    w-full
                                                                    flex-col
                                                                    items-center
                                                                    justify-center
                                                                    bg-linear-to-t
                                                                    from-black/85
                                                                    via-black/40
                                                                    to-transparent
                                                                    px-3
                                                                    pb-4
                                                                    pt-10
                                                                    text-white

                                                                    sm:px-5
                                                                    sm:pb-5
                                                                    sm:pt-12

                                                                    md:translate-y-full
                                                                    md:transition-transform
                                                                    md:duration-500
                                                                    md:ease-out
                                                                    md:group-hover:translate-y-0
                                                                "
                                                            >
                                                                <p
                                                                    className="
                                                                        text-center
                                                                        text-base
                                                                        font-semibold
                                                                        tracking-[0.12em]

                                                                        sm:text-lg

                                                                        md:text-xl
                                                                    "
                                                                >
                                                                    Starting at
                                                                </p>

                                                                <div className="mt-1 flex items-center justify-center gap-0.5 sm:gap-1">
                                                                    <span
                                                                        className="
                                                                            text-base
                                                                            font-semibold

                                                                            sm:text-lg

                                                                            md:text-xl
                                                                        "
                                                                    >
                                                                        ₹
                                                                        {destination.budget}
                                                                    </span>
                                                                </div>

                                                                <MdOutlineArrowOutward
                                                                    className="
                                                                        mt-2
                                                                        h-6!
                                                                        w-6!
                                                                        rounded-full
                                                                        bg-primary
                                                                        p-1

                                                                        sm:h-7!
                                                                        sm:w-7!
                                                                    "
                                                                />
                                                            </div>
                                                        )}

                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        </CarouselItem>
                                    );
                                })}

                            </CarouselContent>
                        </div>

                        {/* ================= CONTROLS ================= */}

                        <div
                            className="
                                mt-4
                                flex
                                w-full
                                items-end
                                justify-end
                                gap-3

                                sm:mt-5
                            "
                        >
                            <div className="flex shrink-0 gap-2 sm:gap-3">

                                <CarouselPrevious
                                    className="
                                        static
                                        m-0
                                        translate-y-0
                                        size-8
                                        rounded-full
                                        border-0
                                        bg-[#F6F7F9]
                                        text-[#7B84A6]
                                        shadow-none
                                        hover:bg-primary
                                        hover:text-white

                                        sm:size-9
                                    "
                                />

                                <CarouselNext
                                    className="
                                        static
                                        m-0
                                        translate-y-0
                                        size-8
                                        rounded-full
                                        border-0
                                        bg-[#F6F7F9]
                                        text-[#7B84A6]
                                        shadow-none
                                        hover:bg-primary
                                        hover:text-white

                                        sm:size-9
                                    "
                                />

                            </div>
                        </div>
                    </Carousel>
                )}

            </div>
        </section>
    );
}