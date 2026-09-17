"use client";

import Link from "next/link";
import {
  Waves,
  Mountain,
  Sun,
  Droplets,
  Compass,
  Tent,
  Church,
  Trees,
} from "lucide-react";

const categories = [
  { name: "Beaches", icon: Waves },
  { name: "Mountains", icon: Mountain },
  { name: "Desert", icon: Sun },
  { name: "Lakes", icon: Droplets },
  { name: "Adventure", icon: Compass },
  { name: "Camping", icon: Tent },
  { name: "Spiritual", icon: Church },
  { name: "Nature", icon: Trees },
];

export default function BrowseByCategory() {
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

            const slug = category.name
              .toLowerCase()
              .replace(/\s+/g, "-");

            return (
              <Link
                key={category.name}
                href={`/category/${slug}`}
                className="
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
                  bg-white
                  px-1
                  py-2
                  text-center
                  text-black
                  shadow-[0_0_7px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-300
                  ease-in-out
                  hover:bg-primary
                  hover:text-white

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
                "
              >
                <Icon
                  className="
                    h-5
                    w-5
                    shrink-0
                    text-primary
                    transition-all
                    duration-300
                    group-hover:text-white

                    sm:h-6
                    sm:w-6

                    md:h-7
                    md:w-7

                    lg:h-8
                    lg:w-8
                  "
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}