"use client"

import {
    Flame,
    CalendarCheck,
    UserRound,
    CheckCircle,
    ArrowRight,
    ShieldCheck,
    Phone 
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
            <div className="border-b px-4 py-2.5">
                <div className="flex items-center gap-2 text-sm font-medium text-orange-500">
                    <Flame className="size-4 fill-orange-500" />
                    <span>Exclusive Limited Time Offer</span>
                </div>
            </div>

            {/* Pricing */}
            <div className="px-4 pt-3.5">

                <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                        Original Price
                    </span>

                    <span className="text-sm font-medium line-through">
                        {details.originalPrice}
                    </span>
                </div>

                <div className="mt-1.5 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                        Offer Price
                    </span>

                    <span className="text-sm font-medium">
                        {details.offerPrice}
                    </span>
                </div>

                <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-2xl font-bold tracking-tight">
                        {details.offerPrice}
                    </span>

                    <span className="text-xs text-muted-foreground">
                        /person
                    </span>
                </div>

                {/* Savings */}
                <div className="mt-2 inline-flex rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-white">
                    You Save {details.saveAmount} ({details.discount} OFF)
                </div>
            </div>

            {/* Details */}
            <div className="mx-4 mt-3 border-t pt-3">
                <div className="space-y-2.5">

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
            <div className="mx-4 mt-3 border-t pt-3">
                <a
                    href="tel:+919876543210"
                    className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-white transition-all hover:opacity-90 active:scale-[0.98]"
                >
                   
                   <Phone className="size-4" />
                    <span>Call Now</span>
                </a>
            </div>

            {/* Security */}
            <div className="flex items-center justify-center gap-2 px-4 py-3">
                <ShieldCheck className="size-4.5 shrink-0 text-primary" />

                <span className="text-[11px] font-medium text-muted-foreground">
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
        <div className="flex items-center gap-2.5">
            <span className="flex size-5 shrink-0 items-center justify-center text-primary">
                {icon}
            </span>

            <span className="min-w-0 flex-1 text-xs text-muted-foreground">
                {label}
            </span>

            {value && (
                <span className="shrink-0 text-right text-xs font-medium">
                    {value}
                </span>
            )}
        </div>
    )
}