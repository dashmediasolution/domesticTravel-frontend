"use client";

import DestinationHero from "@/components/destination/DestinationHero";
import OfferCard from "@/components/OfferCard";
import { featuredDestination } from "@/constants/destinationData";
import { usePathname } from "next/navigation";
import TravelStories from "@/components/homePage/TravelStories";
import Memories from "@/components/Memories";
import Gallery from "@/components/packagess/Galary";
import { packageData } from "@/constants/packagesData";
import Itinerary from "@/components/packagess/Itinerary";
import BestTimeToVisit from "@/components/packagess/BestTimeToVisit";
import TravelInformation from "@/components/packagess/TravelInformation";
import WeatherForecast from "@/components/WheatherForcast";
import { useRouter } from "next/navigation";

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

    return (
        <main className="w-full bg-white flex flex-col justify-center items-center gap-10">
            <section className="relative w-full">
                <DestinationHero
                    destination={selectedPackage}
                />

                <div className="absolute inset-y-0 right-10 z-20 flex w-[25%] items-center">
                    <OfferCard details={packageDetails} />
                </div>
            </section>

            <section className="mx-auto flex w-[94%] flex-col gap-6  lg:flex-row">
                <div className="relative aspect-video w-full overflow-hidden rounded-3xl lg:w-1/2">
                    <img
                        src={selectedPackage.heroImage}
                        alt={selectedPackage.name}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center gap-4 lg:w-1/2">
                    <p className="text-sm font-medium uppercase tracking-wider text-primary">
                        {packageDestination.name} package
                    </p>

                    <h1 className="font-heading text-4xl font-semibold">
                        {selectedPackage.name}
                    </h1>

                    <p className="text-lg text-muted-foreground">
                        {selectedPackage.description}
                    </p>

                    <div className="flex flex-wrap gap-3 text-sm">
                        <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">
                            Rated {selectedPackage.rating}/5
                        </span>

                        <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">
                            From {selectedPackage.startingPrice} / person
                        </span>

                        <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">
                            {selectedPackage.duration}
                        </span>
                    </div>
                </div>
            </section>

            <Gallery images={selectedPackage.gallery} />

       {(selectedPackage.itinerary.length > 0 ||
          selectedPackage.bestTimeToVisit) && (
            <div className="  flex w-full flex-col gap-8    lg:flex-row lg:items-start lg:justify-center lg:gap-5">

              {selectedPackage.itinerary.length > 0 && (
                <Itinerary
                  title="Itinerary"
                  subtitle={`Suggested ${"sdfsdf"}`}
                  days={selectedPackage.itinerary}
                  onButtonClick={() =>
                    router.push(`/destinations/${selectedPackage.name}/itinerary`)
                  }
                />
              )}

              {selectedPackage.bestTimeToVisit && (
                <BestTimeToVisit
                  months={selectedPackage.bestTimeToVisit.months}
                  seasons={selectedPackage.bestTimeToVisit.seasons}
                />
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
            <TravelStories />

            <Memories />
        </main>
    );
}