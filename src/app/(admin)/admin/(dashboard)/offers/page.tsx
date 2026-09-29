"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
    Calendar,
    ChevronLeft,
    ChevronRight,
    Edit,
    Eye,
    Loader2,
    Plus,
    Search,
    Star,
    Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Offer = {
    id: string;
    title: string;
    slug: string;
    type: string;
    description?: string | null;
    originalPrice?: number | null;
    offerPrice: number;
    startDate?: string | null;
    endDate?: string | null;
    isActive: boolean;
    isFeatured: boolean;
    badgeText?: string | null;
    createdAt?: string;

    package?: {
        id: string;
        name: string;
        slug: string;
    } | null;
};

type OffersResponse = {
    success?: boolean;
    data?: Offer[];
    offers?: Offer[];
    total?: number;
    page?: number;
    limit?: number;
    totalPages?: number;
    message?: string;
};

const ITEMS_PER_PAGE = 10;

const formatPrice = (price: number | null | undefined) => {
    if (price === null || price === undefined) {
        return "—";
    }

    return `₹${price.toLocaleString("en-IN")}`;
};

const formatDate = (date: string | null | undefined) => {
    if (!date) {
        return "—";
    }

    return new Date(date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

const formatType = (type: string) => {
    return type
        .replace(/_/g, " ")
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase());
};

export default function OffersPage() {
    const [offers, setOffers] = useState<Offer[]>([]);
    const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    const [error, setError] = useState("");

    const fetchOffers = async () => {
        try {
            setLoading(true);
            setError("");

            const params = new URLSearchParams();

            params.set("page", String(page));
            params.set("limit", String(ITEMS_PER_PAGE));

            if (search.trim()) {
                params.set("search", search.trim());
            }

            const response = await fetch(
                `/api/admin/get-all-offers?${params.toString()}`
            );

            const result: OffersResponse =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message ||
                    "Failed to fetch offers"
                );
            }

            const offerData = Array.isArray(result.data)
                ? result.data
                : Array.isArray(result.offers)
                    ? result.offers
                    : [];

            setOffers(offerData);

            setTotal(result.total ?? offerData.length);

            setTotalPages(
                result.totalPages ??
                Math.max(
                    1,
                    Math.ceil(
                        (result.total ??
                            offerData.length) /
                        ITEMS_PER_PAGE
                    )
                )
            );
        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "Failed to fetch offers"
            );

            setOffers([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOffers();
    }, [page, search]);

    const handleSearch = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearch(event.target.value);
        setPage(1);
    };

    const handleDelete = async (id: string) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this offer?"
        );

        if (!confirmed) {
            return;
        }

        try {
            setDeletingId(id);
            setError("");

            const response = await fetch(
                `/api/admin/offers/${id}`,
                {
                    method: "DELETE",
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message ||
                    "Failed to delete offer"
                );
            }

            if (
                offers.length === 1 &&
                page > 1
            ) {
                setPage((current) =>
                    Math.max(1, current - 1)
                );
            } else {
                fetchOffers();
            }
        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "Failed to delete offer"
            );
        } finally {
            setDeletingId(null);
        }
    };

    return (
        <main className="w-full p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-6">
                {/* HEADER */}

                <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                            Offers
                        </h1>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Manage promotional offers for
                            your travel packages.
                        </p>
                    </div>

                    <Button

                        className="w-full sm:w-auto"
                    >
                        <Link href="/offers/create">
                            <Plus className="mr-2 h-4 w-4" />
                            Create Offer
                        </Link>
                    </Button>
                </section>

                {/* SEARCH */}

                <section className="rounded-xl border bg-white p-4 shadow-sm">
                    <div className="relative w-full sm:max-w-md">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            value={search}
                            onChange={handleSearch}
                            placeholder="Search offers..."
                            className="pl-9"
                        />
                    </div>
                </section>

                {/* ERROR */}

                {error && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                        {error}
                    </div>
                )}

                {/* DESKTOP TABLE */}

                <section className="hidden overflow-hidden rounded-xl border bg-white shadow-sm md:block">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1000px]">
                            <thead className="border-b bg-neutral-50">
                                <tr>
                                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        Offer
                                    </th>

                                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        Package
                                    </th>

                                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        Type
                                    </th>

                                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        Price
                                    </th>

                                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        Period
                                    </th>

                                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        Status
                                    </th>

                                    <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y">
                                {loading ? (
                                    <tr>
                                        <td
                                            colSpan={7}
                                            className="px-5 py-16 text-center"
                                        >
                                            <Loader2 className="mx-auto h-6 w-6 animate-spin text-primary" />

                                            <p className="mt-2 text-sm text-muted-foreground">
                                                Loading offers...
                                            </p>
                                        </td>
                                    </tr>
                                ) : offers.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan={7}
                                            className="px-5 py-16 text-center"
                                        >
                                            <p className="font-medium text-neutral-900">
                                                No offers found
                                            </p>

                                            <p className="mt-1 text-sm text-muted-foreground">
                                                Create your first
                                                offer to get
                                                started.
                                            </p>
                                        </td>
                                    </tr>
                                ) : (
                                    offers.map((offer) => (
                                        <tr
                                            key={offer.id}
                                            className="transition hover:bg-neutral-50"
                                        >
                                            {/* OFFER */}

                                            <td className="px-5 py-4">
                                                <div className="flex items-start gap-3">
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                        <Star className="h-4 w-4" />
                                                    </div>

                                                    <div className="min-w-0">
                                                        <div className="flex items-center gap-2">
                                                            <p className="max-w-[220px] truncate font-medium text-neutral-900">
                                                                {
                                                                    offer.title
                                                                }
                                                            </p>

                                                            {offer.isFeatured && (
                                                                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                                                                    Featured
                                                                </span>
                                                            )}
                                                        </div>

                                                        {offer.badgeText && (
                                                            <p className="mt-1 text-xs text-muted-foreground">
                                                                {
                                                                    offer.badgeText
                                                                }
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>

                                            {/* PACKAGE */}

                                            <td className="px-5 py-4">
                                                <div className="max-w-[180px]">
                                                    <p className="truncate text-sm font-medium text-neutral-900">
                                                        {offer
                                                            .package
                                                            ?.name ||
                                                            "No package"}
                                                    </p>

                                                    {offer.package && (
                                                        <p className="mt-1 truncate text-xs text-muted-foreground">
                                                            {
                                                                offer
                                                                    .package
                                                                    .slug
                                                            }
                                                        </p>
                                                    )}
                                                </div>
                                            </td>

                                            {/* TYPE */}

                                            <td className="px-5 py-4">
                                                <span className="inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                                                    {formatType(
                                                        offer.type
                                                    )}
                                                </span>
                                            </td>

                                            {/* PRICE */}

                                            <td className="px-5 py-4">
                                                <div>
                                                    {offer.originalPrice !==
                                                        null &&
                                                        offer.originalPrice !==
                                                        undefined && (
                                                            <p className="text-xs text-muted-foreground line-through">
                                                                {formatPrice(
                                                                    offer.originalPrice
                                                                )}
                                                            </p>
                                                        )}

                                                    <p className="font-semibold text-primary">
                                                        {formatPrice(
                                                            offer.offerPrice
                                                        )}
                                                    </p>
                                                </div>
                                            </td>

                                            {/* PERIOD */}

                                            <td className="px-5 py-4">
                                                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                                                    <Calendar className="mt-0.5 h-3.5 w-3.5 shrink-0" />

                                                    <div>
                                                        <p>
                                                            {formatDate(
                                                                offer.startDate
                                                            )}
                                                        </p>

                                                        <p>
                                                            {formatDate(
                                                                offer.endDate
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* STATUS */}

                                            <td className="px-5 py-4">
                                                <span
                                                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${offer.isActive
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-red-100 text-red-700"
                                                        }`}
                                                >
                                                    {offer.isActive
                                                        ? "Active"
                                                        : "Inactive"}
                                                </span>
                                            </td>

                                            {/* ACTIONS */}

                                            <td className="px-5 py-4">
                                                <div className="flex justify-end gap-2">
                                                    <Button

                                                        variant="outline"
                                                        size="icon"
                                                        title="Edit offer"
                                                    >
                                                        <Link
                                                            href={`/offers/edit/${offer.id}`}
                                                        >
                                                            <Edit className="h-4 w-4" />
                                                        </Link>
                                                    </Button>

                                                    <Button

                                                        variant="outline"
                                                        size="icon"
                                                        title="View offer"
                                                    >
                                                        <Link
                                                            href={`/offers/${offer.slug}`}
                                                            target="_blank"
                                                        >
                                                            <Eye className="h-4 w-4" />
                                                        </Link>
                                                    </Button>

                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        size="icon"
                                                        title="Delete offer"
                                                        disabled={
                                                            deletingId ===
                                                            offer.id
                                                        }
                                                        onClick={() =>
                                                            handleDelete(
                                                                offer.id
                                                            )
                                                        }
                                                        className="text-red-500 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                                                    >
                                                        {deletingId ===
                                                            offer.id ? (
                                                            <Loader2 className="h-4 w-4 animate-spin" />
                                                        ) : (
                                                            <Trash2 className="h-4 w-4" />
                                                        )}
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* MOBILE CARDS */}

                <section className="space-y-4 md:hidden">
                    {loading ? (
                        <div className="rounded-xl border bg-white px-5 py-16 text-center shadow-sm">
                            <Loader2 className="mx-auto h-6 w-6 animate-spin text-primary" />

                            <p className="mt-2 text-sm text-muted-foreground">
                                Loading offers...
                            </p>
                        </div>
                    ) : offers.length === 0 ? (
                        <div className="rounded-xl border bg-white px-5 py-16 text-center shadow-sm">
                            <p className="font-medium text-neutral-900">
                                No offers found
                            </p>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Create your first offer to
                                get started.
                            </p>
                        </div>
                    ) : (
                        offers.map((offer) => (
                            <div
                                key={offer.id}
                                className="rounded-xl border bg-white p-4 shadow-sm"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex min-w-0 items-start gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <Star className="h-4 w-4" />
                                        </div>

                                        <div className="min-w-0">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <h3 className="truncate font-semibold text-neutral-900">
                                                    {
                                                        offer.title
                                                    }
                                                </h3>

                                                {offer.isFeatured && (
                                                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                                                        Featured
                                                    </span>
                                                )}
                                            </div>

                                            <p className="mt-1 text-xs text-muted-foreground">
                                                {offer
                                                    .package
                                                    ?.name ||
                                                    "No package"}
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium ${offer.isActive
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {offer.isActive
                                            ? "Active"
                                            : "Inactive"}
                                    </span>
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-3 rounded-lg bg-neutral-50 p-3">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                            Type
                                        </p>

                                        <p className="mt-1 text-sm font-medium text-neutral-800">
                                            {formatType(
                                                offer.type
                                            )}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                            Offer Price
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-primary">
                                            {formatPrice(
                                                offer.offerPrice
                                            )}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                            Start Date
                                        </p>

                                        <p className="mt-1 text-sm text-neutral-800">
                                            {formatDate(
                                                offer.startDate
                                            )}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                            End Date
                                        </p>

                                        <p className="mt-1 text-sm text-neutral-800">
                                            {formatDate(
                                                offer.endDate
                                            )}
                                        </p>
                                    </div>
                                </div>

                                {offer.originalPrice !==
                                    null &&
                                    offer.originalPrice !==
                                    undefined && (
                                        <div className="mt-3 text-xs text-muted-foreground">
                                            Original price:{" "}
                                            <span className="line-through">
                                                {formatPrice(
                                                    offer.originalPrice
                                                )}
                                            </span>
                                        </div>
                                    )}

                                <div className="mt-4 flex gap-2">
                                    <Button

                                        variant="outline"
                                        className="flex-1"
                                    >
                                        <Link
                                            href={`/offers/edit/${offer.id}`}
                                        >
                                            <Edit className="mr-2 h-4 w-4" />
                                            Edit
                                        </Link>
                                    </Button>

                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="icon"
                                        disabled={
                                            deletingId ===
                                            offer.id
                                        }
                                        onClick={() =>
                                            handleDelete(
                                                offer.id
                                            )
                                        }
                                        className="text-red-500 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                                    >
                                        {deletingId ===
                                            offer.id ? (
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                        ) : (
                                            <Trash2 className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                            </div>
                        ))
                    )}
                </section>

                {/* PAGINATION */}

                {!loading && offers.length > 0 && (
                    <section className="flex flex-col gap-3 rounded-xl border bg-white px-4 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-muted-foreground">
                            Showing{" "}
                            <span className="font-medium text-neutral-900">
                                {(page - 1) *
                                    ITEMS_PER_PAGE +
                                    1}
                            </span>{" "}
                            to{" "}
                            <span className="font-medium text-neutral-900">
                                {Math.min(
                                    page *
                                    ITEMS_PER_PAGE,
                                    total
                                )}
                            </span>{" "}
                            of{" "}
                            <span className="font-medium text-neutral-900">
                                {total}
                            </span>{" "}
                            offers
                        </p>

                        <div className="flex items-center justify-between gap-2 sm:justify-end">
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                disabled={page <= 1}
                                onClick={() =>
                                    setPage((current) =>
                                        Math.max(
                                            1,
                                            current - 1
                                        )
                                    )
                                }
                            >
                                <ChevronLeft className="mr-1 h-4 w-4" />
                                Previous
                            </Button>

                            <span className="min-w-[80px] text-center text-sm text-muted-foreground">
                                Page {page} of{" "}
                                {totalPages}
                            </span>

                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                disabled={
                                    page >= totalPages
                                }
                                onClick={() =>
                                    setPage((current) =>
                                        Math.min(
                                            totalPages,
                                            current + 1
                                        )
                                    )
                                }
                            >
                                Next
                                <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}