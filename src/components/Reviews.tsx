"use client";

import { cn } from "@/lib/utils";

interface Review {
    id: number;
    name: string;
    date: string;
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
        name: "Aarav Mehta",
        date: "2 Days ago",
        rating: 5,
        review:
            "My last Manali trip was nicely planned, from the Solang Valley visit to the comfortable hotel. Everything felt fresh and comforting.",
    },
    {
        id: 2,
        name: "Priya Sharma",
        date: "2 Days ago",
        rating: 5,
        review:
            "The Rajasthan tour was perfectly paced. We visited forts, enjoyed local food, and still had enough time to sightsee and relax.",
    },
    {
        id: 3,
        name: "Rohan Kapoor",
        date: "3 Days ago",
        rating: 5,
        review:
            "Kerala was an incredible experience. The houseboat stay in Alleppey and Munnar sightseeing were the highlights of our trip.",
    },
    {
        id: 4,
        name: "Neha Verma",
        date: "4 Days ago",
        rating: 5,
        review:
            "Our Ladakh journey was unforgettable. The Pangong Lake visit, scenic mountain roads, and smooth arrangements made it truly special.",
    },
    {
        id: 5,
        name: "Karan Malhotra",
        date: "5 Days ago",
        rating: 5,
        review:
            "We loved how easy our Dubai trip felt. The hotel, transfers, and sightseeing were arranged well, so we could simply enjoy the holiday.",
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

                            "w-[78vw] min-w-[78vw]",

                            "sm:w-[48%] sm:min-w-[48%]",

                            "md:w-[31.5%] md:min-w-[31.5%]",

                            "lg:w-[calc((100%-48px)/5)] lg:min-w-[calc((100%-48px)/5)]"
                        )}
                    >
                        {/* User */}
                        <div className="flex items-center gap-2.5">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2FC2B0] text-[14px] font-semibold text-white">
                                {review.name.charAt(0).toUpperCase()}
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
                        <p className="mt-2.5 text-[#111111] sm:text-[10.5px] sm:leading-[15px] md:text-[12px] lg:text-[13px] lg:leading-5">
                            {review.review}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}