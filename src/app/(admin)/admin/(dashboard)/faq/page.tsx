"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
    Edit,
    Eye,
    Plus,
    Search,
    Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
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

type FAQItem = {
    id: string;
    question: string;
    answer: string;
    sortOrder: number;
    isActive: boolean;
    destinationId: string | null;
    packageId: string | null;
    destination: {
        id: string;
        name: string;
    } | null;
    package: {
        id: string;
        name: string;
    } | null;
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

export default function FAQsPage() {
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [pagination, setPagination] =
        useState<Pagination | null>(null);

    const [search, setSearch] = useState("");
    const [targetType, setTargetType] =
        useState("ALL");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [deleteDialogOpen, setDeleteDialogOpen] =
        useState(false);

    const [selectedFAQ, setSelectedFAQ] =
        useState<FAQItem | null>(null);

    const [deleting, setDeleting] = useState(false);

    const fetchFAQs = async (
        page = 1,
        currentSearch = search,
        currentTargetType = targetType
    ) => {
        try {
            setLoading(true);
            setError("");

            const params = new URLSearchParams();

            params.set("page", String(page));
            params.set("limit", "10");

            if (currentSearch.trim()) {
                params.set(
                    "search",
                    currentSearch.trim()
                );
            }

            if (currentTargetType !== "ALL") {
                params.set(
                    "targetType",
                    currentTargetType
                );
            }

            const response = await fetch(
                `/api/admin/faqs?${params.toString()}`,
                {
                    method: "GET",
                    cache: "no-store",
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message ||
                    "Failed to fetch FAQs"
                );
            }

            setFaqs(result.data || []);
            setPagination(
                result.pagination || null
            );
        } catch (error) {
            console.error(
                "FETCH_FAQS_ERROR:",
                error
            );

            setError(
                error instanceof Error
                    ? error.message
                    : "Failed to fetch FAQs"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchFAQs(
                1,
                search,
                targetType
            );
        }, 400);

        return () => clearTimeout(timer);
    }, [search, targetType]);

    const openDeleteDialog = (
        faq: FAQItem
    ) => {
        setSelectedFAQ(faq);
        setDeleteDialogOpen(true);
    };

    const handleDelete = async () => {
        if (!selectedFAQ || deleting) {
            return;
        }

        try {
            setDeleting(true);
            setError("");

            const response = await fetch(
                `/api/admin/faqs/${selectedFAQ.id}`,
                {
                    method: "DELETE",
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message ||
                    "Failed to delete FAQ"
                );
            }

            setDeleteDialogOpen(false);
            setSelectedFAQ(null);

            const currentPage =
                pagination?.page || 1;

            const shouldGoPrevious =
                faqs.length === 1 &&
                currentPage > 1;

            await fetchFAQs(
                shouldGoPrevious
                    ? currentPage - 1
                    : currentPage,
                search,
                targetType
            );
        } catch (error) {
            console.error(
                "DELETE_FAQ_ERROR:",
                error
            );

            setError(
                error instanceof Error
                    ? error.message
                    : "Failed to delete FAQ"
            );
        } finally {
            setDeleting(false);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-[#00383B]">
                        FAQs
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Manage frequently asked questions
                        for destinations and packages.
                    </p>
                </div>

                <Button
                     
                    className="w-full bg-[#2FC2B0] text-white hover:bg-[#25ae9e] sm:w-auto"
                >
                    <Link href="/admin/faq/create">
                        <Plus className="mr-2 h-4 w-4" />
                        Add FAQ
                    </Link>
                </Button>
            </div>

            {/* Search + Filter */}
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <div className="flex flex-col gap-3 md:flex-row">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            value={search}
                            onChange={(event) =>
                                setSearch(
                                    event.target.value
                                )
                            }
                            placeholder="Search FAQs..."
                            className="pl-9"
                        />
                    </div>

                    <Select
                        value={targetType}
                        onValueChange={(value) => {
                            if (value === "DESTINATION" || value === "PACKAGE") {
                                setTargetType(value);
                            }
                        }}
                    >
                        <SelectTrigger className="w-full md:w-[200px]">
                            <SelectValue placeholder="Filter by type" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="ALL">
                                All FAQs
                            </SelectItem>

                            <SelectItem value="DESTINATION">
                                Destination
                            </SelectItem>

                            <SelectItem value="PACKAGE">
                                Package
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Error */}
            {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                </div>
            )}

            {/* Table */}
            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px]">
                        <thead>
                            <tr className="border-b bg-[#F7F9F9]">
                                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    Question
                                </th>

                                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    For
                                </th>

                                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    Order
                                </th>

                                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    Status
                                </th>

                                <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {loading ? (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="px-5 py-16 text-center text-sm text-muted-foreground"
                                    >
                                        Loading FAQs...
                                    </td>
                                </tr>
                            ) : faqs.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="px-5 py-16 text-center"
                                    >
                                        <div className="mx-auto max-w-sm">
                                            <p className="font-medium text-[#00383B]">
                                                No FAQs found
                                            </p>

                                            <p className="mt-1 text-sm text-muted-foreground">
                                                Create your first
                                                FAQ for a
                                                destination or
                                                package.
                                            </p>

                                            <Button
                                                 
                                                className="mt-4 bg-[#2FC2B0] hover:bg-[#25ae9e]"
                                            >
                                                <Link href="/admin/faqs/create">
                                                    <Plus className="mr-2 h-4 w-4" />
                                                    Add FAQ
                                                </Link>
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                faqs.map((faq) => (
                                    <tr
                                        key={faq.id}
                                        className="border-b last:border-0 hover:bg-[#FAFCFC]"
                                    >
                                        <td className="max-w-[450px] px-5 py-4">
                                            <p className="line-clamp-2 text-sm font-medium text-[#00383B]">
                                                {
                                                    faq.question
                                                }
                                            </p>

                                            <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                                                {
                                                    faq.answer
                                                }
                                            </p>
                                        </td>

                                        <td className="px-5 py-4">
                                            {faq.destination ? (
                                                <div>
                                                    <Badge variant="secondary">
                                                        Destination
                                                    </Badge>

                                                    <p className="mt-1 text-sm font-medium">
                                                        {
                                                            faq
                                                                .destination
                                                                .name
                                                        }
                                                    </p>
                                                </div>
                                            ) : faq.package ? (
                                                <div>
                                                    <Badge variant="secondary">
                                                        Package
                                                    </Badge>

                                                    <p className="mt-1 text-sm font-medium">
                                                        {
                                                            faq
                                                                .package
                                                                .name
                                                        }
                                                    </p>
                                                </div>
                                            ) : (
                                                <span className="text-sm text-muted-foreground">
                                                    —
                                                </span>
                                            )}
                                        </td>

                                        <td className="px-5 py-4 text-center text-sm">
                                            {
                                                faq.sortOrder
                                            }
                                        </td>

                                        <td className="px-5 py-4 text-center">
                                            {faq.isActive ? (
                                                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                                                    Active
                                                </Badge>
                                            ) : (
                                                <Badge variant="secondary">
                                                    Inactive
                                                </Badge>
                                            )}
                                        </td>

                                        <td className="px-5 py-4">
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    title="Edit FAQ"

                                                >
                                                    <Link
                                                        href={`/admin/faqs/${faq.id}/edit`}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Link>
                                                </Button>

                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    title="Delete FAQ"
                                                    disabled={
                                                        deleting
                                                    }
                                                    onClick={() =>
                                                        openDeleteDialog(
                                                            faq
                                                        )
                                                    }
                                                    className="text-red-500 hover:bg-red-50 hover:text-red-600"
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
            </div>

            {/* Pagination */}
            {pagination &&
                pagination.totalPages > 0 && (
                    <div className="flex flex-col gap-3 rounded-2xl border bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-muted-foreground">
                            Showing page{" "}
                            <span className="font-medium text-foreground">
                                {pagination.page}
                            </span>{" "}
                            of{" "}
                            <span className="font-medium text-foreground">
                                {
                                    pagination.totalPages
                                }
                            </span>{" "}
                            ·{" "}
                            {pagination.total} FAQs
                        </p>

                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                disabled={
                                    !pagination.hasPreviousPage ||
                                    loading
                                }
                                onClick={() =>
                                    fetchFAQs(
                                        pagination.page -
                                        1,
                                        search,
                                        targetType
                                    )
                                }
                            >
                                Previous
                            </Button>

                            <Button
                                variant="outline"
                                disabled={
                                    !pagination.hasNextPage ||
                                    loading
                                }
                                onClick={() =>
                                    fetchFAQs(
                                        pagination.page +
                                        1,
                                        search,
                                        targetType
                                    )
                                }
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                )}

            {/* Delete Dialog */}
            <AlertDialog
                open={deleteDialogOpen}
                onOpenChange={(open) => {
                    if (!deleting) {
                        setDeleteDialogOpen(open);

                        if (!open) {
                            setSelectedFAQ(null);
                        }
                    }
                }}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Delete FAQ?
                        </AlertDialogTitle>

                        <AlertDialogDescription>
                            Are you sure you want to
                            delete this FAQ?
                            This action cannot be
                            undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    {selectedFAQ && (
                        <div className="rounded-lg bg-muted p-3 text-sm">
                            <p className="font-medium text-foreground">
                                {
                                    selectedFAQ.question
                                }
                            </p>
                        </div>
                    )}

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
                                : "Delete FAQ"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}