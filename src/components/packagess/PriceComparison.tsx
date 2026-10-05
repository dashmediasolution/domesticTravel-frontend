"use client";

import {
    Check,
    ChevronRight,
    X,
} from "lucide-react";

export default function PriceComparison({
    title = "Price Comparison",
    buttonText = "See Your Savings!",

    normalBooking,
    packageBooking,

    currency = "₹",
    priceSuffix = "/person",

    vsText = "VS",

    normalLabel = "Regular Booking",
    packageLabel = "WANDER-INDIA Package",

    normalFeatures = [],
    packageFeatures = [],

    normalTotalLabel = "Total Price",
    packageTotalLabel = "Total Price After Discount",

    savingsLabel = "You Save",

    onSavingsClick,
}: any) {
    const normalPrice = Number(normalBooking?.price || 0);
    const packagePrice = Number(packageBooking?.price || 0);
    const savings = Math.max(normalPrice - packagePrice, 0);

    const displaySavings = Number(
        packageBooking?.savings ?? savings
    );

    const formatPrice = (price: number) => {
        return price.toLocaleString("en-IN");
    };

    return (
        <section className="w-full py-10 sm:py-12 lg:py-16">
            <div className="mx-auto w-[94%]">
                {/* Header */}
                <div className="mb-5 flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-[#111111] sm:text-3xl">
                        {title}
                    </h2>

                    {onSavingsClick ? (
                        <button
                            type="button"
                            onClick={onSavingsClick}
                            className="flex shrink-0 items-center gap-2 rounded-full border border-[#2FC2B0] px-4 py-2.5 text-sm font-medium text-[#2FC2B0] transition-colors duration-200 hover:bg-[#2FC2B0] hover:text-white sm:px-5"
                        >
                            {buttonText}

                            <ChevronRight className="h-4 w-4" />
                        </button>
                    ) : (
                        <div className="flex shrink-0 items-center gap-2 rounded-full border border-[#2FC2B0] px-4 py-2.5 text-sm font-medium text-[#2FC2B0] sm:px-5">
                            {buttonText}

                            <ChevronRight className="h-4 w-4" />
                        </div>
                    )}
                </div>

                {/* Comparison */}
                <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                    {/* Regular Booking */}
                    <div className="rounded-[24px] border border-[#d1d1d1] bg-[#fafafa] p-6 sm:p-7 lg:p-8">
                        <p className="text-sm font-semibold text-[#111111] sm:text-base">
                            {normalLabel}
                        </p>

                        <div className="mt-2 flex items-end gap-1">
                            <span className="text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
                                {currency}
                                {formatPrice(normalPrice)}
                            </span>

                            <span className="mb-1 text-sm text-gray-500 sm:text-base">
                                {priceSuffix}
                            </span>
                        </div>

                        <div className="mt-6 space-y-3">
                            {normalFeatures.map(
                                (feature: any, index: number) => (
                                    <div
                                        key={
                                            feature?.id ||
                                            feature?.title ||
                                            index
                                        }
                                        className="flex items-start gap-3"
                                    >
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-500">
                                            <X className="h-3.5 w-3.5 text-red-500" />
                                        </span>

                                        <span className="text-sm leading-6 text-[#222222] sm:text-[15px]">
                                            {typeof feature === "string"
                                                ? feature
                                                : feature?.title}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>

                        <div className="mt-7">
                            <p className="text-sm text-[#222222]">
                                {normalTotalLabel}
                            </p>

                            <p className="mt-1 text-2xl font-bold text-[#111111] sm:text-3xl">
                                {currency}
                                {formatPrice(normalPrice)}
                            </p>
                        </div>
                    </div>

                    {/* VS */}
                    <div className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[10px] border-white bg-black text-xs font-bold text-white md:flex">
                        {vsText}
                    </div>

                    {/* WANDER-INDIA Package */}
                    <div className="relative rounded-[24px] border-2 border-[#2FC2B0] bg-white p-6 sm:p-7 lg:p-8">
                        <p className="text-sm font-semibold text-[#111111] sm:text-base">
                            {packageLabel}
                        </p>

                        <div className="mt-2 flex items-end gap-1">
                            <span className="text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
                                {currency}
                                {formatPrice(packagePrice)}
                            </span>

                            <span className="mb-1 text-sm text-gray-500 sm:text-base">
                                {priceSuffix}
                            </span>
                        </div>

                        <div className="mt-6 space-y-3">
                            {packageFeatures.map(
                                (feature: any, index: number) => (
                                    <div
                                        key={
                                            feature?.id ||
                                            feature?.title ||
                                            index
                                        }
                                        className="flex items-start gap-3"
                                    >
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#2FC2B0]">
                                            <Check className="h-3.5 w-3.5 text-[#2FC2B0]" />
                                        </span>

                                        <span className="text-sm leading-6 text-[#222222] sm:text-[15px]">
                                            {typeof feature === "string"
                                                ? feature
                                                : feature?.title}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>

                        <div className="mt-7">
                            <p className="text-sm text-[#2FC2B0]">
                                {packageTotalLabel}
                            </p>

                            <p className="mt-1 text-2xl font-bold text-[#2FC2B0] sm:text-3xl">
                                {currency}
                                {formatPrice(packagePrice)}
                            </p>
                        </div>

                        {displaySavings > 0 && (
                            <div className="mt-5 flex justify-end">
                                <div className="rounded-lg bg-[#FDBB2D] px-4 py-2.5 text-sm font-semibold text-[#111111] sm:px-5">
                                    {savingsLabel}{" "}
                                    {currency}
                                    {formatPrice(displaySavings)}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}