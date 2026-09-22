"use client";

import Image from "next/image";
import Link from "next/link";

import {
    MapPin,
    Star,
    ArrowRight,
    SlidersHorizontal,
} from "lucide-react";

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

const toSlug = (value: string) =>
    value.toLowerCase().trim().replace(/\s+/g, "-");

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
            image:
                destination?.heroImage ??
                firstPackage?.heroImage ??
                "/images/explore.png",

            subtitle:
                destination?.subtitle ??
                firstPackage?.subtitle ??
                "Explore this destination",

            rating:
                destination?.rating ??
                firstPackage?.rating ??
                "4.8",

            packages: packageGroup?.packages.length ?? 0,

            categories: Array.from(
                new Set(
                    packageGroup?.packages.map((item) => item.category) ?? []
                )
            ),

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
            new Set(
                packageCards
                    .map((item) => item.category)
                    .filter(Boolean)
            )
        ),
    ];

    const query = search.toLowerCase().trim();

    const matches = (value: string) =>
        value.toLowerCase().includes(query);

    const filteredDestinations = destinationCards.filter(
        (item) =>
            (category === "All" ||
                item.categories.includes(category)) &&
            (matches(item.name) ||
                matches(item.subtitle) ||
                item.categories.some(matches))
    );

    const filteredPackages = packageCards.filter(
        (item) =>
            (category === "All" ||
                item.category === category) &&
            (matches(item.name) ||
                matches(item.destination) ||
                matches(item.category))
    );

    const packagesPerPage = 8;

    const packagePageCount = Math.ceil(
        filteredPackages.length / packagesPerPage
    );

    const visiblePackages = filteredPackages.slice(
        (packagePage - 1) * packagesPerPage,
        packagePage * packagesPerPage
    );

    return (
        <main className="w-full overflow-x-hidden bg-white">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative w-full overflow-hidden bg-[#00383b]">
                <div
                    className="
                        absolute
                        inset-0
                        bg-cover
                        bg-center
                        bg-no-repeat
                    "
                    style={{
                        backgroundImage:
                            "url('/images/explore.png')",
                    }}
                />

                {/* Dark overlay */}
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

                <div
                    className="
                        relative
                        mx-auto
                        w-full
                        max-w-7xl
                        px-4
                        py-14

                        sm:px-6
                        sm:py-16

                        md:py-20

                        lg:px-8
                        lg:py-24
                    "
                >
                    <p
                        className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-[#63d5c5]

                            sm:text-xs
                            sm:tracking-[0.2em]

                            md:text-sm
                        "
                    >
                        Explore India
                    </p>

                    <h1
                        className="
                            mt-2
                            max-w-full
                            font-heading
                            text-3xl
                            font-bold
                            leading-tight
                            text-white

                            sm:mt-3
                            sm:max-w-3xl
                            sm:text-5xl

                            md:text-6xl

                            lg:text-7xl
                        "
                    >
                        Find a place worth remembering
                    </h1>

                    <p
                        className="
                            mt-3
                            max-w-full
                            text-xs
                            leading-5
                            text-white/75

                            sm:mt-5
                            sm:max-w-2xl
                            sm:text-sm
                            sm:leading-6

                            md:text-base
                            md:leading-7
                        "
                    >
                        Browse destinations and ready-to-book packages,
                        then filter the list until the right journey appears.
                    </p>
                </div>
            </section>


            {/* =========================================================
                SEARCH + FILTER
            ========================================================= */}

            <section
                className="
                    relative
                    z-10
                    mx-auto
                    -mt-5
                    w-full
                    max-w-7xl
                    px-3
                    pb-10
                    gap-2
                    flex 
                    justify-center
                    items-center
                    flex-col
                    sm:-mt-7
                    sm:px-5
                    sm:pb-14

                    md:-mt-8
                    md:px-6

                    lg:px-8
                    lg:pb-16
                "
            >

                {/* Search */}
                <div className="w-full">
                    <SearachBar />
                </div>


                {/* Filter */}
                <div className="w-[90%] flex justify-start items-start  ">

                    <div
                        className="
                        mt-3
                          bg-white
                          w-fit
                            overflow-x-auto
                            overscroll-x-contain
                            pb-1
                            scrollbar-thin
                     
                    "
                    >
                        <div
                            className="
                            flex
                            items-center
                            gap-2
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.12em]
                            text-neutral-500

                            sm:text-xs
                            sm:tracking-wider
                        "
                        >
                            <SlidersHorizontal
                                className="
                                size-3.5
                                shrink-0
                                text-[#087c70]

                                sm:size-4
                            "
                            />

                            <span>Filter by category</span>
                        </div>


                        {/* Category scroll */}
                        <div
                            className="
                            mt-3
                            flex
                            w-full
                            gap-2
                             overflow-x-auto
                            overscroll-x-contain
                            pb-1
                            scrollbar-thin
                            sm:mt-4
                        "
                        >
                            {categories.map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => {
                                        setCategory(item);
                                        setPackagePage(1);
                                    }}
                                    className={`
                                    shrink-0
                                    whitespace-nowrap
                                    rounded-full
                                    px-3
                                    py-1.5
                                    text-[10px]
                                    font-semibold
                                    transition

                                    sm:px-4
                                    sm:py-2
                                    sm:text-xs

                                    ${category === item
                                            ? "bg-[#087c70] text-white"
                                            : "bg-neutral-100 text-neutral-600 hover:bg-[#e8f8f5] hover:text-[#087c70]"
                                        }
                                `}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>


                {/* =====================================================
                    DESTINATIONS
                ===================================================== */}

                <section className="mt-9 sm:mt-12 md:mt-14">

                    <div
                        className="
                            mb-4
                            flex
                            items-end
                            justify-between
                            gap-3

                            sm:mb-5
                        "
                    >
                        <div className="min-w-0">
                            <p
                                className="
                                    text-[9px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.14em]
                                    text-[#087c70]

                                    sm:text-xs
                                    sm:tracking-[0.16em]
                                "
                            >
                                Start here
                            </p>

                            <h2
                                className="
                                    mt-1
                                    font-heading
                                    text-2xl
                                    font-bold
                                    leading-tight
                                    text-neutral-900

                                    sm:text-3xl
                                "
                            >
                                Destinations
                            </h2>
                        </div>

                        <span
                            className="
                                shrink-0
                                text-[10px]
                                text-neutral-500

                                sm:text-sm
                            "
                        >
                            {filteredDestinations.length} places
                        </span>
                    </div>


                    {/* Destination Grid */}
                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-4

                            sm:grid-cols-2
                            sm:gap-5

                            lg:grid-cols-4
                        "
                    >
                        {filteredDestinations.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="
                                    group
                                    min-w-0
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    border-neutral-200
                                    bg-white
                                    shadow-sm
                                    transition

                                    sm:rounded-2xl

                                    hover:-translate-y-1
                                    hover:shadow-lg
                                "
                            >
                                {/* Image */}
                                <div
                                    className="
                                        relative
                                        h-48
                                        w-full
                                        overflow-hidden

                                        sm:h-52

                                        lg:h-44
                                    "
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        sizes="
                                            (max-width: 640px) 100vw,
                                            (max-width: 1024px) 50vw,
                                            25vw
                                        "
                                        className="
                                            object-cover
                                            transition
                                            duration-500
                                            group-hover:scale-105
                                        "
                                    />
                                </div>


                                {/* Content */}
                                <div
                                    className="
                                        min-w-0
                                        px-3
                                        py-3

                                        sm:px-4
                                        sm:py-3
                                    "
                                >
                                    <h3
                                        className="
                                            truncate
                                            font-heading
                                            text-xl
                                            font-bold

                                            sm:text-2xl
                                        "
                                    >
                                        {item.name}
                                    </h3>

                                    <p
                                        className="
                                            flex
                                            items-center
                                            gap-1
                                            py-1.5
                                            text-xs
                                            text-primary

                                            sm:py-2
                                            sm:text-sm
                                        "
                                    >
                                        <MapPin className="size-3 shrink-0" />

                                        <span>
                                            {item.packages} packages
                                        </span>
                                    </p>

                                    <p
                                        className="
                                            line-clamp-2
                                            min-h-[40px]
                                            text-xs
                                            leading-5
                                            text-neutral-500

                                            sm:text-sm
                                        "
                                    >
                                        {item.subtitle}
                                    </p>


                                    <div
                                        className="
                                            mt-3
                                            flex
                                            items-center
                                            justify-between
                                            gap-2
                                            text-xs

                                            sm:mt-4
                                            sm:text-sm
                                        "
                                    >
                                        <span
                                            className="
                                                flex
                                                items-center
                                                gap-1
                                                font-semibold
                                                text-neutral-800
                                            "
                                        >
                                            <Star
                                                className="
                                                    size-3.5
                                                    fill-amber-400
                                                    text-amber-400

                                                    sm:size-4
                                                "
                                            />

                                            {item.rating}
                                        </span>

                                        <span
                                            className="
                                                flex
                                                min-w-0
                                                items-center
                                                gap-1
                                                font-semibold
                                                text-primary
                                            "
                                        >
                                            <span>Explore</span>

                                            <ArrowRight
                                                className="
                                                    size-3.5
                                                    shrink-0
                                                    transition
                                                    group-hover:translate-x-1

                                                    sm:size-4
                                                "
                                            />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>


                {/* =====================================================
                    PACKAGES
                ===================================================== */}

                <section className="mt-11 sm:mt-14">

                    <div
                        className="
                            mb-4
                            flex
                            items-end
                            justify-between
                            gap-3

                            sm:mb-5
                        "
                    >
                        <div className="min-w-0">
                            <p
                                className="
                                    text-[9px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.14em]
                                    text-[#087c70]

                                    sm:text-xs
                                    sm:tracking-[0.16em]
                                "
                            >
                                Plan your stay
                            </p>

                            <h2
                                className="
                                    mt-1
                                    font-heading
                                    text-2xl
                                    font-bold
                                    leading-tight
                                    text-neutral-900

                                    sm:text-3xl
                                "
                            >
                                Travel packages
                            </h2>
                        </div>

                        <span
                            className="
                                shrink-0
                                text-[10px]
                                text-neutral-500

                                sm:text-sm
                            "
                        >
                            {filteredPackages.length} packages
                        </span>
                    </div>


                    {/* Package Grid */}
                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-4

                            sm:grid-cols-2
                            sm:gap-5

                            lg:grid-cols-4
                        "
                    >
                        {visiblePackages.map((item) => (
                            <Link
                                key={`${item.destination}-${item.name}`}
                                href={item.href}
                                className="
                                    group
                                    min-w-0
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    border-neutral-200
                                    bg-white
                                    shadow-sm
                                    transition

                                    sm:rounded-2xl

                                    hover:-translate-y-1
                                    hover:shadow-lg
                                "
                            >
                                {/* Image */}
                                <div
                                    className="
                                        relative
                                        h-48
                                        w-full
                                        overflow-hidden

                                        sm:h-52

                                        lg:h-44
                                    "
                                >
                                    <Image
                                        src={item.heroImage}
                                        alt={item.name}
                                        fill
                                        sizes="
                                            (max-width: 640px) 100vw,
                                            (max-width: 1024px) 50vw,
                                            25vw
                                        "
                                        className="
                                            object-cover
                                            transition
                                            duration-500
                                            group-hover:scale-105
                                        "
                                    />

                                    <span
                                        className="
                                            absolute
                                            left-2.5
                                            top-2.5
                                            max-w-[calc(100%-20px)]
                                            truncate
                                            rounded-full
                                            bg-white/90
                                            px-2.5
                                            py-1
                                            text-[9px]
                                            font-bold
                                            uppercase
                                            tracking-wider
                                            text-[#087c70]
 
                                            sm:top-3
                                            sm:px-3
                                        "
                                    >
                                        {item.category}
                                    </span>
                                </div>


                                {/* Content */}
                                <div
                                    className="
                                        min-w-0
                                        px-3
                                        py-3

                                        sm:px-4
                                    "
                                >
                                    <p
                                        className="
                                            truncate
                                            font-heading
                                            text-lg
                                            font-bold
                                            text-neutral-900

                                            sm:text-xl
                                        "
                                    >
                                        {item.destination}
                                    </p>

                                    <h3
                                        className="
                                            truncate
                                            text-xs
                                            text-neutral-500
                                        "
                                    >
                                        {item.name}
                                    </h3>


                                    <div
                                        className="
                                            mt-3
                                            flex
                                            items-end
                                            justify-between
                                            gap-2
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                min-w-0
                                                items-baseline
                                                gap-1
                                            "
                                        >
                                            <span
                                                className="
                                                    text-[11px]
                                                    font-medium
                                                    text-primary
                                                "
                                            >
                                                From
                                            </span>

                                            <span
                                                className="
                                                    truncate
                                                    text-sm
                                                    font-bold
                                                    text-primary

                                                    sm:text-base
                                                "
                                            >
                                                {item.offerPrice}
                                            </span>

                                            <span
                                                className="
                                                    shrink-0
                                                    text-[9px]
                                                    font-medium
                                                    text-primary

                                                    sm:text-[11px]
                                                "
                                            >
                                                / person
                                            </span>
                                        </div>

                                        <ArrowRight
                                            className="
                                                size-5
                                                shrink-0
                                                rounded-full
                                                bg-primary
                                                p-1
                                                text-white
                                                transition

                                                group-hover:translate-x-1
                                            "
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>


                    {/* Pagination */}
                    {packagePageCount > 1 && (
                        <div className="mt-7 w-full overflow-x-auto pb-1 sm:mt-8">
                            <Pagination className="min-w-max">
                                <PaginationContent>

                                    <PaginationItem>
                                        <PaginationPrevious
                                            disabled={packagePage === 1}
                                            onClick={() =>
                                                setPackagePage((page) =>
                                                    Math.max(1, page - 1)
                                                )
                                            }
                                        />
                                    </PaginationItem>

                                    {Array.from(
                                        {
                                            length: packagePageCount,
                                        },
                                        (_, index) => index + 1
                                    ).map((page) => (
                                        <PaginationItem key={page}>
                                            <PaginationLink
                                                isActive={
                                                    packagePage === page
                                                }
                                                onClick={() =>
                                                    setPackagePage(page)
                                                }
                                            >
                                                {page}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}

                                    <PaginationItem>
                                        <PaginationNext
                                            disabled={
                                                packagePage ===
                                                packagePageCount
                                            }
                                            onClick={() =>
                                                setPackagePage((page) =>
                                                    Math.min(
                                                        packagePageCount,
                                                        page + 1
                                                    )
                                                )
                                            }
                                        />
                                    </PaginationItem>

                                </PaginationContent>
                            </Pagination>
                        </div>
                    )}
                </section>
            </section>
        </main>
    );
}