"use client";

import { use } from "react";

import PackageEditForm from "@/components/admin/packages/package-edit-form";

export default function EditPackagePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);

    return (
        <PackageEditForm packageId={id} />
    );
}