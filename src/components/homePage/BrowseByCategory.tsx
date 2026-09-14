"use client";

import { useState } from "react";
import {
    Waves,
    Landmark,
    Mountain,
    Sun,
    Droplets,
    Compass,
    Tent,
    Church,
    PawPrint,
    Heart,
    Trees,
    Palmtree,
} from "lucide-react";

const categories = [
    { name: "Beaches", icon: Waves },
    { name: "Heritage", icon: Landmark },
    { name: "Mountains", icon: Mountain },
    { name: "Desert", icon: Sun },
    { name: "Lakes", icon: Droplets },
    { name: "Adventure", icon: Compass },
    { name: "Camping", icon: Tent },
    { name: "Spiritual", icon: Church },
    { name: "Wildlife", icon: PawPrint },
    { name: "Honeymoon", icon: Heart },
    { name: "Nature", icon: Trees },
    { name: "Islands", icon: Palmtree },
];

export default function BrowseByCategory() {
    const [activeCategory, setActiveCategory] = useState("Beaches");

    return (
        <section
            className="
                w-full
                px-3
                md:py-8

                sm:px-5
                sm:py-10

                md:px-6
                md:py-12

                lg:px-8
                lg:py-14
            "
        >
            <div className="mx-auto w-full max-w-[1400px]">

                {/* Heading */}
                <h2
                    className="
                        mb-5
                        text-2xl
                        font-semibold
                        tracking-wide
                        text-[#153E3C]

                        sm:mb-6
                        sm:text-[26px]

                        md:mb-7
                        md:text-[28px]

                        lg:mb-8
                        lg:text-3xl
                    "
                >
                    Browse by Category
                </h2>

                {/* Categories */}
                <div
                    className="
                        grid
                        grid-cols-4
                        gap-2

                        sm:grid-cols-4
                        sm:gap-3

                        md:grid-cols-4
                        md:gap-4

                        lg:grid-cols-6
                        lg:gap-5
                    "
                >
                    {categories.map((category) => {
                        const Icon = category.icon;
                        const isActive =
                            activeCategory === category.name;

                        return (
                            <div
                                key={category.name}
                                onClick={() =>
                                    setActiveCategory(category.name)
                                }
                                className={`
                                    group
                                    flex
                                    min-h-[82px]
                                    cursor-pointer
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-1
                                    rounded-tl-[14px]
                                    rounded-br-[14px]
                                    px-1
                                    py-2
                                    text-center
                                    shadow-[0_0_7px_rgba(0,0,0,0.12)]
                                    transition-all
                                    duration-300
                                    ease-in-out

                                    sm:min-h-[100px]
                                    sm:gap-1.5
                                    sm:rounded-tl-[18px]
                                    sm:rounded-br-[18px]
                                    sm:px-2
                                    sm:py-3

                                    md:min-h-[120px]
                                    md:gap-2
                                    md:rounded-tl-[22px]
                                    md:rounded-br-[22px]

                                    lg:min-h-[140px]
                                    lg:rounded-tl-[24px]
                                    lg:rounded-br-[24px]

                                    ${
                                        isActive
                                            ? "bg-primary text-white"
                                            : "bg-white text-black hover:bg-primary hover:text-white"
                                    }
                                `}
                            >
                                <Icon
                                    className={`
                                        h-5
                                        w-5
                                        shrink-0
                                        transition-all
                                        duration-300

                                        sm:h-6
                                        sm:w-6

                                        md:h-7
                                        md:w-7

                                        lg:h-8
                                        lg:w-8

                                        ${
                                            isActive
                                                ? "text-white"
                                                : "text-primary group-hover:text-white"
                                        }
                                    `}
                                />

                                <span
                                    className="
                                        text-[10px]
                                        font-normal
                                        leading-tight

                                        sm:text-xs

                                        md:text-sm

                                        lg:text-xl
                                    "
                                >
                                    {category.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}