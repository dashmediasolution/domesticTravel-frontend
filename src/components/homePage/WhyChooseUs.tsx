"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        "Exclusive Deals & Offers",
        "Exclusive Deals & Offers",
        "Exclusive Deals & Offers",
        "Exclusive Deals & Offers",
        "Exclusive Deals & Offers",
        "Exclusive Deals & Offers",
    ];

    return (
        <section className="w-full overflow-hidden bg-white p-5 sm:px-8 lg:px-12 ">
            <div
                className="
                    mx-auto
                    grid
                    w-[95%]
                    items-center
                    gap-10
                    lg:grid-cols-[1.05fr_0.95fr]
                    lg:gap-8
                    xl:gap-12
                "
            >
                {/* =====================================================
                    LEFT CONTENT
                ===================================================== */}

                <div className="w-full">
                    {/* Eyebrow */}
                    <h3
                        className="
                            text-[22px]
                            font-medium
                            leading-[1.2]
                            tracking-[-0.5px]
                            text-black
                            sm:text-[24px]
                            lg:text-[25px]
                        "
                    >
                        Why Choose Wander - India?
                    </h3>

                    {/* Main heading */}
                    <h2
                        className="
                            mt-6
                            max-w-[520px]
                            text-[36px]
                            font-medium
                            leading-[1.08]
                            tracking-[-1.5px]
                            text-black
                            sm:text-[42px]
                            lg:text-[46px]
                        "
                    >
                        Your Perfect Trip, Just a
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                        Tap Away
                    </h2>

                    {/* Description */}
                    <p
                        className="
                            mt-4
                            max-w-[600px]
                            text-[16px]
                            font-normal
                            leading-[23px]
                            text-[#A7ADB8]
                            sm:text-[18px]
                            sm:leading-[25px]
                        "
                    >
                        Plan, book and explore with ease. From handpicked
                        destinations to exclusive deals, we make your travel
                        dreams simple, secure and unforgettable.
                    </p>

                    {/* =================================================
                        FEATURES
                    ================================================= */}

                    <div
                        className="
                            mt-7
                            grid
                            grid-cols-1
                            gap-4
                            sm:grid-cols-2
                            sm:gap-5
                        "
                    >
                        {features.map((feature, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="
                                    group
                                    flex
                                    min-h-[72px]
                                    w-full
                                    items-center
                                    justify-between
                                    rounded-[15px]
                                    border
                                    border-[#2FC2B0]
                                    bg-white
                                    px-3
                                    py-3
                                    transition-all
                                    duration-300
                                    hover:bg-[#F5FFFD]
                                    hover:shadow-[0_6px_20px_rgba(47,194,176,0.12)]
                                "
                            >
                                {/* Icon + text */}
                                <div className="flex min-w-0 items-center gap-3">
                                    {/* Icon */}
                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#E8FFFB]
                                            transition-all
                                            duration-300
                                            group-hover:bg-[#2FC2B0]
                                        "
                                    >
                                        <Tag
                                            className="
                                                h-6
                                                w-6
                                                text-[#2FC2B0]
                                                transition-colors
                                                duration-300
                                                group-hover:text-white
                                            "
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    {/* Text */}
                                    <span
                                        className="
                                            truncate
                                            text-[14px]
                                            font-medium
                                            leading-tight
                                            text-black
                                            sm:text-[15px]
                                            lg:text-[16px]
                                        "
                                    >
                                        {feature}
                                    </span>
                                </div>

                                {/* Arrow */}
                                <ArrowRight
                                    className="
                                        ml-2
                                        h-5
                                        w-5
                                        shrink-0
                                        text-[#2FC2B0]
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                    strokeWidth={1.8}
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* =====================================================
                    RIGHT SIDE IMAGE
                ===================================================== */}

                <div
                    className="
    relative
    mx-auto
    h-[420px]
    w-full
    max-w-[600px]
    sm:h-[500px]
    lg:h-[540px]
    xl:h-[570px]
  "
                >
                    <Image
                        src="/images/phoneImage1.png"
                        alt="Wander India travel app"
                        fill
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}