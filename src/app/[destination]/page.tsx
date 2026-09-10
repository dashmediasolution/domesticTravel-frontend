"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearachBar from "@/components/homePage/SerachBar";
import Memories from "@/components/Memories";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Headphones,
  MapPin,
  Play,
  Sparkles,
  Sun,
  Wallet,
  Star,
  Waves,
  X,

} from "lucide-react";
import {
  PersonStanding,
  TentTree,
  Flame,
  CableCar,
  Snowflake,
  Umbrella,
  Caravan,
  Bike,
   Mountain,
  Ship,
  Fish,
  Camera,
  Utensils,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

import ThingsToDo from "@/components/ThingsToDo";
const mountainActivities = [
  {
    text: "Trekking",
    icon: PersonStanding,
  },
  {
    text: "Camping",
    icon: TentTree,
  },
  {
    text: "Bonfire",
    icon: Flame,
  },
  {
    text: "Ropeway",
    icon: CableCar,
  },
  {
    text: "Skiing",
    icon: Snowflake,
  },
  {
    text: "Paragliding",
    icon: Umbrella,
  },
  {
    text: "Safari",
    icon: Caravan,
  },
  {
    text: "Biking",
    icon: Bike,
  },
];
// ============================================================
// DESTINATION DATA
// ============================================================

const destination = {
  name: "Manali",

  subtitle: "The Valley of Snow & Adventure",

  location: "Himachal Pradesh",

  rating: "4.9",

  reviews: "1.2K+ Reviews",

  packages: "120+ Packages",

  weather: "-2°C to 23°C",

  altitude: "2,050 m",

  idealTrip: "3-6 Days",

  budget: "$7,000-$15,000",

  description:
    "Surrounded by snow-capped peaks, pine forests and breathtaking valleys, Manali is perfect for adventure, nature lovers and peaceful getaways.",

  heroImage: "/images/manali1.png",
};


// ============================================================
// GALLERY
// ============================================================

const gallery = [
  {
    src: "/images/destination/image-1.png",
    title: "Solang Valley",
    location: "Manali",
  },
  {
    src: "/images/destination/image-3.png",
    title: "Hamta Waterfall",
    location: "Manali",
  },
  {
    src: "/images/destination/image-2.png",
    title: "Deos Village",
    location: "Himachal Pradesh",
  },
  {
    src: "/images/destination/image-1.png",
    title: "Mountain Escape",
    location: "Manali",
  },
  {
    src: "/images/destination/image-3.png",
    title: "Himalayan Valley",
    location: "Himachal Pradesh",
  },
  {
    src: "/images/destination/image-3.png",
    title: "Himalayan Valley",
    location: "Himachal Pradesh",
  },
];


// ============================================================
// ACTIVITIES
// ============================================================

const activities = [
  {
    title: "Adventure",
    icon: Sparkles,
  },
  {
    title: "Nature",
    icon: Waves,
  },
  {
    title: "Heritage",
    icon: MapPin,
  },
  {
    title: "Mountains",
    icon: Sparkles,
  },
  {
    title: "Honeymoon",
    icon: Sparkles,
  },
  {
    title: "Weekend Trips",
    icon: CalendarDays,
  },
];





export default function DestinationPage() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const openGallery = (index: number) => {
    setActiveImage(index);
  };

  const closeGallery = () => {
    setActiveImage(null);
  };

  const nextImage = () => {
    if (activeImage === null) return;

    setActiveImage(
      (activeImage + 1) % gallery.length
    );
  };

  const previousImage = () => {
    if (activeImage === null) return;

    setActiveImage(
      (activeImage - 1 + gallery.length) %
      gallery.length
    );
  };


  return (
    <main className="w-screen bg-white">


      <section className="relative w-full h-[80vh] overflow-hidden">
  <Image
    src={destination.heroImage}
    alt={destination.name}
    fill
    priority
    className="object-cover"
  />
        <div
          className="
        absolute
        inset-0
        bg-linear-to-tr from-black/80 via-black/10 via-50% to-transparent
        w-full
            z-10
          "
        />
        <div
          className="
            relative
            z-20
            mx-auto
            flex
            min-h-155
            max-w-7xl
            items-center
         
            
          "
        >

          <div className=" flex flex-col gap-2 text-white">
            <h1
              className="
                text-6xl
                font-medium
                italic
                tracking-[-0.04em]
                sm:text-7xl
                lg:text-[120px]
                uppercase
              "

            >
              {destination.name}
            </h1>


            {/* Subtitle */}

            <p
              className="
                mt-1
                text-base
                font-semibold
                 md:text-xl
                 
              "
            >
              {destination.subtitle}
            </p>
         

            {/* Stats */}

            <div
              className="
                mt-3
                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-2
                text-xs
                sm:text-sm
                w-full
              "
            >

              <div className="flex items-center gap-2 text-lg">

                <div className="flex gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="fill-amber-400  " />))}
                </div>

                <span>
                  {destination.rating}
                </span>

                <span className="opacity-80">
                  ({destination.reviews})
                </span>

              </div>


              <span className="opacity-50">
                |
              </span>


              <div className="flex items-center gap-1.5 text-lg">
                <CalendarDays className="h-5! w-5! text-primary" />
                {destination.packages}
              </div>


              <span className="opacity-50">
                |
              </span>


              <div className="flex items-center gap-1.5 text-lg">
                <MapPin className="h-5! w-5! text-primary" />

                {destination.location}
              </div>

            </div>


            {/* Description */}

            <p
              className="
                mt-3
                max-w-[480px]
                 leading-5
                text-white/85
                sm:text-[15px]
                md:text-[20px]
              "
            >
              {destination.description}
            </p>

            <div className="flex gap-2 w-full mt-4">
              <div className="bg-white flex px-2  gap-2 justify-center items-center  rounded-lg">
                <MapPin className="text-primary" />
                <div>
                  <p className="text-[#ACB1B7] text-sm">State</p>
                  <p className="text-black leading-4 text-[14px]">{destination.name}</p>
                </div>
              </div>
               <div className="bg-white flex p-2 gap-2 justify-center items-center  rounded-lg">
                <MapPin className="text-primary" />
                <div>
                  <p className="text-[#ACB1B7] text-sm">Weather</p>
                  <p className="text-black leading-4 text-[14px]">{destination.weather}</p>
                </div>
              </div>
               <div className="bg-white flex p-2 gap-2 justify-center items-center  rounded-lg">
                <MapPin className="text-primary" />
                <div>
                  <p className="text-[#ACB1B7] text-sm">Ideal Trip</p>
                  <p className="text-black leading-4 text-[14px]">{destination.idealTrip}</p>
                </div>
              </div>
               <div className="bg-white flex p-2 gap-2 justify-center items-center  rounded-lg">
                <MapPin className="text-primary" />
                <div>
                  <p className="text-[#ACB1B7] text-sm">Budget</p>
                  <p className="text-black leading-4 text-[14px]">{destination.budget}</p>
                </div>
              </div>
            </div>
            {/* Buttons */}

            <div className="mt-5 flex flex-wrap items-center gap-3">

              <Link
                href="/packages"
                className="
                  rounded-full
                  bg-primary
                  px-5
                  py-1.5
                  text-xs
                  font-medium
                  text-white
                  transition
                  hover:opacity-90
                  sm:text-sm
                  md:text-lg
                "
              >
                Explore Packages
              </Link>


              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-medium
                  text-white
                  sm:text-sm
                "
              >

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white
                    bg-black/20
                  "
                >
                  <Play
                    className="ml-0.5 h-3.5 w-3.5 fill-white"
                  />
                </span>

                Watch Video

              </button>

            </div>

          </div>




            </div>

      </section>
      <SearachBar bottomPosition="2" />

      {/* ======================================================
          OVERVIEW + GALLERY
      ======================================================= */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-5
          pb-16
          pt-20
          sm:px-8
          lg:px-10
        "
      >

        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.85fr_1.5fr]
            lg:gap-12
          "
        >

          {/* ==================================================
              OVERVIEW
          =================================================== */}

          <div>

            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-wider
                text-primary
              "
            >
              Discover
            </p>

            <h2
              className="
                mt-1
                text-2xl
                font-semibold
                tracking-tight
                text-black
              "
            >
              Overview
            </h2>


            <p
              className="
                mt-3
                max-w-[390px]
                text-sm
                leading-5
                text-gray-400
              "
            >
              Manali, nestled in the Kullu Valley of
              Himachal Pradesh, is one of India's most
              popular hill stations. From adventure
              activities in Solang Valley and
              breathtaking views of Rohtang Pass to
              the calm vibes of Old Manali, this
              destination has something for every
              traveler.
            </p>


            {/* Activities */}

            <div
              className="
                mt-6
                grid
                grid-cols-2
                gap-x-6
                gap-y-5
              "
            >

              {activities.map((activity) => {
                const Icon = activity.icon;

                return (
                  <div
                    key={activity.title}
                    className="flex items-center gap-2.5"
                  >

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        bg-primary/10
                        text-primary
                      "
                    >

                      <Icon className="h-4 w-4" />

                    </span>

                    <span
                      className="
                        text-xs
                        font-medium
                        text-gray-700
                      "
                    >
                      {activity.title}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>


          {/* ==================================================
              MODERN GALLERY
          =================================================== */}

          <div>

            <div className="mb-4 flex items-center justify-between">

              <div>

                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-primary
                  "
                >
                  Moments
                </p>

                <h2
                  className="
                    mt-1
                    text-2xl
                    font-semibold
                    tracking-tight
                  "
                >
                  Explore Manali
                </h2>

              </div>


              <button
                type="button"
                onClick={() => openGallery(0)}
                className="
                  hidden
                  items-center
                  gap-1
                  text-xs
                  font-medium
                  text-primary
                  sm:flex
                "
              >
                View Gallery

                <ArrowRight className="h-4 w-4" />

              </button>

            </div>


            {/* Gallery Grid */}

            <div
              className="
                grid
                grid-cols-2
                gap-2.5
                sm:grid-cols-4
                sm:grid-rows-2
              "
            >

              {/* BIG IMAGE */}

              <button
                type="button"
                onClick={() => openGallery(0)}
                className="
                  group
                  relative
                  col-span-2
                  row-span-2
                  min-h-[280px]
                  overflow-hidden
                  rounded-[18px]
                  text-left
                  sm:min-h-[310px]
                "
              >

                <Image
                  src={gallery[0].src}
                  alt={gallery[0].title}
                  fill
                  className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-transparent
                    to-transparent
                    opacity-70
                  "
                />


                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    text-white
                  "
                >

                  <p className="text-xs text-white/70">
                    Explore
                  </p>

                  <p className="text-sm font-medium">
                    {gallery[0].title}
                  </p>

                </div>

              </button>


              {/* SMALL IMAGES */}

              {gallery.slice(1, 5).map((image, index) => {

                const actualIndex = index + 1;

                return (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => openGallery(actualIndex)}
                    className="
                      group
                      relative
                      min-h-[145px]
                      overflow-hidden
                      rounded-[18px]
                      text-left
                    "
                  >

                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-110
                      "
                    />


                    {/* Hover */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/0
                        transition
                        duration-300
                        group-hover:bg-black/20
                      "
                    />


                    <div
                      className="
                        absolute
                        bottom-3
                        left-3
                        right-3
                        translate-y-2
                        opacity-0
                        transition
                        duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >

                      <span
                        className="
                          text-[10px]
                          font-medium
                          text-white
                        "
                      >
                        {image.title}
                      </span>

                    </div>

                  </button>
                );
              })}


              {/* MORE BUTTON */}

              <button
                type="button"
                onClick={() => openGallery(5)}
                className="
                  group
                  relative
                  min-h-[145px]
                  overflow-hidden
                  rounded-[18px]
                  bg-primary
                "
              >

                <Image
                  src={gallery[5].src}
                  alt={gallery[5].title}
                  fill
                  className="
                    object-cover
                    opacity-60
                    transition
                    duration-500
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-black/20
                  "
                >

                  <span
                    className="
                      rounded-full
                      bg-primary
                      px-4
                      py-2
                      text-[11px]
                      font-medium
                      text-white
                      shadow-lg
                    "
                  >
                    View Gallery
                  </span>

                </div>

              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          GALLERY LIGHTBOX
      ======================================================= */}

      <Dialog
        open={activeImage !== null}
        onOpenChange={(open) => {
          if (!open) closeGallery();
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
            Manali Gallery
          </DialogTitle>


          {activeImage !== null && (
            <div className="relative">

              {/* Main Image */}

              <div
                className="
                  relative
                  h-[70vh]
                  min-h-[400px]
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


                {/* Image information */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    bg-gradient-to-t
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


                {/* Previous */}

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


                {/* Next */}

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


              {/* Thumbnail Strip */}

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
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(index)}
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
                        : "opacity-60 hover:opacity-100"}
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
        <ThingsToDo
      title="Best Experiences in the Mountains"
      activities={mountainActivities}
    />
      <Memories />
    </main>
  );
}