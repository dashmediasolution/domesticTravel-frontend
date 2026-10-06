"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
    CalendarDays,
    ChevronDown,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    ShieldCheck,
    User,
    Users,
    X,
} from "lucide-react";

interface BookingPackage {
    id?: string;
    slug?: string;
    name: string;
    image: string;
    location: string;
    duration: string;
    nights: string;
    price: number;
    description?: string;
    badge?: string;
}

interface BookingDialogProps {
    open: boolean;
    onClose: () => void;
    packageData: BookingPackage;
}

interface FormData {
    fullName: string;
    phone: string;
    email: string;
    checkIn: string;
    checkOut: string;
    specialRequests: string;
}

export default function BookingDialog({
    open,
    onClose,
    packageData,
}: BookingDialogProps) {
    const [mounted, setMounted] = useState(false);

    const [travellers, setTravellers] = useState(
        "2 Adults, 1 Room"
    );

    const [submitting, setSubmitting] = useState(false);

    const [submitMessage, setSubmitMessage] =
        useState("");

    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        phone: "",
        email: "",
        checkIn: "",
        checkOut: "",
        specialRequests: "",
    });

    console.log(packageData,"real check")

    useEffect(() => {
        setMounted(true);

        return () => {
            setMounted(false);
        };
    }, []);

    useEffect(() => {
        if (!open) return;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const handleChange = (
        field: keyof FormData,
        value: string
    ) => {
        setFormData((previous) => ({
            ...previous,
            [field]: value,
        }));
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        if (submitting) return;

        if (
            formData.checkIn &&
            formData.checkOut &&
            formData.checkOut <= formData.checkIn
        ) {
            setSubmitMessage(
                "Check-out date must be after the check-in date."
            );

            return;
        }

        try {
            setSubmitting(true);
            setSubmitMessage("");

            const response = await fetch("/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    packageId: packageData.id,
                    packageSlug: packageData.slug,

                    fullName: formData.fullName.trim(),
                    phone: formData.phone.trim(),
                    email: formData.email.trim(),

                    checkIn: formData.checkIn,
                    checkOut: formData.checkOut,

                    travellers,

                    specialRequests:
                        formData.specialRequests.trim(),
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message ||
                        "Failed to submit booking"
                );
            }

            setSubmitMessage(
                "Your booking request has been submitted successfully. We will contact you shortly."
            );

            setFormData({
                fullName: "",
                phone: "",
                email: "",
                checkIn: "",
                checkOut: "",
                specialRequests: "",
            });

            setTravellers("2 Adults, 1 Room");
        } catch (error) {
            console.error(
                "Booking submission error:",
                error
            );

            setSubmitMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        } finally {
            setSubmitting(false);
        }
    };

    if (!mounted || !open) {
        return null;
    }

    return createPortal(
        <div
            className="
                fixed
                inset-0
                z-[2147483647]
                flex
                items-center
                justify-center
                bg-black/60
                p-3
                sm:p-5
            "
            onClick={onClose}
        >
            <div
                className="
                    relative
                    flex
                    max-h-[95vh]
                    w-full
                    max-w-[1100px]
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-2xl
                "
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                {/* LEFT PACKAGE DETAILS */}

                <div className="relative hidden w-[38%] shrink-0 overflow-hidden lg:block">
                    <Image
                        src={packageData.image}
                        alt={packageData.name}
                        fill
                        sizes="420px"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#00383b] via-[#00383b]/25 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="mb-3 flex items-center gap-1.5 text-sm">
                            <MapPin className="h-4 w-4" />

                            <span>
                                {packageData.location}
                            </span>
                        </div>

                        <h2 className="font-serif text-2xl font-bold leading-tight">
                            {packageData.name}
                        </h2>

                        {packageData.description && (
                            <p className="mt-2 max-w-[330px] text-sm leading-5 text-white/85">
                                {packageData.description}
                            </p>
                        )}

                        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs">
                            <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4" />

                                <div>
                                    <p className="font-semibold">
                                        {packageData.duration}
                                    </p>

                                    <p className="text-white/75">
                                        {packageData.nights}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-lg">
                                    △
                                </span>

                                <div>
                                    <p className="font-semibold">
                                        Sightseeing,
                                    </p>

                                    <p className="text-white/75">
                                        Transfers & More
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 border-t border-white/20 pt-5">
                            <p className="text-xs text-white/70">
                                Starting from
                            </p>

                            <div className="mt-1 flex items-baseline gap-2">
                                <span className="text-3xl font-bold">
                                    ₹
                                    {packageData.price.toLocaleString(
                                        "en-IN"
                                    )}
                                </span>

                                <span className="text-xs text-white/75">
                                    per person
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM */}

                <div className="relative min-w-0 flex-1 overflow-y-auto">
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close booking form"
                        className="
                            absolute
                            right-4
                            top-4
                            z-20
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            text-[#00383b]
                            transition
                            hover:bg-[#00383b]/5
                        "
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div className="p-5 sm:p-7 lg:p-8">
                        {/* HEADER */}

                        <div className="pr-10">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#17676b]">
                                Book Your Trip
                            </p>

                            <h2 className="mt-1 font-serif text-2xl font-bold text-[#00383b] sm:text-3xl">
                                Complete Your Booking
                            </h2>

                            <p className="mt-2 max-w-[580px] text-sm leading-5 text-[#5e8183]">
                                Fill in your details below and
                                we'll get in touch with the best
                                travel options for you!
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-5 space-y-5"
                        >
                            {/* 1. TRAVELLER DETAILS */}

                            <section>
                                <SectionTitle
                                    number="1"
                                    title="Traveller Details"
                                />

                                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                    <Input
                                        icon={<User />}
                                        placeholder="Full Name *"
                                        value={
                                            formData.fullName
                                        }
                                        onChange={(value) =>
                                            handleChange(
                                                "fullName",
                                                value
                                            )
                                        }
                                        required
                                    />

                                    <div className="flex h-11 overflow-hidden rounded-lg border border-[#d7e2e2] focus-within:border-[#2fc2b0]">
                                        <div className="flex items-center gap-1 border-r border-[#d7e2e2] px-3 text-sm text-[#00383b]">
                                            <Phone className="h-4 w-4" />

                                            <span>+91</span>

                                            <ChevronDown className="h-3.5 w-3.5" />
                                        </div>

                                        <input
                                            type="tel"
                                            placeholder="Mobile Number *"
                                            value={
                                                formData.phone
                                            }
                                            onChange={(
                                                event
                                            ) =>
                                                handleChange(
                                                    "phone",
                                                    event.target
                                                        .value
                                                )
                                            }
                                            required
                                            className="
                                                min-w-0
                                                flex-1
                                                border-0
                                                bg-transparent
                                                px-3
                                                text-sm
                                                text-[#00383b]
                                                outline-none
                                                placeholder:text-[#7b9698]
                                            "
                                        />
                                    </div>

                                    <Input
                                        icon={<Mail />}
                                        placeholder="Email Address *"
                                        type="email"
                                        value={
                                            formData.email
                                        }
                                        onChange={(value) =>
                                            handleChange(
                                                "email",
                                                value
                                            )
                                        }
                                        required
                                        className="sm:col-span-2"
                                    />
                                </div>
                            </section>

                            {/* 2. TRAVEL DATE */}

                            <section>
                                <SectionTitle
                                    number="2"
                                    title="Travel Date"
                                />

                                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                    <Input
                                        icon={
                                            <CalendarDays />
                                        }
                                        type="date"
                                        placeholder="Check-in Date *"
                                        value={
                                            formData.checkIn
                                        }
                                        onChange={(value) =>
                                            handleChange(
                                                "checkIn",
                                                value
                                            )
                                        }
                                        required
                                    />

                                    <Input
                                        icon={
                                            <CalendarDays />
                                        }
                                        type="date"
                                        placeholder="Check-out Date *"
                                        value={
                                            formData.checkOut
                                        }
                                        onChange={(value) =>
                                            handleChange(
                                                "checkOut",
                                                value
                                            )
                                        }
                                        required
                                    />
                                </div>
                            </section>

                            {/* 3. TRAVELLERS */}

                            <section>
                                <SectionTitle
                                    number="3"
                                    title="No. of Travellers"
                                />

                                <div className="relative mt-3">
                                    <Users className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#17676b]" />

                                    <select
                                        value={travellers}
                                        onChange={(event) =>
                                            setTravellers(
                                                event.target
                                                    .value
                                            )
                                        }
                                        className="
                                            h-11
                                            w-full
                                            appearance-none
                                            rounded-lg
                                            border
                                            border-[#d7e2e2]
                                            bg-white
                                            pl-10
                                            pr-10
                                            text-sm
                                            text-[#00383b]
                                            outline-none
                                            focus:border-[#2fc2b0]
                                        "
                                    >
                                        <option>
                                            2 Adults, 1 Room
                                        </option>

                                        <option>
                                            1 Adult, 1 Room
                                        </option>

                                        <option>
                                            2 Adults, 2 Rooms
                                        </option>

                                        <option>
                                            3 Adults, 1 Room
                                        </option>

                                        <option>
                                            4 Adults, 2 Rooms
                                        </option>

                                        <option>
                                            2 Adults, 1 Child, 1 Room
                                        </option>

                                        <option>
                                            2 Adults, 2 Children, 1 Room
                                        </option>
                                    </select>

                                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#17676b]" />
                                </div>
                            </section>

                            {/* 4. SPECIAL REQUESTS */}

                            <section>
                                <SectionTitle
                                    number="4"
                                    title="Special Requests"
                                    optional
                                />

                                <div className="relative mt-3">
                                    <MessageSquare className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-[#17676b]" />

                                    <textarea
                                        value={
                                            formData.specialRequests
                                        }
                                        onChange={(event) =>
                                            handleChange(
                                                "specialRequests",
                                                event.target
                                                    .value
                                            )
                                        }
                                        placeholder="E.g. Room preference, dietary requirements, accessibility needs, etc."
                                        rows={3}
                                        className="
                                            w-full
                                            resize-none
                                            rounded-lg
                                            border
                                            border-[#d7e2e2]
                                            bg-white
                                            px-10
                                            py-3
                                            text-sm
                                            text-[#00383b]
                                            outline-none
                                            placeholder:text-[#8aa1a3]
                                            focus:border-[#2fc2b0]
                                        "
                                    />
                                </div>
                            </section>

                            {/* SUBMIT MESSAGE */}

                            {submitMessage && (
                                <div
                                    className={`
                                        rounded-lg
                                        border
                                        px-4
                                        py-3
                                        text-sm
                                        ${
                                            submitMessage.includes(
                                                "successfully"
                                            )
                                                ? "border-[#b8e5df] bg-[#effbf9] text-[#08756f]"
                                                : "border-red-200 bg-red-50 text-red-600"
                                        }
                                    `}
                                >
                                    {submitMessage}
                                </div>
                            )}

                            {/* FOOTER */}

                            <div
                                className="
                                    -mx-5
                                    -mb-5
                                    mt-6
                                    flex
                                    flex-col
                                    gap-4
                                    border-t
                                    border-[#e1e9e9]
                                    bg-[#fbfcfb]
                                    px-5
                                    py-4
                                    sm:-mx-7
                                    sm:-mb-7
                                    sm:flex-row
                                    sm:items-center
                                    sm:justify-between
                                    sm:px-7
                                    lg:-mx-8
                                    lg:-mb-8
                                    lg:px-8
                                "
                            >
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="h-6 w-6 shrink-0 text-[#0d9b91]" />

                                    <div>
                                        <p className="text-[10px] font-semibold text-[#0d7777]">
                                            Your information is
                                            safe with us
                                        </p>

                                        <p className="text-[9px] leading-4 text-[#789395]">
                                            We use
                                            industry-standard
                                            security measures
                                            to keep your data
                                            secure.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="
                                        flex
                                        h-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        gap-3
                                        rounded-full
                                        bg-[#0bb5ad]
                                        px-6
                                        text-sm
                                        font-semibold
                                        text-white
                                        transition
                                        hover:bg-[#079d97]
                                        active:scale-[0.98]
                                        disabled:cursor-not-allowed
                                        disabled:opacity-60
                                    "
                                >
                                    {submitting
                                        ? "Submitting..."
                                        : "Book"}

                                    {!submitting && (
                                        <span className="text-lg">
                                            →
                                        </span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

function SectionTitle({
    number,
    title,
    optional,
}: {
    number: string;
    title: string;
    optional?: boolean;
}) {
    return (
        <div className="flex items-center gap-2">
            <span
                className="
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0da69f]
                    text-[11px]
                    font-bold
                    text-white
                "
            >
                {number}
            </span>

            <span className="text-xs font-bold text-[#155c60]">
                {title}
            </span>

            {optional && (
                <span className="text-[10px] text-[#7b999b]">
                    (Optional)
                </span>
            )}
        </div>
    );
}

function Input({
    icon,
    placeholder,
    type = "text",
    value,
    onChange,
    required,
    className = "",
}: {
    icon: React.ReactNode;
    placeholder: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
    className?: string;
}) {
    return (
        <div
            className={`
                flex
                h-11
                items-center
                overflow-hidden
                rounded-lg
                border
                border-[#d7e2e2]
                bg-white
                transition
                focus-within:border-[#2fc2b0]
                ${className}
            `}
        >
            <span className="ml-3 shrink-0 text-[#17676b]">
                {icon}
            </span>

            <input
                type={type}
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
                }
                placeholder={placeholder}
                required={required}
                className="
                    min-w-0
                    flex-1
                    border-0
                    bg-transparent
                    px-3
                    text-sm
                    text-[#00383b]
                    outline-none
                    placeholder:text-[#7b9698]
                "
            />
        </div>
    );
}