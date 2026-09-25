"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"
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
import { packageData } from "@/constants/packagesData";
type PackageType = "domestic" | "international";

interface TravelPackage {
    name: string;
    destination: string;
    duration: string;
    price: string;
    image: string;
    trending?: boolean;
}


const internationalPackages: TravelPackage[] = [
    {
        name: "SRILANKA",
        destination: "Sri Lanka",
        duration: "6 D - Package",
        price: "$44,999",
        image: "/images/packages/srilanka.jpg",
        trending: true,
    },

];

export default function UpcomingPackages() {
    const router = useRouter();

    const [packageType, setPackageType] =
        useState<PackageType>("domestic");

    const [api, setApi] = useState<CarouselApi>();

    const domesticPackages: TravelPackage[] = packageData.flatMap(
        (destination) => {
            const firstPackage = destination.packages?.[0];

            if (!firstPackage) return [];

            return [
                {
                    name: firstPackage.name,
                    destination: destination.name,
                    duration: firstPackage.duration,
                    price: firstPackage.startingPrice,
                    image: firstPackage.heroImage,
                    trending: true,
                },
            ];
        }
    );
    const packages =
        packageType === "domestic"
            ? domesticPackages
            : internationalPackages;

    const changePackageType = (type: PackageType) => {
        setPackageType(type);

        setTimeout(() => {
            api?.scrollTo(0);
        }, 0);
    };

    return (
        <section
            className="
                w-full
                overflow-hidden
                px-3
 
                sm:px-5
                sm:py-2
                md:px-6
                md:py-10

                lg:px-12
                lg:py-12
            "
        >
            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1400px]
                "
            >
                {/* HEADER */}
                <div
                    className="
                        mb-5
                        flex
                        items-center
                        justify-between
                        gap-3

                        sm:mb-7
                    "
                >
                    <h2
                        className="
                            min-w-0
                            text-[18px]
                            font-medium
                            leading-tight
                            tracking-[-0.4px]
                            text-black

                            sm:text-[23px]

                            md:text-[24px]

                            lg:text-[25px]
                        "
                    >
                        Browse Upcoming Packages
                    </h2>
                    {/* 
                    <Button
                        type="button"
                        variant="outline"
                        className="
                            hidden
                            h-8
                            shrink-0
                            rounded-full
                            border-[#20BFAF]
                            px-3
                            text-[11px]
                            font-normal
                            text-[#20BFAF]
                            shadow-none
                            hover:bg-[#20BFAF]
                            hover:text-white

                            sm:flex
                            sm:h-10
                            sm:px-4
                            sm:text-[13px]

                            lg:h-11
                            lg:px-5
                            lg:text-[15px]
                        "
                    >
                        <span className="whitespace-nowrap">
                            Explore all Trips
                        </span>

                        <ArrowUpRight
                            className="
                                ml-1.5
                                h-3.5
                                w-3.5

                                sm:ml-2
                                sm:h-4
                                sm:w-4

                                lg:h-5
                                lg:w-5
                            "
                        />
                    </Button> */}
                </div>

                {/* CAROUSEL */}
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent
                        className="
                            -ml-2.5

                            sm:-ml-4

                            md:-ml-5

                            lg:-ml-5
                        "
                    >
                        {packages.map((item) => (
                            <CarouselItem
                                key={item.name}
                                className="
                                    basis-[88%]
                                    pl-2.5

                                    sm:basis-[70%]
                                    sm:pl-4

                                    md:basis-1/2
                                    md:pl-5

                                    lg:basis-1/4
                                    lg:pl-5
                                "
                                onClick={() => {
                                    const destinationSlug = item.destination
                                        .toLowerCase()
                                        .replace(/\s+/g, "-");

                                    const packageSlug = item.name
                                        .toLowerCase()
                                        .replace(/\s+/g, "-");

                                    item.destination === item.name
                                        ? router.push(`/package/${packageSlug}`)
                                        : router.push(`/package/${destinationSlug}/${packageSlug}`);
                                }}
                            >
                                {/* PACKAGE CARD */}
                                <div
                                    className="
                                        group
                                        relative
                                        h-[245px]
                                        w-full
                                        cursor-pointer
                                        overflow-hidden
                                        rounded-[18px]
                                        bg-gray-200

                                        sm:h-[285px]
                                        sm:rounded-[21px]

                                        md:h-[310px]

                                        lg:h-[336px]
                                        lg:rounded-[24px]
                                    "
                                >
                                    {/* IMAGE */}
                                    <Image
                                        src={item.image}
                                        alt={item.destination}
                                        fill
                                        unoptimized
                                        sizes="
                                            (max-width: 640px) 88vw,
                                            (max-width: 768px) 70vw,
                                            (max-width: 1024px) 50vw,
                                            25vw
                                        "
                                        className="
                                            object-cover
                                            transition-transform
                                            duration-700
                                            group-hover:scale-105
                                        "
                                    />

                                    {/* IMAGE GRADIENT */}
                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-black/80
                                            via-black/20
                                            to-transparent
                                        "
                                    />

                                    {/* TOP BADGES */}
                                    <div
                                        className="
                                            absolute
                                            left-3
                                            right-3
                                            top-3
                                            flex
                                            items-center
                                            justify-between
                                            gap-2

                                            sm:left-4
                                            sm:right-4
                                            sm:top-4

                                            lg:left-5
                                            lg:right-5
                                            lg:top-5
                                        "
                                    >
                                        {/* TRENDING */}
                                        {item.trending ? (
                                            <span
                                                className="
                                                    rounded-full
                                                    bg-white
                                                    px-2
                                                    py-1
                                                    text-[9px]
                                                    font-medium
                                                    leading-none
                                                    text-primary

                                                    sm:px-2.5
                                                    sm:py-1.5
                                                    sm:text-[11px]

                                                    lg:px-3
                                                    lg:py-1.5
                                                    lg:text-[12px]
                                                "
                                            >
                                                Trending
                                            </span>
                                        ) : (
                                            <span />
                                        )}

                                        {/* DURATION */}
                                        <span
                                            className="
                                                rounded-full
                                                bg-white
                                                px-2
                                                py-1
                                                text-[9px]
                                                font-medium
                                                leading-none
                                                text-primary

                                                sm:px-2.5
                                                sm:py-1.5
                                                sm:text-[11px]

                                                lg:px-3
                                                lg:py-1.5
                                                lg:text-[12px]
                                            "
                                        >
                                            {item.duration}
                                        </span>
                                    </div>

                                    {/* BOTTOM CONTENT */}
                                    <div
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            right-0
                                            p-3

                                            sm:p-4

                                            md:p-5

                                            lg:p-5
                                        "
                                    >
                                        {/* DESTINATION */}
                                        <h3
                                            className="
                                                max-w-[80%]
                                                text-[24px]
                                                font-bold
                                                leading-[0.95]
                                                tracking-wide
                                                text-white
                                                transition-transform
                                                duration-300
                                                group-hover:-translate-y-1

                                                sm:text-[30px]

                                                md:text-[33px]

                                                lg:text-[36px]
                                            "
                                        >
                                            {item.name}
                                        </h3>

                                        {/* STARTING FROM */}
                                        <p
                                            className="
                                                mt-1.5
                                                text-[12px]
                                                font-medium
                                                leading-none
                                                text-white

                                                sm:mt-2
                                                sm:text-[16px]

                                                md:text-[18px]

                                                lg:text-[20px]
                                            "
                                        >
                                            Starting from
                                        </p>

                                        {/* PRICE + BUTTONS */}
                                        <div
                                            className="
                                                mt-1.5
                                                flex
                                                items-center
                                                justify-between
                                                gap-2

                                                sm:mt-2
                                            "
                                        >
                                            {/* PRICE */}
                                            <span
                                                className="
                                                    text-[15px]
                                                    font-medium
                                                    leading-none
                                                    text-white

                                                    sm:text-[18px]

                                                    md:text-[19px]

                                                    lg:text-[20px]
                                                "
                                            >
                                                {item.price}
                                            </span>

                                            {/* ACTION BUTTONS */}
                                            <div
                                                className="
                                                    flex
                                                    shrink-0
                                                    items-center
                                                    gap-1.5

                                                    sm:gap-2
                                                "
                                            >
                                                {/* PHONE */}
                                                <Button
                                                    type="button"
                                                    size="icon"
                                                    variant="outline"
                                                    className="
                                                    h-8
                                                    w-8
                                                    rounded-full
                                                    border
                                                    border-white
                                                    bg-transparent
                                                    text-white
                                                    shadow-none
                                                    hover:bg-white
                                                    hover:text-[#20BFAF]

                                                    sm:h-9
                                                    sm:w-9

                                                    md:h-10
                                                    md:w-10
                                                "
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        window.location.href = "tel:+919876543210";
                                                    }}
                                                >
                                                    <Phone
                                                        className="
            h-3.5
            w-3.5

            sm:h-4
            sm:w-4

            md:h-5
            md:w-5
        "
                                                    />
                                                </Button>

                                                {/* ARROW */}
                                                <Button
                                                    type="button"
                                                    size="icon"
                                                    className="
                                                        h-8
                                                        w-8
                                                        rounded-full
                                                        bg-[#20BFAF]
                                                        text-white
                                                        shadow-none
                                                        transition-transform
                                                        duration-300
                                                        hover:scale-110
                                                        hover:bg-[#20BFAF]

                                                        sm:h-9
                                                        sm:w-9

                                                        md:h-10
                                                        md:w-10
                                                    "

                                                >
                                                    <ArrowUpRight
                                                        className="
                                                            h-3.5
                                                            w-3.5

                                                            sm:h-4
                                                            sm:w-4

                                                            md:h-5
                                                            md:w-5
                                                        "
                                                    />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                {/* BOTTOM CONTROLS */}
                <div
                    className="
                        mt-4
                        flex
                        items-end
                        justify-end
                        gap-2

                        sm:mt-6
                    "
                >
                    {/* DOMESTIC / INTERNATIONAL */}
                    {/* <div
                        className="
                            flex
                            shrink-0
                            items-center
                            rounded-full
                            border
                            border-gray-200
                            bg-[#F8F8F8]
                            p-0.5

                            sm:p-1
                        "
                    >
                        <button
                            type="button"
                            onClick={() => changePackageType("domestic")}
                            className={`
                                rounded-full
                                px-3
                                py-1.5
                                text-[10px]
                                font-medium
                                transition-all
                                duration-300
                                whitespace-nowrap

                                sm:px-4
                                sm:py-2
                                sm:text-[13px]

                                lg:px-5
                                lg:text-[15px]

                                ${packageType === "domestic"
                                    ? "bg-primary text-white shadow-sm"
                                    : "text-[#7380A4]/70 hover:text-[#7380A4]"
                                }
                            `}
                        >
                            Domestic
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                changePackageType("international")
                            }
                            className={`
                                rounded-full
                                px-3
                                py-1.5
                                text-[10px]
                                font-medium
                                transition-all
                                duration-300
                                whitespace-nowrap

                                sm:px-4
                                sm:py-2
                                sm:text-[13px]

                                lg:px-5
                                lg:text-[15px]

                                ${packageType === "international"
                                    ? "bg-primary text-white shadow-sm"
                                    : "text-[#7380A4]/70 hover:text-[#7380A4]"
                                }
                            `}
                        >
                            International
                        </button>
                    </div> */}

                    {/* PREVIOUS / NEXT */}
                    <div
                        className="
                            flex
                            shrink-0
                            items-center
                            gap-1.5

                            sm:gap-2
                        "
                    >
                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => api?.scrollPrev()}
                            className="
                                h-8
                                w-8
                                rounded-full
                                border-gray-200
                                bg-[#F7F8FA]
                                text-[#7380A4]
                                shadow-none
                                transition-all
                                duration-200
                                hover:bg-[#20BFAF]
                                hover:text-white

                                sm:h-9
                                sm:w-9

                                lg:h-10
                                lg:w-10
                            "
                        >
                            <ChevronLeft
                                className="
                                    h-4
                                    w-4

                                    sm:h-5
                                    sm:w-5
                                "
                            />
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => api?.scrollNext()}
                            className="
                                h-8
                                w-8
                                rounded-full
                                border-gray-200
                                bg-[#F7F8FA]
                                text-[#7380A4]
                                shadow-none
                                transition-all
                                duration-200
                                hover:bg-[#20BFAF]
                                hover:text-white

                                sm:h-9
                                sm:w-9

                                lg:h-10
                                lg:w-10
                            "
                        >
                            <ChevronRight
                                className="
                                    h-4
                                    w-4

                                    sm:h-5
                                    sm:w-5
                                "
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}