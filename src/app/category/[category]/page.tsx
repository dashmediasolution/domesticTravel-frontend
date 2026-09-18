

import Image from "next/image";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    PersonStanding,
    TentTree,
    Flame,
    CableCar,
    Snowflake,
    Umbrella,
    Caravan,
    Bike,
    Waves,
    Ship,
    Fish,
    Camera,
    Mountain,
    Footprints,
    Landmark,
    TreePine,
    Binoculars,
} from "lucide-react";
import { packageData } from "@/constants/packagesData";
import { CategoryHeroSection } from "@/components/CategoryHeroSection";
import { MapPin, Compass, CalendarCheck, Star } from "lucide-react";
import BestTimeToVisit from "@/components/packagess/BestTimeToVisit";
import type { LucideIcon } from "lucide-react";
import Memories from "@/components/Memories";
import TravelStories from "@/components/homePage/TravelStories";
import WhyVisit from "@/components/WhyVisit";
import ThingsToDo from "@/components/ThingsToDo";
import TravelersReviews from "@/components/Reviews";
export interface CategoryHeroData {


    tagline: string;
    titleTop: string;
    titleBottom: string;
    description: string;
    backgroundImage: string;
    imageAlt: string;

    stats: {
        label: string;
        value: string;
        icon: LucideIcon;
    }[];
    whyVisit: {
        title: string;
        description: string;
        highlights: string[];
    };
    activities: {
        text: string;
        icon: LucideIcon;
    }[];
    bestTimeToVisit: {
        months: string[];
        seasons: {
            name: string;
            months: string;
            description: string;
            icon: "winter" | "summer" | "monsoon";
        }[];
    };
}
const categoryHeroData: Record<string, CategoryHeroData> = {
    mountains: {
        bestTimeToVisit: {
            months: ["Oct", "Nov", "Dec", "Jan", "Feb"],
            seasons: [
                {
                    name: "Winter",
                    months: "Dec - Feb",
                    description:
                        "Pleasant and comfortable weather, making it ideal for sightseeing.",
                    icon: "winter" as const,
                },
                {
                    name: "Summer",
                    months: "Mar - Jun",
                    description:
                        "Warm weather across most of the state, while hill stations remain relatively pleasant.",
                    icon: "summer" as const,
                },
                {
                    name: "Monsoon",
                    months: "Jul - Sep",
                    description:
                        "Moderate rainfall brings greenery to the hills and countryside .",
                    icon: "monsoon" as const,
                },
            ],
        },
        whyVisit: {
            title: "Why Visit Mountains?",
            description:
                "Escape into breathtaking landscapes, peaceful valleys and thrilling adventures surrounded by majestic peaks.",
            highlights: [
                "Snow-covered peaks",
                "Scenic mountain valleys",
                "Trekking & adventure",
                "Peaceful hill escapes",
            ],
        },
        activities: [
            { text: "Trekking", icon: PersonStanding },
            { text: "Camping", icon: TentTree },
            { text: "Bonfire", icon: Flame },
            { text: "Ropeway", icon: CableCar },
            { text: "Skiing", icon: Snowflake },
            { text: "Paragliding", icon: Umbrella },
            { text: "Safari", icon: Caravan },
            { text: "Biking", icon: Bike },
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
        whyVisit: {
            title: "Why Visit Beaches?",
            description:
                "Relax by golden shores, explore coastal landscapes and enjoy unforgettable experiences by the sea.",
            highlights: [
                "Beautiful beaches",
                "Water activities",
                "Sunsets & coastal views",
                "Relaxing beach escapes",
            ],
        },
        bestTimeToVisit: {
            months: ["Oct", "Nov", "Dec", "Jan", "Feb"],

            seasons: [
                {
                    name: "Winter",
                    months: "Oct - Feb",
                    description:
                        "Pleasant temperatures and clear skies make winter ideal for beaches, water activities and coastal sightseeing.",
                    icon: "winter" as const,
                },
                {
                    name: "Summer",
                    months: "Mar - Jun",
                    description:
                        "Warm and sunny conditions are perfect for relaxing by the coast and enjoying seaside experiences.",
                    icon: "summer" as const,
                },
                {
                    name: "Monsoon",
                    months: "Jul - Sep",
                    description:
                        "Heavy rainfall creates lush coastal landscapes, although some beach and water activities may be limited.",
                    icon: "monsoon" as const,
                },
            ],
        },

        activities: [
            { text: "Swimming", icon: Waves },
            { text: "Water Sports", icon: Ship },
            { text: "Scuba Diving", icon: Fish },
            { text: "Beach Walks", icon: Footprints },
            { text: "Snorkeling", icon: Fish },
            { text: "Photography", icon: Camera },
            { text: "Island Hopping", icon: Ship },
            { text: "Sunset Views", icon: Waves },
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
        bestTimeToVisit: {
            months: ["Oct", "Nov", "Dec", "Jan", "Feb"],

            seasons: [
                {
                    name: "Winter",
                    months: "Oct - Feb",
                    description:
                        "Cooler temperatures make winter the most comfortable season for desert sightseeing, safaris and camping.",
                    icon: "winter" as const,
                },
                {
                    name: "Summer",
                    months: "Mar - Jun",
                    description:
                        "Hot daytime temperatures make outdoor exploration challenging, while early mornings and evenings are more comfortable.",
                    icon: "summer" as const,
                },
                {
                    name: "Monsoon",
                    months: "Jul - Sep",
                    description:
                        "Occasional rainfall brings a different landscape to the desert, though temperatures can remain warm.",
                    icon: "monsoon" as const,
                },
            ],
        },

        activities: [
            { text: "Desert Safari", icon: Caravan },
            { text: "Camel Ride", icon: Compass },
            { text: "Dune Bashing", icon: Mountain },
            { text: "Desert Camping", icon: TentTree },
            { text: "Bonfire", icon: Flame },
            { text: "Village Tours", icon: Landmark },
            { text: "Photography", icon: Camera },
            { text: "Stargazing", icon: Snowflake },
        ],
        whyVisit: {
            title: "Why Visit Deserts?",
            description:
                "Experience golden landscapes, rich traditions, vibrant culture and unforgettable desert adventures.",
            highlights: [
                "Golden sand dunes",
                "Desert safaris",
                "Rich local culture",
                "Traditional experiences",
            ],
        },


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
        bestTimeToVisit: {
            months: ["Mar", "Apr", "May", "Sep", "Oct", "Nov"],

            seasons: [
                {
                    name: "Winter",
                    months: "Dec - Feb",
                    description:
                        "Cool weather creates peaceful surroundings for enjoying lakes, landscapes and nearby attractions.",
                    icon: "winter" as const,
                },
                {
                    name: "Summer",
                    months: "Mar - Jun",
                    description:
                        "Pleasant temperatures make summer suitable for boating, sightseeing and exploring lakeside destinations.",
                    icon: "summer" as const,
                },
                {
                    name: "Monsoon",
                    months: "Jul - Sep",
                    description:
                        "Rain refreshes the surrounding landscapes and creates lush greenery, though heavy showers may affect outdoor plans.",
                    icon: "monsoon" as const,
                },
            ],
        },
        activities: [
            { text: "Boating", icon: Ship },
            { text: "Kayaking", icon: Waves },
            { text: "Fishing", icon: Fish },
            { text: "Lake Walks", icon: Footprints },
            { text: "Photography", icon: Camera },
            { text: "Camping", icon: TentTree },
            { text: "Bird Watching", icon: Binoculars },
            { text: "Nature Walks", icon: TreePine },
        ],
        whyVisit: {
            title: "Why Visit Lakes?",
            description:
                "Discover serene waters, peaceful surroundings and beautiful landscapes perfect for a refreshing getaway.",
            highlights: [
                "Scenic lakes",
                "Peaceful surroundings",
                "Boating experiences",
                "Beautiful landscapes",
            ],
        },

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
        bestTimeToVisit: {
            months: ["Mar", "Apr", "May", "Sep", "Oct", "Nov"],

            seasons: [
                {
                    name: "Winter",
                    months: "Dec - Feb",
                    description:
                        "Cool conditions are suitable for many outdoor adventures, while high-altitude activities may depend on snow conditions.",
                    icon: "winter" as const,
                },
                {
                    name: "Summer",
                    months: "Mar - Jun",
                    description:
                        "Clearer weather and comfortable temperatures make summer suitable for trekking, rafting and camping.",
                    icon: "summer" as const,
                },
                {
                    name: "Monsoon",
                    months: "Jul - Sep",
                    description:
                        "Rain creates dramatic landscapes, but trekking, rafting and other activities may be affected by weather conditions.",
                    icon: "monsoon" as const,
                },
            ],
        },
        activities: [
            { text: "Trekking", icon: PersonStanding },
            { text: "Rafting", icon: Waves },
            { text: "Camping", icon: TentTree },
            { text: "Paragliding", icon: Umbrella },
            { text: "Rock Climbing", icon: Mountain },
            { text: "Biking", icon: Bike },
            { text: "Zip Lining", icon: CableCar },
            { text: "Safari", icon: Caravan },
        ],
        whyVisit: {
            title: "Why Choose Adventure?",
            description:
                "Push your limits with thrilling activities, breathtaking landscapes and experiences you'll remember for years.",
            highlights: [
                "Thrilling activities",
                "Outdoor adventures",
                "Scenic destinations",
                "Memorable experiences",
            ],
        },

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
        bestTimeToVisit: {
            months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],

            seasons: [
                {
                    name: "Winter",
                    months: "Oct - Feb",
                    description:
                        "Cool and crisp weather creates ideal conditions for bonfires, tents and memorable outdoor stays.",
                    icon: "winter" as const,
                },
                {
                    name: "Summer",
                    months: "Mar - Jun",
                    description:
                        "Comfortable evenings and pleasant weather make summer suitable for camping and outdoor activities.",
                    icon: "summer" as const,
                },
                {
                    name: "Monsoon",
                    months: "Jul - Sep",
                    description:
                        "Green landscapes and misty surroundings create a scenic camping experience, although rainfall can affect plans.",
                    icon: "monsoon" as const,
                },
            ],
        },
        activities: [
            { text: "Tent Camping", icon: TentTree },
            { text: "Bonfire", icon: Flame },
            { text: "Stargazing", icon: Snowflake },
            { text: "Nature Walks", icon: TreePine },
            { text: "Hiking", icon: PersonStanding },
            { text: "Photography", icon: Camera },
            { text: "Bird Watching", icon: Binoculars },
            { text: "Outdoor Cooking", icon: Flame },
        ],
        whyVisit: {
            title: "Why Go Camping?",
            description:
                "Reconnect with nature, escape busy city life and enjoy peaceful nights under open skies.",
            highlights: [
                "Nature experiences",
                "Stargazing nights",
                "Campfire evenings",
                "Peaceful escapes",
            ],
        },

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
        bestTimeToVisit: {
            months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],

            seasons: [
                {
                    name: "Winter",
                    months: "Oct - Feb",
                    description:
                        "Cool and pleasant weather makes temple visits, pilgrimages and spiritual retreats comfortable.",
                    icon: "winter" as const,
                },
                {
                    name: "Summer",
                    months: "Mar - Jun",
                    description:
                        "Warm conditions are suitable for visiting temples and spiritual sites, especially during mornings and evenings.",
                    icon: "summer" as const,
                },
                {
                    name: "Monsoon",
                    months: "Jul - Sep",
                    description:
                        "Fresh greenery and peaceful surroundings create a serene atmosphere, though rainfall can affect travel.",
                    icon: "monsoon" as const,
                },
            ],
        },
        whyVisit: {
            title: "Why Visit Spiritual Places?",
            description:
                "Find peace, explore sacred traditions and experience the cultural and spiritual heritage of India.",
            highlights: [
                "Sacred temples",
                "Peaceful surroundings",
                "Rich traditions",
                "Cultural experiences",
            ],
        },
        activities: [
            { text: "Temple Visits", icon: Landmark },
            { text: "Meditation", icon: PersonStanding },
            { text: "Pilgrimage", icon: Footprints },
            { text: "Yoga Retreats", icon: PersonStanding },
            { text: "Cultural Tours", icon: Compass },
            { text: "Heritage Walks", icon: Footprints },
            { text: "River Aarti", icon: Waves },
            { text: "Photography", icon: Camera },
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
        bestTimeToVisit: {
            months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],

            seasons: [
                {
                    name: "Winter",
                    months: "Oct - Feb",
                    description:
                        "Pleasant temperatures and clear weather are ideal for exploring forests, valleys, waterfalls and landscapes.",
                    icon: "winter" as const,
                },
                {
                    name: "Summer",
                    months: "Mar - Jun",
                    description:
                        "Warm weather and longer days provide good conditions for sightseeing and outdoor exploration.",
                    icon: "summer" as const,
                },
                {
                    name: "Monsoon",
                    months: "Jul - Sep",
                    description:
                        "Fresh greenery, flowing waterfalls and misty landscapes make nature destinations especially scenic.",
                    icon: "monsoon" as const,
                },
            ],
        },
        activities: [
            { text: "Nature Walks", icon: TreePine },
            { text: "Wildlife Safari", icon: Caravan },
            { text: "Bird Watching", icon: Binoculars },
            { text: "Trekking", icon: PersonStanding },
            { text: "Waterfalls", icon: Waves },
            { text: "Camping", icon: TentTree },
            { text: "Photography", icon: Camera },
            { text: "Forest Exploration", icon: Compass },
        ],

        whyVisit: {
            title: "Why Explore Nature?",
            description:
                "Immerse yourself in lush landscapes, wildlife, waterfalls and peaceful environments away from city life.",
            highlights: [
                "Lush landscapes",
                "Wildlife experiences",
                "Waterfalls & forests",
                "Peaceful getaways",
            ],
        },

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
}: any) {
    const { category } = await params;
    const heroData = categoryHeroData[category.toLowerCase()];
    const categoryName =
        category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

    const activities = heroData?.activities ?? [];
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
        <main className="w-full bg-white flex flex-col justify-between items-center gap-12">
            {/* Hero */}
            {selectedPackage && heroData && (
                <CategoryHeroSection data={heroData} />
            )}

            {/* Featured Packages */}
            <section className="mx-auto w-[91%] flex flex-col gap-12   ">

                {featuredPackages.length > 0 ? (
                    <div   >
                        <div >
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
                        <Carousel
                            opts={{
                                align: "start",
                                loop: false,
                            }}
                            className="w-full mt-4"
                        >
                            <CarouselContent className="-ml-3">
                                {featuredPackages.map((pkg) => (
                                    <CarouselItem
                                        key={pkg.name}
                                        className="basis-1/2 pl-3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                                    >
                                        <Link
                                            href={
                                                pkg.state === pkg.name
                                                    ? `/package/${pkg.name
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "-")}`
                                                    : `/package/${pkg.state
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "-")}/${pkg.name
                                                            .toLowerCase()
                                                            .replace(/\s+/g, "-")}`
                                            }
                                            className="group block"
                                        >
                                            <div className="relative aspect-3/4 w-full overflow-hidden rounded-[16px] bg-gray-200 sm:rounded-[18px]">
                                                {/* Image */}
                                                <Image
                                                    src={pkg.heroImage}
                                                    alt={pkg.name}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                                />

                                                {/* Dark Gradient */}
                                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                                                {/* Badge */}
                                                {(pkg as { badge?: string }).badge && (
                                                    <div className="absolute left-2.5 top-2.5 rounded-full bg-[#2FC2B0] px-2.5 py-1 text-[9px] font-semibold text-white shadow-sm sm:left-3 sm:top-3 sm:text-[10px]">
                                                        {(pkg as { badge?: string }).badge}
                                                    </div>
                                                )}

                                                {/* Content */}
                                                <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-3.5">
                                                    {/* Name */}
                                                    <h3 className="font-bebas text-[23px] leading-[0.95] tracking-wide uppercase sm:text-[25px]">
                                                        {pkg.name}
                                                    </h3>

                                                    {/* Location */}
                                                    <p className="mt-0.5 truncate text-[9px] leading-tight text-white/85 sm:text-[10px]">
                                                        {pkg.location}
                                                    </p>

                                                    {/* Rating */}
                                                    <div className="mt-1 flex items-center gap-1 text-[9px] sm:text-[10px]">
                                                        <span className="text-yellow-400">★</span>
                                                        <span className="font-medium">
                                                            {pkg.rating}
                                                        </span>

                                                        {pkg.reviews && (
                                                            <span className="text-white/70">
                                                                ({pkg.reviews})
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Price */}
                                                    <p className="mt-1 text-[9px] text-white/80 sm:text-[10px]">
                                                        From{" "}
                                                        <span className="font-semibold text-white">
                                                            {pkg.offerPrice || pkg.startingPrice}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            {/* Next Button */}
                            <CarouselNext className="right-0 top-1/2 hidden size-8 translate-x-1/2 -translate-y-1/2 border-0 bg-[#2FC2B0] text-white shadow-md hover:bg-[#25ad9d] sm:flex" />
                        </Carousel>
                    </div>
                ) : (
                    <div className="rounded-2xl border border-dashed py-16 text-center">
                        <p className="text-gray-500">
                            No packages found for {categoryName}.
                        </p>
                    </div>
                )}

                {activities.length > 0 && (
                    <ThingsToDo
                        title={`Best Experiences in ${categoryName}`}
                        activities={activities}
                    />
                )}

                {heroData?.bestTimeToVisit && heroData?.whyVisit && (
                    <section className="mx-auto w-full ">
                        <div className="flex w-full justify-between gap-10">
                            <BestTimeToVisit
                                months={heroData.bestTimeToVisit.months}
                                seasons={heroData.bestTimeToVisit.seasons}
                            />

                            <WhyVisit
                                title={heroData.whyVisit.title}
                                highlights={heroData.whyVisit.highlights}
                            />
                        </div>
                    </section>
                )}
            </section>
            <div className="w-[91%] ">
                <TravelersReviews />
            </div>



            <Memories />
            <TravelStories />


        </main>
    );
}