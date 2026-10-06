"use client";

import Image from "next/image";
import Link from "next/link";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
} from "@/components/ui/carousel";

import {
    MapPin,
    Compass,
    CalendarCheck,
    Star,
} from "lucide-react";

import { CategoryHeroSection } from "@/components/CategoryHeroSection";
import BestTimeToVisit from "@/components/packagess/BestTimeToVisit";
import Memories from "@/components/Memories";
import WhyVisit from "@/components/WhyVisit";
import TravelStories from "@/components/homePage/TravelStories";
import TravelersReviews from "@/components/Reviews";
import { Spinner } from "@/components/ui/spinner";
import { use, useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";

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
        id: string;
        title: string;
        description: string;
    }[];

    activities: string[];

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

interface CategoryPackage {
    id: string;
    name: string;
    slug: string;
    hasOffer?:boolean
    offer?:any,
    heroImage: {
        url: string;
        publicId: string;
    };
    subtitle: string | null;
    originalPrice: number | null;
    destination: {
        slug: string;
    };
}

const categoryHeroData: Record<string, CategoryHeroData> = {
    mountains: {
        tagline: "Breathe in the Serenity",
        titleTop: "Mountain",
        titleBottom: "Escapes",
        description:
            "Explore India's most breathtaking mountain destinations and epic adventures.",
        backgroundImage:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2560&q=80",
        imageAlt: "Snow-covered mountain valley landscape",

        stats: [
            {
                label: "Destinations",
                value: "150+",
                icon: MapPin,
            },
            {
                label: "Tour Packages",
                value: "650+",
                icon: Compass,
            },
            {
                label: "Happy Travelers",
                value: "50K+",
                icon: CalendarCheck,
            },
            {
                label: "Average Rating",
                value: "4.8/5",
                icon: Star,
            },
        ],

        whyVisit: [
            {
                id: "mountains-1",
                title: "Snow-Covered Peaks",
                description:
                    "Experience breathtaking snow-covered mountains, dramatic landscapes and stunning Himalayan views.",
            },
            {
                id: "mountains-2",
                title: "Scenic Mountain Valleys",
                description:
                    "Explore peaceful valleys, lush meadows and beautiful hill towns surrounded by majestic peaks.",
            },
            {
                id: "mountains-3",
                title: "Trekking & Adventure",
                description:
                    "Enjoy trekking, camping, skiing, paragliding and other exciting outdoor experiences.",
            },
            {
                id: "mountains-4",
                title: "Peaceful Hill Escapes",
                description:
                    "Escape busy city life and relax in quiet mountain surroundings with fresh air and beautiful scenery.",
            },
        ],

        activities: [
            "Trekking",
            "Camping",
            "Bonfire",
            "Ropeway",
            "Skiing",
            "Paragliding",
            "Safari",
            "Biking",
        ],

        bestTimeToVisit: {
            months: ["Oct", "Nov", "Dec", "Jan", "Feb"],
            seasons: [
                {
                    name: "Winter",
                    months: "Dec - Feb",
                    description:
                        "Pleasant and comfortable weather, making it ideal for sightseeing.",
                    icon: "winter",
                },
                {
                    name: "Summer",
                    months: "Mar - Jun",
                    description:
                        "Warm weather across most of the state, while hill stations remain relatively pleasant.",
                    icon: "summer",
                },
                {
                    name: "Monsoon",
                    months: "Jul - Sep",
                    description:
                        "Moderate rainfall brings greenery to the hills and countryside.",
                    icon: "monsoon",
                },
            ],
        },
    },

    beach: {
        tagline: "Escape to the Coast",
        titleTop: "Beach",
        titleBottom: "Getaways",
        description:
            "Relax on India's beautiful beaches, discover coastal gems and enjoy unforgettable seaside adventures.",
        backgroundImage:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=80",
        imageAlt: "Beautiful tropical beach with blue ocean",

        stats: [
            {
                label: "Destinations",
                value: "80+",
                icon: MapPin,
            },
            {
                label: "Tour Packages",
                value: "300+",
                icon: Compass,
            },
            {
                label: "Happy Travelers",
                value: "30K+",
                icon: CalendarCheck,
            },
            {
                label: "Average Rating",
                value: "4.7/5",
                icon: Star,
            },
        ],

        whyVisit: [
            {
                id: "beaches-1",
                title: "Beautiful Beaches",
                description:
                    "Relax on India's beautiful beaches with golden shores, clear waters and stunning coastal scenery.",
            },
            {
                id: "beaches-2",
                title: "Water Activities",
                description:
                    "Enjoy swimming, scuba diving, snorkeling, island hopping and exciting water sports.",
            },
            {
                id: "beaches-3",
                title: "Sunsets & Coastal Views",
                description:
                    "Experience spectacular sunsets, scenic coastlines and peaceful seaside landscapes.",
            },
            {
                id: "beaches-4",
                title: "Relaxing Beach Escapes",
                description:
                    "Unwind by the sea and enjoy a refreshing break away from busy city life.",
            },
        ],

        activities: [
            "Swimming",
            "Water Sports",
            "Scuba Diving",
            "Beach Walks",
            "Snorkeling",
            "Photography",
            "Island Hopping",
            "Sunset Views",
        ],

        bestTimeToVisit: {
            months: ["Oct", "Nov", "Dec", "Jan", "Feb"],
            seasons: [
                {
                    name: "Winter",
                    months: "Oct - Feb",
                    description:
                        "Pleasant temperatures and clear skies make winter ideal for beaches, water activities and coastal sightseeing.",
                    icon: "winter",
                },
                {
                    name: "Summer",
                    months: "Mar - Jun",
                    description:
                        "Warm and sunny conditions are perfect for relaxing by the coast and enjoying seaside experiences.",
                    icon: "summer",
                },
                {
                    name: "Monsoon",
                    months: "Jul - Sep",
                    description:
                        "Heavy rainfall creates lush coastal landscapes, although some beach and water activities may be limited.",
                    icon: "monsoon",
                },
            ],
        },
    },
heritage: {
    tagline: "Walk Through India's History",
    titleTop: "Heritage",
    titleBottom: "Journeys",
    description:
        "Discover India's magnificent forts, ancient monuments, royal palaces and timeless cultural heritage.",
    backgroundImage:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2560&q=80",
    imageAlt: "Historic Indian heritage monument and architecture",

    stats: [
        {
            label: "Destinations",
            value: "100+",
            icon: MapPin,
        },
        {
            label: "Tour Packages",
            value: "350+",
            icon: Compass,
        },
        {
            label: "Happy Travelers",
            value: "35K+",
            icon: CalendarCheck,
        },
        {
            label: "Average Rating",
            value: "4.8/5",
            icon: Star,
        },
    ],

    whyVisit: [
        {
            id: "heritage-1",
            title: "Historic Monuments",
            description:
                "Explore magnificent forts, ancient temples, grand palaces and iconic monuments that showcase India's rich history.",
        },
        {
            id: "heritage-2",
            title: "Royal Palaces",
            description:
                "Experience the grandeur of royal palaces, majestic architecture and stories from India's historic kingdoms.",
        },
        {
            id: "heritage-3",
            title: "Rich Culture",
            description:
                "Discover traditional art, music, festivals, cuisine and customs passed down through generations.",
        },
        {
            id: "heritage-4",
            title: "Architectural Wonders",
            description:
                "Admire remarkable architecture, intricate carvings and timeless structures representing India's diverse heritage.",
        },
    ],

    activities: [
        "Heritage Walks",
        "Fort Visits",
        "Palace Tours",
        "Museum Visits",
        "Temple Tours",
        "Cultural Tours",
        "Photography",
        "Local Experiences",
    ],

    bestTimeToVisit: {
        months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
        seasons: [
            {
                name: "Winter",
                months: "Oct - Feb",
                description:
                    "Cool and pleasant weather makes winter ideal for exploring forts, palaces, monuments and heritage cities.",
                icon: "winter",
            },
            {
                name: "Summer",
                months: "Mar - Jun",
                description:
                    "Warm weather is suitable for heritage sightseeing, especially during early mornings and late afternoons.",
                icon: "summer",
            },
            {
                name: "Monsoon",
                months: "Jul - Sep",
                description:
                    "Rain brings fresh greenery and dramatic surroundings to historic sites, although outdoor sightseeing may be affected.",
                icon: "monsoon",
            },
        ],
    },
},
    desert: {
        tagline: "Discover the Golden Sands",
        titleTop: "Desert",
        titleBottom: "Adventures",
        description:
            "Experience golden dunes, vibrant culture, desert camps and unforgettable adventures.",
        backgroundImage:
            "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=2560&q=80",
        imageAlt: "Golden desert sand dunes",

        stats: [
            {
                label: "Destinations",
                value: "40+",
                icon: MapPin,
            },
            {
                label: "Tour Packages",
                value: "150+",
                icon: Compass,
            },
            {
                label: "Happy Travelers",
                value: "15K+",
                icon: CalendarCheck,
            },
            {
                label: "Average Rating",
                value: "4.6/5",
                icon: Star,
            },
        ],

        whyVisit: [
            {
                id: "desert-1",
                title: "Golden Sand Dunes",
                description:
                    "Discover vast golden sand dunes and dramatic desert landscapes across India's desert regions.",
            },
            {
                id: "desert-2",
                title: "Desert Safaris",
                description:
                    "Experience thrilling jeep safaris, camel rides and unforgettable adventures across the dunes.",
            },
            {
                id: "desert-3",
                title: "Rich Local Culture",
                description:
                    "Explore vibrant traditions, colorful festivals, local markets and authentic desert communities.",
            },
            {
                id: "desert-4",
                title: "Traditional Experiences",
                description:
                    "Enjoy folk music, traditional food, village visits, desert camps and memorable cultural experiences.",
            },
        ],

        activities: [
            "Desert Safari",
            "Camel Ride",
            "Dune Bashing",
            "Desert Camping",
            "Bonfire",
            "Village Tours",
            "Photography",
            "Stargazing",
        ],

        bestTimeToVisit: {
            months: ["Oct", "Nov", "Dec", "Jan", "Feb"],
            seasons: [
                {
                    name: "Winter",
                    months: "Oct - Feb",
                    description:
                        "Cooler temperatures make winter the most comfortable season for desert sightseeing, safaris and camping.",
                    icon: "winter",
                },
                {
                    name: "Summer",
                    months: "Mar - Jun",
                    description:
                        "Hot daytime temperatures make outdoor exploration challenging, while early mornings and evenings are more comfortable.",
                    icon: "summer",
                },
                {
                    name: "Monsoon",
                    months: "Jul - Sep",
                    description:
                        "Occasional rainfall brings a different landscape to the desert, though temperatures can remain warm.",
                    icon: "monsoon",
                },
            ],
        },
    },

    lakes: {
        tagline: "Find Your Peace",
        titleTop: "Lake",
        titleBottom: "Retreats",
        description:
            "Discover peaceful lakes, stunning landscapes and serene escapes across India.",
        backgroundImage:
            "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=2560&q=80",
        imageAlt: "Peaceful lake surrounded by mountains",

        stats: [
            {
                label: "Destinations",
                value: "60+",
                icon: MapPin,
            },
            {
                label: "Tour Packages",
                value: "200+",
                icon: Compass,
            },
            {
                label: "Happy Travelers",
                value: "20K+",
                icon: CalendarCheck,
            },
            {
                label: "Average Rating",
                value: "4.8/5",
                icon: Star,
            },
        ],

        whyVisit: [
            {
                id: "lakes-1",
                title: "Scenic Lakes",
                description:
                    "Discover beautiful lakes surrounded by mountains, forests and peaceful natural landscapes.",
            },
            {
                id: "lakes-2",
                title: "Peaceful Surroundings",
                description:
                    "Escape into calm surroundings where you can relax beside serene waters and enjoy fresh mountain air.",
            },
            {
                id: "lakes-3",
                title: "Boating Experiences",
                description:
                    "Enjoy boating, kayaking and other relaxing activities across India's beautiful lakes.",
            },
            {
                id: "lakes-4",
                title: "Beautiful Landscapes",
                description:
                    "Capture stunning views of lakes, mountains, forests and surrounding countryside.",
            },
        ],

        activities: [
            "Boating",
            "Kayaking",
            "Fishing",
            "Lake Walks",
            "Photography",
            "Camping",
            "Bird Watching",
            "Nature Walks",
        ],

        bestTimeToVisit: {
            months: ["Mar", "Apr", "May", "Sep", "Oct", "Nov"],
            seasons: [
                {
                    name: "Winter",
                    months: "Dec - Feb",
                    description:
                        "Cool weather creates peaceful surroundings for enjoying lakes, landscapes and nearby attractions.",
                    icon: "winter",
                },
                {
                    name: "Summer",
                    months: "Mar - Jun",
                    description:
                        "Pleasant temperatures make summer suitable for boating, sightseeing and exploring lakeside destinations.",
                    icon: "summer",
                },
                {
                    name: "Monsoon",
                    months: "Jul - Sep",
                    description:
                        "Rain refreshes the surrounding landscapes and creates lush greenery, though heavy showers may affect outdoor plans.",
                    icon: "monsoon",
                },
            ],
        },
    },

    adventure: {
        tagline: "Adventure Awaits",
        titleTop: "Epic",
        titleBottom: "Adventures",
        description:
            "Push your limits with trekking, rafting, camping and thrilling outdoor experiences.",
        backgroundImage:
            "https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=2560&q=80",
        imageAlt: "Adventure trekking in the mountains",

        stats: [
            {
                label: "Destinations",
                value: "100+",
                icon: MapPin,
            },
            {
                label: "Activities",
                value: "250+",
                icon: Compass,
            },
            {
                label: "Happy Travelers",
                value: "25K+",
                icon: CalendarCheck,
            },
            {
                label: "Average Rating",
                value: "4.8/5",
                icon: Star,
            },
        ],

        whyVisit: [
            {
                id: "adventure-1",
                title: "Thrilling Activities",
                description:
                    "Experience trekking, rafting, paragliding, rock climbing, zip lining and other exciting adventures.",
            },
            {
                id: "adventure-2",
                title: "Outdoor Adventures",
                description:
                    "Get outdoors and challenge yourself with unforgettable activities surrounded by nature.",
            },
            {
                id: "adventure-3",
                title: "Scenic Destinations",
                description:
                    "Enjoy thrilling experiences in some of India's most spectacular mountains, valleys and forests.",
            },
            {
                id: "adventure-4",
                title: "Memorable Experiences",
                description:
                    "Create unforgettable memories through exciting activities, beautiful landscapes and unique travel experiences.",
            },
        ],

        activities: [
            "Trekking",
            "Rafting",
            "Camping",
            "Paragliding",
            "Rock Climbing",
            "Biking",
            "Zip Lining",
            "Safari",
        ],

        bestTimeToVisit: {
            months: ["Mar", "Apr", "May", "Sep", "Oct", "Nov"],
            seasons: [
                {
                    name: "Winter",
                    months: "Dec - Feb",
                    description:
                        "Cool conditions are suitable for many outdoor adventures, while high-altitude activities may depend on snow conditions.",
                    icon: "winter",
                },
                {
                    name: "Summer",
                    months: "Mar - Jun",
                    description:
                        "Clearer weather and comfortable temperatures make summer suitable for trekking, rafting and camping.",
                    icon: "summer",
                },
                {
                    name: "Monsoon",
                    months: "Jul - Sep",
                    description:
                        "Rain creates dramatic landscapes, but trekking, rafting and other activities may be affected by weather conditions.",
                    icon: "monsoon",
                },
            ],
        },
    },

    camping: {
        tagline: "Sleep Under the Stars",
        titleTop: "Camping",
        titleBottom: "Escapes",
        description:
            "Reconnect with nature through peaceful campsites, bonfires and unforgettable outdoor stays.",
        backgroundImage:
            "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=2560&q=80",
        imageAlt: "Camping tent under the stars",

        stats: [
            {
                label: "Campsites",
                value: "70+",
                icon: MapPin,
            },
            {
                label: "Packages",
                value: "180+",
                icon: Compass,
            },
            {
                label: "Happy Travelers",
                value: "18K+",
                icon: CalendarCheck,
            },
            {
                label: "Average Rating",
                value: "4.7/5",
                icon: Star,
            },
        ],

        whyVisit: [
            {
                id: "camping-1",
                title: "Nature Experiences",
                description:
                    "Reconnect with nature through peaceful campsites surrounded by forests, mountains and open landscapes.",
            },
            {
                id: "camping-2",
                title: "Stargazing Nights",
                description:
                    "Enjoy clear night skies away from city lights and experience beautiful views of the stars.",
            },
            {
                id: "camping-3",
                title: "Campfire Evenings",
                description:
                    "Relax around a warm bonfire, share stories and enjoy memorable evenings in the outdoors.",
            },
            {
                id: "camping-4",
                title: "Peaceful Escapes",
                description:
                    "Take a break from busy city life and enjoy quiet nights surrounded by nature.",
            },
        ],

        activities: [
            "Tent Camping",
            "Bonfire",
            "Stargazing",
            "Nature Walks",
            "Hiking",
            "Photography",
            "Bird Watching",
            "Outdoor Cooking",
        ],

        bestTimeToVisit: {
            months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
            seasons: [
                {
                    name: "Winter",
                    months: "Oct - Feb",
                    description:
                        "Cool and crisp weather creates ideal conditions for bonfires, tents and memorable outdoor stays.",
                    icon: "winter",
                },
                {
                    name: "Summer",
                    months: "Mar - Jun",
                    description:
                        "Comfortable evenings and pleasant weather make summer suitable for camping and outdoor activities.",
                    icon: "summer",
                },
                {
                    name: "Monsoon",
                    months: "Jul - Sep",
                    description:
                        "Green landscapes and misty surroundings create a scenic camping experience, although rainfall can affect plans.",
                    icon: "monsoon",
                },
            ],
        },
    },

    spiritual: {
        tagline: "Find Inner Peace",
        titleTop: "Spiritual",
        titleBottom: "Journeys",
        description:
            "Explore India's sacred temples, peaceful retreats and spiritually enriching destinations.",
        backgroundImage:
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2560&q=80",
        imageAlt: "Indian temple and spiritual destination",

        stats: [
            {
                label: "Destinations",
                value: "120+",
                icon: MapPin,
            },
            {
                label: "Tour Packages",
                value: "400+",
                icon: Compass,
            },
            {
                label: "Happy Travelers",
                value: "40K+",
                icon: CalendarCheck,
            },
            {
                label: "Average Rating",
                value: "4.8/5",
                icon: Star,
            },
        ],

        whyVisit: [
            {
                id: "spiritual-1",
                title: "Sacred Temples",
                description:
                    "Visit India's ancient temples, pilgrimage sites and sacred places with deep cultural significance.",
            },
            {
                id: "spiritual-2",
                title: "Peaceful Surroundings",
                description:
                    "Find calm and reflection in serene temples, ashrams, riversides and spiritual retreats.",
            },
            {
                id: "spiritual-3",
                title: "Rich Traditions",
                description:
                    "Experience centuries-old rituals, festivals, spiritual practices and religious traditions.",
            },
            {
                id: "spiritual-4",
                title: "Cultural Experiences",
                description:
                    "Explore India's diverse heritage through temples, ceremonies, local traditions and historic sites.",
            },
        ],

        activities: [
            "Temple Visits",
            "Meditation",
            "Pilgrimage",
            "Yoga Retreats",
            "Cultural Tours",
            "Heritage Walks",
            "River Aarti",
            "Photography",
        ],

        bestTimeToVisit: {
            months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
            seasons: [
                {
                    name: "Winter",
                    months: "Oct - Feb",
                    description:
                        "Cool and pleasant weather makes temple visits, pilgrimages and spiritual retreats comfortable.",
                    icon: "winter",
                },
                {
                    name: "Summer",
                    months: "Mar - Jun",
                    description:
                        "Warm conditions are suitable for visiting temples and spiritual sites, especially during mornings and evenings.",
                    icon: "summer",
                },
                {
                    name: "Monsoon",
                    months: "Jul - Sep",
                    description:
                        "Fresh greenery and peaceful surroundings create a serene atmosphere, though rainfall can affect travel.",
                    icon: "monsoon",
                },
            ],
        },
    },

    nature: {
        tagline: "Reconnect With Nature",
        titleTop: "Nature",
        titleBottom: "Escapes",
        description:
            "Explore India's lush forests, waterfalls, valleys and breathtaking natural landscapes.",
        backgroundImage:
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2560&q=80",
        imageAlt: "Lush green forest landscape",

        stats: [
            {
                label: "Destinations",
                value: "140+",
                icon: MapPin,
            },
            {
                label: "Tour Packages",
                value: "500+",
                icon: Compass,
            },
            {
                label: "Happy Travelers",
                value: "45K+",
                icon: CalendarCheck,
            },
            {
                label: "Average Rating",
                value: "4.8/5",
                icon: Star,
            },
        ],

        whyVisit: [
            {
                id: "nature-1",
                title: "Lush Landscapes",
                description:
                    "Explore green forests, valleys, mountains and breathtaking natural landscapes across India.",
            },
            {
                id: "nature-2",
                title: "Wildlife Experiences",
                description:
                    "Discover India's diverse wildlife through safaris, bird watching and nature exploration.",
            },
            {
                id: "nature-3",
                title: "Waterfalls & Forests",
                description:
                    "Experience beautiful waterfalls, dense forests and refreshing natural surroundings.",
            },
            {
                id: "nature-4",
                title: "Peaceful Getaways",
                description:
                    "Escape the noise of city life and reconnect with nature in peaceful destinations.",
            },
        ],

        activities: [
            "Nature Walks",
            "Wildlife Safari",
            "Bird Watching",
            "Trekking",
            "Waterfalls",
            "Camping",
            "Photography",
            "Forest Exploration",
        ],

        bestTimeToVisit: {
            months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
            seasons: [
                {
                    name: "Winter",
                    months: "Oct - Feb",
                    description:
                        "Pleasant temperatures and clear weather are ideal for exploring forests, valleys, waterfalls and landscapes.",
                    icon: "winter",
                },
                {
                    name: "Summer",
                    months: "Mar - Jun",
                    description:
                        "Warm weather and longer days provide good conditions for sightseeing and outdoor exploration.",
                    icon: "summer",
                },
                {
                    name: "Monsoon",
                    months: "Jul - Sep",
                    description:
                        "Fresh greenery, flowing waterfalls and misty landscapes make nature destinations especially scenic.",
                    icon: "monsoon",
                },
            ],
        },
    },
};

export default function CategoryPage({
    params,
}: {
    params: Promise<{ category: string }>;
}) {
    const { category } = use(params);

    const [categoryData, setCategoryData] = useState<
        CategoryPackage[]
    >([]);

    const [loading, setLoading] = useState(true);

    const heroData = categoryHeroData[category.toLowerCase()];

    const categoryName =
        category.charAt(0).toUpperCase() +
        category.slice(1).toLowerCase();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const response = await fetch(
                    `/api/categories/${encodeURIComponent(
                        category
                    )}`,
                    {
                        method: "GET",
                    }
                );

                const result = await response.json();

                console.log(
                    result,
                    "category response"
                );

                if (
                    !response.ok ||
                    !result.success
                ) {
                    console.error(
                        "Failed to fetch category:",
                        result.message
                    );

                    setCategoryData([]);
                    return;
                }

                setCategoryData(
                    result.packages ?? []
                );
            } catch (error) {
                console.error(
                    "Error fetching category:",
                    error
                );

                setCategoryData([]);
            } finally {
                setLoading(false);
            }
        };

        if (category) {
            fetchData();
        }
    }, [category]);

    return (
        <main className="flex w-full flex-col items-center justify-between gap-12 bg-white">


            <CategoryHeroSection
                data={heroData}
            />


            <section className="mx-auto flex w-[91%] flex-col gap-12">

                {loading ? (
                    <div className="py-16 text-center">
                        <Spinner className="h-10 w-10 text-primary" />

                    </div>
                ) : categoryData.length > 0 ? (
                    <div>
                        <div>
                            <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                                Explore {categoryName}
                            </p>

                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Featured{" "}
                                {categoryName}{" "}
                                Packages
                            </h1>

                            <p className="mt-2 max-w-2xl text-gray-500">
                                Discover our handpicked{" "}
                                {categoryName.toLowerCase()}{" "}
                                destinations.
                            </p>
                        </div>

                        <Carousel
                            opts={{
                                align: "start",
                                loop: false,
                            }}
                            className="mt-4 w-full"
                        >
                            <CarouselContent className="-ml-3">
                                {categoryData.map(
                                    (pkg) => (
                                        <CarouselItem
                                            key={pkg.id}
                                            className="basis-1/2 pl-3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                                        >
                                            <Link
                                                href={
                                                    pkg.hasOffer && pkg.offer
                                                        ? `/offers/package/${pkg.offer.slug}`
                                                        : `/package/${pkg.destination.slug}/${pkg.slug}`
                                                }
                                                className="group block"
                                            >
                                                <div className="relative aspect-3/4 w-full overflow-hidden rounded-[16px] bg-gray-200 sm:rounded-[18px]">

                                                    <Image
                                                        src={
                                                            pkg
                                                                .heroImage
                                                                .url
                                                        }
                                                        alt={
                                                            pkg.name
                                                        }
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                                    />

                                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                                                    <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-3.5">

                                                        <h3 className="font-bebas text-[23px] uppercase leading-[0.95] tracking-wide sm:text-[25px]">
                                                            {
                                                                pkg.name
                                                            }
                                                        </h3>

                                                        {pkg.subtitle && (
                                                            <p className="mt-1 line-clamp-2 text-[10px] leading-tight text-white/85 sm:text-[11px]">
                                                                {
                                                                    pkg.subtitle
                                                                }
                                                            </p>
                                                        )}

                                                        <p className="mt-2 text-[9px] text-white/80 sm:text-[10px]">
                                                            From{" "}
                                                            <span className="font-semibold text-white">
                                                                {pkg.originalPrice !==
                                                                    null
                                                                    ? `₹${pkg.originalPrice.toLocaleString(
                                                                        "en-IN"
                                                                    )}`
                                                                    : "Price on request"}
                                                            </span>
                                                        </p>

                                                    </div>

                                                </div>
                                            </Link>
                                        </CarouselItem>
                                    )
                                )}
                            </CarouselContent>

                            <CarouselNext className="right-0 top-1/2 hidden size-8 translate-x-1/2 -translate-y-1/2 border-0 bg-[#2FC2B0] text-white shadow-md hover:bg-[#25ad9d] sm:flex" />
                        </Carousel>
                    </div>
                ) : (
                    <div className="rounded-2xl border border-dashed py-16 text-center">
                        <p className="text-gray-500">
                            No packages found for{" "}
                            {categoryName}.
                        </p>
                    </div>
                )}

                {/* Things To Do */}

                {heroData?.activities?.length > 0 && (
                    <section className="w-full">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                                Experiences
                            </p>

                            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Things To Do
                            </h2>

                            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
                                {heroData.activities.map(
                                    (activity) => (
                                        <div
                                            key={activity}
                                            className="flex min-h-20 items-center justify-center rounded-xl border border-gray-200 bg-white px-3 py-4 text-center shadow-sm transition hover:border-[#2FC2B0] hover:shadow-md"
                                        >
                                            <span className="text-sm font-medium text-gray-700">
                                                {activity}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* Best Time To Visit */}

                {heroData?.bestTimeToVisit && (
                    <section className="mx-auto w-full flex gap-10 mt-8">

                        <BestTimeToVisit
                            months={
                                heroData
                                    .bestTimeToVisit
                                    .months
                            }
                        />

                        {heroData?.whyVisit?.length > 0 && (
                            <WhyVisit
                                items={heroData.whyVisit}
                                destination={categoryName}
                            />
                        )}

                    </section>
                )}

            </section>

            {/* Why Visit */}

            <TravelStories />

            <div className="w-[91%]">
                <TravelersReviews />
            </div>

            <Memories />

        </main>
    );
}