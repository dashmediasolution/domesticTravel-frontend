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
    height,
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
        <section
            className={`
                w-full
                px-3
                py-4
                sm:px-5
                sm:py-6
                md:px-6
                lg:px-8
                ${className}
            `}
        >
            <div className="mx-auto w-full max-w-[1400px]">

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
                                {/* <Link
                                    href={banner.redirectUrl}
                                    className="block"
                                > */}
                                    <div
                                        className={`
                                            relative
                                            w-full
                                            ${
                                                height ??
                                                "h-[150px] sm:h-[200px] md:h-[260px] lg:h-[340px]"
                                            }
                      
                                            overflow-hidden
                                            rounded-[20px]
                                            sm:rounded-[24px]
                                            md:rounded-[28px]
                                            lg:rounded-[36px]
                                        `}
                                    >
                                        <Image
                                            src={banner.image}
                                            alt={
                                                banner.title ??
                                                "Travel banner"
                                            }
                                            fill
                                            priority
                                            sizes="100vw"
                                            className="
                                                object-cover
                                                transition-transform
                                                duration-700
                                                hover:scale-[1.02]
                                            "
                                        />

                                      
                                    </div>
                                {/* </Link> */}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                {/* Dots */}
                <div
                    className="
                        mt-3
                        flex
                        items-center
                        justify-center
                        gap-1.5

                        sm:mt-4
                        sm:gap-2

                        md:mt-5
                    "
                >
                    {banners.map((banner, index) => (
                        <button
                            key={banner.id}
                            type="button"
                            aria-label={`Go to slide ${index + 1}`}
                            onClick={() => api?.scrollTo(index)}
                            className={`
                                h-1.5
                                rounded-full
                                transition-all
                                duration-300
                                ease-in-out

                                sm:h-2

                                ${
                                    current === index
                                        ? "w-6 bg-primary sm:w-8"
                                        : "w-1.5 bg-gray-300 hover:bg-primary/50 sm:w-2"
                                }
                            `}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}