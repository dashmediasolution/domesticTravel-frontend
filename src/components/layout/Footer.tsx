"use client";

import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { FiArrowRight, FiMail } from "react-icons/fi";
import {
    FaInstagram,
    FaDribbble,
    FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const companyLinks = [
    {
        label: "About Us",
        href: "/about-us",
    },
 
 
    {
        label: "Contact Us",
        href: "/contact-us",
    },
];

const supportLinks = [
    {
        label: "Help Centre",
        href: "/help",
    },
    {
        label: "FAQs",
        href: "/faqs",
    },
    {
        label: "Privacy Policy",
        href: "/privacy-policy",
    },
    {
        label: "Terms & Conditions",
        href: "/terms",
    },
];

const destinationLinks = [
    {
        label: "Himachal Paradesh",
        href: "/destinations/himachal-pradesh",
    },
    {
        label: "Goa",
        href: "/package/goa",
    },
    {
        label: "Kerala",
        href: "/destinations/kerala",
    },
    {
        label: "Rajasthan",
        href: "/destinations/rajasthan",
    },
    {
        label: "Kashmir",
        href: "/package/kashmir",
    },
];

const socialLinks = [
    {
        label: "Instagram",
        href: "#",
        icon: FaInstagram,
    },
    {
        label: "Dribbble",
        href: "#",
        icon: FaDribbble,
    },
    {
        label: "X",
        href: "#",
        icon: FaXTwitter,
    },
    {
        label: "Email",
        href: "mailto:hello@wanderindia.com",
        icon: FiMail,
    },
    {
        label: "YouTube",
        href: "#",
        icon: FaYoutube,
    },
];

export default function Footer() {
    return (
        <footer className="w-full bg-[#00383B] text-white mt-10">
            <div className="w-full px-6 py-10 sm:px-8 lg:px-12 lg:py-10">

                {/* =========================
                    MAIN FOOTER
                ========================== */}
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-8
                        sm:grid-cols-2
                        lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr_1.4fr]
                        lg:gap-8
                    "
                >

                    {/* =========================
                        BRAND
                    ========================== */}
                    <div>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3"
                        >
                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    border-2
                                    border-white
                                "
                            >
                                <span className="text-base">
                                    ⛰
                                </span>
                            </div>

                            <span
                                className="
                                    text-[22px]
                                    font-bold
                                    tracking-[2.5px]
                                "
                            >
                                WANDER-INDIA
                            </span>
                        </Link>

                        <p
                            className="
                                mt-4
                                max-w-[290px]
                                text-[15px]
                                leading-[21px]
                                text-white/90
                            "
                        >
                            Your gateway in the most
                            <br />
                            beautiful destinations in India
                            <br />
                            Explore. Experience. Enjoy.
                        </p>

                        {/* Social Links */}
                        <div className="mt-5 flex items-center gap-5">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="
                                            transition-all
                                            duration-200
                                            hover:scale-110
                                            hover:text-[#2FC2B0]
                                        "
                                    >
                                        <Icon className="h-[18px] w-[18px]" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>


                    {/* =========================
                        COMPANY
                    ========================== */}
                    <div>
                        <h3 className="text-[18px] font-semibold">
                            Company
                        </h3>

                        <nav className="mt-5 flex flex-col gap-3">
                            {companyLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="
                                        text-[15px]
                                        text-white/85
                                        transition-colors
                                        hover:text-[#2FC2B0]
                                    "
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>


                    {/* =========================
                        SUPPORT
                    ========================== */}
                    <div>
                        <h3 className="text-[18px] font-semibold">
                            Support
                        </h3>

                        <nav className="mt-5 flex flex-col gap-3">
                            {supportLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="
                                        text-[15px]
                                        text-white/85
                                        transition-colors
                                        hover:text-[#2FC2B0]
                                    "
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>


                    {/* =========================
                        TOP DESTINATIONS
                    ========================== */}
                    <div>
                        <h3 className="text-[18px] font-semibold">
                            Top Destinations
                        </h3>

                        <nav className="mt-5 flex flex-col gap-3">
                            {destinationLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="
                                        text-[15px]
                                        text-white/85
                                        transition-colors
                                        hover:text-[#2FC2B0]
                                    "
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>


                    {/* =========================
                        NEWSLETTER
                    ========================== */}
                    <div>
                        <h3 className="text-[18px] font-semibold">
                            Newsletter
                        </h3>

                        <p
                            className="
                                mt-4
                                max-w-[300px]
                                text-[15px]
                                leading-[21px]
                                text-white/90
                            "
                        >
                            Subscribe to get exclusive travel
                            <br />
                            deals and updates.
                        </p>

                        <form
                            className="
                                mt-5
                                flex
                                w-full
                                max-w-[300px]
                                items-center
                                gap-2
                            "
                            onSubmit={(event) => {
                                event.preventDefault();
                            }}
                        >
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="
                                    h-10
                                    min-w-0
                                    rounded-full
                                    border-0
                                    bg-white
                                    px-4
                                    text-[14px]
                                    text-black
                                    shadow-none
                                    placeholder:text-gray-500
                                    focus-visible:ring-2
                                    focus-visible:ring-[#2FC2B0]
                                "
                            />

                            <Button
                                type="submit"
                                size="icon"
                                className="
                                    h-10
                                    w-10
                                    shrink-0
                                    rounded-full
                                    bg-[#2FC2B0]
                                    text-white
                                    shadow-none
                                    hover:bg-[#25AD9D]
                                "
                            >
                                <FiArrowRight className="h-5 w-5" />
                            </Button>
                        </form>
                    </div>
                </div>


                {/* =========================
                    DIVIDER
                ========================== */}
                <div className="my-7 h-px w-full bg-white/30" />


                {/* =========================
                    BOTTOM FOOTER
                ========================== */}
                <div
                    className="
                        flex
                        flex-col
                        gap-5
                        md:flex-row
                        md:items-center
                        md:justify-between
                    "
                >

                    {/* Copyright */}
                    <p
                        className="
                            text-[13px]
                            leading-5
                            text-white/75
                            sm:text-[14px]
                        "
                    >
                        Copyright @ 2026 WONDER INDIA.
                        All rights reserved.
                    </p>


                    {/* Payment Methods */}
                    <div className="flex items-center gap-5">

                        <span
                            className="
                                text-[20px]
                                font-black
                                italic
                                tracking-[-1px]
                            "
                        >
                            VISA
                        </span>

                        <span
                            className="
                                text-[13px]
                                font-black
                                tracking-tight
                            "
                        >
                            UPI
                        </span>

                        <span
                            className="
                                text-[15px]
                                font-black
                                tracking-tight
                            "
                        >
                            paytm
                        </span>

                    </div>
                </div>

            </div>
        </footer>
    );
}