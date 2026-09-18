import {
    PersonStanding,
    TentTree,
    Flame,
    CableCar,
    Snowflake,
    Umbrella,
    Caravan,
    Bike,
    Sparkles,
    Waves,
    MapPin,
    CalendarDays,

    Waves as Water,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type TravelInfoIcon =
    | "airport"
    | "railway"
    | "transport"
    | "language"
    | "permit"
    | "currency";

type PackingItemIcon =
    | "clothes"
    | "shoes"
    | "camera"
    | "medicines"
    | "documents" | "sunglasses" | "powerbank" | "medicine"
    | "umbrella";

export interface Destination {
    name: string;
    subtitle: string;
    heroImage: string;
    rating: string;
    reviews: string;
    packagesCount: string;
    location: string;
    description: string;
    weather: string;
    idealTrip: string;
    budget: string;
    latitude?: number;
    longitude?: number;

    activities?: {
        text: string;
        icon: LucideIcon;
    }[];
    attractions?: {
        name: string;
        stat: string;
        image: string;
    }[];
    bestTimeToVisit?: {
        months: string[];
        seasons: {
            name: string;
            months: string;
            description: string;
            icon: "winter" | "summer" | "monsoon" | "spring";
        }[];
    };

    travelInfo?: {
        label: string;
        value: string;
        icon: TravelInfoIcon;
    }[];

    packingItems?: {
        label: string;
        icon: PackingItemIcon;
    }[];

    gallery?: {
        src: string;
        title: string;
        location: string;
    }[];

    categories?: {
        title: string;
        icon: LucideIcon;
    }[];

    itinerary?: {
        day: number;
        title: string;
        description: string;
    }[];
}

interface DestinationPackage {
    id: string;
    name: string;
    imageUrl: string;
    textColor: string;
    startingPrice: string;
    rating: string;
}

interface FeaturedDestination {
    destination: Destination;
    packages?: DestinationPackage[];
}

export const featuredDestination: FeaturedDestination[] = [
    {
        destination: {
            name: "Himachal Pradesh",
            subtitle: "The Valley of Snow & Adventure",
            heroImage: "/images/manali1.png",
            rating: "4.8",
            reviews: "2.4k",
            packagesCount: "120+ Packages",
            location: "Himachal Pradesh",

            description:
                "Discover breathtaking mountains, peaceful valleys and unforgettable adventures in one of India's most beautiful destinations.",

            weather: "10°C - 25°C",
            idealTrip: "4 - 6 Days",
            budget: "₹7000 - ₹15000",

            /* ============================================================
               ACTIVITIES
            ============================================================ */

            activities: [
                {
                    text: "Trekking",
                    icon: PersonStanding,
                },
                {
                    text: "Camping",
                    icon: TentTree,
                },
                {
                    text: "Bonfire",
                    icon: Flame,
                },
                {
                    text: "Ropeway",
                    icon: CableCar,
                },
                {
                    text: "Skiing",
                    icon: Snowflake,
                },
                {
                    text: "Paragliding",
                    icon: Umbrella,
                },
                {
                    text: "Safari",
                    icon: Caravan,
                },
                {
                    text: "Biking",
                    icon: Bike,
                },
            ],

            /* ============================================================
               BEST TIME TO VISIT
            ============================================================ */
            attractions: [
                {
                    name: "Manali",
                    stat: "Himalayan Paradise",
                    image:
                        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=85",
                },
                {
                    name: "Shimla",
                    stat: "Queen of Hills",
                    image:
                        "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1600&q=85",
                },
                {
                    name: "Spiti Valley",
                    stat: "Land of High Passes",
                    image:
                        "https://images.unsplash.com/photo-1622308644420-b20142dc993c?auto=format&fit=crop&w=1600&q=85",
                },
                {
                    name: "Dharamshala",
                    stat: "Mountain & Monasteries",
                    image:
                        "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=2560&q=80",
                },
                {
                    name: "Khajjiar",
                    stat: "Mini Switzerland",
                    image:
                        "https://images.unsplash.com/photo-1714381639586-80d1f04dfb0e?auto=format&fit=crop&w=3840&q=90",
                },
                {
                    name: "Solang Valley",
                    stat: "Adventure's Hub",
                    image:
                        "https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&fit=crop&w=1600&q=85",
                },
            ],
            bestTimeToVisit: {
                months: ["Mar", "Apr"],

                seasons: [
                    {
                        name: "Winter",
                        months: "Dec - Feb",
                        description:
                            "Snowfall, cozy stays, perfect for snow activities.",
                        icon: "winter",
                    },
                    {
                        name: "Summer",
                        months: "Mar - Jun",
                        description:
                            "Pleasant weather, ideal for sightseeing and adventure.",
                        icon: "summer",
                    },
                    {
                        name: "Monsoon",
                        months: "Jul - Sep",
                        description:
                            "Lush green views, less crowded.",
                        icon: "monsoon",
                    },
                ],
            },

            /* ============================================================
               TRAVEL INFORMATION
            ============================================================ */

            travelInfo: [
                {
                    label: "Nearest Airport",
                    value: "Bhunter Airport (50 km)",
                    icon: "airport",
                },
                {
                    label: "Nearest Railway Station",
                    value: "Joginder Nagar (120 km)",
                    icon: "railway",
                },
                {
                    label: "Local Transport",
                    value: "Train, Buses, Bikes Available",
                    icon: "transport",
                },
                {
                    label: "Languages Spoken",
                    value: "Hindi, English, Pahadi",
                    icon: "language",
                },
                {
                    label: "Permits Required",
                    value: "Rohtang Pass Permit (If Applicable)",
                    icon: "permit",
                },
                {
                    label: "Currency",
                    value: "Indian Rupee (INR)",
                    icon: "currency",
                },
            ],

            /* ============================================================
               PACKING ITEMS
            ============================================================ */

            packingItems: [
                {
                    label: "Warm Clothes (Even in Summer)",
                    icon: "clothes",
                },
                {
                    label: "Sunglasses & Sunscreen",
                    icon: "sunglasses",
                },
                {
                    label: "Comfortable Shoes",
                    icon: "shoes",
                },
                {
                    label: "Power Bank & ID Proof",
                    icon: "powerbank",
                },
                {
                    label: "Personal Medicines",
                    icon: "medicine",
                },
            ],

            /* ============================================================
               GALLERY
            ============================================================ */

            gallery: [
                {
                    src: "/images/destination/image-1.png",
                    title: "Solang Valley",
                    location: "Manali",
                },
                {
                    src: "/images/destination/image-3.png",
                    title: "Hamta Waterfall",
                    location: "Manali",
                },
                {
                    src: "/images/destination/image-2.png",
                    title: "Deos Village",
                    location: "Himachal Pradesh",
                },
                {
                    src: "/images/destination/image-3.png",
                    title: "Himalayan Valley",
                    location: "Himachal Pradesh",
                },
                {
                    src: "/images/destination/image-1.png",
                    title: "Mountain Escape",
                    location: "Manali",
                },
            ],

            /* ============================================================
               DESTINATION CATEGORIES
            ============================================================ */

            categories: [
                {
                    title: "Adventure",
                    icon: Sparkles,
                },
                {
                    title: "Nature",
                    icon: Waves,
                },
                {
                    title: "Heritage",
                    icon: MapPin,
                },
                {
                    title: "Mountains",
                    icon: Sparkles,
                },
                {
                    title: "Honeymoon",
                    icon: Sparkles,
                },
                {
                    title: "Weekend Trips",
                    icon: CalendarDays,
                },
            ],

            /* ============================================================
               ITINERARY
            ============================================================ */

            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Manali & Local Sightseeing",
                    description:
                        "Arrive in Manali, check into your hotel and explore the local attractions.",
                },
                {
                    day: 2,
                    title: "Solang Valley & Atal Tunnel Excursion",
                    description:
                        "Enjoy the scenic beauty of Solang Valley and visit Atal Tunnel.",
                },
                {
                    day: 3,
                    title: "Rohtang Pass (If Permitted) & Adventure Activities",
                    description:
                        "Visit Rohtang Pass depending on weather and permit availability.",
                },
                {
                    day: 4,
                    title: "Old Manali, Hidimba Temple & Shopping",
                    description:
                        "Explore Old Manali, visit Hidimba Temple and enjoy local shopping.",
                },
                {
                    day: 5,
                    title: "Departure from Manali",
                    description:
                        "Check out from the hotel and depart from Manali.",
                },
            ],
        },

        packages: [
            {
                id: "manali",
                name: "Manali",
                imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1800&q=90",

                textColor: "#FAAE2B",
                startingPrice: "₹17,500",
                rating: "4.7",
            },
            {
                id: "shimla",
                name: "Shimla",
                imageUrl: "https://images.unsplash.com/photo-1657894736581-ccc35d62d9e2?auto=format&fit=crop&w=3840&q=90",

                textColor: "#FFFFFF",
                startingPrice: "₹15,000",
                rating: "4.8",
            },
            {
                id: "dharamshala",
                name: "Dharamshala",
                imageUrl: "/images/featuredImages/image_3.png",
                textColor: "#FFFFFF",
                startingPrice: "₹16,500",
                rating: "4.6",
            },
            {
                id: "kasol",
                name: "Kasol",
                imageUrl: "/images/featuredImages/image_4.png",
                textColor: "#153E3C",
                startingPrice: "₹12,500",
                rating: "4.7",
            },
            {
                id: "spiti-valley",
                name: "Spiti Valley",
                imageUrl: "/images/featuredImages/image_6.png",
                textColor: "#FFFFFF",
                startingPrice: "₹22,000",
                rating: "4.9",
            },
            {
                id: "kufri",
                name: "Kufri",
                imageUrl: "/images/featuredImages/image_8.png",
                textColor: "#FFFFFF",
                startingPrice: "₹13,500",
                rating: "4.5",
            },
            {
                id: "kasauli",
                name: "Kasauli",
                imageUrl: "/images/featuredImages/image_1.png",
                textColor: "#FFFFFF",
                startingPrice: "₹11,500",
                rating: "4.6",
            },
        ],
    },
    {
        destination: {
            name: "Ladakh",
            subtitle: "The Land of High Passes",
            heroImage: "https://images.unsplash.com/photo-1593118845043-359e5f628214?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: "4.9",
            reviews: "3.1k",
            packagesCount: "80+ Packages",
            location: "Ladakh",

            description:
                "Experience breathtaking landscapes, ancient monasteries, high-altitude passes and unforgettable Himalayan adventures in the magical land of Ladakh.",

            weather: "5°C - 20°C",
            idealTrip: "5 - 7 Days",
            budget: "₹12000 - ₹25000",

            /* ============================================================
               ACTIVITIES
            ============================================================ */
            attractions: [
                {
                    name: "Leh",
                    stat: "Heart of Ladakh",
                    image:
                        "https://images.unsplash.com/photo-1617824077840-0d7a0cd13448?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    name: "Pangong Lake",
                    stat: "Iconic Blue Lake",
                    image:
                        "https://images.unsplash.com/photo-1606857090627-27ca46667290?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    name: "Nubra Valley",
                    stat: "High-Altitude Desert",
                    image:
                        "https://images.unsplash.com/photo-1622308644420-b20142dc993c?auto=format&fit=crop&w=1600&q=85",
                },
                {
                    name: "Khardung La",
                    stat: "Legendary Mountain Pass",
                    image:
                        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85",
                },
                {
                    name: "Tso Moriri",
                    stat: "Pristine Alpine Lake",
                    image:
                        "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1600&q=85",
                },
                {
                    name: "Zanskar Valley",
                    stat: "Remote Himalayan Wilderness",
                    image:
                        "https://images.unsplash.com/photo-1622308644420-b20142dc993c?auto=format&fit=crop&w=1600&q=85",
                },
            ],
            activities: [
                {
                    text: "Trekking",
                    icon: PersonStanding,
                },
                {
                    text: "Camping",
                    icon: TentTree,
                },
                {
                    text: "Monastery Tour",
                    icon: Sparkles,
                },
                {
                    text: "Bike Ride",
                    icon: Bike,
                },
                {
                    text: "River Rafting",
                    icon: Waves,
                },
                {
                    text: "Safari",
                    icon: Caravan,
                },
                {
                    text: "Mountain Passes",
                    icon: CableCar,
                },
                {
                    text: "Stargazing",
                    icon: Snowflake,
                },
            ],

            /* ============================================================
               BEST TIME TO VISIT
            ============================================================ */

            bestTimeToVisit: {
                months: ["Jun", "Jul", "Aug", "Sep"],

                seasons: [
                    {
                        name: "Summer",
                        months: "Jun - Sep",
                        description:
                            "Pleasant weather, accessible mountain passes and ideal conditions for sightseeing and road trips.",
                        icon: "summer",
                    },
                    {
                        name: "Winter",
                        months: "Oct - Feb",
                        description:
                            "Freezing temperatures, snowy landscapes and unique winter adventures for experienced travelers.",
                        icon: "winter",
                    },
                    {
                        name: "Spring",
                        months: "Mar - May",
                        description:
                            "Cold weather, beautiful mountain scenery and fewer tourists before the main travel season.",
                        icon: "spring",
                    },
                ],
            },

            /* ============================================================
               TRAVEL INFORMATION
            ============================================================ */

            travelInfo: [
                {
                    label: "Nearest Airport",
                    value: "Kushok Bakula Rimpochee Airport (Leh)",
                    icon: "airport",
                },
                {
                    label: "Nearest Railway Station",
                    value: "Srinagar / Jammu Tawi Railway Station",
                    icon: "railway",
                },
                {
                    label: "Local Transport",
                    value: "Taxis, Buses, Bikes & Rental Cars Available",
                    icon: "transport",
                },
                {
                    label: "Languages Spoken",
                    value: "Ladakhi, Hindi, English",
                    icon: "language",
                },
                {
                    label: "Permits Required",
                    value: "Inner Line Permit for Restricted Areas",
                    icon: "permit",
                },
                {
                    label: "Currency",
                    value: "Indian Rupee (INR)",
                    icon: "currency",
                },
            ],

            /* ============================================================
               PACKING ITEMS
            ============================================================ */

            packingItems: [
                {
                    label: "Warm Clothes & Thermal Wear",
                    icon: "clothes",
                },
                {
                    label: "Sunglasses & High SPF Sunscreen",
                    icon: "sunglasses",
                },
                {
                    label: "Comfortable Trekking Shoes",
                    icon: "shoes",
                },
                {
                    label: "Power Bank & ID Proof",
                    icon: "powerbank",
                },
                {
                    label: "Personal Medicines & AMS Medication",
                    icon: "medicine",
                },
            ],

            /* ============================================================
               GALLERY
            ============================================================ */


            gallery: [
                {
                    src: "https://images.unsplash.com/photo-1606857090627-27ca46667290?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Pangong Lake",
                    location: "Ladakh",
                },
                {
                    src: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=1600&q=85",
                    title: "Nubra Valley",
                    location: "Ladakh",
                },
                {
                    src: "https://images.unsplash.com/photo-1768728410262-2de655bfc5dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVoJTIwcGFsYWNlfGVufDB8MHwwfHx8MA%3D%3D",
                    title: "Leh Palace",
                    location: "Leh, Ladakh",
                },
                {
                    src: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?auto=format&fit=crop&w=1600&q=85",
                    title: "Khardung La",
                    location: "Ladakh",
                },
                {
                    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85",
                    title: "Magnetic Hill",
                    location: "Leh, Ladakh",
                },
            ],





            /* ============================================================
               DESTINATION CATEGORIES
            ============================================================ */

            categories: [
                {
                    title: "Adventure",
                    icon: Sparkles,
                },
                {
                    title: "Nature",
                    icon: Waves,
                },
                {
                    title: "Monasteries",
                    icon: MapPin,
                },
                {
                    title: "Mountains",
                    icon: Sparkles,
                },
                {
                    title: "Road Trips",
                    icon: Bike,
                },
                {
                    title: "Camping",
                    icon: TentTree,
                },
            ],

            /* ============================================================
               ITINERARY
            ============================================================ */

            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Leh & Acclimatization",
                    description:
                        "Arrive in Leh, check into your hotel and spend the day resting and acclimatizing to the high altitude.",
                },
                {
                    day: 2,
                    title: "Leh Local Sightseeing",
                    description:
                        "Explore Leh Palace, Shanti Stupa, Magnetic Hill and the historic markets of Leh.",
                },
                {
                    day: 3,
                    title: "Nubra Valley via Khardung La",
                    description:
                        "Drive through the spectacular Khardung La pass and explore the beautiful landscapes and villages of Nubra Valley.",
                },
                {
                    day: 4,
                    title: "Nubra Valley Exploration",
                    description:
                        "Visit Diskit Monastery, enjoy the scenic views of Hunder and experience the famous double-humped Bactrian camel safari.",
                },
                {
                    day: 5,
                    title: "Pangong Lake Excursion",
                    description:
                        "Travel towards the stunning Pangong Lake and enjoy its changing shades of blue surrounded by dramatic mountains.",
                },
                {
                    day: 6,
                    title: "Pangong Lake to Leh",
                    description:
                        "Enjoy the morning views of Pangong Lake and drive back towards Leh through the scenic mountain routes.",
                },
                {
                    day: 7,
                    title: "Departure from Leh",
                    description:
                        "Check out from the hotel and depart from Leh with unforgettable memories of your Ladakh adventure.",
                },
            ],
        },

        packages: [
            {
                id: "leh",
                name: "Leh",
                imageUrl: "https://images.unsplash.com/photo-1617824077840-0d7a0cd13448?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                textColor: "#FFFFFF",
                startingPrice: "₹18,000",
                rating: "4.8",
            },
            // {
            //     id: "nubra-valley",
            //     name: "Nubra Valley",
            //     imageUrl: "/images/featuredImages/image_3.png",
            //     textColor: "#FFFFFF",
            //     startingPrice: "₹21,000",
            //     rating: "4.9",
            // },
            // {
            //     id: "pangong",
            //     name: "Pangong Lake",
            //     imageUrl: "/images/featuredImages/image_4.png",
            //     textColor: "#FFFFFF",
            //     startingPrice: "₹20,500",
            //     rating: "4.9",
            // },
            // {
            //     id: "tso-moriri",
            //     name: "Tso Moriri",
            //     imageUrl: "/images/featuredImages/image_6.png",
            //     textColor: "#FFFFFF",
            //     startingPrice: "₹23,000",
            //     rating: "4.8",
            // },
            // {
            //     id: "zanskar",
            //     name: "Zanskar Valley",
            //     imageUrl: "/images/featuredImages/image_7.png",
            //     textColor: "#FFFFFF",
            //     startingPrice: "₹25,000",
            //     rating: "4.9",
            // },
        ],
    },

    {
        destination: {
            name: "Uttarakhand",
            subtitle: "The Land of Mountains & Spirituality",

            heroImage:
                "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=2400&q=90",

            rating: "4.9",
            reviews: "2.8k",
            packagesCount: "150+ Packages",
            location: "Uttarakhand",

            description:
                "Discover majestic Himalayan landscapes, peaceful hill towns, sacred temples, thrilling adventures and serene valleys in the beautiful land of Uttarakhand.",

            weather: "5°C - 28°C",
            idealTrip: "5 - 8 Days",
            budget: "₹8000 - ₹18000",

            activities: [
                {
                    text: "Trekking",
                    icon: PersonStanding,
                },
                {
                    text: "Camping",
                    icon: TentTree,
                },
                {
                    text: "Rafting",
                    icon: Waves,
                },
                {
                    text: "Cable Car",
                    icon: CableCar,
                },
                {
                    text: "Skiing",
                    icon: Snowflake,
                },
                {
                    text: "Paragliding",
                    icon: Umbrella,
                },
                {
                    text: "Wildlife Safari",
                    icon: Caravan,
                },
                {
                    text: "Biking",
                    icon: Bike,
                },
            ],
            attractions: [
                {
                    name: "Nainital",
                    stat: "Lake City",
                    image:
                        "https://images.unsplash.com/photo-1643263904933-2aa9fb29bd81?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    name: "Mussoorie",
                    stat: "Queen of Hills",
                    image:
                        "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1600&q=85",
                },
                {
                    name: "Rishikesh",
                    stat: "Yoga & Adventure",
                    image:
                        "https://images.unsplash.com/photo-1614605670899-47ecba60bf2a?q=80&w=1572&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    name: "Mussoorie",
                    stat: "Mountain Retreat",
                    image:
                        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85",
                },
                {
                    name: "Auli",
                    stat: "Skiing Paradise",
                    image:
                        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1600&q=85",
                },
                {
                    name: "Kedarnath",
                    stat: "Sacred Himalayan Shrine",
                    image:
                        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
            ],
            bestTimeToVisit: {
                months: ["Mar", "Apr", "May", "Oct", "Nov"],

                seasons: [
                    {
                        name: "Winter",
                        months: "Dec - Feb",
                        description:
                            "Cold weather and snowfall create perfect snow experiences.",
                        icon: "winter",
                    },
                    {
                        name: "Summer",
                        months: "Mar - Jun",
                        description:
                            "Pleasant temperatures and clear views suit sightseeing.",
                        icon: "summer",
                    },
                    {
                        name: "Monsoon",
                        months: "Jul - Sep",
                        description:
                            "Lush mountains and waterfalls, despite occasional heavy rainfall.",
                        icon: "monsoon",
                    },
                ],
            },

            travelInfo: [
                {
                    label: "Nearest Airport",
                    value: "Jolly Grant Airport, Dehradun",
                    icon: "airport",
                },
                {
                    label: "Nearest Railway Station",
                    value: "Dehradun Railway Station",
                    icon: "railway",
                },
                {
                    label: "Local Transport",
                    value: "Buses, Taxis, Rental Cars & Bikes",
                    icon: "transport",
                },
                {
                    label: "Languages Spoken",
                    value: "Hindi, English, Garhwali, Kumaoni",
                    icon: "language",
                },
                {
                    label: "Permits Required",
                    value: "Required for Certain Restricted & Trekking Areas",
                    icon: "permit",
                },
                {
                    label: "Currency",
                    value: "Indian Rupee (INR)",
                    icon: "currency",
                },
            ],

            packingItems: [
                {
                    label: "Warm Clothes & Light Layers",
                    icon: "clothes",
                },
                {
                    label: "Sunglasses & Sunscreen",
                    icon: "sunglasses",
                },
                {
                    label: "Comfortable Trekking Shoes",
                    icon: "shoes",
                },
                {
                    label: "Power Bank & ID Proof",
                    icon: "powerbank",
                },
                {
                    label: "Personal Medicines",
                    icon: "medicine",
                },
            ],

            gallery: [
                {
                    src:
                        "https://images.unsplash.com/photo-1706963336286-029a26cd7810?auto=format&fit=crop&w=3840&q=90",
                    title: "Rishikesh",
                    location: "Uttarakhand",
                },
                {
                    src:
                        "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1800&q=90",
                    title: "Mussoorie",
                    location: "Uttarakhand",
                },
                {
                    src:
                        "https://images.unsplash.com/photo-1706468630738-b0ded0c5fc25?auto=format&fit=crop&w=3840&q=90",
                    title: "Nainital",
                    location: "Uttarakhand",
                },
                {
                    src:
                        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1800&q=90",
                    title: "Kedarnath",
                    location: "Uttarakhand",
                },
                {
                    src:
                        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1800&q=90",
                    title: "Himalayan Mountains",
                    location: "Uttarakhand",
                },
            ],

            categories: [
                {
                    title: "Adventure",
                    icon: Sparkles,
                },
                {
                    title: "Nature",
                    icon: Waves,
                },
                {
                    title: "Spiritual",
                    icon: MapPin,
                },
                {
                    title: "Mountains",
                    icon: Sparkles,
                },
                {
                    title: "Wildlife",
                    icon: Caravan,
                },
                {
                    title: "Weekend Trips",
                    icon: CalendarDays,
                },
            ],

            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Rishikesh",
                    description:
                        "Arrive in Rishikesh, check into your hotel and spend the evening exploring the Ganga ghats, Ram Jhula and the lively riverside atmosphere.",
                },
                {
                    day: 2,
                    title: "Rishikesh Adventure & Ganga Aarti",
                    description:
                        "Enjoy river rafting and other adventure activities before visiting Triveni Ghat in the evening for the famous Ganga Aarti.",
                },
                {
                    day: 3,
                    title: "Rishikesh to Mussoorie",
                    description:
                        "Travel through the Himalayan foothills to Mussoorie and explore Mall Road, Camel's Back Road and nearby viewpoints.",
                },
                {
                    day: 4,
                    title: "Mussoorie Sightseeing",
                    description:
                        "Visit Kempty Falls, Gun Hill, Company Garden and scenic viewpoints before enjoying a relaxed evening in the Queen of Hills.",
                },
                {
                    day: 5,
                    title: "Mussoorie to Nainital",
                    description:
                        "Travel towards Nainital and enjoy the scenic mountain roads before exploring Naini Lake and Mall Road.",
                },
                {
                    day: 6,
                    title: "Nainital Sightseeing",
                    description:
                        "Explore Naina Devi Temple, Snow View Point, Eco Cave Gardens and enjoy boating on the beautiful Naini Lake.",
                },
                {
                    day: 7,
                    title: "Nainital to Kedarnath Region",
                    description:
                        "Begin the journey towards the Kedarnath region through the scenic Garhwal Himalayas with stops at beautiful mountain towns along the route.",
                },
                {
                    day: 8,
                    title: "Kedarnath Temple Visit",
                    description:
                        "Continue towards Kedarnath and undertake the pilgrimage journey to the sacred Kedarnath Temple surrounded by dramatic Himalayan peaks.",
                },
                {
                    day: 9,
                    title: "Departure from Uttarakhand",
                    description:
                        "Complete your journey back towards the plains and depart for your onward destination with memories of the Himalayan experience.",
                },
            ],
        },

        packages: [
            {
                id: "rishikesh",
                name: "Rishikesh",
                imageUrl:
                    "https://images.unsplash.com/photo-1614605670899-47ecba60bf2a?q=80&w=1572&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                textColor: "#FFFFFF",
                startingPrice: "₹12,500",
                rating: "4.8",
            },
            {
                id: "mussoorie",
                name: "Mussoorie",
                imageUrl:
                    "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1800&q=90",
                textColor: "#FFFFFF",
                startingPrice: "₹14,000",
                rating: "4.8",
            },
            {
                id: "nainital",
                name: "Nainital",
                imageUrl:
                    "https://images.unsplash.com/photo-1643263904933-2aa9fb29bd81?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                textColor: "#FFFFFF",
                startingPrice: "₹13,500",
                rating: "4.7",
            },
            {
                id: "kedarnath",
                name: "Kedarnath",
                imageUrl:
                    "https://images.unsplash.com/photo-1623952146070-f13fc902f769?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                textColor: "#FFFFFF",
                startingPrice: "₹16,000",
                rating: "4.9",
            },
             {
                id: "Jim Corbett",
                name: "Jim Corbett",
                imageUrl:"https://images.unsplash.com/photo-1765375906788-3526ea224645?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                   
                textColor: "#FFFFFF",
                startingPrice: "₹13,999",
                rating: "4.9",
            },
        ],
    },
    {
        destination: {
            name: "Rajasthan",
            subtitle: "The Land of Kings, Forts & Royal Heritage",
            heroImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=85",
            rating: "4.8",
            reviews: "2.8k",
            packagesCount: "100+ Packages",
            location: "Rajasthan",

            description:
                "Experience royal palaces, magnificent forts, golden deserts and vibrant culture in India's land of kings.",

            weather: "10°C - 35°C",
            idealTrip: "5 - 8 Days",
            budget: "₹10,000 - ₹25,000",

            /* ============================================================
               ACTIVITIES
            ============================================================ */
            attractions: [
                {
                    name: "Jaipur",
                    stat: "Pink City",
                    image:
                        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=85",
                },
                {
                    name: "Udaipur",
                    stat: "City of Lakes",
                    image:
                        "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1600&q=85",
                },
                {
                    name: "Jaisalmer",
                    stat: "Golden City",
                    image:
                        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=85",
                },
                {
                    name: "Jodhpur",
                    stat: "Blue City",
                    image:
                        "https://images.unsplash.com/photo-1592639296346-560c37a0f711?auto=format&fit=crop&w=1600&q=85",
                },
                {
                    name: "Pushkar",
                    stat: "Sacred Desert Town",
                    image:
                        "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1600&q=85",
                },
                {
                    name: "Ranthambore",
                    stat: "Wildlife & Safari",
                    image:
                        "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1600&q=85",
                },
            ],
            activities: [
                {
                    text: "Desert Safari",
                    icon: Caravan,
                },
                {
                    text: "Camel Ride",
                    icon: Bike,
                },
                {
                    text: "Fort Exploration",
                    icon: MapPin,
                },
                {
                    text: "Camping",
                    icon: TentTree,
                },
                {
                    text: "Boating",
                    icon: Waves,
                },
                {
                    text: "Heritage Walk",
                    icon: PersonStanding,
                },
                {
                    text: "Shopping",
                    icon: Sparkles,
                },
                {
                    text: "Cultural Shows",
                    icon: Flame,
                },
            ],

            /* ============================================================
               BEST TIME TO VISIT
            ============================================================ */

            bestTimeToVisit: {
                months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],

                seasons: [
                    {
                        name: "Winter",
                        months: "Oct - Feb",
                        description:
                            "Pleasant days and cool evenings, ideal for sightseeing and desert experiences.",
                        icon: "winter",
                    },
                    {
                        name: "Summer",
                        months: "Mar - Jun",
                        description:
                            "Hot daytime temperatures but fewer crowds and attractive travel deals.",
                        icon: "summer",
                    },
                    {
                        name: "Monsoon",
                        months: "Jul - Sep",
                        description:
                            "Occasional rain brings greener landscapes and refreshing views.",
                        icon: "monsoon",
                    },
                ],
            },

            /* ============================================================
               TRAVEL INFORMATION
            ============================================================ */

            travelInfo: [
                {
                    label: "Nearest Airport",
                    value: "Jaipur International Airport",
                    icon: "airport",
                },
                {
                    label: "Nearest Railway Station",
                    value: "Jaipur Junction",
                    icon: "railway",
                },
                {
                    label: "Local Transport",
                    value: "Buses, Taxis, Auto Rickshaws Available",
                    icon: "transport",
                },
                {
                    label: "Languages Spoken",
                    value: "Hindi, English, Rajasthani",
                    icon: "language",
                },
                {
                    label: "Permits Required",
                    value: "No Special Permit Required",
                    icon: "permit",
                },
                {
                    label: "Currency",
                    value: "Indian Rupee (INR)",
                    icon: "currency",
                },
            ],

            /* ============================================================
               PACKING ITEMS
            ============================================================ */

            packingItems: [
                {
                    label: "Light Cotton Clothes",
                    icon: "clothes",
                },
                {
                    label: "Sunglasses & Sunscreen",
                    icon: "sunglasses",
                },
                {
                    label: "Comfortable Walking Shoes",
                    icon: "shoes",
                },
                {
                    label: "Power Bank & ID Proof",
                    icon: "powerbank",
                },
                {
                    label: "Personal Medicines",
                    icon: "medicine",
                },
            ],

            /* ============================================================
               GALLERY
            ============================================================ */

            gallery: [
                {
                    src: "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1600&q=85",
                    title: "City Palace",
                    location: "Udaipur",
                },
                {
                    src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=85",
                    title: "Amber Fort",
                    location: "Jaipur",
                },
                {
                    src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=85",
                    title: "Jaisalmer Fort",
                    location: "Jaisalmer",
                },
                {
                    src: "https://images.unsplash.com/photo-1699949958644-64499c608946?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZSUyMHBpY2hvbGF8ZW58MHx8MHx8fDA%3D",
                    title: "Lake Pichola",
                    location: "Udaipur",
                },
                {
                    src: "https://images.unsplash.com/photo-1602858659965-ea6f743b7679?q=80&w=1693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Thar Desert",
                    location: "Jaisalmer",
                },
            ],

            /* ============================================================
               DESTINATION CATEGORIES
            ============================================================ */

            categories: [
                {
                    title: "Heritage",
                    icon: MapPin,
                },
                {
                    title: "Desert",
                    icon: Caravan,
                },
                {
                    title: "Royal Palaces",
                    icon: Sparkles,
                },
                {
                    title: "Culture",
                    icon: Flame,
                },
                {
                    title: "Honeymoon",
                    icon: Waves,
                },
                {
                    title: "Weekend Trips",
                    icon: CalendarDays,
                },
            ],

            /* ============================================================
               ITINERARY
            ============================================================ */

            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Jaipur & Local Sightseeing",
                    description:
                        "Arrive in Jaipur, check into your hotel and explore the Pink City's famous markets and attractions.",
                },
                {
                    day: 2,
                    title: "Amber Fort, City Palace & Hawa Mahal",
                    description:
                        "Explore Jaipur's magnificent forts and palaces including Amber Fort, City Palace and Hawa Mahal.",
                },
                {
                    day: 3,
                    title: "Jaipur to Jodhpur & Blue City Exploration",
                    description:
                        "Travel towards Jodhpur and explore the historic Blue City and its vibrant local markets.",
                },
                {
                    day: 4,
                    title: "Jodhpur to Jaisalmer & Desert Experience",
                    description:
                        "Continue to Jaisalmer and enjoy a memorable evening with camel rides, desert camping and cultural performances.",
                },
                {
                    day: 5,
                    title: "Jaisalmer Fort & Local Sightseeing",
                    description:
                        "Explore Jaisalmer Fort, Patwon Ki Haveli, Gadisar Lake and the city's historic streets.",
                },
                {
                    day: 6,
                    title: "Jaisalmer to Udaipur",
                    description:
                        "Travel to the beautiful lake city of Udaipur and relax by the scenic lakeside.",
                },
                {
                    day: 7,
                    title: "Udaipur City Palace & Lake Pichola",
                    description:
                        "Visit City Palace, Jagdish Temple and enjoy the beautiful views around Lake Pichola.",
                },
                {
                    day: 8,
                    title: "Departure from Udaipur",
                    description:
                        "Check out from the hotel and depart from Udaipur with unforgettable memories of Rajasthan.",
                },
            ],
        },

        packages: [
            {
                id: "udaipur",
                name: "Udaipur",
                imageUrl: "https://images.unsplash.com/photo-1706961121527-4017856774c7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                textColor: "#FAAE2B",
                startingPrice: "₹15,000",
                rating: "4.8",
            },
            {
                id: "jaipur",
                name: "Jaipur",
                imageUrl: "https://images.unsplash.com/photo-1695395550316-8995ae9d35ff?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                textColor: "#FFFFFF",
                startingPrice: "₹12,500",
                rating: "4.7",
            },
            {
                id: "jaisalmer",
                name: "Jaisalmer",
                imageUrl: "https://images.unsplash.com/photo-1602858659965-ea6f743b7679?q=80&w=1693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                textColor: "#FFFFFF",
                startingPrice: "₹16,500",
                rating: "4.9",
            },
        ],
    },
    {
        destination: {
            name: "Tamil Nadu",
            subtitle: "The Land of Temples, Hills & Culture",

            heroImage:
                "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2400&q=90",

            rating: "4.8",
            reviews: "2.5k",
            packagesCount: "120+ Packages",
            location: "Tamil Nadu",

            description:
                "Explore magnificent temples, misty hill stations, beautiful beaches, rich traditions and vibrant culture in the diverse land of Tamil Nadu.",

            weather: "18°C - 35°C",
            idealTrip: "5 - 8 Days",
            budget: "₹9000 - ₹20000",

            attractions: [
                {
                    name: "Ooty",
                    stat: "Queen of Hill Stations",
                    image:
                        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=85",
                },
                {
                    name: "Kodaikanal",
                    stat: "Princess of Hills",
                    image:
                        "https://images.unsplash.com/photo-1665481193520-86e5eaba1af6?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    name: "Chennai",
                    stat: "Gateway to South India",
                    image: "https://images.unsplash.com/photo-1644852037516-95c8fba481f9?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    name: "Madurai",
                    stat: "Temple City",
                    image:
                        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=85",
                },
                {
                    name: "Rameswaram",
                    stat: "Sacred Island Town",
                    image:
                        "https://images.unsplash.com/photo-1719306135948-8be84c0d791d?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    name: "Kanyakumari",
                    stat: "Land's End of India",
                    image:
                        "https://images.unsplash.com/photo-1610902552120-c577dbde88a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FueWFrdW1hcml8ZW58MHx8MHx8fDA%3D",
                },
            ],
            activities: [
                {
                    text: "Hill Trekking",
                    icon: PersonStanding,
                },
                {
                    text: "Nature Walks",
                    icon: TentTree,
                },
                {
                    text: "Beach Activities",
                    icon: Waves,
                },
                {
                    text: "Temple Tours",
                    icon: MapPin,
                },
                {
                    text: "Wildlife Safari",
                    icon: Caravan,
                },
                {
                    text: "Boating",
                    icon: Waves,
                },
                {
                    text: "Biking",
                    icon: Bike,
                },
                {
                    text: "Cultural Tours",
                    icon: Sparkles,
                },
            ],

            bestTimeToVisit: {
                months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],

                seasons: [
                    {
                        name: "Winter",
                        months: "Oct - Feb",
                        description:
                            "Pleasant weather makes winter ideal for exploration.",
                        icon: "winter",
                    },
                    {
                        name: "Summer",
                        months: "Mar - Jun",
                        description:
                            "Warm weather suits beaches and hill stations.",
                        icon: "summer",
                    },
                    {
                        name: "Monsoon",
                        months: "Jul - Sep",
                        description:
                            "Rain brings lush greenery and beautiful landscapes.",
                        icon: "monsoon",
                    },
                ],
            },

            travelInfo: [
                {
                    label: "Nearest Airport",
                    value: "Chennai International Airport",
                    icon: "airport",
                },
                {
                    label: "Nearest Railway Station",
                    value: "Chennai Central Railway Station",
                    icon: "railway",
                },
                {
                    label: "Local Transport",
                    value: "Buses, Taxis, Rental Cars & Bikes",
                    icon: "transport",
                },
                {
                    label: "Languages Spoken",
                    value: "Tamil, English, Hindi",
                    icon: "language",
                },
                {
                    label: "Permits Required",
                    value: "Required for Certain Protected & Wildlife Areas",
                    icon: "permit",
                },
                {
                    label: "Currency",
                    value: "Indian Rupee (INR)",
                    icon: "currency",
                },
            ],

            packingItems: [
                {
                    label: "Light Cotton Clothes",
                    icon: "clothes",
                },
                {
                    label: "Sunglasses & Sunscreen",
                    icon: "sunglasses",
                },
                {
                    label: "Comfortable Walking Shoes",
                    icon: "shoes",
                },
                {
                    label: "Power Bank & ID Proof",
                    icon: "powerbank",
                },
                {
                    label: "Personal Medicines",
                    icon: "medicine",
                },
            ],

            gallery: [
                {
                    src:
                        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1800&q=90",
                    title: "Ooty",
                    location: "Tamil Nadu",
                },
                {
                    src:
                        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1800&q=90",
                    title: "Kodaikanal",
                    location: "Tamil Nadu",
                },
                {
                    src:
                        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1800&q=90",
                    title: "Madurai",
                    location: "Tamil Nadu",
                },

                {
                    src:
                        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1800&q=90",
                    title: "Tamil Nadu Landscape",
                    location: "Tamil Nadu",
                },
                {
                    src:
                        "https://images.unsplash.com/photo-1644852037516-95c8fba481f9?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Chennai",
                    location: "Tamil Nadu",
                },
            ],

            categories: [
                {
                    title: "Hill Stations",
                    icon: Sparkles,
                },
                {
                    title: "Nature",
                    icon: Waves,
                },
                {
                    title: "Temples",
                    icon: MapPin,
                },
                {
                    title: "Culture",
                    icon: Sparkles,
                },
                {
                    title: "Wildlife",
                    icon: Caravan,
                },
                {
                    title: "Weekend Trips",
                    icon: CalendarDays,
                },
            ],

            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Chennai",
                    description:
                        "Arrive in Chennai, check into your hotel and explore Marina Beach, Kapaleeshwarar Temple and the vibrant city atmosphere.",
                },
                {
                    day: 2,
                    title: "Chennai to Ooty",
                    description:
                        "Travel towards the Nilgiri Hills and arrive in Ooty. Spend the evening exploring the town and enjoying the cool mountain weather.",
                },
                {
                    day: 3,
                    title: "Ooty Sightseeing",
                    description:
                        "Visit Ooty Lake, Botanical Garden, Doddabetta Peak and enjoy the scenic beauty of the Nilgiri Mountains.",
                },
                {
                    day: 4,
                    title: "Ooty to Kodaikanal",
                    description:
                        "Travel towards Kodaikanal through scenic landscapes and settle into the peaceful hill station surrounded by forests and valleys.",
                },
                {
                    day: 5,
                    title: "Kodaikanal Sightseeing",
                    description:
                        "Explore Kodaikanal Lake, Coaker's Walk, Bryant Park, Pillar Rocks and other scenic viewpoints around the hill station.",
                },
                {
                    day: 6,
                    title: "Kodaikanal to Madurai",
                    description:
                        "Travel down from the hills towards Madurai and explore the city's historic streets, markets and traditional Tamil culture.",
                },
                {
                    day: 7,
                    title: "Madurai Temple & Cultural Tour",
                    description:
                        "Visit the magnificent Meenakshi Amman Temple, Thirumalai Nayakkar Palace and experience the rich heritage of Madurai.",
                },
                {
                    day: 8,
                    title: "Departure from Tamil Nadu",
                    description:
                        "Complete your Tamil Nadu journey and depart from Madurai or Chennai for your onward destination with memorable experiences.",
                },
            ],
        },

        packages: [
            {
                id: "ooty",
                name: "Ooty",
                imageUrl:
                    "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1800&q=90",
                textColor: "#FFFFFF",
                startingPrice: "₹12,000",
                rating: "4.8",
            },
            {
                id: "kodaikanal",
                name: "Kodaikanal",
                imageUrl:
                    "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1800&q=90",
                textColor: "#FFFFFF",
                startingPrice: "₹13,500",
                rating: "4.8",
            },
            {
                id: "madurai",
                name: "Madurai",
                imageUrl:
                    "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1800&q=90",
                textColor: "#FFFFFF",
                startingPrice: "₹10,500",
                rating: "4.7",
            },
        ],
    },

    {
        destination: {
            name: "Kerala",
            subtitle: "God's Own Country",

            heroImage: "/images/featuredImages/image_6.png",

            rating: "4.9",
            reviews: "3.1k",
            packagesCount: "180+ Packages",
            location: "Kerala",

            description:
                "Discover serene backwaters, lush green hills, beautiful beaches, wildlife sanctuaries and rich cultural traditions in the enchanting land of Kerala.",

            weather: "23°C - 32°C",
            idealTrip: "5 - 8 Days",
            budget: "₹10000 - ₹22000",

            activities: [
                {
                    text: "Backwater Cruise",
                    icon: Waves,
                },
                {
                    text: "Trekking",
                    icon: PersonStanding,
                },
                {
                    text: "Houseboat Stay",
                    icon: Caravan,
                },
                {
                    text: "Beach Activities",
                    icon: Umbrella,
                },
                {
                    text: "Wildlife Safari",
                    icon: Caravan,
                },
                {
                    text: "Tea Plantation",
                    icon: Sparkles,
                },
                {
                    text: "Ayurveda",
                    icon: Sparkles,
                },
                {
                    text: "Biking",
                    icon: Bike,
                },
            ],

            bestTimeToVisit: {
                months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],

                seasons: [
                    {
                        name: "Winter",
                        months: "Oct - Feb",
                        description:
                            "Pleasant weather makes winter ideal for exploring Kerala's diverse attractions.",
                        icon: "winter",
                    },
                    {
                        name: "Summer",
                        months: "Mar - May",
                        description:
                            "Warm days are perfect for beaches and refreshing hill escapes.",
                        icon: "summer",
                    },
                    {
                        name: "Monsoon",
                        months: "Jun - Sep",
                        description:
                            "Monsoon rains bring lush greenery, waterfalls and rejuvenated landscapes.",
                             icon: "monsoon",
                    },
                ],
            },

            travelInfo: [
                {
                    label: "Nearest Airport",
                    value: "Cochin International Airport",
                    icon: "airport",
                },
                {
                    label: "Nearest Railway Station",
                    value: "Ernakulam Junction Railway Station",
                    icon: "railway",
                },
                {
                    label: "Local Transport",
                    value: "Buses, Taxis, Rental Cars, Auto Rickshaws & Bikes",
                    icon: "transport",
                },
                {
                    label: "Languages Spoken",
                    value: "Malayalam, English, Hindi, Tamil",
                    icon: "language",
                },
                {
                    label: "Permits Required",
                    value: "Required for Certain Protected & Wildlife Areas",
                    icon: "permit",
                },

            ],

            packingItems: [
                {
                    label: "Light Cotton Clothes",
                    icon: "clothes",
                },
                {
                    label: "Sunglasses & Sunscreen",
                    icon: "sunglasses",
                },
                {
                    label: "Comfortable Walking Shoes",
                    icon: "shoes",
                },
                {
                    label: "Umbrella & Light Rain Jacket",
                    icon: "umbrella",
                },
                {
                    label: "Power Bank & ID Proof",
                    icon: "powerbank",
                },
            ],

            gallery: [
                {
                    src:
                        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1800&q=90",
                    title: "Alleppey",
                    location: "Kerala",
                },
                {
                    src:
                        "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1800&q=90",
                    title: "Munnar",
                    location: "Kerala",
                },
                {
                    src:
                        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1800&q=90",
                    title: "Wayanad",
                    location: "Kerala",
                },
                {
                    src:
                        "https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&w=1800&q=90",
                    title: "Kovalam",
                    location: "Kerala",
                },
                {
                    src:
                        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2400&q=90",

                    title: "Thekkady",
                    location: "Kerala",
                },
            ],

            categories: [
                {
                    title: "Backwaters",
                    icon: Waves,
                },
                {
                    title: "Hill Stations",
                    icon: Sparkles,
                },
                {
                    title: "Beaches",
                    icon: Umbrella,
                },
                {
                    title: "Wildlife",
                    icon: Caravan,
                },
                {
                    title: "Culture",
                    icon: MapPin,
                },
                {
                    title: "Ayurveda",
                    icon: Sparkles,
                },
            ],

            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Kochi",
                    description:
                        "Arrive in Kochi, check into your hotel and explore Fort Kochi, Chinese fishing nets, St. Francis Church and the historic waterfront.",
                },
                {
                    day: 2,
                    title: "Kochi to Munnar",
                    description:
                        "Travel through scenic mountain roads towards Munnar, stopping at waterfalls, tea plantations and beautiful viewpoints along the way.",
                },
                {
                    day: 3,
                    title: "Munnar Sightseeing",
                    description:
                        "Explore Munnar's tea gardens, Eravikulam National Park, Mattupetty Dam and Echo Point while enjoying the cool mountain climate.",
                },
                {
                    day: 4,
                    title: "Munnar to Thekkady",
                    description:
                        "Drive through the lush Western Ghats towards Thekkady and explore the surrounding forests and spice plantations.",
                },
                {
                    day: 5,
                    title: "Thekkady Wildlife Experience",
                    description:
                        "Enjoy a wildlife experience around Periyar National Park with options for boating, nature walks and exploring the spice-growing region.",
                },
                {
                    day: 6,
                    title: "Thekkady to Alleppey",
                    description:
                        "Travel towards Alleppey and board a traditional Kerala houseboat for a relaxing journey through the beautiful backwaters.",
                },
                {
                    day: 7,
                    title: "Alleppey to Kovalam",
                    description:
                        "Leave the backwaters and travel towards Kovalam, where you can relax on the beach and enjoy the peaceful coastal atmosphere.",
                },
                {
                    day: 8,
                    title: "Departure from Kerala",
                    description:
                        "Enjoy a relaxed morning in Kovalam before departing for your onward destination with unforgettable memories of Kerala.",
                },
            ],
        },
    },
];