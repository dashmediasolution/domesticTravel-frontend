"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CreatePackageForm from "./CreatePackageForm";


export default function PackageEditForm({
    packageId,
}: {
    packageId: string;
}) {
    const router = useRouter();

    const [packageData, setPackageData] =
        useState (null);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {
        const fetchPackage = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    `/api/admin/get-package/${packageId}`,
                    {
                        cache: "no-store",
                    }
                );

                const result =
                    await response.json();

                if (
                    !response.ok ||
                    !result.success
                ) {
                    throw new Error(
                        result.message ||
                            "Failed to load package"
                    );
                }

                setPackageData(result.data);
            } catch (error) {
                console.error(
                    "FETCH_PACKAGE_ERROR:",
                    error
                );

                setError(
                    error instanceof Error
                        ? error.message
                        : "Failed to load package"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchPackage();
    }, [packageId]);

    if (loading) {
        return (
            <div className="p-6">
                <div className="space-y-6">
                    <div className="h-8 w-64 animate-pulse rounded bg-muted" />

                    <div className="h-32 animate-pulse rounded-xl bg-muted" />

                    <div className="h-64 animate-pulse rounded-xl bg-muted" />
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6">
                <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-red-600">
                    {error}
                </div>
            </div>
        );
    }

    if (!packageData) {
        return (
            <div className="p-6">
                Package not found.
            </div>
        );
    }

    return (
        <CreatePackageForm
            mode="edit"
            packageId={packageId}
            initialData={packageData}
            onSuccess={() =>
                router.push(
                    "/admin/packages"
                )
            }
        />
    );
}