 "use client";

import Link from "next/link";
import { Menu, Search, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { TbPlaneInflight } from "react-icons/tb";
import { IoBusOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { FaRegBuilding, FaUmbrellaBeach } from "react-icons/fa";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const categories = [
        {
            name: "Beaches",
            href: "/category/beaches",
            icon: "🏖️",
            description: "Relax by the sea",
        },
        {
            name: "Mountains",
            href: "/category/mountains",
            icon: "⛰️",
            description: "Explore the mountains",
        },
        {
            name: "Desert",
            href: "/category/desert",
            icon: "🏜️",
            description: "Discover desert adventures",
        },
        {
            name: "Lakes",
            href: "/category/lakes",
            icon: "🏞️",
            description: "Peaceful lakeside escapes",
        },
        {
            name: "Adventure",
            href: "/category/adventure",
            icon: "🧗",
            description: "Thrilling experiences",
        },
        {
            name: "Camping",
            href: "/category/camping",
            icon: "🏕️",
            description: "Stay close to nature",
        },
        {
            name: "Spiritual",
            href: "/category/spiritual",
            icon: "🛕",
            description: "Spiritual journeys",
        },
        {
            name: "Nature",
            href: "/category/nature",
            icon: "🌿",
            description: "Reconnect with nature",
        },
    ];

    const destinations = [
        {
            name: "Himachal Pradesh",
            href: "/destinations/himachal-pradesh",
            icon: "🏔️",
            description: "Mountains & hill stations",
        },
        {
            name: "Ladakh",
            href: "/destinations/ladakh",
            icon: "🏜️",
            description: "High mountains & adventure",
        },
        {
            name: "Kerala",
            href: "/destinations/kerala",
            icon: "🌴",
            description: "Backwaters & beaches",
        },
        {
            name: "Rajasthan",
            href: "/destinations/rajasthan",
            icon: "🏰",
            description: "Forts & royal heritage",
        },
        {
            name: "Uttarakhand",
            href: "/destinations/uttarakhand",
            icon: "🏔️",
            description: "Himalayas & spirituality",
        },
        {
            name: "Tamil Nadu",
            href: "/destinations/tamil-nadu",
            icon: "🛕",
            description: "Temples & culture",
        },
        {
            name: "Kashmir",
            href: "/package/kashmir",
            icon: "🏞️",
            description: "Valleys & scenic beauty",
        },
        {
            name: "Goa",
            href: "/package/goa",
            icon: "🏖️",
            description: "Beaches & nightlife",
        },
      
    ];
    
    

    const navItems = [
        {
            label: "Flights",
            href: "/flights",
            icon: <TbPlaneInflight className="h-5 w-5 shrink-0" />,
        },
        {
            label: "Hotels",
            href: "/hotels",
            icon: <FaRegBuilding className="h-5 w-5 shrink-0" />,
        },
        {
            label: "Bus",
            href: "/bus",
            icon: <IoBusOutline className="h-5 w-5 shrink-0" />,
        },
    ];

    return (
        <>
            <nav
                className={`
                    fixed
                    left-0
                    right-0
                    top-0
                    z-50
                    w-full
                    transition-all
                    duration-300
                    ${
                        scrolled || mobileMenuOpen
                            ? "bg-white text-black shadow-sm"
                            : "bg-transparent text-white"
                    }
                `}
            >
                <div
                    className="
                        mx-auto
                        flex
                        h-16
                        w-full
                        max-w-7xl
                        items-center
                        justify-between
                        px-4
                        sm:px-6
                        lg:px-8
                    "
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        className="
                            shrink-0
                            text-base
                            font-semibold
                            tracking-tight
                            sm:text-lg
                        "
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Domestic - Travel
                    </Link>

                    {/* ================= DESKTOP NAV ================= */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList className="gap-1">

                            {/* Flights */}
                            <NavigationMenuItem>
                                     <Link
                                        href="/flights"
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-md
                                            px-3
                                             text-[15px]
                                            font-medium
                                            transition-colors
                                            hover:bg-white/10
                                            hover:text-primary
                                        "
                                    >
                                        <TbPlaneInflight className="h-5 w-5" />
                                        Flights
                                    </Link>
                             </NavigationMenuItem>

                            {/* Hotels */}
                            <NavigationMenuItem>
                                     <Link
                                        href="/hotels"
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-md
                                            px-3
                                             text-[15px]
                                            font-medium
                                            transition-colors
                                            hover:bg-white/10
                                            hover:text-primary
                                        "
                                    >
                                        <FaRegBuilding className="h-5 w-5" />
                                        Hotels
                                    </Link>
                             </NavigationMenuItem>

                            {/* Bus */}
                            <NavigationMenuItem>
                                     <Link
                                        href="/bus"
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-md
                                            px-3
                                             text-[15px]
                                            font-medium
                                            transition-colors
                                            hover:bg-white/10
                                            hover:text-primary
                                        "
                                    >
                                        <IoBusOutline className="h-5 w-5" />
                                        Bus
                                    </Link>
                             </NavigationMenuItem>

                            {/* ================= CATEGORIES ================= */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    className="
                                        bg-transparent
                                        text-[15px]
                                        font-medium
                                        hover:bg-white/10
                                        hover:text-primary
                                        data-[state=open]:bg-white/10
                                        data-[state=open]:text-primary
                                    "
                                >
                                    <FaUmbrellaBeach className="mr-2 h-5 w-5" />
                                    Categories
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                <div className="w-[420px] p-3">
                                <div className="mb-4">
                                            <h3 className="text-sm font-semibold">
                                                Explore by Category
                                            </h3>

                                            <p className="mt-1 text-xs text-muted-foreground">
                                                Find your perfect trip based on your
                                                travel style.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2">
                                            {categories.map((category) => (
                                               
                                                    <Link
                                                        href={category.href}
                                                        className="
                                                            flex
                                                            items-center
                                                            gap-3
                                                            rounded-xl
                                                            p-3
                                                            no-underline
                                                            outline-none
                                                            transition-colors
                                                            hover:bg-muted
                                                        "
                                                    >
                                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-xl">
                                                            {category.icon}
                                                        </span>

                                                        <div>
                                                            <p className="text-sm font-medium">
                                                                {category.name}
                                                            </p>

                                                            <p className="text-xs text-muted-foreground">
                                                                {category.description}
                                                            </p>
                                                        </div>
                                                    </Link>
                                             ))}
                                        </div>

                                       
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* ================= DESTINATIONS ================= */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    className="
                                        bg-transparent
                                        text-[15px]
                                        font-medium
                                        hover:bg-white/10
                                        hover:text-primary
                                        data-[state=open]:bg-white/10
                                        data-[state=open]:text-primary
                                    "
                                >
                                    <FiMapPin className="mr-2 h-5 w-5" />
                                    Destinations
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
    <div className="w-[420px] p-3">
        <div className="mb-3">
            <h3 className="text-sm font-semibold">
                Explore by Category
            </h3>

            <p className="mt-1 text-xs text-muted-foreground">
                Find your perfect trip based on your travel style.
            </p>
        </div>

        <div className="grid grid-cols-2 gap-1.5">
            {destinations.map((category) => (
                
                    <Link
                        href={category.href}
                        className="
                            flex
                            items-center
                            gap-2.5
                            rounded-lg
                            p-2.5
                            no-underline
                            outline-none
                            transition-colors
                            hover:bg-muted
                        "
                    >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-lg">
                            {category.icon}
                        </span>

                        <div>
                            <p className="text-sm font-medium">
                                {category.name}
                            </p>

                            <p className="text-[11px] text-muted-foreground">
                                {category.description}
                            </p>
                        </div>
                    </Link>
             ))}
        </div>

     
    </div>
</NavigationMenuContent>

                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* ================= DESKTOP ACTIONS ================= */}
                    <div className="hidden items-center gap-5 md:flex">
                        <a
                            href="tel:+919876543210"
                            className={`
                                flex
                                h-10
                                items-center
                                gap-2
                                rounded-full
                                border
                                bg-transparent
                                px-3
                                shadow-none
                                transition-all
                                duration-200
                                hover:border-primary
                                hover:bg-primary
                                hover:text-white
                                ${
                                    scrolled
                                        ? "border-black/20 text-black"
                                        : "border-white text-white"
                                }
                            `}
                        >
                            <Phone className="h-5 w-5 shrink-0" />

                            <span className="hidden text-sm font-medium md:block">
                                +91 98765 43210
                            </span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        aria-label={
                            mobileMenuOpen ? "Close menu" : "Open menu"
                        }
                        onClick={() =>
                            setMobileMenuOpen(!mobileMenuOpen)
                        }
                        className={`
                            h-9
                            w-9
                            md:hidden
                            cursor-pointer
                            rounded-full
                            border
                            bg-transparent
                            shadow-none
                            transition-all
                            duration-200
                            hover:border-primary
                            hover:bg-primary
                            hover:text-white
                            ${
                                scrolled || mobileMenuOpen
                                    ? "border-black/20 text-black"
                                    : "border-white text-white"
                            }
                        `}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>

                {/* ================= MOBILE NAV ================= */}
                <div
                    className={`
                        overflow-hidden
                        border-t
                        border-black/10
                        bg-white
                        transition-all
                        duration-300
                        md:hidden
                        ${
                            mobileMenuOpen
                                ? "max-h-[700px] opacity-100"
                                : "max-h-0 opacity-0"
                        }
                    `}
                >
                    <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
                        <div className="flex flex-col">

                            {/* Main Links */}
                            {navItems.map((item,indx) => (
                                <Link
                                    key={indx}
                                    href={item.href}
                                    onClick={() =>
                                        setMobileMenuOpen(false)
                                    }
                                    className="
                                        flex
                                        min-h-12
                                        items-center
                                        gap-3
                                        rounded-xl
                                        px-3
                                        text-[15px]
                                        font-medium
                                        text-black
                                        transition-colors
                                        hover:bg-black/5
                                        hover:text-primary
                                    "
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Link>
                            ))}

                            {/* Categories */}
                            <div className="mt-2 rounded-xl bg-gray-50 p-3">
                                <div className="mb-2 flex items-center gap-2 px-2">
                                    <FaUmbrellaBeach className="h-5 w-5" />
                                    <span className="font-medium">
                                        Categories
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-1">
                                    {categories.map((category,index) => (
                                        <Link
                                            key={index}
                                            href={category.href}
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                            className="
                                                rounded-lg
                                                px-2
                                                py-2
                                                text-sm
                                                text-gray-700
                                                hover:bg-white
                                                hover:text-primary
                                            "
                                        >
                                            {category.icon} {category.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Destinations */}
                            <div className="mt-2 rounded-xl bg-gray-50 p-3">
                                <div className="mb-2 flex items-center gap-2 px-2">
                                    <FiMapPin className="h-5 w-5" />
                                    <span className="font-medium">
                                        Destinations
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-1">
                                    {destinations.map((destination,index) => (
                                        <Link
                                            key={index}
                                            href={destination.href}
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                            className="
                                                rounded-lg
                                                px-2
                                                py-2
                                                text-sm
                                                text-gray-700
                                                hover:bg-white
                                                hover:text-primary
                                            "
                                        >
                                            {destination.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="my-3 h-px w-full bg-black/10" />

                            {/* Mobile Actions */}
                            <div className="mt-2 flex gap-2">
                                <a
                                    href="tel:+919876543210"
                                    className="
                                        flex
                                        h-11
                                        flex-1
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-black/20
                                        text-sm
                                        font-medium
                                        text-black
                                        hover:border-primary
                                        hover:bg-primary
                                        hover:text-white
                                    "
                                >
                                    <Phone className="mr-2 h-4 w-4" />
                                    Contact
                                </a>

                                <Button
                                    type="button"
                                    variant="ghost"
                                    className="
                                        h-11
                                        flex-1
                                        cursor-pointer
                                        rounded-full
                                        border
                                        border-black/20
                                        bg-transparent
                                        text-black
                                        shadow-none
                                        hover:border-primary
                                        hover:bg-primary
                                        hover:text-white
                                    "
                                >
                                    <Search className="mr-2 h-4 w-4" />
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
 