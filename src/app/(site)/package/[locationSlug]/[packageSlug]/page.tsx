"use client";

import DestinationHero from "@/components/destination/DestinationHero";
import OfferCard from "@/components/OfferCard";
import { usePathname } from "next/navigation";
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
import { useState, useEffect } from "react";
import ThingsToDo from "@/components/ThingsToDo";
import WhyVisit from "@/components/WhyVisit";
export default function PackageDestination() {
    const pathname = usePathname();
    const [packageDatas, setPackageData] = useState<any>(null);
    const [, locationSlug, packageSlug] = pathname
        .split("/")
        .filter(Boolean);

    async function getPackageBySlug() {

        try {
            const response = await fetch(
                `/api/packages/${packageSlug}`,
                {
                    method: "GET",
                    // next: {
                    //     revalidate: 86400,
                    // },
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success || !result.data) {
                console.error(
                    "Failed to fetch package:",
                    result.message
                );

                return null;
            }

            setPackageData(result?.data)
        } catch (error) {
            console.error(
                "Error fetching package:",
                error
            );

            return null;
        }
    }


    useEffect(() => {
        getPackageBySlug()
    }, [packageSlug])



    if (!packageDatas) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white">
                <p className="text-gray-500">
                    Packages not found.
                </p>
            </main>
        );
    }





    return (
        <main className="w-full bg-white flex flex-col justify-center items-center gap-10">
            <section className="relative w-full">
                {/* Hero */}
                <PackageHeroSection
                    imageUrl={packageDatas?.heroImage.url ?? ""}
                    destination={packageDatas?.name ?? ""}
                    subtitle={packageDatas?.subtitle}
                    description={packageDatas?.description}
                    duration={packageDatas?.duration}
                    idealTrip={packageDatas?.idealTrip}
                    budget={packageDatas?.budget}
                    location={packageDatas?.location}
                    rating={packageDatas?.rating}
                    reviews={packageDatas?.reviewsCount}
                    price={packageDatas?.offerPrice}
                    originalPrice={packageDatas?.originalPrice}
                    buttonText="Book Now"
                    buttonHref="#inquiry"
                />

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
                    <OfferCard
                        originalPrice={packageDatas?.originalPrice}
                        offerPrice={packageDatas?.offerPrice}
                        saveAmount={packageDatas?.saveAmount}
                        discount={packageDatas?.discount}
                        validTill={packageDatas?.validTill}
                        groupSize={packageDatas?.groupSize}
                    />                </div>
            </section>

            {packageDatas?.travelInformation?.activities?.length > 0 &&
                (
                    <div className="w-[91%]">
                        <ThingsToDo
                            title={`Best Experiences in ${packageDatas?.name ?? ""}`}
                            activities={packageDatas?.travelInformation?.activities} />
                    </div>
                )}

            <div className="flex w-[93%] flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-8">

                {packageDatas?.itinerary &&
                    packageDatas.itinerary.length > 0 && (
                        <div className="w-full lg:w-[70%]">
                            <Itinerary
                                title="Itinerary"
                                subtitle=""
                                days={packageDatas.itinerary}
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
                        originalPrice={packageDatas?.originalPrice}
                        offerPrice={packageDatas?.offerPrice}
                        saveAmount={packageDatas?.saveAmount}
                        discount={packageDatas?.discount}
                        validTill={packageDatas?.validTill}
                        groupSize={packageDatas?.groupSize}
                    />
                </div>
            </div>



            <section className="mx-auto w-[95%] px-2 pb-16 md:pt-2 lg:px-8">
                <div className="font-semibold text-3xl mb-5">
                    {packageDatas?.name} Gallery
                </div>

                {/* ==================================================
              GALLERY
          ================================================== */}
                <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
                    <DestinationGallery
                        images={packageDatas?.gallery ?? []}
                        destinationName={packageDatas?.name ?? ""}
                    />
                </div>

            </section>


            <div className="mb-8 flex w-[95%] flex-col gap-8 px-3 sm:px-5 md:px-6 lg:flex-row lg:items-start lg:justify-center lg:gap-5">
                <div className="w-full relative top-11">
                    <WhyVisit
                        items={packageDatas?.whyVisit ?? []}
                        destination={packageDatas?.name}
                    />
                </div>

                {packageDatas?.bestTimeToVisit && (
                    <div className="md:full lg:w-[60%]">
                        <BestTimeToVisit
                            months={packageDatas?.bestTimeToVisit}
                        />
                    </div>
                )}
            </div>

            {(packageDatas?.travelInformation?.length > 0 ||
                packageDatas?.whatToPack?.length > 0 ||
                (packageDatas?.latitude != null &&
                    packageDatas?.longitude != null)) && (
                    <TravelInformation
                        destination={packageDatas?.name ?? ""}
                        latitude={packageDatas?.latitude}
                        longitude={packageDatas?.longitude}
                        travelInfo={packageDatas?.travelInformation ?? []}
                        packingItems={packageDatas?.whatToPack ?? []}
                    />
                )}

            {/* ==================================================
                      WEATHER
                  ================================================== */}

            {packageDatas?.latitude &&
                packageDatas?.longitude && (
                    <WeatherForecast
                        destination={packageDatas?.name}
                        latitude={packageDatas?.latitude}
                        longitude={packageDatas?.longitude}
                    />
                )}
            <div className="w-[93%] flex flex-col gap-12">
                <InclusionsExclusions
                    inclusions={packageDatas?.inclusions ?? []}
                    exclusions={packageDatas?.exclusions ?? []}
                    title={packageDatas?.whyVisit?.title}
                    highlights={packageDatas?.whyVisit?.highlights}
                />

                <TravelersReviews />
            </div>
            <TravelStories />

            <Memories />
        </main>
    );
}