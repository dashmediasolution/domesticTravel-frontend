"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
    Briefcase,
    Calendar,
    CircleDollarSign,
    MapPin,
    Search,
    UsersRound,
    X,
} from "lucide-react";
import { packageData } from "@/constants/packagesData";
import { featuredDestination } from "@/constants/destinationData";

interface SearchBarProps {
    bottomPosition?: string;
}

type SearchValues = {
    destination: string;
    packageType: string;
    travelMonth: string;
    travellers: string;
    budget: string;
};

type SearchSuggestion = {
    name: string;
    destination: string;
    type: "Destination" | "Package";
    path: string;
};

const emptySearch: SearchValues = {
    destination: "",
    packageType: "",
    travelMonth: "",
    travellers: "",
    budget: "",
};

const toSlug = (value: string) =>
    value.toLowerCase().trim().replace(/\s+/g, "-");

export default function SearachBar({ bottomPosition }: SearchBarProps) {
    const router = useRouter();
    const [values, setValues] = useState<SearchValues>(emptySearch);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [suggestionField, setSuggestionField] = useState<"destination" | "packageType" | null>(null);
    const [searchAttempted, setSearchAttempted] = useState(false);

    // Build exact destination and package links for the suggestions menu.
    const suggestions: SearchSuggestion[] = [
        ...featuredDestination.map((item) => ({
            name: item.destination.name,
            destination: item.destination.name,
            type: "Destination" as const,
            path: `/destinations/${toSlug(item.destination.name)}`,
        })),
        ...packageData.flatMap((group) =>
            group.packages.map((item) => ({
                name: item.name,
                destination: group.name,
                type: "Package" as const,
                path:
                    toSlug(group.name) === toSlug(item.name)
                        ? `/package/${toSlug(group.name)}`
                        : `/package/${toSlug(group.name)}/${toSlug(item.name)}`,
            }))
        ),
    ].filter((item, index, items) =>
        items.findIndex(
            (match) => match.name === item.name && match.type === item.type
        ) === index
    );

    const activeSuggestions = suggestionField
        ? suggestions
              .filter((item) => {
                  const query = values[suggestionField].trim().toLowerCase();
                  return (
                      query.length >= 3 &&
                      item.name.toLowerCase().includes(query) ||
                      (query.length >= 3 && item.destination.toLowerCase().includes(query))
                  );
              })
              .slice(0, 20)
        : [];

    const updateValue = (field: keyof SearchValues, value: string) => {
        setSearchAttempted(false);

        if (field === "destination") {
            const packageMatch = packageData
                .flatMap((group) =>
                    group.packages.map((item) => ({ group, item }))
                )
                .find(({ item }) => item.name.toLowerCase() === value.trim().toLowerCase());

            if (packageMatch) {
                setValues((current) => ({
                    ...current,
                    destination: packageMatch.group.name,
                    packageType: packageMatch.item.name,
                }));
                return;
            }
        }

        setValues((current) => ({ ...current, [field]: value }));
    };

    // Exact matches go directly to their real page. Other searches go to Explore.
    const getSearchPath = () => {
        const destinationQuery = values.destination.trim().toLowerCase();
        const packageQuery = values.packageType.trim().toLowerCase();
        const packageMatch = packageData
            .flatMap((group) =>
                group.packages.map((item) => ({ group, item }))
            )
            .find(({ item }) => item.name.toLowerCase() === packageQuery);

        if (packageMatch) {
            const groupSlug = toSlug(packageMatch.group.name);
            const packageSlug = toSlug(packageMatch.item.name);
            return groupSlug === packageSlug
                ? `/package/${groupSlug}`
                : `/package/${groupSlug}/${packageSlug}`;
        }

        const destinationMatch = featuredDestination.find(
            (item) => item.destination.name.toLowerCase() === destinationQuery
        );

        if (destinationMatch) {
            return `/destinations/${toSlug(destinationMatch.destination.name)}`;
        }

        const packageDestination = packageData.find(
            (item) => item.name.toLowerCase() === destinationQuery
        );

        if (packageDestination) {
            return `/package/${toSlug(packageDestination.name)}`;
        }

        return null;
    };

    const submitSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSearchAttempted(true);
        const searchPath = getSearchPath();

        if (!searchPath) {
            return;
        }

        router.push(searchPath);
        setMobileOpen(false);
        setSuggestionField(null);
    };

    const chooseSuggestion = (suggestion: SearchSuggestion) => {
        if (suggestionField) {
            updateValue(suggestionField, suggestion.name);

            if (suggestion.type === "Package") {
                setValues((current) => ({
                    ...current,
                    destination: suggestion.destination,
                    packageType: suggestion.name,
                }));
            }
        }
        setSuggestionField(null);
    };

    const fieldClass =
        "h-full min-w-0 flex-1 border-0 bg-transparent px-1 text-sm outline-none placeholder:text-neutral-400";

    const searchFields = (
        <>
            <SearchField
                icon={<MapPin className="size-6 shrink-0 text-primary" />}
                label="Destination"
                value={values.destination}
                placeholder="Go anywhere"
                onFocus={() => setSuggestionField("destination")}
                onChange={(value) => updateValue("destination", value)}
                className={fieldClass}
                suggestions={suggestionField === "destination" ? activeSuggestions : []}
                showNotFound={searchAttempted && suggestionField === "destination" && values.destination.trim().length >= 3 && activeSuggestions.length === 0}
                onSuggestion={chooseSuggestion}
            />
            <SearchField
                icon={<Briefcase className="size-6 shrink-0 text-primary" />}
                label="Package Type"
                value={values.packageType}
                placeholder="Select package"
                onFocus={() => setSuggestionField("packageType")}
                onChange={(value) => updateValue("packageType", value)}
                className={fieldClass}
                suggestions={suggestionField === "packageType" ? activeSuggestions : []}
                showNotFound={searchAttempted && suggestionField === "packageType" && values.packageType.trim().length >= 3 && activeSuggestions.length === 0}
                onSuggestion={chooseSuggestion}
            />
            <SearchField
                icon={<Calendar className="size-6 shrink-0 text-primary" />}
                label="Travel Month"
                value={values.travelMonth}
                placeholder="Select month"
                inputType="month"
                onChange={(value) => updateValue("travelMonth", value)}
                className={fieldClass}
            />
            <SearchField
                icon={<UsersRound className="size-6 shrink-0 text-primary" />}
                label="Travellers"
                value={values.travellers}
                placeholder="2 Adults - 1 Child"
                onChange={(value) => updateValue("travellers", value)}
                className={fieldClass}
                options={[
                    "1 Traveller",
                    "2 Travellers",
                    "3 Travellers",
                    "4 Travellers",
                    "5+ Travellers",
                ]}
            />
            <SearchField
                icon={<CircleDollarSign className="size-6 shrink-0 text-primary" />}
                label="Budget"
                value={values.budget}
                placeholder="Your budget"
                inputType="number"
                min="0"
                max="10000000"
                maxLength={8}
                onChange={(value) => updateValue("budget", value.replace(/\D/g, "").slice(0, 8))}
                className={`${fieldClass} appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
            />
        </>
    );

    return (
        <div
            className="relative z-20 flex w-full justify-center px-3 sm:px-5 lg:px-8"
            style={{ bottom: `${bottomPosition}rem` }}
        >
            {/* Compact mobile trigger. */}
            <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="flex h-14 w-full items-center gap-3 rounded-full bg-white px-5 text-left shadow-[0_8px_30px_rgba(0,0,0,0.15)] md:hidden"
            >
                <Search className="size-5 shrink-0 text-primary" />
                <span className="truncate text-[15px] text-gray-500">
                    Where do you want to go?
                </span>
            </button>

            {/* Full desktop search with the original travel fields. */}
            <form
                onSubmit={submitSearch}
                className="hidden w-full max-w-350 items-center gap-2 rounded-2xl border border-neutral-200 bg-white p-3 shadow-[0_18px_50px_rgba(20,45,50,0.14)] md:flex"
            >
                {searchFields}
                <button
                    type="submit"
                    className="flex h-13 shrink-0 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                    <Search className="size-4" />
                    Search
                </button>
            </form>

            {/* Mobile version uses the same fields and submit logic. */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 p-4 pt-10 md:hidden">
                    <form
                        onSubmit={submitSearch}
                        className="mx-auto max-w-md rounded-2xl bg-white p-5 shadow-xl"
                    >
                        <div className="mb-5 flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-neutral-900">Plan your trip</h2>
                            <button
                                type="button"
                                onClick={() => setMobileOpen(false)}
                                className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100"
                                aria-label="Close search"
                            >
                                <X className="size-5" />
                            </button>
                        </div>
                        <div className="space-y-3">{searchFields}</div>
                        <button
                            type="submit"
                            className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-white"
                        >
                            <Search className="size-4" />
                            Search
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
    className,
    suggestions = [],
    showNotFound = false,
    onSuggestion,
    inputType = "text",
    options,
    min,
    max,
    maxLength,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
    onFocus?: () => void;
    className: string;
    suggestions?: SearchSuggestion[];
    showNotFound?: boolean;
    onSuggestion?: (suggestion: SearchSuggestion) => void;
    inputType?: string;
    options?: string[];
    min?: string;
    max?: string;
    maxLength?: number;
}) {
    return (
        <div className="relative flex min-w-0 flex-1 items-center gap-2 border-b border-neutral-100 py-1 md:border-b-0 md:border-r md:pr-2">
            {icon}
            <label className="min-w-0 flex-1">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                    {label}
                </span>
                {options ? (
                    <select
                        value={value}
                        onChange={(event) => onChange(event.target.value)}
                        className={className}
                    >
                        <option value="">{placeholder}</option>
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        value={value}
                        type={inputType}
                        min={min}
                        max={max}
                        maxLength={inputType === "number" ? undefined : maxLength}
                        inputMode={inputType === "number" ? "numeric" : undefined}
                        onFocus={onFocus}
                        onChange={(event) => onChange(event.target.value)}
                        placeholder={placeholder}
                        className={className}
                        autoComplete="off"
                    />
                )}
            </label>
            {(suggestions.length > 0 || showNotFound) && (
                <div className="absolute left-0 top-[calc(100%+12px)] z-40 w-full min-w-60 overflow-hidden rounded-xl border border-neutral-200 bg-white py-1 shadow-lg">
                    {suggestions.map((suggestion) => (
                        <button
                            key={`${suggestion.type}-${suggestion.name}`}
                            type="button"
                            onClick={() => onSuggestion?.(suggestion)}
                            className="flex w-full items-center gap-2 px-3 py-2.5 text-left hover:bg-neutral-50"
                        >
                            <MapPin className="size-4 shrink-0 text-primary" />
                            <span className="min-w-0 truncate text-sm text-neutral-800">
                                {suggestion.name}
                                <span className="ml-1 text-xs text-neutral-400">
                                    ({suggestion.destination})
                                </span>
                            </span>
                            <span className="ml-auto text-[10px] text-neutral-400">{suggestion.type}</span>
                        </button>
                    ))}
                    {showNotFound && (
                        <p className="px-3 py-3 text-sm text-neutral-500">
                            No destination or package found.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}
