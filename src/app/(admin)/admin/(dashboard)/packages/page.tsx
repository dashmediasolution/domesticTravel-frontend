"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import {
    CalendarDays,
    ChevronLeft,
    ChevronRight,
    Clock3,
    Edit,
    Eye,
    Package,
    Plus,
    Search,
    Trash2,
    Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type PackageItem = {
    id: string;
    name: string;
    slug: string;
    category: string | null;

    destinationId: string;

    heroImage: {
        url: string;
        publicId: string;
    } | null;

    originalPrice: number | null;
    offerPrice: number | null;
    discount: number | null;
    saveAmount: number | null;

    duration: string | null;
    groupSize: string | null;

    isPublished: boolean;
    isFeatured: boolean;

    createdAt: string;
    updatedAt: string;
};

type Pagination = {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
};

type ApiResponse = {
    success: boolean;
    data: PackageItem[];
    pagination: Pagination;
    message?: string;
};

const LIMIT = 10;

export default function PackagesPage() {
    const [packages, setPackages] = useState<PackageItem[]>([]);
    const [pagination, setPagination] =
        useState<Pagination | null>(null);

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [deleteDialogOpen, setDeleteDialogOpen] =
        useState(false);

    const [selectedPackage, setSelectedPackage] =
        useState<PackageItem | null>(null);

    const [deleting, setDeleting] = useState(false);

    const fetchPackages = useCallback(
        async (page = 1, searchValue = search) => {
            try {
                setLoading(true);
                setError("");

                const params = new URLSearchParams();

                params.set("page", String(page));
                params.set("limit", String(LIMIT));

                if (searchValue.trim()) {
                    params.set(
                        "search",
                        searchValue.trim()
                    );
                }

                const response = await fetch(
                    `/api/admin/get-all-packages?${params.toString()}`,
                    {
                        cache: "no-store",
                    }
                );

                const result: ApiResponse =
                    await response.json();

                if (!response.ok || !result.success) {
                    throw new Error(
                        result.message ||
                            "Failed to fetch packages"
                    );
                }

                setPackages(result.data);
                setPagination(result.pagination);
            } catch (error) {
                console.error(
                    "FETCH_PACKAGES_ERROR:",
                    error
                );

                setError(
                    error instanceof Error
                        ? error.message
                        : "Failed to fetch packages"
                );
            } finally {
                setLoading(false);
            }
        },
        [search]
    );

    useEffect(() => {
        fetchPackages(1, "");
    }, [fetchPackages]);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchPackages(1, search);
        }, 400);

        return () => clearTimeout(timer);
    }, [search, fetchPackages]);

    const handlePrevious = () => {
        if (
            !pagination ||
            !pagination.hasPreviousPage
        ) {
            return;
        }

        fetchPackages(
            pagination.page - 1,
            search
        );
    };

    const handleNext = () => {
        if (
            !pagination ||
            !pagination.hasNextPage
        ) {
            return;
        }

        fetchPackages(
            pagination.page + 1,
            search
        );
    };

    const formatPrice = (
        price: number | null
    ) => {
        if (
            price === null ||
            price === undefined
        ) {
            return "—";
        }

        return `₹${price.toLocaleString("en-IN")}`;
    };

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }
        );
    };

    const openDeleteDialog = (
        packageItem: PackageItem
    ) => {
        setSelectedPackage(packageItem);
        setDeleteDialogOpen(true);
    };

    const handleDelete = async () => {
        if (!selectedPackage || deleting) {
            return;
        }

        try {
            setDeleting(true);
            setError("");

            const response = await fetch(
                `/api/admin/delete-package/${selectedPackage.id}`,
                {
                    method: "DELETE",
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message ||
                        "Failed to delete package"
                );
            }

            setDeleteDialogOpen(false);
            setSelectedPackage(null);

            const currentPage =
                pagination?.page || 1;

            const shouldGoToPreviousPage =
                packages.length === 1 &&
                currentPage > 1;

            if (shouldGoToPreviousPage) {
                await fetchPackages(
                    currentPage - 1,
                    search
                );
            } else {
                await fetchPackages(
                    currentPage,
                    search
                );
            }
        } catch (error) {
            console.error(
                "DELETE_PACKAGE_ERROR:",
                error
            );

            setError(
                error instanceof Error
                    ? error.message
                    : "Failed to delete package"
            );
        } finally {
            setDeleting(false);
        }
    };

    return (
        <div className="space-y-6 p-4 md:p-6">
            {/* Header */}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">
                        Packages
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Manage all your travel packages.
                    </p>
                </div>

                <Button  >
                    <Link
                        href="/admin/packages/create-package"
                        className="flex items-center justify-center"
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Package
                    </Link>
                </Button>
            </div>

            {/* Search */}

            <div className="flex flex-col gap-3 rounded-xl border bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative w-full sm:max-w-md">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                    <Input
                        value={search}
                        onChange={(event) =>
                            setSearch(
                                event.target.value
                            )
                        }
                        placeholder="Search package name..."
                        className="pl-9"
                    />
                </div>

                {pagination && (
                    <p className="text-sm text-muted-foreground">
                        {pagination.total}{" "}
                        {pagination.total === 1
                            ? "package"
                            : "packages"}
                    </p>
                )}
            </div>

            {/* Error */}

            {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                    {error}
                </div>
            )}

            {/* Table */}

            <div className="overflow-hidden rounded-xl border bg-white">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1050px] text-sm">
                        <thead>
                            <tr className="border-b bg-muted/40">
                                <th className="px-4 py-3 text-left font-semibold">
                                    Package
                                </th>

                                <th className="px-4 py-3 text-left font-semibold">
                                    Price
                                </th>

                                <th className="px-4 py-3 text-left font-semibold">
                                    Duration
                                </th>

                                <th className="px-4 py-3 text-left font-semibold">
                                    Group
                                </th>

                                <th className="px-4 py-3 text-left font-semibold">
                                    Status
                                </th>

                                <th className="px-4 py-3 text-left font-semibold">
                                    Created
                                </th>

                                <th className="px-4 py-3 text-right font-semibold">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {loading ? (
                                Array.from({
                                    length: 6,
                                }).map((_, index) => (
                                    <tr
                                        key={index}
                                        className="border-b last:border-0"
                                    >
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-14 w-20 animate-pulse rounded-lg bg-muted" />

                                                <div className="space-y-2">
                                                    <div className="h-4 w-40 animate-pulse rounded bg-muted" />

                                                    <div className="h-3 w-24 animate-pulse rounded bg-muted" />
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-4 py-4">
                                            <div className="h-4 w-20 animate-pulse rounded bg-muted" />
                                        </td>

                                        <td className="px-4 py-4">
                                            <div className="h-4 w-20 animate-pulse rounded bg-muted" />
                                        </td>

                                        <td className="px-4 py-4">
                                            <div className="h-4 w-16 animate-pulse rounded bg-muted" />
                                        </td>

                                        <td className="px-4 py-4">
                                            <div className="h-5 w-16 animate-pulse rounded-full bg-muted" />
                                        </td>

                                        <td className="px-4 py-4">
                                            <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                                        </td>

                                        <td className="px-4 py-4">
                                            <div className="ml-auto h-8 w-20 animate-pulse rounded bg-muted" />
                                        </td>
                                    </tr>
                                ))
                            ) : packages.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={7}
                                        className="px-4 py-16 text-center"
                                    >
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                                                <Package className="h-6 w-6 text-muted-foreground" />
                                            </div>

                                            <h3 className="font-semibold">
                                                No packages found
                                            </h3>

                                            <p className="mt-1 text-sm text-muted-foreground">
                                                {search
                                                    ? "Try a different package name."
                                                    : "Create your first travel package."}
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                packages.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="border-b transition-colors hover:bg-muted/20 last:border-0"
                                    >
                                        {/* Package */}

                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                                                    {item.heroImage
                                                        ?.url ? (
                                                        <Image
                                                            src={
                                                                item
                                                                    .heroImage
                                                                    .url
                                                            }
                                                            alt={
                                                                item.name
                                                            }
                                                            fill
                                                            sizes="80px"
                                                            className="object-cover"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full w-full items-center justify-center">
                                                            <Package className="h-5 w-5 text-muted-foreground" />
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="max-w-[280px] truncate font-semibold">
                                                        {
                                                            item.name
                                                        }
                                                    </p>

                                                    {item.category && (
                                                        <p className="mt-1 text-xs text-muted-foreground">
                                                            {
                                                                item.category
                                                            }
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </td>

                                        {/* Price */}

                                        <td className="px-4 py-4">
                                            <p className="font-semibold">
                                                {formatPrice(
                                                    item.originalPrice
                                                )}
                                            </p>
                                        </td>

                                        {/* Duration */}

                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Clock3 className="h-4 w-4" />

                                                <span>
                                                    {item.duration ||
                                                        "—"}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Group */}

                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Users className="h-4 w-4" />

                                                <span>
                                                    {item.groupSize ||
                                                        "—"}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Status */}

                                        <td className="px-4 py-4">
                                            <div className="flex flex-col items-start gap-1">
                                                <span
                                                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                                                        item.isPublished
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-gray-100 text-gray-600"
                                                    }`}
                                                >
                                                    {item.isPublished
                                                        ? "Published"
                                                        : "Draft"}
                                                </span>

                                                {item.isFeatured && (
                                                    <span className="text-[11px] font-medium text-primary">
                                                        Featured
                                                    </span>
                                                )}
                                            </div>
                                        </td>

                                        {/* Created */}

                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <CalendarDays className="h-4 w-4" />

                                                <span>
                                                    {formatDate(
                                                        item.createdAt
                                                    )}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Actions */}

                                        <td className="px-4 py-4">
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    title="View package"
                                                     
                                                >
                                                    <Link
                                                        href={`/package/${item.slug}`}
                                                        target="_blank"
                                                    >
                                                        <Eye className="h-4 w-4" />
                                                    </Link>
                                                </Button>

                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    title="Edit package"
                                                     
                                                >
                                                    <Link
                                                        href={`/admin/packages/${item.id}/edit`}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Link>
                                                </Button>

                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    title="Delete package"
                                                    className="text-red-500 hover:bg-red-50 hover:text-red-600"
                                                    onClick={() =>
                                                        openDeleteDialog(
                                                            item
                                                        )
                                                    }
                                                    disabled={
                                                        deleting
                                                    }
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}

                {pagination &&
                    pagination.totalPages > 0 && (
                        <div className="flex flex-col gap-3 border-t px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm text-muted-foreground">
                                Showing{" "}
                                <span className="font-medium text-foreground">
                                    {Math.min(
                                        (pagination.page -
                                            1) *
                                            pagination.limit +
                                            1,
                                        pagination.total
                                    )}
                                </span>{" "}
                                to{" "}
                                <span className="font-medium text-foreground">
                                    {Math.min(
                                        pagination.page *
                                            pagination.limit,
                                        pagination.total
                                    )}
                                </span>{" "}
                                of{" "}
                                <span className="font-medium text-foreground">
                                    {pagination.total}
                                </span>
                            </p>

                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={
                                        handlePrevious
                                    }
                                    disabled={
                                        loading ||
                                        !pagination.hasPreviousPage
                                    }
                                >
                                    <ChevronLeft className="mr-1 h-4 w-4" />
                                    Previous
                                </Button>

                                <div className="flex h-9 min-w-9 items-center justify-center rounded-md border px-3 text-sm font-medium">
                                    {pagination.page}
                                </div>

                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleNext}
                                    disabled={
                                        loading ||
                                        !pagination.hasNextPage
                                    }
                                >
                                    Next
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}
            </div>

            {/* Delete Confirmation */}

            <AlertDialog
                open={deleteDialogOpen}
                onOpenChange={(open) => {
                    if (!deleting) {
                        setDeleteDialogOpen(open);

                        if (!open) {
                            setSelectedPackage(null);
                        }
                    }
                }}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Delete package?
                        </AlertDialogTitle>

                        <AlertDialogDescription>
                            Are you sure you want to delete{" "}
                            <span className="font-semibold text-foreground">
                                {selectedPackage?.name}
                            </span>
                            ? This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel
                            disabled={deleting}
                        >
                            Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                            onClick={handleDelete}
                            disabled={deleting}
                            className="bg-red-600 text-white hover:bg-red-700"
                        >
                            {deleting
                                ? "Deleting..."
                                : "Delete Package"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}