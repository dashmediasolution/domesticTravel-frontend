"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Star,
    Bookmark,
    IndianRupee,
    ArrowUpRight,
} from "lucide-react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Button } from "../ui/button";

const featured = [
        {
        destination: "Manali",
        textColor: "#ffffff",
        startingPrice: "1,75,000",
        rating: "4.7",
        imageUrl: "/images/manali1.png",
    },
    {
        destination: "RISHIKESH",
        textColor: "#FAAE2B",
        startingPrice: "1,75,000",
        rating: "4.7",
        imageUrl: "/images/featuredImages/image_1.png",
    },
    {
        destination: "LEH-LADAKH",
        textColor: "#FFFFFF",
        startingPrice: "1,75,000",
        rating: "4.7",
        imageUrl: "/images/featuredImages/image_2.png",
    },
    {
        destination: "Andaman",
        textColor: "#FFFFFF",
        startingPrice: "1,75,000",
        rating: "4.7",
        imageUrl: "/images/featuredImages/image_3.png",
    },
    {
        destination: "MEGHALAYA",
        textColor: "#153E3C",
        startingPrice: "1,75,000",
        rating: "4.7",
        imageUrl: "/images/featuredImages/image_4.png",
    },
    {
        destination: "SOMNATH",
        textColor: "#FFF6E5",
        startingPrice: "1,75,000",
        rating: "4.7",
        imageUrl: "/images/featuredImages/image_5.png",
    },
    {
        destination: "KERALA",
        textColor: "#FFFFFF",
        startingPrice: "1,75,000",
        rating: "4.7",
        imageUrl: "/images/featuredImages/image_6.png",
    },
    {
        destination: "UDAIPUR",
        textColor: "#FFF8EC",
        startingPrice: "1,75,000",
        rating: "4.7",
        imageUrl: "/images/featuredImages/image_7.png",
    },
    {
        destination: "KASHMIR",
        textColor: "#FFFFFF",
        startingPrice: "1,75,000",
        rating: "4.7",
        imageUrl: "/images/featuredImages/image_8.png",
    },
];

export function FeaturedDestination() {
    const [state, setState] = useState("india");
    const router = useRouter()
    return (
        <section className="w-full px-3 sm:px-5 md:px-6 lg:px-8 relative bottom-8 md:bottom-3">
            <div className="mx-auto w-full max-w-[1440px]">

                {/* ================= HEADER ================= */}

                <div className="mb-5 flex w-full items-center justify-between gap-3 sm:mb-6 md:mb-7">
                    <h2
                        className="
                        text-[20px]
                        font-medium
                        tracking-[-0.5px]
                        text-black
                        sm:text-[22px]
                        md:text-[24px]
                        lg:text-[25px]
                        "
                    >
                        Featured Destinations
                    </h2>

                    <Button
                        type="button"
                        variant="outline"
                        className="
              hidden
              h-9
              shrink-0
              rounded-full
              border-primary
              px-4
              text-xs
              font-normal
              text-primary
              hover:bg-primary
              hover:text-white
              sm:flex
              md:h-10
              md:px-5
              md:text-sm
              lg:h-11
              lg:text-[15px]
            "
                    >
                        View all destinations
                        <ArrowUpRight className="ml-1.5 h-4 w-4 md:h-5 md:w-5" />
                    </Button>
                </div>

                {/* ================= CAROUSEL ================= */}

                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                    }}
                    className="w-full"
                >
                    <div className="w-full overflow-hidden rounded-2xl">
                        <CarouselContent className="-ml-2 sm:-ml-2.5 md:-ml-3 lg:-ml-4">
                            {featured.map((item) => (
                                <CarouselItem
                                    key={item.destination}
                                    className="basis-auto pl-2 sm:pl-2.5 md:pl-3 lg:pl-4"
                                onClick={()=>{router.push("/manali")}} >
                                    <Card
                                        className="
                                            group
                                            relative
                                            m-0
                                            aspect-[2/3]
                                            w-[180px]
                                            cursor-pointer
                                            overflow-hidden
                                            rounded-[18px]
                                            border-0
                                            p-0
                                            shadow-none

                                            sm:w-[200px]
                                            sm:rounded-[20px]

                                            md:w-[220px]
                                            md:rounded-[22px]

                                            lg:w-[275px]
                                            lg:rounded-[24px]
                                        "
                                    >
                                        <CardContent className="relative h-full w-full p-0">

                                            {/* IMAGE */}

                                            <Image
                                                src={item.imageUrl}
                                                alt={item.destination}
                                                fill
                                                className="
                                                    object-cover
                                                    transition-transform
                                                    duration-700
                                                    ease-out
                                                    group-hover:scale-[1.04]
                                                "
                                                sizes="(max-width: 639px) 230px, (max-width: 767px) 235px, (max-width: 1023px) 250px, 275px"
                                            />

                                            {/* OVERLAY */}

                                            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/20" />

                                            {/* ================= RATING ================= */}

                                            <div
                                                className="
                          absolute
                          left-3
                          top-3
                          flex
                          items-center
                          gap-1
                          text-white
                          sm:left-4
                          sm:top-4
                        "
                                            >
                                                <Star
                                                    className="
                            h-5
                            w-5
                            stroke-white
                            transition-all
                            duration-300
                            hover:fill-amber-300
                            hover:stroke-amber-300
                            sm:h-6
                            sm:w-6
                          "
                                                />

                                                <span className="text-xs font-medium sm:text-sm">
                                                    {item.rating}
                                                </span>

                                                <span className="text-[10px] opacity-70 sm:text-xs">
                                                    / 5
                                                </span>
                                            </div>

                                            {/* ================= BOOKMARK ================= */}

                                            <button
                                                type="button"
                                                aria-label={`Bookmark ${item.destination}`}
                                                className="
                          absolute
                          right-3
                          top-3
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          text-white
                          transition-all
                          duration-300
                          hover:scale-110
                          sm:right-4
                          sm:top-4
                          sm:h-8
                          sm:w-8
                        "
                                            >
                                                <Bookmark
                                                    className="
                            h-5
                            w-5
                            transition-all
                            duration-300
                            hover:fill-primary
                            hover:stroke-primary
                            sm:h-6
                            sm:w-6
                          "
                                                />
                                            </button>

                                            {/* ================= DESTINATION NAME ================= */}

                                            <div
                                                className="
                          absolute
                          left-3
                          right-3
                          top-[21%]
                          flex
                          justify-center
                          sm:left-4
                          sm:right-4
                          md:top-[22%]
                        "
                                            >
                                                <h3
                                                    style={{
                                                        color: item.textColor,
                                                    }}
                                                    className="
                            max-w-full
                            border-b-2
                            border-transparent
                            text-center
                            text-[20px]
                            font-bold
                            leading-tight
                            tracking-[0.08em]
                            transition-all
                            duration-300
                            group-hover:border-current
                            
                            sm:text-[24px]

                            md:text-[27px]

                            lg:text-3xl
                          "
                                                >
                                                    {item.destination}
                                                </h3>
                                            </div>

                                            {/* ================= HOVER PRICE ================= */}
                                            <div
                                                className="
                                                absolute
                                                bottom-0
                                                left-0
                                                flex
                                                w-full
                                                flex-col
                                                items-center
                                                justify-center
                                                bg-linear-to-t
                                                from-black/85
                                                via-black/40
                                                to-transparent
                                                px-3
                                                pb-4
                                                pt-10
                                                text-white

                                                sm:px-5
                                                sm:pb-5
                                                sm:pt-12

                                                md:translate-y-full
                                                md:transition-transform
                                                md:duration-500
                                                md:ease-out
                                                md:group-hover:translate-y-0
                                            "
                                            >
                                                <p
                                                    className="
                                                    text-center
                                                    text-base
                                                    font-semibold
                                                    tracking-[0.12em]

                                                    sm:text-lg
                                                    md:text-xl
                                                "
                                                >
                                                    Starting at
                                                </p>

                                                <div className="mt-1 flex items-center justify-center gap-0.5 sm:gap-1">
                                                    <IndianRupee className="h-4 w-4 sm:h-5 sm:w-5" />

                                                    <span
                                                        className="
                                                    text-base
                                                    font-semibold

                                                    sm:text-lg
                                                    md:text-xl
                                            "
                                                    >
                                                        {item.startingPrice}
                                                    </span>
                                                </div>

                                                <MdOutlineArrowOutward
                                                    className="
                                                    mt-2
                                                    h-6!
                                                    w-6!
                                                    rounded-full
                                                    bg-primary
                                                    p-1

                                                    sm:h-7!
                                                    sm:w-7!
                                                "
                                                />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </div>

                    {/* ================= BOTTOM CONTROLS ================= */}

                    <div
                        className="
              mt-4
              flex
              w-full
              items-center      
              justify-between
              gap-3
              sm:mt-5
            "
                    >
                        {/* DOMESTIC / INTERNATIONAL */}

                        <div
                            className="
                flex
                min-w-0
                items-center
                rounded-full
                border
                border-gray-200
                bg-[#F8F8F8]
                p-1
              "
                        >
                            <button
                                type="button"
                                onClick={() => setState("india")}
                                className={`
                  whitespace-nowrap
                  rounded-full
                  px-3
                  py-1.5
                  text-[11px]
                  font-medium
                  transition-all
                  duration-300

                  sm:px-4
                  sm:py-2
                  sm:text-xs

                  md:px-5
                  md:text-[14px]

                  lg:text-[15px]

                  ${state === "india"
                                        ? "bg-primary text-white shadow-sm"
                                        : "text-[#7380A4]/70 hover:text-[#7380A4]"
                                    }
                `}
                            >
                                Domestic
                            </button>

                            <button
                                type="button"
                                onClick={() => setState("international")}
                                className={`
                  whitespace-nowrap
                  rounded-full
                  px-3
                  py-1.5
                  text-[11px]
                  font-medium
                  transition-all
                  duration-300

                  sm:px-4
                  sm:py-2
                  sm:text-xs

                  md:px-5
                  md:text-[14px]

                  lg:text-[15px]

                  ${state === "international"
                                        ? "bg-primary text-white shadow-sm"
                                        : "text-[#7380A4]/70 hover:text-[#7380A4]"
                                    }
                `}
                            >
                                International
                            </button>
                        </div>

                        {/* ARROWS */}

                        <div className="flex shrink-0 gap-2 sm:gap-3">
                            <CarouselPrevious
                                className="
                  static
                  m-0
                  translate-y-0
                  size-8
                  rounded-full
                  border-0
                  bg-[#F6F7F9]
                  text-[#7B84A6]
                  shadow-none
                  hover:bg-primary
                  hover:text-white

                  sm:size-9
                "
                            />

                            <CarouselNext
                                className="
                  static
                  m-0
                  translate-y-0
                  size-8
                  rounded-full
                  border-0
                  bg-[#F6F7F9]
                  text-[#7B84A6]
                  shadow-none
                  hover:bg-primary
                  hover:text-white

                  sm:size-9
                "
                            />
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}