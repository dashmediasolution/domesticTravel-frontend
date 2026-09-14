"use client";

import Link from "next/link";
import { Menu, Search, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

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

    const navItems = [
        {
            label: "Flights",
            href: "#",
            icon: <TbPlaneInflight className="h-5 w-5 shrink-0" />,
        },
        {
            label: "Hotels",
            href: "#",
            icon: <FaRegBuilding className="h-5 w-5 shrink-0" />,
        },
        {
            label: "Bus",
            href: "#",
            icon: <IoBusOutline className="h-5 w-5 shrink-0" />,
        },
        {
            label: "Holidays",
            href: "#",
            icon: <FaUmbrellaBeach className="h-5 w-5 shrink-0" />,
        },
        {
            label: "Destinations",
            href: "#",
            icon: <FiMapPin className="h-5 w-5 shrink-0" />,
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
                ${scrolled || mobileMenuOpen
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

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-5 lg:gap-8 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="
                                flex
                                items-center
                                gap-2
                                whitespace-nowrap
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

                {/* Desktop Actions */}
                <div className="hidden items-center gap-5 md:flex">


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

                {/* Mobile Menu Button */}


                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label={
                        mobileMenuOpen
                            ? "Close menu"
                            : "Open menu"
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
                            ${scrolled || mobileMenuOpen
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

            {/* Mobile Navigation */}
            <div
                className={`
                    overflow-hidden
                    border-t
                    border-black/10
                    bg-white
                    transition-all
                    duration-300
                    md:hidden
                    ${mobileMenuOpen
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                `}
            >
                <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
                    <div className="flex flex-col">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
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

                        <div className="my-2 h-px w-full bg-black/10" />

                        <Link
                            href="/login"
                            onClick={() =>
                                setMobileMenuOpen(false)
                            }
                            className="
                                flex
                                min-h-12
                                items-center
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
                            Login / Sign up
                        </Link>

                        <div className="mt-2 flex gap-2">
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
                                <Phone className="mr-2 h-4 w-4" />
                                Contact
                            </Button>

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
    );
}