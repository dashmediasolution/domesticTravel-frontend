"use client"

import {
    Flame,
    CalendarCheck,
    UserRound,
    CheckCircle,
    ShieldCheck,
    Phone,
} from "lucide-react"

type OfferDetails = {
    originalPrice: string
    offerPrice: string
    saveAmount: string
    discount: string
    validTill: string
    groupSize: string
}

type OfferCardProps = {
    details: OfferDetails
    onClaim?: () => void
}

export default function OfferCard({
    details,
    onClaim,
}: OfferCardProps) {
    return (
        <div className="w-full overflow-hidden rounded-xl border border-border bg-white shadow-sm">

            {/* Header */}
            <div className="border-b px-3 py-2.5 sm:px-4 sm:py-3">
                <div className="flex items-center gap-2 text-xs font-medium text-orange-500 sm:text-sm">
                    <Flame className="size-4 shrink-0 fill-orange-500" />
                    <span>Exclusive Limited Time Offer</span>
                </div>
            </div>

            {/* Pricing */}
            <div className="px-3 pt-3 sm:px-4 sm:pt-3.5">

                <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] text-muted-foreground sm:text-xs">
                        Original Price
                    </span>

                    <span className="text-xs font-medium line-through sm:text-sm">
                        {details.originalPrice}
                    </span>
                </div>

                <div className="mt-1.5 flex items-center justify-between gap-3">
                    <span className="text-[11px] text-muted-foreground sm:text-xs">
                        Offer Price
                    </span>

                    <span className="text-xs font-medium sm:text-sm">
                        {details.offerPrice}
                    </span>
                </div>

                <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-xl font-bold tracking-tight sm:text-2xl">
                        {details.offerPrice}
                    </span>

                    <span className="text-[10px] text-muted-foreground sm:text-xs">
                        /person
                    </span>
                </div>

                {/* Savings */}
                <div className="mt-2 inline-flex max-w-full rounded-full bg-primary px-2.5 py-1.5 text-[10px] font-medium text-white sm:px-3 sm:text-xs">
                    <span className="truncate">
                        You Save {details.saveAmount} ({details.discount} OFF)
                    </span>
                </div>
            </div>

            {/* Details */}
            <div className="mx-3 mt-3 border-t pt-3 sm:mx-4">
                <div className="space-y-2.5">

                    <OfferDetail
                        icon={<CalendarCheck className="size-3.5 sm:size-4" />}
                        label="Offer valid till"
                        value={details.validTill}
                    />

                    <OfferDetail
                        icon={<UserRound className="size-3.5 sm:size-4" />}
                        label="Group Size"
                        value={details.groupSize}
                    />

                    <OfferDetail
                        icon={<CheckCircle className="size-3.5 sm:size-4" />}
                        label="Instant Confirmation"
                    />

                </div>
            </div>

            {/* Call button */}
            <div className="mx-3 mt-3 border-t pt-3 sm:mx-4">
                <a
                    href="tel:+919876543210"
                    onClick={onClaim}
                    className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 text-xs font-medium text-white transition-all hover:opacity-90 active:scale-[0.98] sm:h-11 sm:text-sm"
                >
                    <Phone className="size-3.5 sm:size-4" />
                    <span>Call Now</span>
                </a>
            </div>

            {/* Security */}
            <div className="flex items-center justify-center gap-1.5 px-3 py-2.5 sm:gap-2 sm:px-4 sm:py-3">
                <ShieldCheck className="size-4 shrink-0 text-primary" />

                <span className="text-[10px] font-medium text-muted-foreground sm:text-[11px]">
                    Secure Booking - No Hidden Charges
                </span>
            </div>

        </div>
    )
}

function OfferDetail({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode
    label: string
    value?: string
}) {
    return (
        <div className="flex min-w-0 items-center gap-2 sm:gap-2.5">

            <span className="flex size-5 shrink-0 items-center justify-center text-primary">
                {icon}
            </span>

            <span className="min-w-0 flex-1 truncate text-[11px] text-muted-foreground sm:text-xs">
                {label}
            </span>

            {value && (
                <span className="shrink-0 text-right text-[11px] font-medium sm:text-xs">
                    {value}
                </span>
            )}
        </div>
    )
}