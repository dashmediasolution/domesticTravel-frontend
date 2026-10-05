"use client";

import Image from "next/image";
import {
  CalendarDays,
  MapPin,
  Star,
} from "lucide-react";

interface DestinationHeroProps {
  imageUrl: string;
  destination: string;
  subtitle?: string;
  description?: string;
  idealTrip?: string;
  budget?: string;
  location?: string;
  rating?: string | number;
  reviews?: string | number;
  packagesCount?: string | number;
  weather?: string;
  duration?: string
}

export default function DestinationHero({
  imageUrl,
  destination,
  subtitle,
  description,
  idealTrip,
  budget,
  location,
  rating,
  reviews,
  packagesCount,
  weather,
  duration
}: DestinationHeroProps) {
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
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={destination || "Destination"}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gray-300" />
      )}

      {/* ==================================================
          OVERLAY
      ================================================== */}

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

      {/* ==================================================
          CONTENT
      ================================================== */}

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
            max-w-[70%]
            flex-col
            gap-0.5
            text-white
          "
        >
          {/* ==================================================
              DESTINATION NAME
          ================================================== */}

          <h1
            className="
              w-full
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
            {destination}
          </h1>

          {/* ==================================================
              SUBTITLE
          ================================================== */}

          {subtitle && (
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
              {subtitle}
            </p>
          )}

          {/* ==================================================
              RATING / PACKAGES / LOCATION
          ================================================== */}

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

            {rating !== undefined && rating !== null && (
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="
                        h-3.5
                        w-3.5
                        fill-primary
                        text-primary
                        sm:h-4
                        sm:w-4
                        md:h-5
                        md:w-5
                      "
                    />
                  ))}
                </div>

                <span className="font-medium">
                  {rating}
                </span>

                {reviews !== undefined &&
                  reviews !== null && (
                    <span className="text-white/70">
                      ({reviews})
                    </span>
                  )}
              </div>
            )}

            {/* Packages */}

            {packagesCount !== undefined &&
              packagesCount !== null && (
                <>
                  {rating !== undefined &&
                    rating !== null && (
                      <span className="text-white/40">
                        |
                      </span>
                    )}

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
                      {packagesCount}
                    </span>
                  </div>
                </>
              )}

            {/* Location */}

            {location && (
              <>
                {(rating !== undefined &&
                  rating !== null) ||
                  (packagesCount !== undefined &&
                    packagesCount !== null) ? (
                  <span className="text-white/40">
                    |
                  </span>
                ) : null}

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

                  <span>{location}</span>
                </div>
              </>
            )}
          </div>

          {/* ==================================================
              DESCRIPTION
          ================================================== */}

          {description && (
            <p
              className="
            mt-2
            line-clamp-2
            overflow-hidden
            text-[12px]
            leading-[18px]
            text-white/80
            sm:mt-3
            sm:line-clamp-3
            sm:max-w-[600px]
            sm:text-sm
            sm:leading-6
            md:text-base
            md:leading-6
            lg:text-[17px]
        "
            >
              {description}
            </p>
          )}

          {/* ==================================================
              INFO CARDS
          ================================================== */}

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
              label="Location"
              value={destination}
            />

            <InfoCard
              label="Weather"
              value={weather}
            />

            <InfoCard
              label="Ideal Trip"
              value={idealTrip}
            />

            <InfoCard
              label="Budget"
              value={budget}
            />
            <InfoCard
              label="duration"
              value={duration}
            />
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
  value?: string;
}) {
  if (!value) {
    return null;
  }

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
