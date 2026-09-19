import {
    PersonStanding,
    TentTree,
    Brain,
    Flame,
    ArrowDown,
    Compass,
    CableCar,
    ShipWheel,
    Home,
    TreePine,
    ShoppingBag,
    Wind,
    Snowflake,
    Sunrise,
    Umbrella,
    Caravan,
    Bike,
    Sparkles,
    Waves,
    MapPin,
    Music,
    Leaf,
    Plane,
    TrainFront,
    Bus,
    Languages,
    FileCheck,
    Binoculars,
    IndianRupee,
    Shirt,
    Sun,
    Star,
    Footprints,
    BatteryCharging,
    Pill,
    Mountain,
    Landmark,
    Heart,
    Palmtree,
    Ship,
    Sailboat, Fish, CarFront, PawPrint, Bird,
    Camera,
    Church,
    Building2,
    Sunset,
    Utensils,
    Waves as Water,
} from "lucide-react";
export const packageData = [

    {
        name: "Tamil Nadu",

        packages: [
            {
                name: "Ooty",
                category: "Nature",
                subtitle: "The Queen of Hill Stations",
                whyVisit: {
                    title: "Why Visit Ooty?",
                    description:
                        "Escape to misty hills, peaceful tea gardens and refreshing mountain landscapes in the charming Nilgiri hills.",
                    highlights: [
                        "Misty Nilgiri mountains",
                        "Beautiful tea plantations",
                        "Scenic lakes & viewpoints",
                        "Pleasant hill-station climate",
                    ],
                },
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage: "https://images.unsplash.com/photo-1544588440-fc7551331160?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1707655315272-33a54a771068?auto=format&fit=crop&w=2400&q=90",
                        alt: "Nilgiri Mountain Railway in Ooty",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1756009481685-1513779372cf?auto=format&fit=crop&w=2400&q=90",
                        alt: "Ooty tea plantations and green hills",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1771149149669-abe6fade279c?auto=format&fit=crop&w=2400&q=90",
                        alt: "Ooty tea gardens and misty mountains",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1654099602420-c90791787b79?auto=format&fit=crop&w=2400&q=90",
                        alt: "Ooty Lake surrounded by green hills",
                    },
                   
                    {
                        src:
                            "https://images.unsplash.com/photo-1683665446527-0bfa0d7a8822?auto=format&fit=crop&w=2400&q=90",
                        alt: "Ooty tea plantations and hills",
                    },
                ],


                rating: "4.8",
                reviews: "1.8k",

                location: "Ooty, Tamil Nadu",
                latitude: 32.2432,
                longitude: 77.1892,
                description:
                    "Discover misty mountains, lush tea gardens, serene lakes and cool weather in the beautiful hill station of Ooty.",

                weather: "12°C - 25°C",
                idealTrip: "3 - 5 Days",
                budget: "₹9,000 - ₹18,000",

                duration: "4 Days / 3 Nights",
                startingPrice: "₹9,999",
                originalPrice: "₹12,999",
                offerPrice: "₹9,999",
                saveAmount: "₹3,000",
                discount: "23%",
                validTill: "30 September 2026",
                groupSize: "2 - 16 People",
                bestTime: "October - June",

                highlights: [
                    "Ooty Lake",
                    "Nilgiri Mountain Railway",
                    "Doddabetta Peak",
                    "Tea Gardens",
                    "Botanical Gardens",
                ],
                bestTimeToVisit: {
                    months: ["Oct", "Nov", "Dec", "Jan", "Feb"],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Dec - Feb",
                            description:
                                "Pleasant and comfortable weather, making it ideal for sightseeing, temple visits and exploring hill stations.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "Mar - Jun",
                            description:
                                "Warm weather across most of the state, while hill stations such as Ooty and Kodaikanal remain relatively pleasant.",
                            icon: "summer" as const
                        },
                        {
                            name: "Monsoon",
                            months: "Jul - Sep",
                            description:
                                "Moderate rainfall brings greenery to the hills and countryside, with occasional heavy showers in some regions.",
                            icon: "monsoon" as const
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
                        value: "Buses, Taxis, Trains & Bikes Available",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Tamil, English",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Generally Not Required",
                        icon: "permit",
                    },
                    {
                        label: "Currency",
                        value: "Indian Rupee (INR)",
                        icon: "currency",
                    },
                ],


                activities: [
                    {
                        text: "Tea Garden Tour",
                        icon: Leaf,
                    },
                    {
                        text: "Toy Train Ride",
                        icon: TrainFront,
                    },
                    {
                        text: "Boating",
                        icon: Ship,
                    },
                    {
                        text: "Trekking",
                        icon: PersonStanding,
                    },
                    {
                        text: "Camping",
                        icon: TentTree,
                    },
                    {
                        text: "Sightseeing",
                        icon: Binoculars,
                    },
                    {
                        text: "Nature Walk",
                        icon: Footprints,
                    },
                    {
                        text: "Photography",
                        icon: Camera,
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

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Coimbatore & Transfer to Ooty",
                        description:
                            "Arrive in Coimbatore and travel to Ooty through the scenic Nilgiri hills. Check into your hotel and relax.",
                    },
                    {
                        day: 2,
                        title: "Ooty Sightseeing",
                        description:
                            "Explore Ooty Lake, Botanical Garden, Doddabetta Peak and enjoy the beautiful views of the Nilgiri mountains.",
                    },
                    {
                        day: 3,
                        title: "Ooty to Kodaikanal",
                        description:
                            "Travel towards Kodaikanal and check into your hotel. Spend the evening exploring the town and enjoying the pleasant hill-station atmosphere.",
                    },
                    {
                        day: 4,
                        title: "Kodaikanal Sightseeing",
                        description:
                            "Visit Kodaikanal Lake, Coaker's Walk, Bryant Park, Pillar Rocks and other scenic attractions.",
                    },
                    {
                        day: 5,
                        title: "Kodaikanal to Madurai",
                        description:
                            "Travel to Madurai and explore the historic city. Visit the famous Meenakshi Amman Temple and local markets.",
                    },
                    {
                        day: 6,
                        title: "Madurai & Rameswaram Excursion",
                        description:
                            "Travel towards Rameswaram and explore Ramanathaswamy Temple, Pamban Bridge and the beautiful coastal surroundings.",
                    },
                    {
                        day: 7,
                        title: "Departure from Tamil Nadu",
                        description:
                            "Enjoy a relaxed morning before checking out and departing for your onward journey.",
                    },
                ],
            },
        ],
    },
    {
        name: "Kashmir",

        packages: [
            {
                name: "Kashmir",
                category: "Nature",
                subtitle: "The Paradise of Lakes & Mountains",
                // Kashmir
                whyVisit: {
                    title: "Why Visit Kashmir?",
                    description:
                        "Discover breathtaking valleys, snow-covered mountains and serene lakes surrounded by the timeless beauty of Kashmir.",
                    highlights: [
                        "Snow-covered Himalayan peaks",
                        "Beautiful Dal Lake & houseboats",
                        "Scenic valleys & meadows",
                        "Rich Kashmiri culture & cuisine",
                    ],
                },
                inclusions: [
                    "4 Nights Accommodation",
                    "Daily Breakfast",
                    "Private Airport / Bus Transfers",
                    "All Sightseeing as per Itinerary",
                    "English / Hindi Speaking Driver",
                    "Entry Tickets as per Itinerary",
                    "All Applicable Taxes",
                ],

                exclusions: [
                    "Flights / Train Tickets",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Adventure Activity Charges",
                    "Early Check-in / Late Check-out",
                ],
                heroImage:
                    "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1800&q=90",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=2400&q=90",
                        alt: "Snow-covered mountains and valley landscape in Kashmir",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1706353222367-d0b0fb602f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGthc2htaXJ8ZW58MHwwfDB8fHww",
                        alt: "Dal Lake surrounded by mountains in Srinagar",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2400&q=90",
                        alt: "Beautiful green valley and Himalayan mountains in Kashmir",
                    },

                    {
                        src:
                            "https://images.unsplash.com/photo-1735993807544-9a5ea42405ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGthc2htaXJ8ZW58MHwwfDB8fHww",
                        alt: "Scenic valley and alpine landscape of Pahalgam",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=2400&q=90",
                        alt: "Traditional Shikara boat on Dal Lake in Kashmir",
                    },
                ],

                rating: "4.8",
                reviews: "2.5k",

                location: "Srinagar, Kashmir",
                latitude: 34.0837,
                longitude: 74.7973,

                description:
                    "Experience the breathtaking beauty of Kashmir with serene lakes, snow-covered mountains, lush valleys, traditional houseboats, scenic gardens and unforgettable adventures across Srinagar, Gulmarg and Pahalgam.",

                weather: "-5°C - 30°C",
                idealTrip: "5 - 8 Days",
                budget: "₹20,000 - ₹45,000",

                duration: "6 Days / 5 Nights",
                startingPrice: "₹19,999",
                originalPrice: "₹26,999",
                offerPrice: "₹19,999",
                saveAmount: "₹7,000",
                discount: "26%",
                validTill: "30 September 2026",
                groupSize: "2 - 16 People",
                bestTime: "March - June, October - February",

                highlights: [
                    "Dal Lake",
                    "Gulmarg",
                    "Pahalgam",
                    "Sonamarg",
                    "Shikara Ride",
                    "Mughal Gardens",
                ],

                activities: [
                    {
                        text: "Shikara Ride",
                        icon: Ship,
                    },
                    {
                        text: "Gondola Ride",
                        icon: CableCar,
                    },
                    {
                        text: "Mountain Trekking",
                        icon: Mountain,
                    },
                    {
                        text: "Skiing",
                        icon: Snowflake,
                    },
                    {
                        text: "Valley Sightseeing",
                        icon: Camera,
                    },
                    {
                        text: "Houseboat Stay",
                        icon: Home,
                    },
                    {
                        text: "Nature Walk",
                        icon: TreePine,
                    },
                    {
                        text: "Photography",
                        icon: Camera,
                    },
                ],

                bestTimeToVisit: {
                    months: [
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Oct",
                        "Nov",
                        "Dec",
                        "Jan",
                        "Feb",
                    ],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Dec - Feb",
                            description:
                                "Cold temperatures and snowfall create a beautiful winter wonderland in Kashmir.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "Mar - Jun",
                            description:
                                "Pleasant temperatures, blooming gardens and clear mountain views make summer enjoyable.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "Jul - Sep",
                            description:
                                "Green valleys, peaceful landscapes and pleasant weather make this period ideal.",
                            icon: "monsoon" as const,
                        },
                    ],
                },

                travelInfo: [
                    {
                        label: "Nearest Airport",
                        value: "Srinagar International Airport",
                        icon: "airport",
                    },
                    {
                        label: "Nearest Railway Station",
                        value: "Srinagar Railway Station",
                        icon: "railway",
                    },
                    {
                        label: "Local Transport",
                        value: "Taxis, Buses, Rental Cars & Local Cabs",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Kashmiri, Hindi, Urdu & English",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Generally Not Required",
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
                        label: "Warm Clothes & Layers",
                        icon: "clothes",
                    },
                    {
                        label: "Winter Jacket",
                        icon: "clothes",
                    },
                    {
                        label: "Comfortable Walking Shoes",
                        icon: "shoes",
                    },
                    {
                        label: "Sunglasses & Sunscreen",
                        icon: "sunglasses",
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

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Srinagar",
                        description:
                            "Arrive in Srinagar and check into your hotel or traditional houseboat. Relax beside Dal Lake and enjoy an evening Shikara ride while taking in the surrounding Himalayan scenery.",
                    },
                    {
                        day: 2,
                        title: "Srinagar Sightseeing",
                        description:
                            "Explore Srinagar's famous attractions including Mughal Gardens, Nishat Garden, Shalimar Garden and the beautiful Dal Lake. Enjoy the evening exploring the local markets and traditional Kashmiri handicrafts.",
                    },
                    {
                        day: 3,
                        title: "Gulmarg Excursion",
                        description:
                            "Travel to Gulmarg, one of Kashmir's most scenic mountain destinations. Enjoy the famous Gondola ride and explore the surrounding meadows and mountain landscapes. During winter, optional snow activities and skiing can be enjoyed.",
                    },
                    {
                        day: 4,
                        title: "Pahalgam Valley Exploration",
                        description:
                            "Drive towards Pahalgam through beautiful countryside and mountain landscapes. Explore the Lidder River, Betaab Valley and surrounding scenic areas before relaxing in the peaceful Himalayan environment.",
                    },
                    {
                        day: 5,
                        title: "Sonamarg Excursion",
                        description:
                            "Visit Sonamarg, known for its spectacular mountain scenery and alpine landscapes. Enjoy the valley views, take a leisurely walk and explore the surrounding natural beauty before returning to Srinagar.",
                    },
                    {
                        day: 6,
                        title: "Leisure & Departure",
                        description:
                            "Enjoy breakfast and some free time in Srinagar for shopping and exploring local markets. Check out from the hotel and begin your onward journey with unforgettable memories of Kashmir.",
                    },
                ],
            },
        ],
    },
    {
        name: "Meghalaya",

        packages: [
            {
                name: "Meghalaya",
                category: "Nature",
                subtitle: "The Abode of Clouds, Waterfalls & Living Root Bridges",
                // Meghalaya
                whyVisit: {
                    title: "Why Visit Meghalaya?",
                    description:
                        "Explore misty hills, lush forests, dramatic waterfalls and peaceful villages in the enchanting landscapes of Northeast India.",
                    highlights: [
                        "Lush green hills & forests",
                        "Spectacular waterfalls",
                        "Living root bridges",
                        "Crystal-clear rivers & caves",
                    ],
                },
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage:
                    "https://images.unsplash.com/photo-1707219004247-0657a598a23d?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2400&q=90",
                        alt: "Misty green mountains and valleys of Meghalaya",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=2400&q=90",
                        alt: "Lush green forest landscape in Meghalaya",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2400&q=90",
                        alt: "Dense green forest and natural landscape of Meghalaya",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90",
                        alt: "Mountain landscape surrounded by clouds in Meghalaya",
                    },

                    {
                        src:
                            "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=2400&q=90",
                        alt: "Tropical waterfall and lush vegetation in Meghalaya",
                    },
                ],

                rating: "4.8",
                reviews: "2.1k",

                location: "Shillong, Meghalaya",
                latitude: 25.5788,
                longitude: 91.8933,

                description:
                    "Explore Meghalaya's misty hills, spectacular waterfalls, crystal-clear rivers, ancient living root bridges and peaceful villages across Shillong, Cherrapunji, Dawki and Mawlynnong.",

                weather: "12°C - 25°C",
                idealTrip: "5 - 7 Days",
                budget: "₹15,000 - ₹30,000",

                duration: "6 Days / 5 Nights",
                startingPrice: "₹16,999",
                originalPrice: "₹22,999",
                offerPrice: "₹16,999",
                saveAmount: "₹6,000",
                discount: "26%",
                validTill: "30 September 2026",
                groupSize: "2 - 16 People",
                bestTime: "October - May",

                highlights: [
                    "Shillong",
                    "Cherrapunji",
                    "Dawki",
                    "Mawlynnong",
                    "Living Root Bridges",
                    "Nohkalikai Falls",
                ],

                activities: [
                    {
                        text: "Trekking",
                        icon: PersonStanding,
                    },
                    {
                        text: "Waterfall Exploring",
                        icon: Waves,
                    },
                    {
                        text: "Caving",
                        icon: Mountain,
                    },
                    {
                        text: "River Activities",
                        icon: Ship,
                    },
                    {
                        text: "Nature Walk",
                        icon: TreePine,
                    },
                    {
                        text: "Camping",
                        icon: TentTree,
                    },
                    {
                        text: "Photography",
                        icon: Camera,
                    },
                    {
                        text: "Village Exploration",
                        icon: Home,
                    },
                ],

                bestTimeToVisit: {
                    months: [
                        "Oct",
                        "Nov",
                        "Dec",
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                    ],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Nov - Feb",
                            description:
                                "Cool and pleasant weather with misty mornings, comfortable sightseeing conditions and beautiful views of Meghalaya's hills and valleys.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "Mar - May",
                            description:
                                "Mild temperatures and refreshing greenery make this a comfortable season for waterfalls, trekking, sightseeing and exploring villages.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "Jun - Sep",
                            description:
                                "Heavy rainfall creates lush green landscapes and dramatic waterfalls, although rain can make trekking and road travel more challenging.",
                            icon: "monsoon" as const,
                        },
                    ],
                },

                travelInfo: [
                    {
                        label: "Nearest Airport",
                        value: "Shillong Airport (Umroi)",
                        icon: "airport",
                    },
                    {
                        label: "Nearest Railway Station",
                        value: "Guwahati Railway Station",
                        icon: "railway",
                    },
                    {
                        label: "Local Transport",
                        value: "Taxis, Shared Cabs & Local Buses",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Khasi, English & Hindi",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Generally Not Required",
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
                        label: "Light & Quick-Dry Clothes",
                        icon: "clothes",
                    },
                    {
                        label: "Rain Jacket or Poncho",
                        icon: "clothes",
                    },
                    {
                        label: "Comfortable Trekking Shoes",
                        icon: "shoes",
                    },
                    {
                        label: "Sunglasses & Sunscreen",
                        icon: "sunglasses",
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

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Shillong & Local Sightseeing",
                        description:
                            "Arrive in Shillong and check into your hotel. Explore Shillong Peak, Elephant Falls and the scenic surroundings before relaxing in the evening.",
                    },
                    {
                        day: 2,
                        title: "Shillong to Cherrapunji",
                        description:
                            "Travel towards Cherrapunji through the beautiful Khasi Hills. Visit scenic viewpoints, waterfalls and natural attractions along the way before checking into your stay.",
                    },
                    {
                        day: 3,
                        title: "Cherrapunji Waterfalls & Caves",
                        description:
                            "Explore Cherrapunji's spectacular natural attractions including Nohkalikai Falls, Seven Sisters Falls and nearby caves while enjoying the misty landscapes of the region.",
                    },
                    {
                        day: 4,
                        title: "Nongriat Living Root Bridge",
                        description:
                            "Trek through lush forests towards Nongriat and experience the famous living root bridge. Enjoy the peaceful surroundings and natural pools before returning to Cherrapunji.",
                    },
                    {
                        day: 5,
                        title: "Dawki & Mawlynnong",
                        description:
                            "Visit Dawki and enjoy the scenic Umngot River before continuing to Mawlynnong. Explore the village and surrounding landscapes known for their greenery and natural beauty.",
                    },
                    {
                        day: 6,
                        title: "Return to Shillong & Departure",
                        description:
                            "Enjoy breakfast and some free time before returning towards Shillong. Complete your onward journey with unforgettable memories of Meghalaya's mountains, waterfalls and villages.",
                    },
                ],
            },
        ],
    },
    {
        name: "Goa",

        packages: [
            {
                name: "Goa",
                category: "Beaches",
                subtitle: "The Beach Capital of Goa",
                whyVisit: {
                    title: "Why Visit Goa?",
                    description:
                        "Relax along golden beaches, explore vibrant coastal culture and enjoy unforgettable sunsets, nightlife and adventures.",
                    highlights: [
                        "Golden sandy beaches",
                        "Vibrant nightlife & beach shacks",
                        "Water sports & coastal adventures",
                        "Portuguese heritage & culture",
                    ],
                },
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage:
                    "https://images.unsplash.com/photo-1642516864335-2ca9d8b3a511?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2400&q=90",
                        alt: "Beautiful beach in Goa",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        alt: "Goa beach and palm trees",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=2400&q=90",
                        alt: "Goa coastline and tropical beach",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1642516864335-2ca9d8b3a511?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        alt: "Historic church in Goa",
                    },

                    {
                        src:
                            "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=2400&q=90",
                        alt: "Goa tropical beach and palm trees",
                    },
                ],

                rating: "4.8",
                reviews: "2.4k",

                location: "Baga, Goa",
                latitude: 15.5557,
                longitude: 73.7517,

                description:
                    "Experience Goa's golden beaches, vibrant nightlife, Portuguese heritage, water sports and relaxed coastal charm in the lively beach town of Baga.",

                weather: "24°C - 32°C",
                idealTrip: "3 - 5 Days",
                budget: "₹10,000 - ₹22,000",

                duration: "4 Days / 3 Nights",
                startingPrice: "₹10,999",
                originalPrice: "₹14,999",
                offerPrice: "₹10,999",
                saveAmount: "₹4,000",
                discount: "27%",
                validTill: "30 September 2026",
                groupSize: "2 - 16 People",
                bestTime: "November - February",

                highlights: [
                    "Baga Beach",
                    "Calangute Beach",
                    "Fort Aguada",
                    "Basilica of Bom Jesus",
                    "Anjuna Beach",
                    "Goa Nightlife",
                ],
                activities: [
                    {
                        text: "Beach Hopping",
                        icon: Waves,
                    },
                    {
                        text: "Water Sports",
                        icon: Sailboat,
                    },
                    {
                        text: "Scuba Diving",
                        icon: Fish,
                    },
                    {
                        text: "Parasailing",
                        icon: Umbrella,
                    },
                    {
                        text: "Cruise",
                        icon: Ship,
                    },
                    {
                        text: "Nightlife",
                        icon: Music,
                    },
                    {
                        text: "Island Tour",
                        icon: Palmtree,
                    },
                    {
                        text: "Biking",
                        icon: Bike,
                    },
                ],
                bestTimeToVisit: {
                    months: ["Nov", "Dec", "Jan", "Feb"],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Nov - Feb",
                            description:
                                "Pleasant weather and sunny skies make this season ideal for beaches.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "Mar - May",
                            description:
                                "Warm weather and sunshine are perfect for beaches and coastal activities.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "Jun - Oct",
                            description:
                                "Monsoon rains create lush greenery, scenic waterfalls and refreshing landscapes.",
                            icon: "monsoon" as const,
                        },
                    ],
                },

                travelInfo: [
                    {
                        label: "Nearest Airport",
                        value: "Manohar International Airport, Mopa",
                        icon: "airport",
                    },
                    {
                        label: "Nearest Railway Station",
                        value: "Thivim Railway Station",
                        icon: "railway",
                    },
                    {
                        label: "Local Transport",
                        value: "Buses, Taxis, Rental Cars & Bikes Available",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Konkani, Hindi, English",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Generally Not Required",
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
                        label: "Comfortable Beach Sandals",
                        icon: "shoes",
                    },
                    {
                        label: "Swimwear & Beach Towel",
                        icon: "clothes",
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

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Goa & Baga Beach",
                        description:
                            "Arrive in Goa and transfer to your hotel in Baga. Check in and relax before spending the evening at Baga Beach and exploring the lively surrounding area.",
                    },
                    {
                        day: 2,
                        title: "North Goa Sightseeing",
                        description:
                            "Visit Calangute Beach, Anjuna Beach, Vagator Beach and Chapora Fort. Enjoy the beautiful coastline and spend the evening exploring Goa's vibrant nightlife.",
                    },
                    {
                        day: 3,
                        title: "South Goa & Heritage Tour",
                        description:
                            "Explore the historic side of Goa with visits to Basilica of Bom Jesus, Se Cathedral and Fort Aguada. Later, relax at one of South Goa's peaceful beaches.",
                    },
                    {
                        day: 4,
                        title: "Water Sports & Departure",
                        description:
                            "Enjoy optional water activities such as parasailing, jet skiing or banana boat rides. Check out from the hotel and depart for your onward journey.",
                    },
                    {
                        day: 5,
                        title: "Old Goa & Panjim Exploration",
                        description:
                            "Explore Panjim's Latin Quarter, colorful streets and historic churches. Visit Fontainhas and enjoy a relaxed evening along the Mandovi River.",
                    },
                    {
                        day: 6,
                        title: "Goa Beaches & Leisure",
                        description:
                            "Spend a relaxing day exploring your favorite beaches, enjoying beachside cafes and optional activities. End the trip with a beautiful sunset by the Arabian Sea.",
                    },
                ],
            },
        ],
    },


    {
        name: "Varanasi",

        packages: [
            {
                name: "Varanasi",
                category: "Spiritual",
                subtitle: "The Spiritual Heart of India",
                // Varanasi
                whyVisit: {
                    title: "Why Visit Varanasi?",
                    description:
                        "Experience one of India's oldest cities, where sacred traditions, ancient temples and the spiritual beauty of the Ganges come alive.",
                    highlights: [
                        "Sacred Ganges ghats",
                        "Ancient temples & heritage",
                        "Ganga Aarti experience",
                        "Rich spiritual culture & traditions",
                    ],
                },
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage:
                    "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1800&q=90",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1751438308897-6e1780630408?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        alt: "Varanasi ghats along the Ganges",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1706186839147-0d708602587b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        alt: "Historic architecture along the Varanasi ghats",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1571536802807-30451e3955d8?q=80&w=920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        alt: "Ganges River and ghats in Varanasi",
                    },
                    {
                        src: "https://images.unsplash.com/photo-1726266140662-9c9ff46bfdc8?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        alt: "Boat ride on the Ganges in Varanasi",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1665413791165-b25d42542b80?q=80&w=1077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        alt: "Temple architecture in Varanasi",
                    },

                ],

                rating: "4.8",
                reviews: "2.1k",

                location: "Varanasi, Uttar Pradesh",
                latitude: 25.3176,
                longitude: 82.9739,

                description:
                    "Experience the spiritual soul of India through ancient ghats, sacred temples, peaceful Ganges boat rides, vibrant markets and the mesmerizing Ganga Aarti.",

                weather: "15°C - 35°C",
                idealTrip: "2 - 4 Days",
                budget: "₹6,000 - ₹15,000",

                duration: "3 Days / 2 Nights",
                startingPrice: "₹6,999",
                originalPrice: "₹9,999",
                offerPrice: "₹6,999",
                saveAmount: "₹3,000",
                discount: "30%",
                validTill: "30 September 2026",
                groupSize: "2 - 16 People",
                bestTime: "October - March",

                highlights: [
                    "Dashashwamedh Ghat",
                    "Kashi Vishwanath Temple",
                    "Ganga Aarti",
                    "Assi Ghat",
                    "Sarnath",
                    "Ganges Boat Ride",
                ],

                activities: [
                    {
                        text: "Ganga Aarti",
                        icon: Flame,
                    },
                    {
                        text: "Boat Ride",
                        icon: Ship,
                    },
                    {
                        text: "Temple Visit",
                        icon: Landmark,
                    },
                    {
                        text: "Heritage Walk",
                        icon: Footprints,
                    },
                    {
                        text: "Photography",
                        icon: Camera,
                    },
                    {
                        text: "Street Food",
                        icon: Utensils,
                    },
                    {
                        text: "Shopping",
                        icon: ShoppingBag,
                    },
                    {
                        text: "Meditation",
                        icon: Heart,
                    },
                ],

                bestTimeToVisit: {
                    months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Oct - Feb",
                            description:
                                "Pleasant temperatures make winter ideal for temple exploration.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "Mar - Jun",
                            description:
                                "Hot weather makes early mornings and evenings comfortable.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "Jul - Sep",
                            description:
                                "Rain brings greenery but may affect outdoor sightseeing.",
                            icon: "monsoon" as const,
                        },
                    ],
                },

                travelInfo: [
                    {
                        label: "Nearest Airport",
                        value: "Lal Bahadur Shastri International Airport",
                        icon: "airport",
                    },
                    {
                        label: "Nearest Railway Station",
                        value: "Varanasi Junction Railway Station",
                        icon: "railway",
                    },
                    {
                        label: "Local Transport",
                        value: "Auto Rickshaws, Taxis, E-Rickshaws & Boats",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Hindi, English",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Generally Not Required",
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
                        label: "Comfortable Cotton Clothes",
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
                        label: "Light Shawl or Jacket",
                        icon: "clothes",
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

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Varanasi & Ganga Aarti",
                        description:
                            "Arrive in Varanasi and check into your hotel. Explore the nearby ghats in the evening and witness the mesmerizing Ganga Aarti at Dashashwamedh Ghat.",
                    },
                    {
                        day: 2,
                        title: "Varanasi Ghats & Temple Tour",
                        description:
                            "Enjoy an early morning boat ride on the Ganges followed by visits to Kashi Vishwanath Temple, Assi Ghat and other historic ghats.",
                    },
                    {
                        day: 3,
                        title: "Sarnath Spiritual & Heritage Tour",
                        description:
                            "Visit Sarnath to explore the Dhamek Stupa, Sarnath Museum and ancient Buddhist monuments before returning to Varanasi for an evening at leisure.",
                    },
                    {
                        day: 4,
                        title: "Temples, Markets & Local Culture",
                        description:
                            "Explore famous temples and vibrant local markets around Varanasi. Experience the city's traditional crafts, street food and spiritual atmosphere.",
                    },
                    {
                        day: 5,
                        title: "Ganges Boat Ride & Hidden Ghats",
                        description:
                            "Take a peaceful sunrise boat ride along the Ganges and explore lesser-known ghats. Spend the afternoon discovering Varanasi's heritage streets and local culture.",
                    },
                    {
                        day: 6,
                        title: "Final Temple Visit & Departure",
                        description:
                            "Enjoy a relaxed morning in Varanasi with a final temple visit and local shopping. Check out from the hotel and depart for your onward journey.",
                    },
                ],
            },
        ],
    },
    {
        name: "Darjeeling",

        packages: [
            {
                name: "Darjeeling",
                category: "Mountains",
                // Darjeeling
                whyVisit: {
                    title: "Why Visit Darjeeling?",
                    description:
                        "Escape into misty Himalayan landscapes, endless tea gardens and breathtaking mountain views in the charming hill town of Darjeeling.",
                    highlights: [
                        "Breathtaking Kanchenjunga views",
                        "Famous Darjeeling tea gardens",
                        "Scenic Himalayan landscapes",
                        "Toy Train & colonial heritage",
                    ],
                },
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                subtitle: "The Queen of the Hills",

                heroImage:
                    "https://images.unsplash.com/photo-1622308644420-b20142dc993c?auto=format&fit=crop&w=1800&q=90",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=2400&q=90",
                        alt: "Darjeeling hills and mountain landscape",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1622308644420-b20142dc993c?auto=format&fit=crop&w=2400&q=90",
                        alt: "Darjeeling tea gardens",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=2400&q=90",
                        alt: "Darjeeling Himalayan mountain scenery",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=2400&q=90",
                        alt: "Darjeeling mountain railway",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=2400&q=90",
                        alt: "Darjeeling sunrise over the mountains",
                    },

                ],

                rating: "4.9",
                reviews: "2.1k",

                location: "Darjeeling, West Bengal",
                latitude: 27.0410,
                longitude: 88.2663,

                description:
                    "Experience the charm of Darjeeling with breathtaking Himalayan views, lush tea gardens, historic toy trains, peaceful monasteries and the majestic Kanchenjunga.",

                weather: "5°C - 20°C",
                idealTrip: "3 - 5 Days",
                budget: "₹10,000 - ₹22,000",

                duration: "4 Days / 3 Nights",
                startingPrice: "₹10,999",
                originalPrice: "₹14,999",
                offerPrice: "₹10,999",
                saveAmount: "₹4,000",
                discount: "27%",
                validTill: "30 September 2026",
                groupSize: "2 - 16 People",
                bestTime: "March - May",

                highlights: [
                    "Tiger Hill",
                    "Darjeeling Himalayan Railway",
                    "Batasia Loop",
                    "Tea Gardens",
                    "Peace Pagoda",
                    "Mall Road",
                ],

                bestTimeToVisit: {
                    months: ["Mar", "Apr", "May", "Oct", "Nov"],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Dec - Feb",
                            description:
                                "Cold and crisp weather with clear mountain views. Snowfall is possible in higher areas, making it a peaceful season for enjoying Darjeeling's winter charm.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "Mar - May",
                            description:
                                "Pleasant temperatures and clear skies make this an excellent time for sightseeing, exploring tea gardens and enjoying panoramic Himalayan views.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "Jun - Sep",
                            description:
                                "Frequent rainfall creates lush green landscapes and misty mountain views, although landslides and road disruptions can occasionally affect travel.",
                            icon: "monsoon" as const,
                        },
                    ],
                },

                travelInfo: [
                    {
                        label: "Nearest Airport",
                        value: "Bagdogra Airport",
                        icon: "airport",
                    },
                    {
                        label: "Nearest Railway Station",
                        value: "New Jalpaiguri Railway Station",
                        icon: "railway",
                    },
                    {
                        label: "Local Transport",
                        value: "Taxis, Shared Cabs & Local Buses Available",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Bengali, Nepali, Hindi, English",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Generally Not Required",
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
                        label: "Warm & Layered Clothes",
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
                        label: "Jacket & Light Raincoat",
                        icon: "clothes",
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
                activities: [
                    {
                        text: "Beach Hopping",
                        icon: Waves,
                    },
                    {
                        text: "Water Sports",
                        icon: Sailboat,
                    },
                    {
                        text: "Scuba Diving",
                        icon: Fish,
                    },
                    {
                        text: "Parasailing",
                        icon: Umbrella,
                    },
                    {
                        text: "Cruise",
                        icon: Ship,
                    },
                    {
                        text: "Nightlife",
                        icon: Music,
                    },
                    {
                        text: "Island Tour",
                        icon: Palmtree,
                    },
                    {
                        text: "Biking",
                        icon: Bike,
                    },
                ],
                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Darjeeling",
                        description:
                            "Arrive at Bagdogra Airport or New Jalpaiguri Railway Station and travel to Darjeeling through scenic mountain roads. Check into your hotel and relax before exploring Mall Road in the evening.",
                    },
                    {
                        day: 2,
                        title: "Tiger Hill & Darjeeling Sightseeing",
                        description:
                            "Start early with a visit to Tiger Hill to witness the sunrise over the Himalayas. Continue to Batasia Loop, Ghoom Monastery and other popular attractions before exploring the town.",
                    },
                    {
                        day: 3,
                        title: "Tea Gardens & Himalayan Railway",
                        description:
                            "Explore Darjeeling's beautiful tea gardens and experience the charm of the Darjeeling Himalayan Railway. Visit the Peace Pagoda and enjoy the spectacular mountain scenery.",
                    },
                    {
                        day: 4,
                        title: "Darjeeling Exploration & Departure",
                        description:
                            "Enjoy a relaxed morning exploring local markets and picking up Darjeeling tea and souvenirs. Check out from the hotel and depart for Bagdogra Airport or New Jalpaiguri Railway Station.",
                    },
                ],
            },
        ],
    },

    {
        name: "Himachal Pradesh",

        packages: [
            {
                name: "Manali",
                subtitle: "A Himalayan Paradise",
                category: "Mountains",
                // Manali
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
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage:
                    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1800&q=90",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=2400&q=90",
                        alt: "Snow covered Himalayan mountains in Manali",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&fit=crop&w=2400&q=90",
                        alt: "Scenic mountain valley in Manali",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1627323122913-da6be1826309?auto=format&fit=crop&w=2400&q=90",
                        alt: "Green mountain landscape in Manali",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1685795361556-70b83713af36?auto=format&fit=crop&w=2400&q=90",
                        alt: "Snowy Himalayan landscape near Manali",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1677820915334-d7ceba1e844a?auto=format&fit=crop&w=2400&q=90",
                        alt: "Snow covered mountains in Solang Valley, Manali",
                    },

                ],

                rating: "4.8",
                reviews: "2.4k",

                location: "Manali, Himachal Pradesh",
                latitude: 32.2396,
                longitude: 77.1887,

                description:
                    "Experience snow-capped mountains, lush valleys, pine forests and the scenic beauty of the Beas River in Manali.",

                weather: "5°C - 25°C",
                idealTrip: "4 - 6 Days",
                budget: "₹10,000 - ₹20,000",

                duration: "6 Days / 5 Nights",
                startingPrice: "₹14,999",
                originalPrice: "₹19,999",
                offerPrice: "₹14,999",
                saveAmount: "₹5,000",
                discount: "25%",
                validTill: "30 September 2026",
                groupSize: "2 - 16 People",
                bestTime: "March - June, October - November",

                highlights: [
                    "Solang Valley",
                    "Atal Tunnel",
                    "Old Manali",
                    "Hadimba Temple",
                    "Vashisht Hot Springs",
                    "Jogini Waterfall",
                ],

                bestTimeToVisit: {
                    months: ["Mar", "Apr", "May", "Jun", "Oct"],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Dec - Feb",
                            description: "Snowy landscapes and winter adventures.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "Mar - Jun",
                            description: "Pleasant weather for sightseeing and adventures.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "Jul - Sep",
                            description: "Lush greenery with occasional heavy rainfall.",
                            icon: "monsoon" as const,
                        },
                    ],
                },

                travelInfo: [
                    {
                        label: "Nearest Airport",
                        value: "Bhuntar Airport",
                        icon: "airport",
                    },
                    {
                        label: "Nearest Railway Station",
                        value: "Joginder Nagar Railway Station",
                        icon: "railway",
                    },
                    {
                        label: "Local Transport",
                        value: "Taxis, Buses & Rental Bikes",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Hindi, English & Pahari",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Generally Not Required",
                        icon: "permit",
                    },
                    {
                        label: "Currency",
                        value: "Indian Rupee (INR)",
                        icon: "currency",
                    },
                ],

                activities: [
                    {
                        text: "Mountain Trekking",
                        icon: PersonStanding,
                    },
                    {
                        text: "Paragliding",
                        icon: Wind,
                    },
                    {
                        text: "River Rafting",
                        icon: Waves,
                    },
                    {
                        text: "Skiing",
                        icon: Snowflake,
                    },
                    {
                        text: "Camping",
                        icon: TentTree,
                    },
                    {
                        text: "Sightseeing",
                        icon: Binoculars,
                    },
                    {
                        text: "Nature Walk",
                        icon: Footprints,
                    },
                    {
                        text: "Photography",
                        icon: Camera,
                    },
                ],

                packingItems: [
                    {
                        label: "Warm Clothes",
                        icon: "clothes",
                    },
                    {
                        label: "Jacket & Thermals",
                        icon: "clothes",
                    },
                    {
                        label: "Comfortable Shoes",
                        icon: "shoes",
                    },
                    {
                        label: "Sunglasses & Sunscreen",
                        icon: "sunglasses",
                    },
                    {
                        label: "Power Bank & ID",
                        icon: "powerbank",
                    },
                    {
                        label: "Personal Medicines",
                        icon: "medicine",
                    },
                ],

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Manali",
                        description:
                            "Arrive in Manali, check into your hotel and relax. Explore Mall Road and enjoy an evening walk along the Beas River.",
                    },
                    {
                        day: 2,
                        title: "Manali Local Sightseeing",
                        description:
                            "Visit Hadimba Devi Temple, Manu Temple, Vashisht Village, Vashisht Hot Springs, Manali Gompa and Old Manali.",
                    },
                    {
                        day: 3,
                        title: "Solang Valley Adventure",
                        description:
                            "Visit Solang Valley and enjoy optional adventure activities such as paragliding, skiing, zorbing and ropeway rides.",
                    },
                    {
                        day: 4,
                        title: "Atal Tunnel & Sissu",
                        description:
                            "Drive through Atal Tunnel and continue towards Sissu. Enjoy spectacular mountain landscapes and explore the scenic Lahaul Valley.",
                    },
                    {
                        day: 5,
                        title: "Jogini Waterfall & Old Manali",
                        description:
                            "Trek to Jogini Waterfall and enjoy the surrounding forest scenery. Later spend time exploring Old Manali cafes, shops and riverside areas.",
                    },
                    {
                        day: 6,
                        title: "Departure from Manali",
                        description:
                            "Enjoy breakfast and some free time for shopping before checking out and beginning your onward journey.",
                    },
                ],
            },

            {
                name: "Shimla",
                subtitle: "The Queen of Hills",
                category: "Mountains",
                // Shimla
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
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage: "https://images.unsplash.com/photo-1657894736581-ccc35d62d9e2?auto=format&fit=crop&w=3840&q=90",
                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1657894736581-ccc35d62d9e2?auto=format&fit=crop&w=3840&q=90",
                        alt: "Shimla cityscape and Himalayan hills",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1736958703904-1b881cf6a9d7?auto=format&fit=crop&w=3840&q=90",
                        alt: "Mountain landscape surrounding Shimla",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1741420887574-3196cbf94121?auto=format&fit=crop&w=3840&q=90",
                        alt: "Shimla hillside homes and green mountains",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1659972000541-260b360af4f9?auto=format&fit=crop&w=3840&q=90",
                        alt: "Shimla Ridge and Mall Road",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1648830802584-ec070946e591?auto=format&fit=crop&w=3840&q=90",
                        alt: "Christ Church at Shimla Ridge",
                    },
                ],

                rating: "4.7",
                reviews: "2.1k",

                location: "Shimla, Himachal Pradesh",
                latitude: 31.1048,
                longitude: 77.1734,

                description:
                    "Explore Shimla's colonial charm, scenic Himalayan views, peaceful forests and famous attractions including the Ridge, Mall Road, Jakhoo Temple and Kufri.",

                weather: "5°C - 25°C",
                idealTrip: "4 - 6 Days",
                budget: "₹9,000 - ₹18,000",

                duration: "6 Days / 5 Nights",
                startingPrice: "₹13,999",
                originalPrice: "₹18,999",
                offerPrice: "₹13,999",
                saveAmount: "₹5,000",
                discount: "26%",
                validTill: "30 September 2026",
                groupSize: "2 - 16 People",
                bestTime: "March - June, October - November",

                highlights: [
                    "The Ridge",
                    "Mall Road",
                    "Jakhoo Temple",
                    "Kufri",
                    "Christ Church",
                    "Kalka-Shimla Railway",
                ],

                bestTimeToVisit: {
                    months: ["Mar", "Apr", "May", "Jun", "Oct"],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Dec - Feb",
                            description: "Cold weather and occasional snowfall.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "Mar - Jun",
                            description: "Pleasant weather for sightseeing.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "Jul - Sep",
                            description: "Green hills with frequent rainfall.",
                            icon: "monsoon" as const,
                        },
                    ],
                },

                travelInfo: [
                    {
                        label: "Nearest Airport",
                        value: "Shimla Airport, Jubbarhatti",
                        icon: "airport",
                    },
                    {
                        label: "Nearest Railway Station",
                        value: "Shimla Railway Station",
                        icon: "railway",
                    },
                    {
                        label: "Local Transport",
                        value: "Taxis, Buses & Local Cabs",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Hindi, English & Pahari",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Generally Not Required",
                        icon: "permit",
                    },
                    {
                        label: "Currency",
                        value: "Indian Rupee (INR)",
                        icon: "currency",
                    },
                ],

                activities: [
                    {
                        text: "Toy Train Ride",
                        icon: TrainFront,
                    },
                    {
                        text: "Mountain Trekking",
                        icon: PersonStanding,
                    },
                    {
                        text: "Nature Walk",
                        icon: Footprints,
                    },
                    {
                        text: "Sightseeing",
                        icon: Binoculars,
                    },
                    {
                        text: "Shopping",
                        icon: ShoppingBag,
                    },
                    {
                        text: "Photography",
                        icon: Camera,
                    },
                    {
                        text: "Snow Activities",
                        icon: Snowflake,
                    },
                    {
                        text: "Camping",
                        icon: TentTree,
                    },
                ],

                packingItems: [
                    {
                        label: "Warm Clothes",
                        icon: "clothes",
                    },
                    {
                        label: "Jacket & Thermals",
                        icon: "clothes",
                    },
                    {
                        label: "Comfortable Walking Shoes",
                        icon: "shoes",
                    },
                    {
                        label: "Sunglasses & Sunscreen",
                        icon: "sunglasses",
                    },
                    {
                        label: "Power Bank & ID",
                        icon: "powerbank",
                    },
                    {
                        label: "Personal Medicines",
                        icon: "medicine",
                    },
                ],

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Shimla",
                        description:
                            "Arrive in Shimla and check into your hotel. Relax and explore Mall Road, Scandal Point and the surrounding areas.",
                    },
                    {
                        day: 2,
                        title: "Shimla Local Sightseeing",
                        description:
                            "Visit The Ridge, Christ Church, Gaiety Theatre, Lakkar Bazaar, Kali Bari Temple and Jakhoo Temple.",
                    },
                    {
                        day: 3,
                        title: "Kufri & Himalayan Nature Park",
                        description:
                            "Explore Kufri and enjoy the scenic Himalayan views. Visit Himalayan Nature Park and experience local adventure activities.",
                    },
                    {
                        day: 4,
                        title: "Naldehra & Mashobra",
                        description:
                            "Take a scenic excursion to Naldehra and Mashobra. Enjoy peaceful forest walks, mountain views and the beautiful surroundings.",
                    },
                    {
                        day: 5,
                        title: "Shimla Heritage & Toy Train",
                        description:
                            "Explore Shimla's colonial heritage and enjoy a scenic ride on the historic Kalka-Shimla railway route.",
                    },
                    {
                        day: 6,
                        title: "Departure from Shimla",
                        description:
                            "Enjoy breakfast and some free time for shopping before checking out and beginning your onward journey.",
                    },
                ],
            },
            {
                name: "Dharamshala",
                subtitle: "Where Mountains Meet Serenity",
                category: "Mountains",
                // Dharamshala
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
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage:
                    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=2560&q=80",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
                        alt: "Scenic view of Dharamshala valley and snow-capped Dhauladhar peaks",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
                        alt: "Hillside village and valleys around McLeod Ganj, Dharamshala",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
                        alt: "Alpine campsite and ridge views along the Triund trail",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1600&q=80",
                        alt: "Clear mountain streams near Bhagsu waterfall",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
                        alt: "Starry night sky over snow-covered mountain ridges",
                    },
                ],
                rating: "4.8",
                reviews: "1.8k",

                location: "Dharamshala, Himachal Pradesh",
                latitude: 32.2190,
                longitude: 76.3234,

                description:
                    "Experience the peaceful beauty of Dharamshala with Himalayan landscapes, Tibetan culture, monasteries, waterfalls and scenic mountain villages around McLeod Ganj.",

                weather: "5°C - 25°C",
                idealTrip: "4 - 6 Days",
                budget: "₹9,000 - ₹18,000",

                duration: "6 Days / 5 Nights",
                startingPrice: "₹13,499",
                originalPrice: "₹18,499",
                offerPrice: "₹13,499",
                saveAmount: "₹5,000",
                discount: "27%",
                validTill: "30 September 2026",

                groupSize: "2 - 16 People",
                bestTime: "March - June, September - November",

                highlights: [
                    "McLeod Ganj",
                    "Triund Trek",
                    "Dalai Lama Temple",
                    "Bhagsu Waterfall",
                    "Naddi View Point",
                    "Dharamshala Cricket Stadium",
                ],

                bestTimeToVisit: {
                    months: ["Mar", "Apr", "May", "Jun", "Oct", "Nov"],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Dec - Feb",
                            description: "Cold weather and snowfall.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "Mar - Jun",
                            description: "Pleasant weather for sightseeing.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "Jul - Sep",
                            description: "Green hills with rainfall.",
                            icon: "monsoon" as const,
                        },
                    ],
                },

                travelInfo: [
                    {
                        label: "Nearest Airport",
                        value: "Kangra Airport, Gaggal",
                        icon: "airport",
                    },
                    {
                        label: "Nearest Railway Station",
                        value: "Pathankot Railway Station",
                        icon: "railway",
                    },
                    {
                        label: "Local Transport",
                        value: "Taxis, Buses & Local Cabs",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Hindi, English & Tibetan",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Generally Not Required",
                        icon: "permit",
                    },
                    {
                        label: "Currency",
                        value: "Indian Rupee (INR)",
                        icon: "currency",
                    },
                ],

                activities: [
                    {
                        text: "Mountain Trekking",
                        icon: PersonStanding,
                    },
                    {
                        text: "Triund Trek",
                        icon: Mountain,
                    },
                    {
                        text: "Camping",
                        icon: TentTree,
                    },
                    {
                        text: "Nature Walk",
                        icon: Footprints,
                    },
                    {
                        text: "Sightseeing",
                        icon: Binoculars,
                    },
                    {
                        text: "Photography",
                        icon: Camera,
                    },
                    {
                        text: "Meditation",
                        icon: Brain,
                    },
                    {
                        text: "Paragliding",
                        icon: Wind,
                    },
                ],

                packingItems: [
                    {
                        label: "Warm Clothes",
                        icon: "clothes",
                    },
                    {
                        label: "Jacket & Thermals",
                        icon: "clothes",
                    },
                    {
                        label: "Trekking Shoes",
                        icon: "shoes",
                    },
                    {
                        label: "Sunglasses & Sunscreen",
                        icon: "sunglasses",
                    },
                    {
                        label: "Power Bank & ID",
                        icon: "powerbank",
                    },
                    {
                        label: "Personal Medicines",
                        icon: "medicine",
                    },
                ],

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Dharamshala",
                        description:
                            "Arrive in Dharamshala and check into your hotel. Relax and explore the local market and peaceful surroundings.",
                    },
                    {
                        day: 2,
                        title: "McLeod Ganj Sightseeing",
                        description:
                            "Visit McLeod Ganj, Dalai Lama Temple, Namgyal Monastery, Tibetan Market and St. John in the Wilderness Church.",
                    },
                    {
                        day: 3,
                        title: "Bhagsu & Dharamkot",
                        description:
                            "Explore Bhagsunag Temple and trek to Bhagsu Waterfall. Later visit Dharamkot and enjoy the peaceful mountain atmosphere.",
                    },
                    {
                        day: 4,
                        title: "Triund Trek Experience",
                        description:
                            "Begin your scenic Triund trek through forests and mountain trails. Enjoy spectacular views of the Dhauladhar range.",
                    },
                    {
                        day: 5,
                        title: "Naddi & Local Exploration",
                        description:
                            "Visit Naddi View Point and Dal Lake. Later explore Dharamshala Cricket Stadium and enjoy the surrounding Himalayan scenery.",
                    },
                    {
                        day: 6,
                        title: "Departure from Dharamshala",
                        description:
                            "Enjoy breakfast and some free time for shopping before checking out and beginning your onward journey.",
                    },
                ],
            },

            {
                name: "Kasol",
                subtitle: "A Paradise in Parvati Valley",
                category: "Camping",
                // Kasol
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
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage:
                    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2560&q=80",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
                        alt: "Parvati River flowing through the rocky valley in Kasol",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
                        alt: "Dense Himalayan pine and deodar forests along the Chalal trail",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80",
                        alt: "Misty mountain ridges and alpine valleys around Parvati Valley",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1600&q=80",
                        alt: "Lush green valley landscape on the way to Tosh and Kheerganga",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
                        alt: "Starry clear night sky over mountain peaks at Kasol campsite",
                    },
                ],

                rating: "4.8",
                reviews: "1.9k",

                location: "Kasol, Himachal Pradesh",
                latitude: 32.0100,
                longitude: 77.3150,

                description:
                    "Escape to Kasol for peaceful riverside landscapes, pine forests, Himalayan villages, scenic treks and the unique mountain culture of Parvati Valley.",

                weather: "5°C - 25°C",
                idealTrip: "4 - 6 Days",
                budget: "₹8,000 - ₹17,000",

                duration: "6 Days / 5 Nights",
                startingPrice: "₹12,999",
                originalPrice: "₹17,999",
                offerPrice: "₹12,999",
                saveAmount: "₹5,000",
                discount: "28%",
                validTill: "30 September 2026",

                groupSize: "2 - 16 People",
                bestTime: "March - June, September - November",

                highlights: [
                    "Parvati River",
                    "Chalal Village",
                    "Manikaran Sahib",
                    "Kheerganga Trek",
                    "Tosh Village",
                    "Parvati Valley",
                ],

                bestTimeToVisit: {
                    months: ["Mar", "Apr", "May", "Jun", "Sep", "Oct", "Nov"],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Dec - Feb",
                            description: "Cold weather and snowfall.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "Mar - Jun",
                            description: "Pleasant weather for trekking.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "Jul - Sep",
                            description: "Lush valleys with rainfall.",
                            icon: "monsoon" as const,
                        },
                    ],
                },

                travelInfo: [
                    {
                        label: "Nearest Airport",
                        value: "Bhuntar Airport",
                        icon: "airport",
                    },
                    {
                        label: "Nearest Railway Station",
                        value: "Joginder Nagar Railway Station",
                        icon: "railway",
                    },
                    {
                        label: "Local Transport",
                        value: "Taxis, Buses & Local Cabs",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Hindi, English & Pahari",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Generally Not Required",
                        icon: "permit",
                    },
                    {
                        label: "Currency",
                        value: "Indian Rupee (INR)",
                        icon: "currency",
                    },
                ],

                activities: [
                    {
                        text: "Mountain Trekking",
                        icon: PersonStanding,
                    },
                    {
                        text: "Kheerganga Trek",
                        icon: Mountain,
                    },
                    {
                        text: "Camping",
                        icon: TentTree,
                    },
                    {
                        text: "Village Walk",
                        icon: Footprints,
                    },
                    {
                        text: "River Views",
                        icon: Waves,
                    },
                    {
                        text: "Photography",
                        icon: Camera,
                    },
                    {
                        text: "Nature Walk",
                        icon: TreePine,
                    },
                    {
                        text: "Sightseeing",
                        icon: Binoculars,
                    },
                ],

                packingItems: [
                    {
                        label: "Warm Clothes",
                        icon: "clothes",
                    },
                    {
                        label: "Trekking Jacket",
                        icon: "clothes",
                    },
                    {
                        label: "Trekking Shoes",
                        icon: "shoes",
                    },
                    {
                        label: "Sunglasses & Sunscreen",
                        icon: "sunglasses",
                    },
                    {
                        label: "Power Bank & ID",
                        icon: "powerbank",
                    },
                    {
                        label: "Personal Medicines",
                        icon: "medicine",
                    },
                ],

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Kasol",
                        description:
                            "Arrive in Kasol and check into your hotel or campsite. Relax beside the Parvati River and explore the local market in the evening.",
                    },
                    {
                        day: 2,
                        title: "Kasol & Chalal Village",
                        description:
                            "Explore Kasol and walk through the scenic forest trail towards Chalal Village. Enjoy peaceful mountain views and spend the evening beside the Parvati River.",
                    },
                    {
                        day: 3,
                        title: "Manikaran Excursion",
                        description:
                            "Visit Manikaran Sahib, explore the famous hot springs and temples, and enjoy the beautiful Parvati Valley surrounding Manikaran.",
                    },
                    {
                        day: 4,
                        title: "Kheerganga Trek",
                        description:
                            "Begin the scenic trek towards Kheerganga through forests and mountain trails. Enjoy panoramic Himalayan views and experience the famous natural hot spring.",
                    },
                    {
                        day: 5,
                        title: "Tosh Valley Exploration",
                        description:
                            "Drive towards Barshaini and explore the beautiful Tosh Valley. Enjoy village walks, mountain scenery and peaceful views of the surrounding peaks.",
                    },
                    {
                        day: 6,
                        title: "Departure from Kasol",
                        description:
                            "Enjoy breakfast and some free time for shopping before checking out and beginning your onward journey.",
                    },
                ],
            },

        ],
    },

    {
        name: "Uttarakhand",
        packages: [
            {
                name: "Rishikesh",
                subtitle: "Where Adventure Meets Spirituality",
                category: "Adventure",
                // Rishikesh
                whyVisit: {
                    title: "Why Visit Rishikesh?",
                    description:
                        "Experience the perfect blend of spirituality, adventure and nature along the peaceful banks of the Ganges surrounded by Himalayan foothills.",
                    highlights: [
                        "Sacred Ganges & peaceful ghats",
                        "Yoga, meditation & ashrams",
                        "River rafting & adventure",
                        "Beautiful Himalayan surroundings",
                    ],
                },
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage:
                    "https://images.unsplash.com/photo-1614605670899-47ecba60bf2a?q=80&w=1572&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1706963336286-029a26cd7810?auto=format&fit=crop&w=3840&q=90",
                        alt: "Rishikesh Ganga river and Himalayan landscape",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1757863816269-435a72e76673?auto=format&fit=crop&w=3840&q=90",
                        alt: "Laxman Jhula over the Ganga in Rishikesh",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1671506320551-49cba39dfb7b?auto=format&fit=crop&w=3840&q=90",
                        alt: "River rafting on the Ganga in Rishikesh",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1713340546638-5e30e2b7b1fe?auto=format&fit=crop&w=3840&q=90",
                        alt: "Ganga Aarti at Triveni Ghat Rishikesh",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1781434704756-313e2fe99105?auto=format&fit=crop&w=3840&q=90",
                        alt: "Beatles Ashram in Rishikesh",
                    },
                ],

                rating: "4.8",
                reviews: "2.3k",

                location: "Rishikesh, Uttarakhand",
                latitude: 30.0869,
                longitude: 78.2676,

                description:
                    "Experience Rishikesh through the sacred Ganga, peaceful ashrams, yoga retreats, thrilling river rafting, scenic bridges and the spiritual atmosphere of the Himalayan foothills.",

                weather: "10°C - 35°C",
                idealTrip: "4 - 6 Days",
                budget: "₹8,000 - ₹18,000",

                duration: "6 Days / 5 Nights",
                startingPrice: "₹12,999",
                originalPrice: "₹17,999",
                offerPrice: "₹12,999",
                saveAmount: "₹5,000",
                discount: "28%",
                validTill: "30 September 2026",

                groupSize: "2 - 16 People",
                bestTime: "October - June",

                highlights: [
                    "Triveni Ghat",
                    "Laxman Jhula",
                    "Ram Jhula",
                    "River Rafting",
                    "Beatles Ashram",
                    "Neelkanth Mahadev Temple",
                ],

                bestTimeToVisit: {
                    months: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],

                    seasons: [

                        {
                            name: "Summer",
                            months: "May - Jun",
                            description: "Warm days with adventure activities.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "Jul - Sep",
                            description: "Lush greenery with heavy rainfall.",
                            icon: "monsoon" as const,
                        },

                        {
                            name: "Festival Season",
                            months: "Feb - Mar",
                            description: "Spiritual events and vibrant celebrations.",
                            icon: "festival" as const,
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
                        value: "Rishikesh Railway Station",
                        icon: "railway",
                    },
                    {
                        label: "Local Transport",
                        value: "Taxis, Autos & Local Buses",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Hindi, English & Garhwali",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Generally Not Required",
                        icon: "permit",
                    },
                    {
                        label: "Currency",
                        value: "Indian Rupee (INR)",
                        icon: "currency",
                    },
                ],

                activities: [
                    {
                        text: "River Rafting",
                        icon: Waves,
                    },
                    {
                        text: "Bungee Jumping",
                        icon: ArrowDown,
                    },
                    {
                        text: "Yoga",
                        icon: PersonStanding,
                    },
                    {
                        text: "Meditation",
                        icon: Brain,
                    },
                    {
                        text: "Camping",
                        icon: TentTree,
                    },
                    {
                        text: "Nature Walk",
                        icon: Footprints,
                    },
                    {
                        text: "Sightseeing",
                        icon: Binoculars,
                    },
                    {
                        text: "Photography",
                        icon: Camera,
                    },
                ],

                packingItems: [
                    {
                        label: "Comfortable Clothes",
                        icon: "clothes",
                    },
                    {
                        label: "Light Jacket",
                        icon: "clothes",
                    },
                    {
                        label: "Comfortable Shoes",
                        icon: "shoes",
                    },
                    {
                        label: "Sunglasses & Sunscreen",
                        icon: "sunglasses",
                    },
                    {
                        label: "Power Bank & ID",
                        icon: "powerbank",
                    },
                    {
                        label: "Personal Medicines",
                        icon: "medicine",
                    },
                ],

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Rishikesh",
                        description:
                            "Arrive in Rishikesh and check into your hotel. Relax by the Ganga and explore the local market before enjoying the evening atmosphere.",
                    },
                    {
                        day: 2,
                        title: "Rishikesh Local Sightseeing",
                        description:
                            "Visit Ram Jhula, Laxman Jhula, Parmarth Niketan, Swarg Ashram and nearby temples. End the day with Ganga Aarti at Triveni Ghat.",
                    },
                    {
                        day: 3,
                        title: "Ganga River Rafting",
                        description:
                            "Enjoy an exciting white-water rafting experience on the Ganga through the Shivpuri stretch. Spend the evening relaxing beside the river.",
                    },
                    {
                        day: 4,
                        title: "Beatles Ashram & Yoga",
                        description:
                            "Explore Beatles Ashram and its famous murals. Later experience a peaceful yoga or meditation session at one of Rishikesh's ashrams.",
                    },
                    {
                        day: 5,
                        title: "Neelkanth & Ganga Valley",
                        description:
                            "Take a scenic excursion towards Neelkanth Mahadev Temple and enjoy the surrounding Himalayan landscapes before returning to Rishikesh.",
                    },
                    {
                        day: 6,
                        title: "Departure from Rishikesh",
                        description:
                            "Enjoy breakfast and some free time for shopping before checking out and beginning your onward journey.",
                    },
                ],
            },
            {
                name: "Mussoorie",
                subtitle: "The Queen of Hills",
                category: "Mountains",
                // Mussoorie
                whyVisit: {
                    title: "Why Visit Mussoorie?",
                    description:
                        "Escape to the Queen of Hills with misty mountains, lush valleys, charming colonial streets and refreshing Himalayan views.",
                    highlights: [
                        "Misty Himalayan landscapes",
                        "Scenic viewpoints & waterfalls",
                        "Charming Mall Road",
                        "Pleasant mountain climate",
                    ],
                },
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage:
                    "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=3840&q=90",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=3840&q=90",
                        alt: "Scenic mountain landscape around Mussoorie",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=3840&q=90",
                        alt: "Mountain scenery in Uttarakhand",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1623059486795-6c9f7b5b6f6b?auto=format&fit=crop&w=3840&q=90",
                        alt: "Himalayan landscape near Mussoorie",
                    },
                ],

                rating: "4.8",
                reviews: "2.2k",

                location: "Mussoorie, Uttarakhand",
                latitude: 30.4598,
                longitude: 78.0644,

                description:
                    "Discover Mussoorie's charming hill roads, panoramic Himalayan views, colonial heritage, waterfalls and peaceful forest trails surrounded by the beautiful Garhwal Himalayas.",

                weather: "5°C - 25°C",
                idealTrip: "4 - 6 Days",
                budget: "₹9,000 - ₹18,000",

                duration: "6 Days / 5 Nights",
                startingPrice: "₹13,499",
                originalPrice: "₹18,499",
                offerPrice: "₹13,499",
                saveAmount: "₹5,000",
                discount: "27%",
                validTill: "30 September 2026",

                groupSize: "2 - 16 People",
                bestTime: "March - June, September - November",

                highlights: [
                    "Mall Road",
                    "Lal Tibba",
                    "Kempty Falls",
                    "Gun Hill",
                    "Camel's Back Road",
                    "Company Garden",
                ],

                bestTimeToVisit: {
                    months: [
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",

                    ],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Dec - Feb",
                            description: "Cold mornings with occasional snowfall.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Spring",
                            months: "Mar - Apr",
                            description: "Pleasant days with blooming mountain flowers.",
                            icon: "spring" as const,
                        },
                        {
                            name: "Summer",
                            months: "May - Jun",
                            description: "Comfortable temperatures for sightseeing adventures.",
                            icon: "summer" as const,
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
                        value: "Taxis, Buses & Local Cabs",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Hindi, English & Garhwali",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Generally Not Required",
                        icon: "permit",
                    },
                    {
                        label: "Currency",
                        value: "Indian Rupee (INR)",
                        icon: "currency",
                    },
                ],

                activities: [
                    {
                        text: "Mountain Trekking",
                        icon: PersonStanding,
                    },
                    {
                        text: "Nature Walk",
                        icon: Footprints,
                    },
                    {
                        text: "Sightseeing",
                        icon: Binoculars,
                    },
                    {
                        text: "Photography",
                        icon: Camera,
                    },
                    {
                        text: "Camping",
                        icon: TentTree,
                    },
                    {
                        text: "Rock Climbing",
                        icon: Mountain,
                    },
                    {
                        text: "Shopping",
                        icon: ShoppingBag,
                    },
                    {
                        text: "Adventure Activities",
                        icon: Compass,
                    },
                ],

                packingItems: [
                    {
                        label: "Warm Clothes",
                        icon: "clothes",
                    },
                    {
                        label: "Light Jacket",
                        icon: "clothes",
                    },
                    {
                        label: "Comfortable Shoes",
                        icon: "shoes",
                    },
                    {
                        label: "Sunglasses & Sunscreen",
                        icon: "sunglasses",
                    },
                    {
                        label: "Power Bank & ID",
                        icon: "powerbank",
                    },
                    {
                        label: "Personal Medicines",
                        icon: "medicine",
                    },
                ],

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival and Evening Walk Around Mussoorie",
                        description:
                            "Arrive in Mussoorie and check into your hotel. Relax before exploring Mall Road, Landour Bazaar and nearby viewpoints during the evening.",
                    },
                    {
                        day: 2,
                        title: "Explore Mussoorie's Famous Local Attractions",
                        description:
                            "Visit Gun Hill, Camel's Back Road, Company Garden and Kempty Falls while enjoying scenic mountain views throughout the day.",
                    },
                    {
                        day: 3,
                        title: "Discover Landour and Lal Tibba Scenic Beauty",
                        description:
                            "Explore peaceful Landour streets, visit Lal Tibba viewpoint and enjoy panoramic Himalayan scenery surrounded by beautiful colonial-era architecture.",
                    },
                    {
                        day: 4,
                        title: "Adventure Day Through Waterfalls and Forests",
                        description:
                            "Explore nearby waterfalls and forest trails. Enjoy optional adventure activities before spending a relaxing evening in Mussoorie.",
                    },
                    {
                        day: 5,
                        title: "Leisure, Shopping and Mountain Photography",
                        description:
                            "Enjoy a relaxed morning exploring local markets and cafes. Spend the afternoon shopping and capturing scenic Himalayan photographs.",
                    },
                    {
                        day: 6,
                        title: "Breakfast and Departure From Beautiful Mussoorie",
                        description:
                            "Enjoy breakfast and some free time before checking out and beginning your onward journey from Mussoorie.",
                    },
                ],
            },
            {
                name: "Nainital",
                subtitle: "The Lake City of Uttarakhand",
                category: "Lakes",
                // Nainital
                whyVisit: {
                    title: "Why Visit Nainital?",
                    description:
                        "Relax beside the beautiful Naini Lake while exploring peaceful hills, scenic viewpoints and the timeless charm of this Himalayan town.",
                    highlights: [
                        "Beautiful Naini Lake",
                        "Scenic Himalayan viewpoints",
                        "Boating & lakeside experiences",
                        "Peaceful hill-station escape",
                    ],
                },
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage:
                    "https://images.unsplash.com/photo-1643263904933-2aa9fb29bd81?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1706468630738-b0ded0c5fc25?auto=format&fit=crop&w=3840&q=90",
                        alt: "Aerial view of Naini Lake and Nainital"
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1639053417427-0eefa1f7df07?auto=format&fit=crop&w=3840&q=90",
                        alt: "Nainital Lake surrounded by green mountains"
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1729352654180-c3fcc130cf4e?auto=format&fit=crop&w=3840&q=90",
                        alt: "Naini Lake surrounded by trees"
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1706468630738-b0ded0c5fc25?auto=format&fit=crop&w=3840&q=90",
                        alt: "Nainital town surrounded by mountains"
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1586255028095-d93edb74e412?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        alt: "Nainital River"
                    }
                ],

                rating: "4.8",
                reviews: "2.1k",

                location: "Nainital, Uttarakhand",
                latitude: 29.3919,
                longitude: 79.4542,

                description:
                    "Experience the beautiful lake city of Nainital with peaceful boat rides, Himalayan viewpoints, scenic mountain walks, charming markets and memorable hill-station experiences.",

                weather: "4°C - 25°C",
                idealTrip: "4 - 6 Days",
                budget: "₹9,000 - ₹18,000",

                duration: "6 Days / 5 Nights",

                startingPrice: "₹13,999",
                originalPrice: "₹18,999",
                offerPrice: "₹13,999",
                saveAmount: "₹5,000",
                discount: "26% OFF",

                validTill: "30 September 2026",

                groupSize: "2 - 16 People",

                bestTime: "March - June, September - November",


                highlights: [
                    "Naini Lake",
                    "Naina Devi Temple",
                    "Mall Road",
                    "Snow View Point",
                    "Naina Peak",
                    "Tiffin Top",
                    "Eco Cave Gardens",
                    "Nainital Zoo"
                ],

                bestTimeToVisit: {
                    months: [
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Sep",
                        "Oct",
                        "Nov"
                    ],

                    seasons: [
                        {
                            name: "Winter",
                            months: "December - February",
                            description:
                                "Cold mornings with occasional winter snowfall.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Spring",
                            months: "March - April",
                            description:
                                "Pleasant days with blooming hillside flowers.",
                            icon: "spring" as const,
                        },
                        {
                            name: "Summer",
                            months: "May - June",
                            description:
                                "Cool weather for boating and sightseeing.",
                            icon: "summer" as const,
                        },

                    ]
                },

                travelInfo: [
                    {
                        label: "Nearest Airport",
                        value: "Pantnagar Airport",
                        icon: "plane"
                    },
                    {
                        label: "Nearest Railway",
                        value: "Kathgodam Railway Station",
                        icon: "train"
                    },
                    {
                        label: "Local Transport",
                        value: "Taxis, Buses, Autos & Ropeway",
                        icon: "car"
                    },
                    {
                        label: "Languages",
                        value: "Hindi, English & Kumaoni",
                        icon: "languages"
                    },
                    {
                        label: "Permits",
                        value: "Generally Not Required",
                        icon: "file-check"
                    },
                    {
                        label: "Currency",
                        value: "Indian Rupee (INR)",
                        icon: "indian-rupee"
                    }
                ],

                activities: [
                    {
                        text: "Boating on Naini Lake",
                        icon: ShipWheel
                    },
                    {
                        text: "Ropeway Ride to Snow View",
                        icon: CableCar
                    },
                    {
                        text: "Trekking Around Naina Peak",
                        icon: Mountain
                    },
                    {
                        text: "Nature Walks Through Pine Forests",
                        icon: Footprints
                    },
                    {
                        text: "Explore Local Mountain Attractions",
                        icon: Compass
                    },
                    {
                        text: "Mountain Photography and Sightseeing",
                        icon: Camera
                    },
                    {
                        text: "Shopping Around Mall Road",
                        icon: ShoppingBag
                    },
                    {
                        text: "Relaxing Lakeside Evening Walks",
                        icon: PersonStanding
                    }
                ],

                packingItems: [
                    {
                        label: "Warm Clothes",
                        icon: "Shirt"
                    },
                    {
                        label: "Light Jacket",
                        icon: "Wind"
                    },
                    {
                        label: "Comfortable Walking Shoes",
                        icon: "Footprints"
                    },
                    {
                        label: "Sunglasses & Sunscreen",
                        icon: "Sun"
                    },
                    {
                        label: "Power Bank & ID",
                        icon: "BatteryCharging"
                    },
                    {
                        label: "Personal Medicines",
                        icon: "Pill"
                    }
                ],

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival and Evening Walk Around Nainital",
                        description:
                            "Arrive in Nainital, check into your hotel and relax. Later, enjoy a peaceful evening walk around Mall Road and explore the beautiful surroundings of Naini Lake."
                    },
                    {
                        day: 2,
                        title: "Explore Naini Lake and Mall Road",
                        description:
                            "Start your day with boating on Naini Lake. Visit Naina Devi Temple and spend the evening exploring Mall Road, Tibetan Market and nearby local shops."
                    },
                    {
                        day: 3,
                        title: "Discover Snow View and Naina Peak",
                        description:
                            "Visit Snow View Point for panoramic Himalayan views. Continue towards Naina Peak and enjoy a scenic mountain experience surrounded by forests."
                    },
                    {
                        day: 4,
                        title: "Visit Tiffin Top and Eco Cave Gardens",
                        description:
                            "Explore Tiffin Top and enjoy beautiful mountain scenery. Later visit Eco Cave Gardens and discover its interconnected natural caves."
                    },
                    {
                        day: 5,
                        title: "Enjoy Boating and Local Market Shopping",
                        description:
                            "Enjoy a relaxed morning near Naini Lake. Spend the afternoon shopping for local handicrafts, souvenirs and traditional Kumaoni products around the markets."
                    },
                    {
                        day: 6,
                        title: "Relax Before Your Departure From Nainital",
                        description:
                            "Have breakfast and enjoy some peaceful time around the lake. Check out from the hotel and begin your return journey."
                    }
                ]
            },
            {
                name: "Kedarnath",
                subtitle: "Sacred Abode of Lord Shiva",
                category: "Spiritual",
                // Kedarnath
                whyVisit: {
                    title: "Why Visit Kedarnath?",
                    description:
                        "Embark on a spiritual Himalayan journey surrounded by majestic peaks, sacred landscapes and the revered Kedarnath Temple.",
                    highlights: [
                        "Sacred Kedarnath Temple",
                        "Majestic Himalayan peaks",
                        "Scenic mountain trails",
                        "Peaceful spiritual surroundings",
                    ],
                },
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage:
                    "https://images.unsplash.com/photo-1623952146070-f13fc902f769?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1699042921538-6d03a8df9631?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2VkYXJuYXRofGVufDB8fDB8fHww",
                        alt: "Temple"
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1698574996391-73f103113f60?auto=format&fit=crop&w=3840&q=90",
                        alt: "Kedarnath Temple surrounded by snow covered mountains"
                    },

                    {
                        src:
                            "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=3840&q=90",
                        alt: "Himalayan mountains and valley in Uttarakhand"
                    },

                    {
                        src:
                            "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=3840&q=90",
                        alt: "Snow covered Himalayan mountain landscape"
                    },

                    {
                        src:
                            "https://images.unsplash.com/photo-1606722581293-628fa217a6f7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        alt: "Mountains"
                    }
                ],
                rating: "4.9",
                reviews: "3.2k",

                location: "Kedarnath, Rudraprayag, Uttarakhand",
                latitude: 30.7346,
                longitude: 79.0669,

                description:
                    "Experience a spiritual Himalayan journey to Kedarnath with sacred temple darshan, mountain trekking, breathtaking valleys, peaceful surroundings and unforgettable views of the Himalayas.",

                weather: "0°C - 18°C",
                idealTrip: "5 - 7 Days",
                budget: "₹12,000 - ₹25,000",

                duration: "6 Days / 5 Nights",

                startingPrice: "₹14,999",
                originalPrice: "₹20,999",
                offerPrice: "₹14,999",
                saveAmount: "₹6,000",
                discount: "29% OFF",

                validTill: "30 September 2026",

                groupSize: "2 - 16 People",

                bestTime: "May - June, September - October",


                highlights: [
                    "Kedarnath Temple",
                    "Gaurikund",
                    "Bhairavnath Temple",
                    "Adi Shankaracharya Samadhi",
                    "Mandakini River",
                    "Kedarnath Valley",
                    "Vasuki Tal",
                    "Himalayan Mountain Views"
                ],

                bestTimeToVisit: {
                    months: ["May", "Jun", "Sep", "Oct"],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Dec - Feb",
                            description:
                                "Heavy snowfall closes high-altitude pilgrimage routes.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Spring",
                            months: "Mar - May",
                            description:
                                "Routes gradually reopen before pilgrimage season.",
                            icon: "spring" as const,
                        },
                        {
                            name: "Summer",
                            months: "May - Jun",
                            description:
                                "Best conditions for pilgrimage and trekking.",
                            icon: "summer" as const,
                        },
                    ],
                },

                travelInfo: [
                    {
                        label: "Nearest Airport",
                        value: "Jolly Grant Airport, Dehradun",
                        icon: "plane"
                    },
                    {
                        label: "Nearest Railway",
                        value: "Rishikesh Railway Station",
                        icon: "train"
                    },
                    {
                        label: "Trek Starting Point",
                        value: "Gaurikund",
                        icon: "Footprints"
                    },
                    {
                        label: "Local Transport",
                        value: "Buses, Shared Jeeps, Pony & Doli",
                        icon: "car"
                    },
                    {
                        label: "Yatra Registration",
                        value: "Required",
                        icon: "file-check"
                    },
                    {
                        label: "Currency",
                        value: "Indian Rupee (INR)",
                        icon: "indian-rupee"
                    }
                ],

                activities: [
                    {
                        text: "Kedarnath Temple Darshan",
                        icon: Landmark
                    },
                    {
                        text: "Gaurikund to Kedarnath Trek",
                        icon: Mountain
                    },
                    {
                        text: "Pony or Doli Ride",
                        icon: PersonStanding
                    },
                    {
                        text: "Bhairavnath Temple Visit",
                        icon: Sparkles
                    },
                    {
                        text: "Meditation in Himalayan Surroundings",
                        icon: Brain
                    },
                    {
                        text: "Mountain Photography",
                        icon: Camera
                    },
                    {
                        text: "Mandakini Valley Exploration",
                        icon: Waves
                    },
                    {
                        text: "Vasuki Tal Trek",
                        icon: Compass
                    }
                ],

                packingItems: [
                    {
                        label: "Warm Clothes",
                        icon: "Shirt"
                    },
                    {
                        label: "Waterproof Rain Jacket",
                        icon: "CloudRain"
                    },
                    {
                        label: "Trekking Shoes",
                        icon: "Footprints"
                    },
                    {
                        label: "Sunglasses & Sunscreen",
                        icon: "Sun"
                    },
                    {
                        label: "Power Bank & ID",
                        icon: "BatteryCharging"
                    },
                    {
                        label: "Personal Medicines",
                        icon: "Pill"
                    }
                ],

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Guptkashi and Mountain Journey Begins",
                        description:
                            "Arrive in Guptkashi after a scenic mountain drive. Check into your accommodation, relax and prepare for the upcoming Kedarnath pilgrimage."
                    },
                    {
                        day: 2,
                        title: "Travel to Gaurikund and Begin Kedarnath Trek",
                        description:
                            "Travel from Guptkashi towards Gaurikund. After completing the required preparations, begin your trek towards Kedarnath through the beautiful Himalayan landscape."
                    },
                    {
                        day: 3,
                        title: "Complete Trek and Attend Kedarnath Temple Darshan",
                        description:
                            "Complete the trek to Kedarnath and check into your accommodation. Later, visit the sacred Kedarnath Temple for darshan and evening prayers."
                    },
                    {
                        day: 4,
                        title: "Morning Darshan and Explore Kedarnath Sacred Sites",
                        description:
                            "Begin the morning with temple darshan. Later, explore Bhairavnath Temple, Adi Shankaracharya Samadhi and the surrounding Himalayan landscapes."
                    },
                    {
                        day: 5,
                        title: "Trek Back From Kedarnath to Gaurikund",
                        description:
                            "After breakfast, begin your descent from Kedarnath towards Gaurikund. Enjoy the mountain scenery and waterfalls along the trekking route."
                    },
                    {
                        day: 6,
                        title: "Drive Back and Depart From Uttarakhand",
                        description:
                            "Complete your journey with a scenic drive towards the departure point. Continue onward travel from Uttarakhand according to your schedule."
                    }
                ]
            },
            {
                name: "Jim Corbett",
                subtitle: "Wildlife, Wilderness & Jungle Adventures",
                category: "Nature",
                // Jim Corbett
                whyVisit: {
                    title: "Why Visit Jim Corbett?",
                    description:
                        "Discover India's wild side through thrilling safaris, dense forests, diverse wildlife and beautiful landscapes of the Himalayan foothills.",
                    highlights: [
                        "Exciting jungle safaris",
                        "Wildlife & bird watching",
                        "Dense forests & river landscapes",
                        "Rich Himalayan foothill ecosystem",
                    ],
                },
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage:
                    "https://images.unsplash.com/photo-1765375906788-3526ea224645?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1600&q=80",
                        alt: "Wild elephant walking through a forest landscape",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1600&q=80",
                        alt: "Tiger in a natural jungle habitat",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80",
                        alt: "Wildlife and dense forest landscape",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1600&q=80",
                        alt: "Safari vehicle exploring a forest trail",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80",
                        alt: "Sunlight passing through a dense forest",
                    },
                ],

                rating: "4.8",
                reviews: "2.1k",

                location: "Jim Corbett, Uttarakhand",
                latitude: 29.5300,
                longitude: 78.7747,

                description:
                    "Experience the wild beauty of Jim Corbett with thrilling jungle safaris, diverse wildlife, peaceful forest landscapes, scenic rivers and unforgettable adventures in the heart of Uttarakhand.",

                weather: "5°C - 35°C",
                idealTrip: "3 - 5 Days",
                budget: "₹10,000 - ₹25,000",

                duration: "5 Days / 4 Nights",
                startingPrice: "₹13,999",
                originalPrice: "₹18,999",
                offerPrice: "₹13,999",
                saveAmount: "₹5,000",
                discount: "26%",
                validTill: "30 September 2026",

                groupSize: "2 - 16 People",
                bestTime: "October - June",

                highlights: [
                    "Jungle Safari",
                    "Bengal Tiger",
                    "Elephant Sightings",
                    "Corbett Waterfall",
                    "Ramganga River",
                    "Forest & Wildlife",
                ],

                bestTimeToVisit: {
                    months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Nov - Feb",
                            description:
                                "Cool weather and excellent conditions for wildlife safaris.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "Mar - Jun",
                            description:
                                "Warm weather with good chances of spotting wildlife near water sources.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "Jul - Sep",
                            description:
                                "Heavy rainfall and limited access to several forest zones.",
                            icon: "monsoon" as const,
                        },
                    ],
                },

                travelInfo: [
                    {
                        label: "Nearest Airport",
                        value: "Pantnagar Airport",
                        icon: "airport",
                    },
                    {
                        label: "Nearest Railway Station",
                        value: "Ramnagar Railway Station",
                        icon: "railway",
                    },
                    {
                        label: "Local Transport",
                        value: "Safari Jeeps, Taxis & Local Cabs",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Hindi, English & Kumaoni",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Required for Jungle Safari",
                        icon: "permit",
                    },
                    {
                        label: "Currency",
                        value: "Indian Rupee (INR)",
                        icon: "currency",
                    },
                ],

                activities: [
                    {
                        text: "Jeep Safari",
                        icon: CarFront,
                    },
                    {
                        text: "Wildlife Spotting",
                        icon: PawPrint,
                    },
                    {
                        text: "Bird Watching",
                        icon: Bird,
                    },
                    {
                        text: "Nature Walk",
                        icon: TreePine,
                    },
                    {
                        text: "Wildlife Photography",
                        icon: Camera,
                    },
                    {
                        text: "Forest Exploration",
                        icon: Binoculars,
                    },
                    {
                        text: "River Views",
                        icon: Waves,
                    },
                    {
                        text: "Jungle Camping",
                        icon: TentTree,
                    },
                ],

                packingItems: [
                    {
                        label: "Comfortable Cotton Clothes",
                        icon: "clothes",
                    },
                    {
                        label: "Light Jacket",
                        icon: "clothes",
                    },
                    {
                        label: "Comfortable Walking Shoes",
                        icon: "shoes",
                    },
                    {
                        label: "Sunglasses & Sunscreen",
                        icon: "sunglasses",
                    },
                    {
                        label: "Binoculars & Camera",
                        icon: "camera",
                    },
                    {
                        label: "Personal Medicines & ID",
                        icon: "medicine",
                    },
                ],

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Jim Corbett",
                        description:
                            "Arrive in Jim Corbett and check into your resort. Relax amidst the peaceful forest surroundings and enjoy the evening at your leisure.",
                    },
                    {
                        day: 2,
                        title: "Morning Jungle Safari",
                        description:
                            "Wake up early for an exciting jeep safari through the Corbett forest. Explore the wilderness and look for elephants, deer, birds and other wildlife in their natural habitat.",
                    },
                    {
                        day: 3,
                        title: "Wildlife Exploration & Corbett Waterfall",
                        description:
                            "Enjoy a relaxed morning at the resort before visiting Corbett Waterfall and exploring the surrounding natural landscapes. Spend the evening enjoying the peaceful forest atmosphere.",
                    },
                    {
                        day: 4,
                        title: "Jungle Safari & Nature Experience",
                        description:
                            "Head out for another thrilling jungle safari through one of Corbett's forest zones. Experience the diverse flora and fauna and enjoy scenic views around the Ramganga landscape.",
                    },
                    {
                        day: 5,
                        title: "Leisure & Departure",
                        description:
                            "Enjoy breakfast and some free time at the resort before checking out. Begin your onward journey with unforgettable memories of the Corbett wilderness.",
                    },
                ],
            },
        ],
    },

    {
        name: "Ladakh",

        packages: [
            {
                name: "Leh",
                category: "Adventure",
                subtitle: "The Gateway to Ladakh",
                // Leh
                whyVisit: {
                    title: "Why Visit Leh?",
                    description:
                        "Experience the raw beauty of the Himalayas with dramatic landscapes, high-altitude lakes, ancient monasteries and unforgettable mountain adventures.",
                    highlights: [
                        "Dramatic Himalayan landscapes",
                        "Pangong & high-altitude lakes",
                        "Ancient monasteries & Buddhist culture",
                        "Scenic mountain passes & adventures",
                    ],
                },
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage:
                    "https://images.unsplash.com/photo-1617824077840-0d7a0cd13448?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",


                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1606857090627-27ca46667290?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        alt: "Pangong Lake in Ladakh",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1622308644420-b20142dc993c?auto=format&fit=crop&w=2400&q=90",
                        alt: "Ladakh mountain landscape",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2400&q=90",
                        alt: "High mountain pass in Ladakh",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=2400&q=90",
                        alt: "High altitude lake in Ladakh",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=2400&q=90",
                        alt: "Nubra Valley landscape",
                    },

                ],

                rating: "4.9",
                reviews: "2.4k",

                location: "Leh, Ladakh",
                latitude: 34.1526,
                longitude: 77.5771,

                description:
                    "Explore dramatic mountains, ancient monasteries, turquoise lakes and breathtaking high-altitude landscapes in the magnificent region of Ladakh.",

                weather: "5°C - 25°C",
                idealTrip: "5 - 7 Days",
                budget: "₹18,000 - ₹35,000",

                duration: "6 Days / 5 Nights",
                startingPrice: "₹19,999",
                originalPrice: "₹26,999",
                offerPrice: "₹19,999",
                saveAmount: "₹7,000",
                discount: "26%",
                validTill: "30 September 2026",
                groupSize: "2 - 16 People",
                bestTime: "May - September",

                highlights: [
                    "Pangong Lake",
                    "Nubra Valley",
                    "Leh Palace",
                    "Shanti Stupa",
                    "Magnetic Hill",
                ],

                bestTimeToVisit: {
                    months: ["May", "Jun", "Jul", "Aug", "Sep"],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Oct - Mar",
                            description:
                                "Cold temperatures and heavy snowfall create a dramatic winter landscape across Ladakh.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "Apr - Jun",
                            description:
                                "Pleasant weather and clear mountain views make summer ideal for exploring Ladakh.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "Jul - Sep",
                            description:
                                "Ladakh remains relatively dry while clear skies offer excellent mountain views.",
                            icon: "monsoon" as const,
                        },
                    ],
                },

                travelInfo: [
                    {
                        label: "Nearest Airport",
                        value: "Kushok Bakula Rimpochee Airport, Leh",
                        icon: "airport",
                    },
                    {
                        label: "Nearest Railway Station",
                        value: "Jammu Tawi Railway Station",
                        icon: "railway",
                    },
                    {
                        label: "Local Transport",
                        value: "Taxis, Bikes & Local Buses Available",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Ladakhi, Hindi, English",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Required for Some Protected Areas",
                        icon: "permit",
                    },
                    {
                        label: "Currency",
                        value: "Indian Rupee (INR)",
                        icon: "currency",
                    },
                ],

                activities: [
                    {
                        text: "Mountain Biking",
                        icon: Bike,
                    },
                    {
                        text: "Monastery Visits",
                        icon: Landmark,
                    },
                    {
                        text: "River Rafting",
                        icon: Waves,
                    },
                    {
                        text: "Trekking",
                        icon: PersonStanding,
                    },
                    {
                        text: "Camping",
                        icon: TentTree,
                    },
                    {
                        text: "Mountain Sightseeing",
                        icon: Mountain,
                    },
                    {
                        text: "Photography",
                        icon: Camera,
                    },
                    {
                        text: "Stargazing",
                        icon: Star,
                    },
                ],

                packingItems: [
                    {
                        label: "Warm Layered Clothes",
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

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Leh & Acclimatization",
                        description:
                            "Arrive at Leh Airport and transfer to your hotel. Rest and allow your body to acclimatize to the high altitude.",
                    },
                    {
                        day: 2,
                        title: "Leh Local Sightseeing",
                        description:
                            "Visit Leh Palace, Shanti Stupa, Namgyal Tsemo Monastery and explore the vibrant local markets of Leh.",
                    },
                    {
                        day: 3,
                        title: "Leh to Nubra Valley",
                        description:
                            "Drive through Khardung La Pass towards Nubra Valley. Explore the valley, visit Diskit Monastery and enjoy the unique Himalayan landscape.",
                    },
                    {
                        day: 4,
                        title: "Nubra Valley to Pangong Lake",
                        description:
                            "Travel towards the spectacular Pangong Lake. Enjoy the changing mountain landscapes and spend the evening beside the beautiful lake.",
                    },
                    {
                        day: 5,
                        title: "Pangong Lake to Leh",
                        description:
                            "Enjoy the morning views of Pangong Lake before returning to Leh. Stop at scenic viewpoints and Magnetic Hill along the way.",
                    },
                    {
                        day: 6,
                        title: "Departure from Leh",
                        description:
                            "Enjoy a relaxed morning in Leh before checking out and departing for your onward journey.",
                    },
                ],
            },
        ],
    },

    {
        name: "Rajasthan",

        packages: [
            {
                name: "Udaipur",
                category: "Heritage",
                subtitle: "The City of Lakes & Palaces",
                // Udaipur
                whyVisit: {
                    title: "Why Visit Udaipur?",
                    description:
                        "Experience the romance of Rajasthan with beautiful lakes, grand palaces, historic streets and breathtaking views of the Aravalli hills.",
                    highlights: [
                        "Beautiful lakes & waterfronts",
                        "Majestic palaces & forts",
                        "Rich Rajput heritage & culture",
                        "Scenic Aravalli landscapes",
                    ],
                },
                heroImage:
                    "https://images.unsplash.com/photo-1706961121527-4017856774c7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1695956353120-54ce5e91632b?auto=format&fit=crop&w=3840&q=90",
                        alt: "City Palace on Lake Pichola in Udaipur",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1742924400583-8937604db85a?auto=format&fit=crop&w=3840&q=90",
                        alt: "City Palace and Lake Pichola in Udaipur",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1690708186073-17037cd66467?auto=format&fit=crop&w=3840&q=90",
                        alt: "Jagmandir Palace on Lake Pichola in Udaipur",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1668338012281-d0b269bcd3b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVkYWlwdXJ8ZW58MHwwfDB8fHww",
                        alt: "View of Udaipur from Monsoon Palace",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1690708186073-17037cd66467?auto=format&fit=crop&w=3840&q=90",
                        alt: "Jagmandir Island Palace in Udaipur",
                    },
                ],

                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                rating: "4.8",
                reviews: "2.2k",

                location: "Udaipur, Rajasthan",
                latitude: 24.5854,
                longitude: 73.7125,

                description:
                    "Discover the romantic charm of Udaipur through magnificent palaces, serene lakes, royal heritage, colorful markets and breathtaking sunset views.",

                weather: "12°C - 32°C",
                idealTrip: "3 - 5 Days",
                budget: "₹10,000 - ₹22,000",

                duration: "4 Days / 3 Nights",
                startingPrice: "₹11,999",
                originalPrice: "₹16,999",
                offerPrice: "₹11,999",
                saveAmount: "₹5,000",
                discount: "29%",
                validTill: "30 September 2026",
                groupSize: "2 - 16 People",
                bestTime: "October - March",

                highlights: [
                    "City Palace",
                    "Lake Pichola",
                    "Jag Mandir",
                    "Sajjangarh Palace",
                    "Bagore Ki Haveli",
                ],

                bestTimeToVisit: {
                    months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Oct - Feb",
                            description:
                                "Pleasant temperatures make winter ideal for exploring Udaipur's palaces and lakes.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "Mar - Jun",
                            description:
                                "Warm weather suits early sightseeing and relaxing beside Udaipur's beautiful lakes.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "Jul - Sep",
                            description:
                                "Rain brings lush greenery and beautiful views around Udaipur's scenic lakes.",
                            icon: "monsoon" as const,
                        },
                    ],
                },

                travelInfo: [
                    {
                        label: "Nearest Airport",
                        value: "Maharana Pratap Airport, Udaipur",
                        icon: "airport",
                    },
                    {
                        label: "Nearest Railway Station",
                        value: "Udaipur City Railway Station",
                        icon: "railway",
                    },
                    {
                        label: "Local Transport",
                        value: "Taxis, Auto Rickshaws & Local Buses",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Hindi, English, Rajasthani",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Generally Not Required",
                        icon: "permit",
                    },
                    {
                        label: "Currency",
                        value: "Indian Rupee (INR)",
                        icon: "currency",
                    },
                ],

                activities: [
                    {
                        text: "Boat Ride",
                        icon: Ship,
                    },
                    {
                        text: "Palace Tours",
                        icon: Landmark,
                    },
                    {
                        text: "Heritage Walk",
                        icon: Footprints,
                    },
                    {
                        text: "Cultural Shows",
                        icon: Music,
                    },
                    {
                        text: "Photography",
                        icon: Camera,
                    },
                    {
                        text: "Shopping",
                        icon: ShoppingBag,
                    },
                    {
                        text: "Sunset Views",
                        icon: Sunset,
                    },
                    {
                        text: "Local Cuisine",
                        icon: Utensils,
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
                        label: "Light Jacket or Shawl",
                        icon: "clothes",
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

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Udaipur & Lake Pichola",
                        description:
                            "Arrive in Udaipur and check into your hotel. Spend the evening exploring the lakeside area and enjoy a relaxing boat ride on Lake Pichola.",
                    },
                    {
                        day: 2,
                        title: "City Palace & Heritage Sightseeing",
                        description:
                            "Visit the magnificent City Palace, Jagdish Temple and Bagore Ki Haveli. Explore the old city streets and traditional markets in the evening.",
                    },
                    {
                        day: 3,
                        title: "Sajjangarh Palace & Local Experiences",
                        description:
                            "Visit Sajjangarh Monsoon Palace for panoramic city views. Explore local markets, enjoy traditional Rajasthani cuisine and experience the city's vibrant culture.",
                    },
                    {
                        day: 4,
                        title: "Leisure & Departure",
                        description:
                            "Enjoy a relaxed morning exploring nearby attractions or shopping for souvenirs before checking out and departing for your onward journey.",
                    },
                ],
            },

            {
                name: "Jaipur",
                category: "Heritage",
                subtitle: "The Pink City of Royal Rajasthan",
                // Jaipur
                whyVisit: {
                    title: "Why Visit Jaipur?",
                    description:
                        "Discover the vibrant Pink City filled with magnificent forts, royal palaces, colorful markets and the rich heritage of Rajasthan.",
                    highlights: [
                        "Magnificent forts & palaces",
                        "Rich Rajput history & heritage",
                        "Colorful markets & handicrafts",
                        "Traditional Rajasthani cuisine",
                    ],
                },
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage:
                    "https://images.unsplash.com/photo-1695395550316-8995ae9d35ff?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2400&auto=format&fit=crop",
                        alt: "Historic architecture and Hawa Mahal in Jaipur",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1661924326425-c14a6426d989?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        alt: "Amber Fort in Jaipur",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=2400&auto=format&fit=crop",
                        alt: "Jaipur palace architecture",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2400&auto=format&fit=crop",
                        alt: "Royal fort in Jaipur",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1572915105668-d5b742cb5efd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amFpcHVyfGVufDB8MHwwfHx8MA%3D%3D",
                        alt: "Historic streets and architecture of Jaipur",
                    },
                ],

                rating: "4.8",
                reviews: "2.6k",

                location: "Jaipur, Rajasthan",
                latitude: 26.9124,
                longitude: 75.7873,

                description:
                    "Experience Jaipur's royal heritage through magnificent forts, grand palaces, colorful bazaars, historic landmarks and the vibrant culture of Rajasthan.",

                weather: "15°C - 35°C",
                idealTrip: "3 - 5 Days",
                budget: "₹9,000 - ₹20,000",

                duration: "4 Days / 3 Nights",
                startingPrice: "₹10,999",
                originalPrice: "₹15,999",
                offerPrice: "₹10,999",
                saveAmount: "₹5,000",
                discount: "31%",
                validTill: "30 September 2026",
                groupSize: "2 - 16 People",
                bestTime: "October - March",

                highlights: [
                    "Amber Fort",
                    "Hawa Mahal",
                    "City Palace",
                    "Jantar Mantar",
                    "Jal Mahal",
                ],

                bestTimeToVisit: {
                    months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Oct - Feb",
                            description:
                                "Pleasant temperatures make winter ideal for exploring Jaipur's forts and palaces.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "Mar - Jun",
                            description:
                                "Hot weather makes early mornings and evenings comfortable for sightseeing.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "Jul - Sep",
                            description:
                                "Rain brings greenery and cooler weather around Jaipur's historic landmarks.",
                            icon: "monsoon" as const,
                        },
                    ],
                },

                travelInfo: [
                    {
                        label: "Nearest Airport",
                        value: "Jaipur International Airport",
                        icon: "airport",
                    },
                    {
                        label: "Nearest Railway Station",
                        value: "Jaipur Junction Railway Station",
                        icon: "railway",
                    },
                    {
                        label: "Local Transport",
                        value: "Taxis, Auto Rickshaws, Buses & Metro",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Hindi, English, Rajasthani",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Generally Not Required",
                        icon: "permit",
                    },
                    {
                        label: "Currency",
                        value: "Indian Rupee (INR)",
                        icon: "currency",
                    },
                ],

                activities: [
                    {
                        text: "Fort Tours",
                        icon: Landmark,
                    },
                    {
                        text: "Heritage Walk",
                        icon: Footprints,
                    },
                    {
                        text: "Palace Visits",
                        icon: Building2,
                    },
                    {
                        text: "Photography",
                        icon: Camera,
                    },
                    {
                        text: "Shopping",
                        icon: ShoppingBag,
                    },
                    {
                        text: "Cultural Shows",
                        icon: Music,
                    },
                    {
                        text: "Local Cuisine",
                        icon: Utensils,
                    },
                    {
                        text: "City Sightseeing",
                        icon: Binoculars,
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
                        label: "Light Jacket or Shawl",
                        icon: "clothes",
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

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Jaipur & Local Exploration",
                        description:
                            "Arrive in Jaipur and check into your hotel. Explore the nearby markets and enjoy an evening walk through the vibrant streets of the Pink City.",
                    },
                    {
                        day: 2,
                        title: "Amber Fort & Royal Jaipur",
                        description:
                            "Visit Amber Fort, Jaigarh Fort and Jal Mahal. Explore the magnificent architecture and learn about Jaipur's royal history.",
                    },
                    {
                        day: 3,
                        title: "City Palace, Hawa Mahal & Jantar Mantar",
                        description:
                            "Explore City Palace, Hawa Mahal and Jantar Mantar. Spend the evening shopping for traditional handicrafts, textiles and jewelry in Jaipur's colorful bazaars.",
                    },
                    {
                        day: 4,
                        title: "Nahargarh Fort & Departure",
                        description:
                            "Visit Nahargarh Fort for panoramic views of Jaipur. Enjoy breakfast and some leisure time before checking out and departing for your onward journey.",
                    },
                    {
                        day: 5,
                        title: "Albert Hall Museum & Cultural Experience",
                        description:
                            "Visit Albert Hall Museum and explore its impressive collection of art and artifacts. Enjoy an evening cultural show with traditional Rajasthani music and dance.",
                    },
                    {
                        day: 6,
                        title: "Local Markets & Departure",
                        description:
                            "Spend the morning shopping for handicrafts, textiles and traditional jewelry. Enjoy some leisure time before checking out and departing for your onward journey.",
                    },
                ],
            },
            {
                name: "Jaisalmer",
                category: "Desert",
                subtitle: "The Golden City of Rajasthan",
                // Jaisalmer
                whyVisit: {
                    title: "Why Visit Jaisalmer?",
                    description:
                        "Step into the heart of the Thar Desert with golden forts, endless sand dunes, vibrant culture and unforgettable desert experiences.",
                    highlights: [
                        "Golden Jaisalmer Fort",
                        "Thar Desert & sand dunes",
                        "Desert camping & camel safaris",
                        "Rich Rajasthani culture & heritage",
                    ],
                },
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage:
                    "https://images.unsplash.com/photo-1602858659965-ea6f743b7679?q=80&w=1693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1706438231376-924f23da45f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGphaXNhbG1lcnxlbnwwfDB8MHx8fDA%3D",
                        alt: "Jaisalmer Fort in Jaisalmer, Rajasthan",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1608080792986-d039bc567c32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGphaXNhbG1lcnxlbnwwfHwwfHx8MA%3D%3D",
                        alt: "Sam Sand Dunes in Jaisalmer",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1741759223244-9c0456c12eb7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        alt: "Gadisar Lake in Jaisalmer",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1591014949393-a3d927b4609f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGphaXNhbG1lcnxlbnwwfHwwfHx8MA%3D%3D",

                    },

                    {
                        alt: "Patwon Ki Haveli in Jaisalmer",
                        src: "https://images.unsplash.com/photo-1736080108948-09bcb69d81b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGphaXNhbG1lcnxlbnwwfHwwfHx8MA%3D%3D"
                    }
                ],
                rating: "4.8",
                reviews: "1.9k",

                location: "Jaisalmer, Rajasthan",
                latitude: 26.9157,
                longitude: 70.9083,

                description:
                    "Discover the golden charm of Jaisalmer through its magnificent fort, ancient havelis, vast Thar Desert, camel safaris and vibrant Rajasthani culture.",

                weather: "10°C - 35°C",
                idealTrip: "3 - 5 Days",
                budget: "₹10,000 - ₹22,000",

                duration: "5 Days / 4 Nights",
                startingPrice: "₹12,999",
                originalPrice: "₹17,999",
                offerPrice: "₹12,999",
                saveAmount: "₹5,000",
                discount: "28%",
                validTill: "30 September 2026",
                groupSize: "2 - 16 People",
                bestTime: "October - March",

                highlights: [
                    "Jaisalmer Fort",
                    "Sam Sand Dunes",
                    "Patwon Ki Haveli",
                    "Gadisar Lake",
                    "Kuldhara Village",
                ],

                bestTimeToVisit: {
                    months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],

                    seasons: [
                        {
                            name: "Winter",
                            months: "Oct - Feb",
                            description:
                                "Pleasant temperatures make winter ideal for desert adventures and sightseeing.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "Mar - Jun",
                            description:
                                "Hot weather makes early mornings and evenings comfortable for sightseeing.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "Jul - Sep",
                            description:
                                "Rainfall is limited, while warm weather continues across the desert region.",
                            icon: "monsoon" as const,
                        },
                    ],
                },

                travelInfo: [
                    {
                        label: "Nearest Airport",
                        value: "Jaisalmer Airport",
                        icon: "airport",
                    },
                    {
                        label: "Nearest Railway Station",
                        value: "Jaisalmer Railway Station",
                        icon: "railway",
                    },
                    {
                        label: "Local Transport",
                        value: "Taxis, Auto Rickshaws & Local Buses",
                        icon: "transport",
                    },
                    {
                        label: "Languages Spoken",
                        value: "Hindi, English, Rajasthani",
                        icon: "language",
                    },
                    {
                        label: "Permits Required",
                        value: "Generally Not Required",
                        icon: "permit",
                    },
                    {
                        label: "Currency",
                        value: "Indian Rupee (INR)",
                        icon: "currency",
                    },
                ],

                activities: [
                    {
                        text: "Camel Safari",
                        icon: Bike,
                    },
                    {
                        text: "Desert Camping",
                        icon: TentTree,
                    },
                    {
                        text: "Fort Tours",
                        icon: Landmark,
                    },
                    {
                        text: "Dune Safari",
                        icon: Mountain,
                    },
                    {
                        text: "Cultural Shows",
                        icon: Music,
                    },
                    {
                        text: "Photography",
                        icon: Camera,
                    },
                    {
                        text: "Heritage Walk",
                        icon: Footprints,
                    },
                    {
                        text: "Stargazing",
                        icon: Star,
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
                        label: "Light Jacket or Shawl",
                        icon: "clothes",
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

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Jaisalmer & Gadisar Lake",
                        description:
                            "Arrive in Jaisalmer and check into your hotel. Visit Gadisar Lake in the evening and enjoy a peaceful sunset around the historic surroundings.",
                    },
                    {
                        day: 2,
                        title: "Jaisalmer Fort & Heritage Exploration",
                        description:
                            "Explore the magnificent Jaisalmer Fort, Jain Temples and royal palaces. Visit Patwon Ki Haveli and discover the historic streets of the Golden City.",
                    },
                    {
                        day: 3,
                        title: "Kuldhara Village & Sam Sand Dunes",
                        description:
                            "Visit the mysterious abandoned village of Kuldhara before heading towards Sam Sand Dunes. Enjoy a thrilling camel safari and traditional desert activities.",
                    },
                    {
                        day: 4,
                        title: "Desert Camping & Cultural Evening",
                        description:
                            "Spend the day exploring the Thar Desert and enjoy dune adventures. Experience an evening of traditional Rajasthani music, folk dance and desert camping.",
                    },
                    {
                        day: 5,
                        title: "Local Markets & Departure",
                        description:
                            "Explore Jaisalmer's colorful markets and shop for traditional handicrafts, textiles and souvenirs. Check out from the hotel and depart for your onward journey.",
                    },
                ],
            },
        ],
    },
    {
        name: `Andaman Nicobar`,

        packages: [
            {
                name: `Andaman Nicobar`,
                category: "Beach",
                // Andaman & Nicobar
                whyVisit: {
                    title: "Why Visit Andaman & Nicobar?",
                    description:
                        "Escape to tropical islands surrounded by turquoise waters, pristine beaches, coral reefs and lush natural landscapes.",
                    highlights: [
                        "Pristine tropical beaches",
                        "Crystal-clear turquoise waters",
                        "Scuba diving & water sports",
                        "Coral reefs & marine life",
                    ],
                },
                subtitle: "Beaches",
                inclusions: [
                    "6 Nights Accommodation",
                    "Daily Breakfast",
                    "Airport Transfers",
                    "All Sightseeing (SIC)",
                    "English Speaking Guide",
                    "Entry Tickets",
                    "Train Tickets",
                    "All Taxes",
                ],

                exclusions: [
                    "International Flights",
                    "Lunch & Dinner",
                    "Personal Expenses",
                    "Travel Insurance",
                    "Tips & Gratuities",
                    "Early Check-in / Late Check-out",
                ],
                heroImage:
                    "https://images.unsplash.com/photo-1640718835374-6116a99c6e6c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                gallery: [
                    {
                        src: "https://images.unsplash.com/photo-1708447461404-57725d3cdb6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5kYW1hbnxlbnwwfDB8MHx8fDA%3D",
                        alt: "Turquoise ocean waters in the Andaman and Nicobar Islands",
                    },
                    {
                        src: "https://images.unsplash.com/photo-1650451985907-d922213a17c3?auto=format&fit=crop&w=3840&q=90",
                        alt: "Radhanagar Beach in Andaman and Nicobar Islands",
                    },
                    {
                        src: "https://images.unsplash.com/photo-1594054478639-66176a66de71?auto=format&fit=crop&w=3840&q=90",
                        alt: "Radhanagar Beach with tropical coastline in Andaman",
                    },
                    {
                        src: "https://images.unsplash.com/photo-1641719320002-743bc0384e0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzfGVufDB8MHwwfHx8MA%3D%3D",
                        alt: "Cellular Jail at Port Blair in Andaman and Nicobar Islands",
                    },
                    {
                        src: "https://images.unsplash.com/photo-1641715155993-592e4fb6b78e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGFuZGFtYW4lMjBhbmQlMjBuaWNvYmFyJTIwaXNsYW5kc3xlbnwwfDB8MHx8fDA%3D",
                        alt: "Sunrise over the sea at Port Blair",
                    },
                ],

                rating: "4.8",
                reviews: "3.2k",

                location: "Andaman & Nicobar",

                latitude: 11.7401,
                longitude: 92.6586,

                description:
                    "Explore pristine beaches, tropical islands, coral reefs and unforgettable adventures across the Andaman & Nicobar Islands.",
                weather: "23°C – 31°C",

                idealTrip: "5–7 Days",

                budget: "₹25,000 – ₹55,000",

                duration: "6D/5N",

                startingPrice: "₹29,999",

                originalPrice: "₹42,999",

                offerPrice: "₹34,999",

                saveAmount: "₹8,000",

                discount: "19% OFF",

                validTill: "31 Dec 2026",

                groupSize: "2–12 People",

                bestTime: "October – May",

                highlights: [
                    "Radhanagar Beach",
                    "Cellular Jail",
                    "Swaraj Dweep",
                    "Shaheed Dweep",
                    "Elephant Beach",
                    "Ross Island",
                    "Scuba Diving",
                    "Snorkeling",
                ],

                bestTimeToVisit: {
                    months: [
                        "October",
                        "November",
                        "December",
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                    ],

                    seasons: [
                        {
                            name: "Winter",
                            months: "October – February",
                            description:
                                "Pleasant weather and calm seas make sightseeing enjoyable.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "March – May",
                            description:
                                "Warm sunny days offer excellent conditions for water activities.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "June – September",
                            description:
                                "Rainfall creates lush greenery but may affect ferry services.",
                            icon: "monsoon" as const,
                        },
                    ],
                },

                travelInfo: [
                    {
                        label: "Airport",
                        value: "Veer Savarkar International Airport",
                        icon: "airport",
                    },
                    {
                        label: "Railway",
                        value: "No railway connectivity",
                        icon: "railway",
                    },
                    {
                        label: "Transport",
                        value: "Ferry, Speedboat, Taxi & Local Transport",
                        icon: "transport",
                    },
                    {
                        label: "Language",
                        value: "Hindi, English, Bengali & Tamil",
                        icon: "language",
                    },
                    {
                        label: "Permit",
                        value: "Follow applicable island entry regulations",
                        icon: "permit",
                    },
                    {
                        label: "Currency",
                        value: "Indian Rupee (₹)",
                        icon: "currency",
                    },
                ],

                activities: [
                    {
                        text: "Scuba Diving",
                        icon: Waves
                    },
                    {
                        text: "Snorkeling",
                        icon: Waves
                    },
                    {
                        text: "Sea Walk",
                        icon: PersonStanding
                    },
                    {
                        text: "Kayaking",
                        icon: Ship
                    },
                    {
                        text: "Parasailing",
                        icon: Wind
                    },
                    {
                        text: "Jet Skiing",
                        icon: Waves
                    },
                    {
                        text: "Glass Bottom Boat",
                        icon: Ship
                    },
                    {
                        text: "Island Hopping",
                        icon: MapPin
                    }
                ],

                packingItems: [
                    {
                        label: "Light Cotton Clothes",
                        icon: "clothes",
                    },
                    {
                        label: "Sunglasses",
                        icon: "sunglasses",
                    },
                    {
                        label: "Comfortable Beach Shoes",
                        icon: "shoes",
                    },
                    {
                        label: "Power Bank",
                        icon: "powerbank",
                    },
                    {
                        label: "Basic Medicines",
                        icon: "medicine",
                    },
                ],

                itinerary: [
                    {
                        day: 1,
                        title: "Arrival in Sri Vijaya Puram & Cellular Jail",
                        description:
                            "Arrive at Veer Savarkar International Airport and check into your hotel. Explore Sri Vijaya Puram and visit the historic Cellular Jail. Enjoy the evening Light and Sound Show before returning to your hotel.",
                    },
                    {
                        day: 2,
                        title: "Sri Vijaya Puram Sightseeing & Swaraj Dweep",
                        description:
                            "Explore local attractions in Sri Vijaya Puram before taking a ferry to Swaraj Dweep. Check into your beachside accommodation and enjoy a relaxing evening near the island coastline.",
                    },
                    {
                        day: 3,
                        title: "Radhanagar Beach & Sunset Experience",
                        description:
                            "Visit the famous Radhanagar Beach and spend the day enjoying its beautiful white sand and turquoise waters. Relax by the beach and witness a spectacular tropical sunset.",
                    },
                    {
                        day: 4,
                        title: "Elephant Beach Water Adventures",
                        description:
                            "Travel to Elephant Beach for an exciting day of snorkeling, sea walking and other water activities. Explore the colorful marine life and coral reefs before returning to your resort.",
                    },
                    {
                        day: 5,
                        title: "Shaheed Dweep Island Exploration",
                        description:
                            "Take a ferry to Shaheed Dweep and explore its peaceful beaches, natural rock formations and tropical landscapes. Visit popular coastal spots before returning to Sri Vijaya Puram.",
                    },
                    {
                        day: 6,
                        title: "Final Island Experience & Departure",
                        description:
                            "Enjoy a relaxed morning by the beach and complete some last-minute shopping. Return to Sri Vijaya Puram and depart from Veer Savarkar International Airport for your onward journey.",
                    },
                ],
            },
        ],
    }
];


