"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    CalendarDays,
    Car,
    Clock3,
    MapPin,
    Star,
    Utensils,
    IndianRupeeIcon
} from "lucide-react";

interface PackageHeroSectionProps {
    imageUrl: string;
    destination: string;
    subtitle?: string;
    description?: string;
    duration?: string;
    idealTrip?: string;
    budget?: string;
    location?: string;
    rating?: string | number;
    reviews?: string | number;
    packagesCount?: string | number;
    weather?: string;
    offerPrice?: string | number;
    originalPrice?: string | number;
    buttonText?: string;
    buttonHref?: string;
    id?:string
}

export default function PackageHeroSection({
    imageUrl,
    destination,
    subtitle,
    id,
    description,
    duration,
    idealTrip,
    budget,
    location,
    rating,
    reviews,
    packagesCount,
    weather,
    offerPrice,
    originalPrice,
    buttonText = "Book Now",
    buttonHref = "#",
}: PackageHeroSectionProps) {

    const pathname = usePathname();
    const path =  pathname.split("/")[1]
      return (
        <section className="relative h-[460px] w-full overflow-hidden sm:h-[430px] md:h-[500px] lg:h-[640px]">
            {/* Background */}
            {imageUrl ? (
                <Image
                    src={imageUrl}
                    alt={destination || "Travel destination"}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            ) : (
                <div className="absolute inset-0 bg-gray-800" />
            )}

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
            <div className="relative z-10 mx-auto flex h-full w-[94%] max-w-[1400px] items-center sm:w-[92%]">
                <div className="max-w-full text-white  flex gap-2 flex-col ">

                    {/* Package Badge */}
                    {path === "offers" && 
                    <div className="mb-2 inline-flex items-center w-fit rounded-full bg-[#2FC2B0] px-2.5 py-1 text-sm font-semibold uppercase tracking-wide text-white shadow-sm sm:text-xs md:text-sm ">
                      Offer Package
                    </div> } 

                    {/* Destination */}
                    <h1 className="font-(--font-bebas-neue) text-[48px] font-bold uppercase leading-[0.82] tracking-[0.04em] sm:text-[66px] md:text-[82px] lg:text-[100px]">
                        {destination}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className="mt-1 font-serif text-[18px] font-semibold italic leading-tight text-[#FFD84D] sm:text-[22px] md:text-[26px]">
                            {subtitle}
                        </p>
                    )}

                    {/* Description */}
                    {description && (
                        <p className="mt-1.5 max-w-[570px] text-[13px] leading-4 text-white/80 sm:mt-2 sm:text-sm sm:leading-6 md:text-lg">
                            {description}
                        </p>
                    )}

                    {/* Package Information */}
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[8px] text-white sm:mt-3 sm:gap-x-3 sm:text-[10px] md:text-[11px]">

                        {duration && (
                            <div className="flex items-center gap-1">
                                <Clock3 className="size-3 text-primary sm:size-3.5 md:size-5" />
                                <span className="text-sm">{duration}</span>
                            </div>
                        )}

                        {duration && idealTrip && (
                            <span className="text-white/40">|</span>
                        )}

                        {idealTrip && (
                            <div className="flex items-center gap-1">
                                <CalendarDays className="size-3 text-primary sm:size-3.5 md:size-5" />
                                <span className="text-sm">{idealTrip}</span>
                            </div>
                        )}

                        {idealTrip && location && (
                            <span className="text-white/40">|</span>
                        )}

                        {location && (
                            <div className="flex items-center gap-1">
                                <MapPin className="size-3 text-primary sm:size-3.5 md:size-5" />
                                <span className="text-sm">{location}</span>
                            </div>
                        )}

                        {location && packagesCount && (
                            <span className="text-white/40">|</span>
                        )}



                        {rating !== undefined &&
                            rating !== null && (
                                <>
                                    <span className="text-white/40">|</span>

                                    <div className="flex items-center gap-1">
                                        <Star className="size-3 text-primary sm:size-3.5 md:size-5" />

                                        <span className="text-sm">
                                            {rating}
                                        </span>

                                        {reviews !== undefined &&
                                            reviews !== null && (
                                                <span className="text-white/60 text-sm">
                                                    ({reviews})
                                                </span>
                                            )}
                                    </div>
                                </>
                            )}
                    </div>

                    {/* Included Information */}
                    <div className="flex flex-wrap items-center gap-3 text-[8px] text-white/80 sm:text-[9px] md:text-[10px]">
                         



                        {originalPrice && offerPrice == undefined  && (
                            <>
                                <span className="text-white/30">
                                    |
                                </span>

                                <span className="text-xl flex justify-center font-bold items-center ">
                                    <IndianRupeeIcon className="size-5" />   {originalPrice}
                                </span>
                            </>
                        )}
                    </div>

                    {/* Price + CTA */}
                    {(offerPrice !== undefined ||
                        buttonHref) && (
                            <div className="mt-2.5 flex flex-wrap items-end gap-3 sm:mt-3">

                                {offerPrice !== undefined && (
                                    <div>
                                        <p className="text-[8px] text-white/70 sm:text-[9px] md:text-[14px]">
                                            From
                                        </p>

                                        <div className="flex items-baseline gap-1.5">
                                            <span className="text-lg font-bold leading-none text-[#2FC2B0] sm:text-xl md:text-2xl">
                                                {typeof offerPrice ===
                                                    "number"
                                                    ? `₹${offerPrice.toLocaleString(
                                                        "en-IN"
                                                    )}`
                                                    : offerPrice}
                                            </span>

                                            <span className="text-[8px] text-white/80 sm:text-[9px] md:text-[14px]">
                                                per person
                                            </span>

                                            {originalPrice && (
                                                <span className="text-[8px] text-white line-through sm:text-[9px] md:text-lg">
                                                    {typeof originalPrice ===
                                                        "number"
                                                        ? `₹${originalPrice.toLocaleString(
                                                            "en-IN"
                                                        )}`
                                                        : originalPrice}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )}

                            </div>
                        )}
                                <a
                                    href={`tel:${987654321}`}
                                    className="
                                        rounded-md
                                        bg-[#2FC2B0]
                                        px-3
                                        w-fit
                                        py-1.5
                                        text-[8px]
                                        font-semibold
                                        text-white
                                        transition-colors
                                        hover:bg-[#25ad9d]
                                        sm:px-4
                                        sm:py-2
                                        sm:text-md
                                        md:text-lg
                                    "
                                >
                                    Call Now
                                </a>
                </div>
            </div>
        </section>
    );
}