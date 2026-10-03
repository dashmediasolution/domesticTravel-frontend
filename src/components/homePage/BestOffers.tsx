"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Timer,
} from "lucide-react";
import { useRouter } from "next/navigation";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";

type OfferType = "domestic" | "international";

interface ApiOffer {
    id: string;
    title: string;
    slug: string;
    offerPrice: number;
    originalPrice: number;
    discount: number | null;
    saveAmount: number | null;
    startDate: string;
    endDate: string;
    badgeText: string | null;

    package: {
        id: string;
        name: string;
        slug: string;
        subtitle: string | null;
        location: string | null;
        category: string | null;

        heroImage: {
            url: string;
        } | null;
    };
}

interface OffersResponse {
    success: boolean;
    count: number;
    offers: ApiOffer[];
}

interface Offer {
    id: string;
    destination: string;
    subtitle: string;
    discount: string;
    endsIn: string;
    price: string;
    priceSuffix: string;
    image: string;
    redirect: string;
}

export default function BestOffers() {
    const [offerType, setOfferType] =
        useState<OfferType>("domestic");

    const [offers, setOffers] = useState<Offer[]>([]);
    const [loading, setLoading] = useState(true);

    const router = useRouter();
    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                setLoading(true);

                const response = await fetch("/api/offers", {
                    cache: "no-store",
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch offers");
                }

                const result: OffersResponse =
                    await response.json();

                const mappedOffers: Offer[] =
                    result.offers
                        .filter(
                            (offer) =>
                                offer.package?.heroImage?.url
                        )
                        .map((offer) => {
                            const endDate = new Date(
                                offer.endDate
                            );

                            const now = new Date();

                            const diff =
                                endDate.getTime() -
                                now.getTime();

                            const days = Math.max(
                                0,
                                Math.ceil(
                                    diff /
                                    (1000 *
                                        60 *
                                        60 *
                                        24)
                                )
                            );

                            const discount =
                                offer.discount ??
                                (offer.originalPrice > 0
                                    ? Math.round(
                                        ((offer.originalPrice -
                                            offer.offerPrice) /
                                            offer.originalPrice) *
                                        100
                                    )
                                    : 0);

                            return {
                                id: offer.id,

                                destination:
                                    offer.package.name,

                                subtitle:
                                    offer.package.subtitle ??
                                    offer.package.category ??
                                    offer.package.location ??
                                    "",

                                discount: `${discount}% OFF`,

                                endsIn:
                                    days > 0
                                        ? `Ends in ${days} D`
                                        : "Ends today",

                                price: `₹${offer.offerPrice.toLocaleString(
                                    "en-IN"
                                )}`,

                                priceSuffix: "/person",

                                image:
                                    offer.package.heroImage
                                        ?.url ?? "",

                                redirect: `/package/${offer.slug}`,
                            };
                        });

                setOffers(mappedOffers);
            } catch (error) {
                console.error(
                    "Failed to fetch offers:",
                    error
                );

                setOffers([]);
            } finally {
                setLoading(false);
            }
        };

        fetchOffers();
    }, []);

    /*
     * Currently the Package model/API does not contain
     * domestic/international information.
     *
     * Therefore both tabs use the same offers.
     *
     * When package type is added to the API, this can
     * be changed to:
     *
     * offers.filter(
     *     (offer) => offer.packageType === offerType
     * )
     */
    const filteredOffers = offers;

    const handleTypeChange = (type: OfferType) => {
        setOfferType(type);

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
                            sm:text-[25px]
                            sm:tracking-[-0.6px]
                        "
                    >
                        Get best offers for you
                    </h2>
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
                        {/* =================================================
                            LOADING
                        ================================================= */}

                        {loading ? (
                            Array.from({ length: 3 }).map(
                                (_, index) => (
                                    <CarouselItem
                                        key={index}
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
                                                h-[190px]
                                                w-full
                                                animate-pulse
                                                rounded-[18px]
                                                bg-gray-200
                                                sm:h-[220px]
                                                sm:rounded-[22px]
                                                md:h-[250px]
                                                lg:h-[286px]
                                                lg:rounded-[24px]
                                            "
                                        />
                                    </CarouselItem>
                                )
                            )
                        ) : filteredOffers.length === 0 ? (
                            /* =============================================
                                EMPTY STATE
                            ============================================= */

                            <CarouselItem className="basis-full pl-3">
                                <div
                                    className="
                                        flex
                                        h-[190px]
                                        items-center
                                        justify-center
                                        rounded-[18px]
                                        bg-gray-100
                                        text-sm
                                        text-gray-500
                                        sm:h-[220px]
                                        md:h-[250px]
                                        lg:h-[286px]
                                    "
                                >
                                    No offers available
                                </div>
                            </CarouselItem>
                        ) : (
                            /* =============================================
                                OFFERS
                            ============================================= */

                            filteredOffers.map((offer) => (
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
                                        {/* =================================
                                            BACKGROUND IMAGE
                                        ================================= */}

                                        <Image
                                            src={offer.image}
                                            alt={
                                                offer.destination
                                            }
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

                                        {/* =================================
                                            GRADIENT
                                        ================================= */}

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

                                        {/* =================================
                                            TOP BADGES
                                        ================================= */}

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

                                        {/* =================================
                                            CONTENT
                                        ================================= */}

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
                                            {/* =================================
                                                DESTINATION / PACKAGE
                                            ================================= */}

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
                                                    {
                                                        offer.destination
                                                    }
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
                                                    {
                                                        offer.subtitle
                                                    }
                                                </p>
                                            </div>

                                            {/* =================================
                                                BOTTOM ROW
                                            ================================= */}

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
                                                            {
                                                                offer.price
                                                            }
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
                                                            {
                                                                offer.priceSuffix
                                                            }
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
                                                        cursor-pointer
                                                        rounded-full
                                                        border-none
                                                        bg-primary/80
                                                        px-2.5
                                                        text-[10px]
                                                        font-normal
                                                        text-white
                                                        shadow-none
                                                        hover:border-primary
                                                        hover:bg-primary
                                                        hover:text-white
                                                        sm:h-9
                                                        sm:px-3
                                                        sm:text-[12px]
                                                        md:h-10
                                                        md:px-4
                                                        md:text-[13px]
                                                        lg:text-[14px]
                                                    "
                                                    onClick={() =>
                                                        router.push(`/offers${offer.redirect}`)
                                                    }
                                                >
                                                    <span className="hidden whitespace-nowrap md:block">
                                                        Explore Now
                                                    </span>

                                                    <ArrowRight />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))
                        )}
                    </CarouselContent>
                </Carousel>

                {/* =====================================================
                    BOTTOM CONTROLS
                ===================================================== */}

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
                    {/* =============================================
                        DOMESTIC / INTERNATIONAL
                    ============================================= */}

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
                        {/* Domestic */}

                        <button
                            type="button"
                            onClick={() =>
                                handleTypeChange(
                                    "domestic"
                                )
                            }
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
                            onClick={() =>
                                handleTypeChange(
                                    "international"
                                )
                            }
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
                                ${offerType ===
                                    "international"
                                    ? "bg-primary text-white shadow-sm"
                                    : "text-[#7380A4]/70 hover:text-[#7380A4]"
                                }
                            `}
                        >
                            International
                        </button>
                    </div>

                    {/* =============================================
                        PREVIOUS / NEXT
                    ============================================= */}

                    <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() =>
                                api?.scrollPrev()
                            }
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
                            onClick={() =>
                                api?.scrollNext()
                            }
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
