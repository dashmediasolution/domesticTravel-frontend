
"use client";

import Image from "next/image";
import {
    CalendarCheck,
    CheckCircle2,
    Clock3,
    Flame,
    Map,
    Phone,
    ShieldCheck,
    UserRound,
} from "lucide-react";

type OfferCardProps = {
    image: string;
    imageAlt?: string;
    title: string;
    badge?:string
    originalPrice?: number | null;
    offerPrice?: number | null;
    saveAmount?: number | null;
    discount?: number | null;
    validTill?: string | Date | null;
    groupSize?: string | null;

    onClaim?: () => void;

    phoneNumber?: string;

    securePayment?: string;
    paymentDescription?: string;

    support?: string;
    supportDescription?: string;
};

export default function OfferCard({
    image,
    imageAlt = "Offer Package",
    title,
    badge,
    originalPrice,
    offerPrice,
    saveAmount,
    discount,
    validTill,
    groupSize,

    onClaim,

    phoneNumber = "+919876543210",

    securePayment = "Secure Booking",
    paymentDescription = "No Hidden Charges",

    support = "Instant Confirmation",
    supportDescription = "Quick & Easy",
}: OfferCardProps) {
    const formattedValidTill = validTill
        ? new Date(validTill).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
          })
        : "-";

    const finalPrice = offerPrice ?? originalPrice ?? 0;

    return (
        <div className="w-full max-w-[380px] overflow-hidden rounded-[16px] border border-[#e5e8d9] bg-[#fffef4] shadow-sm">

            {/* =====================================================
                IMAGE
            ====================================================== */}
            <div className="relative mx-2 mt-2 h-[200px] overflow-hidden rounded-[12px] sm:h-[210px]">

                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="380px"
                    className="object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* =================================================
                    OFFER BADGE
                ================================================== */}
                <div className="absolute left-4 top-3 flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[9px] font-bold text-white shadow-md sm:text-xs">
                    <Flame className="h-3.5 w-3.5 fill-white" />
                    {badge}
                </div>

                {/* Discount */}
                {discount != null && (
                    <div className="absolute right-4 top-3 rounded-full bg-white px-3 py-1.5 text-[10px] font-extrabold text-[#176b67] shadow-md sm:text-xs">
                        {discount}% OFF
                    </div>
                )}

            

                {/* Map */}
                <div className="absolute bottom-[82px] right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
                    <Map className="h-5 w-5 text-[#4c4c35]" />
                </div>

                {/* =================================================
                    INFORMATION OVERLAY
                ================================================== */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/55 px-3 py-2.5 backdrop-blur-[3px]">

                    <div className="grid grid-cols-2 gap-y-2">

                        {/* Valid Till */}
                        <div className="flex items-center gap-2 border-r border-white/20 pr-3">

                            <CalendarCheck className="h-4 w-4 shrink-0 text-white" />

                            <div className="min-w-0">
                                <p className="text-[8px] font-medium leading-tight text-white/65 sm:text-[9px]">
                                    Valid Till
                                </p>

                                <p className="text-[10px] font-semibold leading-tight text-white sm:text-[11px]">
                                    {formattedValidTill}
                                </p>
                            </div>

                        </div>

                        {/* Group Size */}
                        <div className="flex items-center gap-2 pl-3">

                            <UserRound className="h-4 w-4 shrink-0 text-white" />

                            <div className="min-w-0">
                                <p className="text-[8px] font-medium leading-tight text-white/65 sm:text-[9px]">
                                    Group Size
                                </p>

                                <p className="text-[10px] font-semibold leading-tight text-white sm:text-[11px]">
                                    {groupSize || "-"}
                                </p>
                            </div>

                        </div>

                        {/* Instant Confirmation */}
                        <div className="col-span-2 flex items-center justify-center gap-1.5 border-t border-white/20 pt-1.5">

                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-white" />

                            <span className="text-[9px] font-semibold text-white sm:text-[10px]">
                                Instant Confirmation
                            </span>

                        </div>

                    </div>

                </div>
            </div>

            {/* =====================================================
                TITLE
            ====================================================== */}
            <div className="px-2 pt-2">

                <div className="inline-flex rounded-full px-4">

                    <span className="text-xs font-bold text-primary sm:text-sm md:text-lg">
                        {title} 
                    </span>

                </div>

            </div>

            {/* =====================================================
                PRICE INFORMATION
            ====================================================== */}
            <div className="mx-2 mt-2 grid grid-cols-3 overflow-hidden rounded-xl border border-[#f0e9bc] bg-[#fffef4]">

                {/* Original Price */}
                <div className="flex min-h-[58px] items-center justify-center border-r border-[#eee8c8] px-2">

                    <div className="text-center">

                        <p className="text-[9px] font-medium text-[#176b67] sm:text-[10px] md:text-[12px]">
                            Original Price
                        </p>

                        <p className="mt-0.5 text-[10px] font-semibold text-gray-500 line-through sm:text-[11px] md:text-[15px]">
                            ₹
                            {Number(originalPrice ?? 0).toLocaleString(
                                "en-IN"
                            )}
                        </p>

                    </div>

                </div>

                {/* Offer Price */}
                <div className="flex min-h-[58px] items-center justify-center border-r border-[#eee8c8] px-2">

                    <div className="text-center">

                        <p className="text-[9px] font-medium text-[#176b67] sm:text-[10px] md:text-[12px]">
                            Offer Price
                        </p>

                        <p className="mt-0.5 text-[11px] font-extrabold text-[#075d6b] sm:text-xs md:text-[15px]">
                            ₹
                            {Number(finalPrice).toLocaleString(
                                "en-IN"
                            )}
                        </p>

                    </div>

                </div>

                {/* Saving */}
                <div className="flex min-h-[58px] items-center justify-center px-2">

                    <div className="text-center">

                        <p className="text-[9px] font-medium text-[#176b67] sm:text-[10px] md:text-[12px]">
                            You Save
                        </p>

                        <p className="mt-0.5 text-[10px] font-bold text-primary sm:text-[11px] md:text-[15px]">
                            ₹{Number(originalPrice)-Number(offerPrice)}
                        </p>

                    </div>

                </div>

            </div>

            {/* =====================================================
                PRICE + CTA
            ====================================================== */}
            <div className="flex items-end justify-between gap-3 px-3 pt-3">

                {/* Price */}
                <div>

                    <p className="text-[13px] font-medium text-[#176b67]">
                        Offer Price
                    </p>

                    <div className="flex items-end gap-1">

                        <span className="text-[30px] font-extrabold leading-none tracking-tight text-[#075d6b] sm:text-[34px]">
                            ₹
                            {Number(finalPrice).toLocaleString(
                                "en-IN"
                            )}
                        </span>

                        <span className="mb-0.5 text-[10px] font-medium text-gray-600">
                            /person
                        </span>

                    </div>

                </div>

                {/* Call */}
                <a
                    href={`tel:${phoneNumber}`}
                    onClick={onClaim}
                    className="mb-0.5 flex h-10 w-[125px] items-center justify-center gap-2 rounded-full bg-primary px-4 text-xs font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] sm:px-5"
                >
                    <Phone className="h-4 w-4" />
                    Call Now
                </a>

            </div>

            {/* =====================================================
                SAVINGS
            ====================================================== */}
            <div className="px-3 pt-2">

                <div className="inline-flex rounded-full bg-primary px-3 py-1.5 text-[10px] font-bold text-white sm:text-xs">

                    You Save ₹
                    {Number(saveAmount ?? 0).toLocaleString(
                        "en-IN"
                    )}

                    {discount != null && (
                        <> ({discount}% OFF)</>
                    )}

                </div>

            </div>

            {/* =====================================================
                TRUST POINTS
            ====================================================== */}
            <div className="mt-4 grid grid-cols-3 border-t border-[#eee8c8] px-2 py-3">

                {/* Secure */}
                <div className="flex items-center justify-center gap-1.5 border-r border-[#eee8c8] px-1">

                    <ShieldCheck className="h-5 w-5 shrink-0 text-[#176b67]" />

                    <div>

                        <p className="text-[8px] font-semibold leading-tight text-[#176b67] sm:text-[9px] md:text-[11px]">
                            {securePayment}
                        </p>

                        <p className="mt-0.5 text-[7px] leading-tight text-gray-500 sm:text-[8px] md:text-[10px]">
                            {paymentDescription}
                        </p>

                    </div>

                </div>

                {/* Confirmation */}
                <div className="flex items-center justify-center gap-1.5 border-r border-[#eee8c8] px-1">

                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#176b67]" />

                    <div>

                        <p className="text-[8px] font-semibold leading-tight text-[#176b67] sm:text-[9px] md:text-[11px]">
                            {support}
                        </p>

                        <p className="mt-0.5 text-[7px] leading-tight text-gray-500 sm:text-[8px] md:text-[10px]">
                            {supportDescription}
                        </p>

                    </div>

                </div>

                {/* Limited Offer */}
                <div className="flex items-center justify-center gap-1.5 px-1">

                    <Clock3 className="h-5 w-5 shrink-0 text-[#176b67]" />

                    <div>

                        <p className="text-[8px] font-semibold leading-tight text-[#176b67] sm:text-[9px] md:text-[11px]">
                            Limited Offer
                        </p>

                        <p className="mt-0.5 text-[7px] leading-tight text-gray-500 sm:text-[8px] md:text-[10px]">
                            Grab It Soon
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

