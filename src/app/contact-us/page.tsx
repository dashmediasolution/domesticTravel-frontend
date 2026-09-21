"use client";

import Image from "next/image";
import {
    ArrowRight,
    Clock3,

    Mail,
    MapPin,
    MessageCircle,
    Navigation,
    Phone,
    Send,

} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactUs() {
    const faqs = [
        {
            question: "How do I book a trip on Wander-India?",
            answer:
                "Choose your destination, select your preferred package or service, and follow the booking steps. Our travel experts are also available to help you.",
        },
        {
            question: "What payment methods do you accept?",
            answer:
                "We support commonly used online payment methods. Available payment options are displayed during the booking process.",
        },
        {
            question: "Can I modify or cancel my booking?",
            answer:
                "Yes, depending on the booking and its cancellation policy. Contact our support team with your booking details for assistance.",
        },
        {
            question: "Are your prices competitive?",
            answer:
                "We work with travel partners to provide a range of options and competitive prices for flights, hotels, buses and holiday packages.",
        },
        {
            question: "Do you offer travel insurance?",
            answer:
                "Travel insurance availability depends on the service and package selected. Contact our team for available options.",
        },
        {
            question: "How can I track my booking?",
            answer:
                "You can use your booking information to check your trip details. Our support team can also assist you with booking updates.",
        },
    ];

    return (
        <main className="w-full bg-[#F5FBFA]">
            {/* =========================================================
                HERO
            ========================================================= */}
            <section className="relative w-full overflow-hidden">
                <div className="relative h-[300px] w-full sm:h-[340px] md:h-[360px] lg:h-[390px]">
                    <Image
                        src="/images/explore.png"
                        alt="Travel destination"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    {/* Overlay */}
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
                    {/* Hero Content */}
                    <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">
                        <div className="max-w-xl text-white">
                            <p className="mb-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-[9px] md:text-[10px]">
                                Contact Us
                            </p>

                            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                                We're Here to Help
                            </h1>

                            <p className="mt-3 max-w-md text-[10px] leading-relaxed text-white/85 sm:text-xs md:text-base">
                                Have a question, need assistance, or want to
                                plan your dream trip? Our team is just a
                                message away. Reach out to us — we'd love to
                                hear from you!
                            </p>

                            <div className="mt-4 flex items-center gap-2 text-[9px] font-medium text-white sm:text-xs md:text-sm">
                                <MessageCircle className="size-3.5 text-primary sm:size-4" />
                                We're always happy to help.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                CONTACT INFORMATION + FORM
            ========================================================= */}
            <section className="w-full px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-12">
                <div className="mx-auto grid w-full max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7">
                    {/* Contact Information */}
                    <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
                        {/* Heading */}
                        <div>
                            <p className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-[#2FC2B0] sm:text-[10px]">
                                Get in Touch
                            </p>

                            <h2 className="text-xl font-bold text-[#00383B] sm:text-2xl md:text-3xl">
                                Contact Information
                            </h2>

                            <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-sm md:text-sm">
                                We're available 24/7 to help you with your
                                travel plans. Choose the way you'd like to
                                reach us.
                            </p>
                        </div>

                        {/* Contact Items */}
                        <div className="mt-6 space-y-5 sm:mt-8">
                            {/* Phone */}
                            <div className="flex gap-3">
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#E7F8F5] text-[#168A91] sm:size-10">
                                    <Phone className="size-4 sm:size-[17px]" />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-[#00383B] sm:text-sm md:text-sm">
                                        Call Us
                                    </h3>

                                    <p className="mt-0.5 text-sm font-semibold text-neutral-700 sm:text-sm md:text-sm">
                                        +91 1800 123 4567
                                    </p>

                                    <p className="mt-0.5 text-xs text-neutral-400 sm:text-xs md:text-sm">
                                        Available 24/7
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-3">
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#E7F8F5] text-[#168A91] sm:size-10">
                                    <Mail className="size-4 sm:size-[17px]" />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-[#00383B] sm:text-xs md:text-sm">
                                        Email Us
                                    </h3>

                                    <p className="mt-0.5 text-sm font-semibold text-neutral-700 sm:text-xs md:text-sm">
                                        hello@wander-india.com
                                    </p>

                                    <p className="mt-0.5 text-xs text-neutral-400 sm:text-[9px] md:text-sm">
                                        We reply within 24 hours
                                    </p>
                                </div>
                            </div>

                            {/* Office */}
                            <div className="flex gap-3">
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#E7F8F5] text-[#168A91] sm:size-10">
                                    <MapPin className="size-4 sm:size-[17px]" />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-[#00383B] sm:text-xs md:text-sm">
                                        Visit Our Office
                                    </h3>

                                    <p className="mt-0.5 max-w-[220px] text-sm font-semibold leading-relaxed text-neutral-700 sm:text-xs md:text-sm">
                                        124, Horizon Tower, Sector 62,
                                        Noida, Uttar Pradesh - 201309
                                    </p>

                                    <p className="mt-0.5 text-xs text-neutral-400 sm:text-[9px] md:text-sm">
                                        Mon - Sat, 9:00 AM - 7:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="mt-7 border-t border-neutral-100 pt-5 sm:mt-8">
                            <p className="text-sm font-semibold text-[#00383B] sm:text-[10px] md:text-sm">
                                Follow Us
                            </p>

                            {/* <div className="mt-2.5 flex gap-2">
                                <a
                                    href="#"
                                    className="flex size-7 items-center justify-center rounded-full bg-[#E7F8F5] text-[#168A91] transition hover:bg-[#2FC2B0] hover:text-white"
                                >
                                    <Facebook className="size-3.5" />
                                </a>

                                <a
                                    href="#"
                                    className="flex size-7 items-center justify-center rounded-full bg-[#E7F8F5] text-[#168A91] transition hover:bg-[#2FC2B0] hover:text-white"
                                >
                                    <Instagram className="size-3.5" />
                                </a>

                                <a
                                    href="#"
                                    className="flex size-7 items-center justify-center rounded-full bg-[#E7F8F5] text-[#168A91] transition hover:bg-[#2FC2B0] hover:text-white"
                                >
                                    <Youtube className="size-3.5" />
                                </a>

                                <a
                                    href="#"
                                    className="flex size-7 items-center justify-center rounded-full bg-[#E7F8F5] text-[#168A91] transition hover:bg-[#2FC2B0] hover:text-white"
                                >
                                    <Twitter className="size-3.5" />
                                </a>
                            </div> */}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
                        <div>
                            <p className="text-lg font-bold text-[#00383B] sm:text-xl md:text-2xl">
                                Send Us a Message
                            </p>

                            <p className="mt-1 text-[9px] text-neutral-500 sm:text-[10px] md:text-sm">
                                Fill out the form below and we'll get back to
                                you as soon as possible.
                            </p>
                        </div>

                        <form className="mt-5 space-y-4 sm:mt-6">
                            {/* Name + Email */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                    <label className="text-[9px] font-semibold text-[#00383B] sm:text-[10px] md:text-xs">
                                        Full Name *
                                    </label>

                                    <Input
                                        placeholder="Enter your name"
                                        className="h-9 rounded-lg border-neutral-200 text-[9px] shadow-none placeholder:text-neutral-400 focus-visible:border-[#2FC2B0] focus-visible:ring-0 sm:h-10 sm:text-[10px] md:text-sm"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[9px] font-semibold text-[#00383B] sm:text-[10px] md:text-xs">
                                        Email Address *
                                    </label>

                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="h-9 rounded-lg border-neutral-200 text-[9px] shadow-none placeholder:text-neutral-400 focus-visible:border-[#2FC2B0] focus-visible:ring-0 sm:h-10 sm:text-[10px] md:text-sm"
                                    />
                                </div>
                            </div>

                            {/* Phone + Query */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                    <label className="text-[9px] font-semibold text-[#00383B] sm:text-[10px] md:text-xs">
                                        Phone Number *
                                    </label>

                                    <Input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="h-9 rounded-lg border-neutral-200 text-[9px] shadow-none placeholder:text-neutral-400 focus-visible:border-[#2FC2B0] focus-visible:ring-0 sm:h-10 sm:text-[10px] md:text-sm"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[9px] font-semibold text-[#00383B] sm:text-[10px] md:text-xs">
                                        Type of Query *
                                    </label>

                                    <select
                                        defaultValue=""
                                        className="h-9 w-full rounded-lg border border-neutral-200 bg-white px-3 text-[9px] text-neutral-500 outline-none transition focus:border-[#2FC2B0] sm:h-10 sm:text-[10px] md:text-sm"
                                    >
                                        <option value="" disabled>
                                            Select an option
                                        </option>
                                        <option value="booking">
                                            Booking Assistance
                                        </option>
                                        <option value="package">
                                            Holiday Package
                                        </option>
                                        <option value="flight">
                                            Flight
                                        </option>
                                        <option value="hotel">
                                            Hotel
                                        </option>
                                        <option value="bus">
                                            Bus
                                        </option>
                                        <option value="other">
                                            Other
                                        </option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-1.5">
                                <label className="text-[9px] font-semibold text-[#00383B] sm:text-[10px] md:text-xs">
                                    Your Message
                                </label>

                                <Textarea
                                    placeholder="Tell us how we can help you..."
                                    className="min-h-[90px] resize-none rounded-lg border-neutral-200 text-[9px] shadow-none placeholder:text-neutral-400 focus-visible:border-[#2FC2B0] focus-visible:ring-0 sm:min-h-[105px] sm:text-[10px] md:text-sm"
                                />
                            </div>

                            {/* Submit */}
                            <Button
                                type="submit"
                                className="h-9 w-full rounded-full bg-primary text-[9px] font-bold text-[#00383B] shadow-none hover:bg-primary sm:h-10 sm:text-[10px] md:text-sm"
                            >
                                <Send className="mr-1.5 size-3 sm:size-3.5" />
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* =========================================================
                MAP + OFFICE
            ========================================================= */}
            <section className="w-full px-4 pb-8 sm:px-6 sm:pb-10 md:px-8 lg:px-10">
                <div className="mx-auto grid w-full max-w-7xl gap-5 md:grid-cols-[1.05fr_0.95fr] lg:gap-7">
                    {/* Map */}
                    <div className="relative min-h-[250px] overflow-hidden rounded-2xl bg-white shadow-sm sm:min-h-[300px] md:min-h-[340px]">
                        <iframe
                            title="Wander-India Delhi office location"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=77.17%2C28.58%2C77.25%2C28.66&layer=mapnik&marker=28.6139%2C77.2090"
                            className="absolute inset-0 h-full w-full border-0"
                            loading="lazy"
                        />

                        <a
                            href="https://www.openstreetmap.org/?mlat=28.6139&mlon=77.2090#map=13/28.6139/77.2090"
                            target="_blank"
                            rel="noreferrer"
                            className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#168A91] shadow-sm transition hover:bg-white"
                        >
                            Open larger map
                        </a>
                    </div>

                    {/* Office */}
                    <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
                        <div className="flex items-center gap-2">
                            <Navigation className="size-4 text-[#2FC2B0] sm:size-5" />

                            <p className="text-[9px] font-semibold uppercase tracking-wider text-[#2FC2B0] sm:text-[10px] md:text-xs">
                                Our Offices
                            </p>
                        </div>

                        <h2 className="mt-1 text-xl font-bold text-[#00383B] sm:text-2xl md:text-3xl">
                            Visit Us
                        </h2>

                        <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-xs md:text-sm">
                            You can also come by and meet our team. We'd be
                            happy to assist you in person.
                        </p>

                        <div className="mt-6 flex gap-3 border-t border-neutral-100 pt-5">
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#E7F8F5] text-[#168A91] sm:size-10">
                                <MapPin className="size-4" />
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-[#00383B] sm:text-xs md:text-sm">
                                    Noida Office
                                </h3>

                                <p className="mt-1 text-sm leading-relaxed text-neutral-500 sm:text-[10px] md:text-sm">
                                    123, Horizon Tower, Sector 62,
                                    <br />
                                    Noida, Uttar Pradesh - 201309
                                </p>

                                <div className="mt-1.5 flex items-center gap-1 text-sm text-neutral-400 sm:text-[9px] md:text-sm">
                                    <Clock3 className="size-3" />
                                    Mon - Sat, 9:00 AM - 7:00 PM
                                </div>
                            </div>
                        </div>
 
                    </div>
                </div>
            </section>

            {/* =========================================================
                FAQ
            ========================================================= */}
            <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-12">
                <div className="mx-auto w-full max-w-7xl">
                    {/* Header */}
                    <div className="mb-6 text-center sm:mb-8">
                        <p className="text-[9px] font-semibold uppercase tracking-wider text-[#2FC2B0] sm:text-[12px] md:text-xs">
                            Quick Help
                        </p>

                        <h2 className="mt-1 text-xl font-bold text-[#00383B] sm:text-2xl md:text-3xl">
                            Frequently Asked Questions
                        </h2>

                        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-xs md:text-sm">
                            Find answers to some of the most common questions
                            about your journey.
                        </p>
                    </div>

                    {/* FAQ Grid */}
                    <div className="grid gap-x-8 md:grid-cols-2">
                        <Accordion >
                            {faqs.slice(0, 3).map((faq, index) => (
                                <AccordionItem
                                    key={faq.question}
                                    value={`left-${index}`}
                                    className="border-b-neutral-200"
                                >
                                    <AccordionTrigger className="py-3 text-left text-sm font-semibold text-[#00383B] hover:no-underline sm:text-[10px] md:text-sm">
                                        {faq.question}
                                    </AccordionTrigger>

                                    <AccordionContent className="text-sm leading-relaxed text-neutral-500 sm:text-[10px] md:text-sm">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <Accordion   >
                            {faqs.slice(3, 6).map((faq, index) => (
                                <AccordionItem
                                    key={faq.question}
                                    value={`right-${index}`}
                                    className="border-b-neutral-200"
                                >
                                    <AccordionTrigger className="py-3 text-left text-sm font-semibold text-[#00383B] hover:no-underline sm:text-[10px] md:text-sm">
                                        {faq.question}
                                    </AccordionTrigger>

                                    <AccordionContent className="text-sm leading-relaxed text-neutral-500 sm:text-[10px] md:text-sm">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* FAQ Button */}
                  
                </div>
            </section>
        </main>
    );
}