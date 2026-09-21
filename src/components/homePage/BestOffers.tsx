"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Timer } from "lucide-react";
import { useRouter } from "next/navigation";
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
    redirect?:string
}

export const domesticOffers: Offer[] = [
     {
        id: 2,
        destination: "Meghalaya",
        subtitle: "The Abode of Clouds",
        discount: "25% OFF",
        endsIn: "Ends in 02 D",
        price: "₹24,000",
        priceSuffix: "/person",
        redirect:"/package/meghalaya/",
        image:  "https://images.unsplash.com/photo-1707219004247-0657a598a23d?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  
    {
        id: 3,
        destination: "JAIPUR",
        subtitle: "Sun, Sand & Good Vibes",
        discount: "25% OFF",
        endsIn: "Ends in 02 D",
        price: "₹10,999",
        priceSuffix: "/person",
        redirect:"/package/rajasthan/jaipur",
        image:  "https://images.unsplash.com/photo-1695395550316-8995ae9d35ff?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },
    {
        id: 4,
        destination: "MUSSOORIE",
        subtitle: "Sun, Sand & Good Vibes",
        discount: "25% OFF",
        endsIn: "Ends in 02 D",
        price: "₹13,499",
        priceSuffix: "/person",
        redirect:"/package/uttarakhand/mussoorie",
        image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=3840&q=90",

    },
    {
        id: 5,
        destination: "KASOL",
        subtitle: "Sun, Sand & Good Vibes",
        discount: "25% OFF",
        endsIn: "Ends in 02 D",
        price: "₹12,999",
        priceSuffix: "/person",
        redirect:"/package/himachal-pradesh/kasol",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2560&q=80",

    },
];

export const internationalOffers: Offer[] = [
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
    const router = useRouter()
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
                md:py-10
                sm:px-8
             
                lg:py-12
            "
        >
            <div className="mx-auto w-[99%]">

                {/* =====================================================
                    HEADER
                ===================================================== */}

        <div className="mb-5 flex items-center justify-between gap-3 sm:mb-7">
    <h2
        className="
            min-w-0
            text-[18px]
            font-medium
            leading-tight
            tracking-[-0.4px]
            text-black
            sm:text-[25px]
            sm:tracking-[-0.6px]
        "
    >
        Get best offers for you
    </h2>

    {/* <Button
        type="button"
        variant="outline"
        className="
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
            sm:h-11
            sm:px-5
            sm:text-[15px]
        "
    >
        <span className="whitespace-nowrap">
            Get all offers
        </span>

        <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-5 sm:w-5" />
    </Button> */}
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
                  <CarouselContent className="-ml-3 sm:-ml-4 lg:-ml-6">
    {offers.map((offer) => (
        <CarouselItem
            key={offer.id}
            className="
                basis-[82%]
                pl-3

                sm:basis-[65%]
                sm:pl-4

                md:basis-1/2
                md:pl-5

                lg:basis-1/3
                lg:pl-6
            "
        >
            <div
                className="
                    group
                    relative
                    h-[190px]
                    w-full
                    overflow-hidden
                    rounded-[18px]
                    bg-gray-200

                    sm:h-[220px]
                    sm:rounded-[22px]

                    md:h-[250px]

                    lg:h-[286px]
                lg:rounded-[24px]
                "
            >
                {/* Background Image */}
                <Image
                    src={offer.image}
                    alt={offer.destination}
                    fill
                    sizes="
                        (max-width: 640px) 82vw,
                        (max-width: 768px) 65vw,
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

                {/* Gradient */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/75
                        via-black/10
                        to-transparent
                    "
                />

                {/* Top Badges */}
                <div
                    className="
                        absolute
                        left-3
                        right-3
                        top-3
                        flex
                        items-center
                        justify-between

                        sm:left-4
                        sm:right-4
                        sm:top-4
                    "
                >
                    {/* Discount */}
                    <span
                        className="
                            rounded-[6px]
                            bg-white
                            px-2
                            py-1.5
                            text-[10px]
                            font-medium
                            leading-none
                            text-[#20BFAF]
                            shadow-sm

                            sm:px-3
                            sm:py-2
                            sm:text-[12px]
                        "
                    >
                        {offer.discount}
                    </span>

                    {/* Timer */}
                    <span
                        className="
                            flex
                            items-center
                            gap-1
                            rounded-[6px]
                            bg-white
                            px-2
                            py-1.5
                            text-[10px]
                            font-normal
                            leading-none
                            text-[#A7ADB8]
                            shadow-sm

                            sm:gap-1.5
                            sm:px-3
                            sm:py-2
                            sm:text-[12px]
                        "
                    >
                        <Timer
                            className="
                                h-3
                                w-3
                                text-[#20BFAF]

                                sm:h-4
                                sm:w-4
                            "
                            strokeWidth={2}
                        />

                        {offer.endsIn}
                    </span>
                </div>

                {/* Content */}
                <div
                    className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        flex
                        h-[82%]
                        flex-col
                        justify-between
                        p-3

                        sm:h-[85%]
                        sm:p-4

                        md:p-5

                        lg:p-5
                    "
                >
                    {/* Destination */}
                    <div>
                        <h3
                            className="
                                text-[24px]
                                font-bold
                                leading-none
                                tracking-[0.5px]
                                text-white

                                sm:text-[30px]

                                md:text-[34px]

                                lg:text-[40px]
                            "
                        >
                            {offer.destination}
                        </h3>

                        <p
                            className="
                                mt-1
                                text-[11px]
                                font-normal
                                leading-tight
                                text-white

                                sm:text-[13px]

                                md:text-[15px]

                                lg:text-[17px]
                            "
                        >
                            {offer.subtitle}
                        </p>
                    </div>

                    {/* Bottom Row */}
                    <div
                        className="
                            flex
                            items-end
                            justify-between
                            gap-2
                        "
                    >
                        {/* Price */}
                        <div>
                            <p
                                className="
                                    text-[10px]
                                    font-normal
                                    leading-none
                                    text-white

                                    sm:text-[12px]

                                    md:text-[13px]

                                    lg:text-[15px]
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
                                        text-[18px]
                                        font-semibold
                                        leading-none
                                        text-white

                                        sm:text-[21px]

                                        md:text-[23px]

                                        lg:text-[25px]
                                    "
                                >
                                    {offer.price}
                                </span>

                                <span
                                    className="
                                        text-[10px]
                                        font-normal
                                        text-white

                                        sm:text-[12px]

                                        lg:text-[14px]
                                    "
                                >
                                    {offer.priceSuffix}
                                </span>
                            </div>
                        </div>

                        {/* Explore */}
                        <Button
                            type="button"
                            variant="outline"
                            className="
                                h-8
                                shrink-0
                                rounded-full
                            
                                px-2.5
                                text-[10px]
                                font-normal
                                text-white
                                shadow-none
                                hover:border-primary
                                hover:bg-primary
                                bg-primary/80
                                border-none
                                sm:h-9
                                sm:px-3
                                sm:text-[12px]
                                cursor-pointer
                                hover:text-white
                                md:h-10
                                md:px-4
                                md:text-[13px]

                                lg:text-[14px]
                            "
                            onClick={()=>router.push(offer.redirect ?? "/")}
                        >
                            <span className="whitespace-nowrap hidden md:block">
                                Explore Now
                            </span>

                            <ArrowRight />
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
        mt-5
        flex
        items-center
        justify-between
        gap-3
        sm:mt-6
    "
>
    {/* Domestic / International */}
    <div
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
            onClick={() => {
                setOfferType("domestic");

                setTimeout(() => {
                    api?.scrollTo(0);
                }, 0);
            }}
            className={`
                rounded-full
                px-3
                py-1.5
                text-[11px]
                font-medium
                transition-all
                duration-300

                sm:px-5
                sm:py-2
                sm:text-[15px]

                ${
                    offerType === "domestic"
                        ? "bg-primary text-white shadow-sm"
                        : "text-[#7380A4]/70 hover:text-[#7380A4]"
                }
            `}
        >
            Domestic
        </button>

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
                px-3
                py-1.5
                text-[11px]
                font-medium
                transition-all
                duration-300

                sm:px-5
                sm:py-2
                sm:text-[15px]

                ${
                    offerType === "international"
                        ? "bg-primary text-white shadow-sm"
                        : "text-[#7380A4]/70 hover:text-[#7380A4]"
                }
            `}
        >
            International
        </button>
    </div>

    {/* Previous / Next */}
    <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => api?.scrollPrev()}
            className="
                h-8
                w-8
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
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
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
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
    </div>
</div>
            </div>
        </section>
    );
}