"use client";

import Image from "next/image";
import {
    ArrowRight,
    BadgeCheck,
    CalendarCheck,
    Globe2,
    Heart,
    Headphones,
    MapPin,
    ShieldCheck,
    Sparkles,
    Star,
    Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AboutUs() {
    return (
        <main className="w-full overflow-hidden bg-[#F5FBFA]">
            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="relative w-full">
                <div className="relative h-[360px] w-full sm:h-[400px] md:h-[440px] lg:h-[470px]">
                    <Image
                        src="/images/explore.png"
                        alt="Beautiful Indian mountain destination"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div
                        className="
          absolute
          inset-0
          z-10
          bg-linear-to-tr
          from-black/50
          via-black/20
          via-30%
          to-transparent
        "
                    />
                    <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-5 sm:px-8 md:px-10 lg:px-12">
                        <div className="max-w-[650px] text-white">
                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary sm:text-sm md:text-sm">
                                About Us
                            </p>

                            <h1 className="mt-1 text-4xl font-black leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl">
                                More Than Just Travel
                            </h1>

                            <p className="mt-2 text-2xl font-semibold italic text-primary sm:text-3xl md:text-4xl lg:text-5xl">
                                We Create Memories
                            </p>

                            <p className="mt-4 max-w-[570px] text-xs leading-relaxed text-white/90 sm:text-sm md:text-base lg:text-lg">
                                At Wander-India, we believe travel should be
                                more than just a trip. It should be a story,
                                an experience, and a collection of beautiful
                                memories that stay with you forever.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                OUR STORY
            ===================================================== */}
            <section className="w-full px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10 lg:py-16">
                <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
                    {/* Text */}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2FC2B0] sm:text-xs">
                            Our Story
                        </p>

                        <h2 className="mt-2 max-w-[600px] text-3xl font-black leading-tight text-[#00383B] sm:text-4xl md:text-5xl lg:text-[3.2rem]">
                            Born from a Love
                            <br />
                            for India's Beauty
                        </h2>

                        <div className="mt-5 max-w-[600px] space-y-3 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8 md:text-lg">
                            <p>
                                Wander-India was founded by a group of travel
                                enthusiasts who shared a simple belief — that
                                India is one of the most incredible countries
                                in the world, and deserves to be explored,
                                experienced and celebrated.
                            </p>

                            <p>
                                What started as a small idea among friends soon
                                grew into a platform that helps thousands of
                                travelers plan their dream trips — without the
                                stress and complexity.
                            </p>

                            <p>
                                Today, we continue to bring together beautiful
                                destinations, handpicked experiences and
                                trusted travel services under one roof.
                            </p>
                        </div>

                         
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-[1.25fr_0.75fr] gap-3 sm:gap-4">
    <div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[390px] md:h-[430px] lg:h-[450px]">
        <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Traveler exploring mountains"
            fill
            sizes="(max-width: 768px) 60vw, 45vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
        />
    </div>

    <div className="flex flex-col gap-3 sm:gap-4">
        <div className="relative h-[145px] overflow-hidden rounded-xl sm:h-[188px] md:h-[210px] lg:h-[215px]">
            <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt="Beautiful tropical beach"
                fill
                sizes="(max-width: 768px) 40vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
            />
        </div>

        <div className="relative flex-1 overflow-hidden rounded-xl">
            <Image
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
                alt="Indian heritage destination"
                fill
                sizes="(max-width: 768px) 40vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
            />
        </div>
    </div>
</div>

                </div>
            </section>

            {/* =====================================================
                WHY CHOOSE US
            ===================================================== */}
            <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="text-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2FC2B0] sm:text-xs">
                            Why Choose Us
                        </p>

                        <h2 className="mt-2 text-3xl font-black text-[#00383B] sm:text-4xl md:text-5xl">
                            Your Trusted Travel Partner
                        </h2>

                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-500 sm:text-base md:text-lg">
                            We make travel simple, seamless and special —
                            for every kind of traveler.
                        </p>
                    </div>

                    <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
                        {/* Item */}
                        <div className="text-center">
                            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                <ShieldCheck className="size-6" />
                            </div>

                            <h3 className="mt-3 text-sm font-bold text-[#00383B] sm:text-base">
                                Best Price Guarantee
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-neutral-500 sm:text-sm">
                                Get the best travel deals without compromise.
                            </p>
                        </div>

                        {/* Item */}
                        <div className="text-center">
                            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                <Headphones className="size-6" />
                            </div>

                            <h3 className="mt-3 text-sm font-bold text-[#00383B] sm:text-base">
                                24/7 Customer Support
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-neutral-500 sm:text-sm">
                                We're always here to help you.
                            </p>
                        </div>

                        {/* Item */}
                        <div className="text-center">
                            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                <BadgeCheck className="size-6" />
                            </div>

                            <h3 className="mt-3 text-sm font-bold text-[#00383B] sm:text-base">
                                Curated Experiences
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-neutral-500 sm:text-sm">
                                Handpicked trips made around you.
                            </p>
                        </div>

                        {/* Item */}
                        <div className="text-center">
                            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                <ShieldCheck className="size-6" />
                            </div>

                            <h3 className="mt-3 text-sm font-bold text-[#00383B] sm:text-base">
                                Safe & Secure
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-neutral-500 sm:text-sm">
                                Your privacy and security come first.
                            </p>
                        </div>

                        {/* Item */}
                        <div className="text-center sm:col-span-2 md:col-span-1">
                            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                <Star className="size-6" />
                            </div>

                            <h3 className="mt-3 text-sm font-bold text-[#00383B] sm:text-base">
                                Trusted by Thousands
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-neutral-500 sm:text-sm">
                                Real travelers. Real stories. Real memories.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                IMPACT + VALUES
            ===================================================== */}
            <section className="w-full px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10">
                <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
                    {/* Impact */}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2FC2B0] sm:text-xs">
                            Our Impact
                        </p>

                        <h2 className="mt-2 text-3xl font-black leading-tight text-[#00383B] sm:text-4xl md:text-5xl">
                            Traveling Together,
                            <br />
                            Growing Together
                        </h2>

                        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm sm:p-4">
                                <Users className="size-5 text-[#2FC2B0] sm:size-6" />

                                <div>
                                    <p className="text-base font-black text-[#00383B] sm:text-lg">
                                        500K+
                                    </p>
                                    <p className="text-[9px] text-neutral-500 sm:text-xs">
                                        Happy Travelers
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm sm:p-4">
                                <MapPin className="size-5 text-[#2FC2B0] sm:size-6" />

                                <div>
                                    <p className="text-base font-black text-[#00383B] sm:text-lg">
                                        150+
                                    </p>
                                    <p className="text-[9px] text-neutral-500 sm:text-xs">
                                        Destinations
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm sm:p-4">
                                <Star className="size-5 text-[#2FC2B0] sm:size-6" />

                                <div>
                                    <p className="text-base font-black text-[#00383B] sm:text-lg">
                                        4.8/5
                                    </p>
                                    <p className="text-[9px] text-neutral-500 sm:text-xs">
                                        Customer Rating
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm sm:p-4">
                                <Globe2 className="size-5 text-[#2FC2B0] sm:size-6" />

                                <div>
                                    <p className="text-base font-black text-[#00383B] sm:text-lg">
                                        10+
                                    </p>
                                    <p className="text-[9px] text-neutral-500 sm:text-xs">
                                        Years of Experience
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Values */}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2FC2B0] sm:text-xs">
                            Our Values
                        </p>

                        <h2 className="mt-2 text-3xl font-black text-[#00383B] sm:text-4xl md:text-5xl">
                            What Drives Us
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500 sm:text-base md:text-lg">
                            We're more than a travel company. Every member of
                            our team is committed to creating meaningful
                            journeys for every traveler.
                        </p>

                        <div className="mt-6 grid gap-5 sm:grid-cols-2">
                            <div className="flex gap-3">
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                    <Heart className="size-5" />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-[#00383B] sm:text-base">
                                        Passion
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-neutral-500 sm:text-sm">
                                        We love what we do and it shows.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                    <Users className="size-5" />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-[#00383B] sm:text-base">
                                        Customer First
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-neutral-500 sm:text-sm">
                                        Your happiness comes first.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                    <Sparkles className="size-5" />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-[#00383B] sm:text-base">
                                        Sustainability
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-neutral-500 sm:text-sm">
                                        We travel responsibly for a better
                                        tomorrow.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                    <Sparkles className="size-5" />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-[#00383B] sm:text-base">
                                        Innovation
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-neutral-500 sm:text-sm">
                                        Always finding better ways to explore.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom spacing */}
            <div className="h-4 sm:h-6" />
        </main>
    );
}