"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { packageData } from "@/constants/packagesData";
import { CategoryHeroSection, CategoryHeroData } from "@/components/CategoryHeroSection";
import { MapPin, Compass, CalendarCheck, Star } from "lucide-react";
interface CategoryPageProps {
    params: {
        category: string;
    };
}
const categoryHeroData: Record<string, CategoryHeroData> = {
    mountains: {
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Categories", href: "/categories" },
            { label: "Mountains" },
        ],
        tagline: "Breathe in the Serenity",
        titleTop: "Mountain",
        titleBottom: "Escapes",
        description:
            "Explore India's most breathtaking mountain destinations and epic adventures.",
        backgroundImage:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2560&q=80",
        imageAlt: "Snow-covered mountain valley landscape",
        stats: [
            { label: "Destinations", value: "150+", icon: MapPin },
            { label: "Tour Packages", value: "650+", icon: Compass },
            { label: "Happy Travelers", value: "50K+", icon: CalendarCheck },
            { label: "Average Rating", value: "4.8/5", icon: Star },
        ],
    },

    beaches: {
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Categories", href: "/categories" },
            { label: "Beaches" },
        ],
        tagline: "Escape to the Coast",
        titleTop: "Beach",
        titleBottom: "Getaways",
        description:
            "Relax on India's beautiful beaches, discover coastal gems and enjoy unforgettable seaside adventures.",
        backgroundImage:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=80",
        imageAlt: "Beautiful tropical beach with blue ocean",
        stats: [
            { label: "Destinations", value: "80+", icon: MapPin },
            { label: "Tour Packages", value: "300+", icon: Compass },
            { label: "Happy Travelers", value: "30K+", icon: CalendarCheck },
            { label: "Average Rating", value: "4.7/5", icon: Star },
        ],
    },

    desert: {
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Categories", href: "/categories" },
            { label: "Desert" },
        ],
        tagline: "Discover the Golden Sands",
        titleTop: "Desert",
        titleBottom: "Adventures",
        description:
            "Experience golden dunes, vibrant culture, desert camps and unforgettable adventures.",
        backgroundImage:
            "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=2560&q=80",
        imageAlt: "Golden desert sand dunes",
        stats: [
            { label: "Destinations", value: "40+", icon: MapPin },
            { label: "Tour Packages", value: "150+", icon: Compass },
            { label: "Happy Travelers", value: "15K+", icon: CalendarCheck },
            { label: "Average Rating", value: "4.6/5", icon: Star },
        ],
    },

    lakes: {
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Categories", href: "/categories" },
            { label: "Lakes" },
        ],
        tagline: "Find Your Peace",
        titleTop: "Lake",
        titleBottom: "Retreats",
        description:
            "Discover peaceful lakes, stunning landscapes and serene escapes across India.",
        backgroundImage:
            "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=2560&q=80",
        imageAlt: "Peaceful lake surrounded by mountains",
        stats: [
            { label: "Destinations", value: "60+", icon: MapPin },
            { label: "Tour Packages", value: "200+", icon: Compass },
            { label: "Happy Travelers", value: "20K+", icon: CalendarCheck },
            { label: "Average Rating", value: "4.8/5", icon: Star },
        ],
    },

    adventure: {
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Categories", href: "/categories" },
            { label: "Adventure" },
        ],
        tagline: "Adventure Awaits",
        titleTop: "Epic",
        titleBottom: "Adventures",
        description:
            "Push your limits with trekking, rafting, camping and thrilling outdoor experiences.",
        backgroundImage:
            "https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=2560&q=80",
        imageAlt: "Adventure trekking in the mountains",
        stats: [
            { label: "Destinations", value: "100+", icon: MapPin },
            { label: "Activities", value: "250+", icon: Compass },
            { label: "Happy Travelers", value: "25K+", icon: CalendarCheck },
            { label: "Average Rating", value: "4.8/5", icon: Star },
        ],
    },

    camping: {
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Categories", href: "/categories" },
            { label: "Camping" },
        ],
        tagline: "Sleep Under the Stars",
        titleTop: "Camping",
        titleBottom: "Escapes",
        description:
            "Reconnect with nature through peaceful campsites, bonfires and unforgettable outdoor stays.",
        backgroundImage:
            "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=2560&q=80",
        imageAlt: "Camping tent under the stars",
        stats: [
            { label: "Campsites", value: "70+", icon: MapPin },
            { label: "Packages", value: "180+", icon: Compass },
            { label: "Happy Travelers", value: "18K+", icon: CalendarCheck },
            { label: "Average Rating", value: "4.7/5", icon: Star },
        ],
    },

    spiritual: {
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Categories", href: "/categories" },
            { label: "Spiritual" },
        ],
        tagline: "Find Inner Peace",
        titleTop: "Spiritual",
        titleBottom: "Journeys",
        description:
            "Explore India's sacred temples, peaceful retreats and spiritually enriching destinations.",
        backgroundImage:
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2560&q=80",
        imageAlt: "Indian temple and spiritual destination",
        stats: [
            { label: "Destinations", value: "120+", icon: MapPin },
            { label: "Tour Packages", value: "400+", icon: Compass },
            { label: "Happy Travelers", value: "40K+", icon: CalendarCheck },
            { label: "Average Rating", value: "4.8/5", icon: Star },
        ],
    },

    nature: {
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Categories", href: "/categories" },
            { label: "Nature" },
        ],
        tagline: "Reconnect With Nature",
        titleTop: "Nature",
        titleBottom: "Escapes",
        description:
            "Explore India's lush forests, waterfalls, valleys and breathtaking natural landscapes.",
        backgroundImage:
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2560&q=80",
        imageAlt: "Lush green forest landscape",
        stats: [
            { label: "Destinations", value: "140+", icon: MapPin },
            { label: "Tour Packages", value: "500+", icon: Compass },
            { label: "Happy Travelers", value: "45K+", icon: CalendarCheck },
            { label: "Average Rating", value: "4.8/5", icon: Star },
        ],
    },
};
export default async function CategoryPage({
    params,
}: CategoryPageProps) {
    const { category } = await params;
    const heroData = categoryHeroData[category.toLowerCase()];
    const categoryName =
        category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

    // Get all packages from all states
    const allPackages = packageData.flatMap((state) =>
        state.packages.map((pkg) => ({
            ...pkg,
            state: state.name,
        }))
    );

    // Filter packages according to URL category
    const featuredPackages = allPackages.filter(
        (pkg) =>
            pkg.category.toLowerCase() === categoryName.toLowerCase()
    );

    const selectedPackage = featuredPackages[0];

    return (
        <main className="w-full bg-white">
            {/* Hero */}
            {selectedPackage && heroData && (
    <CategoryHeroSection data={heroData} />
)}

            {/* Featured Packages */}
            <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                        Explore {categoryName}
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Featured {categoryName} Packages
                    </h1>

                    <p className="mt-2 max-w-2xl text-gray-500">
                        Discover our handpicked{" "}
                        {categoryName.toLowerCase()} destinations.
                    </p>
                </div>

                {featuredPackages.length > 0 ? (
                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {featuredPackages.map((pkg) => (
                                <CarouselItem
                                    key={pkg.name}
                                    className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                                >
                                    <Link
                                        href={
                                            pkg.state === pkg.name
                                                ? `/package/${pkg.name.toLowerCase().replace(/\s+/g, "-")}`
                                                : `/package/${pkg.state.toLowerCase().replace(/\s+/g, "-")}/${pkg.name
                                                    .toLowerCase()
                                                    .replace(/\s+/g, "-")}`
                                        }
                                        className="group block"
                                    >
                                        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                                            {/* Image */}
                                            <div className="relative h-64 overflow-hidden">
                                                <Image
                                                    src={pkg.heroImage}
                                                    alt={pkg.name}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                />

                                                {/* Discount */}
                                                {pkg.discount && (
                                                    <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-green-700 shadow">
                                                        {pkg.discount} OFF
                                                    </div>
                                                )}

                                                {/* Rating */}
                                                <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-sm text-white backdrop-blur-sm">
                                                    ★ {pkg.rating}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-5">
                                                <p className="text-sm text-gray-500">
                                                    {pkg.location}
                                                </p>

                                                <h2 className="mt-1 text-xl font-bold text-gray-900">
                                                    {pkg.name}
                                                </h2>

                                                <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                                                    {pkg.subtitle}
                                                </p>

                                                <div className="my-4 border-t" />

                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-xs text-gray-500">
                                                            Starting from
                                                        </p>

                                                        <div className="flex items-center gap-2">
                                                            <span className="text-xl font-bold text-gray-900">
                                                                {pkg.offerPrice ||
                                                                    pkg.startingPrice}
                                                            </span>

                                                            {pkg.originalPrice && (
                                                                <span className="text-sm text-gray-400 line-through">
                                                                    {pkg.originalPrice}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <span className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors group-hover:bg-gray-700">
                                                        Explore
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Carousel buttons */}
                        <CarouselPrevious className="left-0 hidden sm:flex" />
                        <CarouselNext className="right-0 hidden sm:flex" />
                    </Carousel>
                ) : (
                    <div className="rounded-2xl border border-dashed py-16 text-center">
                        <p className="text-gray-500">
                            No packages found for {categoryName}.
                        </p>
                    </div>
                )}
            </section>
        </main>
    );
}