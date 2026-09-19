
"use client";

import Image from "next/image";
import Link from "next/link";

import {
  CalendarDays,
  MapPin,
  Play,
  Star,
} from "lucide-react";
import { usePathname } from "next/navigation";

interface Destination {
  name: string;
  subtitle: string;
  heroImage: string;
  rating: string | number;
  reviews: string | number;
  packagesCount?: string | number;
  location: string;
  description: string;
  weather: string;
  idealTrip: string;
  budget: string;
}

interface DestinationHeroProps {
  destination: Destination;
}

export default function DestinationHero({
  destination,
}: DestinationHeroProps) {
  const pathname = usePathname();

  return (
    <section
        className="
          relative
          h-[50vh]
          min-h-[400px]
          w-full
          overflow-hidden
          sm:h-[58vh]
          sm:min-h-[560px]
          md:h-[70vh]
          md:min-h-[600px]
          lg:h-[85vh]
          lg:min-h-[650px]
        "
    >
      {/* Background */}

      <Image
        src={destination.heroImage}
        alt={destination.name}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          z-10
          bg-linear-to-tr
          from-black/50
          via-black/20
          via-30%
          to-transparent
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          h-full
          w-[94%]
          max-w-[1400px]
          items-center
          pb-7
          top-5
          sm:w-[92%]
          sm:pb-9
          md:pb-0
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[700px]
            flex-col
            gap-0.5
            text-white
          "
        >
          {/* Destination Name */}

          <h1
            className="
              w-fit
              font-(--font-bebas-neue)
              text-[56px]
              font-bold
              uppercase
              leading-[0.85]
              tracking-[0.04em]
              sm:text-[76px]
              md:text-[96px]
              lg:text-[120px]
              lg:leading-[0.95]
              lg:tracking-[0.1em]
            "
          >
            {destination.name}
          </h1>

          {/* Subtitle */}

          <p
            className="
              mt-1
              w-full
              text-[13px]
              font-medium
              leading-5
              text-white/95
              sm:text-base
              md:text-lg
              lg:text-xl
            "
          >
            {destination.subtitle}
          </p>

          {/* Rating / Packages / Location */}

          <div
            className="
              mt-2.5
              flex
              flex-wrap
              items-center
              gap-x-2.5
              gap-y-1.5
              text-xs
              sm:mt-3
              sm:gap-x-3
              sm:text-sm
              md:gap-x-4
            "
          >
            {/* Rating */}

            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="
                      h-3.5
                      w-3.5
                      fill-amber-400
                      text-amber-400
                      sm:h-4
                      sm:w-4
                      md:h-5
                      md:w-5
                    "
                  />
                ))}
              </div>

              <span className="font-medium">
                {destination.rating}
              </span>

              <span className="text-white/70">
                ({destination.reviews})
              </span>
            </div>


            {/* Packages */}
            {
              destination.packagesCount &&
              <>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-1">
                <CalendarDays
                  className="
                  h-4
                  w-4
                  text-primary
                  sm:h-4.5
                  sm:w-4.5
                  md:h-5
                  md:w-5
                "
                />

                <span>
                  {destination.packagesCount}
                </span>
              </div>
              </>
            }

            <span className="text-white/40">|</span>

            {/* Location */}

            <div className="flex items-center gap-1">
              <MapPin
                className="
                  h-4
                  w-4
                  text-primary
                  sm:h-4.5
                  sm:w-4.5
                  md:h-5
                  md:w-5
                "
              />

              <span>
                {destination.location}
              </span>
            </div>
          </div>

          {/* Description */}

          <p
            className="
              mt-2
              w-full
              text-[12px]
              leading-[18px]
              text-white/80
              sm:mt-3
              sm:max-w-[600px]
              sm:text-sm
              sm:leading-6
              md:text-base
              md:leading-7
              lg:text-[20px]
            "
          >
            {destination.description}
          </p>

          {/* Info Cards */}

          <div
            className="
              mt-3
              grid
              w-full
              max-w-[520px]
              grid-cols-2
              gap-2
              sm:mt-4
              sm:max-w-[650px]
              sm:grid-cols-4
              sm:gap-3
              md:max-w-[760px]
              md:gap-4
            "
          >
            <InfoCard
              label="State"
              value={destination.name}
            />

            <InfoCard
              label="Weather"
              value={destination.weather}
            />

            <InfoCard
              label="Ideal Trip"
              value={destination.idealTrip}
            />

            <InfoCard
              label="Budget"
              value={destination.budget}
            />
          </div>

          {/* Actions */}

          <div
            className="
              mt-3
              flex
              flex-wrap
              items-center
              gap-2.5
              sm:mt-4
              sm:gap-3
              md:mt-5
            "
          >
           {/* {!pathname.startsWith("/package") && (
  <Link
    href={`/packages/${destination.name
      .toLowerCase()
      .replace(/\s+/g, "-")}`}
    className="
      rounded-full
      bg-primary
      px-4
      py-2
      text-[11px]
      font-medium
      text-white
      transition
      hover:opacity-90
      sm:px-5
      sm:py-2.5
      sm:text-sm
      md:text-base
    "
  >
    Explore Packages
  </Link>
)} */}

 
 
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        hidden
        min-h-[40px]
        min-w-0
        items-center
        gap-1.5
        rounded-lg
        bg-white
        px-2
        py-1.5
        md:flex
        sm:min-h-[50px]
        sm:gap-2
        sm:px-2.5
        sm:py-2
        md:min-h-[55px]
        md:px-3
      "
    >
      <MapPin
        className="
          h-4
          w-4
          shrink-0
          text-primary
          sm:h-4.5
          sm:w-4.5
          md:h-5
          md:w-5
        "
      />

      <div className="min-w-0">
        <p
          className="
            text-[9px]
            leading-4
            text-[#ACB1B7]
            sm:text-[11px]
            sm:leading-4
            md:text-xs
          "
        >
          {label}
        </p>

        <p
          className="
            truncate
            text-[10px]
            leading-4
            text-black
            sm:text-xs
            md:text-sm
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
}

