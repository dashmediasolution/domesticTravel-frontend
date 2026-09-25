"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CalendarDays,
    Car,
    Clock3,
    MapPin,
    Plane,
    ShieldCheck,
    Users,
    Utensils,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Dancing_Script, DM_Serif_Display } from "next/font/google";

import { packageData } from "@/constants/packagesData";

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
    subsets: ["latin"],
    weight: "400",
});

/* -------------------------------------------------- */
/* EARLY BIRD PACKAGES                                */
/* -------------------------------------------------- */

const earlyBirdPackages = [
    { id: 1, name: "Manali" },
    { id: 2, name: "Kashmir" },
    { id: 3, name: "Goa" },
    { id: 4, name: "Darjeeling" },
];

/* -------------------------------------------------- */
/* HELPERS                                            */
/* -------------------------------------------------- */

function normalizeName(value: string) {
    return value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");
}

function getPackageInfo(packageName: string) {
    const slug = normalizeName(packageName);

    for (const destination of packageData) {
        const foundPackage = destination.packages?.find(
            (item) => normalizeName(item.name) === slug
        );

        if (foundPackage) {
            return {
                package: foundPackage,
                destination: destination.name,
            };
        }
    }

    const destination = packageData.find(
        (item) => normalizeName(item.name) === slug
    );

    if (destination?.packages?.length) {
        return {
            package: destination.packages[0],
            destination: destination.name,
        };
    }

    return undefined;
}

function getPackage(packageName: string) {
    return getPackageInfo(packageName)?.package;
}

function getPackageRoute(packageName: string) {
    const info = getPackageInfo(packageName);

    if (!info) {
        return "/";
    }

    const destinationSlug = normalizeName(info.destination);
    const packageSlug = normalizeName(info.package.name);

    if (destinationSlug === packageSlug) {
        return `/package/${destinationSlug}`;
    }

    return `/package/${destinationSlug}/${packageSlug}`;
}

/* -------------------------------------------------- */
/* COUNTDOWN                                          */
/* -------------------------------------------------- */

function useCountdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 18,
        minutes: 42,
        seconds: 16,
    });

    useEffect(() => {
        const STORAGE_KEY =
            "wander-india-early-bird-sale-end";

        let savedEndTime =
            localStorage.getItem(STORAGE_KEY);

        if (!savedEndTime) {
            const duration =
                2 * 24 * 60 * 60 * 1000 +
                18 * 60 * 60 * 1000 +
                42 * 60 * 1000 +
                16 * 1000;

            savedEndTime = String(
                Date.now() + duration
            );

            localStorage.setItem(
                STORAGE_KEY,
                savedEndTime
            );
        }

        const endTime = Number(savedEndTime);

        const updateCountdown = () => {
            const difference =
                endTime - Date.now();

            if (difference <= 0) {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });

                return;
            }

            setTimeLeft({
                days: Math.floor(
                    difference /
                        (1000 * 60 * 60 * 24)
                ),

                hours: Math.floor(
                    (difference /
                        (1000 * 60 * 60)) %
                        24
                ),

                minutes: Math.floor(
                    (difference /
                        (1000 * 60)) %
                        60
                ),

                seconds: Math.floor(
                    (difference / 1000) % 60
                ),
            });
        };

        updateCountdown();

        const interval = setInterval(
            updateCountdown,
            1000
        );

        return () => {
            clearInterval(interval);
        };
    }, []);

    return timeLeft;
}

/* -------------------------------------------------- */
/* DESTINATION BADGE                                 */
/* -------------------------------------------------- */

function DestinationBadge({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="inline-flex h-[23px] items-center gap-[5px] rounded-[7px] bg-[#FFD83D] px-[10px] text-[9px] font-bold text-[#004B50] shadow-sm sm:h-[27px] sm:px-[12px] sm:text-[10px] lg:h-[30px] lg:gap-[6px] lg:px-[14px] lg:text-[11px]">
            <Plane className="h-[11px] w-[11px] fill-[#004B50] sm:h-[13px] sm:w-[13px] lg:h-[14px] lg:w-[14px]" />

            <span>{children}</span>
        </div>
    );
}

/* -------------------------------------------------- */
/* SAVE BADGE                                         */
/* -------------------------------------------------- */

function SaveBadge({
    amount,
}: {
    amount?: string;
}) {
    return (
        <div className="absolute right-[10px] top-[9px] z-10 flex h-[62px] w-[72px] rotate-[-3deg] flex-col items-center justify-center rounded-[50%] bg-[#00646A] text-center text-white sm:right-[14px] sm:top-[12px] sm:h-[72px] sm:w-[84px] lg:right-[18px] lg:top-[14px] lg:h-[82px] lg:w-[96px]">
            <span className="text-[7px] leading-[9px] sm:text-[8px] sm:leading-[10px] lg:text-[9px] lg:leading-[11px]">
                Save Up To
            </span>

            <span className="mt-[1px] text-[17px] font-bold leading-[19px] sm:text-[20px] sm:leading-[22px] lg:text-[23px] lg:leading-[25px]">
                {amount || "Offer"}
            </span>
        </div>
    );
}

/* -------------------------------------------------- */
/* COUNTDOWN ITEM                                     */
/* -------------------------------------------------- */

function CountdownItem({
    value,
    label,
}: {
    value: number;
    label: string;
}) {
    return (
        <div className="flex h-[45px] w-[39px] flex-col items-center justify-center rounded-[8px] bg-[#FFF8DC] sm:h-[50px] sm:w-[46px] lg:h-[58px] lg:w-[54px]">
            <span className="text-[15px] font-bold leading-[15px] text-[#00545A] sm:text-[17px] sm:leading-[17px] lg:text-[20px] lg:leading-[20px]">
                {String(value).padStart(2, "0")}
            </span>

            <span className="mt-[3px] text-[6px] font-medium text-[#5F8182] sm:text-[7px] lg:mt-[4px] lg:text-[8px]">
                {label}
            </span>
        </div>
    );
}

/* -------------------------------------------------- */
/* FEATURED CARD                                      */
/* -------------------------------------------------- */

function FeaturedCard() {
    const packageName = "Manali";
    const offer = getPackage(packageName);
    const packageRoute = getPackageRoute(packageName);

    if (!offer) {
        return (
            <div className="flex h-[268px] w-full items-center justify-center rounded-[8px] bg-[#EAF5F4] text-sm text-[#005D65]">
                Manali package not found
            </div>
        );
    }

    return (
        <div className="relative h-[268px] w-full overflow-hidden rounded-[8px] sm:h-[310px] lg:h-[350px]">
            <Image
                src={offer.heroImage}
                alt={offer.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 630px"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#00383B]/90 via-[#00383B]/55 via-[45%] to-transparent" />

            {/* Destination */}
            <div className="absolute left-[14px] top-[10px] sm:left-[18px] sm:top-[14px] lg:left-[22px] lg:top-[18px]">
                <DestinationBadge>
                    {offer.name.toUpperCase()}
                </DestinationBadge>
            </div>

            {/* Save */}
            <SaveBadge
                amount={
                    offer.saveAmount ||
                    offer.discount
                }
            />

            {/* Content */}
            <div className="absolute bottom-[15px] left-[20px] right-[15px] text-white sm:bottom-[20px] sm:left-[26px] sm:right-[22px] lg:bottom-[25px] lg:left-[32px] lg:right-[28px]">
                {/* Duration */}
                <div className="mb-[7px] flex items-center gap-[7px] text-[9px] sm:mb-[9px] sm:gap-[9px] sm:text-[11px] lg:mb-[11px] lg:gap-[10px] lg:text-[13px]">
                    <span className="flex items-center gap-[4px] sm:gap-[5px]">
                        <CalendarDays className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] lg:h-[16px] lg:w-[16px]" />

                        {offer.duration}
                    </span>

                    {offer.idealTrip && (
                        <>
                            <span>|</span>

                            <span>
                                {offer.idealTrip}
                            </span>
                        </>
                    )}
                </div>

                {/* Title */}
                <h2
                    className={`${dmSerif.className} text-[24px] leading-[25px] sm:text-[34px] sm:leading-[36px] lg:text-[44px] lg:leading-[46px]`}
                >
                    {offer.subtitle ||
                        offer.name}
                </h2>

                {/* Description */}
                <p className="mt-[3px] max-w-[470px] text-[9px] font-medium text-white/90 sm:mt-[5px] sm:text-[11px] lg:mt-[7px] lg:text-[13px] lg:leading-[19px]">
                    {offer.description}
                </p>

                {/* Features */}
                <div className="mt-[11px] flex flex-wrap items-center gap-x-[15px] gap-y-[5px] text-[8px] sm:mt-[14px] sm:gap-x-[20px] sm:gap-y-[7px] sm:text-[10px] lg:mt-[18px] lg:gap-x-[26px] lg:gap-y-[9px] lg:text-[12px]">
                    <span className="flex items-center gap-[4px] sm:gap-[5px]">
                        <ShieldCheck className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] lg:h-[17px] lg:w-[17px]" />
                        Hotel Stay
                    </span>

                    <span className="flex items-center gap-[4px] sm:gap-[5px]">
                        <Utensils className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] lg:h-[17px] lg:w-[17px]" />
                        Meals
                    </span>

                    <span className="flex items-center gap-[4px] sm:gap-[5px]">
                        <Car className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] lg:h-[17px] lg:w-[17px]" />
                        Sightseeing
                    </span>

                    <span className="flex items-center gap-[4px] sm:gap-[5px]">
                        <ShieldCheck className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] lg:h-[17px] lg:w-[17px]" />
                        Travel Insurance
                    </span>
                </div>

                {/* Price */}
                <div className="mt-[12px] flex items-end gap-[22px] sm:mt-[16px] sm:gap-[28px] lg:mt-[20px] lg:gap-[35px]">
                    <div>
                        <p className="mb-[1px] text-[8px] sm:text-[10px] lg:text-[14px]">
                            Starting from
                        </p>

                        <div className="flex items-end">
                            <span className="text-[24px] font-bold leading-[24px] sm:text-[30px] sm:leading-[30px] lg:text-[38px] lg:leading-[38px]">
                                {offer.startingPrice ||
                                    offer.offerPrice}
                            </span>

                            <span className="mb-[2px] ml-[5px] text-[8px] sm:mb-[3px] sm:text-[10px] lg:mb-[5px] lg:text-[12px]">
                                per person
                            </span>
                        </div>
                    </div>

                    <Link
                        href={packageRoute}
                        className="flex h-[35px] items-center gap-[9px] rounded-full bg-[#FFD83D] px-[19px] text-[10px] font-bold text-[#004B50] transition-all duration-200 hover:bg-white sm:h-[42px] sm:gap-[10px] sm:px-[23px] sm:text-[12px] lg:h-[50px] lg:gap-[12px] lg:px-[30px] lg:text-[14px]"
                    >
                        Book Early

                        <ArrowRight className="h-[13px] w-[13px] sm:h-[15px] sm:w-[15px] lg:h-[18px] lg:w-[18px]" />
                    </Link>
                </div>
            </div>

            {/* Group */}
            <div className="absolute bottom-[15px] right-[14px] flex items-center gap-[5px] rounded-full bg-[#00474C]/90 px-[9px] py-[5px] text-[8px] text-white sm:bottom-[20px] sm:right-[20px] sm:gap-[6px] sm:px-[11px] sm:py-[6px] sm:text-[9px] lg:bottom-[25px] lg:right-[28px] lg:gap-[7px] lg:px-[14px] lg:py-[8px] lg:text-[11px]">
                <Users className="h-[11px] w-[11px] sm:h-[13px] sm:w-[13px] lg:h-[15px] lg:w-[15px]" />

                {offer.groupSize ||
                    "Limited Seats"}
            </div>
        </div>
    );
}

/* -------------------------------------------------- */
/* SMALL OFFER CARD                                   */
/* -------------------------------------------------- */

function SmallOfferCard({
    packageName,
}: {
    packageName: string;
}) {
    const offer = getPackage(packageName);
    const packageRoute = getPackageRoute(packageName);

    if (!offer) {
        return (
            <div className="flex h-[207px] w-full items-center justify-center rounded-[8px] bg-[#EAF5F4] text-xs text-[#005D65]">
                {packageName} package not found
            </div>
        );
    }

    return (
        <div className="h-[207px] w-full overflow-hidden rounded-[8px] bg-white shadow-[0_4px_16px_rgba(0,70,75,0.10)] sm:h-[235px] lg:h-[255px]">
            {/* Image */}
            <div className="relative h-[158px] w-full sm:h-[180px] lg:h-[195px]">
                <Image
                    src={offer.heroImage}
                    alt={offer.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-[75px] bg-gradient-to-t from-black/75 to-transparent sm:h-[90px] lg:h-[100px]" />

                {/* Destination */}
                <div className="absolute left-[9px] top-[9px] sm:left-[13px] sm:top-[12px] lg:left-[16px] lg:top-[15px]">
                    <DestinationBadge>
                        {offer.name.toUpperCase()}
                    </DestinationBadge>
                </div>

                {/* Save */}
                <SaveBadge
                    amount={
                        offer.saveAmount ||
                        offer.discount
                    }
                />

                {/* Text */}
                <div className="absolute bottom-[9px] left-[12px] right-[10px] text-white sm:bottom-[13px] sm:left-[16px] sm:right-[14px] lg:bottom-[16px] lg:left-[20px] lg:right-[18px]">
                    <h3
                        className={`${dmSerif.className} text-[13px] leading-[16px] sm:text-[17px] sm:leading-[20px] lg:text-[21px] lg:leading-[24px]`}
                    >
                        {offer.subtitle ||
                            offer.name}
                    </h3>

                    <p className="mt-[1px] line-clamp-1 text-[8px] font-medium sm:text-[10px] lg:mt-[3px] lg:text-[11px]">
                        {offer.description}
                    </p>
                </div>
            </div>

            {/* Details */}
            <div className="flex h-[49px] w-full items-center px-[11px] sm:h-[55px] sm:px-[15px] lg:h-[60px] lg:px-[18px]">
                {/* Duration */}
                <div className="flex shrink-0 items-center gap-[5px] text-[7px] text-[#165E62] sm:gap-[6px] sm:text-[9px] lg:gap-[7px] lg:text-[10px]">
                    <CalendarDays className="h-[11px] w-[11px] sm:h-[13px] sm:w-[13px] lg:h-[15px] lg:w-[15px]" />

                    <span>
                        {offer.duration}
                    </span>
                </div>

                {/* Location */}
                <div className="ml-[9px] flex min-w-0 flex-1 items-center gap-[4px] text-[6px] text-[#527476] sm:ml-[12px] sm:gap-[5px] sm:text-[8px] lg:ml-[16px] lg:gap-[6px] lg:text-[9px]">
                    <MapPin className="h-[9px] w-[9px] shrink-0 text-[#00666A] sm:h-[11px] sm:w-[11px] lg:h-[13px] lg:w-[13px]" />

                    <span className="truncate">
                        {offer.location ||
                            "India"}
                    </span>
                </div>

                {/* Price */}
                <div className="ml-[5px] shrink-0 sm:ml-[8px] lg:ml-[10px]">
                    <p className="text-[6px] leading-[7px] text-[#679092] sm:text-[7px] sm:leading-[8px] lg:text-[8px] lg:leading-[9px]">
                        Starting from
                    </p>

                    <p className="text-[13px] font-bold leading-[14px] text-[#00666A] sm:text-[16px] sm:leading-[17px] lg:text-[19px] lg:leading-[20px]">
                        {offer.startingPrice ||
                            offer.offerPrice}
                    </p>

                    <p className="text-[6px] leading-[7px] text-[#679092] sm:text-[7px] sm:leading-[8px] lg:text-[8px] lg:leading-[9px]">
                        per person
                    </p>
                </div>

                {/* Arrow */}
                <Link
                    href={packageRoute}
                    aria-label={`View ${offer.name} package`}
                    className="ml-[8px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full border border-[#A9C9CA] text-[#00666A] transition-all duration-200 hover:bg-[#00666A] hover:text-white sm:ml-[11px] sm:h-[28px] sm:w-[28px] lg:ml-[14px] lg:h-[34px] lg:w-[34px]"
                >
                    <ArrowRight className="h-[9px] w-[9px] sm:h-[12px] sm:w-[12px] lg:h-[15px] lg:w-[15px]" />
                </Link>
            </div>
        </div>
    );
}

/* -------------------------------------------------- */
/* MAIN COMPONENT                                     */
/* -------------------------------------------------- */

export default function EarlyBirdSale() {
    const {
        days,
        hours,
        minutes,
        seconds,
    } = useCountdown();

    return (
        <section className="relative w-full overflow-hidden py-5 px-2">
            <div className="mx-auto w-full max-w-[95%]">
                {/* TOP SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-[500px_minmax(0,1fr)]">
                    {/* LEFT */}
                    <div className="flex w-full flex-col items-center justify-center py-8 lg:max-h-[350px] lg:py-0">
                        {/* Labels */}
                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <span className="flex h-[22px] items-center gap-[3px] rounded-full bg-[#FFD83D] px-[9px] text-[8px] font-bold text-[#004B50] sm:h-[25px] sm:px-[11px] sm:text-[9px] lg:h-[30px] lg:gap-[5px] lg:px-[14px] lg:text-[11px]">
                                <span className="text-md">
                                    ⚡
                                </span>

                                LIVE NOW
                            </span>

                            <span className="text-[12px] font-semibold text-[#00606A] sm:text-[14px] lg:text-[16px]">
                                Limited Time Deals
                            </span>

                            <span className="text-[12px] text-[#B0C4C5] sm:text-[14px] lg:text-[16px]">
                                |
                            </span>

                            <span className="text-[12px] text-[#6D9294] sm:text-[14px] lg:text-[16px]">
                                Book Before It's Gone
                            </span>
                        </div>

                        {/* Heading */}
                        <div className="mt-[20px] lg:mt-[28px]">
                            <h1
                                className={`${dancingScript.className} text-[54px] font-semibold leading-[45px] text-[#005D65] sm:text-[62px] sm:leading-[53px] lg:text-[76px] lg:leading-[68px]`}
                            >
                                Early Bird
                            </h1>

                            <div className="relative">
                                <h2
                                    className={`${dmSerif.className} ml-[96px] mt-[2px] text-[60px] leading-[62px] text-[#005D65] sm:ml-[110px] sm:text-[70px] sm:leading-[72px] lg:ml-[135px] lg:text-[84px] lg:leading-[82px]`}
                                >
                                    Sale
                                </h2>
                            </div>
                        </div>

                        {/* Subtitle */}
                        <p className="mt-[8px] text-[13px] font-semibold text-[#176A72] sm:text-[15px] lg:mt-[12px] lg:text-[17px]">
                            Book early. Travel more. Save more.
                        </p>

                        {/* Countdown */}
                        <div className="mt-[25px] flex items-center lg:mt-[30px]">
                            <div className="mr-[9px] flex items-center gap-[5px] lg:mr-[13px] lg:gap-[7px]">
                                <Clock3 className="h-[14px] w-[14px] text-[#00636A] sm:h-[16px] sm:w-[16px] lg:h-[19px] lg:w-[19px]" />

                                <span className="text-[12px] font-bold text-[#165E62] sm:text-[14px] lg:text-[16px]">
                                    Offer ends in
                                </span>
                            </div>

                            <div className="flex gap-[3px] lg:gap-[5px]">
                                <CountdownItem
                                    value={days}
                                    label="Days"
                                />

                                <CountdownItem
                                    value={hours}
                                    label="Hours"
                                />

                                <CountdownItem
                                    value={minutes}
                                    label="Mins"
                                />

                                <CountdownItem
                                    value={seconds}
                                    label="Secs"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FEATURED CARD */}
                    <div className="w-full min-w-0">
                        <FeaturedCard />
                    </div>
                </div>

                {/* BOTTOM 3 CARDS */}
                <div className="mt-5.5 grid w-full grid-cols-1 gap-3.5 md:grid-cols-3">
                    {earlyBirdPackages
                        .slice(1)
                        .map((item) => (
                            <SmallOfferCard
                                key={item.id}
                                packageName={item.name}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
}