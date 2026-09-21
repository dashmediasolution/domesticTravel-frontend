"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
    ArrowRight,
    ArrowUpRight,
    CalendarDays,
    CheckCircle2,
    Heart,
    LockKeyhole,
    Plane,
    Search,
    ShieldCheck,
    UserRound,
} from "lucide-react";

const flightDeals = [
    {
        offer: "UP TO 20% OFF",
        image:
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
        route: "Delhi → Goa",
        price: "₹4,299",
        originalPrice: "₹5,399",
        type: "Round Trip",
        class: "Economy",
    },
    {
        offer: "UP TO 10% OFF",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
        route: "Mumbai → Bali",
        price: "₹12,499",
        originalPrice: "₹14,999",
        type: "Round Trip",
        class: "Economy",
    },
    {
        offer: "FLAT ₹1,000 OFF",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
        route: "Delhi → Leh",
        price: "₹8,999",
        originalPrice: "₹10,499",
        type: "Round Trip",
        class: "Economy",
    },
    {
        offer: "UP TO 30% OFF",
        image:
            "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80",
        route: "Bengaluru → Singapore",
        price: "₹18,999",
        originalPrice: "₹23,999",
        type: "Round Trip",
        class: "Economy",
    },
];

const howItWorks = [
    {
        number: "01",
        title: "Search Flights",
        description: "Enter your city, date and travel details.",
        icon: Search,
    },
    {
        number: "02",
        title: "Compare Options",
        description: "Check prices, airlines and timings.",
        icon: ArrowRight,
    },
    {
        number: "03",
        title: "Book Securely",
        description: "Confirm your booking with safe payments.",
        icon: LockKeyhole,
    },
    {
        number: "04",
        title: "Get Ready to Fly",
        description: "Receive your e-ticket and travel with ease.",
        icon: ShieldCheck,
    },
];

const travelInspiration = [
    {
        category: "TRAVEL TIPS",
        title: "10 Tips for a Hassle-Free Flight Experience",
        readTime: "4 min read",
        date: "12 Apr 2025",
        image:
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    },
    {
        category: "TRAVEL GUIDE",
        title: "International Travel Guide: Documents, Tips & More",
        readTime: "5 min read",
        date: "10 Apr 2025",
        image:
            "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=900&q=80",
    },
    {
        category: "DESTINATIONS",
        title: "Best Time to Visit Top 10 Indian Hill Stations",
        readTime: "6 min read",
        date: "8 Apr 2025",
        image:
            "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=900&q=80",
    },
    {
        category: "PACKING TIPS",
        title: "What to Pack for a Domestic Flight",
        readTime: "4 min read",
        date: "5 Apr 2025",
        image:
            "https://images.unsplash.com/photo-1553531384-397c80973a0b?auto=format&fit=crop&w=900&q=80",
    },
];

export default function FlightDealsSection() {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto w-full max-w-[95%]   py-8   sm:py-10  lg:py-12">
                {/* ================================================= */}
                {/* FLIGHT DEALS */}
                {/* ================================================= */}

                <div className="mb-5 flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">
                            Flight Deals
                        </h2>

                        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                            Save more with our exclusive flight offers.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="hidden shrink-0 items-center gap-1 text-xs font-semibold text-primary transition hover:opacity-70 sm:flex"
                    >
                        View All Deals
                        <ArrowRight className="size-3.5" />
                    </button>
                </div>

                {/* Flight Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {flightDeals.map((deal) => (
                        <FlightDealCard
                            key={deal.route}
                            {...deal}
                        />
                    ))}
                </div>

                {/* Mobile View All */}
                <button
                    type="button"
                    className="mt-5 flex items-center gap-1 text-xs font-semibold text-primary sm:hidden"
                >
                    View All Deals
                    <ArrowRight className="size-3.5" />
                </button>

                {/* ================================================= */}
                {/* HOW IT WORKS */}
                {/* ================================================= */}

                <HowItWorks />

                {/* ================================================= */}
                {/* TRAVEL INSPIRATION */}
                {/* ================================================= */}

                <TravelInspiration />
            </div>
        </section>
    );
}

/* ============================================================
   FLIGHT DEAL CARD
============================================================ */

function FlightDealCard({
    offer,
    image,
    route,
    price,
    originalPrice,
    type,
    class: flightClass,
}: {
    offer: string;
    image: string;
    route: string;
    price: string;
    originalPrice: string;
    type: string;
    class: string;
}) {
    const router = useRouter();
    const searchHref = `/search?service=flights&query=${encodeURIComponent(route)}`;

    return (
        <article
            role="link"
            tabIndex={0}
            onClick={() => router.push(searchHref)}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    router.push(searchHref);
                }
            }}
            className="group cursor-pointer overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-[0_2px_12px_rgba(20,45,50,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(20,45,50,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
            {/* Image */}
            <div className="relative aspect-[2/1] overflow-hidden">
                <Image
                    src={image}
                    alt={route}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

                {/* Offer */}
                <div className="absolute left-2.5 top-2.5 rounded-full bg-[#ffd43b] px-2.5 py-1 text-[9px] font-bold text-[#614900] sm:text-[10px]">
                    {offer}
                </div>

                {/* Favorite */}
                <button
                    type="button"
                    aria-label={`Save ${route}`}
                    onClick={(event) => event.stopPropagation()}
                    className="absolute right-2.5 top-2.5 flex size-7 items-center justify-center rounded-full bg-white/85 text-primary shadow-sm backdrop-blur-sm transition hover:bg-white"
                >
                    <Heart className="size-3.5" />
                </button>
            </div>

            {/* Content */}
            <div className="p-3">
                <div className="flex items-center justify-between gap-2">
                    <h3 className="truncate text-xs font-bold text-primary sm:text-sm">
                        {route}
                    </h3>

                    <button
                        type="button"
                        aria-label={`View ${route}`}
                        onClick={(event) => {
                            event.stopPropagation();
                            router.push(searchHref);
                        }}
                        className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-white transition hover:scale-105"
                    >
                        <ArrowUpRight className="size-3.5" />
                    </button>
                </div>

                {/* Price */}
                <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#25a58f] sm:text-sm">
                        From {price}
                    </span>

                    <span className="text-[10px] text-neutral-400 line-through">
                        {originalPrice}
                    </span>
                </div>

                {/* Meta */}
                <div className="mt-1.5 flex items-center gap-2 text-[9px] text-neutral-400 sm:text-[10px]">
                    <span>{type}</span>

                    <span className="size-1 rounded-full bg-neutral-300" />

                    <span>{flightClass}</span>
                </div>
            </div>
        </article>
    );
}

/* ============================================================
   HOW IT WORKS
============================================================ */

function HowItWorks() {
    return (
        <section className="relative mt-8 overflow-hidden rounded-xl bg-primary/5 px-5 py-6 sm:mt-10 sm:px-7 sm:py-7 lg:px-8">
            {/* Header */}
            <div className="relative z-10">
                <h2 className="text-lg md:text-2xl font-bold text-primary sm:text-xl">
                    How It Works?
                </h2>

                <p className="mt-1 text-[11px] text-muted-foreground sm:text-xs">
                    Booking your flight is just a few clicks away.
                </p>
            </div>

            {/* Steps */}
            <div className="relative z-10 mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {howItWorks.map((step) => {
                    const Icon = step.icon;

                    return (
                        <div
                            key={step.number}
                            className="flex items-start gap-3"
                        >
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                                <Icon className="size-4" />
                            </div>

                            <div>
                                <span className="text-[2rem] font-bold text-primary">
                                    {step.number}
                                </span>

                                <h3 className="mt-0.5 text-md font-bold text-primary">
                                    {step.title}
                                </h3>

                                <p className="mt-1 max-w-[170px] text-sm leading-4 text-muted-foreground">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Decorative Illustration */}
            <div className="pointer-events-none absolute -bottom-8 right-0 hidden opacity-60 lg:block">
                <div className="relative h-32 w-64">
                    <div className="absolute right-10 top-5 rotate-[-8deg] text-xl font-bold text-primary/60">
                        Your Next
                    </div>

                    <div className="absolute right-4 top-11 rotate-[-8deg] text-xl font-bold text-primary/60">
                        Adventure Awaits
                    </div>

                    <Plane className="absolute bottom-6 right-5 size-7 rotate-[-15deg] text-primary/60" />

                    <div className="absolute bottom-0 right-20 h-20 w-32 rounded-[50%] border-2 border-dashed border-primary/20" />
                </div>
            </div>
        </section>
    );
}

/* ============================================================
   TRAVEL INSPIRATION
============================================================ */

function TravelInspiration() {
    const router = useRouter();

    return (
        <section className="mt-8 sm:mt-10">
            {/* Header */}
            <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">
                        Travel Inspiration
                    </h2>

                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                        Get inspired with travel stories, tips and flight
                        guides.
                    </p>
                </div>

                <button
                    type="button"
                    className="hidden items-center gap-1 text-xs font-semibold text-primary transition hover:opacity-70 sm:flex"
                >
                    View All Blogs
                    <ArrowRight className="size-3.5" />
                </button>
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {travelInspiration.map((article) => (
                    <article
                        key={article.title}
                        role="link"
                        tabIndex={0}
                        onClick={() =>
                            router.push(
                                `/search?service=flights&query=${encodeURIComponent(article.title)}`
                            )
                        }
                        onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                router.push(
                                    `/search?service=flights&query=${encodeURIComponent(article.title)}`
                                );
                            }
                        }}
                        className="group cursor-pointer overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-[0_2px_12px_rgba(20,45,50,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(20,45,50,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        {/* Image */}
                        <div className="relative aspect-[2.4/1] overflow-hidden">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Category */}
                            <span className="absolute bottom-2 left-2 rounded bg-black/35 px-2 py-1 text-[8px] font-semibold text-white backdrop-blur-sm">
                                {article.category}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-3">
                            <h3 className="line-clamp-2 text-xs font-semibold leading-4 text-primary sm:text-sm">
                                {article.title}
                            </h3>

                            <div className="mt-2 flex items-center gap-2 text-[9px] text-neutral-400 sm:text-[10px]">
                                <span>{article.readTime}</span>

                                <span className="size-1 rounded-full bg-neutral-300" />

                                <span>{article.date}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Mobile View All */}
            <button
                type="button"
                className="mt-5 flex items-center gap-1 text-xs font-semibold text-primary sm:hidden"
            >
                View All Blogs
                <ArrowRight className="size-3.5" />
            </button>
        </section>
    );
}