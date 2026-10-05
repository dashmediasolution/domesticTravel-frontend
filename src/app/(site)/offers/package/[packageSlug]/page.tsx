"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


import ThingsToDo from "@/components/ThingsToDo";
import Itinerary from "@/components/packagess/Itinerary";
import TravelInformation from "@/components/packagess/TravelInformation";
import TravelStories from "@/components/homePage/TravelStories";
import BestTimeToVisit from "@/components/packagess/BestTimeToVisit";
import WhyVisit from "@/components/WhyVisit";
import TravelersReviews from "@/components/Reviews";
import WeatherForecast from "@/components/WheatherForcast";
import InclusionsExclusions from "@/components/packagess/InclusionExclusion";
import OfferCard from "@/components/OfferCard";
import Memories from "@/components/Memories";
import DestinationGallery from "@/components/DestinationGallery";
import PackageHeroSection from "@/components/packagess/PackageHeroSection";
export default function OffersPackage() {
    const pathname = usePathname();

    const [, , offerSlug] = pathname
        .split("/")
        .filter(Boolean);

    const [offer, setOffer] =
        useState<any>(null);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {
        if (!offerSlug) {
            return;
        }

        const fetchOffer = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    `/api/offers/${offerSlug}`,
                    {
                        cache: "no-store",
                    }
                );

                const result =
                    await response.json();

            

                if (
                    !response.ok ||
                    !result.success ||
                    !result.offer
                ) {
                    throw new Error(
                        result.message ||
                        "Offer not found"
                    );
                }

                setOffer(result.offer);
            } catch (error) {
                console.error(
                    "Failed to fetch offer:",
                    error
                );

                setError(
                    error instanceof Error
                        ? error.message
                        : "Failed to fetch offer"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchOffer();
    }, [offerSlug]);

    if (loading) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white">
                <div className="text-sm text-gray-500">
                    Loading offer...
                </div>
            </main>
        );
    }

    if (error || !offer) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white px-4">
                <p className="text-center text-base text-gray-500 sm:text-lg">
                    {error || "Offer not found."}
                </p>
            </main>
        );
    }

    const selectedPackage =
        offer.package;




    return (
        <main className="flex w-full flex-col items-center gap-10 bg-white">

            {/* Hero */}
            <PackageHeroSection
                imageUrl={offer?.package?.heroImage?.url ?? ""}
                destination={offer?.package?.name ?? ""}
                subtitle={offer?.package?.subtitle}
                description={offer?.package?.description}
                duration={offer?.package?.duration}
                idealTrip={offer?.package?.idealTrip}
                budget={offer?.package?.budget}
                location={offer?.package?.location}
                rating={offer?.package?.rating}
                reviews={offer?.package?.reviewsCount}
                offerPrice={offer?.offerPrice}
                originalPrice={offer?.package?.originalPrice}
                buttonText="Book Now"
                buttonHref="#inquiry"
            />


            {/* Package Overview */}
            {selectedPackage?.travelInformation?.activities?.length > 0 &&
                (
                    <div className="w-[91%]">
                        <ThingsToDo
                            title={`Best Experiences in ${selectedPackage?.name ?? ""}`}
                            activities={selectedPackage?.travelInformation?.activities} />
                    </div>
                )}


            <div className="flex w-[93%] flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-8">

                {selectedPackage?.itinerary &&
                    selectedPackage.itinerary.length > 0 && (
                        <div className="w-full lg:w-[70%]">
                            <Itinerary
                                title="Itinerary"
                                subtitle=""
                                days={selectedPackage.itinerary}
                            />
                        </div>
                    )}

                {/* Sticky Offer Card */}
                <div
                    className="
                                hidden
                                w-[280px]
                                shrink-0
                                self-start
                                lg:sticky
                                lg:top-24
                                lg:block
                                xl:w-[320px]
                                2xl:w-[350px]
                            "
                >
                    <OfferCard
                        image={selectedPackage?.heroImage.url}
                        title={offer?.title}
                        originalPrice={selectedPackage?.originalPrice}
                        offerPrice={offer?.offerPrice}
                        badge={offer?.badgeText}
                        saveAmount={selectedPackage?.saveAmount}
                        discount={offer?.discount}
                        validTill={selectedPackage?.validTill}
                        groupSize={selectedPackage?.groupSize}
                    />

                </div>
            </div>

            <section className="mx-auto w-[95%] px-2 pb-16 md:pt-2 lg:px-8">
                <div className="font-semibold text-3xl mb-5">
                    {selectedPackage?.name} Gallery
                </div>

                {/* ==================================================
                         GALLERY
                     ================================================== */}
                <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
                    <DestinationGallery
                        images={selectedPackage?.gallery ?? []}
                        destinationName={selectedPackage?.name ?? ""}
                    />
                </div>

            </section>


            <div className="mb-8 flex w-[95%] flex-col gap-8 px-3 sm:px-5 md:px-6 lg:flex-row lg:items-start lg:justify-center lg:gap-5">
                <div className="w-full relative top-11">
                    <WhyVisit
                        items={selectedPackage?.whyVisit ?? []}
                        destination={selectedPackage?.name}
                    />
                </div>

                {selectedPackage?.bestTimeToVisit && (
                    <div className="md:full lg:w-[60%]">
                        <BestTimeToVisit
                            months={selectedPackage?.bestTimeToVisit}
                        />
                    </div>
                )}
            </div>

            {/* Travel Information */}

            {(selectedPackage?.travelInformation?.length > 0 ||
                selectedPackage?.whatToPack?.length > 0 ||
                (selectedPackage?.latitude != null &&
                    selectedPackage?.longitude != null)) && (
                    <TravelInformation
                        destination={selectedPackage?.name ?? ""}
                        latitude={selectedPackage?.latitude}
                        longitude={selectedPackage?.longitude}
                        travelInfo={selectedPackage?.travelInformation ?? []}
                        packingItems={selectedPackage?.whatToPack ?? []}
                    />
                )}

            {/* ==================================================
                                WEATHER
                            ================================================== */}

            {selectedPackage?.latitude &&
                selectedPackage?.longitude && (
                    <WeatherForecast
                        destination={selectedPackage?.name}
                        latitude={selectedPackage?.latitude}
                        longitude={selectedPackage?.longitude}
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