"use client";

import { Clock3, CalendarDays } from "lucide-react";

import { useEarlyBirdCountdown } from "@/hooks/useEarlyBirdCountdown";

function CountdownBox({
    value,
    label,
}: {
    value: number;
    label: string;
}) {
    return (
        <div className="flex h-[42px] w-[42px] flex-col items-center justify-center rounded-[8px] bg-[#FFF7D8] sm:h-[48px] sm:w-[48px]">
            <span className="text-[15px] font-bold leading-[16px] text-[#005D65] sm:text-[17px]">
                {String(value).padStart(2, "0")}
            </span>

            <span className="mt-[2px] text-[6px] font-medium leading-[7px] text-[#5D8587] sm:text-[7px]">
                {label}
            </span>
        </div>
    );
}

export default function EarlyBirdOfferBanner() {
    const {
        days,
        hours,
        minutes,
        seconds,
    } = useEarlyBirdCountdown();

    return (
        <section className="flex w-full items-center justify-center px-2 py-2 sm:px-4">
            <div className="relative mx-auto flex min-h-[74px] w-full max-w-[95%] items-center overflow-hidden rounded-[14px] border border-[#E6F2F1] bg-[#F5FCFB] px-3 shadow-[0_2px_12px_rgba(0,70,75,0.04)] sm:min-h-[82px] sm:px-5 lg:h-[86px] lg:px-7">

                {/* LEFT */}
                <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-4">
                    <Clock3 className="h-[27px] w-[27px] text-[#00636A] sm:h-[32px] sm:w-[32px]" />

                    <div className="hidden flex-col leading-none sm:flex">
                        <span className="text-[10px] font-semibold text-[#00636A] lg:text-lg">
                            Limited Time Offer
                        </span>

                        <span className="mt-[4px] text-[9px] font-medium text-[#5E8587] lg:text-sm">
                            Ends in
                        </span>
                    </div>
                </div>

                {/* COUNTDOWN */}
                <div className="ml-3 flex shrink-0 items-center gap-1 sm:ml-5 sm:gap-2">
                    <CountdownBox
                        value={days}
                        label="Days"
                    />

                    <CountdownBox
                        value={hours}
                        label="Hours"
                    />

                    <CountdownBox
                        value={minutes}
                        label="Mins"
                    />

                    <CountdownBox
                        value={seconds}
                        label="Secs"
                    />
                </div>

                {/* DIVIDER */}
                <div className="mx-3 hidden h-[45px] w-px bg-[#DCEBEA] sm:mx-5 sm:block lg:mx-7" />

                {/* SAVINGS */}
                <div className="flex min-w-0 flex-1 items-center justify-center">
                    <div className="relative flex h-[57px] w-[145px] rotate-[-2deg] items-center justify-center sm:h-[62px] sm:w-[165px]">
                        <div className="absolute inset-[4px] rounded-[45%] bg-[#FFC928] [clip-path:polygon(4%_20%,12%_8%,24%_12%,36%_3%,50%_9%,63%_3%,76%_10%,90%_5%,98%_19%,94%_35%,100%_50%,94%_65%,98%_82%,88%_91%,76%_87%,63%_98%,50%_91%,36%_98%,24%_90%,11%_94%,4%_81%,8%_65%,0%_50%,7%_35%)]" />

                        <div className="relative z-10 flex flex-col gap-1 text-center">
                            <p className="text-[7px] font-semibold leading-[8px] text-[#00606A] sm:text-[8px] md:text-sm">
                                Save Up To
                            </p>

                            <p className="text-[22px] font-bold leading-[23px] text-[#005D65] sm:text-[25px]">
                                ₹5,000
                            </p>

                            <p className="text-[6px] leading-[7px] text-[#00606A] sm:text-[7px] md:text-sm">
                                per person
                            </p>
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="mx-3 hidden h-[45px] w-px bg-[#DCEBEA] sm:mx-5 sm:block lg:mx-5" />

                {/* BOOK BEFORE */}
                <div className="hidden shrink-0 items-center gap-3 md:flex">
                    <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-[#E7F5F3]">
                        <CalendarDays className="h-[19px] w-[19px] text-[#00636A]" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-semibold leading-[11px] text-[#00606A] lg:text-sm">
                            Book Before
                        </span>

                        <span className="mt-[2px] text-[11px] font-bold leading-[13px] text-[#005D65] lg:text-sm">
                            10 Oct 2026
                        </span>

                        <span className="mt-[2px] text-[7px] leading-[8px] text-[#6D9294] lg:text-sm">
                            (Limited Period)
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}