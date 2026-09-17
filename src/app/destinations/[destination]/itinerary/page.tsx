 
import Link from "next/link";
import {
    ArrowLeft,
    CalendarDays,
    MapPin,
    Clock3,
} from "lucide-react";
import { notFound } from "next/navigation";

import { featuredDestination } from "@/constants/destinationData";

interface PageProps {
    params: Promise<{
        destination: string;
    }>;
}

export default async function DetailedItineraryPage({
    params,
}: PageProps) {
    const { destination } = await params;

    const destinations = featuredDestination.find(
        (item) => item.destination.name === destination
    );

    if (!destinations) {
        notFound();
    }

    const destinationData = destinations.destination;
    const itinerary = destinationData.itinerary ?? [];

    return (
        <main className="min-h-screen bg-[#F7F8F8]">
            {/* Header */}
            <section className="relative overflow-hidden bg-[#00383B]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,194,176,0.22),transparent_40%)]" />

                <div className="relative mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
                    <Link
                        href={`/destinations/${destination}`}
                        className="mb-8 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                    >
                        <ArrowLeft size={18} />
                        Back to {destinationData.name}
                    </Link>

                    <div className="max-w-3xl">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2FC2B0] sm:text-sm">
                            Suggested Journey
                        </p>

                        <h1 className="font-heading text-4xl font-bold leading-none text-white sm:text-6xl lg:text-7xl">
                            {destinationData.name}
                        </h1>

                        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                            {destinationData.subtitle}
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white sm:text-sm">
                            <CalendarDays
                                size={16}
                                className="text-[#2FC2B0]"
                            />
                            {itinerary.length} Days
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white sm:text-sm">
                            <MapPin
                                size={16}
                                className="text-[#2FC2B0]"
                            />
                            {destinationData.location}
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white sm:text-sm">
                            <Clock3
                                size={16}
                                className="text-[#2FC2B0]"
                            />
                            {destinationData.idealTrip}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-[23px] top-5 hidden h-[calc(100%-40px)] w-px bg-neutral-200 sm:block" />

                    <div className="space-y-5 sm:space-y-8">
                        {itinerary.map((item, index) => (
                            <article
                                key={item.day}
                                className="relative grid gap-4 sm:grid-cols-[48px_1fr] sm:gap-6"
                            >
                                {/* Day Number */}
                                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2FC2B0] text-sm font-bold text-white shadow-sm">
                                    {String(item.day).padStart(2, "0")}
                                </div>

                                {/* Day Card */}
                                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] sm:rounded-3xl sm:p-7">
                                    <div className="mb-3 flex flex-wrap items-center gap-2">
                                        <span className="rounded-full bg-[#E8F8F5] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#087C70] sm:text-xs">
                                            Day {item.day}
                                        </span>

                                        {index === 0 && (
                                            <span className="rounded-full bg-neutral-100 px-3 py-1 text-[10px] font-medium text-neutral-600 sm:text-xs">
                                                Start of Journey
                                            </span>
                                        )}
                                    </div>

                                    <h2 className="font-heading text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl">
                                        {item.title}
                                    </h2>

                                    {item.description && (
                                        <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-20">
                <div className="overflow-hidden rounded-3xl bg-[#00383B] p-6 sm:p-10">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#2FC2B0]">
                                Ready to explore?
                            </p>

                            <h2 className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">
                                Plan your {destinationData.name} trip
                            </h2>
                        </div>

                        <Link
                            href={`/destinations/${destination}`}
                            className="inline-flex h-11 items-center justify-center rounded-full bg-[#2FC2B0] px-6 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                        >
                            Explore Destination
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
 
