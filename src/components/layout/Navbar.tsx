"use client";

import Link from "next/link";
import { Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import { TbPlaneInflight } from "react-icons/tb";
import { IoBusOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { FaRegBuilding, FaUmbrellaBeach } from "react-icons/fa";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        {
            label: "Flights",
            href: "#",
            icon: <TbPlaneInflight className="h-5 w-5" />,
        },
        {
            label: "Hotels",
            href: "#",
            icon: <FaRegBuilding className="h-5 w-5" />,
        },
        {
            label: "Bus",
            href: "#",
            icon: <IoBusOutline className="h-5 w-5" />,
        },
        {
            label: "Holidays",
            href: "#",
            icon: <FaUmbrellaBeach className="h-5 w-5" />,
        },
        {
            label: "Destinations",
            href: "#",
            icon: <FiMapPin className="h-5 w-5" />,
        },
    ];

    return (
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
                ${scrolled
                    ? "bg-white text-black shadow-sm"
                    : "bg-transparent text-white"
                }
            `}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-lg font-semibold tracking-tight"
                >
                    Domestic - Travel
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="
                                flex
                                items-center
                                gap-2
                                text-[15px]
                                font-medium
                                transition-colors
                                duration-200
                                hover:text-primary
                            "
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden items-center gap-2 md:flex">

                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        aria-label="Search"
                        className={`
                            h-10
                            w-10
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
                            ${scrolled
                                ? "border-black/20 text-black"
                                : "border-white text-white"
                            }
                        `}
                    >
                        <Search className="h-5 w-5" />
                    </Button>

                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        aria-label="Contact"
                        className={`
                            h-10
                            w-10
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
                            ${scrolled
                                ? "border-black/20 text-black"
                                : "border-white text-white"
                            }
                        `}
                    >
                        <Phone className="h-5 w-5" />
                    </Button>

                    <Button
                        type="button"
                        variant="ghost"
                        className={`
                            h-10
                            cursor-pointer
                            rounded-full
                            border
                            bg-transparent
                            px-5
                            text-[15px]
                            font-medium
                            shadow-none
                            transition-all
                            duration-200
                            hover:border-primary
                            hover:bg-primary
                            hover:text-white
                            ${scrolled
                                ? "border-black/20 text-black"
                                : "border-white text-white"
                            }
                        `}
                    >
                        <Link href="/login">
                            Login / Sign up
                        </Link>
                    </Button>

                </div>
            </div>
        </nav>
    );
}