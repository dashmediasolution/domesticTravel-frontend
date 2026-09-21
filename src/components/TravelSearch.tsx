"use client";

import { useState, type FormEvent } from "react";

import {
    ArrowLeftRight,
    ArrowRightLeft,
    BusFront,
    CalendarDays,
    CheckCircle2,
    ChevronDown,
    Hotel,
    Plane,
    PlaneLanding,
    PlaneTakeoff,
    Search,
    UserRound,
    X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type TravelService = "flights" | "hotels" | "bus";

interface TravelSearchProps {
    service: TravelService;
    onSubmit?: (data: Record<string, string>) => void;
}

type TripType = "oneWay" | "roundTrip" | "multiCity";

const serviceConfig = {
    flights: {
        icon: Plane,
        fromLabel: "Departure City",
        fromPlaceholder: "New York (JFK)",
        toLabel: "Arrival City",
        toPlaceholder: "London Heathrow",
        departureLabel: "Departure Date",
        returnLabel: "Return Date",
        passengerLabel: "Passengers & Class",
    },

    hotels: {
        icon: Hotel,
        fromLabel: "Destination",
        fromPlaceholder: "City, area or hotel",
        toLabel: "",
        toPlaceholder: "",
        departureLabel: "Check In",
        returnLabel: "Check Out",
        passengerLabel: "Guests & Rooms",
    },

    bus: {
        icon: BusFront,
        fromLabel: "Departure City",
        fromPlaceholder: "Enter departure city",
        toLabel: "Arrival City",
        toPlaceholder: "Enter arrival city",
        departureLabel: "Travel Date",
        returnLabel: "",
        passengerLabel: "Passengers",
    },
};

const passengerOptions = [
    "1 Passenger, Economy",
    "2 Passengers, Economy",
    "3 Passengers, Economy",
    "4 Passengers, Economy",
    "5 Passengers, Economy",
    "1 Passenger, Premium Economy",
    "1 Passenger, Business",
];

export function TravelSearch({
    service,
    onSubmit,
}: TravelSearchProps) {
    const config = serviceConfig[service];

    const Icon = config.icon;

    const [tripType, setTripType] =
        useState<TripType>("roundTrip");

    const [passengers, setPassengers] = useState(
        passengerOptions[0]
    );

    const [showPassengers, setShowPassengers] =
        useState(false);

    const [mobileOpen, setMobileOpen] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        from: "",
        to: "",
        departure: "",
        return: "",
    });

    const updateField = (
        field: keyof typeof formData,
        value: string
    ) => {
        setFormData((previous) => ({
            ...previous,
            [field]: value,
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setSubmitted(true);

        onSubmit?.({
            ...formData,
            tripType,
            passengers,
        });
        setMobileOpen(false);
    };

    const handleSwap = () => {
        setFormData((previous) => ({
            ...previous,
            from: previous.to,
            to: previous.from,
        }));
    };

    return (
        <section className="relative mx-auto -mt-8 w-full max-w-7xl px-3 pb-10 sm:px-6 lg:px-8">
            <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="flex h-14 w-full items-center gap-3 rounded-full bg-white px-5 text-left shadow-[0_8px_30px_rgba(20,45,50,0.16)] lg:hidden"
            >
                <Search className="size-5 shrink-0 text-primary" />
                <span className="truncate text-sm text-neutral-500">
                    Search {service === "flights" ? "flights" : service === "hotels" ? "hotels" : "buses"}
                </span>
            </button>

            <form
                onSubmit={handleSubmit}
                className={`${mobileOpen ? "fixed inset-0 z-50 m-4 max-h-[calc(100vh-2rem)] overflow-y-auto" : "hidden lg:block"} w-full min-w-0 max-w-full rounded-2xl border border-neutral-200 bg-white shadow-[0_12px_40px_rgba(20,45,50,0.16)] sm:rounded-[24px]`}
            >
                <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4 lg:hidden">
                    <div>
                        <p className="text-lg font-bold text-neutral-900">Search {service}</p>
                        <p className="mt-0.5 text-xs text-neutral-500">Enter your travel details</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close search"
                        className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100"
                    >
                        <X className="size-5" />
                    </button>
                </div>
                {/* ================= TRIP TYPE ================= */}
                {service === "flights" && (
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-neutral-100 px-4 py-3 sm:gap-x-7 sm:px-6 md:px-7">
                        {/* One Way */}
                        <button
                            type="button"
                            disabled
                            className="flex cursor-not-allowed items-center gap-2 text-xs text-neutral-300 sm:text-sm"
                        >
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-neutral-300">
                                <span className="size-2 rounded-full" />
                            </span>

                            <ArrowRightLeft className="size-3.5 sm:size-4" />

                            <span>One Way</span>
                        </button>

                        {/* Round Trip */}
                        <button
                            type="button"
                            onClick={() => setTripType("roundTrip")}
                            className="flex items-center gap-2 text-xs font-medium text-primary sm:text-sm"
                        >
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-primary">
                                <span className="size-2.5 rounded-full bg-primary" />
                            </span>

                            <ArrowLeftRight className="size-3.5 sm:size-4" />

                            <span>Round Trip</span>
                        </button>

                        {/* Multi City */}
                        <button
                            type="button"
                            disabled
                            className="flex cursor-not-allowed items-center gap-2 text-xs text-neutral-300 sm:text-sm"
                        >
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-neutral-300">
                                <span className="size-2 rounded-full" />
                            </span>

                            <span>Multi City</span>
                        </button>
                    </div>
                )}

                {/* ================= SEARCH FIELDS ================= */}
                <div className="grid min-w-0 grid-cols-1 lg:flex lg:items-stretch">
                    {/* FROM / DESTINATION */}
                    <div className="flex min-w-0 min-h-[76px] items-center gap-3 px-4 py-3.5 transition-colors hover:bg-neutral-50 sm:min-h-[82px] sm:px-6 sm:py-4 lg:flex-1 lg:px-7">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:size-10">
                            {service === "hotels" ? (
                                <Hotel className="size-4 sm:size-5" />
                            ) : service === "bus" ? (
                                <BusFront className="size-4 sm:size-5" />
                            ) : (
                                <PlaneTakeoff className="size-4 sm:size-5" />
                            )}
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-[10px] font-medium text-neutral-500 sm:text-[11px]">
                                {config.fromLabel}
                            </p>

                            <input
                                required
                                value={formData.from}
                                onChange={(event) =>
                                    updateField("from", event.target.value)
                                }
                                placeholder={config.fromPlaceholder}
                                className="mt-1 w-full min-w-0 truncate border-0 bg-transparent p-0 text-xs font-semibold text-neutral-900 outline-none placeholder:text-neutral-400 focus:ring-0 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* SWAP */}
                    {service !== "hotels" && (
                        <button
                            type="button"
                            onClick={handleSwap}
                            aria-label="Swap departure and arrival"
                            className="absolute left-1/2 z-20 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-primary shadow-md transition hover:scale-105 hover:bg-primary/5 lg:static lg:ml-auto lg:size-9 lg:translate-x-0 lg:translate-y-0 lg:mx-[-18px] lg:my-auto"
                        >
                            <ArrowLeftRight className="size-3.5 sm:size-4" />
                        </button>
                    )}

                    {/* TO */}
                    {service !== "hotels" && (
                        <div className="flex min-w-0 min-h-[76px] items-center gap-3 border-t border-neutral-100 px-4 py-3.5 transition-colors hover:bg-neutral-50 sm:min-h-[82px] sm:px-6 sm:py-4 lg:flex-1 lg:px-7">
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:size-10">
                                {service === "bus" ? (
                                    <BusFront className="size-4 sm:size-5" />
                                ) : (
                                    <PlaneLanding className="size-4 sm:size-5" />
                                )}
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="text-[10px] font-medium text-neutral-500 sm:text-[11px]">
                                    {config.toLabel}
                                </p>

                                <input
                                    required
                                    value={formData.to}
                                    onChange={(event) =>
                                        updateField("to", event.target.value)
                                    }
                                    placeholder={config.toPlaceholder}
                                    className="mt-1 w-full min-w-0 truncate border-0 bg-transparent p-0 text-xs font-semibold text-neutral-900 outline-none placeholder:text-neutral-400 focus:ring-0 sm:text-sm"
                                />
                            </div>
                        </div>
                    )}

                    {/* DEPARTURE */}
                    <div className="flex min-w-0 min-h-[76px] items-center gap-3 border-t border-neutral-100 px-4 py-3.5 transition-colors hover:bg-neutral-50 sm:min-h-[82px] sm:px-6 sm:py-4 lg:flex-1 lg:px-7">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:size-10">
                            <CalendarDays className="size-4 sm:size-5" />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-[10px] font-medium text-neutral-500 sm:text-[11px]">
                                {config.departureLabel}
                            </p>

                            <input
                                required
                                type="date"
                                value={formData.departure}
                                onChange={(event) =>
                                    updateField("departure", event.target.value)
                                }
                                className="mt-1 w-full min-w-0 border-0 bg-transparent p-0 text-xs font-semibold text-neutral-900 outline-none focus:ring-0 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* RETURN */}
                    {config.returnLabel && (
                        <div className="flex min-w-0 min-h-[76px] items-center gap-3 border-t border-neutral-100 px-4 py-3.5 transition-colors hover:bg-neutral-50 sm:min-h-[82px] sm:px-6 sm:py-4 lg:flex-1 lg:px-7">
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:size-10">
                                <CalendarDays className="size-4 sm:size-5" />
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="text-[10px] font-medium text-neutral-500 sm:text-[11px]">
                                    {config.returnLabel}
                                </p>

                                <input
                                    required={service === "flights"}
                                    type="date"
                                    value={formData.return}
                                    onChange={(event) =>
                                        updateField("return", event.target.value)
                                    }
                                    className="mt-1 w-full min-w-0 border-0 bg-transparent p-0 text-xs font-semibold text-neutral-900 outline-none focus:ring-0 sm:text-sm"
                                />
                            </div>
                        </div>
                    )}

                    {/* PASSENGERS */}
                    <div className="relative flex min-w-0 min-h-[76px] items-center gap-3 border-t border-neutral-100 px-4 py-3.5 transition-colors hover:bg-neutral-50 sm:min-h-[82px] sm:px-6 sm:py-4 lg:border-l lg:flex-1 lg:px-7">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:size-10">
                            <UserRound className="size-4 sm:size-5" />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-[10px] font-medium text-neutral-500 sm:text-[11px]">
                                {config.passengerLabel}
                            </p>

                            <button
                                type="button"
                                onClick={() => setShowPassengers(!showPassengers)}
                                className="mt-1 flex w-full min-w-0 items-center justify-between gap-2 text-left text-xs font-semibold text-neutral-900 sm:text-sm"
                            >
                                <span className="truncate">{passengers}</span>

                                <ChevronDown
                                    className={`size-4 shrink-0 text-neutral-500 transition-transform ${showPassengers ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                        </div>

                        {/* Passenger Dropdown */}
                        {showPassengers && (
                            <div className="absolute left-3 right-3 top-[calc(100%-4px)] z-50 max-h-60 overflow-y-auto rounded-xl border border-neutral-200 bg-white p-1 shadow-xl lg:left-auto lg:right-3 lg:w-64 lg:top-[75px]">
                                {passengerOptions.map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() => {
                                            setPassengers(option);
                                            setShowPassengers(false);
                                        }}
                                        className={`w-full rounded-lg px-3 py-2.5 text-left text-xs transition sm:text-sm ${passengers === option
                                                ? "bg-primary/10 font-semibold text-primary"
                                                : "text-neutral-700 hover:bg-neutral-50"
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* SEARCH */}
                    <div className="min-w-0 border-t border-neutral-100 p-3 lg:border-l lg:border-t-0 lg:p-2">
                        <Button
                            type="submit"
                            className="h-12 w-full rounded-xl px-5 text-sm sm:h-14 sm:rounded-full sm:px-7 lg:size-14 lg:rounded-full lg:p-0"
                        >
                            <Search className="size-4.5 sm:size-5" />

                            <span className="lg:hidden">
                                Search{" "}
                                {service === "flights"
                                    ? "Flights"
                                    : service === "hotels"
                                        ? "Hotels"
                                        : "Buses"}
                            </span>
                        </Button>
                    </div>
                </div>

                {/* SUCCESS */}
                {submitted && (
                    <div className="mx-3 mb-3 flex items-start gap-2 rounded-xl bg-primary/10 px-3 py-3 text-xs font-medium text-primary sm:mx-6 sm:mb-4 sm:px-4 sm:text-sm">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 sm:size-5" />

                        <span>
                            Search received. We are finding the best {service} options
                            for you.
                        </span>
                    </div>
                )}
            </form>
        </section>
    );
}