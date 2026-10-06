"use client";

import { useState } from "react";
import Image from "next/image";
import {
    CalendarDays,
    CheckCircle2,
    Clock3,
    Map,
    ShieldCheck,
    Utensils,
} from "lucide-react";

import BookingDialog from "../BookingDialog";

interface BookingCardProps {
    image: string;
    imageAlt?: string;
    title: string;
    days: string;
    nights: string;
    meals: string;
    sightseeing: string;
    price: number | string;
    priceLabel?: string;
    priceSuffix?: string;
    buttonText?: string;
    id?:string
    location?: string;
    description?: string;
    badge?: string;

    onBookNow?: () => void;

    freeCancellation?: string;
    cancellationDescription?: string;
    securePayment?: string;
    paymentDescription?: string;
    support?: string;
    supportDescription?: string;
    slug?:string
}

export default function BookingCard({
    image,
    imageAlt = "package",
    title,
    days,
    slug,
    nights,
    meals,
    sightseeing,
    price,
    priceLabel = "Price",
    priceSuffix = "per person",
    buttonText = "Book Now",
    id,
    location = "",
    description = "",
    badge,

    onBookNow,

    freeCancellation = "Free Cancellation",
    cancellationDescription = "48 hrs policy",
    securePayment = "Secure Payment",
    paymentDescription = "100% safe",
    support = "24/7 Support",
    supportDescription = "We're here to help",
}: BookingCardProps) {
    const [bookingOpen, setBookingOpen] = useState(false);

    const handleBookNow = () => {
        onBookNow?.();
        setBookingOpen(true);
    };
    return (
        <>
            <div className="w-full max-w-[380px] overflow-hidden rounded-[16px] border border-[#e5e8d9] bg-[#fffef4] shadow-sm">
                {/* Image */}
                <div className="relative mx-2 mt-2 h-[180px] overflow-hidden rounded-[12px] sm:h-[190px]">
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        sizes="380px"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-5 max-w-[75%]">
                        <h2 className="font-[cursive] text-[30px] leading-[0.95] text-white drop-shadow-md sm:text-[34px]">
                            {title}
                        </h2>
                    </div>

                    <div className="absolute bottom-3 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
                        <Map className="h-5 w-5 text-[#4c4c35]" />
                    </div>
                </div>

                {/* Package title */}
                <div className="px-2 pt-2">
                    <div className="inline-flex rounded-full px-4">
                        <span className="text-xs font-bold text-primary sm:text-sm md:text-lg">
                            {title} Package
                        </span>
                    </div>
                </div>

                {/* Trip information */}
                <div className="mx-2 mt-2 grid grid-cols-3 overflow-hidden rounded-xl border border-[#f0e9bc] bg-[#fffef4]">
                    <div className="flex min-h-[58px] items-center justify-center gap-2 border-r border-[#eee8c8] px-2">
                        <CalendarDays className="h-5 w-5 shrink-0 text-[#176b67]" />

                        <div>
                            <p className="text-[10px] font-medium text-[#176b67] sm:text-[11px]">
                                {days}
                            </p>

                            <p className="text-[9px] text-[#176b67] sm:text-[10px]">
                                {nights}
                            </p>
                        </div>
                    </div>

                    <div className="flex min-h-[58px] items-center justify-center gap-2 border-r border-[#eee8c8] px-2">
                        <Utensils className="h-5 w-5 shrink-0 text-[#176b67]" />

                        <div>
                            <p className="text-[10px] font-medium text-[#176b67] sm:text-[11px]">
                                Meals
                            </p>

                            <p className="text-[9px] text-[#176b67] sm:text-[10px]">
                                {meals}
                            </p>
                        </div>
                    </div>

                    <div className="flex min-h-[58px] items-center justify-center gap-2 px-2">
                        <Map className="h-5 w-5 shrink-0 text-[#176b67]" />

                        <div>
                            <p className="text-[10px] font-medium text-[#176b67] sm:text-[11px]">
                                Sightseeing
                            </p>

                            <p className="text-[9px] text-[#176b67] sm:text-[10px]">
                                {sightseeing}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Price + CTA */}
                <div className="flex items-end justify-between gap-3 px-3 pt-3">
                    <div>
                        <p className="text-[13px] font-medium text-[#176b67]">
                            {priceLabel}
                        </p>

                        <div className="flex items-end gap-1">
                            <span className="text-[30px] font-extrabold leading-none tracking-tight text-[#075d6b] sm:text-[34px]">
                                ₹{Number(price || 0).toLocaleString("en-IN")}
                            </span>

                            <span className="mb-0.5 text-[10px] font-medium text-gray-600">
                                /{priceSuffix}
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleBookNow}
                        className="
                            mb-0.5
                            flex
                            h-10
                            w-30
                            flex-nowrap
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            bg-primary
                            px-5
                            text-xs
                            font-bold
                            text-white
                            transition-all
                            duration-200
                            hover:bg-primary
                            sm:px-6
                        "
                    >
                        {buttonText}
                    </button>
                </div>

                {/* Trust points */}
                <div className="mt-4 grid grid-cols-3 border-t border-[#eee8c8] px-2 py-3">
                    <div className="flex items-center justify-center gap-1.5 border-r border-[#eee8c8] px-1">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#176b67]" />

                        <div>
                            <p className="text-[8px] font-semibold leading-tight text-[#176b67] sm:text-[9px] md:text-[12px]">
                                {freeCancellation}
                            </p>

                            <p className="mt-0.5 text-[7px] leading-tight text-gray-500 sm:text-[8px] md:text-[12px]">
                                {cancellationDescription}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 border-r border-[#eee8c8] px-1">
                        <ShieldCheck className="h-5 w-5 shrink-0 text-[#176b67]" />

                        <div>
                            <p className="text-[8px] font-semibold leading-tight text-[#176b67] sm:text-[9px] md:text-[12px]">
                                {securePayment}
                            </p>

                            <p className="mt-0.5 text-[7px] leading-tight text-gray-500 sm:text-[8px] md:text-[12px]">
                                {paymentDescription}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 px-1">
                        <Clock3 className="h-5 w-5 shrink-0 text-[#176b67]" />

                        <div>
                            <p className="text-[8px] font-semibold leading-tight text-[#176b67] sm:text-[9px] md:text-[12px]">
                                {support}
                            </p>

                            <p className="mt-0.5 text-[7px] leading-tight text-gray-500 sm:text-[8px] md:text-[12px]">
                                {supportDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Dialog */}
            <BookingDialog
                open={bookingOpen}
                onClose={() => setBookingOpen(false)}
                packageData={{
                    name: title,
                    image,
                    id,
                    slug,
                    location,
                    duration: days,
                    nights,
                    price: Number(price || 0),
                    description,
                    badge: badge || `${nights} / ${days}`,
                }}
            />
        </>
    );
}