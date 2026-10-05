"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
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

export default function PackageDestination() {
    const pathname = usePathname();
    const router = useRouter();

    const [, locationSlug, packageSlug] = pathname
        .split("/")
        .filter(Boolean);

    const [packageDatas, setPackageData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    async function getPackageBySlug() {
        try {
            setLoading(true);

            const response = await fetch(
                `/api/packages/${packageSlug}`,
                {
                    method: "GET",
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success || !result.data) {
                console.error(
                    "Failed to fetch package:",
                    result.message
                );

                setPackageData(null);
                return;
            }

            setPackageData(result.data);
        } catch (error) {
            console.error(
                "Error fetching package:",
                error
            );

            setPackageData(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (packageSlug) {
            getPackageBySlug();
        }
    }, [packageSlug]);

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
                    Packages not found.
                </p>
            </main>
        );
    }

    const handleBookNow = () => {
        router.push("#inquiry");
    };

    return (
        <main className="flex w-full flex-col items-center justify-center gap-10 bg-white">
            {/* ==================================================
                HERO
            ================================================== */}
            <section className="relative w-full">
                <PackageHeroSection
                    imageUrl={
                        packageDatas?.heroImage?.url ?? ""
                    }
                    destination={
                        packageDatas?.name ?? ""
                    }
                    subtitle={
                        packageDatas?.subtitle
                    }
                    description={
                        packageDatas?.description
                    }
                    duration={
                        packageDatas?.duration
                    }
                    idealTrip={
                        packageDatas?.idealTrip
                    }
                    budget={
                        packageDatas?.budget
                    }
                    location={
                        packageDatas?.location
                    }
                    rating={
                        packageDatas?.rating
                    }
                    reviews={
                        packageDatas?.reviewsCount
                    }
                    originalPrice={
                        packageDatas?.originalPrice
                    }
                    buttonText="Book Now"
                    buttonHref="#inquiry"
                />
            </section>

            {/* ==================================================
                MOBILE + TABLET BOOKING CARD
            ================================================== */}
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
                    <BookingCard
                        image={
                            packageDatas?.heroImage?.url
                        }
                        imageAlt={
                            packageDatas?.name
                        }
                        title={
                            packageDatas?.name
                        }
                        days={
                            packageDatas?.duration
                                ? `${packageDatas.duration} Days`
                                : "5 Days"
                        }
                        nights={
                            packageDatas?.duration
                                ? `${Math.max(
                                      Number(packageDatas.duration) - 1,
                                      1
                                  )} Nights`
                                : "4 Nights"
                        }
                        meals="Included"
                        sightseeing="Tours"
                        price={
                            packageDatas?.offerPrice ??
                            packageDatas?.originalPrice
                        }
                        buttonText="Book Now"
                        onBookNow={handleBookNow}
                    />
                </div>
            </section>

            {/* ==================================================
                THINGS TO DO
            ================================================== */}
            {packageDatas?.travelInformation?.activities?.length >
                0 && (
                <div className="w-[91%]">
                    <ThingsToDo
                        title={`Best Experiences in ${
                            packageDatas?.name ?? ""
                        }`}
                        activities={
                            packageDatas?.travelInformation
                                ?.activities
                        }
                    />
                </div>
            )}

            {/* ==================================================
                ITINERARY + DESKTOP BOOKING CARD
            ================================================== */}
            <div className="flex w-[93%] flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
                {packageDatas?.itinerary &&
                    packageDatas.itinerary.length > 0 && (
                        <div className="w-full lg:w-[70%]">
                            <Itinerary
                                title="Itinerary"
                                subtitle=""
                                days={
                                    packageDatas.itinerary
                                }
                            />
                        </div>
                    )}

                {/* Sticky Booking Card */}
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
                    <BookingCard
                        image={
                            packageDatas?.heroImage?.url
                        }
                        imageAlt={
                            packageDatas?.name
                        }
                        title={
                            packageDatas?.name
                        }
                        days={
                            packageDatas?.duration
                                ? `${packageDatas.duration} Days`
                                : "5 Days"
                        }
                        nights={
                            packageDatas?.duration
                                ? `${Math.max(
                                      Number(packageDatas.duration) - 1,
                                      1
                                  )} Nights`
                                : "4 Nights"
                        }
                        meals="Included"
                        sightseeing="Tours"
                        price={
                            packageDatas?.offerPrice ??
                            packageDatas?.originalPrice
                        }
                        buttonText="Book Now"
                        onBookNow={handleBookNow}
                    />
                </div>
            </div>

            {/* ==================================================
                GALLERY
            ================================================== */}
            <section className="mx-auto w-[95%] px-2 pb-16 md:pt-2 lg:px-8">
                <div className="mb-5 text-3xl font-semibold">
                    {packageDatas?.name} Gallery
                </div>

                <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
                    <DestinationGallery
                        images={
                            packageDatas?.gallery ?? []
                        }
                        destinationName={
                            packageDatas?.name ?? ""
                        }
                    />
                </div>
            </section>

            {/* ==================================================
                WHY VISIT + BEST TIME
            ================================================== */}
            <div className="mb-14 flex w-[95%] flex-col gap-8 px-3 sm:px-5 md:px-6 lg:flex-row lg:items-start lg:justify-center lg:gap-10">
                <div className="relative top-11 w-full">
                    <WhyVisit
                        items={
                            packageDatas?.whyVisit ?? []
                        }
                        destination={
                            packageDatas?.name
                        }
                    />
                </div>

                {packageDatas?.bestTimeToVisit && (
                    <div className="relative top-10 md:full lg:w-[60%]">
                        <BestTimeToVisit
                            months={
                                packageDatas?.bestTimeToVisit
                            }
                        />
                    </div>
                )}
            </div>

            {/* ==================================================
                TRAVEL INFORMATION
            ================================================== */}
            {(packageDatas?.travelInformation?.length > 0 ||
                packageDatas?.whatToPack?.length > 0 ||
                (packageDatas?.latitude != null &&
                    packageDatas?.longitude != null)) && (
                <TravelInformation
                    destination={
                        packageDatas?.name ?? ""
                    }
                    latitude={
                        packageDatas?.latitude
                    }
                    longitude={
                        packageDatas?.longitude
                    }
                    travelInfo={
                        packageDatas?.travelInformation ??
                        []
                    }
                    packingItems={
                        packageDatas?.whatToPack ?? []
                    }
                />
            )}

            {/* ==================================================
                WEATHER
            ================================================== */}
            {packageDatas?.latitude &&
                packageDatas?.longitude && (
                    <WeatherForecast
                        destination={
                            packageDatas?.name
                        }
                        latitude={
                            packageDatas?.latitude
                        }
                        longitude={
                            packageDatas?.longitude
                        }
                    />
                )}

            {/* ==================================================
                INCLUSIONS / EXCLUSIONS
            ================================================== */}
            <div className="flex w-[93%] flex-col gap-12">
                <InclusionsExclusions
                    inclusions={
                        packageDatas?.inclusions ?? []
                    }
                    exclusions={
                        packageDatas?.exclusions ?? []
                    }
                    title={
                        packageDatas?.whyVisit?.title
                    }
                    highlights={
                        packageDatas?.whyVisit
                            ?.highlights
                    }
                />

                <TravelersReviews />
            </div>

            {/* ==================================================
                STORIES
            ================================================== */}
            <TravelStories />

            {/* ==================================================
                MEMORIES
            ================================================== */}
            <Memories />
        </main>
    );
}