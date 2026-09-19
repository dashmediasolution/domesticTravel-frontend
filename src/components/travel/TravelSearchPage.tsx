"use client";

import { useState, type FormEvent } from "react";
import {
    ArrowRight,
    BusFront,
    CalendarDays,
    CheckCircle2,
    Hotel,
    MapPin,
    Plane,
    Search,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type TravelService = "flights" | "hotels" | "bus";

type ServiceConfig = {
    title: string;
    description: string;
    icon: typeof Plane;
    accent: string;
    fields: { label: string; name: string; placeholder: string; type?: string }[];
};

const serviceConfig: Record<TravelService, ServiceConfig> = {
    flights: {
        title: "Find your next flight",
        description: "Compare routes and plan a smooth journey across India.",
        icon: Plane,
        accent: "from-[#0c6267] to-[#143b57]",
        fields: [
            { label: "From", name: "from", placeholder: "Departure city or airport" },
            { label: "To", name: "to", placeholder: "Arrival city or airport" },
            { label: "Departure", name: "departure", placeholder: "Select date", type: "date" },
            { label: "Return", name: "return", placeholder: "Select date", type: "date" },
        ],
    },
    hotels: {
        title: "Find a place to stay",
        description: "Discover comfortable stays for every kind of Indian getaway.",
        icon: Hotel,
        accent: "from-[#8d5634] to-[#4f3842]",
        fields: [
            { label: "Destination", name: "destination", placeholder: "City, area or hotel" },
            { label: "Check in", name: "checkIn", placeholder: "Select date", type: "date" },
            { label: "Check out", name: "checkOut", placeholder: "Select date", type: "date" },
            { label: "Guests", name: "guests", placeholder: "2 guests, 1 room" },
        ],
    },
    bus: {
        title: "Search bus tickets",
        description: "Travel simply between cities with routes that fit your plans.",
        icon: BusFront,
        accent: "from-[#355c49] to-[#233b4d]",
        fields: [
            { label: "From", name: "from", placeholder: "Departure city" },
            { label: "To", name: "to", placeholder: "Arrival city" },
            { label: "Travel date", name: "travelDate", placeholder: "Select date", type: "date" },
            { label: "Passengers", name: "passengers", placeholder: "1 passenger" },
        ],
    },
};

const popularRoutes = {
    flights: ["Delhi to Goa", "Mumbai to Bengaluru", "Delhi to Kochi"],
    hotels: ["Goa beach stays", "Hotels in Manali", "Jaipur heritage stays"],
    bus: ["Delhi to Manali", "Bengaluru to Goa", "Mumbai to Pune"],
};

export default function TravelSearchPage({ service }: { service: TravelService }) {
    const config = serviceConfig[service];
    const Icon = config.icon;
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-[#f5f7f5] pt-16">
            <section className={`relative overflow-hidden bg-gradient-to-br ${config.accent}`}>
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen"
                    style={{ backgroundImage: "url('/images/hero/heroImage-2.png')" }}
                />
                <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
                    <div className="max-w-2xl text-white">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
                            <Icon className="size-4" />
                            {service}
                        </div>
                        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl">
                            {config.title}
                        </h1>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                            {config.description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative mx-auto -mt-8 max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
                <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_18px_50px_rgba(20,45,50,0.14)] sm:p-6"
                >
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {config.fields.map((field) => (
                            <label key={field.name} className="block">
                                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-500">
                                    {field.label}
                                </span>
                                <div className="relative">
                                    <MapPin className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#087c70]" />
                                    <Input
                                        required
                                        name={field.name}
                                        type={field.type ?? "text"}
                                        placeholder={field.placeholder}
                                        className="h-12 rounded-xl border-neutral-200 pl-10 text-sm"
                                    />
                                </div>
                            </label>
                        ))}
                    </div>

                    <div className="mt-5 flex flex-col gap-3 border-t border-neutral-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <p className="flex items-center gap-2 text-xs text-neutral-500">
                            <CheckCircle2 className="size-4 text-[#087c70]" />
                            Secure search with no booking fees
                        </p>
                        <Button type="submit" className="h-11 rounded-xl px-6">
                            <Search className="size-4" />
                            Search {service}
                        </Button>
                    </div>

                    {submitted && (
                        <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#e8f8f5] px-4 py-3 text-sm font-medium text-[#087c70]">
                            <CheckCircle2 className="size-5 shrink-0" />
                            Search received. We are finding the best {service} options for you.
                        </div>
                    )}
                </form>

                <div className="mt-12">
                    <div className="mb-5 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#087c70]">Popular searches</p>
                            <h2 className="mt-1 font-heading text-2xl font-bold text-neutral-900">Start with an idea</h2>
                        </div>
                        <CalendarDays className="size-6 text-[#087c70]" />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                        {popularRoutes[service].map((route) => (
                            <button
                                key={route}
                                type="button"
                                className="group flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#72c6ba] hover:shadow-md"
                            >
                                <span className="text-sm font-semibold text-neutral-800">{route}</span>
                                <ArrowRight className="size-4 text-[#087c70] transition-transform group-hover:translate-x-1" />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-3">
                    <Feature icon={MapPin} title="Wide coverage" text="Reach the destinations you want to see." />
                    <Feature icon={Users} title="Made for travelers" text="Simple search flows for solo and group trips." />
                    <Feature icon={CheckCircle2} title="Clear choices" text="Compare your options before you decide." />
                </div>
            </section>
        </main>
    );
}

function Feature({ icon: Icon, title, text }: { icon: typeof MapPin; title: string; text: string }) {
    return (
        <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <Icon className="size-5 text-[#087c70]" />
            <h3 className="mt-4 text-sm font-bold text-neutral-900">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-neutral-500">{text}</p>
        </div>
    );
}
