
"use client";

 import { useState } from "react";
import { usePathname } from "next/navigation";
 import SearachBar from "@/components/homePage/SerachBar";
import AttractionsByDestination from "@/components/destination/AttractionsByDestination";
import { BestPackageByDestination } from "@/components/packagess/BestPackageByDestination";
import BestTimeToVisit from "@/components/packagess/BestTimeToVisit";
import TravelStories from "@/components/homePage/TravelStories";
import TravelersReviews from "@/components/Reviews";
import FAQSection from "../../FaqSection";
import DestinationHero from "@/components/destination/DestinationHero";
import Memories from "@/components/Memories";
import WhyVisit from "@/components/WhyVisit";
import ThingsToDo from "@/components/ThingsToDo";
import DestinationGallery from "@/components/DestinationGallery";
import { useEffect } from "react";


import { featuredDestination } from "@/constants/destinationData";

export default function DestinationPage() {

  const pathname = usePathname();
  const [destinations, setDestination] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const routeDestination = pathname
    .split("/")
    .filter(Boolean)
    .pop();
   useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(
          `/api/destinations/${routeDestination}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch destination data: ${response.status}`
          );
        }

        const result = await response.json();

        if (!result.success) {
          throw new Error(
            result.message ||
            "Failed to fetch featured destinations"
          );
        }

        setDestination(result.data ?? []);
      } catch (error) {
        console.error(
          "Featured destinations fetch error:",
          error
        );

        setDestination([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, []);




  const destinationData = featuredDestination.find(
    (item) =>
      item.destination.name
        .toLowerCase()
        .replace(/\s+/g, "-") ===
      routeDestination?.toLowerCase()
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
  const faqdest = destinationData.destination.name
    .toLowerCase()
    .replace(/\s+/g, "-")


  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
        <p className="text-gray-500">
          Destination fetched
        </p>
      </main>
    );
  }
  return (
    <main className="w-screen bg-white">


      <DestinationHero
        imageUrl={destinations?.heroImage?.url ?? ""}
        destination={destinations?.name ?? ""}
        subtitle={destinations?.subtitle ?? ""}
        description={destinations?.description ?? ""}
        idealTrip={destinations?.idealTrip ?? ""}
        budget={destinations?.budget ?? ""}
        location={destinations?.location ?? ""}
      />

      <SearachBar bottomPosition="2" />

      <section className="mx-auto w-[95%] px-2 pb-16 md:pt-2 lg:px-8">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">

          {/* ==================================================
              OVERVIEW
          ================================================== */}

          <div className="w-full lg:w-[45%]">

            <p className="text-xs font-medium uppercase tracking-wider text-primary">
              Discover
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-black">
              Overview
            </h2>

            <p className="mt-3 w-full text-md leading-6 text-gray-400 md:text-[18px]">
              {destinations?.description}
            </p>

            {/* ==================================================
                ACTIVITIES
            ================================================== */}

            {destinations?.activities?.length > 0 && (
              <div className="mt-6 grid w-full grid-cols-2 gap-x-6 gap-y-5">

                {destinations?.activities.map((activity: any) => {
                  // const Icon = activity.icon;

                  return (
                    <div
                      key={activity.text}
                      className="flex w-fit items-center gap-2.5"
                    >
                      {/* <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </span> */}

                      <span className="text-sm font-semibold text-gray-700 md:text-lg">
                        {activity}
                      </span>
                    </div>
                  );
                })}

              </div>
            )}

          </div>

          {/* ==================================================
              GALLERY
          ================================================== */}

        </div>
      </section>
          <DestinationGallery
            images={destinations?.gallery ?? []}
            destinationName={destinations?.name ?? ""}
          />


      <div className="flex w-full flex-col items-center justify-center gap-18">

        {destinations?.attractions.length > 0 &&
          (<AttractionsByDestination
            destination={destinations?.name}
            attractions={destinations?.attractions} />)}

        {destinations?.activities?.length > 0 &&
          (
            <div className="w-[91%]">
              <ThingsToDo
                title={`Best Experiences in ${destinations?.name ?? ""}`}
                activities={destinations.activities} />
            </div>
          )}




        <div className="mb-8 flex w-[95%] flex-col gap-8 px-3 sm:px-5 md:px-6 lg:flex-row lg:items-start lg:justify-center lg:gap-5">
          <div className="w-full relative top-11">
            <WhyVisit
              items={destinations?.whyVisit ?? []}
              destination={destinations?.name}
            />
          </div>

          {destinations?.bestTimeToVisit && (
            <div className="md:full lg:w-[60%]">
              <BestTimeToVisit
                months={destinations?.bestTimeToVisit}
              />
            </div>
          )}
        </div>


        {/* ==================================================
            BEST PACKAGES
        ================================================== */}
        {destinations?.packages.length > 0 &&

          <BestPackageByDestination
            location={destinations?.name}
            packages={destinations?.packages}
          />
        }



        <div className="w-[95%]">

          <TravelersReviews />
        </div>
        <TravelStories />


        <Memories />

        {
          faqdest && <FAQSection destinationSlug={faqdest} />
        }

      </div>
    </main>
  );
}

