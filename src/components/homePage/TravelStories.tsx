 
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";

interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    featuredImage?: {
        url?: string | null;
    } | null;
}

export default function TravelStories() {
    const [api, setApi] = useState<CarouselApi>();
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchBlogs = async () => {
        try {
            const response = await fetch(
                "/api/blogs/search-blogs?page=1&limit=6"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch blogs");
            }

            const result = await response.json();

            setBlogs(result?.data?.blogs?.slice(0, 6) || []);
        } catch (error) {
            console.error("Failed to fetch blogs:", error);
            setBlogs([]);
        } finally {
            setLoading(false);
        }
    };

    fetchBlogs();
}, []);
    if (!loading && blogs.length === 0) {
        return null;
    }

    return (
        <section className="w-full px-6 py-10">
            <div className="mx-auto w-[95%]">
                {/* Header */}
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
                </div>

                {/* Loading */}
                {loading ? (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="
                                    overflow-hidden
                                    rounded-[24px]
                                    border
                                    border-gray-100
                                    bg-white
                                    p-4
                                    shadow-[0_2px_10px_rgba(0,0,0,0.08)]
                                "
                            >
                                <div className="aspect-[400/267] w-full animate-pulse rounded-[20px] bg-gray-200" />

                                <div className="pt-4">
                                    <div className="h-6 w-4/5 animate-pulse rounded bg-gray-200" />

                                    <div className="mt-3 h-4 w-full animate-pulse rounded bg-gray-100" />

                                    <div className="mt-2 h-4 w-3/4 animate-pulse rounded bg-gray-100" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        {/* Carousel */}
                        <Carousel
                            setApi={setApi}
                            opts={{
                                align: "start",
                                loop: blogs.length > 3,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-5">
                                {blogs.map((blog) => {
                                    const image = blog.featuredImage?.url;

                                    return (
                                        <CarouselItem
                                            key={blog.id}
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
                                                {/* Image */}
                                                <Link
                                                    href={`/blogs/${blog.slug}`}
                                                    className="
                                                        relative
                                                        block
                                                        aspect-[400/267]
                                                        w-full
                                                        overflow-hidden
                                                        rounded-[20px]
                                                    "
                                                >
                                                    {image ? (
                                                        <Image
                                                            src={image}
                                                            alt={blog.title}
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
                                                    ) : (
                                                        <div className="absolute inset-0 flex items-center justify-center bg-[#00383B]">
                                                            <span className="px-4 text-center text-sm text-white">
                                                                Domestic Travel
                                                            </span>
                                                        </div>
                                                    )}
                                                </Link>

                                                {/* Content */}
                                                <div className="flex flex-1 flex-col pt-4">
                                                    {/* Title */}
                                                    <Link href={`/blogs/${blog.slug}`}>
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
                                                            {blog.title}
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
                                                        {blog.excerpt ||
                                                            "Discover travel guides, destinations, tips and experiences from Domestic Travel."}
                                                    </p>

                                                    {/* Read More */}
                                                    <Link
                                                        href={`/blogs/${blog.slug}`}
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

                                                        <span>Read More</span>
                                                    </Link>
                                                </div>
                                            </article>
                                        </CarouselItem>
                                    );
                                })}
                            </CarouselContent>
                        </Carousel>

                        {/* Carousel Controls */}
                        {blogs.length > 1 && (
                            <div className="mt-4 flex justify-end">
                                <div className="flex items-center gap-2">
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
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
 