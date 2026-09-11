"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import { useState } from "react";


// ========================================
// TYPES
// ========================================

interface TravelStory {
    id: number;
    title: string;
    description: string;
    image: string;
    href: string;
}


// ========================================
// STORIES DATA
// ========================================

const stories: TravelStory[] = [
    {
        id: 1,
        title: "10 Must – Visit Places in Europe for First-Time Travelers",
        description:
            "Planning your first European trip? Explore iconic cities, cultural highlights, and travel trips to...",
        image: "/images/story3.png",
        href: "/travel-stories/europe-first-time-travelers",
    },
    {
        id: 2,
        title: "10 Must – Visit Places in Europe for First-Time Travelers",
        description:
            "Planning your first European trip? Explore iconic cities, cultural highlights, and travel trips to...",
        image: "/images/story2.png",
        href: "/travel-stories/europe-first-time-travelers",
    },
    {
        id: 3,
        title: "Hidden Travel Gems You’ll Love in Southeast Asia",
        description:
            "Go beyond the popular spots and uncover lesser-known destinations filled with natu...",
        image: "/images/story1.png",
        href: "/travel-stories/southeast-asia-gems",
    },

];



export default function TravelStories() {
    const [api, setApi] = useState<CarouselApi>();
const router = useRouter();

    return (
        <section className="w-full px-6 py-10   ">

            <div className="mx-auto w-[95%]">


                <div className="mb-6 flex items-center justify-between">

                    <h2
                        className="
                            text-[24px]
                            font-medium
                            leading-tight
                            tracking-[-0.5px]
                            text-black
                            sm:text-[25px]
                        "
                    >
                        Read Our Traveler Stories
                    </h2>


                    <Button
                        variant="outline"
                        onClick={() => router.push("/travel-stories")}
                        className="
                            hidden
                            h-11
                            rounded-full
                            border-[#20BFAF]
                            px-5
                            text-[15px]
                            font-normal
                            text-[#20BFAF]
                            shadow-none
                            hover:bg-[#20BFAF]
                            hover:text-white
                            sm:flex
                            whitespace-nowrap
                        "
                    >
                        Read More
                        <ArrowUpRight className="h-5 w-5" />
                    </Button>

                </div>


                {/* ========================================
                    CAROUSEL
                ======================================== */}

                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >

                    <CarouselContent className="-ml-5">

                        {stories.map((story) => (

                            <CarouselItem
                                key={story.id}
                                className="
                                    basis-[90%]
                                    pl-5
                                    md:basis-1/2
                                    lg:basis-1/3
                                "
                            >

                                <article
                                    className="
                                        group
                                        flex
                                        h-full
                                        flex-col
                                        rounded-[24px]
                                        border
                                        border-gray-100
                                        bg-white
                                        p-4
                                        shadow-[0_2px_10px_rgba(0,0,0,0.08)]
                                        transition-all
                                        duration-300
                                     "
                                >

                                    {/* ========================================
                                        IMAGE
                                    ======================================== */}

                                    <Link
                                        href={story.href}
                                        className="
                                            relative
                                            block
                                            aspect-[400/267]
                                            w-full
                                            overflow-hidden
                                            rounded-[20px]
                                        "
                                    >

                                        <Image
                                            src={story.image}
                                            alt={story.title}
                                            fill
                                            className="
                                                object-cover
                                                transition-transform
                                                duration-500
                                                group-hover:scale-105
                                            "
                                            sizes="
                                                (max-width: 768px) 90vw,
                                                (max-width: 1024px) 50vw,
                                                33vw
                                            "
                                        />

                                    </Link>


                                    {/* ========================================
                                        CONTENT
                                    ======================================== */}

                                    <div className="flex flex-1 flex-col pt-4">

                                        {/* Title */}

                                        <Link href={story.href}>

                                            <h3
                                                className="
                                                    line-clamp-2
                                                    text-[20px]
                                                    font-medium
                                                    leading-[25px]
                                                    tracking-[-0.3px]
                                                    text-black
                                                    transition-colors
                                                    duration-200
                                                    group-hover:text-[#20BFAF]
                                                "
                                            >
                                                {story.title}
                                            </h3>

                                        </Link>


                                        {/* Description */}

                                        <p
                                            className="
                                                mt-2
                                                line-clamp-2
                                                text-[16px]
                                                font-normal
                                                leading-[20px]
                                                text-[#A7ADB8]
                                            "
                                        >
                                            {story.description}
                                        </p>


                                        {/* ========================================
                                            READ MORE
                                        ======================================== */}

                                        <Link
                                            href={story.href}
                                            className="
                                                mt-auto
                                                flex
                                                items-center
                                                gap-2
                                                pt-5
                                                text-[15px]
                                                font-semibold
                                                text-black
                                            "
                                        >

                                            <span
                                                className="
                                                    flex
                                                    h-6
                                                    w-6
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-[#20BFAF]
                                                    text-white
                                                    transition-transform
                                                    duration-300
                                                    group-hover:scale-110
                                                "
                                            >
                                                <ArrowUpRight className="h-3.5 w-3.5" />
                                            </span>

                                            <span>
                                                Read More
                                            </span>

                                        </Link>

                                    </div>

                                </article>

                            </CarouselItem>

                        ))}

                    </CarouselContent>

                </Carousel>


                {/* ========================================
                    CAROUSEL CONTROLS
                ======================================== */}

                <div className="mt-4 flex justify-end">

                    <div className="flex items-center gap-2">

                        {/* Previous */}

                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => api?.scrollPrev()}
                            className="
                                h-9
                                w-9
                                rounded-full
                                border-gray-200
                                bg-[#F7F8FA]
                                text-[#7380A4]
                                shadow-none
                                transition-all
                                duration-200
                                hover:border-[#20BFAF]
                                hover:bg-[#20BFAF]
                                hover:text-white
                            "
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>


                        {/* Next */}

                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => api?.scrollNext()}
                            className="
                                h-9
                                w-9
                                rounded-full
                                border-gray-200
                                bg-[#F7F8FA]
                                text-[#7380A4]
                                shadow-none
                                transition-all
                                duration-200
                                hover:border-[#20BFAF]
                                hover:bg-[#20BFAF]
                                hover:text-white
                            "
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>

                    </div>

                </div>

            </div>

        </section>
    );
}