"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Oswald } from "next/font/google";

// ============================================================
// FONT
// ============================================================

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

// ============================================================
// DATA
// ============================================================

const destinations = [
    {
        id: 1,
        name: "ISLANDS",
        image: "/images/hero/heroImage-1.png",
        background: "/images/hero/heroImage-1.png",
        description:
            "From serene backwaters to towering Himalayas, explore the beauty, culture and diversity of India like never before.",
    },
    {
        id: 2,
        name: "KERALA",
        image: "/images/hero/heroImage-2.png",
        background: "/images/hero/heroImage-2.png",
        description:
            "Discover lush backwaters, tropical beaches and unforgettable experiences across God's Own Country.",
    },
    {
        id: 3,
        name: "MALDIVES",
        image: "/images/hero/heroImage-3.png",
        background: "/images/hero/heroImage-3.png",
        description:
            "Escape to crystal-clear waters, beautiful islands and peaceful tropical experiences.",
    },
    {
        id: 4,
        name: "BEACHES",
        image: "/images/hero/heroImage-4.png",
        background: "/images/hero/heroImage-4.png",
        description:
            "Relax beside beautiful beaches and discover unforgettable coastal destinations.",
    },
    {
        id: 5,
        name: "RAJASTHAN",
        image: "/images/hero/heroImage-1.png",
        background: "/images/hero/heroImage-1.png",
        description:
            "Experience royal palaces, colorful culture and the timeless beauty of Rajasthan.",
    },
];

// ============================================================
// HERO COMPONENT
// ============================================================

export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeDestination = destinations[activeIndex];

    // ========================================================
    // NEXT SLIDE
    // ========================================================

    const nextSlide = () => {
        setActiveIndex(
            (current) =>
                (current + 1) % destinations.length
        );
    };

    // ========================================================
    // PREVIOUS SLIDE
    // ========================================================

    const previousSlide = () => {
        setActiveIndex(
            (current) =>
                (current - 1 + destinations.length) %
                destinations.length
        );
    };

    // ========================================================
    // AUTO PLAY
    // ========================================================

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(
                (current) =>
                    (current + 1) % destinations.length
            );
        }, 6500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="
                relative
                min-h-[720px]
                w-full
                overflow-hidden
                bg-black

                sm:min-h-[760px]

                lg:h-[calc(100vh-72px)]
                lg:min-h-[650px]
                lg:max-h-[900px]
            "
        >
            {/* ======================================================
                BACKGROUND
                ------------------------------------------------------
                All backgrounds remain mounted.
                Only opacity changes.
                This prevents the black flash.
            ====================================================== */}

            <div className="absolute inset-0 bg-black">
                {destinations.map((destination, index) => (
                    <motion.div
                        key={destination.background}
                        initial={false}
                        animate={{
                            opacity:
                                activeIndex === index
                                    ? 1
                                    : 0,

                            scale:
                                activeIndex === index
                                    ? 1
                                    : 1.04,
                        }}
                        transition={{
                            opacity: {
                                duration: 0.8,
                                ease: "easeInOut",
                            },

                            scale: {
                                duration: 1.3,
                                ease: "easeOut",
                            },
                        }}
                        className="
                            absolute
                            inset-0
                        "
                    >
                        <Image
                            src={destination.background}
                            alt=""
                            fill
                            priority={index === 0}
                            sizes="100vw"
                            className="object-cover"
                        />

                        {/* Main overlay */}

                        <div
                            className="
                                absolute
                                inset-0
                                bg-black/1
                            "
                        />

                        {/* Bottom gradient */}

                        <div
                            className="
                                absolute
                                inset-x-0
                                bottom-0
                                h-[55%]
                                bg-linear-to-t
                                from-black/45
                                via-black/10
                                to-transparent
                            "
                        />
                    </motion.div>
                ))}
            </div>

            {/* ======================================================
                MAIN CONTAINER
            ====================================================== */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[720px]
                    w-full
                    max-w-[1440px]
                    flex-col
                    px-5
                    pb-7
                    pt-24

                    sm:px-8
                    sm:pt-28

                    lg:h-full
                    lg:min-h-0
                    lg:px-12
                    lg:pb-10
                    lg:pt-0
                "
            >
                {/* ==================================================
                    LEFT CONTENT
                ================================================== */}

                <div
                    className="
                        flex
                        flex-1
                        items-center
                        lg:items-center
                    "
                >
                    <motion.div
                        key={activeDestination.id}
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            w-full
                            max-w-[650px]
                        "
                    >
                        {/* ==========================================
                            EYEBROW
                        ========================================== */}

                        <p
                            className="
                                mb-5
                                text-[13px]
                                font-normal
                                tracking-[-0.2px]
                                text-white

                                sm:text-[15px]
                            "
                        >
                            EXPLORE. EXPERIENCE.
                            <span className="text-[#2FC2B0]">
                                {" "}
                                REMEMBER
                            </span>
                        </p>

                        {/* ==========================================
                            HEADING
                        ========================================== */}

                        <h1
                            className={`
                                ${oswald.className}

                                max-w-[650px]

                                text-[54px]
                                font-semibold
                                uppercase
                                leading-[0.95]
                                tracking-[0.5px]
                                text-white

                                sm:text-[70px]

                                md:text-[80px]

                                lg:text-[86px]

                                xl:text-[92px]
                            `}
                        >
                            Discover
                            <br />
                            Incredible India!
                        </h1>

                        {/* ==========================================
                            DESCRIPTION
                        ========================================== */}

                        <p
                            className="
                                mt-6
                                max-w-[470px]
                                text-[15px]
                                font-normal
                                leading-[1.45]
                                text-white

                                sm:text-[17px]

                                lg:text-[18px]
                            "
                        >
                            {activeDestination.description}
                        </p>

                        {/* ==========================================
                            BUTTONS
                        ========================================== */}

                        <div
                            className="
                                mt-6
                                flex
                                flex-wrap
                                items-center
                                gap-3
                            "
                        >
                            {/* Explore Destination */}

                            <Button
                                 
                                className="
                                    h-10
                                    rounded-full
                                    bg-[#2FC2B0]
                                    px-4
                                    text-[14px]
                                    font-medium
                                    text-white
                                    shadow-none

                                    hover:bg-[#25AD9D]

                                    sm:h-11
                                    sm:px-5
                                    sm:text-[15px]
                                "
                            >
                                     Explore Destination

                                    <ArrowRight
                                        className="
                                            ml-2
                                            h-4
                                            w-4
                                        "
                                    />
                             </Button>

                            {/* View Packages */}

                            <Button
                                    
                                variant="outline"
                                className="
                                    h-10
                                    rounded-full
                                    border-white
                                    bg-transparent
                                    px-4
                                    text-[14px]
                                    font-normal
                                    text-white
                                    shadow-none
                                    backdrop-blur-sm

                                    hover:bg-white
                                    hover:text-black

                                    sm:h-11
                                    sm:px-5
                                    sm:text-[15px]
                                "
                            >
                                <Link href="/packages">
                                    View Packages
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* ==================================================
                    RIGHT SIDE
                    DESTINATION CARDS
                ================================================== */}

                <div
                    className="
                        relative
                        mt-10
                        h-[300px]
                        w-full

                        lg:absolute
                        lg:right-[-30px]
                        lg:top-1/2
                        lg:mt-0
                        lg:h-[430px]
                        lg:w-[57%]
                        lg:-translate-y-1/2

                        xl:right-[-50px]
                        xl:w-[58%]
                    "
                >
                    {/* ==============================================
                        DOT PATTERN
                    ============================================== */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -left-3
                            -top-6
                            z-0
                            hidden
                            h-[145px]
                            w-[200px]
                            opacity-90

                            sm:block

                            lg:-left-7
                            lg:-top-8
                        "
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, white 3px, transparent 3px)",
                            backgroundSize: "12px 12px",
                        }}
                    />

                    {/* ==============================================
                        DESTINATION CARDS
                    ============================================== */}

                    <div className="absolute inset-0 overflow-visible">
                        {destinations.map(
                            (destination, index) => {
                                const relativeIndex =
                                    (index -
                                        activeIndex +
                                        destinations.length) %
                                    destinations.length;

                                /*
                                 * 0 = ACTIVE
                                 * 1 = SMALL
                                 * 2 = SMALL
                                 * 3 = SMALL
                                 */

                                if (relativeIndex > 3) {
                                    return null;
                                }

                                // ===================================
                                // CARD POSITIONS
                                // ===================================

                                const cardPositions = [
                                    // ACTIVE
                                    {
                                        left: "0%",
                                        top: "20px",
                                        width: "235px",
                                        height: "350px",
                                        zIndex: 40,
                                    },

                                    // SMALL 1
                                    {
                                        left: "250px",
                                        top: "60px",
                                        width: "155px",
                                        height: "285px",
                                        zIndex: 30,
                                    },

                                    // SMALL 2
                                    {
                                        left: "420px",
                                        top: "60px",
                                        width: "155px",
                                        height: "285px",
                                        zIndex: 20,
                                    },

                                    // SMALL 3
                                    {
                                        left: "590px",
                                        top: "60px",
                                        width: "155px",
                                        height: "285px",
                                        zIndex: 10,
                                    },
                                ];

                                const position =
                                    cardPositions[
                                        relativeIndex
                                    ];

                                const isActive =
                                    relativeIndex === 0;

                                return (
                                    <motion.div
                                        key={
                                            destination.id
                                        }
                                        initial={false}
                                        animate={{
                                            left: position.left,
                                            top: position.top,
                                            width: position.width,
                                            height: position.height,
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: 0.7,
                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1,
                                            ],
                                        }}
                                        className="
                                            absolute
                                            overflow-hidden
                                            rounded-[22px]
                                            border
                                            border-white/15
                                            shadow-[0_10px_35px_rgba(0,0,0,0.22)]
                                        "
                                        style={{
                                            zIndex:
                                                position.zIndex,
                                        }}
                                    >
                                        {/* IMAGE */}

                                        <Image
                                            src={
                                                destination.image
                                            }
                                            alt={
                                                destination.name
                                            }
                                            fill
                                            sizes="235px"
                                            className="
                                                object-cover
                                                transition-transform
                                                duration-700
                                                hover:scale-105
                                            "
                                        />

                                        {/* CARD GRADIENT */}

                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                bg-gradient-to-t
                                                from-black/75
                                                via-black/10
                                                to-transparent
                                            "
                                        />

                                        {/* DESTINATION NAME */}

                                        <div
                                            className="
                                                absolute
                                                bottom-5
                                                left-4
                                                right-3
                                            "
                                        >
                                            <h2
                                                className={`
                                                    ${oswald.className}

                                                    font-semibold
                                                    uppercase
                                                    leading-none
                                                    tracking-[0.5px]
                                                    text-white

                                                    ${
                                                        isActive
                                                            ? "text-[32px]"
                                                            : "text-[22px]"
                                                    }
                                                `}
                                            >
                                                {
                                                    destination.name
                                                }
                                            </h2>
                                        </div>
                                    </motion.div>
                                );
                            }
                        )}
                    </div>
                </div>

                {/* ==================================================
                    BOTTOM CONTROLS
                ================================================== */}

                <div
                    className="
                        relative
                        z-50
                        mt-6
                        flex
                        items-center
                        justify-end
                        gap-3

                        lg:mt-0
                        lg:ml-[50%]
                        lg:justify-start
                    "
                >
                    {/* ==============================================
                        PREVIOUS
                    ============================================== */}

                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={previousSlide}
                        aria-label="Previous destination"
                        className="
                            h-9
                            w-9
                            rounded-full
                            border-white
                            bg-transparent
                            text-white
                            shadow-none
                            backdrop-blur-sm

                            hover:bg-white
                            hover:text-black

                            sm:h-10
                            sm:w-10
                        "
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>

                    {/* ==============================================
                        NEXT
                    ============================================== */}

                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={nextSlide}
                        aria-label="Next destination"
                        className="
                            h-9
                            w-9
                            rounded-full
                            border-white
                            bg-transparent
                            text-white
                            shadow-none
                            backdrop-blur-sm

                            hover:bg-white
                            hover:text-black

                            sm:h-10
                            sm:w-10
                        "
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>

                    {/* ==============================================
                        PROGRESS BAR
                    ============================================== */}

                    <div
                        className="
                            hidden
                            h-[2px]
                            w-[250px]
                            overflow-hidden
                            bg-white/50

                            sm:block

                            md:w-[320px]

                            lg:w-[400px]

                            xl:w-[500px]
                        "
                    >
                        <motion.div
                            key={activeIndex}
                            initial={{
                                width: 0,
                            }}
                            animate={{
                                width: "100%",
                            }}
                            transition={{
                                duration: 6.5,
                                ease: "linear",
                            }}
                            className="
                                h-full
                                bg-white
                            "
                        />
                    </div>

                    {/* ==============================================
                        SLIDE NUMBER
                    ============================================== */}

                    <motion.span
                        key={`number-${activeIndex}`}
                        initial={{
                            opacity: 0,
                            y: 8,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        className={`
                            ${oswald.className}

                            ml-1
                            text-[28px]
                            font-medium
                            leading-none
                            text-white

                            sm:text-[34px]
                        `}
                    >
                        {String(
                            activeIndex + 1
                        ).padStart(2, "0")}
                    </motion.span>
                </div>
            </div>
        </section>
    );
}