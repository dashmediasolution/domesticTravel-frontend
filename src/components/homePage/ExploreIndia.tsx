"use client";

import { useState } from "react";


import {
    Headphones,
    MapPin,
    MapPinned,
    Tags,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";



const features = [
    {
        title: "Top Destinations",
        description: "Handpicked places to visit",
        icon: MapPin,
    },
    {
        title: "Best Price Guarantee",
        description: "We ensure you the best price",
        icon: Tags,
    },
    {
        title: "Local Experiences",
        description: "Authentic local experiences",
        icon: MapPinned,
    },
    {
        title: "24 / 7 Support",
        description: "We are always here to help",
        icon: Headphones,
    },
];

 
 
export default function ExploreIndia() {

    const [selectedCountry, setSelectedCountry] =
        useState<string | null>(null);


    return (
        <section className="w-full bg-white px-6 py-12 sm:px-8 lg:px-12 lg:py-16">

            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-[1344px]
                    grid-cols-1
                    items-center
                    gap-10
                    lg:grid-cols-[0.85fr_1.55fr_0.9fr]
                    lg:gap-8
                "
            >

                {/* ==========================================
                    LEFT CONTENT
                =========================================== */}

                <div className="z-10">

                    <p
                        className="
                            text-[17px]
                            font-normal
                            tracking-[-0.2px]
                            text-[#20BFAF]
                        "
                    >
                        EXPLORE INDIA
                    </p>


                    <h2
                        className="
                            mt-4
                            max-w-[330px]
                            text-[44px]
                            font-medium
                            leading-[1.08]
                            tracking-[-1.5px]
                            text-black
                            sm:text-[48px]
                            lg:text-[50px]
                        "
                    >
                        Explore India
                        <br />
                        on Map
                    </h2>


                    <p
                        className="
                            mt-3
                            max-w-[390px]
                            text-[20px]
                            font-normal
                            leading-[30px]
                            text-[#A7ADB8]
                        "
                    >
                        Hover over a state to discover top
                        destinations, attractions and
                        experiences.
                    </p>


                    <Button

                        className="
                            mt-5
                            h-9
                            rounded-full
                            bg-[#2FC2B0]
                            px-5
                            text-[14px]
                            font-medium
                            text-white
                            shadow-none
                            hover:bg-[#25AD9D]
                        "
                    >
                        <Link href="/explore-map">
                            Explore Map
                        </Link>
                    </Button>

                </div>


                {/* ==========================================
                    ACTUAL WORLD MAP
                =========================================== */}

               <div className="relative h-[400px] w-full">
    <Image
        src="/images/world map.png"
        alt="Wander India travel map"
        fill
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
        className="object-contain cursor-pointer"
    />
</div>

                {/* ==========================================
                    RIGHT FEATURES CARD
                =========================================== */}

                <Card
                    className="
                        w-full
                        rounded-[24px]
                        border-none
                        bg-white
                        p-6
                        shadow-[0_2px_15px_rgba(0,0,0,0.10)]
                        lg:p-7
                    "
                >

                    <div className="flex flex-col gap-5">

                        {features.map((feature) => {

                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            text-[#20BFAF]
                                        "
                                    >
                                        <Icon
                                            className="h-8 w-8"
                                            strokeWidth={1.8}
                                        />
                                    </div>


                                    <div className="min-w-0">

                                        <h3
                                            className="
                                                text-[18px]
                                                font-medium
                                                leading-[22px]
                                                tracking-[-0.3px]
                                                text-black
                                            "
                                        >
                                            {feature.title}
                                        </h3>


                                        <p
                                            className="
                                                mt-1
                                                text-[16px]
                                                font-normal
                                                leading-[20px]
                                                text-[#A7ADB8]
                                            "
                                        >
                                            {feature.description}
                                        </p>

                                    </div>

                                </div>
                            );

                        })}

                    </div>

                </Card>

            </div>

        </section>
    );
}