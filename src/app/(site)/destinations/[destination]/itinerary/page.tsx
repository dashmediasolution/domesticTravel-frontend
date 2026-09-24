 
import Link from "next/link";
import {
    ArrowLeft,
    CalendarDays,
    MapPin,
    Clock3,
    CheckCircle2,
    Star,
    Thermometer,
} from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@base-ui/react";
import { featuredDestination } from "@/constants/destinationData";
import { packageData } from "@/constants/packagesData";
import { Phone } from "lucide-react";
interface PageProps {
    params: Promise<{
        destination: string;
    }>;
    searchParams: Promise<{
        package?: string;
    }>;
}

export default async function DetailedItineraryPage({
    params,
    searchParams,
}: PageProps) {
    const { destination } = await params;
    const { package: packageSlug } = await searchParams;

    const destinations = featuredDestination.find(
        (item) =>
            item.destination.name
                .toLowerCase()
                .replace(/\s+/g, "-") === destination.toLowerCase()
    );

    const packageDestination = packageSlug
        ? packageData.find(
              (item) =>
                  item.name.toLowerCase().replace(/\s+/g, "-") ===
                  destination.toLowerCase()
          )
        : undefined;
    const packageItinerary = packageDestination?.packages.find(
        (item) =>
            item.name.toLowerCase().replace(/\s+/g, "-") ===
            packageSlug?.toLowerCase()
    );

    if (!destinations && !packageItinerary) {
        notFound();
    }

    const destinationData = packageItinerary
        ? {
              name: packageItinerary.name,
              subtitle: packageItinerary.subtitle,
              heroImage: packageItinerary.heroImage,
              rating: packageItinerary.rating,
              reviews: packageItinerary.reviews,
              location: packageItinerary.location,
              idealTrip: packageItinerary.idealTrip,
              weather: packageItinerary.weather,
              budget: packageItinerary.budget,
              itinerary: packageItinerary.itinerary,
          }
        : destinations!.destination;
    const itinerary = destinationData.itinerary ?? [];
    const destinationPackage = destinations?.packages?.[0];

    return (
        <main className="min-h-screen bg-[#F7F8F8]">
            {/* Header */}
            <section
                className="relative overflow-hidden bg-[#00383B] bg-cover bg-center"
                style={{ backgroundImage: `url(${destinationData.heroImage})` }}
            >
                <div className="absolute inset-0 bg-[#00383B]/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#00383B]/95 via-[#00383B]/70 to-[#00383B]/35" />

                <div className="relative mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
                    <div>
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
                </div>
            </section>

            {/* Timeline */}
            <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-16 lg:px-8 lg:py-20">
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

                <aside className="w-full overflow-hidden rounded-2xl border border-primary bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] lg:sticky lg:top-46">
                    <div className="border-b border-neutral-200 px-5 py-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#087C70]">
                            {destinationData.name} details
                        </p>
                        <div className="mt-2 flex items-center justify-between gap-3">
                            <h2 className="font-heading text-xl font-bold text-neutral-900">
                                Plan your journey
                            </h2>
                            <span className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-800">
                                <Star className="size-4 fill-amber-400 text-amber-400" />
                                {destinationData.rating}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-3 px-5 py-4">
                        <div className="flex items-center justify-between gap-4">
                            <span className="text-xs text-neutral-500">Starting from</span>
                            <span className="text-lg font-bold text-neutral-900">
                                {packageItinerary?.offerPrice ?? destinationData.budget}
                            </span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-xs">
                            <span className="flex items-center gap-2 text-neutral-500">
                                <CalendarDays className="size-4 text-[#087C70]" />
                                Ideal trip
                            </span>
                            <span className="font-medium text-neutral-800">{destinationData.idealTrip}</span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-xs">
                            <span className="flex items-center gap-2 text-neutral-500">
                                <Thermometer className="size-4 text-[#087C70]" />
                                Weather
                            </span>
                            <span className="font-medium text-neutral-800">{destinationData.weather}</span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-xs">
                            <span className="flex items-center gap-2 text-neutral-500">
                                <CheckCircle2 className="size-4 text-[#087C70]" />
                                Reviews
                            </span>
                            <span className="font-medium text-neutral-800">{destinationData.reviews} travelers</span>
                        </div>
                    </div>

                    <div className="border-t border-neutral-200 px-5 py-4">
                        <Button
                             className="flex h-11 w-full items-center justify-center rounded-lg bg-[#087C70] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#06665d]"
                        >
                            <Phone className="h-5 w-5 shrink-0" />

                            <span className="hidden text-sm font-medium md:block">
                                +91 98765 43210
                            </span>
                        </Button> 
                    </div>
                </aside>
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
                            href={`/explore-destinations`}
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
 
