"use client"

import {
    Flame,
    CalendarCheck,
    Users,
    UserRound,
    CheckCircle,
    ArrowRight,
    ShieldCheck,
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
        <div className="w-full d  overflow-hidden rounded-2xl border border-border bg-white shadow-sm">

            {/* Header */}
            <div className="border-b px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2 text-sm font-medium text-orange-500 sm:text-base">
                    <Flame className="size-4 fill-orange-500 sm:size-5" />
                    <span>Exclusive Limited Time Offer</span>
                </div>
            </div>

            {/* Pricing */}
            <div className="px-4 pt-4 sm:px-5 sm:pt-5">

                <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground sm:text-sm">
                        Original Price
                    </span>

                    <span className="text-sm font-medium line-through sm:text-base">
                        {details.originalPrice}
                    </span>
                </div>

                <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground sm:text-sm">
                        Offer Price
                    </span>

                    <span className="text-sm font-medium sm:text-base">
                        {details.offerPrice}
                    </span>
                </div>

                <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-2xl font-bold tracking-tight sm:text-3xl">
                        {details.offerPrice}
                    </span>

                    <span className="text-xs text-muted-foreground sm:text-sm">
                        /person
                    </span>
                </div>

                {/* Savings */}
                <div className="mt-3 inline-flex rounded-full bg-primary px-4 py-2 text-xs font-medium text-white sm:text-sm">
                    You Save {details.saveAmount} ({details.discount} OFF)
                </div>
            </div>

            {/* Details */}
            <div className="mx-4 mt-4 border-t pt-4 sm:mx-5">
                <div className="space-y-3">

                    <OfferDetail
                        icon={<CalendarCheck />}
                        label="Offer valid till"
                        value={details.validTill}
                    />

              

                    <OfferDetail
                        icon={<UserRound />}
                        label="Group Size"
                        value={details.groupSize}
                    />

                    <OfferDetail
                        icon={<CheckCircle />}
                        label="Instant Confirmation"
                    />

                </div>
            </div>

            {/* Claim button */}
            <div className="mx-4 mt-4 border-t pt-4 sm:mx-5">
                <button
                    type="button"
                    onClick={onClaim}
                    className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-white transition-all hover:opacity-90 active:scale-[0.98] sm:h-14 sm:text-base"
                >
                    <span>Claim This Offer</span>
                    <ArrowRight className="size-5" />
                </button>
            </div>

            {/* Security */}
            <div className="flex items-center justify-center gap-2 px-4 py-4 text-center">
                <ShieldCheck className="size-5 shrink-0 text-primary" />

                <span className="text-[11px] font-medium text-muted-foreground sm:text-xs">
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
        <div className="flex items-center gap-3">
            <span className="flex size-5 shrink-0 items-center justify-center text-primary">
                {icon}
            </span>

            <span className="min-w-0 flex-1 text-xs text-muted-foreground sm:text-sm">
                {label}
            </span>

            {value && (
                <span className="shrink-0 text-right text-xs font-medium sm:text-sm">
                    {value}
                </span>
            )}
        </div>
    )
}