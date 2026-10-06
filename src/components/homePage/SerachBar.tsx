"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
    CalendarDays,
    CircleDollarSign,
    MapPin,
    Search,
    X,
} from "lucide-react";

interface SearchBarProps {
    bottomPosition?: string;
}

interface SearchValues {
    query: string;
    month: string;
    maxPrice: string;
    budget: string;
}

interface SearchSuggestion {
    name: string;
    type: "Destination" | "Package";
    destination?: {
        name: string;
        slug: string;
    };
    slug: string;
    image?: string;
}

const initialValues: SearchValues = {
    query: "",
    month: "",
    maxPrice: "",
    budget: "",
};

const months = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
];

const budgetOptions = [
    {
        value: "Budget",
        label: "Budget",
    },
    {
        value: "Mid Range",
        label: "Mid Range",
    },
    {
        value: "Luxury",
        label: "Luxury",
    },
];

export default function SearachBar({
    bottomPosition = "0",
}: SearchBarProps) {
    const router = useRouter();

    const [values, setValues] =
        useState<SearchValues>(initialValues);

    const [suggestions, setSuggestions] = useState<
        SearchSuggestion[]
    >([]);

    const [showSuggestions, setShowSuggestions] =
        useState(false);

    const [mobileOpen, setMobileOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const query = values.query.trim();

        if (query.length < 2) {
            setSuggestions([]);
            return;
        }

        const controller = new AbortController();

        const timer = setTimeout(async () => {
            try {
                const params = new URLSearchParams({
                    q: query,
                    limit: "8",
                });

                const response = await fetch(
                    `/api/search?${params.toString()}`,
                    {
                        signal: controller.signal,
                    }
                );

                if (!response.ok) {
                    setSuggestions([]);
                    return;
                }

                const data = await response.json();

                const destinationSuggestions: SearchSuggestion[] =
                    (data.destinations ?? []).map(
                        (item: {
                            name: string;
                            slug: string;
                            image?: string;
                        }) => ({
                            name: item.name,
                            slug: item.slug,
                            type: "Destination",
                            image: item.image,
                        })
                    );

                const packageSuggestions: SearchSuggestion[] =
                    (data.packages ?? []).map(
                        (item: {
                            name: string;
                            slug: string;
                            image?: string;
                            destination?: {
                                name: string;
                                slug: string;
                            };
                        }) => ({
                            name: item.name,
                            slug: item.slug,
                            type: "Package",
                            image: item.image,
                            destination: item.destination,
                        })
                    );

                setSuggestions([
                    ...destinationSuggestions,
                    ...packageSuggestions,
                ]);
            } catch (error) {
                if (
                    error instanceof DOMException &&
                    error.name === "AbortError"
                ) {
                    return;
                }

                setSuggestions([]);
            }
        }, 300);

        return () => {
            clearTimeout(timer);
            controller.abort();
        };
    }, [values.query]);

    const updateValue = (
        field: keyof SearchValues,
        value: string
    ) => {
        setValues((current) => ({
            ...current,
            [field]: value,
        }));
    };

    const selectSuggestion = (
        suggestion: SearchSuggestion
    ) => {
        setValues((current) => ({
            ...current,
            query: suggestion.name,
        }));

        setShowSuggestions(false);
    };

    const buildSearchParams = () => {
        const params = new URLSearchParams();

        const query = values.query.trim();

        if (query) {
            params.set("q", query);
        }

        if (values.month) {
            params.set("month", values.month);
        }

        if (values.maxPrice) {
            params.set("maxPrice", values.maxPrice);
        }

        if (values.budget) {
            params.set("budget", values.budget);
        }

        return params;
    };

    const submitSearch = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const params = buildSearchParams();

        if (!params.toString()) {
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                `/api/search?${params.toString()}`,
                {
                    method: "GET",
                    cache: "no-store",
                }
            );

            if (!response.ok) {
                return;
            }

            router.push(`/search-results?${params.toString()}`);

            setShowSuggestions(false);
            setMobileOpen(false);
        } catch {
            return;
        } finally {
            setLoading(false);
        }
    };

    const fields = (
        <>
            <SearchField
                icon={
                    <MapPin className="size-5 shrink-0 text-primary" />
                }
                label="Where to?"
                value={values.query}
                placeholder="Destination or package"
                onFocus={() => setShowSuggestions(true)}
                onChange={(value) =>
                    updateValue("query", value)
                }
                suggestions={
                    showSuggestions ? suggestions : []
                }
                onSuggestion={selectSuggestion}
            />

            <SearchField
                icon={
                    <CalendarDays className="size-5 shrink-0 text-primary" />
                }
                label="Travel month"
                value={values.month}
                placeholder="Any month"
                onChange={(value) =>
                    updateValue("month", value)
                }
                options={months.map((month) => ({
                    value: month.value,
                    label: month.label,
                }))}
            />

            <SearchField
                icon={
                    <CircleDollarSign className="size-5 shrink-0 text-primary" />
                }
                label="Budget"
                value={values.maxPrice}
                placeholder="Max price"
                inputType="number"
                min="0"
                max="10000000"
                onChange={(value) =>
                    updateValue(
                        "maxPrice",
                        value.replace(/\D/g, "").slice(0, 8)
                    )
                }
            />

            <SearchField
                label="Travel style"
                value={values.budget}
                placeholder="Any budget"
                onChange={(value) =>
                    updateValue("budget", value)
                }
                options={budgetOptions}
            />
        </>
    );

    return (
        <div
            className="relative z-30 flex w-full justify-center"
            style={{
                bottom: `${bottomPosition}rem`,
            }}
        >
            {/* Desktop */}
            <form
                onSubmit={submitSearch}
                className="
                    hidden
                    w-full
                    max-w-7xl
                    items-center
                    gap-1.5
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-white
                    p-2
                    shadow-[0_15px_45px_rgba(0,56,59,0.14)]
                    md:flex
                "
            >
                <div className="flex min-w-0 flex-1 items-center">
                    {fields}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="
                        flex
                        h-12
                        shrink-0
                        items-center
                        gap-2
                        rounded-xl
                        bg-primary
                        px-5
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:opacity-90
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                    "
                >
                    <Search className="size-4" />

                    {loading ? "Searching..." : "Search"}
                </button>
            </form>

            {/* Mobile trigger */}
            <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="
                    flex
                    h-14
                    w-full
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-white
                    px-4
                    text-left
                    shadow-[0_12px_35px_rgba(0,56,59,0.15)]
                    md:hidden
                "
            >
                <Search className="size-5 shrink-0 text-primary" />

                <div className="min-w-0">
                    <p className="text-sm font-semibold text-neutral-900">
                        Where do you want to go?
                    </p>

                    <p className="truncate text-xs text-neutral-500">
                        Search destinations and packages
                    </p>
                </div>
            </button>

            {/* Mobile */}
            {mobileOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        z-50
                        overflow-y-auto
                        bg-black/40
                        px-4
                        py-6
                        md:hidden
                    "
                >
                    <form
                        onSubmit={submitSearch}
                        className="
                            mx-auto
                            mt-6
                            max-w-md
                            overflow-visible
                            rounded-2xl
                            bg-white
                            p-5
                            shadow-2xl
                        "
                    >
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                                    Explore India
                                </p>

                                <h2 className="mt-1 text-xl font-bold text-neutral-900">
                                    Find your trip
                                </h2>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setMobileOpen(false)
                                }
                                className="
                                    flex
                                    size-9
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-neutral-100
                                    text-neutral-600
                                "
                            >
                                <X className="size-4" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {fields}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="
                                mt-5
                                flex
                                h-12
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-primary
                                text-sm
                                font-semibold
                                text-white
                                transition
                                hover:opacity-90
                                disabled:opacity-60
                            "
                        >
                            <Search className="size-4" />

                            {loading
                                ? "Searching..."
                                : "Search trips"}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

function SearchField({
    icon,
    label,
    value,
    placeholder,
    onChange,
    onFocus,
    suggestions = [],
    onSuggestion,
    options,
    inputType = "text",
    min,
    max,
}: {
    icon?: React.ReactNode;
    label: string;
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
    onFocus?: () => void;
    suggestions?: SearchSuggestion[];
    onSuggestion?: (suggestion: SearchSuggestion) => void;
    options?: {
        value: string;
        label: string;
    }[];
    inputType?: string;
    min?: string;
    max?: string;
}) {
    return (
        <div
            className="
                relative
                min-w-0
                flex-1
                border-b
                border-neutral-100
                px-3
                py-2

                last:border-b-0

                md:border-b-0
                md:border-r
                md:px-3
                md:last:border-r-0
            "
        >
            <div className="flex items-center gap-2">
                {icon}

                <label className="min-w-0 flex-1">
                    <span
                        className="
                            block
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-neutral-400
                        "
                    >
                        {label}
                    </span>

                    {options ? (
                        <select
                            value={value}
                            onChange={(event) =>
                                onChange(event.target.value)
                            }
                            className="
                                mt-0.5
                                w-full
                                cursor-pointer
                                border-0
                                bg-transparent
                                p-0
                                text-sm
                                font-medium
                                text-neutral-800
                                outline-none
                                focus:ring-0
                            "
                        >
                            <option value="">
                                {placeholder}
                            </option>

                            {options.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type={inputType}
                            value={value}
                            min={min}
                            max={max}
                            onFocus={onFocus}
                            onChange={(event) =>
                                onChange(event.target.value)
                            }
                            placeholder={placeholder}
                            autoComplete="off"
                            className="
                                mt-0.5
                                w-full
                                border-0
                                bg-transparent
                                p-0
                                text-sm
                                font-medium
                                text-neutral-800
                                outline-none
                                placeholder:text-neutral-400
                                focus:ring-0
                            "
                        />
                    )}
                </label>
            </div>

            {suggestions.length > 0 && (
                <div
                    className="
                        absolute
                        left-0
                        top-[calc(100%+8px)]
                        z-50
                        w-full
                        min-w-72
                        overflow-hidden
                        rounded-xl
                        border
                        border-neutral-200
                        bg-white
                        py-1
                        shadow-xl
                    "
                >
                    {suggestions.map((suggestion) => (
                        <button
                            key={`${suggestion.type}-${suggestion.slug}`}
                            type="button"
                            onClick={() =>
                                onSuggestion?.(suggestion)
                            }
                            className="
                                flex
                                w-full
                                items-center
                                gap-3
                                px-3
                                py-3
                                text-left
                                transition
                                hover:bg-[#f1faf8]
                            "
                        >
                            <div
                                className="
                                    flex
                                    size-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-[#e8f8f5]
                                "
                            >
                                <MapPin className="size-4 text-primary" />
                            </div>

                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-neutral-800">
                                    {suggestion.name}
                                </p>

                                <p className="text-[11px] text-neutral-400">
                                    {suggestion.type ===
                                    "Package"
                                        ? suggestion.destination
                                              ?.name
                                        : "Destination"}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}