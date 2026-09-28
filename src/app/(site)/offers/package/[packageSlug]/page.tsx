"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import {
    Car,
    Clock3,
    ShieldCheck,
    Sparkles,
    Utensils,
} from "lucide-react";
import WeatherForecast from "@/components/WheatherForcast";
import InclusionsExclusions from "@/components/packagess/InclusionExclusion";
import TravelStories from "@/components/homePage/TravelStories";
import TravelersReviews from "@/components/Reviews";
import Itinerary from "@/components/packagess/Itinerary";
import Memories from "@/components/Memories";
import BestTimeToVisit from "@/components/packagess/BestTimeToVisit";
import TravelInformation from "@/components/packagess/TravelInformation";
import OfferCard from "@/components/OfferCard";
import ThingsToDo from "@/components/ThingsToDo";

import { packageData } from "@/constants/packagesData";

/* =========================================================
   FESTIVE OFFER CONFIGURATION
========================================================= */

const festiveOfferConfig = {
    ayodhya: {
        type: "diwali",

        badge: "Diwali Special",
        eyebrow: "Light Up Your Journey",

        title: "Diwali Special",
        titleAccent: "Package",

        description:
            "Experience the magic of Diwali in Ayodhya. Explore sacred temples, beautifully illuminated ghats and the spiritual charm of India's most celebrated destination during the festival of lights.",

        features: [
            "Meals Included",
            "Sightseeing",
            "Safe Travel",
        ],

        rightTitle: "Festive Vibes",
        rightAccent: "Bigger Memories",

        introEyebrow: "Celebrate the Festival of Lights",
        introTitle: "Make Your Diwali",
        introAccent: "unforgettable in Ayodhya",

        introDescription:
            "Experience illuminated temples, sacred ghats, spiritual celebrations and the timeless beauty of Ayodhya during Diwali. This special package brings together sightseeing, comfortable stays and a memorable festive journey.",

        introLabel: "Diwali Package",

        accent: "white",
        accentLight: "#31C4af",
        dark: "#032f35",
        badgeText: "#573700",
        introBackground: "#fff9e9",
        introText: "#143d3f",
         offerBackground: "#8d1820",
    },

    goa: {
        type: "new-year",

        badge: "New Year Special",
        eyebrow: "Celebrate. Travel. Begin Again.",

        title: "New Year",
        titleAccent: "Goa Package",

        description:
            "Welcome the New Year on the beautiful beaches of Goa. Enjoy vibrant nightlife, golden sunsets, coastal experiences and unforgettable celebrations with a perfectly planned festive getaway.",

        features: [
            "Meals Included",
            "Beach Sightseeing",
            "Safe Travel",
        ],

        rightTitle: "New Year Vibes",
        rightAccent: "Fresh Starts",

        introEyebrow: "Start The Year Somewhere Beautiful",
        introTitle: "Celebrate Your New Year",
        introAccent: "in Goa",

        introDescription:
            "Step into the New Year with golden beaches, lively celebrations, unforgettable sunsets and the relaxed charm of Goa. This festive package is designed for a memorable holiday filled with experiences, exploration and celebration.",

        introLabel: "New Year Goa Package",

        accent: "white",
        accentLight: "#31C4af",
        dark: "#052f43",
        badgeText: "#503600",
        introBackground: "#f4fbff",
        introText: "#123c4b",
         offerBackground: "#074b68",
    },

    shimla: {
        type: "christmas",

        badge: "Christmas Special",
        eyebrow: "Celebrate The Magic Of Christmas",

        title: "Christmas Special",
        titleAccent: "Shimla Package",

        description:
            "Experience the magic of Christmas in Shimla. Discover snow-covered landscapes, charming mountain streets, festive markets and the warm winter spirit of the Queen of Hills.",

        features: [
            "Meals Included",
            "Local Sightseeing",
            "Safe Travel",
        ],

        rightTitle: "Christmas Magic",
        rightAccent: "Winter Memories",

        introEyebrow: "A Christmas To Remember",
        introTitle: "Celebrate Christmas",
        introAccent: "in Shimla",

        introDescription:
            "Wake up to beautiful mountain views, festive lights and the charm of a winter holiday in Shimla. Enjoy scenic sightseeing, cosy stays and memorable Christmas experiences in the Himalayas.",

        introLabel: "Christmas Shimla Package",

        accent: "white",
        accentLight: "#31C4af",
        dark: "#17394d",
        badgeText: "#4c3900",
        introBackground: "#f8fbfd",
        introText: "#17384a",
         offerBackground: "#9c2530",
    },
} as const;

type FestiveConfig =
    (typeof festiveOfferConfig)[keyof typeof festiveOfferConfig];

/* =========================================================
   COMPONENT
========================================================= */

export default function OffersPackage() {
    const pathname = usePathname();
    const router = useRouter();

    const [activeImage, setActiveImage] = useState<number | null>(null);

    /* =====================================================
       PACKAGE SLUG
    ===================================================== */

    const packageSlug = pathname
        .split("/")
        .filter(Boolean)
        .pop()
        ?.toLowerCase();

    /* =====================================================
       FIND PACKAGE
    ===================================================== */

    const packageResult = packageData
        .flatMap((destination) =>
            destination.packages.map((pkg) => ({
                destination,
                package: pkg,
            }))
        )
        .find(
            ({ package: pkg }) =>
                pkg.name
                    .toLowerCase()
                    .trim()
                    .replace(/\s+/g, "-") === packageSlug
        );

    /* =====================================================
       PACKAGE NOT FOUND
    ===================================================== */

    if (!packageResult) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white px-4">
                <p className="text-center text-base text-gray-500 sm:text-lg">
                    Package not found.
                </p>
            </main>
        );
    }

    const selectedPackage = packageResult.package;

    /* =====================================================
       FESTIVE PACKAGE

       Exact package slug decides whether the special
       festive design is shown.

       ayodhya -> Diwali
       goa     -> New Year
       shimla  -> Christmas
    ===================================================== */

    const festiveConfig: FestiveConfig | undefined =
        packageSlug &&
        packageSlug in festiveOfferConfig
            ? festiveOfferConfig[
                  packageSlug as keyof typeof festiveOfferConfig
              ]
            : undefined;

    const isFestivePackage = Boolean(festiveConfig);

    /* =====================================================
       OFFER DATA
    ===================================================== */

    const packageDetails = {
        originalPrice: selectedPackage.originalPrice,
        offerPrice: selectedPackage.offerPrice,
        saveAmount: selectedPackage.saveAmount,
        discount: selectedPackage.discount,
        validTill: selectedPackage.validTill,
        groupSize: selectedPackage.groupSize,
    };

    /* =====================================================
       GALLERY
    ===================================================== */

    const gallery = selectedPackage.gallery ?? [];

    const openGallery = (index: number) => {
        setActiveImage(index);
    };

    const closeGallery = () => {
        setActiveImage(null);
    };

    const gallerySlides = gallery.map((image) => ({
        src: image.src,
        alt: image.alt || "Gallery image",
    }));

    /* =====================================================
       HELPERS
    ===================================================== */

    const formatPrice = (price: unknown) => {
        if (price === undefined || price === null) {
            return "";
        }

        return String(price);
    };

    const duration =
        selectedPackage.duration ||
        selectedPackage.idealTrip ||
        "6 Days / 5 Nights";

    const location =
        selectedPackage.location || `${selectedPackage.name}`;

    /* =====================================================
       FESTIVE HERO
    ===================================================== */

    const FestiveHero = () => {
        if (!festiveConfig) return null;

        return (
            <section
                className="relative w-full overflow-hidden"
                style={{
                    backgroundColor: festiveConfig.dark,
                }}
            >
                <div className="relative min-h-[620px] sm:min-h-[650px] lg:min-h-[610px] xl:min-h-[640px]">

                    {/* ======================================
                        BACKGROUND IMAGE
                    ====================================== */}

                    <Image
                        src={selectedPackage.heroImage}
                        alt={selectedPackage.name}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    {/* ======================================
                        IMAGE OVERLAY
                    ====================================== */}

                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(
                                90deg,
                                ${festiveConfig.dark} 0%,
                                ${festiveConfig.dark}dd 22%,
                                ${festiveConfig.dark}99 43%,
                                transparent 72%
                            )`,
                        }}
                    />

                    {/* ======================================
                        BOTTOM OVERLAY
                    ====================================== */}

                    <div
                        className="absolute inset-x-0 bottom-0 h-64 lg:h-40"
                        style={{
                            background: `linear-gradient(
                                to top,
                                ${festiveConfig.dark}dd,
                                transparent
                            )`,
                        }}
                    />

                    {/* ======================================
                        DECORATIVE CIRCLE
                    ====================================== */}

                    <div className="pointer-events-none absolute left-3 top-3 opacity-30 sm:left-6 sm:top-6">
                        <div
                            className="h-28 w-28 rounded-full border sm:h-40 sm:w-40"
                            style={{
                                borderColor: `${festiveConfig.accent}66`,
                            }}
                        />

                        <div
                            className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border sm:h-28 sm:w-28"
                            style={{
                                borderColor: `${festiveConfig.accent}55`,
                            }}
                        />

                        <Sparkles
                            className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 sm:size-10"
                            style={{
                                color: festiveConfig.accent,
                            }}
                        />
                    </div>

                    {/* ======================================
                        FESTIVE BADGE
                    ====================================== */}

                    <div className="absolute left-4 top-5 z-20 sm:left-8 sm:top-21 lg:left-12">
                        <div
                            className="flex items-center gap-2 rounded-full border px-3 py-1.5 shadow-lg sm:px-4 sm:py-2"
                            style={{
                                backgroundColor: festiveConfig.accent,
                                borderColor: festiveConfig.accentLight,
                            }}
                        >
                            <Sparkles
                                className="size-3.5 sm:size-4"
                                style={{
                                    color: festiveConfig.badgeText,
                                }}
                            />

                            <span
                                className="text-[10px] font-bold uppercase tracking-[0.12em] sm:text-xs"
                                style={{
                                    color: festiveConfig.badgeText,
                                }}
                            >
                                {festiveConfig.badge}
                            </span>
                        </div>
                    </div>

                    {/* ======================================
                        MAIN CONTENT
                    ====================================== */}

                    <div
                        className="
                            relative
                            z-10
                            mx-auto
                            flex
                            min-h-[620px]
                            w-[92%]
                            max-w-[1450px]
                            items-end
                            pb-10
                            pt-24
                            sm:min-h-[650px]
                            sm:pb-12
                            lg:min-h-[610px]
                            lg:items-center
                            lg:pb-0
                            lg:pt-0
                            top-14
                        "
                    >
                        <div className="w-full lg:max-w-[650px] xl:max-w-[700px]">

                            {/* EYEBROW */}

                            <div className="mb-3 flex items-center gap-2 sm:mb-4">
                                <div
                                    className="h-px w-7 sm:w-10"
                                    style={{
                                        backgroundColor:
                                            festiveConfig.accent,
                                    }}
                                />

                                <p
                                    className="text-[10px] font-medium uppercase tracking-[0.2em] sm:text-xs"
                                    style={{
                                        color: festiveConfig.accentLight,
                                    }}
                                >
                                    {festiveConfig.eyebrow}
                                </p>
                            </div>

                            {/* TITLE */}

                            <h1 className="max-w-[700px] text-4xl font-bold leading-[0.95] tracking-[-1.5px] text-white sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px]">
                                {festiveConfig.title}

                                <span
                                    className="block font-serif font-normal italic"
                                    style={{
                                        color: festiveConfig.accent,
                                    }}
                                >
                                    {festiveConfig.titleAccent}
                                </span>
                            </h1>

                            {/* DESCRIPTION */}

                            <p className="mt-5 max-w-[600px] text-sm leading-6 text-white/80 sm:mt-6 sm:text-base sm:leading-7 lg:text-[16px]">
                                {festiveConfig.description}
                            </p>

                            {/* PACKAGE FEATURES */}

                            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-white sm:mt-7 sm:gap-x-7">

                                <div className="flex items-center gap-2">
                                    <Clock3
                                        className="size-4 sm:size-5"
                                        style={{
                                            color: festiveConfig.accent,
                                        }}
                                    />

                                    <span className="text-xs font-medium sm:text-sm">
                                        {duration}
                                    </span>
                                </div>

                                <div className="hidden h-5 w-px bg-white/25 sm:block" />

                                {festiveConfig.features.map(
                                    (feature, index) => {
                                        const icons = [
                                            Utensils,
                                            Car,
                                            ShieldCheck,
                                        ];

                                        const Icon =
                                            icons[index] || Sparkles;

                                        return (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-2"
                                            >
                                                <Icon
                                                    className="size-4 sm:size-5"
                                                    style={{
                                                        color:
                                                            festiveConfig.accent,
                                                    }}
                                                />

                                                <span className="text-xs font-medium sm:text-sm">
                                                    {feature}
                                                </span>
                                            </div>
                                        );
                                    }
                                )}
                            </div>

                            {/* PRICE + CTA */}

                            <div className="mt-7 flex flex-col gap-5 sm:mt-8 sm:flex-row sm:items-end sm:gap-7">

                                {/* PRICE */}

                                <div>
                                    <p className="text-xs text-white/70 sm:text-sm">
                                        Starting from
                                    </p>

                                    <div className="mt-0.5 flex items-end gap-2">
                                        <span
                                            className="text-3xl font-bold leading-none sm:text-4xl lg:text-[42px]"
                                            style={{
                                                color: festiveConfig.accent,
                                            }}
                                        >
                                            {formatPrice(
                                                selectedPackage.offerPrice
                                            )}
                                        </span>

                                        <span className="pb-1 text-xs text-white/70 sm:text-sm">
                                            per person
                                        </span>
                                    </div>

                                    {selectedPackage.originalPrice && (
                                        <p className="mt-1 text-xs text-white/50 line-through">
                                            {formatPrice(
                                                selectedPackage.originalPrice
                                            )}
                                        </p>
                                    )}
                                </div>
 
                            </div>
                        </div>
                    </div>

            
                </div>
            </section>
        );
    };

    /* =====================================================
       NORMAL PACKAGE HERO
    ===================================================== */

    const NormalPackageHero = () => {
        return (
            <section className="relative h-[480px] w-full overflow-hidden sm:h-[560px] lg:h-[620px]">
                <Image
                    src={selectedPackage.heroImage}
                    alt={selectedPackage.name}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

                <div className="relative z-10 mx-auto flex h-full w-[92%] max-w-[1450px] items-end pb-12 lg:items-center lg:pb-0">
                    <div className="max-w-2xl">
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[white]">
                            {location}
                        </p>

                        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
                            {selectedPackage.name}
                        </h1>

                        <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
                            {selectedPackage.subtitle}
                        </p>
                    </div>
                </div>
            </section>
        );
    };

    return (
        <main className="flex w-full flex-col items-center justify-center gap-10 bg-white">

            {/* =================================================
                HERO
            ================================================= */}

            {isFestivePackage ? (
                <FestiveHero />
            ) : (
                <NormalPackageHero />
            )}

            {/* =================================================
                DESKTOP OFFER CARD
            ================================================= */}

            {!isFestivePackage && (
                <section className="relative z-30 -mt-24 hidden w-full px-4 lg:block">
                    <div className="mx-auto flex max-w-[1400px] justify-end">
                        <div className="w-[320px] xl:w-[350px]">
                            <OfferCard details={packageDetails} />
                        </div>
                    </div>
                </section>
            )}

            {/* =================================================
                MOBILE + TABLET OFFER CARD
            ================================================= */}

            {!isFestivePackage && (
                <section className="relative z-30 block w-full bg-white px-3 sm:px-6 lg:hidden">
                    <div className="mx-auto w-full max-w-2xl">
                        <OfferCard details={packageDetails} />
                    </div>
                </section>
            )}

            {/* =================================================
                FESTIVE INTRO
            ================================================= */}

            {festiveConfig && (
                <section className="w-full px-4 pt-2 sm:px-6 lg:px-8">
                    <div
                        className="relative mx-auto max-w-[1350px] overflow-hidden rounded-[28px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
                        style={{
                            backgroundColor:
                                festiveConfig.introBackground,
                        }}
                    >
                        <div
                            className="absolute -right-16 -top-16 h-40 w-40 rounded-full border"
                            style={{
                                borderColor: `${festiveConfig.accent}4d`,
                            }}
                        />

                        <div
                            className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full border"
                            style={{
                                borderColor: `${festiveConfig.accent}4d`,
                            }}
                        />

                        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

                            <div>
                                <div className="flex items-center gap-2">
                                    <Sparkles
                                        className="size-5"
                                        style={{
                                            color:
                                                festiveConfig.introAccent,
                                        }}
                                    />

                                    <p
                                        className="text-xs font-bold uppercase tracking-[0.2em]"
                                        style={{
                                            color:
                                                festiveConfig.introAccent,
                                        }}
                                    >
                                        {festiveConfig.introEyebrow}
                                    </p>
                                </div>

                                <h2
                                    className="mt-3 font-serif text-3xl font-semibold sm:text-4xl lg:text-5xl"
                                    style={{
                                        color: festiveConfig.introText,
                                    }}
                                >
                                    {festiveConfig.introTitle}

                                    <span
                                        className="block italic"
                                        style={{
                                            color:
                                                festiveConfig.introAccent,
                                        }}
                                    >
                                        {festiveConfig.introAccent}
                                    </span>
                                </h2>

                                <p
                                    className="mt-4 max-w-3xl text-sm leading-7 sm:text-base"
                                    style={{
                                        color: `${festiveConfig.introText}aa`,
                                    }}
                                >
                                    {festiveConfig.introDescription}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 lg:justify-end">
                                <div className="rounded-2xl bg-white p-4 shadow-sm">
                                    <Sparkles
                                        className="size-7"
                                        style={{
                                            color:
                                                festiveConfig.introAccent,
                                        }}
                                    />
                                </div>

                                <div>
                                    <p className="text-xs text-[#6d7d7d]">
                                        Special festive
                                    </p>

                                    <p
                                        className="text-lg font-bold"
                                        style={{
                                            color:
                                                festiveConfig.introText,
                                        }}
                                    >
                                        {festiveConfig.introLabel}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* =================================================
                THINGS TO DO
            ================================================= */}

            {selectedPackage.activities?.length > 0 && (
                <div className="w-[91%]">
                    <ThingsToDo
                        title={
                            festiveConfig
                                ? `${festiveConfig.badge.replace(
                                      " Special",
                                      ""
                                  )} Experiences in ${
                                      selectedPackage.name
                                  }`
                                : `Best Experiences in ${selectedPackage.name}`
                        }
                        activities={selectedPackage.activities}
                    />
                </div>
            )}

            {/* =================================================
                GALLERY
            ================================================= */}

            <section className="mx-auto w-[95%] px-2 pb-16 md:pt-2 lg:px-8">
                <div className="mb-5 text-3xl font-semibold">
                    {selectedPackage.name} Gallery
                </div>

                <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">

                    {gallery.length > 0 && (
                        <div className="grid w-full grid-cols-12 gap-2.5 lg:w-full">

                            {/* MAIN IMAGE */}

                            <button
                                type="button"
                                onClick={() => openGallery(0)}
                                className="group relative col-span-12 h-65 cursor-pointer overflow-hidden rounded-[20px] text-left sm:h-75 lg:col-span-7 lg:h-76.25"
                            >
                                <Image
                                    src={gallery[0].src}
                                    alt={
                                        gallery[0].alt ||
                                        "Gallery image"
                                    }
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute bottom-4 left-4 text-white">
                                    <span className="mb-1 block text-[10px] font-medium uppercase tracking-wider text-white/70">
                                        Featured
                                    </span>

                                    <h3 className="text-lg font-semibold sm:text-xl">
                                        {gallery[0].alt}
                                    </h3>
                                </div>
                            </button>

                            {/* RIGHT GALLERY */}

                            {gallery.length > 1 && (
                                <div className="col-span-12 grid grid-cols-2 gap-2.5 lg:col-span-5">

                                    <button
                                        type="button"
                                        onClick={() => openGallery(1)}
                                        className="group relative col-span-2 h-37.5 cursor-pointer overflow-hidden rounded-[20px] text-left"
                                    >
                                        <Image
                                            src={gallery[1].src}
                                            alt={
                                                gallery[1].alt ||
                                                "Gallery image"
                                            }
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 25vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute bottom-3 left-3 text-white">
                                            <p className="text-xs font-medium">
                                                {gallery[1].alt}
                                            </p>
                                        </div>
                                    </button>

                                    {gallery.slice(2, 4).map(
                                        (image, index) => {
                                            const actualIndex =
                                                index + 2;

                                            return (
                                                <button
                                                    key={`${image.src}-${index}`}
                                                    type="button"
                                                    onClick={() =>
                                                        openGallery(
                                                            actualIndex
                                                        )
                                                    }
                                                    className="group relative h-36.25 cursor-pointer overflow-hidden rounded-[20px] text-left"
                                                >
                                                    <Image
                                                        src={image.src}
                                                        alt={
                                                            image.alt ||
                                                            "Gallery image"
                                                        }
                                                        fill
                                                        sizes="(max-width: 640px) 50vw, 12vw"
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />

                                                    <div className="absolute bottom-3 left-3 text-white">
                                                        <p className="text-xs font-medium">
                                                            {
                                                                image.alt
                                                            }
                                                        </p>
                                                    </div>
                                                </button>
                                            );
                                        }
                                    )}
                                </div>
                            )}

                            {/* BOTTOM IMAGES */}

                            {gallery.length > 3 && (
                                <div className="col-span-12 grid grid-cols-3 gap-2.5">
                                    {gallery.slice(3, 7).map(
                                        (image, index) => {
                                            const actualIndex =
                                                index + 3;

                                            const isWide =
                                                index % 2 === 1;

                                            return (
                                                <button
                                                    key={`${image.src}-${index}`}
                                                    type="button"
                                                    onClick={() =>
                                                        openGallery(
                                                            actualIndex
                                                        )
                                                    }
                                                    className={`
                                                        group
                                                        relative
                                                        h-27.5
                                                        cursor-pointer
                                                        overflow-hidden
                                                        rounded-[18px]
                                                        text-left
                                                        sm:h-32.5
                                                        ${
                                                            isWide
                                                                ? "col-span-2"
                                                                : "col-span-1"
                                                        }
                                                    `}
                                                >
                                                    <Image
                                                        src={image.src}
                                                        alt={
                                                            image.alt ||
                                                            "Gallery image"
                                                        }
                                                        fill
                                                        sizes={
                                                            isWide
                                                                ? "(max-width: 640px) 66vw, 40vw"
                                                                : "(max-width: 640px) 33vw, 20vw"
                                                        }
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                </button>
                                            );
                                        }
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* =================================================
                ITINERARY + BEST TIME
            ================================================= */}

            {(selectedPackage.itinerary?.length > 0 ||
                selectedPackage.bestTimeToVisit) && (
                <div
                    className="
                        flex
                        w-[93%]
                        flex-col
                        gap-8
                        lg:flex-row
                        lg:items-start
                        lg:justify-center
                        lg:gap-5
                    "
                >
                    {selectedPackage.itinerary?.length > 0 && (
                        <Itinerary
                            title="Itinerary"
                            subtitle=""
                            days={selectedPackage.itinerary}
                            onButtonClick={() =>
                                router.push(
                                    `/destinations/${packageSlug}/itinerary?package=${selectedPackage.name
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`
                                )
                            }
                        />
                    )}

                    {selectedPackage.bestTimeToVisit && (
                        <BestTimeToVisit
                            months={
                                selectedPackage.bestTimeToVisit.months
                            }
                            seasons={
                                selectedPackage.bestTimeToVisit.seasons
                            }
                        />
                    )}
                </div>
            )}

            {/* =================================================
                TRAVEL INFORMATION
            ================================================= */}

            {selectedPackage.travelInfo?.length > 0 && (
                <TravelInformation
                    destination={selectedPackage.name}
                    latitude={selectedPackage.latitude ?? 26.7997}
                    longitude={selectedPackage.longitude ?? 82.2042}
                    travelInfo={selectedPackage.travelInfo}
                    packingItems={selectedPackage.packingItems}
                />
            )}

            {selectedPackage.latitude &&
                selectedPackage.longitude && (
                    <WeatherForecast
                        destination={selectedPackage.name}
                        latitude={selectedPackage.latitude}
                        longitude={selectedPackage.longitude}
                    />
                )}
            <div className="w-[93%] flex flex-col gap-12">
                <InclusionsExclusions
                    inclusions={selectedPackage?.inclusions ?? []}
                    exclusions={selectedPackage?.exclusions ?? []}
                    title={selectedPackage?.whyVisit?.title}
                    highlights={selectedPackage?.whyVisit?.highlights}
                />

                <TravelersReviews />
            </div>
            <TravelStories />

            <Memories />
            {/* =================================================
                LIGHTBOX
            ================================================= */}

            <Lightbox
                open={activeImage !== null}
                close={closeGallery}
                index={activeImage ?? 0}
                slides={gallerySlides}
            />
        </main>
    );
}