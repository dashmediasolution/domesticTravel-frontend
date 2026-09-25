"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    ChevronDown,
    Search,
    SlidersHorizontal,
    Tags,
    X,
} from "lucide-react";

import { useEffect, useState } from "react";

interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    featuredImage?: {
        url: string;
    } | null;
    publishedAt?: string | null;
    category?: {
        id: string;
        name: string;
    } | null;
    tags: string[];
}

interface Category {
    id: string;
    name: string;
    count: number;
}

interface ApiResponse {
    success: boolean;
    data: {
        blogs: Blog[];
        categories: Category[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
            hasNextPage: boolean;
            hasPreviousPage: boolean;
        };
    };
}

const limit = 12;

const popularDestinations = [
    "Rajasthan",
    "Manali",
    "Kerala",
    "Goa",
    "Ladakh",
];

export default function BlogsClient() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    const [search, setSearch] = useState("");
    const [searchInput, setSearchInput] = useState("");

    const [selectedCategory, setSelectedCategory] =
        useState("All Blogs");

    const [page, setPage] = useState(1);

    const [totalPages, setTotalPages] = useState(1);
    const [totalBlogs, setTotalBlogs] = useState(0);

    const [loading, setLoading] = useState(true);

    const [mobileFiltersOpen, setMobileFiltersOpen] =
        useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearch(searchInput);
            setPage(1);
        }, 400);

        return () => clearTimeout(timer);
    }, [searchInput]);

    useEffect(() => {
        fetchBlogs();
    }, [page, search, selectedCategory]);

    async function fetchBlogs() {
        try {
            setLoading(true);

            const params = new URLSearchParams();

            params.set("page", String(page));
            params.set("limit", String(limit));

            if (search) {
                params.set("search", search);
            }

            if (
                selectedCategory &&
                selectedCategory !== "All Blogs"
            ) {
                params.set(
                    "category",
                    selectedCategory
                );
            }

            const response = await fetch(
                `/api/blogs/search-blogs?${params.toString()}`,
                {
                    cache: "no-store",
                }
            );

            const result: ApiResponse =
                await response.json();

            if (!result.success) {
                throw new Error(
                    "Failed to fetch blogs"
                );
            }
            console.log(result)
            setBlogs(result.data.blogs);
            setCategories(result.data.categories);

            setTotalPages(
                result.data.pagination.totalPages
            );

            setTotalBlogs(
                result.data.pagination.total
            );
        } catch (error) {
            console.error(error);
            setBlogs([]);
        } finally {
            setLoading(false);
        }
    }

    function handleCategory(category: string) {
        setSelectedCategory(category);
        setPage(1);
        setMobileFiltersOpen(false);
    }

    function handleSearchSubmit(
        event: React.FormEvent
    ) {
        event.preventDefault();

        setSearch(searchInput);
        setPage(1);
    }

    function clearSearch() {
        setSearchInput("");
        setSearch("");
        setPage(1);
    }

    return (
        <main className="min-h-screen bg-white">
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="relative h-[420px] w-full sm:h-[450px] lg:h-[500px]">
                    <Image
                        src="/images/blog-Banner.png"
                        alt="Travel blogs"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />

 
                    <div className="absolute inset-0">
                        <div className="mx-auto flex h-full w-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">
                            <div className="max-w-2xl pt-8">
                                <p className="mb-2 font-serif text-sm italic text-white sm:text-base">
                                    Travel Inspiration
                                </p>

                                <h1 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                    Explore Our
                                    <br />
                                    Travel Blogs
                                </h1>

                                <p className="mt-5 max-w-xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
                                    Get inspired with travel
                                    stories, destination
                                    guides, tips and
                                    experiences from around
                                    the world.
                                </p>

                                <form
                                    onSubmit={
                                        handleSearchSubmit
                                    }
                                    className="mt-6 w-full max-w-xl"
                                >
                                    <div className="flex h-12 items-center overflow-hidden rounded-lg bg-white shadow-lg sm:h-14">
                                        <Search className="ml-4 size-4 shrink-0 text-[#2FC2B0] sm:size-5" />

                                        <input
                                            value={
                                                searchInput
                                            }
                                            onChange={(e) =>
                                                setSearchInput(
                                                    e.target
                                                        .value
                                                )
                                            }
                                            placeholder="Search blogs, destinations or topics..."
                                            className="h-full min-w-0 flex-1 border-none bg-transparent px-3 text-xs text-gray-700 outline-none placeholder:text-gray-400 sm:text-sm"
                                        />

                                        {searchInput && (
                                            <button
                                                type="button"
                                                onClick={
                                                    clearSearch
                                                }
                                                className="mr-3"
                                            >
                                                <X className="size-4 text-gray-400" />
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CATEGORY NAV */}
            <section className="border-b border-gray-100 bg-white">
                <div className="mx-auto w-full max-w-7xl px-5 py-4 sm:px-8 lg:px-10">
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                        <CategoryButton
                            active={
                                selectedCategory ===
                                "All Blogs"
                            }
                            label="All Blogs"
                            count={
                               totalBlogs
                            }
                            icon={
                                <Tags className="size-4" />
                            }
                            onClick={() =>
                                handleCategory(
                                    "All Blogs"
                                )
                            }
                        />

                        {categories.map(
                            (category) => (
                                <CategoryButton
                                    key={
                                        category.id
                                    }
                                    active={
                                        selectedCategory ===
                                        category.name
                                    }
                                    label={
                                        category.name
                                    }
                                    count={
                                        category.count
                                    }
                                    onClick={() =>
                                        handleCategory(
                                            category.name
                                        )
                                    }
                                />
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="mx-auto w-full max-w-7xl px-5 py-7 sm:px-8 sm:py-10 lg:px-10">
                <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-[#00383B] sm:text-2xl">
                            Read Our Traveler Stories
                        </h2>

                        <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                            {totalBlogs}{" "}
                            {totalBlogs === 1
                                ? "story"
                                : "stories"}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            setMobileFiltersOpen(
                                true
                            )
                        }
                        className="flex h-10 items-center gap-2 rounded-lg border border-gray-200 px-3 text-xs font-medium text-[#00383B] lg:hidden"
                    >
                        <SlidersHorizontal className="size-4" />
                        Filters
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_320px]">
                    {/* BLOG AREA */}
                    <div className="min-w-0">
                        {loading ? (
                            <BlogSkeleton />
                        ) : blogs.length === 0 ? (
                            <EmptyState
                                search={search}
                                clearSearch={
                                    clearSearch
                                }
                            />
                        ) : (
                            <>
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                                    {blogs.map(
                                        (blog) => (
                                            <BlogCard
                                                key={
                                                    blog.id
                                                }
                                                blog={
                                                    blog
                                                }
                                            />
                                        )
                                    )}
                                </div>

                                <Pagination
                                    page={page}
                                    totalPages={
                                        totalPages
                                    }
                                    onPageChange={
                                        setPage
                                    }
                                />
                            </>
                        )}
                    </div>

                    {/* DESKTOP FILTER */}
                    <aside className="hidden lg:block">
                        <FilterSidebar
                            categories={
                                categories
                            }
                            selectedCategory={
                                selectedCategory
                            }
                            onCategoryChange={
                                handleCategory
                            }
                        />
                    </aside>
                </div>
            </section>

            {/* MOBILE FILTER DRAWER */}
            {mobileFiltersOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <button
                        type="button"
                        onClick={() =>
                            setMobileFiltersOpen(
                                false
                            )
                        }
                        className="absolute inset-0 bg-black/40"
                    />

                    <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-white p-5 shadow-2xl">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-lg font-bold text-[#00383B]">
                                Filter Blogs
                            </h2>

                            <button
                                type="button"
                                onClick={() =>
                                    setMobileFiltersOpen(
                                        false
                                    )
                                }
                                className="rounded-full p-2 hover:bg-gray-100"
                            >
                                <X className="size-5" />
                            </button>
                        </div>

                        <FilterSidebar
                            categories={
                                categories
                            }
                            selectedCategory={
                                selectedCategory
                            }
                            onCategoryChange={
                                handleCategory
                            }
                        />
                    </div>
                </div>
            )}
        </main>
    );
}

function CategoryButton({
    active,
    label,
    count,
    icon,
    onClick,
}: {
    active: boolean;
    label: string;
    count?: number;
    icon?: React.ReactNode;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-xs font-medium transition-all sm:text-sm ${
                active
                    ? "border-[#2FC2B0] bg-[#2FC2B0] text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#2FC2B0] hover:text-[#00383B]"
            }`}
        >
            {icon}

            <span>{label}</span>

            {typeof count === "number" && (
                <span
                    className={
                        active
                            ? "text-white/80"
                            : "text-gray-400"
                    }
                >
                    {count}
                </span>
            )}
        </button>
    );
}

function BlogCard({
    blog,
}: {
    blog: Blog;
}) {
    const formattedDate = blog.publishedAt
        ? new Intl.DateTimeFormat("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
          }).format(new Date(blog.publishedAt))
        : null;

    return (
        <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Link
                href={`/blogs/${blog.slug}`}
                className="block"
            >
                <div className="relative aspect-[1.65/1] overflow-hidden">
                    {blog.featuredImage?.url ? (
                        <Image
                            src={
                                blog.featuredImage
                                    .url
                            }
                            alt={blog.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 300px"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-[#00383B]" />
                    )}

                    {blog.category && (
                        <span className="absolute left-3 top-3 rounded-full bg-[#2FC2B0] px-2.5 py-1 text-[9px] font-semibold text-white shadow-sm">
                            {blog.category.name}
                        </span>
                    )}
                </div>

                <div className="p-4">
                    <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-[#00383B] sm:text-[15px]">
                        {blog.title}
                    </h3>

                    {blog.excerpt && (
                        <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-400">
                            {blog.excerpt}
                        </p>
                    )}

                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                            <CalendarDays className="size-3" />

                            <span>
                                {formattedDate}
                            </span>
                        </div>

                        <span className="text-[11px] font-semibold text-[#2FC2B0]">
                            Read More
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    );
}

function FilterSidebar({
    categories,
    selectedCategory,
    onCategoryChange,
}: {
    categories: Category[];
    selectedCategory: string;
    onCategoryChange: (
        category: string
    ) => void;
}) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-[#00383B]">
                Filter Blogs
            </h3>

            <div className="my-4 h-px bg-gray-100" />

            <h4 className="mb-3 text-xs font-medium text-gray-500">
                Category
            </h4>

            <div className="space-y-1">
                <FilterItem
                    label="All Blogs"
                    count={categories.reduce(
                        (total, category) =>
                            total +
                            category.count,
                        0
                    )}
                    active={
                        selectedCategory ===
                        "All Blogs"
                    }
                    onClick={() =>
                        onCategoryChange(
                            "All Blogs"
                        )
                    }
                />

                {categories.map(
                    (category) => (
                        <FilterItem
                            key={category.id}
                            label={category.name}
                            count={
                                category.count
                            }
                            active={
                                selectedCategory ===
                                category.name
                            }
                            onClick={() =>
                                onCategoryChange(
                                    category.name
                                )
                            }
                        />
                    )
                )}
            </div>

            <div className="my-5 h-px bg-gray-100" />

            <h4 className="mb-3 text-xs font-medium text-gray-500">
                Popular Destinations
            </h4>

            <div className="space-y-2.5">
                {popularDestinations.map(
                    (destination) => (
                        <label
                            key={destination}
                            className="flex cursor-pointer items-center gap-2 text-xs text-gray-500"
                        >
                            <input
                                type="checkbox"
                                className="size-3.5 rounded border-gray-300 accent-[#2FC2B0]"
                            />

                            <span>
                                {destination}
                            </span>
                        </label>
                    )
                )}
            </div>
        </div>
    );
}

function FilterItem({
    label,
    count,
    active,
    onClick,
}: {
    label: string;
    count: number;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition-colors ${
                active
                    ? "bg-[#2FC2B0]/10 text-[#00383B]"
                    : "text-gray-500 hover:bg-gray-50"
            }`}
        >
            <span className="flex min-w-0 items-center gap-2">
                <span
                    className={`size-2.5 shrink-0 rounded-full border ${
                        active
                            ? "border-[#2FC2B0] bg-[#2FC2B0]"
                            : "border-gray-300"
                    }`}
                />

                <span className="truncate">
                    {label}
                </span>
            </span>

            <span className="ml-2 shrink-0 text-gray-400">
                {count}
            </span>
        </button>
    );
}

function Pagination({
    page,
    totalPages,
    onPageChange,
}: {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}) {
    if (totalPages <= 1) {
        return null;
    }

    const pages: number[] = [];

    const start = Math.max(1, page - 2);
    const end = Math.min(
        totalPages,
        page + 2
    );

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    return (
        <div className="mt-10 flex items-center justify-center gap-1.5 sm:gap-2">
            <button
                type="button"
                disabled={page === 1}
                onClick={() =>
                    onPageChange(page - 1)
                }
                className="flex size-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-[#2FC2B0] hover:text-[#00383B] disabled:pointer-events-none disabled:opacity-40"
            >
                <ArrowLeft className="size-4" />
            </button>

            {start > 1 && (
                <>
                    <button
                        type="button"
                        onClick={() =>
                            onPageChange(1)
                        }
                        className="hidden size-9 rounded-lg border border-gray-200 text-xs text-gray-600 hover:border-[#2FC2B0] sm:block"
                    >
                        1
                    </button>

                    <span className="px-1 text-gray-400">
                        ...
                    </span>
                </>
            )}

            {pages.map((pageNumber) => (
                <button
                    key={pageNumber}
                    type="button"
                    onClick={() =>
                        onPageChange(
                            pageNumber
                        )
                    }
                    className={`size-9 rounded-lg text-xs font-medium transition-colors ${
                        pageNumber === page
                            ? "bg-[#2FC2B0] text-white"
                            : "border border-gray-200 text-gray-600 hover:border-[#2FC2B0]"
                    }`}
                >
                    {pageNumber}
                </button>
            ))}

            {end < totalPages && (
                <>
                    <span className="px-1 text-gray-400">
                        ...
                    </span>

                    <button
                        type="button"
                        onClick={() =>
                            onPageChange(
                                totalPages
                            )
                        }
                        className="hidden size-9 rounded-lg border border-gray-200 text-xs text-gray-600 hover:border-[#2FC2B0] sm:block"
                    >
                        {totalPages}
                    </button>
                </>
            )}

            <button
                type="button"
                disabled={
                    page === totalPages
                }
                onClick={() =>
                    onPageChange(page + 1)
                }
                className="flex size-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-[#2FC2B0] hover:text-[#00383B] disabled:pointer-events-none disabled:opacity-40"
            >
                <ArrowRight className="size-4" />
            </button>
        </div>
    );
}

function EmptyState({
    search,
    clearSearch,
}: {
    search: string;
    clearSearch: () => void;
}) {
    return (
        <div className="rounded-2xl border border-dashed border-gray-200 px-5 py-16 text-center">
            <Search className="mx-auto size-10 text-gray-300" />

            <h3 className="mt-4 text-lg font-semibold text-[#00383B]">
                No blogs found
            </h3>

            <p className="mt-2 text-sm text-gray-400">
                {search
                    ? `No blogs matched "${search}".`
                    : "There are no blogs available yet."}
            </p>

            {search && (
                <button
                    type="button"
                    onClick={clearSearch}
                    className="mt-5 rounded-lg bg-[#2FC2B0] px-5 py-2.5 text-xs font-semibold text-white"
                >
                    Clear Search
                </button>
            )}
        </div>
    );
}

function BlogSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 12 }).map(
                (_, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-xl border border-gray-100"
                    >
                        <div className="aspect-[1.65/1] animate-pulse bg-gray-100" />

                        <div className="space-y-3 p-4">
                            <div className="h-4 w-4/5 animate-pulse rounded bg-gray-100" />

                            <div className="h-3 w-full animate-pulse rounded bg-gray-100" />

                            <div className="h-3 w-3/4 animate-pulse rounded bg-gray-100" />

                            <div className="h-3 w-1/3 animate-pulse rounded bg-gray-100" />
                        </div>
                    </div>
                )
            )}
        </div>
    );
}