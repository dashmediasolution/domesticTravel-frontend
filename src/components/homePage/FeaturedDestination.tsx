'use client'
import Image from "next/image";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Bookmark, IndianRupee, ArrowUpRight } from "lucide-react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Button } from "../ui/button";
const featured = [
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
        destination: `Andaman `,
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
    const [state, setState] = useState("india")
    return (
        <section className="w-full px-4 sm:px-6   flex justify-between flex-col rounded-[24px]">
            <div className="mb-7 mx-auto flex justify-between w-[95%]   " >
                <h2
                    className="
                            text-[24px]
                            font-medium
                            tracking-[-0.5px]
                            text-black
                            sm:text-[25px]
                        "
                >
                    Featured Destinations

                </h2>


                <Button type="button" variant="outline" className="   hidden h-11 rounded-full border-primary px-5 text-[15px]
                            font-normal text-primary hover:bg-primary   hover:text-white sm:flex">
                 View all destinations
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>

            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="mx-auto w-[94%] flex justify-center     flex-col  rounded-[24px]"
            >
                <div className="overflow-hidden rounded-2xl">
  <CarouselContent className="-ml-4">
    {featured.map((item) => (
      <CarouselItem
        key={item.destination}
        className="basis-auto pl-4"
      >
        <Card
          className="
            group
            m-0
            h-103.25
            w-68.75
            cursor-pointer
            overflow-hidden
            rounded-[24px]
            border-0
            p-0
            shadow-none
          "
        >
          <CardContent className="relative h-full w-full p-0">
            <Image
              src={item.imageUrl}
              alt={item.destination}
              fill
              priority
              className="object-cover"
              sizes="275px"
            />

            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/20" />

            <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-white">
              <Star className="h-6 w-6 stroke-white transition-all duration-300 hover:fill-amber-300 hover:stroke-amber-300" />
              <span>{item.rating}</span>
              <span className="text-xs opacity-70">/ 5</span>
            </div>

            <button
              type="button"
              aria-label={`Bookmark ${item.destination}`}
              className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full text-white transition-all duration-300 hover:scale-110"
            >
              <Bookmark className="h-6 w-6 transition-all duration-300 hover:fill-primary hover:stroke-primary" />
            </button>

            <div className="absolute left-5 right-5 top-[22%] flex justify-center">
              <h3
                style={{ color: item.textColor }}
                className="border-b-2 border-transparent text-center text-3xl font-bold tracking-wider transition-all duration-300 group-hover:border-current"
              >
                {item.destination}
              </h3>
            </div>

            <div className="absolute bottom-0 left-0 flex w-full translate-y-full flex-col items-center justify-center bg-linear-to-t from-black/80 via-black/30 to-transparent px-5 pb-4 pt-8 text-white transition-transform duration-500 ease-out group-hover:translate-y-0">
              <p className="text-center text-xl font-semibold tracking-widest">
                Starting at
              </p>

              <div className="mt-1 flex items-center justify-center gap-1">
                <IndianRupee className="h-5! w-5!" />
                <span className="text-xl font-semibold">
                  {item.startingPrice}
                </span>
              </div>

              <MdOutlineArrowOutward className="mt-2 h-7! w-7! rounded-full bg-primary p-1" />
            </div>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
</div>

                <div className="mt-5 flex justify-between gap-3">
                    <div
                        className="
                            flex
                            items-center
                            rounded-full
                            border
                            border-gray-200
                            bg-[#F8F8F8]
                            p-1
                        "
                    >

                        {/* Domestic */}

                        <button
                            type="button"
                            onClick={() => {
                                setState("india");


                            }}
                            className={`
                                rounded-full
                                px-5
                                py-2
                                text-[15px]
                                font-medium
                                transition-all
                                duration-300
                                ${state === "india"
                                    ? "bg-primary text-white shadow-sm"
                                    : "text-[#7380A4]/70 hover:text-[#7380A4]"
                                }
                            `}
                        >
                            Domestic
                        </button>


                        {/* International */}

                        <button
                            type="button"
                            onClick={() => {
                                setState("international");


                            }}
                            className={`
                                rounded-full
                                px-5
                                py-2
                                text-[15px]
                                font-medium
                                transition-all
                                duration-300
                                ${state === "international"
                                    ? "bg-primary text-white shadow-sm"
                                    : "text-[#7380A4]/70 hover:text-[#7380A4]"
                                }
                            `}
                        >
                            International
                        </button>

                    </div>
                    <div className="flex gap-3 ">
                        <CarouselPrevious
                            className="
                            static
                            translate-y-0
                            text-[#7B84A6]
                            size-9
                            rounded-full
                            bg-[#F6F7F9]
                            hover:bg-primary
                            hover:text-white
                        "
                        />

                        <CarouselNext
                            className="
                            static
                            translate-y-0
                            size-9
                            rounded-full
                             text-[#7B84A6]
                            bg-[#F6F7F9]
                            hover:bg-primary
                            hover:text-white
                        "
                        /></div>
                </div>
            </Carousel>
        </section>
    );
}

