"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
    Loader2,
    MoreHorizontal,
    Plus,
    Search,
    Trash2,
} from "lucide-react";

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

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

type Banner = {
    id: string;
    title: string;
    imageUrl: string;
    targetType:
    | "DESTINATION"
    | "PACKAGE"
    | "OFFER"
    | "CUSTOM_URL";
    targetUrl: string;
    isActive: boolean;
    isFeatured: boolean;
    startDate: string | null;
    endDate: string | null;
    sortOrder: number;
};

type PaginationData = {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
};

const LIMIT = 10;

const formatTargetType = (
    value: Banner["targetType"]
) => {
    return value
        .replaceAll("_", " ")
        .toLowerCase()
        .replace(/\b\w/g, (char) =>
            char.toUpperCase()
        );
};

const formatDate = (
    value: string | null
) => {
    if (!value) {
        return "—";
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return "—";
    }

    return new Intl.DateTimeFormat(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }
    ).format(date);
};

export default function BannerTable() {
    const [banners, setBanners] = useState<
        Banner[]
    >([]);

    const [pagination, setPagination] =
        useState<PaginationData>({
            page: 1,
            limit: LIMIT,
            total: 0,
            totalPages: 0,
            hasNextPage: false,
            hasPreviousPage: false,
        });

    const [search, setSearch] =
        useState("");

    const [searchInput, setSearchInput] =
        useState("");

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    const [deleteBannerId, setDeleteBannerId] =
        useState<string | null>(null);
     const [deletingId, setDeletingId] =
        useState<string | null>(null);

    const fetchBanners = useCallback(
        async () => {
            try {
                setLoading(true);
                setError("");

                const params =
                    new URLSearchParams();

                params.set(
                    "page",
                    String(pagination.page)
                );

                params.set(
                    "limit",
                    String(LIMIT)
                );

                if (search) {
                    params.set(
                        "search",
                        search
                    );
                }

                const response =
                    await fetch(
                        `/api/admin/banners?${params.toString()}`,
                        {
                            method: "GET",
                            cache: "no-store",
                        }
                    );

                const result =
                    await response.json();

                if (!response.ok) {
                    throw new Error(
                        result?.message ||
                        "Failed to fetch banners"
                    );
                }

                setBanners(
                    result.data ?? []
                );

                setPagination(
                    result.pagination
                );
            } catch (error) {
                console.error(
                    "Fetch banners error:",
                    error
                );

                setError(
                    error instanceof Error
                        ? error.message
                        : "Failed to fetch banners"
                );
            } finally {
                setLoading(false);
            }
        },
        [
            pagination.page,
            search,
        ]
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearch(
                searchInput.trim()
            );
        }, 400);

        return () => {
            clearTimeout(timer);
        };
    }, [searchInput]);

    useEffect(() => {
        setPagination((previous) => {
            if (previous.page === 1) {
                return previous;
            }

            return {
                ...previous,
                page: 1,
            };
        });
    }, [search]);

    useEffect(() => {
        fetchBanners();
    }, [fetchBanners]);

    const handleDelete = async () => {
        if (!deleteBannerId) {
            return;
        }

        const id = deleteBannerId;

        try {
            setDeletingId(id);
            setError("");

            const response =
                await fetch(
                    `/api/admin/banners?id=${encodeURIComponent(id)}`,
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                    }
                );

            const result =
                await response.json();

            console.log(
                "Delete response:",
                response.status,
                result
            );

            if (
                !response.ok ||
                !result.success
            ) {
                throw new Error(
                    result?.message ||
                    "Failed to delete banner"
                );
            }

            setDeleteBannerId(null);

            await fetchBanners();
        } catch (error) {
            console.error(
                "Delete banner error:",
                error
            );

            setError(
                error instanceof Error
                    ? error.message
                    : "Failed to delete banner"
            );
        } finally {
            setDeletingId(null);
        }
    };

    const getPageNumbers = () => {
        const totalPages =
            pagination.totalPages;

        const currentPage =
            pagination.page;

        if (totalPages <= 5) {
            return Array.from(
                {
                    length: totalPages,
                },
                (_, index) =>
                    index + 1
            );
        }

        if (currentPage <= 3) {
            return [
                1,
                2,
                3,
                4,
                null,
                totalPages,
            ];
        }

        if (
            currentPage >=
            totalPages - 2
        ) {
            return [
                1,
                null,
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages,
            ];
        }

        return [
            1,
            null,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            null,
            totalPages,
        ];
    };

    return (
        <>
            <Card className="border-border/60 shadow-sm">
                <CardHeader className="space-y-4">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h2 className="text-lg font-semibold">
                                Banners
                            </h2>

                            <p className="text-sm text-muted-foreground">
                                Manage website banners
                                and promotional content.
                            </p>
                        </div>

                        <Button  >
                            <Link href="/admin/banners/create">
                                <Plus className="mr-2 h-4 w-4" />
                                Create Banner
                            </Link>
                        </Button>
                    </div>

                    <div className="relative w-full lg:max-w-sm">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            value={searchInput}
                            onChange={(event) =>
                                setSearchInput(
                                    event.target.value
                                )
                            }
                            placeholder="Search banners..."
                            className="pl-9"
                        />
                    </div>
                </CardHeader>

                <CardContent className="p-0">
                    {error && (
                        <div className="m-6 rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                            {error}
                        </div>
                    )}

                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[80px]">
                                        Image
                                    </TableHead>

                                    <TableHead>
                                        Banner
                                    </TableHead>

                                    <TableHead>
                                        Target
                                    </TableHead>

                                    <TableHead>
                                        Status
                                    </TableHead>

                                    <TableHead>
                                        Schedule
                                    </TableHead>

                                    <TableHead className="text-center">
                                        Order
                                    </TableHead>

                                    <TableHead className="w-[60px]" />
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {loading ? (
                                    Array.from({
                                        length: 6,
                                    }).map(
                                        (_, index) => (
                                            <TableRow
                                                key={
                                                    index
                                                }
                                            >
                                                <TableCell>
                                                    <div className="h-12 w-20 animate-pulse rounded-md bg-muted" />
                                                </TableCell>

                                                <TableCell>
                                                    <div className="space-y-2">
                                                        <div className="h-4 w-40 animate-pulse rounded bg-muted" />
                                                        <div className="h-3 w-24 animate-pulse rounded bg-muted" />
                                                    </div>
                                                </TableCell>

                                                <TableCell>
                                                    <div className="h-6 w-24 animate-pulse rounded-full bg-muted" />
                                                </TableCell>

                                                <TableCell>
                                                    <div className="h-6 w-16 animate-pulse rounded-full bg-muted" />
                                                </TableCell>

                                                <TableCell>
                                                    <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                                                </TableCell>

                                                <TableCell>
                                                    <div className="mx-auto h-4 w-8 animate-pulse rounded bg-muted" />
                                                </TableCell>

                                                <TableCell />
                                            </TableRow>
                                        )
                                    )
                                ) : banners.length ===
                                    0 ? (
                                    <TableRow>
                                        <TableCell
                                            colSpan={7}
                                            className="h-40 text-center"
                                        >
                                            <div className="flex flex-col items-center justify-center">
                                                <p className="font-medium">
                                                    No banners
                                                    found
                                                </p>

                                                <p className="mt-1 text-sm text-muted-foreground">
                                                    {search
                                                        ? "Try a different search."
                                                        : "Create your first banner to get started."}
                                                </p>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    banners.map(
                                        (
                                            banner
                                        ) => (
                                            <TableRow
                                                key={
                                                    banner.id
                                                }
                                            >
                                                <TableCell>
                                                    <div className="relative h-12 w-20 overflow-hidden rounded-md border bg-muted">
                                                        <Image
                                                            src={
                                                                banner.imageUrl
                                                            }
                                                            alt={
                                                                banner.title
                                                            }
                                                            fill
                                                            sizes="80px"
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </TableCell>

                                                <TableCell>
                                                    <div className="min-w-[180px]">
                                                        <p className="font-medium">
                                                            {
                                                                banner.title
                                                            }
                                                        </p>

                                                        {banner.isFeatured && (
                                                            <Badge
                                                                variant="secondary"
                                                                className="mt-1"
                                                            >
                                                                Featured
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </TableCell>

                                                <TableCell>
                                                    <div className="min-w-[180px]">
                                                        <Badge variant="outline">
                                                            {formatTargetType(
                                                                banner.targetType
                                                            )}
                                                        </Badge>

                                                        <p className="mt-1 max-w-[220px] truncate text-xs text-muted-foreground">
                                                            {
                                                                banner.targetUrl
                                                            }
                                                        </p>
                                                    </div>
                                                </TableCell>

                                                <TableCell>
                                                    {banner.isActive ? (
                                                        <Badge>
                                                            Active
                                                        </Badge>
                                                    ) : (
                                                        <Badge variant="secondary">
                                                            Inactive
                                                        </Badge>
                                                    )}
                                                </TableCell>

                                                <TableCell>
                                                    <div className="min-w-[120px] text-xs">
                                                        {banner.startDate ||
                                                            banner.endDate ? (
                                                            <>
                                                                <p>
                                                                    {formatDate(
                                                                        banner.startDate
                                                                    )}
                                                                </p>

                                                                <p className="text-muted-foreground">
                                                                    to{" "}
                                                                    {formatDate(
                                                                        banner.endDate
                                                                    )}
                                                                </p>
                                                            </>
                                                        ) : (
                                                            <span className="text-muted-foreground">
                                                                No schedule
                                                            </span>
                                                        )}
                                                    </div>
                                                </TableCell>

                                                <TableCell className="text-center">
                                                    {
                                                        banner.sortOrder
                                                    }
                                                </TableCell>

                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger  >
                                                            
                                                                <MoreHorizontal className="h-4 w-4 cursor-pointer"  />

                                                                <span className="sr-only">
                                                                    Open menu
                                                                </span>
                                                         </DropdownMenuTrigger>

                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuItem
                                                                disabled={deletingId === banner.id}
                                                                onClick={() => {
                                                                    console.log(
                                                                        "Delete clicked:",
                                                                        banner.id
                                                                    );

                                                                    setDeleteBannerId(
                                                                        banner.id
                                                                    );
                                                                }}
                                                                className="cursor-pointer text-destructive focus:text-destructive"
                                                            >
                                                                {deletingId === banner.id ? (
                                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                                ) : (
                                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                                )}

                                                                Delete
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>


                                                </TableCell>
                                            </TableRow>
                                        )
                                    )
                                )}
                            </TableBody>
                        </Table>
                    </div>

                    {!loading &&
                        pagination.totalPages >
                        0 && (
                            <div className="flex flex-col gap-4 border-t px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-sm text-muted-foreground">
                                    Showing{" "}
                                    {Math.min(
                                        (pagination.page -
                                            1) *
                                        pagination.limit +
                                        1,
                                        pagination.total
                                    )}{" "}
                                    to{" "}
                                    {Math.min(
                                        pagination.page *
                                        pagination.limit,
                                        pagination.total
                                    )}{" "}
                                    of{" "}
                                    {
                                        pagination.total
                                    }{" "}
                                    banners
                                </p>

                                {pagination.totalPages >
                                    1 && (
                                        <Pagination>
                                            <PaginationContent>
                                                <PaginationItem>
                                                    <PaginationPrevious
                                                        onClick={() => {
                                                            if (
                                                                pagination.hasPreviousPage
                                                            ) {
                                                                setPagination(
                                                                    (
                                                                        previous
                                                                    ) => ({
                                                                        ...previous,
                                                                        page:
                                                                            previous.page -
                                                                            1,
                                                                    })
                                                                );
                                                            }
                                                        }}
                                                        className={
                                                            !pagination.hasPreviousPage
                                                                ? "pointer-events-none opacity-50"
                                                                : ""
                                                        }
                                                    />
                                                </PaginationItem>

                                                {getPageNumbers().map(
                                                    (
                                                        page,
                                                        index
                                                    ) =>
                                                        page ===
                                                            null ? (
                                                            <PaginationItem
                                                                key={`ellipsis-${index}`}
                                                            >
                                                                <PaginationEllipsis />
                                                            </PaginationItem>
                                                        ) : (
                                                            <PaginationItem
                                                                key={
                                                                    page
                                                                }
                                                            >
                                                                <PaginationLink
                                                                    isActive={
                                                                        page ===
                                                                        pagination.page
                                                                    }
                                                                    onClick={() => {
                                                                        setPagination(
                                                                            (
                                                                                previous
                                                                            ) => ({
                                                                                ...previous,
                                                                                page,
                                                                            })
                                                                        );
                                                                    }}
                                                                >
                                                                    {
                                                                        page
                                                                    }
                                                                </PaginationLink>
                                                            </PaginationItem>
                                                        )
                                                )}

                                                <PaginationItem>
                                                    <PaginationNext
                                                        onClick={() => {
                                                            if (
                                                                pagination.hasNextPage
                                                            ) {
                                                                setPagination(
                                                                    (
                                                                        previous
                                                                    ) => ({
                                                                        ...previous,
                                                                        page:
                                                                            previous.page +
                                                                            1,
                                                                    })
                                                                );
                                                            }
                                                        }}
                                                        className={
                                                            !pagination.hasNextPage
                                                                ? "pointer-events-none opacity-50"
                                                                : ""
                                                        }
                                                    />
                                                </PaginationItem>
                                            </PaginationContent>
                                        </Pagination>
                                    )}
                            </div>
                        )}
                </CardContent>
            </Card>

            <AlertDialog
                open={
                    deleteBannerId !== null
                }
                onOpenChange={(open) => {
                    if (
                        !open &&
                        deletingId === null
                    ) {
                        setDeleteBannerId(
                            null
                        );
                    }
                }}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Delete banner?
                        </AlertDialogTitle>

                        <AlertDialogDescription>
                            This action cannot
                            be undone. The
                            banner and its
                            associated
                            Cloudinary image
                            will be permanently
                            deleted.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel
                            disabled={
                                deletingId !==
                                null
                            }
                        >
                            Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                            disabled={
                                deletingId !==
                                null
                            }
                            onClick={
                                handleDelete
                            }
                            className="bg-destructive text-destructive-foreground text-white cursor-pointer hover:bg-destructive/90"
                        >
                            {deletingId !==
                                null ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Deleting...
                                </>
                            ) : (
                                "Delete Banner"
                            )}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
