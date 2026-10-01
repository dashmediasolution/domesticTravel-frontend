// import "dotenv/config";
// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcryptjs";

// const prisma = new PrismaClient();

// async function main() {
//     const passwordHash = await bcrypt.hash(
//         "Admin@123456",
//         12
//     );

//     await prisma.adminUser.upsert({
//         where: {
//             email: "admin@domestictravel.com",
//         },
//         update: {
//             name: "Admin",
//             passwordHash,
//             isActive: true,
//         },
//         create: {
//             name: "Admin",
//             email: "admin@domestictravel.com",
//             passwordHash,
//             isActive: true,
//         },
//     });

//     console.log(
//         "Admin user created/updated successfully"
//     );
// }

// main()
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });

import {
    PrismaClient,
    PackageOccasion,
    PackageType,
    OfferType,
} from "@prisma/client";

const prisma = new PrismaClient();

const HIMACHAL_SLUG = "himachal-pradesh";

const commonInclusions = [
    "6 Nights Accommodation",
    "Daily Breakfast",
    "Airport Transfers",
    "All Sightseeing (SIC)",
    "English Speaking Guide",
    "Entry Tickets",
    "Train Tickets",
    "All Taxes",
];

const commonExclusions = [
    "International Flights",
    "Lunch & Dinner",
    "Personal Expenses",
    "Travel Insurance",
    "Tips & Gratuities",
    "Early Check-in / Late Check-out",
];

const packages = [
    {
        name: "Manali",
        slug: "manali",
        subtitle: "A Himalayan Paradise",
        category: "Mountains",

        whyVisit: {
            title: "Why Visit Manali?",
            description:
                "Escape into the Himalayas with snow-covered peaks, scenic valleys, thrilling adventures and peaceful mountain landscapes.",
            highlights: [
                "Snow-covered Himalayan peaks",
                "Scenic valleys & waterfalls",
                "Trekking & adventure activities",
                "Peaceful mountain retreats",
            ],
        },

        heroImage:
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1800&q=90",

        gallery: [
            "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&fit=crop&w=2400&q=90",
            "https://images.unsplash.com/photo-1627323122913-da6be1826309?auto=format&fit=crop&w=2400&q=90",
            "https://images.unsplash.com/photo-1685795361556-70b83713af36?auto=format&fit=crop&w=2400&q=90",
            "https://images.unsplash.com/photo-1677820915334-d7ceba1e844a?auto=format&fit=crop&w=2400&q=90",
        ],

        rating: 4.8,
        reviewsCount: 2400,

        location: "Manali, Himachal Pradesh",
        latitude: 32.2396,
        longitude: 77.1887,

        description:
            "Experience snow-capped mountains, lush valleys, pine forests and the scenic beauty of the Beas River in Manali.",

        idealTrip: "4 - 6 Days",
        budget: "₹10,000 - ₹20,000",
        duration: "6 Days / 5 Nights",
        originalPrice: 19999,
        offerPrice: 14999,
        saveAmount: 5000,
        discount: 25,
        validTill: new Date("2026-09-30"),
        groupSize: "2 - 16 People",

        bestTimeToVisit: [
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Oct",
            "Nov",
        ],

        highlights: [
            "Solang Valley",
            "Atal Tunnel",
            "Old Manali",
            "Hadimba Temple",
            "Vashisht Hot Springs",
            "Jogini Waterfall",
        ],

        travelInformation: {
            nearestAirport: {
                label: "Nearest Airport",
                value: "Bhuntar Airport",
            },
            nearestRailwayStation: {
                label: "Nearest Railway Station",
                value: "Joginder Nagar Railway Station",
            },
            localTransport: {
                label: "Local Transport",
                value: "Taxis, Buses & Local Cabs",
            },
            languagesSpoken: {
                label: "Languages Spoken",
                value: "Hindi, English & Pahari",
            },
            permitsRequired: {
                label: "Permits Required",
                value: "Generally Not Required",
            },
            currency: {
                label: "Currency",
                value: "Indian Rupee (INR)",
            },
            activities: [
                "Mountain Trekking",
                "Paragliding",
                "River Rafting",
                "Skiing",
                "Camping",
                "Sightseeing",
                "Nature Walk",
                "Photography",
            ],
        },

        whatToPack: [
            "Warm Clothes",
            "Jacket & Thermals",
            "Comfortable Shoes",
            "Sunglasses & Sunscreen",
            "Power Bank & ID",
            "Personal Medicines",
        ],

        itinerary: [
            {
                day: 1,
                title: "Arrival in Manali",
                description:
                    "Arrive in Manali, check into your hotel and relax. Explore Mall Road and enjoy an evening walk along the Beas River.",
                activities: [
                    "Hotel check-in",
                    "Mall Road visit",
                    "Beas River walk",
                ],
                meals: ["Dinner"],
                overnight: "Manali",
            },
            {
                day: 2,
                title: "Manali Local Sightseeing",
                description:
                    "Visit Hadimba Devi Temple, Manu Temple, Vashisht Village, Vashisht Hot Springs, Manali Gompa and Old Manali.",
                activities: [
                    "Hadimba Temple",
                    "Manu Temple",
                    "Vashisht Village",
                    "Old Manali",
                ],
                meals: ["Breakfast", "Dinner"],
                overnight: "Manali",
            },
            {
                day: 3,
                title: "Solang Valley Adventure",
                description:
                    "Visit Solang Valley and enjoy optional adventure activities such as paragliding, skiing, zorbing and ropeway rides.",
                activities: [
                    "Solang Valley",
                    "Paragliding",
                    "Skiing",
                    "Ropeway ride",
                ],
                meals: ["Breakfast", "Dinner"],
                overnight: "Manali",
            },
            {
                day: 4,
                title: "Atal Tunnel & Sissu",
                description:
                    "Drive through Atal Tunnel and continue towards Sissu. Enjoy spectacular mountain landscapes and explore the scenic Lahaul Valley.",
                activities: [
                    "Atal Tunnel",
                    "Sissu",
                    "Lahaul Valley sightseeing",
                ],
                meals: ["Breakfast", "Dinner"],
                overnight: "Manali",
            },
            {
                day: 5,
                title: "Jogini Waterfall & Old Manali",
                description:
                    "Trek to Jogini Waterfall and enjoy the surrounding forest scenery. Later spend time exploring Old Manali cafes, shops and riverside areas.",
                activities: [
                    "Jogini Waterfall trek",
                    "Old Manali",
                    "Cafe exploration",
                    "Shopping",
                ],
                meals: ["Breakfast", "Dinner"],
                overnight: "Manali",
            },
            {
                day: 6,
                title: "Departure from Manali",
                description:
                    "Enjoy breakfast and some free time for shopping before checking out and beginning your onward journey.",
                activities: ["Breakfast", "Shopping", "Departure"],
                meals: ["Breakfast"],
                overnight: null,
            },
        ],

        metaTitle: "Manali Tour Package | Himalayan Holiday in Himachal",
        metaDescription:
            "Book a Manali tour package and explore Solang Valley, Atal Tunnel, Old Manali, Hadimba Temple, waterfalls and stunning Himalayan landscapes.",
        keywords: [
            "Manali tour package",
            "Manali holiday package",
            "Manali trip",
            "Manali Himachal Pradesh",
            "Manali sightseeing",
            "Solang Valley",
            "Atal Tunnel",
            "Himachal tour package",
        ],
    },

    {
        name: "Shimla",
        slug: "shimla",
        subtitle: "The Queen of Hills",
        category: "Mountains",

        whyVisit: {
            title: "Why Visit Shimla?",
            description:
                "Experience the charm of the Himalayas with colonial architecture, pine-covered hills, pleasant weather and beautiful mountain views.",
            highlights: [
                "Colonial architecture & heritage",
                "Scenic Himalayan landscapes",
                "The famous Mall Road",
                "Pleasant hill-station climate",
            ],
        },

        heroImage: "/images/packageImages/shimla.png",

        gallery: [
            "https://images.unsplash.com/photo-1657894736581-ccc35d62d9e2?auto=format&fit=crop&w=3840&q=90",
            "https://images.unsplash.com/photo-1736958703904-1b881cf6a9d7?auto=format&fit=crop&w=3840&q=90",
            "https://images.unsplash.com/photo-1741420887574-3196cbf94121?auto=format&fit=crop&w=3840&q=90",
            "https://images.unsplash.com/photo-1659972000541-260b360af4f9?auto=format&fit=crop&w=3840&q=90",
            "https://images.unsplash.com/photo-1648830802584-ec070946e591?auto=format&fit=crop&w=3840&q=90",
        ],

        rating: 4.7,
        reviewsCount: 2100,

        location: "Shimla, Himachal Pradesh",
        latitude: 31.1048,
        longitude: 77.1734,

        description:
            "Explore Shimla's colonial charm, scenic Himalayan views, peaceful forests and famous attractions including the Ridge, Mall Road, Jakhoo Temple and Kufri.",

        idealTrip: "4 - 6 Days",
        budget: "₹9,000 - ₹18,000",
        duration: "6 Days / 5 Nights",
        originalPrice: 18999,
        offerPrice: 13999,
        saveAmount: 5000,
        discount: 26,
        validTill: new Date("2026-09-30"),
        groupSize: "2 - 16 People",

        bestTimeToVisit: [
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Oct",
            "Nov",
        ],

        highlights: [
            "The Ridge",
            "Mall Road",
            "Jakhoo Temple",
            "Kufri",
            "Christ Church",
            "Kalka-Shimla Railway",
        ],

        travelInformation: {
            nearestAirport: {
                label: "Nearest Airport",
                value: "Shimla Airport, Jubbarhatti",
            },
            nearestRailwayStation: {
                label: "Nearest Railway Station",
                value: "Shimla Railway Station",
            },
            localTransport: {
                label: "Local Transport",
                value: "Taxis, Buses & Local Cabs",
            },
            languagesSpoken: {
                label: "Languages Spoken",
                value: "Hindi, English & Pahari",
            },
            permitsRequired: {
                label: "Permits Required",
                value: "Generally Not Required",
            },
            currency: {
                label: "Currency",
                value: "Indian Rupee (INR)",
            },
            activities: [
                "Toy Train Ride",
                "Mountain Trekking",
                "Nature Walk",
                "Sightseeing",
                "Shopping",
                "Photography",
                "Snow Activities",
                "Camping",
            ],
        },

        whatToPack: [
            "Warm Clothes",
            "Jacket & Thermals",
            "Comfortable Walking Shoes",
            "Sunglasses & Sunscreen",
            "Power Bank & ID",
            "Personal Medicines",
        ],

        itinerary: [
            {
                day: 1,
                title: "Arrival in Shimla",
                description:
                    "Arrive in Shimla and check into your hotel. Relax and explore Mall Road, Scandal Point and the surrounding areas.",
                activities: [
                    "Hotel check-in",
                    "Mall Road",
                    "Scandal Point",
                ],
                meals: ["Dinner"],
                overnight: "Shimla",
            },
            {
                day: 2,
                title: "Shimla Local Sightseeing",
                description:
                    "Visit The Ridge, Christ Church, Gaiety Theatre, Lakkar Bazaar, Kali Bari Temple and Jakhoo Temple.",
                activities: [
                    "The Ridge",
                    "Christ Church",
                    "Lakkar Bazaar",
                    "Jakhoo Temple",
                ],
                meals: ["Breakfast", "Dinner"],
                overnight: "Shimla",
            },
            {
                day: 3,
                title: "Kufri & Himalayan Nature Park",
                description:
                    "Explore Kufri and enjoy the scenic Himalayan views. Visit Himalayan Nature Park and experience local adventure activities.",
                activities: [
                    "Kufri",
                    "Himalayan Nature Park",
                    "Adventure activities",
                ],
                meals: ["Breakfast", "Dinner"],
                overnight: "Shimla",
            },
            {
                day: 4,
                title: "Naldehra & Mashobra",
                description:
                    "Take a scenic excursion to Naldehra and Mashobra. Enjoy peaceful forest walks, mountain views and the beautiful surroundings.",
                activities: [
                    "Naldehra",
                    "Mashobra",
                    "Forest walk",
                ],
                meals: ["Breakfast", "Dinner"],
                overnight: "Shimla",
            },
            {
                day: 5,
                title: "Shimla Heritage & Toy Train",
                description:
                    "Explore Shimla's colonial heritage and enjoy a scenic ride on the historic Kalka-Shimla railway route.",
                activities: [
                    "Colonial heritage",
                    "Toy train experience",
                    "Local sightseeing",
                ],
                meals: ["Breakfast", "Dinner"],
                overnight: "Shimla",
            },
            {
                day: 6,
                title: "Departure from Shimla",
                description:
                    "Enjoy breakfast and some free time for shopping before checking out and beginning your onward journey.",
                activities: [
                    "Breakfast",
                    "Shopping",
                    "Departure",
                ],
                meals: ["Breakfast"],
                overnight: null,
            },
        ],

        metaTitle: "Shimla Tour Package | Queen of Hills Himachal Pradesh",
        metaDescription:
            "Book a Shimla tour package and explore Mall Road, The Ridge, Kufri, Jakhoo Temple, Christ Church and the scenic Himalayan hills.",
        keywords: [
            "Shimla tour package",
            "Shimla holiday package",
            "Shimla trip",
            "Shimla Himachal Pradesh",
            "Shimla sightseeing",
            "Kufri tour",
            "Mall Road Shimla",
            "Himachal tour package",
        ],
    },

    {
        name: "Dharamshala",
        slug: "dharamshala",
        subtitle: "Where Mountains Meet Serenity",
        category: "Mountains",

        whyVisit: {
            title: "Why Visit Dharamshala?",
            description:
                "Discover peaceful mountain surroundings, Tibetan culture, lush valleys and breathtaking views of the Dhauladhar ranges.",
            highlights: [
                "Dhauladhar mountain views",
                "Tibetan culture & monasteries",
                "Peaceful mountain landscapes",
                "Triund trekking experience",
            ],
        },

        heroImage:
            "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=2560&q=80",

        gallery: [
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
        ],

        rating: 4.8,
        reviewsCount: 1800,

        location: "Dharamshala, Himachal Pradesh",
        latitude: 32.219,
        longitude: 76.3234,

        description:
            "Experience the peaceful beauty of Dharamshala with Himalayan landscapes, Tibetan culture, monasteries, waterfalls and scenic mountain villages around McLeod Ganj.",

        idealTrip: "4 - 6 Days",
        budget: "₹9,000 - ₹18,000",
        duration: "6 Days / 5 Nights",
        originalPrice: 18499,
        offerPrice: 13499,
        saveAmount: 5000,
        discount: 27,
        validTill: new Date("2026-09-30"),
        groupSize: "2 - 16 People",

        bestTimeToVisit: [
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Oct",
            "Nov",
        ],

        highlights: [
            "McLeod Ganj",
            "Triund Trek",
            "Dalai Lama Temple",
            "Bhagsu Waterfall",
            "Naddi View Point",
            "Dharamshala Cricket Stadium",
        ],

        travelInformation: {
            nearestAirport: {
                label: "Nearest Airport",
                value: "Kangra Airport, Gaggal",
            },
            nearestRailwayStation: {
                label: "Nearest Railway Station",
                value: "Pathankot Railway Station",
            },
            localTransport: {
                label: "Local Transport",
                value: "Taxis, Buses & Local Cabs",
            },
            languagesSpoken: {
                label: "Languages Spoken",
                value: "Hindi, English & Tibetan",
            },
            permitsRequired: {
                label: "Permits Required",
                value: "Generally Not Required",
            },
            currency: {
                label: "Currency",
                value: "Indian Rupee (INR)",
            },
            activities: [
                "Mountain Trekking",
                "Triund Trek",
                "Camping",
                "Nature Walk",
                "Sightseeing",
                "Photography",
                "Meditation",
                "Paragliding",
            ],
        },

        whatToPack: [
            "Warm Clothes",
            "Jacket & Thermals",
            "Trekking Shoes",
            "Sunglasses & Sunscreen",
            "Power Bank & ID",
            "Personal Medicines",
        ],

        itinerary: [
            {
                day: 1,
                title: "Arrival in Dharamshala",
                description:
                    "Arrive in Dharamshala and check into your hotel. Relax and explore the local market and peaceful surroundings.",
                activities: [
                    "Hotel check-in",
                    "Local market",
                    "Evening walk",
                ],
                meals: ["Dinner"],
                overnight: "Dharamshala",
            },
            {
                day: 2,
                title: "McLeod Ganj Sightseeing",
                description:
                    "Visit McLeod Ganj, Dalai Lama Temple, Namgyal Monastery, Tibetan Market and St. John in the Wilderness Church.",
                activities: [
                    "McLeod Ganj",
                    "Dalai Lama Temple",
                    "Namgyal Monastery",
                    "Tibetan Market",
                ],
                meals: ["Breakfast", "Dinner"],
                overnight: "Dharamshala",
            },
            {
                day: 3,
                title: "Bhagsu & Dharamkot",
                description:
                    "Explore Bhagsunag Temple and trek to Bhagsu Waterfall. Later visit Dharamkot and enjoy the peaceful mountain atmosphere.",
                activities: [
                    "Bhagsunag Temple",
                    "Bhagsu Waterfall",
                    "Dharamkot",
                ],
                meals: ["Breakfast", "Dinner"],
                overnight: "Dharamshala",
            },
            {
                day: 4,
                title: "Triund Trek Experience",
                description:
                    "Begin your scenic Triund trek through forests and mountain trails. Enjoy spectacular views of the Dhauladhar range.",
                activities: [
                    "Triund Trek",
                    "Mountain views",
                    "Forest trail",
                    "Photography",
                ],
                meals: ["Breakfast", "Dinner"],
                overnight: "Dharamshala",
            },
            {
                day: 5,
                title: "Naddi & Local Exploration",
                description:
                    "Visit Naddi View Point and Dal Lake. Later explore Dharamshala Cricket Stadium and enjoy the surrounding Himalayan scenery.",
                activities: [
                    "Naddi View Point",
                    "Dal Lake",
                    "Cricket Stadium",
                    "Local sightseeing",
                ],
                meals: ["Breakfast", "Dinner"],
                overnight: "Dharamshala",
            },
            {
                day: 6,
                title: "Departure from Dharamshala",
                description:
                    "Enjoy breakfast and some free time for shopping before checking out and beginning your onward journey.",
                activities: [
                    "Breakfast",
                    "Shopping",
                    "Departure",
                ],
                meals: ["Breakfast"],
                overnight: null,
            },
        ],

        metaTitle:
            "Dharamshala Tour Package | Mountains, Monasteries & Triund",
        metaDescription:
            "Book a Dharamshala tour package and explore McLeod Ganj, Triund, Bhagsu Waterfall, Tibetan monasteries and beautiful Dhauladhar mountain views.",
        keywords: [
            "Dharamshala tour package",
            "Dharamshala holiday package",
            "Dharamshala trip",
            "McLeod Ganj tour",
            "Triund trek package",
            "Bhagsu Waterfall",
            "Dharamshala sightseeing",
            "Himachal tour package",
        ],
    },

    {
        name: "Kasol",
        slug: "kasol",
        subtitle: "A Paradise in Parvati Valley",
        category: "Camping",

        whyVisit: {
            title: "Why Visit Kasol?",
            description:
                "Immerse yourself in a peaceful Himalayan escape surrounded by pine forests, mountain rivers, scenic villages and adventurous trails.",
            highlights: [
                "Beautiful Parvati Valley",
                "Mountain rivers & pine forests",
                "Trekking & hiking trails",
                "Peaceful village experiences",
            ],
        },

        heroImage:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2560&q=80",

        gallery: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
        ],

        rating: 4.8,
        reviewsCount: 1900,

        location: "Kasol, Himachal Pradesh",
        latitude: 32.01,
        longitude: 77.315,

        description:
            "Escape to Kasol for peaceful riverside landscapes, pine forests, Himalayan villages, scenic treks and the unique mountain culture of Parvati Valley.",

        idealTrip: "4 - 6 Days",
        budget: "₹8,000 - ₹17,000",
        duration: "6 Days / 5 Nights",
        originalPrice: 17999,
        offerPrice: 12999,
        saveAmount: 5000,
        discount: 28,
        validTill: new Date("2026-09-30"),
        groupSize: "2 - 16 People",

        bestTimeToVisit: [
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Sep",
            "Oct",
            "Nov",
        ],

        highlights: [
            "Parvati River",
            "Chalal Village",
            "Manikaran Sahib",
            "Kheerganga Trek",
            "Tosh Village",
            "Parvati Valley",
        ],

        travelInformation: {
            nearestAirport: {
                label: "Nearest Airport",
                value: "Bhuntar Airport",
            },
            nearestRailwayStation: {
                label: "Nearest Railway Station",
                value: "Joginder Nagar Railway Station",
            },
            localTransport: {
                label: "Local Transport",
                value: "Taxis, Buses & Local Cabs",
            },
            languagesSpoken: {
                label: "Languages Spoken",
                value: "Hindi, English & Pahari",
            },
            permitsRequired: {
                label: "Permits Required",
                value: "Generally Not Required",
            },
            currency: {
                label: "Currency",
                value: "Indian Rupee (INR)",
            },
            activities: [
                "Mountain Trekking",
                "Kheerganga Trek",
                "Camping",
                "Village Walk",
                "River Views",
                "Photography",
                "Nature Walk",
                "Sightseeing",
            ],
        },

        whatToPack: [
            "Warm Clothes",
            "Trekking Jacket",
            "Trekking Shoes",
            "Sunglasses & Sunscreen",
            "Power Bank & ID",
            "Personal Medicines",
        ],

        itinerary: [
            {
                day: 1,
                title: "Arrival in Kasol",
                description:
                    "Arrive in Kasol and check into your hotel or campsite. Relax beside the Parvati River and explore the local market in the evening.",
                activities: [
                    "Hotel or campsite check-in",
                    "Parvati River",
                    "Kasol market",
                ],
                meals: ["Dinner"],
                overnight: "Kasol",
            },
            {
                day: 2,
                title: "Kasol & Chalal Village",
                description:
                    "Explore Kasol and walk through the scenic forest trail towards Chalal Village. Enjoy peaceful mountain views and spend the evening beside the Parvati River.",
                activities: [
                    "Kasol sightseeing",
                    "Chalal Village walk",
                    "Forest trail",
                    "Parvati River",
                ],
                meals: ["Breakfast", "Dinner"],
                overnight: "Kasol",
            },
            {
                day: 3,
                title: "Manikaran Excursion",
                description:
                    "Visit Manikaran Sahib, explore the famous hot springs and temples, and enjoy the beautiful Parvati Valley surrounding Manikaran.",
                activities: [
                    "Manikaran Sahib",
                    "Hot springs",
                    "Temple visit",
                    "Parvati Valley sightseeing",
                ],
                meals: ["Breakfast", "Dinner"],
                overnight: "Kasol",
            },
            {
                day: 4,
                title: "Kheerganga Trek",
                description:
                    "Begin the scenic trek towards Kheerganga through forests and mountain trails. Enjoy panoramic Himalayan views and experience the famous natural hot spring.",
                activities: [
                    "Kheerganga Trek",
                    "Forest trail",
                    "Mountain views",
                    "Natural hot spring",
                ],
                meals: ["Breakfast", "Dinner"],
                overnight: "Kasol",
            },
            {
                day: 5,
                title: "Tosh Valley Exploration",
                description:
                    "Drive towards Barshaini and explore the beautiful Tosh Valley. Enjoy village walks, mountain scenery and peaceful views of the surrounding peaks.",
                activities: [
                    "Barshaini",
                    "Tosh Village",
                    "Village walk",
                    "Mountain photography",
                ],
                meals: ["Breakfast", "Dinner"],
                overnight: "Kasol",
            },
            {
                day: 6,
                title: "Departure from Kasol",
                description:
                    "Enjoy breakfast and some free time for shopping before checking out and beginning your onward journey.",
                activities: [
                    "Breakfast",
                    "Shopping",
                    "Departure",
                ],
                meals: ["Breakfast"],
                overnight: null,
            },
        ],

        metaTitle:
            "Kasol Tour Package | Parvati Valley Trekking & Camping",
        metaDescription:
            "Book a Kasol tour package and explore Parvati Valley, Chalal, Manikaran, Kheerganga, Tosh Village and beautiful Himalayan landscapes.",
        keywords: [
            "Kasol tour package",
            "Kasol holiday package",
            "Kasol trip",
            "Kasol Himachal Pradesh",
            "Parvati Valley tour",
            "Kheerganga trek package",
            "Tosh Valley",
            "Manikaran tour",
            "Himachal trekking package",
        ],
    },
];

async function main() {
    console.log("Starting Himachal Pradesh package seed...");

    const destination = await prisma.destination.findUnique({
        where: {
            slug: HIMACHAL_SLUG,
        },
    });

    if (!destination) {
        throw new Error(
            `Destination "${HIMACHAL_SLUG}" not found. Create Himachal Pradesh first.`,
        );
    }

    console.log(
        `Found destination: ${destination.name} (${destination.id})`,
    );

    for (const data of packages) {
        const existingPackage = await prisma.package.findFirst({
            where: {
                destinationId: destination.id,
                slug: data.slug,
            },
        });

        const packageData = {
            name: data.name,
            slug: data.slug,
            category: data.category,

            type: PackageType.REGULAR,
            occasion: PackageOccasion.NONE,

            destinationId: destination.id,

            subtitle: data.subtitle,
            description: data.description,

            location: data.location,
            latitude: data.latitude,
            longitude: data.longitude,

            duration: data.duration,
            groupSize: data.groupSize,

            idealTrip: data.idealTrip,
            budget: data.budget,
            bestTimeToVisit: data.bestTimeToVisit,

            originalPrice: data.originalPrice,
            discount: data.discount,
            saveAmount: data.saveAmount,

            validTill: data.validTill,

            rating: data.rating,
            reviewsCount: data.reviewsCount,

            highlights: data.highlights,
            inclusions: commonInclusions,
            exclusions: commonExclusions,

            whyVisit: data.whyVisit,

            heroImage: {
                url: data.heroImage,
            },

            gallery: data.gallery.map((url) => ({
                url,
            })),

            travelInformation: data.travelInformation,

            whatToPack: data.whatToPack,

            itinerary: data.itinerary,

            metaTitle: data.metaTitle,
            metaDescription: data.metaDescription,
            keywords: data.keywords,

            isPublished: true,
            isFeatured: false,

            publishedAt: new Date(),
        };

        let packageRecord;

        if (existingPackage) {
            packageRecord = await prisma.package.update({
                where: {
                    id: existingPackage.id,
                },
                data: packageData,
            });

            console.log(`Updated package: ${data.name}`);
        } else {
            packageRecord = await prisma.package.create({
                data: packageData,
            });

            console.log(`Created package: ${data.name}`);
        }

        const offerSlug = `${data.slug}-regular-offer`;

        const existingOffer = await prisma.offer.findUnique({
            where: {
                slug: offerSlug,
            },
        });

        const offerData = {
            title: `${data.name} Tour Package Offer`,
            slug: offerSlug,
            type: OfferType.REGULAR,

            description: `Special offer on ${data.name} tour package.`,

            packageId: packageRecord.id,

            originalPrice: data.originalPrice,
            offerPrice: data.offerPrice,
            discount: data.discount,
            saveAmount: data.saveAmount,

            startDate: new Date(),
            endDate: data.validTill,

            isActive: true,
            isFeatured: true,

            badgeText: `${data.discount}% OFF`,
        };

        if (existingOffer) {
            await prisma.offer.update({
                where: {
                    id: existingOffer.id,
                },
                data: offerData,
            });

            console.log(`Updated offer: ${offerSlug}`);
        } else {
            await prisma.offer.create({
                data: offerData,
            });

            console.log(`Created offer: ${offerSlug}`);
        }
    }

    console.log("Himachal Pradesh package seed completed successfully.");
}

main()
    .catch((error) => {
        console.error("Seed failed:", error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });