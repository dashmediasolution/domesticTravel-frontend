"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, ArrowRight, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { packageData } from "@/constants/packagesData";
import { featuredDestination } from "@/constants/destinationData";
import SearachBar from "@/components/homePage/SerachBar";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const toSlug = (value: string) => value.toLowerCase().trim().replace(/\s+/g, "-");

export default function ExploreDestinationsPage({
    initialSearch = "",
}: {
    initialSearch?: string;
}) {
    const search = initialSearch;
    const [category, setCategory] = useState("All");
    const [packagePage, setPackagePage] = useState(1);

    const destinationNames = Array.from(
        new Set([
            ...featuredDestination.map((item) => item.destination.name),
            ...packageData.map((item) => item.name),
        ])
    );

    const destinationCards = destinationNames.map((name) => {
        const featured = featuredDestination.find(
            (item) => toSlug(item.destination.name) === toSlug(name)
        );
        const packageGroup = packageData.find(
            (item) => toSlug(item.name) === toSlug(name)
        );
        const firstPackage = packageGroup?.packages[0];
        const destination = featured?.destination;

        return {
            name,
            image: destination?.heroImage ?? firstPackage?.heroImage ?? "/images/explore.png",
            subtitle: destination?.subtitle ?? firstPackage?.subtitle ?? "Explore this destination",
            rating: destination?.rating ?? firstPackage?.rating ?? "4.8",
            packages: packageGroup?.packages.length ?? 0,
            categories: Array.from(new Set(packageGroup?.packages.map((item) => item.category) ?? [])),
            href: destination
                ? `/destinations/${toSlug(name)}`
                : `/package/${toSlug(name)}`,
        };
    });

    const packageCards = packageData.flatMap((group) =>
        group.packages.map((item) => ({
            ...item,
            destination: group.name,
            href:
                toSlug(item.name) === toSlug(group.name)
                    ? `/package/${toSlug(group.name)}`
                    : `/package/${toSlug(group.name)}/${toSlug(item.name)}`,
        }))
    );

    const categories = [
        "All",
        ...Array.from(
            new Set(packageCards.map((item) => item.category).filter(Boolean))
        ),
    ];
    const query = search.toLowerCase().trim();
    const matches = (value: string) => value.toLowerCase().includes(query);

    const filteredDestinations = destinationCards.filter(
        (item) =>
            (category === "All" || item.categories.includes(category)) &&
            (matches(item.name) || matches(item.subtitle) || item.categories.some(matches))
    );
    const filteredPackages = packageCards.filter(
        (item) =>
            (category === "All" || item.category === category) &&
            (matches(item.name) || matches(item.destination) || matches(item.category))
    );
    const packagesPerPage = 8;
    const packagePageCount = Math.ceil(filteredPackages.length / packagesPerPage);
    const visiblePackages = filteredPackages.slice(
        (packagePage - 1) * packagesPerPage,
        packagePage * packagesPerPage
    );

    return (
        <main className="relative w-full">
            <section className="relative overflow-hidden bg-[#00383b]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/explore.png')" }}
                />
                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#63d5c5]">
                        Explore India
                    </p>
                    <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold text-white sm:text-6xl">
                        Find a place worth remembering
                    </h1>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                        Browse destinations and ready-to-book packages, then filter the list until the right journey appears.
                    </p>
                </div>
            </section>

            <section className="relative mx-auto -mt-8 max-w-7xl px-0 pb-16 sm:px-2 lg:px-4">
                <SearachBar />

                <div className=" rounded-2xl  relative left-6   bg-white p-4   sm:p-5">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        <SlidersHorizontal className="size-4 text-[#087c70]" />
                        Filter by category
                    </div>
                    <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                        {categories.map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => {
                                    setCategory(item);
                                    setPackagePage(1);
                                }}
                                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${category === item
                                    ? "bg-[#087c70] text-white"
                                    : "bg-neutral-100 text-neutral-600 hover:bg-[#e8f8f5] hover:text-[#087c70]"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <section className="mt-12">
                    <div className="mb-5 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#087c70]">Start here</p>
                            <h2 className="mt-1 font-heading text-3xl font-bold text-neutral-900">Destinations</h2>
                        </div>
                        <span className="text-sm text-neutral-500">{filteredDestinations.length} places</span>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {filteredDestinations.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="relative h-44 overflow-hidden rounded-2xl">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 33vw"
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="px-4 py-2">
                                    <h3 className="font-heading text-2xl font-bold">{item.name}</h3>
                                    <p className=" flex py-2 items-center gap-1 text-sm text-primary"><MapPin className="size-3" />
                                        {item.packages} packages</p>

                                    <p className="line-clamp-2 min-h-10 text-sm leading-5 text-neutral-500">{item.subtitle}</p>
                                    <div className="mt-4 flex items-center justify-between text-sm">
                                        <span className="flex items-center gap-1 font-semibold text-neutral-800">
                                            <Star className="size-4 fill-amber-400 text-amber-400" />{item.rating}</span>
                                        <span className="flex items-center gap-1 font-semibold text-primary">Explore <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="mt-14">
                    <div className="mb-5 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#087c70]">Plan your stay</p>
                            <h2 className="mt-1 font-heading text-3xl font-bold text-neutral-900">Travel packages</h2>
                        </div>
                        <span className="text-sm text-neutral-500">{filteredPackages.length} packages</span>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                        {visiblePackages.map((item) => (
                            <Link key={`${item.destination}-${item.name}`} href={item.href} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <div className="relative h-44 overflow-hidden">
                                    <Image src={item.heroImage} alt={item.name} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
                                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#087c70]">{item.category}</span>
                                </div>
                                <div className="px-4 py-2">
                                    <p className="mt-1 font-heading text-xl font-bold text-neutral-900">{item.destination}</p>
                                    <h3 className="text-xs text-neutral-500">{item.name}</h3>
                                    <div className="mt-2 flex items-end justify-between gap-3">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-[13px] font-medium text-primary">
                                                From
                                            </span>

                                            <span className="text-base font-bold text-primary">
                                                {item.offerPrice}
                                            </span>

                                            <span className="text-[11px] font-medium text-primary">
                                                / person
                                            </span>
                                        </div>
                                        <ArrowRight className="size-5 rounded-full bg-primary p-1 text-white transition group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                                    {packagePageCount > 1 && (
                                        <Pagination className="mt-8">
                                            <PaginationContent>
                                                <PaginationItem>
                                                    <PaginationPrevious
                                                        disabled={packagePage === 1}
                                                        onClick={() => setPackagePage((page) => Math.max(1, page - 1))}
                                                    />
                                                </PaginationItem>
                                                {Array.from({ length: packagePageCount }, (_, index) => index + 1).map((page) => (
                                                    <PaginationItem key={page}>
                                                        <PaginationLink
                                                            isActive={packagePage === page}
                                                            onClick={() => setPackagePage(page)}
                                                        >
                                                            {page}
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                ))}
                                                <PaginationItem>
                                                    <PaginationNext
                                                        disabled={packagePage === packagePageCount}
                                                        onClick={() => setPackagePage((page) => Math.min(packagePageCount, page + 1))}
                                                    />
                                                </PaginationItem>
                                            </PaginationContent>
                                        </Pagination>
                                    )}
                </section>
            </section>
        </main>
    );
}
