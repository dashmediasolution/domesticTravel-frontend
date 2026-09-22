"use client";

import DestinationHero from "@/components/destination/DestinationHero";
import OfferCard from "@/components/OfferCard";
import { featuredDestination } from "@/constants/destinationData";
import { usePathname } from "next/navigation";
import TravelStories from "@/components/homePage/TravelStories";
import Memories from "@/components/Memories";
import Gallery from "@/components/packagess/Galary";
import TravelersReviews from "@/components/Reviews";
import { packageData } from "@/constants/packagesData";
import InclusionsExclusions from "@/components/packagess/InclusionExclusion";
import Itinerary from "@/components/packagess/Itinerary";
import Image from "next/image";
import BestTimeToVisit from "@/components/packagess/BestTimeToVisit";
import TravelInformation from "@/components/packagess/TravelInformation";
import WeatherForecast from "@/components/WheatherForcast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ThingsToDo from "@/components/ThingsToDo";
export default function PackageDestination() {
    const pathname = usePathname();
    const router = useRouter()
    const [, locationSlug, packageSlug] = pathname
        .split("/")
        .filter(Boolean);

    const destinationData = featuredDestination.find(
        (item) =>
            item.destination.name
                .toLowerCase()
                .replace(/\s+/g, "-") ===
            locationSlug?.toLowerCase()
    );

    if (!destinationData) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white">
                <p className="text-gray-500">
                    Destination not found.
                </p>
            </main>
        );
    }

    const packageDestination = packageData.find(
        (item) =>
            item.name
                .toLowerCase()
                .replace(/\s+/g, "-") ===
            locationSlug?.toLowerCase()
    );

    if (!packageDestination) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white">
                <p className="text-gray-500">
                    Packages not found.
                </p>
            </main>
        );
    }

    const selectedPackage = packageDestination.packages.find(
        (item) =>
            item.name
                .toLowerCase()
                .replace(/\s+/g, "-") ===
            packageSlug?.toLowerCase()
    );

    if (!selectedPackage) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white">
                <p className="text-gray-500">
                    Package not found.
                </p>
            </main>
        );
    }

    const packageDetails = {
        originalPrice: selectedPackage.originalPrice,
        offerPrice: selectedPackage.offerPrice,
        saveAmount: selectedPackage.saveAmount,
        discount: selectedPackage.discount,
        validTill: selectedPackage.validTill,
        groupSize: selectedPackage.groupSize,
    };
    const [activeImage, setActiveImage] = useState<number | null>(null);

    const openGallery = (index: number) => {
        setActiveImage(index);
    };

  
  
    const gallery = selectedPackage?.gallery

    return (
        <main className="w-full bg-white flex flex-col justify-center items-center gap-10">
         <section className="relative w-full">
        {/* Hero */}
        <DestinationHero destination={selectedPackage} />

        {/* Desktop Offer Card */}
        <div
            className="
                absolute
                right-4
                top-1/2
                z-30
                hidden
                w-[280px]
                -translate-y-1/2
                lg:block
                xl:right-8
                xl:w-[320px]
                2xl:right-12
                2xl:w-[350px]
            "
        >
            <OfferCard details={packageDetails} />
        </div>
    </section>

    {/* Mobile + Tablet Offer Card */}
    <section
        className="
            relative
            z-30
            block
            w-full
            bg-white
            px-3
     
            sm:px-6
           
            lg:hidden
        "
    >
        <div className="mx-auto w-full max-w-2xl">
            <OfferCard details={packageDetails} />
        </div>
    </section>

            {selectedPackage.activities.length > 0 && (
                <div className="w-[91%]">

                    <ThingsToDo
                        title={`Best Experiences in ${selectedPackage.name}`}
                        activities={selectedPackage.activities}
                    />
                </div>
            )}

            <section className="mx-auto w-[95%] px-2 pb-16 md:pt-2 lg:px-8">
                <div className="font-semibold text-3xl mb-5">
                    {selectedPackage.name} Gallery
                </div>
                <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">


                    {/* ==================================================
              GALLERY
          ================================================== */}

                    {gallery.length > 0 && (
                        <div className="grid w-full grid-cols-12 gap-2.5 lg:w-full">

                            {/* ==================================================
                  MAIN IMAGE
              ================================================== */}

                            <button
                                type="button"
                                onClick={() => openGallery(0)}
                                className="group relative col-span-12 h-65 overflow-hidden rounded-[20px] text-left sm:h-75 lg:col-span-7 lg:h-76.25"
                            >
                                <Image
                                    src={gallery[0].src}
                                    alt={gallery[0].alt ?? ""}
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

                            {/* ==================================================
                  RIGHT GALLERY
              ================================================== */}

                            {gallery.length > 1 && (
                                <div className="col-span-12 grid grid-cols-2 gap-2.5 lg:col-span-5">

                                    <button
                                        type="button"
                                        onClick={() => openGallery(1)}
                                        className="group relative col-span-2 h-37.5 overflow-hidden rounded-[20px] text-left"
                                    >
                                        <Image
                                            src={gallery[1].src}
                                            alt={gallery[1].alt ?? ""}
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
                                            const actualIndex = index + 2;

                                            return (
                                                <button
                                                    key={`${image.src}-${index}`}
                                                    type="button"
                                                    onClick={() =>
                                                        openGallery(actualIndex)
                                                    }
                                                    className="group relative h-36.25 overflow-hidden rounded-[20px] text-left"
                                                >
                                                    <Image
                                                        src={image.src}
                                                        alt={image.alt ?? ""}
                                                        fill
                                                        sizes="(max-width: 1024px) 50vw, 12vw"
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />

                                                    <div className="absolute bottom-3 left-3 text-white">
                                                        <p className="text-xs font-medium">
                                                            {image.alt}
                                                        </p>
                                                    </div>
                                                </button>
                                            );
                                        }
                                    )}

                                </div>
                            )}

                            {/* ==================================================
                  BOTTOM IMAGES
              ================================================== */}

                            {gallery.length > 3 && (
                                <div className="col-span-12 grid grid-cols-3 gap-2.5">

                                    {gallery.slice(3, 7).map(
                                        (image, index) => {
                                            const actualIndex = index + 3;
                                            const isWide = index % 2 === 1;
                                            const isLast =
                                                index ===
                                                Math.min(gallery.length - 4, 3);

                                            return (
                                                <button
                                                    key={`${image.src}-${index}`}
                                                    type="button"
                                                    onClick={() =>
                                                        openGallery(actualIndex)
                                                    }
                                                    className={`
                            group
                            relative
                            h-27.5
                            overflow-hidden
                            rounded-[18px]
                            text-left
                            sm:h-32.5
                            ${isWide
                                                            ? "col-span-2"
                                                            : "col-span-1"
                                                        }
                          `}
                                                >
                                                    <Image
                                                        src={image.src}
                                                        alt={image.alt ?? ""}
                                                        fill
                                                        sizes={
                                                            isWide
                                                                ? "(max-width: 640px) 66vw, 40vw"
                                                                : "(max-width: 640px) 33vw, 20vw"
                                                        }
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />

                                                    {/* <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/30" />

                                                    {isLast && (
                                                        <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                                                            <div className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
                                                                View all
                                                                <ArrowRight className="h-3.5 w-3.5" />
                                                            </div>
                                                        </div>
                                                    )} */}
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
            {(selectedPackage.itinerary.length > 0 ||
                selectedPackage.bestTimeToVisit) && (
                    <div className="  flex w-[93%] flex-col gap-8    lg:flex-row lg:items-start lg:justify-between lg:gap-5">

                        {selectedPackage.itinerary.length > 0 && (
                            <div className="sm:full md:w-[44%]">

                                <Itinerary
                                    title="Itinerary"
                                    subtitle={""}
                                    days={selectedPackage.itinerary}
                                    onButtonClick={() =>
                                        router.push(
                                            `/destinations/${locationSlug}/itinerary?package=${packageSlug}`
                                        )
                                    }
                                />
                            </div>
                        )}

                        {selectedPackage.bestTimeToVisit && (
                            <div className="md:full lg:w-[55%]">
                                <BestTimeToVisit
                                    months={selectedPackage.bestTimeToVisit.months}
                                    seasons={selectedPackage.bestTimeToVisit.seasons}
                                />
                            </div>
                        )}

                    </div>
                )}

            {selectedPackage.travelInfo.length > 0 && (
                <TravelInformation
                    destination={selectedPackage.name}
                    latitude={
                        selectedPackage.latitude ?? 32.2432
                    }
                    longitude={
                        selectedPackage.longitude ?? 77.1892
                    }
                    travelInfo={selectedPackage.travelInfo}
                    packingItems={selectedPackage.packingItems}
                />
            )}

            {/* ==================================================
                      WEATHER
                  ================================================== */}

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
        </main>
    );
}