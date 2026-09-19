"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface Review {
    id: number;
    name: string;
    date: string;
    avatar: string;
    rating: number;
    review: string;
}

interface TravelersReviewsProps {
    reviews?: Review[];
    title?: string;
    className?: string;
}

const defaultReviews: Review[] = [
    {
        id: 1,
        name: "Ananya Sharma",
        date: "2 Days ago",
        avatar: "/images/reviews/ananya.png",
        rating: 5,
        review:
            "Manali is truly a paradise! The mountains, the vibe, the people - everything was perfect.",
    },
    {
        id: 2,
        name: "Rahul Mehta",
        date: "2 Days ago",
        avatar: "/images/reviews/rahul.png",
        rating: 5,
        review:
            "We had an amazing honeymoon in Manali. Every moment was so beautiful and memorable.",
    },
    {
        id: 3,
        name: "Jacqueline Fernan",
        date: "2 Days ago",
        avatar: "/images/reviews/jacqueline.png",
        rating: 5,
        review:
            "Adventure activities in Solang Valley were the highlight of our trip. Highly recommended!",
    },
    {
        id: 4,
        name: "Jacqueline Fernan",
        date: "2 Days ago",
        avatar: "/images/reviews/jacqueline.png",
        rating: 5,
        review:
            "Adventure activities in Solang Valley were the highlight of our trip. Highly recommended!",
    },
    {
        id: 5,
        name: "Riya Kapoor",
        date: "3 Days ago",
        avatar: "/images/reviews/riya.png",
        rating: 5,
        review:
            "The entire trip was well planned and the views were absolutely breathtaking.",
    },
    {
        id: 6,
        name: "Arjun Verma",
        date: "4 Days ago",
        avatar: "/images/reviews/arjun.png",
        rating: 5,
        review:
            "Loved every part of the Manali experience. The activities and stay were excellent.",
    },
    {
        id: 7,
        name: "Neha Singh",
        date: "5 Days ago",
        avatar: "/images/reviews/neha.png",
        rating: 5,
        review:
            "A wonderful trip with amazing scenery, great experiences and unforgettable memories.",
    },
];

export default function TravelersReviews({
    reviews = defaultReviews,
    title = "Travelers Reviews",
    className,
}: TravelersReviewsProps) {
    return (
        <section
            className={cn(
                "w-full overflow-hidden rounded-[20px] border border-[#E7E7E7] bg-white p-4",
                "sm:p-5",
                className
            )}
        >
            {/* Header */}
            <div className="mb-4">
                <h2 className="text-base font-semibold text-[#111111] sm:text-[17px]">
                    {title}
                </h2>
            </div>

            {/* Reviews */}
            <div
                className={cn(
                    "flex w-full gap-3 overflow-x-auto",
                    "snap-x snap-mandatory",
                    "pb-1",
                    "[scrollbar-width:none]",
                    "[-ms-overflow-style:none]",
                    "[&::-webkit-scrollbar]:hidden"
                )}
            >
                {reviews.map((review) => (
                    <article
                        key={review.id}
                        className={cn(
                            "group flex shrink-0 snap-start flex-col",
                            "rounded-[14px] border border-[#E7E7E7] bg-white",
                            "p-3 sm:p-3.5",

                            // Mobile
                            "w-[78vw] min-w-[78vw]",

                            // Small tablet
                            "sm:w-[48%] sm:min-w-[48%]",

                            // Tablet
                            "md:w-[31.5%] md:min-w-[31.5%]",

                            // Desktop - 5 cards visible
                            "lg:w-[calc((100%-48px)/5)] lg:min-w-[calc((100%-48px)/5)]"
                        )}
                    >
                        {/* User */}
                        <div className="flex items-center gap-2.5">
                            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#EAEAEA]">
                                <Image
                                    src={review.avatar}
                                    alt={review.name}
                                    fill
                                    sizes="32px"
                                    className="object-cover"
                                />
                            </div>

                            <div className="min-w-0">
                                <h3 className="truncate text-[16px] font-semibold leading-4 text-[#111111]">
                                    {review.name}
                                </h3>

                                <p className="text-[11px] leading-3 text-[#555555]">
                                    {review.date}
                                </p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="mt-2 flex items-center gap-[2px]">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <span
                                    key={index}
                                    className={cn(
                                        "text-[15px] leading-none",
                                        index < review.rating
                                            ? "text-[#FF7900]"
                                            : "text-[#D8D8D8]"
                                    )}
                                >
                                    ★
                                </span>
                            ))}
                        </div>

                        {/* Review */}
                        <p className="mt-2.5  sm:leading-[15px] lg:leading-5 text-[#111111] sm:text-[10.5px] md:text-[12px] lg:text-[13px]">
                            {review.review}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}