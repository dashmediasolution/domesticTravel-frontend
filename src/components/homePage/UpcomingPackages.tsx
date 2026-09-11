"use client";

import { useState } from "react";
import Image from "next/image";

import {
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    Phone,
} from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";


// ===============================
// TYPES
// ===============================

type PackageType = "domestic" | "international";

interface TravelPackage {
    id: number;
    destination: string;
    duration: string;
    price: string;
    image: string;
    trending?: boolean;
}


// ===============================
// DOMESTIC PACKAGES
// ===============================

const domesticPackages: TravelPackage[] = [
    {
        id: 1,
        destination: "Sri Lanka",
        duration: "6 D - Package",
        price: "$44,999",
        image: "/images/packageImages/image-1.png",
        trending: true,
    },
    {
        id: 2,
        destination: "Japan",
        duration: "7 D - Package",
        price: "$44,999",
        image: "/images/packageImages/image-2.png",
        trending: true,
    },
    {
        id: 3,
        destination: "Philippines",
        duration: "3 D - Package",
        price: "$44,999",
        image: "/images/packageImages/image-3.png",
        trending: true,
    },
    {
        id: 4,
        destination: "Bhutan",
        duration: "9 D - Package",
        price: "$44,999",
        image: "/images/packageImages/image-4.png",
        trending: true,
    },
    {
        id: 5,
        destination: "Nepal",
        duration: "6 D - Package",
        price: "$49,999",
        image: "/images/packageImages/image-5.png",
        trending: true,
    },
    {
        id: 6,
        destination: "Eurpe",
        duration: "5 D - Package",
        price: "$39,999",
        image: "/images/packageImages/image-6.png",
        trending: true,
    },
];


const internationalPackages: TravelPackage[] = [
    {
        id: 101,
        destination: "Sri Lanka",
        duration: "6 D - Package",
        price: "$44,999",
        image: "/images/packages/srilanka.jpg",
        trending: true,
    },
    {
        id: 102,
        destination: "Japan",
        duration: "7 D - Package",
        price: "$44,999",
        image: "/images/packages/japan.jpg",
        trending: true,
    },
    {
        id: 103,
        destination: "Philippines",
        duration: "3 D - Package",
        price: "$44,999",
        image: "/images/packages/philippines.jpg",
        trending: true,
    },
    {
        id: 104,
        destination: "Bhutan",
        duration: "9 D - Package",
        price: "$44,999",
        image: "/images/packages/bhutan.jpg",
        trending: true,
    },
    {
        id: 105,
        destination: "Bali",
        duration: "6 D - Package",
        price: "$54,999",
        image: "/images/packages/bali.jpg",
        trending: true,
    },
    {
        id: 106,
        destination: "Dubai",
        duration: "5 D - Package",
        price: "$49,999",
        image: "/images/packages/dubai.jpg",
        trending: true,
    },
];


// ===============================
// COMPONENT
// ===============================

export default function UpcomingPackages() {
    const [packageType, setPackageType] =
        useState<PackageType>("domestic");

    const [api, setApi] = useState<CarouselApi>();


    const packages =
        packageType === "domestic"
            ? domesticPackages
            : internationalPackages;


    return (
        <section className="w-full px-6 py-10 sm:px-8 lg:px-12">

            <div className="mx-auto w-[95%]">

           

                <div className="mb-7 flex items-center justify-between">

                    <h2
                        className="
                            text-[24px]
                            font-medium
                            tracking-[-0.5px]
                            text-black
                            sm:text-[25px]
                        "
                    >
                        Browse Upcoming Packages
                    </h2>


                    <Button
                        type="button"
                        variant="outline"
                        className="
                            hidden
                            h-11
                            rounded-full
                            border-[#20BFAF]
                            px-5
                            text-[15px]
                            font-normal
                            text-[#20BFAF]
                            hover:bg-[#20BFAF]
                            hover:text-white
                            sm:flex
                        "
                    >
                        Explore all Trips

                        <ArrowUpRight className="ml-2 h-5 w-5" />
                    </Button>

                </div>

 

                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >

                    <CarouselContent className="-ml-5">

                        {packages.map((item) => (

                            <CarouselItem
                                key={item.id}
                                className="
                                    basis-[90%]
                                    pl-5
                                    sm:basis-1/2
                                    lg:basis-1/4
                                "
                            >

                                {/* =================================
                                    PACKAGE CARD
                                ================================== */}

                                <div
                                    className="
                                        group
                                        relative
                                        aspect-[318/336]
                                        w-full
                                        cursor-pointer
                                        overflow-hidden
                                        rounded-[24px]
                                        bg-gray-200
                                    "
                                >

                                    {/* =================================
                                        IMAGE
                                    ================================== */}

                                    <Image
                                        src={item.image}
                                        alt={item.destination}
                                        fill
                                        className="
                                            object-cover
                                            transition-transform
                                            duration-700
                                            group-hover:scale-105
                                        "
                                        sizes="
                                            (max-width: 640px) 90vw,
                                            (max-width: 1024px) 50vw,
                                            25vw
                                        "
                                    />


                                    <div
                                        className="
                                            absolute
                                            left-5
                                            right-5
                                            top-5
                                            flex
                                            items-center
                                            justify-between
                                        "
                                    >

                                        {/* Trending */}

                                        {item.trending ? (
                                            <span
                                                className="
                                                    rounded-full
                                                    bg-white
                                                    px-3
                                                    py-1.5
                                                    text-[12px]
                                                    font-medium
                                                    leading-none
                                                    text-primary
                                                "
                                            >
                                                Trending
                                            </span>
                                        ) : (
                                            <span />
                                        )}


                                        {/* Duration */}

                                        <span
                                            className="
                                                rounded-full
                                                bg-white
                                                px-3
                                                py-1.5
                                                text-[12px]
                                                font-medium
                                                leading-none
                                                text-primary
                                            "
                                        >
                                            {item.duration}
                                        </span>

                                    </div>

                                    <div
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            right-0
                                            p-5
                                        "
                                    >

                                        {/* Destination */}

                                        <h3
                                            className="
                                                 text-[36px]
                                                 font-bold
                                                leading-[0.95]
                                                tracking-wide
                                                text-white
                                                 transition-transform
                                                duration-300
                                                group-hover:-translate-y-1
                                            "
                                        >
                                            {item.destination}
                                        </h3>


                                        {/* Starting From */}

                                        <p
                                            className="
                                                mt-2
                                                text-[20px]
                                                font-medium
                                                leading-none
                                                text-white
                                            "
                                        >
                                            Starting from
                                        </p>


                                        {/* Price + Buttons */}

                                        <div
                                            className="
                                                mt-1
                                                flex
                                                items-center
                                                justify-between
                                            "
                                        >

                                            {/* Price */}

                                            <span
                                                className="
                                                    text-[20px]
                                                    font-medium
                                                    text-white
                                                "
                                            >
                                                {item.price}
                                            </span>


                                            {/* Action Buttons */}

                                            <div className="flex items-center gap-2">

                                                {/* Phone */}

                                                <Button
                                                    type="button"
                                                    size="icon"
                                                    variant="outline"
                                                    className="
                                                        h-10
                                                        w-10
                                                        rounded-full
                                                        border-2
                                                        border-white
                                                        bg-transparent
                                                        text-white
                                                        shadow-none
                                                        hover:bg-white
                                                        hover:text-[#20BFAF]
                                                    "
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                    }}
                                                >
                                                    <Phone className="h-5 w-5" />
                                                </Button>


                                                {/* Arrow */}

                                                <Button
                                                    type="button"
                                                    size="icon"
                                                    className="
                                                        h-10
                                                        w-10
                                                        rounded-full
                                                        bg-[#20BFAF]
                                                        text-white
                                                        shadow-none
                                                        transition-transform
                                                        duration-300
                                                        hover:scale-110
                                                        hover:bg-[#20BFAF]
                                                    "
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                    }}
                                                >
                                                    <ArrowUpRight className="h-5 w-5" />
                                                </Button>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </CarouselItem>

                        ))}

                    </CarouselContent>

                </Carousel>


                {/* =================================
                    BOTTOM CONTROLS
                ================================== */}

                <div
                    className="
                        mt-6
                        flex
                        items-center
                        justify-between
                    "
                >

                    {/* =================================
                        DOMESTIC / INTERNATIONAL
                    ================================== */}

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

                        {/* Domestic */}

                        <button
                            type="button"
                            onClick={() => {
                                setPackageType("domestic");

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
                                ${packageType === "domestic"
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
                                setPackageType("international");

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
                                ${packageType === "international"
                                    ? "bg-primary text-white shadow-sm"
                                    : "text-[#7380A4]/70 hover:text-[#7380A4]"
                                }
                            `}
                        >
                            International
                        </button>

                    </div>


                    {/* =================================
                        PREVIOUS / NEXT
                    ================================== */}

                    <div className="flex items-center gap-2">

                        {/* Previous */}

                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => api?.scrollPrev()}
                            className="
                                h-9
                                w-9
                                rounded-full
                                border-gray-200
                                bg-[#F7F8FA]
                                text-[#7380A4]
                                shadow-none
                                transition-all
                                duration-200
                                hover:bg-[#20BFAF]
                                hover:text-white
                            "
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>


                        {/* Next */}

                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => api?.scrollNext()}
                            className="
                                h-9
                                w-9
                                rounded-full
                                border-gray-200
                                bg-[#F7F8FA]
                                text-[#7380A4]
                                shadow-none
                                transition-all
                                duration-200
                                hover:bg-[#20BFAF]
                                hover:text-white
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