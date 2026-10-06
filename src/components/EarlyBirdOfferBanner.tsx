"use client";

import {
    CalendarDays,
    Clock3,
    MapPin,
    Users,
} from "lucide-react";

type EarlyBirdOfferBannerProps = {
    title?: string | null;
    badgeText?: string | null;

    saveAmount?: number | null;
    discount?: number | null;

    validTill?: string | null;

    packageName?: string | null;
    duration?: string | null;
    location?: string | null;
    groupSize?: string | null;
};

function formatPrice(
    price: number | null | undefined
) {
    if (price == null) {
        return "";
    }

    return `₹${Number(price).toLocaleString("en-IN")}`;
}

function formatDate(
    date: string | null | undefined
) {
    if (!date) {
        return "";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return "";
    }

    return parsedDate.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }
    );
}

export default function EarlyBirdOfferBanner({
    title = "Limited Time Offer",
    badgeText = "Book Early & Save",
    saveAmount,
    discount,
    validTill,
    packageName,
    duration,
    location,
    groupSize,
}: EarlyBirdOfferBannerProps) {
    const formattedDate =
        formatDate(validTill);

    const savingsText =
        saveAmount != null
            ? formatPrice(saveAmount)
            : discount != null
              ? `${discount}%`
              : null;

    return (
        <section className="flex w-full items-center justify-center px-2 py-2 sm:px-4">
            <div className="relative mx-auto flex min-h-[90px] w-full max-w-[1500px] items-center overflow-hidden rounded-[14px] border border-[#E6F2F1] bg-[#F5FCFB] px-3 shadow-[0_2px_12px_rgba(0,70,75,0.04)] sm:min-h-[98px] sm:px-5 lg:min-h-[105px] lg:px-7">

                {/* LEFT */}
                <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-4">
                    <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#E7F5F3] sm:h-[50px] sm:w-[50px]">
                        <Clock3 className="h-[24px] w-[24px] text-[#00636A] sm:h-[28px] sm:w-[28px]" />
                    </div>

                    <div className="hidden flex-col sm:flex">
                        <span className="text-[14px] font-bold leading-tight text-[#00636A] lg:text-[18px]">
                            {title}
                        </span>

                        {badgeText && (
                            <span className="mt-1.5 text-[11px] font-medium text-[#5E8587] lg:text-[13px]">
                                {badgeText}
                            </span>
                        )}
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="mx-3 hidden h-[60px] w-px bg-[#DCEBEA] sm:mx-5 sm:block lg:mx-7" />

                {/* PACKAGE INFO */}
                {(packageName ||
                    duration ||
                    location) && (
                    <div className="hidden min-w-0 shrink-0 flex-col gap-2 md:flex lg:min-w-[230px]">
                        {packageName && (
                            <span className="max-w-[230px] truncate text-[14px] font-bold text-[#005D65] lg:text-[17px]">
                                {packageName}
                            </span>
                        )}

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10px] text-[#5E8587] lg:text-[12px]">
                            {location && (
                                <span className="flex items-center gap-1.5">
                                    <MapPin className="h-[13px] w-[13px] text-[#00636A]" />
                                    {location}
                                </span>
                            )}

                            {duration && (
                                <span className="flex items-center gap-1.5">
                                    <Clock3 className="h-[13px] w-[13px] text-[#00636A]" />
                                    {duration}
                                </span>
                            )}
                        </div>

                        {groupSize && (
                            <span className="flex items-center gap-1.5 text-[10px] font-medium text-[#5E8587] lg:text-[12px]">
                                <Users className="h-[13px] w-[13px] text-[#00636A]" />
                                {groupSize}
                            </span>
                        )}
                    </div>
                )}

                {/* DIVIDER */}
                {(packageName ||
                    duration ||
                    location) && (
                    <div className="mx-4 hidden h-[60px] w-px bg-[#DCEBEA] md:block lg:mx-6" />
                )}

                {/* SAVINGS */}
                <div className="flex min-w-0 flex-1 items-center justify-center">
                    {savingsText ? (
                        <div className="relative flex h-[68px] w-[165px] rotate-[-2deg] items-center justify-center sm:h-[74px] sm:w-[185px]">
                            <div className="absolute inset-[4px] rounded-[45%] bg-[#FFC928] [clip-path:polygon(4%_20%,12%_8%,24%_12%,36%_3%,50%_9%,63%_3%,76%_10%,90%_5%,98%_19%,94%_35%,100%_50%,94%_65%,98%_82%,88%_91%,76%_87%,63%_98%,50%_91%,36%_98%,24%_90%,11%_94%,4%_81%,8%_65%,0%_50%,7%_35%)]" />

                            <div className="relative z-10 flex flex-col gap-1 text-center">
                                <p className="text-[9px] font-semibold leading-[10px] text-[#00606A] sm:text-[10px] md:text-[11px]">
                                    Save Up To
                                </p>

                                <p className="text-[26px] font-bold leading-[27px] text-[#005D65] sm:text-[30px]">
                                    {savingsText}
                                </p>

                                <p className="text-[8px] leading-[9px] text-[#00606A] sm:text-[9px] md:text-[10px]">
                                    {discount != null &&
                                    saveAmount != null
                                        ? `${discount}% OFF`
                                        : "per person"}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center">
                            <p className="text-[13px] font-semibold text-[#00636A] sm:text-[15px]">
                                Early Bird Savings
                            </p>

                            <p className="mt-1 text-[10px] text-[#5E8587] sm:text-[12px]">
                                Book early and save more
                            </p>
                        </div>
                    )}
                </div>

                {/* DIVIDER */}
                {formattedDate && (
                    <div className="mx-3 hidden h-[60px] w-px bg-[#DCEBEA] sm:mx-5 sm:block lg:mx-6" />
                )}

                {/* VALID TILL */}
                {formattedDate && (
                    <div className="hidden shrink-0 items-center gap-3 sm:flex">
                        <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#E7F5F3] lg:h-[48px] lg:w-[48px]">
                            <CalendarDays className="h-[23px] w-[23px] text-[#00636A] lg:h-[25px] lg:w-[25px]" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] font-bold leading-[14px] text-[#00606A] lg:text-[15px]">
                                Book Before
                            </span>

                            <span className="text-[16px] font-extrabold leading-[19px] text-[#005D65] lg:text-[19px]">
                                {formattedDate}
                            </span>

                            <span className="text-[9px] leading-[10px] text-[#6D9294] lg:text-[10px]">
                                Limited period
                            </span>
                        </div>
                    </div>
                )}

                {/* MOBILE DATE */}
                {formattedDate && (
                    <div className="ml-2 flex shrink-0 items-center gap-1.5 sm:hidden">
                        <CalendarDays className="h-[18px] w-[18px] text-[#00636A]" />

                        <div className="flex flex-col">
                            <span className="text-[9px] font-semibold leading-none text-[#5E8587]">
                                Book before
                            </span>

                            <span className="mt-1.5 text-[11px] font-bold leading-none text-[#005D65]">
                                {formattedDate}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}