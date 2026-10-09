"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

import TravelStories from "@/components/homePage/TravelStories";
import Memories from "@/components/Memories";
import DestinationGallery from "@/components/DestinationGallery";
import TravelersReviews from "@/components/Reviews";
import InclusionsExclusions from "@/components/packagess/InclusionExclusion";
import Itinerary from "@/components/packagess/Itinerary";
import BestTimeToVisit from "@/components/packagess/BestTimeToVisit";
import TravelInformation from "@/components/packagess/TravelInformation";
import WeatherForecast from "@/components/WheatherForcast";
import PackageHeroSection from "@/components/packagess/PackageHeroSection";
import ThingsToDo from "@/components/ThingsToDo";
import BookingCard from "@/components/packagess/BookingCard";
import WhyVisit from "@/components/WhyVisit";

type PackageDestinationProps = {
    locationSlug: string;
    packageSlug: string;
};
type PackageData = {
    id?: string;
    name?: string;
    slug?: string;
    subtitle?: string;
    description?: string;
    duration?: string | number;
    idealTrip?: string;
    budget?: string | number;
    location?: string;
    rating?: number;
    reviewsCount?: number;
    originalPrice?: number;
    offerPrice?: number;
    latitude?: number | null;
    longitude?: number | null;
    heroImage?: {
        url?: string;
    } | null;
    gallery?: any[];
    itinerary?: any[];
    bestTimeToVisit?: any[];
    travelInformation?: any;
    whatToPack?: any[];
    inclusions?: any[];
    exclusions?: any[];
    whyVisit?: any;
    offers?: Array<{
        slug?: string;
    }>;
};
export default function PackageDestination({
    locationSlug,
    packageSlug,
}: PackageDestinationProps) {
    const router = useRouter();

    const [packageDatas, setPackageData] =
        useState<PackageData | null>(null);

    const [loading, setLoading] = useState(true);

    const getPackageBySlug = useCallback(async () => {
        try {
            setLoading(true);

            const response = await fetch(
                `/api/packages/${encodeURIComponent(locationSlug)}/${encodeURIComponent(packageSlug)}`,
                {
                    method: "GET",
                }
            );

            const result = await response.json();

            if (
                !response.ok ||
                !result.success ||
                !result.data
            ) {
                console.error(
                    "Failed to fetch package:",
                    result.message
                );

                setPackageData(null);
                return;
            }

            const packageData: PackageData = result.data;

            if (packageData.offers?.[0]?.slug) {
                router.replace(
                    `/offers/package/${packageData.offers[0].slug}`
                );
                return;
            }

            setPackageData(packageData);
        } catch (error) {
            console.error("Error fetching package:", error);
            setPackageData(null);
        } finally {
            setLoading(false);
        }
    }, [locationSlug, packageSlug, router]);

    useEffect(() => {
        if (locationSlug && packageSlug) {
            getPackageBySlug();
        }
    }, [locationSlug, packageSlug, getPackageBySlug]);

    if (loading) {
        return (
            <div className="flex min-h-screen w-screen items-center justify-center">
                <Spinner className="h-10 w-10 text-primary" />
            </div>
        );
    }

    if (!packageDatas) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white">
                <p className="text-gray-500">
                    Package not found.
                </p>
            </main>
        );
    }

    const handleBookNow = () => {
        document.getElementById("inquiry")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const duration = Number(packageDatas.duration);

    const days = duration > 0 ? duration : 5;
    const nights = Math.max(days - 1, 1);

    const activities =
        packageDatas.travelInformation?.activities ?? [];

    const hasTravelInformation =
        Array.isArray(packageDatas.travelInformation)
            ? packageDatas.travelInformation.length > 0
            : Boolean(packageDatas.travelInformation);

    const hasCoordinates =
        packageDatas.latitude != null &&
        packageDatas.longitude != null;

    return (
        <main className="flex w-full flex-col items-center justify-center gap-10 bg-white">
            {/* HERO */}
            <section className="relative w-full">
                <PackageHeroSection
                    imageUrl={packageDatas.heroImage?.url ?? ""}
                    destination={packageDatas.name ?? ""}
                    id={packageDatas.id}
                    subtitle={packageDatas.subtitle}
                    description={packageDatas.description}
                    duration={
                        packageDatas.duration != null
                            ? String(packageDatas.duration)
                            : undefined
                    }
                    idealTrip={packageDatas.idealTrip}
                    budget={
                        packageDatas.budget != null
                            ? String(packageDatas.budget)
                            : undefined
                    }
                    location={packageDatas.location}
                    rating={packageDatas.rating}
                    reviews={packageDatas.reviewsCount}
                    originalPrice={packageDatas.originalPrice}
                    buttonText="Book Now"
                    buttonHref="#inquiry"
                />
            </section>

            {/* MOBILE + TABLET BOOKING CARD */}
            <section className="relative z-30 block w-full bg-white px-3 sm:px-6 lg:hidden">
                <div className="mx-auto w-full max-w-2xl">
                    <BookingCard
                        image={packageDatas.heroImage?.url ?? ""}
                        imageAlt={packageDatas.name ?? ""}
                        id={packageDatas.id}
                        title={packageDatas.name ?? "Travel Package"}
                        slug={packageDatas.slug ?? packageSlug}
                        days={`${days} Days`}
                        nights={`${nights} Nights`}
                        meals="Included"
                        sightseeing="Tours"
                        price={
                            packageDatas.offerPrice ??
                            packageDatas.originalPrice ??
                            0
                        }
                        buttonText="Book Now"
                        onBookNow={handleBookNow}
                    />
                </div>
            </section>

            {/* THINGS TO DO */}
            {activities.length > 0 && (
                <div className="w-[91%]">
                    <ThingsToDo
                        title={`Best Experiences in ${packageDatas.name ?? ""}`}
                        activities={activities}
                    />
                </div>
            )}

            {/* ITINERARY + DESKTOP BOOKING CARD */}
            <div className="flex w-[93%] flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
                {Array.isArray(packageDatas.itinerary) &&
                    packageDatas.itinerary.length > 0 && (
                        <div className="w-full lg:w-[70%]">
                            <Itinerary
                                title="Itinerary"
                                subtitle=""
                                days={packageDatas.itinerary}
                            />
                        </div>
                    )}

                {/* STICKY DESKTOP BOOKING CARD */}
                <div className="hidden w-[280px] shrink-0 self-start lg:sticky lg:top-24 lg:block xl:w-[320px] 2xl:w-[350px]">
                  <BookingCard
                        image={packageDatas.heroImage?.url ?? ""}
                        imageAlt={packageDatas.name ?? ""}
                        id={packageDatas.id}
                        title={packageDatas.name ?? "Travel Package"}
                        slug={packageDatas.slug ?? packageSlug}
                        days={`${days} Days`}
                        nights={`${nights} Nights`}
                        meals="Included"
                        sightseeing="Tours"
                        price={
                            packageDatas.offerPrice ??
                            packageDatas.originalPrice ??
                            0
                        }
                        buttonText="Book Now"
                        onBookNow={handleBookNow}
                    />
                </div>
            </div>

            {/* GALLERY */}
            <section className="mx-auto w-[95%] px-2 md:pb-16 md:pt-2 lg:px-8">
                <h2 className="mb-5 text-3xl font-semibold">
                    {packageDatas.name} Gallery
                </h2>

                <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
                    <DestinationGallery
                        images={packageDatas.gallery ?? []}
                        destinationName={packageDatas.name ?? ""}
                    />
                </div>
            </section>

            {/* WHY VISIT + BEST TIME TO VISIT */}
            <div className="mb-14 flex w-[95%] flex-col gap-8 px-3 sm:px-5 md:px-6 lg:flex-row lg:items-start lg:justify-center lg:gap-10">
                <div className="relative top-0 w-full md:top-11">
                    <WhyVisit
                        items={packageDatas.whyVisit ?? []}
                      destination={packageDatas.name ?? ""}
                    />
                </div>

                {packageDatas.bestTimeToVisit &&
                    packageDatas.bestTimeToVisit.length > 0 && (
                        <div className="relative md:top-10 lg:w-[60%]">
                            <BestTimeToVisit
                                months={packageDatas.bestTimeToVisit}
                            />
                        </div>
                    )}
            </div>

            {/* TRAVEL INFORMATION */}
            {(hasTravelInformation ||
                (packageDatas.whatToPack?.length ?? 0) > 0 ||
                hasCoordinates) && (
                    <TravelInformation
                        destination={packageDatas.name ?? ""}
                        latitude={packageDatas.latitude}
                        longitude={packageDatas.longitude}
                        travelInfo={packageDatas.travelInformation ?? []}
                        packingItems={packageDatas.whatToPack ?? []}
                    />
                )}

            {/* WEATHER FORECAST */}
            {hasCoordinates && (
               <WeatherForecast
    destination={packageDatas.name ?? ""}
    latitude={packageDatas.latitude!}
    longitude={packageDatas.longitude!}
/>
            )}

            {/* INCLUSIONS / EXCLUSIONS + REVIEWS */}
            <div className="flex w-[93%] flex-col gap-12">
                <InclusionsExclusions
                    inclusions={packageDatas.inclusions ?? []}
                    exclusions={packageDatas.exclusions ?? []}
                    title={packageDatas.whyVisit?.title}
                    highlights={packageDatas.whyVisit?.highlights}
                />

                <TravelersReviews />
            </div>

            {/* TRAVEL STORIES */}
            <TravelStories />

            {/* MEMORIES */}
            <Memories />
        </main>
    );

}
