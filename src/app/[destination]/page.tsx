"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearachBar from "@/components/homePage/SerachBar";
import PackagesByDestination from "@/components/destination/PackagesByDestination";
import TravelInformation from "@/components/packagess/TravelInformation";
import { BestPackageByDestination } from "@/components/packagess/BestPackageByDestination";
import BestTimeToVisit from "@/components/packagess/BestTimeToVisit";
import Itinerary from "@/components/packagess/Itinerary";
import BlogSection from "@/components/BlogSection";
import WeatherForecast from "@/components/WheatherForcast";
import DestinationHero from "@/components/destination/DestinationHero";
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

 
const bestTimeToVisit = {
  months: ["Mar", "Apr"],
  seasons: [
    {
      name: "Winter",
      months: "Dec - Feb",
      description: "Snowfall, cozy stays, perfect for snow activities.",
      icon: "winter" as const,
    },
    {
      name: "Summer",
      months: "Mar - Jun",
      description: "Pleasant weather, ideal for sightseeing and adventure.",
      icon: "summer" as const,
    },
    {
      name: "Monsoon",
      months: "Jul - Sep",
      description: "Lush green views, less crowded.",
      icon: "monsoon" as const,
    },
  ],
};
const travelInfo = [
  { label: "Nearest Airport", value: "Bhunter Airport (50 km)", icon: "airport" as const },
  { label: "Nearest Railway Station", value: "Joginder Nagar (120 km)", icon: "railway" as const },
  { label: "Local Transport", value: "Train, Buses, Bikes Available", icon: "transport" as const },
  { label: "Languages Spoken", value: "Hindi, English, Pahadi", icon: "language" as const },
  { label: "Permits Required", value: "Rohtang Pass Permit (If Applicable)", icon: "permit" as const },
  { label: "Currency", value: "Indian Rupee (INR)", icon: "currency" as const },
];

const packingItems = [
  { label: "Warm Clothes (Even in Summer)", icon: "clothes" as const },
  { label: "Sunglasses & Sunscreen", icon: "sunglasses" as const },
  { label: "Comfortable Shoes", icon: "shoes" as const },
  { label: "Power Bank & ID Proof", icon: "powerbank" as const },
  { label: "Personal Medicines", icon: "medicine" as const },
];
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
    src: "/images/destination/image-3.png",
    title: "Himalayan Valley",
    location: "Himachal Pradesh",
  },
  {
    src: "/images/destination/image-1.png",
    title: "Mountain Escape",
    location: "Manali",
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



const itinerary = [
  {
    day: 1,
    title: "Arrival in Manali & Local Sightseeing",
    description: "Arrive in Manali, check into your hotel and explore the local attractions.",
  },
  {
    day: 2,
    title: "Solang Valley & Atal Tunnel Excursion",
    description: "Enjoy the scenic beauty of Solang Valley and visit Atal Tunnel.",
  },
  {
    day: 3,
    title: "Rohtang Pass (If Permitted) & Adventure Activities",
    description: "Visit Rohtang Pass depending on weather and permit availability.",
  },
  {
    day: 4,
    title: "Old Manali, Hidimba Temple & Shopping",
    description: "Explore Old Manali, visit Hidimba Temple and enjoy local shopping.",
  },
  {
    day: 5,
    title: "Departure from Manali",
    description: "Check out from the hotel and depart from Manali.",
  },
];

const destination = {
  name: "Manali",
  subtitle: "The Valley of Snow & Adventure",
  heroImage: "/images/manali.png",
  rating: "4.8",
  reviews: "2.4k",
  packages: "120+ Packages",
  location: "Himachal Pradesh",
  description:
    "Discover breathtaking mountains, peaceful valleys and unforgettable adventures in one of India's most beautiful destinations.",
  weather: "10°C - 25°C",
  idealTrip: "4 - 6 Days",
  budget: "₹7000 - ₹15000",
};
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
 <DestinationHero destination={destination} />
      <SearachBar bottomPosition="2" />


      <section className="mx-auto w-[95%] px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">

          {/* ==================================================
        OVERVIEW
    =================================================== */}

          <div className="w-full lg:w-[45%]">

            <p className="text-xs font-medium uppercase tracking-wider text-primary">
              Discover
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-black">
              Overview
            </h2>

            <p className="mt-3 w-full text-[18px] leading-6 text-gray-400 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, esse ut officia cumque aspernatur provident pariatur nihil ea dicta voluptatibus tenetur, nobis labore totam. Eius deleniti accusamus sed rerum cupiditate!
              Quis omnis vero enim in eligendi dicta modi commodi earum deserunt nostrum odit mollitia, quae nobis molestiae provident fugiat cumque possimus id, voluptate perferendis soluta accusantium? Fugiat magnam nemo ducimus.
            </p>

            {/* Activities */}

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">

              {activities.map((activity) => {
                const Icon = activity.icon;

                return (
                  <div key={activity.title} className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>

                    <span className="text-base font-semibold text-gray-700 sm:text-lg">
                      {activity.title}
                    </span>
                  </div>
                );
              })}

            </div>
          </div>
          <div className="grid w-full grid-cols-12 gap-2.5 lg:w-[55%]">


            <button
              type="button"
              onClick={() => openGallery(0)}
              className="group relative col-span-12 h-65 overflow-hidden rounded-[20px] text-left sm:h-75 lg:col-span-7 lg:h-[305px]"
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



            <div className="col-span-12 grid grid-cols-2 gap-2.5 lg:col-span-5">

              {/* First / Large Right Image */}
              <button
                type="button"
                onClick={() => openGallery(1)}
                className="group relative col-span-2 h-[150px] overflow-hidden rounded-[20px] text-left"
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


              {/* Second + Third Images */}
              {gallery.slice(2, 4).map((image, index) => {
                const actualIndex = index + 2;

                return (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => openGallery(actualIndex)}
                    className="group relative h-[145px] overflow-hidden rounded-[20px] text-left"
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
              })}

            </div>


            {/* ==================================================
      BOTTOM IMAGES — 2 × 2
  ================================================== */}
            <div className="col-span-12 grid grid-cols-3 gap-2.5">

              {gallery.slice(3, 7).map((image, index) => {
                const actualIndex = index + 3;
                const isWide = index % 2 === 1;
                const isLast = index === 3;

                return (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => openGallery(actualIndex)}
                    className={`
                        group
                        relative
                        h-[110px]
                        overflow-hidden
                        rounded-[18px]
                        text-left
                        sm:h-[130px]
                        ${isWide ? "col-span-2" : "col-span-1"}
                      `}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      sizes={isWide ? "(max-width: 640px) 66vw, 40vw" : "(max-width: 640px) 33vw, 20vw"}
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
              })}

            </div>

          </div>
        </div>
      </section>

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
      <div className="flex flex-col gap-18 w-full justify-center items-center">
        <PackagesByDestination destination={"Manali"} />
        <ThingsToDo
          title="Best Experiences in the Mountains"
          activities={mountainActivities}
        />
        <div className="flex gap-5 w-full justify-center items-center mb-12">

          <Itinerary
            title="Itinerary"
            subtitle="Suggested 4 Nights / 5 Days"
            days={itinerary}
            onButtonClick={() => console.log("View detailed itinerary")}
          />
          <BestTimeToVisit
            months={bestTimeToVisit.months}
            seasons={bestTimeToVisit.seasons}
          />
        </div>
        <BestPackageByDestination />
        <TravelInformation
          destination="Manali"
          latitude={32.2432}
          longitude={77.1892}
          travelInfo={travelInfo}
          packingItems={packingItems}
        />
        <WeatherForecast
          destination="Manali"
          latitude={32.2432}
          longitude={77.1892}
        />
        <BlogSection/>
        <Memories />
      </div>
    </main>
  );
}