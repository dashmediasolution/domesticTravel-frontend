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
        <section className="w-full px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <h2 className="mb-8   text-3xl tracking-wide text-[#153E3C] font-semibold  ">
                    Browse by Category
                </h2>

                {/* Categories */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
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
                                    cursor-pointer
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-2
                                    px-4
                                    py-5
                                    text-sm
                                    font-semibold
                                    shadow-[0_0_7px_rgba(0,0,0,0.12)]                                 
                                    transition-all
                                    duration-300
                                    rounded-tl-[24px] rounded-br-[24px]
                                    ease-in-out
                                    ${isActive
                                        ? "  bg-primary text-white"
                                        : "  bg-white text-black  hover:bg-primary hover:text-white"
                                    }
                                `}
                            >
                                <Icon
                                    className={`
                                        h-8
                                        w-8
                                        transition-all
                                        duration-300
                                        ${isActive
                                            ? "text-white"
                                            : "text-primary group-hover:text-white"
                                        }
                                    `}
                                />

                                <span className="text-xl font-normal">{category.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}