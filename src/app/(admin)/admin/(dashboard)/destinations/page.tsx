"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Search,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type DestinationImage = {
    url: string;
    publicId: string;
};

type Destination = {
    id: string;
    name: string;
    heroImage: DestinationImage | null;
    budget: string | null;
    createdAt: string;
    totalPackages: number;
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
    data: Destination[];
    pagination: Pagination;
    message?: string;
};

export default function AdminPage() {
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [pagination, setPagination] = useState<Pagination | null>(null);

    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [error, setError] = useState("");

    const [page, setPage] = useState(1);

    const limit = 10;

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search.trim());
            setPage(1);
        }, 400);

        return () => clearTimeout(timer);
    }, [search]);

    const fetchDestinations = useCallback(async () => {
        try {
            setLoading(true);
            setError("");

            const params = new URLSearchParams({
                page: String(page),
                limit: String(limit),
            });

            if (debouncedSearch) {
                params.set("search", debouncedSearch);
            }

            const response = await fetch(
                `/api/admin/get-all-destinations?${params.toString()}`,
                {
                    method: "GET",
                    cache: "no-store",
                }
            );

            const result: ApiResponse = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Failed to fetch destinations"
                );
            }

            setDestinations(result.data);
            setPagination(result.pagination);
        } catch (err) {
            console.error("Fetch destinations error:", err);

            setDestinations([]);
            setPagination(null);

            setError(
                err instanceof Error
                    ? err.message
                    : "Failed to fetch destinations"
            );
        } finally {
            setLoading(false);
        }
    }, [page, debouncedSearch]);

    useEffect(() => {
        fetchDestinations();
    }, [fetchDestinations]);

    const handleDelete = async (id: string) => {
        try {
            setDeletingId(id);
            setError("");

            const response = await fetch(`/api/admin/delete-destination/${id}`, {
                method: "DELETE",
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Failed to delete destination"
                );
            }

            if (
                pagination &&
                destinations.length === 1 &&
                pagination.page > 1
            ) {
                setPage((currentPage) => currentPage - 1);
            } else {
                await fetchDestinations();
            }
        } catch (err) {
            console.error("Delete destination error:", err);

            setError(
                err instanceof Error
                    ? err.message
                    : "Failed to delete destination"
            );
        } finally {
            setDeletingId(null);
        }
    };

    const formatDate = (date: string) => {
        return new Intl.DateTimeFormat("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }).format(new Date(date));
    };

    const getPageNumbers = () => {
        if (!pagination) {
            return [];
        }

        const { page: currentPage, totalPages } = pagination;

        if (totalPages <= 5) {
            return Array.from(
                { length: totalPages },
                (_, index) => index + 1
            );
        }

        if (currentPage <= 3) {
            return [1, 2, 3, 4, 5];
        }

        if (currentPage >= totalPages - 2) {
            return [
                totalPages - 4,
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages,
            ];
        }

        return [
            currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2,
        ];
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                            Destinations
                        </h1>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Manage all travel destinations.
                        </p>
                    </div>

                    <Button  >
                        <Link href="/admin/destinations/create">
                            Add Destination
                        </Link>
                    </Button>
                </div>

                {/* Search */}
                <div className="flex w-full sm:max-w-md">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            value={search}
                            onChange={(event) =>
                                setSearch(event.target.value)
                            }
                            placeholder="Search destination by name..."
                            className="h-10 pl-9"
                        />
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                        {error}
                    </div>
                )}

                {/* Table */}
                <div className="overflow-hidden rounded-xl border bg-background">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="min-w-[280px]">
                                        Destination
                                    </TableHead>

                                    <TableHead className="min-w-[160px]">
                                        Budget
                                    </TableHead>

                                    <TableHead className="text-center">
                                        Packages
                                    </TableHead>

                                    <TableHead className="min-w-[150px]">
                                        Created
                                    </TableHead>

                                    <TableHead className="w-[140px] text-right">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {loading ? (
                                    Array.from({ length: 5 }).map(
                                        (_, index) => (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-12 w-16 animate-pulse rounded-md bg-muted" />

                                                        <div className="h-4 w-32 animate-pulse rounded bg-muted" />
                                                    </div>
                                                </TableCell>

                                                <TableCell>
                                                    <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                                                </TableCell>

                                                <TableCell>
                                                    <div className="mx-auto h-4 w-8 animate-pulse rounded bg-muted" />
                                                </TableCell>

                                                <TableCell>
                                                    <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                                                </TableCell>

                                                <TableCell>
                                                    <div className="ml-auto h-8 w-20 animate-pulse rounded bg-muted" />
                                                </TableCell>
                                            </TableRow>
                                        )
                                    )
                                ) : destinations.length === 0 ? (
                                    <TableRow>
                                        <TableCell
                                            colSpan={5}
                                            className="h-32 text-center"
                                        >
                                            <div className="flex flex-col items-center justify-center gap-1">
                                                <p className="font-medium">
                                                    No destinations found
                                                </p>

                                                <p className="text-sm text-muted-foreground">
                                                    {debouncedSearch
                                                        ? "Try a different destination name."
                                                        : "Create your first destination."}
                                                </p>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    destinations.map((destination) => (
                                        <TableRow key={destination.id}>
                                            {/* Destination */}
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md bg-muted">
                                                        {destination.heroImage ? (
                                                            <Image
                                                                src={
                                                                    destination.heroImage.url
                                                                }
                                                                alt={
                                                                    destination.name
                                                                }
                                                                fill
                                                                sizes="64px"
                                                                className="object-cover"
                                                            />
                                                        ) : (
                                                            <div className="flex h-full w-full items-center justify-center text-[10px] text-muted-foreground">
                                                                No image
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="min-w-0">
                                                        <p className="truncate font-medium">
                                                            {
                                                                destination.name
                                                            }
                                                        </p>

                                                        <p className="text-xs text-muted-foreground">
                                                            {destination.id}
                                                        </p>
                                                    </div>
                                                </div>
                                            </TableCell>

                                            {/* Budget */}
                                            <TableCell>
                                                <span className="text-sm">
                                                    {destination.budget ||
                                                        "Not specified"}
                                                </span>
                                            </TableCell>

                                            {/* Packages */}
                                            <TableCell className="text-center">
                                                <span className="font-medium">
                                                    {
                                                        destination.totalPackages
                                                    }
                                                </span>
                                            </TableCell>

                                            {/* Created */}
                                            <TableCell>
                                                <span className="text-sm text-muted-foreground">
                                                    {formatDate(
                                                        destination.createdAt
                                                    )}
                                                </span>
                                            </TableCell>

                                            {/* Actions */}
                                            <TableCell>
                                                <div className="flex items-center justify-end gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="icon"

                                                        title="Edit destination"
                                                    >
                                                        <Link
                                                            href={`/admin/destinations/${destination.id}/edit`}
                                                        >
                                                            <Pencil className="h-4 w-4" />
                                                        </Link>
                                                    </Button>

                                                    <AlertDialog>
                                                        <AlertDialogTrigger

                                                        >
                                                            <Button
                                                                variant="destructive"
                                                                size="icon"
                                                                disabled={
                                                                    deletingId ===
                                                                    destination.id
                                                                }
                                                                title="Delete destination"
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </AlertDialogTrigger>

                                                        <AlertDialogContent>
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle>
                                                                    Delete{" "}
                                                                    {
                                                                        destination.name
                                                                    }
                                                                    ?
                                                                </AlertDialogTitle>

                                                                <AlertDialogDescription>
                                                                    This action
                                                                    cannot be
                                                                    undone.
                                                                    The
                                                                    destination
                                                                    and its
                                                                    related
                                                                    data may be
                                                                    permanently
                                                                    removed.
                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>

                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel>
                                                                    Cancel
                                                                </AlertDialogCancel>

                                                                <AlertDialogAction
                                                                    onClick={() =>
                                                                        handleDelete(
                                                                            destination.id
                                                                        )
                                                                    }
                                                                >
                                                                    {deletingId ===
                                                                        destination.id
                                                                        ? "Deleting..."
                                                                        : "Delete"}
                                                                </AlertDialogAction>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                {/* Pagination */}
                {!loading &&
                    pagination &&
                    pagination.totalPages > 0 && (
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm text-muted-foreground">
                                Showing{" "}
                                <span className="font-medium text-foreground">
                                    {(pagination.page - 1) *
                                        pagination.limit +
                                        1}
                                </span>{" "}
                                to{" "}
                                <span className="font-medium text-foreground">
                                    {Math.min(
                                        pagination.page * pagination.limit,
                                        pagination.total
                                    )}
                                </span>{" "}
                                of{" "}
                                <span className="font-medium text-foreground">
                                    {pagination.total}
                                </span>{" "}
                                destinations
                            </p>

                            <div className="flex items-center justify-end gap-1">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    disabled={!pagination.hasPreviousPage}
                                    onClick={() =>
                                        setPage((currentPage) =>
                                            Math.max(1, currentPage - 1)
                                        )
                                    }
                                    title="Previous page"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>

                                {getPageNumbers().map((pageNumber) => (
                                    <Button
                                        key={pageNumber}
                                        variant={
                                            pageNumber === pagination.page
                                                ? "default"
                                                : "outline"
                                        }
                                        size="icon"
                                        onClick={() =>
                                            setPage(pageNumber)
                                        }
                                    >
                                        {pageNumber}
                                    </Button>
                                ))}

                                <Button
                                    variant="outline"
                                    size="icon"
                                    disabled={!pagination.hasNextPage}
                                    onClick={() =>
                                        setPage((currentPage) =>
                                            Math.min(
                                                pagination.totalPages,
                                                currentPage + 1
                                            )
                                        )
                                    }
                                    title="Next page"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}
