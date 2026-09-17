import {
    PersonStanding,
    TentTree,
    Brain,
    Flame,
    ArrowDown,
    Compass,
    CableCar,
    ShipWheel,
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
    Footprints,
    BatteryCharging,
    Pill,
    Mountain,
    Landmark,
    Heart,
    Palmtree,
    Ship,
    Sailboat, Fish,
    Camera,
    Church,
    Building2,
    Waves as Water,
} from "lucide-react";
export const packageData = [

    {
        name: "Tamil Nadu",

        packages: [
            {
                name: "Ooty",
                category:"Nature",
                subtitle: "The Queen of Hill Stations",

                heroImage: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1800&q=90",
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
                            "https://images.unsplash.com/photo-1690440646057-6ce1cbca5024?auto=format&fit=crop&w=2400&q=90",
                        alt: "Ooty Botanical Garden",
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
        name: "Goa",

        packages: [
            {
                name: "Goa",
                category:"Beaches",
                subtitle: "The Beach Capital of Goa",

                heroImage:
                    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1800&q=90",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2400&q=90",
                        alt: "Beautiful beach in Goa",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=90",
                        alt: "Goa beach and palm trees",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=2400&q=90",
                        alt: "Goa coastline and tropical beach",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=2400&q=90",
                        alt: "Historic church in Goa",
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1605537964076-3cb0ea2ff8a9?auto=format&fit=crop&w=2400&q=90",
                        alt: "Goa sunset and beach landscape",
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
                                "Pleasant temperatures, sunny skies and comfortable weather make this the ideal season for beaches, sightseeing, water sports and exploring Goa's nightlife.",
                            icon: "winter" as const,
                        },
                        {
                            name: "Summer",
                            months: "Mar - May",
                            description:
                                "Warm and humid weather with plenty of sunshine. Early mornings and evenings are more comfortable for exploring beaches and coastal attractions.",
                            icon: "summer" as const,
                        },
                        {
                            name: "Monsoon",
                            months: "Jun - Oct",
                            description:
                                "Monsoon showers transform Goa into a lush green destination. The countryside and waterfalls become especially scenic, although heavy rainfall can affect outdoor activities.",
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
                ],
            },
        ],
    },
    {
        name: "Darjeeling",

        packages: [
            {
                name: "Darjeeling",
                category:"Mountains",

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
                category:"Mountains",

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
                category:"Mountains",

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
                category:"Mountains",

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
                category:"Camping",

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
                category:"Adventure",

                heroImage:
                    "https://images.unsplash.com/photo-1706963336286-029a26cd7810?auto=format&fit=crop&w=3840&q=90",

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
                category:"Mountains",

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
                category:"Lakes",

                heroImage:
                    "https://images.unsplash.com/photo-1706468630738-b0ded0c5fc25?auto=format&fit=crop&w=3840&q=90",

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
                category:"Spiritual",

                heroImage:
                    "https://images.unsplash.com/photo-1698574996391-73f103113f60?auto=format&fit=crop&w=3840&q=90",

                gallery: [
                    {
                        src:
                            "https://images.unsplash.com/photo-1698574996391-73f103113f60?auto=format&fit=crop&w=3840&q=90",
                        alt: "Kedarnath Temple surrounded by snow covered mountains"
                    },
                    {
                        src:
                            "https://images.unsplash.com/photo-1657902035554-5f4c2c8b2e2e?auto=format&fit=crop&w=3840&q=90",
                        alt: "Mountain landscape on the Kedarnath route"
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
            }
        ],
    }
];


