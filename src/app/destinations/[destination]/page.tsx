
"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import SearachBar from "@/components/homePage/SerachBar";
import PackagesByDestination from "@/components/destination/PackagesByDestination";
import TravelInformation from "@/components/packagess/TravelInformation";
import { BestPackageByDestination } from "@/components/packagess/BestPackageByDestination";
import BestTimeToVisit from "@/components/packagess/BestTimeToVisit";
import Itinerary from "@/components/packagess/Itinerary";
import BlogSection from "@/components/BlogSection";
import WeatherForecast from "@/components/WheatherForcast";
import TravelersReviews from "@/components/Reviews";
import DestinationHero from "@/components/destination/DestinationHero";
import Memories from "@/components/Memories";
import ThingsToDo from "@/components/ThingsToDo";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

import { featuredDestination } from "@/constants/destinationData";

export default function DestinationPage() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();


  const routeDestination = pathname
    .split("/")
    .filter(Boolean)
    .pop();



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


  const destination = destinationData.destination;

  const packages = destinationData.packages ?? [];

  const activities = destination.activities ?? [];

  const gallery = destination.gallery ?? [];

  const bestTimeToVisit = destination.bestTimeToVisit;

  const attractions = destination.attractions ?? []

  const travelInfo = destination.travelInfo ?? [];

  const packingItems = destination.packingItems ?? [];

  const itinerary = destination.itinerary ?? [];

  const categories = destination.categories ?? [];



  const openGallery = (index: number) => {
    setActiveImage(index);
  };

  const closeGallery = () => {
    setActiveImage(null);
  };

  const nextImage = () => {
    if (activeImage === null || gallery.length === 0) {
      return;
    }

    setActiveImage(
      (activeImage + 1) % gallery.length
    );
  };

  const previousImage = () => {
    if (activeImage === null || gallery.length === 0) {
      return;
    }

    setActiveImage(
      (activeImage - 1 + gallery.length) %
      gallery.length
    );
  };
  console.log(attractions)
  return (
    <main className="w-screen bg-white">


      <DestinationHero
        destination={destination}
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
              {destination.description}
            </p>

            {/* ==================================================
                ACTIVITIES
            ================================================== */}

            {activities.length > 0 && (
              <div className="mt-6 grid w-full grid-cols-2 gap-x-6 gap-y-5">

                {activities.map((activity) => {
                  const Icon = activity.icon;

                  return (
                    <div
                      key={activity.text}
                      className="flex w-fit items-center gap-2.5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </span>

                      <span className="text-sm font-semibold text-gray-700 md:text-lg">
                        {activity.text}
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

          {gallery.length > 0 && (
            <div className="grid w-full grid-cols-12 gap-2.5 lg:w-[55%]">

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
                  alt={gallery[0].title}
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
                    {gallery[0].title}
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
                      alt={gallery[1].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-xs font-medium">
                        {gallery[1].title}
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
                            alt={image.title}
                            fill
                            sizes="(max-width: 1024px) 50vw, 12vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />

                          <div className="absolute bottom-3 left-3 text-white">
                            <p className="text-xs font-medium">
                              {image.title}
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
                            alt={image.title}
                            fill
                            sizes={
                              isWide
                                ? "(max-width: 640px) 66vw, 40vw"
                                : "(max-width: 640px) 33vw, 20vw"
                            }
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/30" />

                          {isLast && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                              <div className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
                                View all
                                <ArrowRight className="h-3.5 w-3.5" />
                              </div>
                            </div>
                          )}
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



      <Dialog
        open={activeImage !== null}
        onOpenChange={(open) => {
          if (!open) {
            closeGallery();
          }
        }}
      >
        <DialogContent
          className="
            max-w-5xl
            overflow-hidden
            border-0
            bg-black
            p-2
            sm:p-3
          "
        >
          <DialogTitle className="sr-only">
            {destination.name} Gallery
          </DialogTitle>

          {activeImage !== null &&
            gallery[activeImage] && (
              <div className="relative">

                {/* ==================================================
                    MAIN IMAGE
                ================================================== */}

                <div
                  className="
                    relative
                    h-[70vh]
                    min-h-100
                    overflow-hidden
                    rounded-xl
                    bg-black
                  "
                >
                  <Image
                    src={gallery[activeImage].src}
                    alt={gallery[activeImage].title}
                    fill
                    className="object-contain"
                  />

                  {/* ==================================================
                      IMAGE INFORMATION
                  ================================================== */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      bg-linear-to-t
                      from-black/80
                      to-transparent
                      px-5
                      pb-5
                      pt-16
                    "
                  >
                    <p className="text-lg font-medium text-white">
                      {gallery[activeImage].title}
                    </p>

                    <p className="mt-1 text-xs text-white/60">
                      {gallery[activeImage].location}
                    </p>
                  </div>

                  {/* ==================================================
                      PREVIOUS
                  ================================================== */}

                  <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Previous image"
                    className="
                      absolute
                      left-4
                      top-1/2
                      flex
                      h-10
                      w-10
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      bg-white/15
                      text-white
                      backdrop-blur
                      transition
                      hover:bg-white/25
                    "
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {/* ==================================================
                      NEXT
                  ================================================== */}

                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next image"
                    className="
                      absolute
                      right-4
                      top-1/2
                      flex
                      h-10
                      w-10
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      bg-white/15
                      text-white
                      backdrop-blur
                      transition
                      hover:bg-white/25
                    "
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                </div>

                {/* ==================================================
                    THUMBNAILS
                ================================================== */}

                <div
                  className="
                    mt-2
                    flex
                    gap-2
                    overflow-x-auto
                    px-1
                    pb-1
                  "
                >
                  {gallery.map((image, index) => (
                    <button
                      key={`${image.src}-${index}`}
                      type="button"
                      onClick={() =>
                        setActiveImage(index)
                      }
                      className={`
                        relative
                        h-16
                        w-20
                        shrink-0
                        overflow-hidden
                        rounded-lg
                        transition
                        ${activeImage === index
                          ? "ring-2 ring-primary"
                          : "opacity-60 hover:opacity-100"
                        }
                      `}
                    >
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>

              </div>
            )}
        </DialogContent>
      </Dialog>


      <div className="flex w-full flex-col items-center justify-center gap-18">



        <PackagesByDestination
          destination={destination.name}
          attractions={attractions}
        />


        {activities.length > 0 && (
          <div className="w-[91%]">

            <ThingsToDo
              title={`Best Experiences in ${destination.name}`}
              activities={activities}
            />
          </div>

        )}



        {(itinerary.length > 0 ||
          bestTimeToVisit) && (
            <div className="mb-8 flex max-h-130   w-[95%] flex-col gap-8 px-3 sm:px-5 md:px-6 lg:mb-12 lg:flex-row lg:items-start lg:justify-center lg:gap-5">

              {itinerary.length > 0 && (
                <Itinerary
                  title="Itinerary"
                  subtitle={""}
                  days={itinerary}
                  onButtonClick={() =>
                    router.push(`/destinations/${destination.name}/itinerary`)
                  }
                />
              )}

              {bestTimeToVisit && (
                <div className="w-[60%]">

                  <BestTimeToVisit
                    months={bestTimeToVisit.months}
                    seasons={bestTimeToVisit.seasons}
                  />
                </div>
              )}

            </div>
          )}

        {/* ==================================================
            BEST PACKAGES
        ================================================== */}

        <BestPackageByDestination
          location={destination.name}
          packages={packages}
        />

        {/* ==================================================
            TRAVEL INFORMATION
        ================================================== */}

        {travelInfo.length > 0 && (
          <TravelInformation
            destination={destination.name}
            latitude={
              destination.latitude ?? 32.2432
            }
            longitude={
              destination.longitude ?? 77.1892
            }
            travelInfo={travelInfo}
            packingItems={packingItems}
          />
        )}

        {/* ==================================================
            WEATHER
        ================================================== */}

        {destination.latitude &&
          destination.longitude && (
            <WeatherForecast
              destination={destination.name}
              latitude={destination.latitude}
              longitude={destination.longitude}
            />
          )}

        {/* ==================================================
            BLOG
        ================================================== */}
        <div className="w-[95%]">

          <TravelersReviews />
        </div>
        <BlogSection />

        {/* ==================================================
            MEMORIES
        ================================================== */}

        <Memories />

      </div>
    </main>
  );
}

