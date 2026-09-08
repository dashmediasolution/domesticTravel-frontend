"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

export interface Banner {
    id: number | string;
    image: string;
    title?: string;
    redirectUrl: string;
}

interface BannerCarouselProps {
    banners: Banner[];
    autoPlayDelay?: number;
    height?: string;
    className?: string;
}

export default function BannerCarousel({
    banners,
    autoPlayDelay = 2500,
    height = "h-[340px]",
    className = "",
}: BannerCarouselProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        const updateCurrent = () => {
            setCurrent(api.selectedScrollSnap());
        };

        updateCurrent();

        api.on("select", updateCurrent);

        return () => {
            api.off("select", updateCurrent);
        };
    }, [api]);

    if (!banners?.length) {
        return null;
    }

    return (
        <section className={`w-full px-4 sm:px-6 lg:px-8 ${className}`}>
            <div className="mx-auto w-full max-w-full">

                {/* Carousel */}
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: autoPlayDelay,
                            stopOnInteraction: false,
                        }),
                    ]}
                    className="w-full"
                >
                    <CarouselContent className="ml-0">
                        {banners.map((banner) => (
                            <CarouselItem
                                key={banner.id}
                                className="basis-full pl-0"
                            >
                                <Link
                                    href={banner.redirectUrl}
                                    className="block"
                                >
                                    <div
                                        className={`
                                            relative
                                            w-full
                                            ${height}
                                            cursor-pointer
                                            overflow-hidden
                                            rounded-[36px]
                                        `}
                                    >
                                        <Image
                                            src={banner.image}
                                            alt={banner.title ?? "Travel banner"}
                                            fill
                                            priority
                                            className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                                            sizes="100vw"
                                        />

                                        {banner.title && (
                                            <div
                                                className="
                                                    absolute
                                                    inset-0
                                                    flex
                                                    items-center
                                                    px-6
                                                    sm:px-10
                                                    lg:px-16
                                                "
                                            >
                                                <h2
                                                    className="
                                                        max-w-xl
                                                        text-3xl
                                                        text-white
                                                        sm:text-4xl
                                                        lg:text-5xl
                                                    "
                                                >
                                                    {banner.title}
                                                </h2>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                {/* Dots */}
                <div className="mt-5 flex items-center justify-center gap-2">
                    {banners.map((banner, index) => (
                        <button
                            key={banner.id}
                            type="button"
                            aria-label={`Go to slide ${index + 1}`}
                            onClick={() => api?.scrollTo(index)}
                            className={`
                                h-2.5
                                rounded-full
                                transition-all
                                duration-300
                                ease-in-out
                                ${
                                    current === index
                                        ? "w-8 bg-primary"
                                        : "w-2.5 bg-gray-300 hover:bg-primary/50"
                                }
                            `}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}