"use client";

import Image from "next/image";
import { BusFront, MessageCircle } from "lucide-react";

interface TravelHelpBannerProps {
    title: string;
    description: string;
    image: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

export function TravelHelpBanner({
    title,
    description,
    image,
    buttonText = "Contact Us",
    onButtonClick,
}: TravelHelpBannerProps) {
    return (
        <section className="w-full   mb-12">
            <div className="relative mx-auto w-full max-w-[95%] overflow-hidden rounded-xl sm:rounded-2xl">
                {/* Background Image */}
                <Image
                    src={image}
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
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
          via-black/30
          via-30%
          to-transparent
        "
      />

                {/* Content */}
                <div className="relative z-10 flex min-h-[150px] items-center px-4 py-5 sm:min-h-[170px] sm:px-7 sm:py-6 lg:min-h-[185px] lg:px-8">
                    <div className="flex w-full items-center gap-3 sm:gap-5 lg:gap-6">
                        {/* Icon */}
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white sm:size-14 lg:size-16">
                            <BusFront className="size-6 text-[#167C8C] sm:size-7 lg:size-8" />
                        </div>

                        {/* Text */}
                        <div className="min-w-0 flex-1">
                            <h2 className="text-base font-bold text-white sm:text-xl lg:text-2xl">
                                {title}
                            </h2>

                            <p className="mt-1 max-w-xl text-[11px] leading-relaxed text-white/75 sm:text-xs lg:text-[16px]">
                                {description}
                            </p>
                        </div>

                        {/* Button */}
                        <button
                            type="button"
                            onClick={onButtonClick}
                            className="hidden shrink-0 items-center gap-1.5 rounded-full cursor-pointer bg-primary px-4 py-2 text-[10px] font-semibold text-white transition-colors hover:bg-primary sm:flex sm:px-5 sm:py-2.5 sm:text-xs"
                        >
                            <MessageCircle className="size-3.5 sm:size-4" />
                            {buttonText}
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <button
                        type="button"
                        onClick={onButtonClick}
                        className="absolute bottom-3 right-4 flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-[9px] font-semibold text-[#00383B] transition-colors hover:bg-primary  sm:hidden"
                    >
                        <MessageCircle className="size-3" />
                        {buttonText}
                    </button>
                </div>
            </div>
        </section>
    );
}