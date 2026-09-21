"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { TravelHelpBanner } from "@/components/TravelHelpBanner";
import BestOffers from "../homePage/BestOffers";
import FlightDealsSection from "../FlightDealsSection";
import {
    ArrowUpRight,
    BusFront,
    UsersRound,
    CalendarCheck,
    Heart,
    Hotel as HotelIcon,
    Plane,
    Headset,
    BadgeCheck
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { HotelCard, type Hotel } from "../HotelCard";
import Memories from "../Memories";
import BlogSection from "../BlogSection";
import TravelStories from "../homePage/TravelStories";
import { TravelSearch } from "../TravelSearch";
import { BusSearchResults } from "../BusSearchResults";
type TravelService = "flights" | "hotels" | "bus";
const helpBannerConfig = {
    flights: {
        title: "Need Help Finding the Right Flight?",
        description:
            "Our travel experts are just a message away. Get personalized recommendations for your journey.",
        image: "/images/planeHeroImage.png",
        buttonText: "Contact Us",
    },

    hotels: {
        title: "Need Help Finding the Perfect Hotel?",
        description:
            "Our travel experts are just a message away. Get personalized recommendations for your stay.",
        image: "/images/hotelsHeroImage.png",
        buttonText: "Contact Us",
    },

    bus: {
        title: "Need Help Finding the Right Bus?",
        description:
            "Our travel experts are just a message away. Get personalized recommendations for your journey.",
        image: "/images/busHeroImage.png",
        buttonText: "Contact Us",
    },
};
type ServiceConfig = {
    title: string;
    description: string;
    icon: typeof Plane;
    accent: string;
    heroImage: string;
    fields: {
        label: string;
        name: string;
        placeholder: string;
        type?: string;
    }[];
};

const serviceConfig: Record<TravelService, ServiceConfig> = {
    flights: {
        title: "Book flights to your Dream Destination",
        description:
            "Compare routes and plan a smooth journey across India.",
        icon: Plane,
        accent: "from-[#0c6267] to-[#143b57]",
        heroImage: "/images/planeHeroImage.png",
        fields: [
            {
                label: "From",
                name: "from",
                placeholder: "Departure city or airport",
            },
            {
                label: "To",
                name: "to",
                placeholder: "Arrival city or airport",
            },
            {
                label: "Departure",
                name: "departure",
                placeholder: "Select date",
                type: "date",
            },
            {
                label: "Return",
                name: "return",
                placeholder: "Select date",
                type: "date",
            },
        ],
    },

    hotels: {
        title: "Find a place to stay",
        description:
            "Discover comfortable stays for every kind of Indian getaway.",
        icon: HotelIcon,
        accent: "from-[#8d5634] to-[#4f3842]",
        heroImage: "/images/hotelsHeroImage.png",
        fields: [
            {
                label: "Destination",
                name: "destination",
                placeholder: "City, area or hotel",
            },
            {
                label: "Check in",
                name: "checkIn",
                placeholder: "Select date",
                type: "date",
            },
            {
                label: "Check out",
                name: "checkOut",
                placeholder: "Select date",
                type: "date",
            },
            {
                label: "Guests",
                name: "guests",
                placeholder: "2 guests, 1 room",
            },
        ],
    },

    bus: {
        title: "Search bus tickets",
        description:
            "Travel simply between cities with routes that fit your plans.",
        icon: BusFront,
        accent: "from-[#355c49] to-[#233b4d]",
        heroImage: "/images/busHeroImage.png",
        fields: [
            {
                label: "From",
                name: "from",
                placeholder: "Departure city",
            },
            {
                label: "To",
                name: "to",
                placeholder: "Arrival city",
            },
            {
                label: "Travel date",
                name: "travelDate",
                placeholder: "Select date",
                type: "date",
            },
            {
                label: "Passengers",
                name: "passengers",
                placeholder: "1 passenger",
            },
        ],
    },
};

const flightsDestionation = [
    {
        location: "Delhi",
        from: "4299",
        image:
            "https://images.unsplash.com/photo-1705927122615-02dcef3b1465?auto=format&fit=crop&w=900&q=80",
    },
    {
        location: "Mumbai",
        from: "5999",
        image:
            "https://images.unsplash.com/photo-1718515743530-9371a9389096?auto=format&fit=crop&w=900&q=80",
    },
    {
        location: "Bengaluru",
        from: "6599",
        image:
            "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=900&q=80",
    },
    {
        location: "Goa",
        from: "4299",
        image:
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
    },
    {
        location: "Jaipur",
        from: "2299",
        image:
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80",
    },
    {
        location: "Kolkata",
        from: "4299",
        image:
            "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=900&q=80",
    },
    {
        location: "Chennai",
        from: "5899",
        image:
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
    },
    {
        location: "Hyderabad",
        from: "3999",
        image:
            "https://images.unsplash.com/photo-1657981630164-769503f3a9a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHlkZXJhYmFkfGVufDB8fDB8fHww",
    },
    {
        location: "Udaipur",
        from: "4999",
        image:
            "https://images.unsplash.com/photo-1638904998527-a451c1fbd1cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHVkYWlwdXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
        location: "International",
        from: "9299",
        image:
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80",
    },
];
export const hotels: Hotel[] = [
    {
        id: "1",
        name: "The Himalayan Resort & Spa",
        image:
            "https://images.unsplash.com/photo-1718781941548-01d220bf62fd?auto=format&fit=crop&w=1200&q=85",
        badge: "Top Rated",
        badgeColor: "yellow",
        location: "Manali, Himachal Pradesh",
        rating: "4.6",
        reviews: "1.2k",
        price: "₹4,999",
        amenities: [
            "Free Wi-Fi",
            "Swimming Pool",
            "Breakfast",
        ],
    },

    {
        id: "2",
        name: "Apple Blossom Cottage",
        image:
            "https://images.unsplash.com/photo-1744487793707-a28fe2071e93?auto=format&fit=crop&w=1200&q=85",
        badge: "Best Value",
        badgeColor: "green",
        location: "Manali, Himachal Pradesh",
        rating: "4.5",
        reviews: "1.1k",
        price: "₹2,499",
        amenities: [
            "Free Wi-Fi",
            "Free Parking",
            "Breakfast",
        ],
    },

    {
        id: "3",
        name: "Solang Valley Resort",
        image:
            "https://images.unsplash.com/photo-1677820915366-27d887c9b872?auto=format&fit=crop&w=1200&q=85",
        badge: "Luxury",
        badgeColor: "blue",
        location: "Manali, Himachal Pradesh",
        rating: "4.7",
        reviews: "2.5k",
        price: "₹7,999",
        amenities: [
            "Free Wi-Fi",
            "Swimming Pool",
            "Room Service",
        ],
    },

    {
        id: "4",
        name: "Snow Peaks Hotel",
        image:
            "https://images.unsplash.com/photo-1677820915366-27d887c9b872?auto=format&fit=crop&w=1200&q=85",
        badge: "Family Favorite",
        badgeColor: "blue",
        location: "Manali, Himachal Pradesh",
        rating: "4.6",
        reviews: "1.9k",
        price: "₹3,999",
        amenities: [
            "Free Wi-Fi",
            "Breakfast",
            "Free Parking",
        ],
    },

    {
        id: "5",
        name: "The Orchard Retreat",
        image:
            "https://images.unsplash.com/photo-1718781941548-01d220bf62fd?auto=format&fit=crop&w=1200&q=85",
        badge: "Great Deal",
        badgeColor: "green",
        location: "Manali, Himachal Pradesh",
        rating: "4.4",
        reviews: "1.2k",
        price: "₹3,499",
        amenities: [
            "Free Wi-Fi",
            "Swimming Pool",
            "Spa",
        ],
    },

    {
        id: "6",
        name: "Mountain View Resort",
        image:
            "https://images.unsplash.com/photo-1744487793707-a28fe2071e93?auto=format&fit=crop&w=1200&q=85",
        badge: "Trending",
        badgeColor: "yellow",
        location: "Manali, Himachal Pradesh",
        rating: "4.5",
        reviews: "2.1k",
        price: "₹4,199",
        amenities: [
            "Free Wi-Fi",
            "Breakfast",
            "Room Service",
        ],
    },
];
export default function TravelSearchPage({
    service,
}: {
    service: TravelService;
}) {
    const config = serviceConfig[service];
    const Icon = config.icon;

    const router = useRouter();
    const handleViewDetails = (hotel: Hotel) => {
        router.push(
            `/search?service=hotels&query=${encodeURIComponent(hotel.name)}`
        );
    };
    return (
        <main className="relative w-full">
            {/* Hero */}
            {/* Hero */}
            <section className="relative overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${config.heroImage}')`,
                    }}
                />

                {/* Overall Hero Gradient */}
                <div className="absolute inset-0 z-10 bg-linear-to-tr from-black/55 via-black/20 via-30% to-transparent" />

                {/* Hero Content */}
                <div className="relative z-20 mx-auto max-w-[95%] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
                    <div className="relative max-w-2xl overflow-hidden rounded-2xl px-5 py-5 sm:px-7 sm:py-6">
                        {/* Text Backdrop */}

                        {/* Content */}
                        <div className="relative">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                                <Icon className="size-4" />
                                {service}
                            </div>

                            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                {config.title}
                            </h1>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                                {config.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Search */}
            <section className="relative z-10 mx-auto max-w-[95%] ">
                <TravelSearch
                    service={service}
                    onSubmit={(data) => {
                        router.push(`/search`);
                    }}
                />
            </section>

            {/* Popular Destinations */}
            {service === "bus" && <BusSearchResults />}
            {service === "flights" && <PopularDestinations />}
            {/* Other Sections */}

            {service === "hotels" && (
                <section className="w-full px-3 pb-8  ">
                    <div className="mx-auto w-full max-w-[95%]">
                        {/* Heading */}
                        <div className="mb-5 sm:mb-7">
                            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                                Recommended Stays
                            </p>

                            <h2 className="text-xl font-bold tracking-tight text-[#00383B] sm:text-2xl lg:text-3xl">
                                Popular Hotels in India
                            </h2>

                            <p className="mt-1.5 max-w-xl text-xs text-muted-foreground sm:text-sm">
                                Discover comfortable stays at great prices for your next
                                journey.
                            </p>
                        </div>

                        {/* Hotel Grid */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                            {hotels.map((hotel) => (
                                <HotelCard
                                    key={hotel.id}
                                    hotel={hotel}
                                    onViewDetails={handleViewDetails}
                                />
                            ))}
                        </div>
                    </div>
                </section>

            )}

            {service === "flights" &&
                <div className="flex w-full flex-col items-center justify-center gap-7">
                    <div className="w-[95%] mt-15 rounded-2xl  bg-primary/5 px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
                        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
                            {/* Best Price Guarantee */}
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:size-12">
                                    <BadgeCheck className="size-5 sm:size-6" />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="text-xs font-semibold text-primary sm:text-sm">
                                        Best Price Guarantee
                                    </h3>

                                    <p className="mt-0.5 text-[10px] leading-4 text-muted-foreground sm:text-xs">
                                        Get the lowest fares, always.
                                    </p>
                                </div>
                            </div>

                            {/* Wide Airline Options */}
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:size-12">
                                    <Plane className="size-5 sm:size-6" />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="text-xs font-semibold text-primary sm:text-sm">
                                        Wide Airline Options
                                    </h3>

                                    <p className="mt-0.5 text-[10px] leading-4 text-muted-foreground sm:text-xs">
                                        Choose from top domestic and international airlines.
                                    </p>
                                </div>
                            </div>

                            {/* Easy Booking */}
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:size-12">
                                    <CalendarCheck className="size-5 sm:size-6" />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="text-xs font-semibold text-primary sm:text-sm">
                                        Easy Booking
                                    </h3>

                                    <p className="mt-0.5 text-[10px] leading-4 text-muted-foreground sm:text-xs">
                                        Book in just a few simple steps.
                                    </p>
                                </div>
                            </div>

                            {/* Customer Support */}
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:size-12">
                                    <Headset className="size-5 sm:size-6" />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="text-xs font-semibold text-primary sm:text-sm">
                                        24/7 Customer Support
                                    </h3>

                                    <p className="mt-0.5 text-[10px] leading-4 text-muted-foreground sm:text-xs">
                                        We're always here to help you.
                                    </p>
                                </div>
                            </div>

                            {/* Flexible Options */}
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:size-12">
                                    <UsersRound className="size-5 sm:size-6" />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="text-xs font-semibold text-primary sm:text-sm">
                                        Flexible Options
                                    </h3>

                                    <p className="mt-0.5 text-[10px] leading-4 text-muted-foreground sm:text-xs">
                                        Change or cancel with ease.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <FlightDealsSection />

                </div>
            }

            <TravelHelpBanner
                {...helpBannerConfig[service]}
                onButtonClick={() => {
                    console.log("Open chat");
                }}
            />
            <div className="flex w-full flex-col items-center justify-center gap-7  ">
                <BlogSection />
                <TravelStories />
                <Memories />
            </div>

        </main>
    );
}

function DestinationCard({
    location,
    from,
    image,
}: {
    location: string;
    from: string;
    image: string;
}) {
    const router = useRouter();

    return (
        <article
            role="link"
            tabIndex={0}
            onClick={() => router.push("/search")}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    router.push("/search");
                }
            }}
            className="group relative aspect-[1.67/1] w-full cursor-pointer overflow-hidden rounded-xl border border-white/20 bg-neutral-200 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2FC2B0]"
        >
            {/* Image */}
            <Image
                src={image}
                alt={`${location} destination`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

            {/* Favorite */}
            <button
                type="button"
                aria-label={`Add ${location} to favorites`}
                onClick={(event) => event.stopPropagation()}
                className="absolute right-2.5 top-2.5 z-10 flex size-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-200 hover:bg-white/40"
            >
                <Heart
                    className="size-4 text-white"
                    strokeWidth={1.8}
                />
            </button>

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-2.5 sm:p-3">
                <div className="pr-8">
                    <h3 className="truncate text-sm font-semibold text-white sm:text-base">
                        {location}
                    </h3>

                    <p className="mt-0.5 text-[11px] font-medium text-white/90 sm:text-xs">
                        From ₹{from}
                    </p>
                </div>
            </div>

            {/* Arrow */}
            <button
                type="button"
                aria-label={`Explore flights to ${location}`}
                onClick={(event) => {
                    event.stopPropagation();
                    router.push("/search");
                }}
                className="absolute bottom-2 right-2 z-10 flex size-7 items-center justify-center rounded-full bg-[#2FC2B0] text-white shadow-md transition-all duration-200 hover:scale-110 hover:bg-[#26ad9d] sm:bottom-2.5 sm:right-2.5"
            >
                <ArrowUpRight
                    className="size-3.5 sm:size-4"
                    strokeWidth={2.5}
                />
            </button>
        </article>
    );
}

export function PopularDestinations() {
    return (
        <section className="w-full  ">
            <div className="mx-auto w-full max-w-[95%]   ">
                {/* Heading */}
                <div className="mb-5 sm:mb-7">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#2FC2B0]">
                        Explore India
                    </p>

                    <h2 className="text-xl font-bold tracking-tight text-[#00383B] sm:text-2xl lg:text-3xl">
                        Popular Flight Destinations
                    </h2>

                    <p className="mt-1.5 max-w-xl text-xs text-muted-foreground sm:text-sm">
                        Discover popular destinations and find flights at
                        great prices.
                    </p>
                </div>

                {/* Destination Grid */}
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
                    {flightsDestionation.map((destination) => (
                        <DestinationCard
                            key={destination.location}
                            location={destination.location}
                            from={destination.from}
                            image={destination.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}