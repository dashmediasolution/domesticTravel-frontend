"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Oswald } from "next/font/google";
const SLIDE_DURATION = 3000;
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
        id: 2,
        name: "Meghalaya",
        image: "https://images.unsplash.com/photo-1707219004247-0657a598a23d?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        background: "https://images.unsplash.com/photo-1707219004247-0657a598a23d?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        redirect: "/package/meghalaya",
        description:
            "Explore misty hills, lush forests, dramatic waterfalls and peaceful villages in the enchanting landscapes of Northeast India.",
    },
    {
        id: 1,
        name: "Rajasthan",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=85",

        background: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=85",
        redirect: "/destinations/rajasthan",
        description:
                "Experience royal palaces, magnificent forts, golden deserts and vibrant culture in India's land of kings.",
    },
    {
        id: 3,
        name: "Uttarakhand",
        redirect: "/destinations/uttarakhand",
        image: "https://images.unsplash.com/photo-1604027179698-5fc67dfe55b8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        background: "https://images.unsplash.com/photo-1604027179698-5fc67dfe55b8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
                "Discover majestic Himalayan landscapes, peaceful hill towns, sacred temples, thrilling adventures and serene valleys in the beautiful land of Uttarakhand.",
    },
    {
        id: 4,
        name: "Goa",
        image: "https://images.unsplash.com/photo-1642516864335-2ca9d8b3a511?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        redirect: "/package/goa",
        background: "https://images.unsplash.com/photo-1642516864335-2ca9d8b3a511?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
            "Relax along golden beaches, explore vibrant coastal culture and enjoy unforgettable sunsets, nightlife and adventures.",
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
        }, SLIDE_DURATION);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="
                relative
                min-h-[40vh]
                w-full
                overflow-hidden
                bg-black


                sm:min-h-[40vh]

                lg:h-[calc(100vh-72px)]
                lg:min-h-[650px]
                lg:max-h-[900px]
            "
        >


            <div className="absolute inset-0 bg-black">
                {destinations.map((destination, index) => (
                    <motion.div
                        key={destination.id}
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
                                duration: 0.5,
                                ease: "easeInOut",
                            },
                            scale: {
                                duration: 0.7,
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
                            unoptimized
                            priority={index === 0}
                            sizes="100vw"
                            className="object-cover"
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
                    min-h-[40vh]
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
                    h-full
                    flex
                    flex-1
                    flex-col
                    items-start
                    justify-center
                     lg:w-[54%]
                    relative
                    mb:0
                    top-8
                    gap-4
                "
                >
                    {/* ==========================================
                            EYEBROW
                        ========================================== */}

                    <p
                        className="
                                 text-[13px]
                                font-normal
                                w-fit
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
                    <h1
                        className={`
                            ${oswald.className}
                            max-w-[700px]
                            text-[29px]
                            font-semibold
                            uppercase
                            leading-[1.1]
                            tracking-[0.5px]
                            text-white      
                            sm:text-[38px]
                            md:text-[50px]
                            lg:text-[60px]
                            xl:text-[70px]
                        `}
                    >
                        Discover Your <br /> Next Holiday

                    </h1>
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
                            flex
                            flex-col
                            gap-2
                        "
                    >


                        {/* ==========================================
                            HEADING
                        ========================================== */}



                        {/* ==========================================
                            DESCRIPTION
                        ========================================== */}

                        <p
                            className="
                           
                                max-w-[470px]
                                text-[15px]
                                font-normal
                                leading-[1.3]
                                md:leading-[1.45]
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

                    </motion.div>

                    {/* Explore Destination */}
                    <Link href="/explore-destinations">
                        <Button
                            className="
            h-9
            shrink-0
            rounded-full
            bg-[#2FC2B0]
            px-3
            text-[12px]
            font-medium
            text-white
            shadow-none
            hover:bg-[#25AD9D]
            sm:h-10
            sm:px-4
            sm:text-[13px]
            md:text-[17px]
        "
                        >
                            Explore Destination
                            <ArrowRight
                                className="
                ml-1
                h-3.5
                w-3.5
                sm:ml-2
                sm:h-4
                sm:w-4
            "
                            />
                        </Button>
                    </Link>

                    {/* View Packages */}
                    {/* <Button
                            variant="outline"
                            className="
            h-9
            shrink-0
            rounded-full
            border-white
            bg-transparent
            px-3
            text-[12px]
            font-normal
            text-white
            shadow-none
            backdrop-blur-sm
            hover:bg-white
            hover:text-black

            sm:h-10
            sm:px-4
            sm:text-[13px]
               md:text-[17px]
        "
                        >
                            <Link href="/packages">
                                View Packages
                            </Link>
                        </Button> */}
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
                            hidden
                            lg:flex
                            lg:absolute
                           lg:right-[-10px]
                            lg:top-1/2
                            lg:mt-0
                            lg:h-[430px]
                            lg:w-[48%]
                            lg:-translate-y-1/2

                           xl:right-[-20px]
                           xl:w-[47%]
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
                                h-[185px]
                                w-[200px]
                                opacity-90

                                sm:block

                                lg:-left-9
                                lg:-top-0
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
                        {destinations.map((destination, index) => {
                            const relativeIndex =
                                (index -
                                    activeIndex -
                                    1 +
                                    destinations.length) %
                                destinations.length;

                            // Hide cards outside the 4 visible slots
                            if (relativeIndex > 3) {
                                return null;
                            }

                            const cardPositions = [
                                // ACTIVE
                                {
                                    left: "0%",
                                    top: "35px",
                                    width: "235px",
                                    height: "320px",
                                    zIndex: 40,
                                },
                                // SMALL 1
                                {
                                    left: "249px",
                                    top: "60px",
                                    width: "187px",
                                    height: "280px",
                                    zIndex: 30,
                                },
                                // SMALL 2
                                {
                                    left: "450px",
                                    top: "60px",
                                    width: "187px",
                                    height: "280px",
                                    zIndex: 20,
                                },
                                // SMALL 3
                                {
                                    left: "650px",
                                    top: "60px",
                                    width: "187px",
                                    height: "280px",
                                    zIndex: 10,
                                },
                            ];

                            const position = cardPositions[relativeIndex];
                            const isActive = relativeIndex === 0;

                            return (
                                <motion.div
                                    key={destination.id}
                                    initial={
                                        relativeIndex === 0
                                            ? {
                                                opacity: 0,
                                                x: 80,
                                            }
                                            : false
                                    }
                                    animate={{
                                        left: position.left,
                                        top: position.top,
                                        width: position.width,
                                        height: position.height,
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: relativeIndex === 0 ? 0.7 : relativeIndex === 3 ? 0 : 0.7,
                                        ease: [0.22, 1, 0.36, 1],
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
                                        zIndex: position.zIndex,
                                    }}
                                >
                                    {/* IMAGE */}
                                    <Link href={destination.redirect}>
                                        <Image
                                            src={destination.image}
                                            alt={destination.name}
                                            fill
                                            unoptimized
                                            priority={isActive}
                                            sizes="235px"
                                            className="
                                            object-cover
                                            transition-transform
                                            duration-700
                                            hover:scale-105
                                        "
                                        />
                                    </Link>
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
                            ${isActive ? "text-[32px]" : "text-[22px]"}
                        `}
                                        >
                                            {destination.name}
                                        </h2>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* ==================================================
                    BOTTOM CONTROLS
                ================================================== */}

                <div
                    className="
                        relative
                        z-50
                           hidden
                            lg:flex
                        items-center
                        justify-end
                        gap-3
                        bottom-20
                        lg:mt-0
                        lg:ml-[55%]
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

                            hover:bg-primary
                            hover:text-white
                            hover:border-primary
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
                            hover:bg-primary
                            hover:text-white
                            hover:border-primary

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
                                duration: SLIDE_DURATION / 1000,
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