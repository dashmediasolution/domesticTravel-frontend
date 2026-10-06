"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CalendarDays,
    Car,
    MapPin,
    ShieldCheck,
    Users,
    Utensils,
} from "lucide-react";
import { Dancing_Script, DM_Serif_Display } from "next/font/google";
import { useEffect, useState } from "react";

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
    subsets: ["latin"],
    weight: "400",
});

/* ================================================== */
/* TYPES                                              */
/* ================================================== */

type PackageImage = {
    url: string;
    publicId?: string | null;
};

type EarlyBirdPackage = {
    id: string;
    name: string;
    slug: string;
    subtitle: string | null;
    description: string | null;
    duration: string | null;
    groupSize: string | null;
    location: string | null;
    idealTrip: string | null;
    heroImage: PackageImage | null;
};

type EarlyBirdOffer = {
    id: string;
    title: string;
    slug: string;

    originalPrice: number | null;
    offerPrice: number;
    discount: number | null;
    saveAmount: number | null;

    validTill: string;
    badgeText: string | null;

    package: EarlyBirdPackage;
};

/* ================================================== */
/* HELPERS                                            */
/* ================================================== */

function formatPrice(
    price: number | null | undefined
) {
    if (price == null) {
        return "₹0";
    }

    return `₹${Number(price).toLocaleString("en-IN")}`;
}

function getPackageRoute(
    offer: EarlyBirdOffer
) {
    return `/offers/package/${offer.slug}`;
}

function formatDate(
    date: string | null | undefined
) {
    if (!date) {
        return "";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return "";
    }

    return parsedDate.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }
    );
}

/* ================================================== */
/* DESTINATION BADGE                                  */
/* ================================================== */

function DestinationBadge({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="inline-flex min-h-[25px] items-center rounded-[7px] bg-primary px-3 text-[9px] font-bold text-white shadow-sm sm:min-h-[28px] sm:px-3.5 sm:text-[10px] lg:min-h-[30px] lg:px-4 lg:text-[11px]">
            {children}
        </div>
    );
}

/* ================================================== */
/* SAVE BADGE                                         */
/* ================================================== */

function SaveBadge({
    amount,
    discount,
}: {
    amount?: number | null;
    discount?: number | null;
}) {
    let mainText = "Offer";

    if (amount != null) {
        mainText = formatPrice(amount);
    } else if (discount != null) {
        mainText = `${discount}%`;
    }

    return (
        <div className="absolute right-3 top-3 z-10 flex h-[65px] w-[72px] rotate-[-3deg] flex-col items-center justify-center rounded-full bg-[#00646A] text-center text-white shadow-md sm:right-4 sm:top-4 sm:h-[74px] sm:w-[82px] lg:h-[82px] lg:w-[92px]">
            <span className="text-[7px] leading-none sm:text-[8px]">
                Save Up To
            </span>

            <span className="mt-1 text-[15px] font-bold leading-none sm:text-[18px] lg:text-[21px]">
                {mainText}
            </span>

            {discount != null &&
                amount != null && (
                    <span className="mt-1 text-[7px] sm:text-[8px]">
                        {discount}% OFF
                    </span>
                )}
        </div>
    );
}

/* ================================================== */
/* FEATURED CARD                                      */
/* ================================================== */

function FeaturedCard({
    offer,
}: {
    offer: EarlyBirdOffer;
}) {
    const packageRoute =
        getPackageRoute(offer);

    const image =
        offer.package.heroImage?.url;

    return (
        <div className="relative min-h-[430px] w-full overflow-hidden rounded-xl sm:min-h-[470px] lg:h-[350px] lg:min-h-0">
            {/* Image */}
            {image ? (
                <Image
                    src={image}
                    alt={
                        offer.package.heroImage
                            ?.url
                            ? offer.package.name
                            : "Travel package"
                    }
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 900px"
                />
            ) : (
                <div className="absolute inset-0 bg-[#EAF5F4]" />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5" />

            {/* Destination */}
            <div className="absolute left-3 top-3 sm:left-4 sm:top-4 lg:left-5 lg:top-5">
                <DestinationBadge>
                    {offer.package.name.toUpperCase()}
                </DestinationBadge>
            </div>

            {/* Save */}
            <SaveBadge
                amount={offer.saveAmount}
                discount={offer.discount}
            />

            {/* Content */}
            <div className="absolute inset-x-4 bottom-4 text-white sm:inset-x-5 sm:bottom-5 lg:inset-x-7 lg:bottom-6">
                {/* Duration + Date */}
                <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] sm:text-[11px] lg:text-[13px]">
                    {offer.package.duration && (
                        <span className="flex items-center gap-1">
                            <CalendarDays className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-5 lg:w-5" />

                            {offer.package.duration} 
                        </span>
                    )}

                    {offer.validTill && (
                        <>
                            {offer.package.duration && (
                                <span className="opacity-60">
                                    |
                                </span>
                            )}

                            <span className="flex items-center gap-1">
                                <CalendarDays className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />

                                Valid till{" "}
                                {formatDate(
                                    offer.validTill
                                )}
                            </span>
                        </>
                    )}

                    {offer.package.idealTrip && (
                        <>
                            <span className="opacity-60">
                                |
                            </span>

                            <span>
                                {
                                    offer.package
                                        .idealTrip
                                }
                            </span>
                        </>
                    )}
                </div>

                {/* Title */}
                <h2
                    className={`${dmSerif.className} text-2xl leading-tight sm:text-3xl lg:text-[42px]`}
                >
                    {offer.package.subtitle ||
                        offer.package.name}
                </h2>

                {/* Description */}
                {offer.package
                    .description && (
                    <p className="mt-1 line-clamp-2 max-w-xl text-[9px] font-medium text-white/90 sm:text-[11px] lg:text-[13px]">
                        {
                            offer.package
                                .description
                        }
                    </p>
                )}

                {/* Features */}
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[8px] sm:text-[10px] lg:mt-4 lg:gap-x-6 lg:text-[12px]">
                    <span className="flex items-center gap-1">
                        <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
                        Hotel Stay
                    </span>

                    <span className="flex items-center gap-1">
                        <Utensils className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
                        Meals
                    </span>

                    <span className="flex items-center gap-1">
                        <Car className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
                        Sightseeing
                    </span>

                    <span className="flex items-center gap-1">
                        <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
                        Insurance
                    </span>
                </div>

                {/* Bottom */}
                <div className="mt-3 flex flex-wrap items-end justify-between gap-3 sm:mt-4">
                    {/* Price */}
                    <div>
                        <p className="text-[8px] sm:text-[10px] lg:text-[12px]">
                            Starting from
                        </p>

                        <div className="flex items-end">
                            <span className="text-2xl font-bold leading-none sm:text-3xl lg:text-[36px]">
                                {formatPrice(
                                    offer.offerPrice
                                )}
                            </span>

                            <span className="mb-0.5 ml-1 text-[8px] sm:text-[10px]">
                                / person
                            </span>
                        </div>
                    </div>

                    {/* CTA */}
                    <Link
                        href={packageRoute}
                        className="flex h-9 items-center gap-2 rounded-full bg-primary px-4 text-[9px] font-bold text-white transition hover:bg-primary/90 sm:h-10 sm:px-5 sm:text-[11px] lg:h-11 lg:px-6 lg:text-[12px]"
                    >
                        Book Early

                        <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </Link>
                </div>
            </div>

            {/* Group Size */}
            {offer.package.groupSize && (
                <div className="absolute bottom-3 right-3 hidden items-center gap-1.5 rounded-full bg-[#00474C]/90 px-3 py-1.5 text-[8px] text-white sm:flex sm:bottom-4 sm:right-4 sm:text-[9px] lg:bottom-5 lg:right-6 lg:text-[10px]">
                    <Users className="h-3 w-3 lg:h-4 lg:w-4" />

                    {offer.package.groupSize}
                </div>
            )}
        </div>
    );
}

/* ================================================== */
/* SMALL OFFER CARD                                   */
/* ================================================== */

function SmallOfferCard({
    offer,
}: {
    offer: EarlyBirdOffer;
}) {
    const packageRoute =
        getPackageRoute(offer);

    const image =
        offer.package.heroImage?.url;

    return (
        <div className="w-full overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_rgba(0,70,75,0.10)]">
            {/* Image */}
            <div className="relative h-[190px] w-full sm:h-[210px] lg:h-[195px]">
                {image ? (
                    <Image
                        src={image}
                        alt={offer.package.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                ) : (
                    <div className="absolute inset-0 bg-[#EAF5F4]" />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                {/* Destination */}
                <div className="absolute left-3 top-3">
                    <DestinationBadge>
                        {offer.package.name.toUpperCase()}
                    </DestinationBadge>
                </div>

                {/* Save */}
                <SaveBadge
                    amount={offer.saveAmount}
                    discount={offer.discount}
                />

                {/* Content */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3
                        className={`${dmSerif.className} text-xl leading-tight`}
                    >
                        {offer.package
                            .subtitle ||
                            offer.package.name}
                    </h3>

                    {offer.package
                        .description && (
                        <p className="mt-1 line-clamp-1 text-[9px] sm:text-[10px]">
                            {
                                offer.package
                                    .description
                            }
                        </p>
                    )}
                </div>
            </div>

            {/* Details */}
            <div className="flex min-h-[68px] items-center gap-2 px-3 py-2 sm:gap-3 sm:px-4">
                {/* Duration */}
                {offer.package.duration && (
                    <div className="flex shrink-0 items-center gap-1 text-[9px] text-[#165E62] sm:text-[10px] md:text-[12px]    ">
                        <CalendarDays className="h-3.5 w-3.5" />

                        <span>
                            {
                                offer.package
                                    .duration
                            }
                        </span>
                    </div>
                )}

                {/* Offer Date */}
                {offer.validTill && (
                    <div className="flex shrink-0 items-center gap-1 text-[9px] text-[#165E62] sm:text-[10px] md:text-[12px]">
                        <CalendarDays className="h-3.5 w-3.5" />

                        <span>
                            {formatDate(
                                offer.validTill
                            )}
                        </span>
                    </div>
                )}

                {/* Location */}
                <div className="flex min-w-0 flex-1 items-center gap-1 text-[9px] text-[#165E62] sm:text-[10px] md:text-[12px]">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />

                    <span className="truncate">
                        {offer.package
                            .location ||
                            "India"}
                    </span>
                </div>

                {/* Price */}
                <div className="shrink-0">
                    <p className="text-[7px] text-[#679092] sm:text-[8px] md:text-[12px]">
                        From
                    </p>

                    <p className="text-sm font-bold text-[#00666A] sm:text-base">
                        {formatPrice(
                            offer.offerPrice
                        )}
                    </p>
                </div>

                {/* Arrow */}
                <Link
                    href={packageRoute}
                    aria-label={`View ${offer.package.name} package`}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#A9C9CA] text-[#00666A] transition hover:bg-[#00666A] hover:text-white"
                >
                    <ArrowRight className="h-3.5 w-3.5" />
                </Link>
            </div>
        </div>
    );
}

/* ================================================== */
/* MAIN COMPONENT                                     */
/* ================================================== */

export default function EarlyBirdSale() {
    const [offers, setOffers] = useState<
        EarlyBirdOffer[]
    >([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {
        let mounted = true;

        async function fetchOffers() {
            try {
                const response = await fetch(
                    "/api/early-bird",
                    {
                        cache: "no-store",
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        "Failed to fetch early bird offers"
                    );
                }

                const result =
                    await response.json();

                if (!mounted) {
                    return;
                }

                if (
                    result?.success &&
                    Array.isArray(result.data)
                ) {
                    setOffers(result.data);
                } else {
                    setOffers([]);
                }
            } catch (error) {
                console.error(
                    "Early bird offers error:",
                    error
                );

                if (mounted) {
                    setOffers([]);
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        }

        fetchOffers();

        return () => {
            mounted = false;
        };
    }, []);

    /*
     * IMPORTANT:
     * These checks happen AFTER all hooks.
     *
     * This prevents:
     * "React has detected a change in the order
     * of Hooks called by EarlyBirdSale."
     */

    if (loading) {
        return null;
    }

    if (offers.length === 0) {
        return null;
    }

    const featuredOffer = offers[0];

    const smallOffers = offers.slice(1, 4);

    return (
        <section className="w-full overflow-hidden px-2 py-5 sm:px-3 lg:px-5">
            <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-4 sm:gap-5 lg:gap-6">
                {/* ================================================== */}
                {/* TOP SECTION                                      */}
                {/* ================================================== */}

                <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-[minmax(320px,0.55fr)_minmax(0,1.45fr)] lg:gap-5">
                    {/* ================================================== */}
                    {/* LEFT CONTENT                                       */}
                    {/* ================================================== */}

                    <div className="flex w-full flex-col items-center justify-center px-2 py-6 text-center sm:py-8 lg:px-4 lg:py-0">
                        {/* Labels */}
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <span className="flex h-6 items-center gap-1 rounded-full bg-primary px-2.5 text-[8px] font-bold text-white sm:h-7 sm:px-3 sm:text-[9px] lg:h-8 lg:px-3.5 lg:text-[10px]">
                                ⚡ LIVE NOW
                            </span>

                            <span className="text-[11px] font-semibold text-[#00606A] sm:text-[13px] lg:text-[15px]">
                                Limited Time Deals
                            </span>
                        </div>

                        {/* Heading */}
                        <div className="mt-5 sm:mt-6 lg:mt-7">
                            <h1
                                className={`${dancingScript.className} text-[48px] font-semibold leading-[42px] text-[#005D65] sm:text-[58px] sm:leading-[50px] lg:text-[70px] lg:leading-[62px]`}
                            >
                                Early Bird
                            </h1>

                            <h2
                                className={`${dmSerif.className} ml-16 mt-1 text-[52px] leading-[55px] text-[#005D65] sm:ml-20 sm:text-[64px] sm:leading-[65px] lg:ml-28 lg:text-[76px] lg:leading-[75px]`}
                            >
                                Sale
                            </h2>
                        </div>

                        {/* Subtitle */}
                        <p className="mt-2 text-[11px] font-semibold text-[#176A72] sm:text-[13px] lg:mt-3 lg:text-[15px]">
                            Book early. Travel more.
                            Save more.
                        </p>
                    </div>

                    {/* ================================================== */}
                    {/* FEATURED OFFER                                     */}
                    {/* ================================================== */}

                    <div className="w-full min-w-0">
                        <FeaturedCard
                            offer={featuredOffer}
                        />
                    </div>
                </div>

                {/* ================================================== */}
                {/* SMALL OFFER CARDS                                  */}
                {/* ================================================== */}

                {smallOffers.length > 0 && (
                    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                        {smallOffers.map(
                            (offer) => (
                                <SmallOfferCard
                                    key={offer.id}
                                    offer={offer}
                                />
                            )
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}