"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Timer } from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";

type OfferType = "domestic" | "international";

interface Offer {
    id: number;
    destination: string;
    subtitle: string;
    discount: string;
    endsIn: string;
    price: string;
    priceSuffix: string;
    image: string;
}

const domesticOffers: Offer[] = [
    {
        id: 1,
        destination: "KASHMIR",
        subtitle: "Sun, Sand & Good Vibes",
        discount: "25% OFF",
        endsIn: "Ends in 02 D",
        price: "$7,499",
        priceSuffix: "/person",
        image: "/images/offers/image-1.png",
    },
    {
        id: 2,
        destination: "HAWA MAHAL",
        subtitle: "Sun, Sand & Good Vibes",
        discount: "25% OFF",
        endsIn: "Ends in 02 D",
        price: "$7,499",
        priceSuffix: "/person",
        image: "/images/offers/image-2.png",
    },
    {
        id: 3,
        destination: "DARJEELING",
        subtitle: "Sun, Sand & Good Vibes",
        discount: "25% OFF",
        endsIn: "Ends in 02 D",
        price: "$7,499",
        priceSuffix: "/person",
        image: "/images/offers/image-3.png",
    },
    {
        id: 4,
        destination: "GOA",
        subtitle: "Sun, Sand & Good Vibes",
        discount: "25% OFF",
        endsIn: "Ends in 02 D",
        price: "$6,999",
        priceSuffix: "/person",
        image: "/images/offers/image-4.png",
    },
    {
        id: 5,
        destination: "MANALI",
        subtitle: "Sun, Sand & Good Vibes",
        discount: "25% OFF",
        endsIn: "Ends in 02 D",
        price: "$8,499",
        priceSuffix: "/person",
        image: "/images/offers/image-5.png",
    },
];

const internationalOffers: Offer[] = [
    {
        id: 101,
        destination: "BALI",
        subtitle: "Island Escapes & Good Vibes",
        discount: "25% OFF",
        endsIn: "Ends in 02 D",
        price: "$14,999",
        priceSuffix: "/person",
        image: "/images/offers/bali.jpg",
    },
    {
        id: 102,
        destination: "DUBAI",
        subtitle: "Luxury, Shopping & Adventure",
        discount: "25% OFF",
        endsIn: "Ends in 02 D",
        price: "$18,499",
        priceSuffix: "/person",
        image: "/images/offers/dubai.jpg",
    },
    {
        id: 103,
        destination: "THAILAND",
        subtitle: "Beaches, Islands & Adventure",
        discount: "25% OFF",
        endsIn: "Ends in 02 D",
        price: "$16,999",
        priceSuffix: "/person",
        image: "/images/offers/thailand.jpg",
    },
    {
        id: 104,
        destination: "SINGAPORE",
        subtitle: "Explore, Experience & Enjoy",
        discount: "25% OFF",
        endsIn: "Ends in 02 D",
        price: "$21,499",
        priceSuffix: "/person",
        image: "/images/offers/singapore.jpg",
    },
];

export default function BestOffers() {
    const [offerType, setOfferType] =
        useState<OfferType>("domestic");

    const [api, setApi] = useState<CarouselApi>();

    const offers =
        offerType === "domestic"
            ? domesticOffers
            : internationalOffers;

    const handleTypeChange = (type: OfferType) => {
        setOfferType(type);

        // Reset carousel when switching category
        setTimeout(() => {
            api?.scrollTo(0);
        }, 0);
    };

    return (
        <section
            className="
                w-full
                overflow-hidden
                bg-white
                px-5
                py-10
                sm:px-8
                lg:px-12
                lg:py-12
            "
        >
            <div className="mx-auto w-full max-w-[1344px]">

                {/* =====================================================
                    HEADER
                ===================================================== */}

                <div className="mb-7 flex items-center justify-between">
                    <h2
                        className="
                            text-[24px]
                            font-medium
                            leading-tight
                            tracking-[-0.6px]
                            text-black
                            sm:text-[25px]
                        "
                    >
                        Get best offers for you
                    </h2>

                    <Button
                        type="button"
                        variant="outline"
                        className="
                            h-10
                            rounded-full
                            border-[#20BFAF]
                            px-4
                            text-[14px]
                            font-normal
                            text-[#20BFAF]
                            shadow-none
                            hover:bg-[#20BFAF]
                            hover:text-white
                            sm:h-11
                            sm:px-5
                            sm:text-[15px]
                        "
                    >
                        <span className="whitespace-nowrap">
                            Get all offers
                        </span>

                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                </div>

                {/* =====================================================
                    CAROUSEL
                ===================================================== */}

                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-6">
                        {offers.map((offer) => (
                            <CarouselItem
                                key={offer.id}
                                className="
                                    basis-[92%]
                                    pl-6
                                    sm:basis-[70%]
                                    md:basis-1/2
                                    lg:basis-1/3
                                "
                            >
                                <div
                                    className="
                                        group
                                        relative
                                        aspect-[432/286]
                                        w-full
                                        overflow-hidden
                                        rounded-[22px]
                                        bg-gray-200
                                        sm:rounded-[24px]
                                    "
                                >
                                    {/* =================================================
                                        BACKGROUND IMAGE
                                    ================================================= */}

                                    <Image
                                        src={offer.image}
                                        alt={offer.destination}
                                        fill
                                        sizes="
                                            (max-width: 640px) 92vw,
                                            (max-width: 768px) 70vw,
                                            (max-width: 1024px) 50vw,
                                            33vw
                                        "
                                        className="
                                            object-cover
                                            transition-transform
                                            duration-700
                                            group-hover:scale-105
                                        "
                                    />

                                    {/* =================================================
                                        DARK GRADIENT
                                    ================================================= */}

                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-black/70
                                            via-black/10
                                            to-transparent
                                        "
                                    />

                                    {/* =================================================
                                        TOP BADGES
                                    ================================================= */}

                                    <div
                                        className="
                                            absolute
                                            left-4
                                            right-4
                                            top-4
                                            flex
                                            items-center
                                            justify-between
                                            sm:left-4
                                            sm:right-4
                                        "
                                    >
                                        {/* Discount */}
                                        <span
                                            className="
                                                rounded-[7px]
                                                bg-white
                                                px-3
                                                py-2
                                                text-[12px]
                                                font-medium
                                                leading-none
                                                text-[#20BFAF]
                                                shadow-sm
                                            "
                                        >
                                            {offer.discount}
                                        </span>

                                        {/* Timer */}
                                        <span
                                            className="
                                                flex
                                                items-center
                                                gap-1.5
                                                rounded-[7px]
                                                bg-white
                                                px-3
                                                py-2
                                                text-[12px]
                                                font-normal
                                                leading-none
                                                text-[#A7ADB8]
                                                shadow-sm
                                            "
                                        >
                                            <Timer
                                                className="
                                                    h-4
                                                    w-4
                                                    text-[#20BFAF]
                                                "
                                                strokeWidth={2}
                                            />

                                            {offer.endsIn}
                                        </span>
                                    </div>

                                    {/* =================================================
                                        CONTENT
                                    ================================================= */}

                                    <div
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            right-0
                                            p-4
                                            sm:p-5
                                            h-[85%]  
                                              flex flex-col justify-between  
                                        "
                                    >
                                        {/* Destination */}
                                        <div>
                                        <h3
                                            className="
                                                 text-[34px]
                                                font-bold
                                                leading-none
                                                tracking-[1px]
                                                text-white
                                                sm:text-[40px]
                                            "
                                        >
                                            {offer.destination}
                                        </h3>

                                        {/* Subtitle */}
                                        <p
                                            className="
                                                mt-1
                                                text-[15px]
                                                font-normal
                                                leading-tight
                                                text-white
                                                sm:text-[17px]
                                            "
                                        >
                                            {offer.subtitle}
                                        </p>
                                            </div>
                                        {/* Bottom row */}
                                        <div
                                            className="
                                                mt-6
                                                flex
                                                items-end
                                                justify-between
                                                gap-3
                                            "
                                        >
                                            {/* Price */}
                                            <div>
                                                <p
                                                    className="
                                                        text-[15px]
                                                        font-normal
                                                        leading-none
                                                        text-white
                                                    "
                                                >
                                                    Starting from
                                                </p>

                                                <div
                                                    className="
                                                        mt-1
                                                        flex
                                                        items-baseline
                                                        gap-1
                                                    "
                                                >
                                                    <span
                                                        className="
                                                            text-[24px]
                                                            font-semibold
                                                            leading-none
                                                            text-white
                                                            sm:text-[25px]
                                                        "
                                                    >
                                                        {offer.price}
                                                    </span>

                                                    <span
                                                        className="
                                                            text-[14px]
                                                            font-normal
                                                            text-white
                                                        "
                                                    >
                                                        {offer.priceSuffix}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Explore button */}
                                            <Button
                                                type="button"
                                                variant="outline"
                                                className="
                                                    h-9
                                                    shrink-0
                                                    rounded-full
                                                    border-white
                                                    bg-transparent
                                                    px-3
                                                    text-[13px]
                                                    font-normal
                                                    text-white
                                                    shadow-none
                                                     hover:bg-primary
                                                    hover:text-white
                                                    hover:border-none
                                                    sm:h-10
                                                    sm:px-4
                                                    sm:text-[14px]
                                                "
                                            >
                                                <span className="whitespace-nowrap">
                                                    Explore Now
                                                </span>

                                                <ArrowRight
                                                    className="
                                                        ml-1.5
                                                        h-4
                                                        w-4
                                                    "
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>


                <div
                    className="
                        mt-6
                        flex
                        items-center
                        justify-between
                    "
                >


                    <div
                        className="
                            flex
                            items-center
                            rounded-full
                            border
                            border-gray-200
                            bg-[#F8F8F8]
                            p-1
                        "
                    >



                        <button
                            type="button"
                            onClick={() => {
                                setOfferType("domestic");

                                // Reset carousel position
                                setTimeout(() => {
                                    api?.scrollTo(0);
                                }, 0);
                            }}
                            className={`
                                rounded-full
                                px-5
                                py-2
                                text-[15px]
                                font-medium
                                transition-all
                                duration-300
                                ${offerType === "domestic"
                                    ? "bg-primary text-white shadow-sm"
                                    : "text-[#7380A4]/70 hover:text-[#7380A4]"
                                }
                            `}
                        >
                            Domestic
                        </button>


                        {/* International */}

                        <button
                            type="button"
                            onClick={() => {
                                setOfferType("international");

                                setTimeout(() => {
                                    api?.scrollTo(0);
                                }, 0);
                            }}
                            className={`
                                rounded-full
                                px-5
                                py-2
                                text-[15px]
                                font-medium
                                transition-all
                                duration-300
                                ${offerType === "international"
                                    ? "bg-primary text-white shadow-sm"
                                    : "text-[#7380A4]/70 hover:text-[#7380A4]"
                                }
                            `}
                        >
                            International
                        </button>

                    </div>

                    {/* =================================================
                        PREVIOUS / NEXT
                    ================================================= */}

                    <div className="flex items-center gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => api?.scrollPrev()}
                            className="
                                h-9
                                w-9
                                rounded-full
                                border-[#D9DDE3]
                                bg-[#F8F9FA]
                                text-[#7180A5]
                                shadow-none
                                hover:border-[#20BFAF]
                                hover:bg-[#20BFAF]
                                hover:text-white
                                sm:h-10
                                sm:w-10
                            "
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => api?.scrollNext()}
                            className="
                                h-9
                                w-9
                                rounded-full
                                border-[#D9DDE3]
                                bg-[#F8F9FA]
                                text-[#7180A5]
                                shadow-none
                                hover:border-[#20BFAF]
                                hover:bg-[#20BFAF]
                                hover:text-white
                                sm:h-10
                                sm:w-10
                            "
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}