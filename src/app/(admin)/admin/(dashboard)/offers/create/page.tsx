"use client";

import { useRouter } from "next/navigation";

import CreateOfferForm from "@/components/admin/offers/CreateOfferForm";

export default function CreateOfferPage() {
    const router = useRouter();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">
                    Create Offer
                </h1>

                <p className="text-sm text-muted-foreground">
                    Create a promotional offer for
                    one of your travel packages.
                </p>
            </div>

            <CreateOfferForm
                onSuccess={() =>
                    router.push(
                        "/admin/offers"
                    )
                }
            />
        </div>
    );
}