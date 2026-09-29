"use client";

import { useEffect, useRef, useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Check, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    offerSchema,
    OfferFormInput,
    OfferFormData,
} from "@/lib/validations/offer";

type PackageItem = {
    id: string;
    name: string;
};

type CreateOfferFormProps = {
    packages?: PackageItem[];
    onSuccess?: () => void;
};

const slugify = (value: string) => {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
};

export default function CreateOfferForm({
    packages = [],
    onSuccess,
}: CreateOfferFormProps) {
    const [packageList, setPackageList] =
        useState<PackageItem[]>(packages);

    const [loadingPackages, setLoadingPackages] =
        useState(false);

    const [submitting, setSubmitting] =
        useState(false);

    const [serverError, setServerError] =
        useState("");

    const [successMessage, setSuccessMessage] =
        useState("");

    /*
     * Prevent the package API from being called multiple times.
     *
     * This is especially useful because React Strict Mode can
     * execute effects more than once during development.
     */
    const packagesFetched = useRef(false);

    const {
        register,
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<OfferFormInput, unknown, OfferFormData>({
        resolver: zodResolver(offerSchema),

        defaultValues: {
            title: "",
            slug: "",
            type: "SPECIAL",
            description: "",
            packageId: "",
            originalPrice: null,
            offerPrice: 0,
            startDate: "",
            endDate: "",
            isActive: true,
            isFeatured: false,
            badgeText: "",
        },
    });

    const title = watch("title");

    /*
     * Load packages.
     *
     * If packages are already provided by the parent,
     * don't call the API.
     *
     * If packages are not provided, fetch them only once.
     */
    useEffect(() => {
        if (packages.length > 0) {
            setPackageList(packages);
            return;
        }

        if (packagesFetched.current) {
            return;
        }

        packagesFetched.current = true;

        const fetchPackages = async () => {
            try {
                setLoadingPackages(true);
                setServerError("");

                const response = await fetch(
                    "/api/admin/get-all-packages?limit=50"
                );

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(
                        result.message ||
                            "Failed to fetch packages"
                    );
                }

                const packagesData = Array.isArray(
                    result.data
                )
                    ? result.data
                    : result.data?.packages || [];

                setPackageList(packagesData);
            } catch (error) {
                /*
                 * Allow another attempt if the request actually
                 * failed.
                 */
                packagesFetched.current = false;

                setServerError(
                    error instanceof Error
                        ? error.message
                        : "Failed to fetch packages"
                );
            } finally {
                setLoadingPackages(false);
            }
        };

        fetchPackages();
    }, [packages]);

    /*
     * Automatically generate slug from title.
     */
    useEffect(() => {
        if (!title) {
            setValue("slug", "", {
                shouldValidate: false,
            });

            return;
        }

        const slug = slugify(title);

        setValue("slug", slug, {
            shouldValidate: false,
        });
    }, [title, setValue]);

    /*
     * Submit form.
     */
    const onSubmit = async (values: OfferFormData) => {
        try {
            setSubmitting(true);
            setServerError("");
            setSuccessMessage("");

            const response = await fetch(
                "/api/admin/offers",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                if (result.errors) {
                    const firstError = Object.values(
                        result.errors
                    )
                        .flat()
                        .find(Boolean);

                    throw new Error(
                        String(
                            firstError ||
                                result.message ||
                                "Failed to create offer"
                        )
                    );
                }

                throw new Error(
                    result.message ||
                        "Failed to create offer"
                );
            }

            setSuccessMessage(
                "Offer created successfully"
            );

            onSuccess?.();
        } catch (error) {
            setServerError(
                error instanceof Error
                    ? error.message
                    : "Failed to create offer"
            );
        } finally {
            setSubmitting(false);
        }
    };

    /*
     * React Hook Form validation errors.
     */
    const onInvalid = (formErrors: typeof errors) => {
        console.log(
            "FORM VALIDATION ERRORS:",
            formErrors
        );
    };

    return (
        <form
            onSubmit={handleSubmit(
                onSubmit,
                onInvalid
            )}
            className="space-y-8"
        >
            {/* Server Error */}

            {serverError && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {serverError}
                </div>
            )}

            {/* Success */}

            {successMessage && (
                <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600">
                    {successMessage}
                </div>
            )}

            {/* Basic Information */}

            <section className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="mb-6">
                    <h2 className="text-lg font-semibold">
                        Basic Information
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Add the basic information for this
                        offer.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Offer Title */}

                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="title">
                            Offer Title
                        </Label>

                        <Input
                            id="title"
                            {...register("title")}
                            placeholder="Summer Special Offer"
                        />

                        {errors.title && (
                            <p className="text-sm text-red-500">
                                {errors.title.message}
                            </p>
                        )}
                    </div>

                    {/* Slug */}

                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="slug">
                            Slug
                        </Label>

                        <Input
                            id="slug"
                            {...register("slug")}
                            placeholder="summer-special-offer"
                            readOnly
                            className="bg-muted"
                        />

                        {errors.slug && (
                            <p className="text-sm text-red-500">
                                {errors.slug.message}
                            </p>
                        )}

                        <p className="text-xs text-muted-foreground">
                            Automatically generated from
                            the offer title.
                        </p>
                    </div>

                    {/* Offer Type */}

                    <div className="space-y-2">
                        <Label htmlFor="type">
                            Offer Type
                        </Label>

                        <Controller
                            name="type"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    value={field.value}
                                    onValueChange={
                                        field.onChange
                                    }
                                >
                                    <SelectTrigger id="type">
                                        <SelectValue placeholder="Select offer type" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="REGULAR">
                                            Regular
                                        </SelectItem>

                                        <SelectItem value="EARLY_BIRD">
                                            Early Bird
                                        </SelectItem>

                                        <SelectItem value="FLASH_SALE">
                                            Flash Sale
                                        </SelectItem>

                                        <SelectItem value="SEASONAL">
                                            Seasonal
                                        </SelectItem>

                                        <SelectItem value="FESTIVE">
                                            Festive
                                        </SelectItem>

                                        <SelectItem value="LIMITED_TIME">
                                            Limited Time
                                        </SelectItem>

                                        <SelectItem value="SPECIAL">
                                            Special
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />

                        {errors.type && (
                            <p className="text-sm text-red-500">
                                {errors.type.message}
                            </p>
                        )}
                    </div>

                    {/* Package */}

                    <div className="space-y-2">
                        <Label htmlFor="packageId">
                            Package
                        </Label>

                        <Controller
                            name="packageId"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    value={field.value}
                                    onValueChange={
                                        field.onChange
                                    }
                                    disabled={
                                        loadingPackages
                                    }
                                >
                                    <SelectTrigger id="packageId">
                                        <SelectValue
                                            placeholder={
                                                loadingPackages
                                                    ? "Loading packages..."
                                                    : "Select package"
                                            }
                                        />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {packageList.length ===
                                        0 ? (
                                            <div className="px-3 py-2 text-sm text-muted-foreground">
                                                No packages
                                                found
                                            </div>
                                        ) : (
                                            packageList.map(
                                                (pkg) => (
                                                    <SelectItem
                                                        key={
                                                            pkg.id
                                                        }
                                                        value={
                                                            pkg.id
                                                        }
                                                    >
                                                        {
                                                            pkg.name
                                                        }
                                                    </SelectItem>
                                                )
                                            )
                                        )}
                                    </SelectContent>
                                </Select>
                            )}
                        />

                        {errors.packageId && (
                            <p className="text-sm text-red-500">
                                {
                                    errors.packageId
                                        .message
                                }
                            </p>
                        )}
                    </div>

                    {/* Description */}

                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="description">
                            Description
                        </Label>

                        <Textarea
                            id="description"
                            {...register(
                                "description"
                            )}
                            placeholder="Describe this offer..."
                            rows={5}
                        />

                        {errors.description && (
                            <p className="text-sm text-red-500">
                                {
                                    errors.description
                                        .message
                                }
                            </p>
                        )}
                    </div>

                    {/* Badge Text */}

                    <div className="space-y-2">
                        <Label htmlFor="badgeText">
                            Badge Text
                        </Label>

                        <Input
                            id="badgeText"
                            {...register(
                                "badgeText"
                            )}
                            placeholder="Limited Time"
                        />

                        {errors.badgeText && (
                            <p className="text-sm text-red-500">
                                {
                                    errors.badgeText
                                        .message
                                }
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Pricing */}

            <section className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="mb-6">
                    <h2 className="text-lg font-semibold">
                        Pricing
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Set the original and discounted
                        prices.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Original Price */}

                    <div className="space-y-2">
                        <Label htmlFor="originalPrice">
                            Original Price
                        </Label>

                        <Input
                            id="originalPrice"
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="15000"
                            {...register(
                                "originalPrice",
                                {
                                    setValueAs: (
                                        value
                                    ) =>
                                        value ===
                                            "" ||
                                        value === null
                                            ? null
                                            : Number(
                                                  value
                                              ),
                                }
                            )}
                        />

                        {errors.originalPrice && (
                            <p className="text-sm text-red-500">
                                {
                                    errors
                                        .originalPrice
                                        .message
                                }
                            </p>
                        )}
                    </div>

                    {/* Offer Price */}

                    <div className="space-y-2">
                        <Label htmlFor="offerPrice">
                            Offer Price
                        </Label>

                        <Input
                            id="offerPrice"
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="9999"
                            {...register(
                                "offerPrice",
                                {
                                    setValueAs: (
                                        value
                                    ) =>
                                        value === ""
                                            ? 0
                                            : Number(
                                                  value
                                              ),
                                }
                            )}
                        />

                        {errors.offerPrice && (
                            <p className="text-sm text-red-500">
                                {
                                    errors.offerPrice
                                        .message
                                }
                            </p>
                        )}
                    </div>
                </div>

                <p className="mt-4 text-xs text-muted-foreground">
                    Discount percentage and savings are
                    calculated automatically on the server.
                </p>
            </section>

            {/* Offer Period */}

            <section className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="mb-6">
                    <h2 className="text-lg font-semibold">
                        Offer Period
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Set when this offer starts and ends.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Start Date */}

                    <div className="space-y-2">
                        <Label htmlFor="startDate">
                            Start Date
                        </Label>

                        <Input
                            id="startDate"
                            type="datetime-local"
                            {...register(
                                "startDate"
                            )}
                        />

                        {errors.startDate && (
                            <p className="text-sm text-red-500">
                                {
                                    errors.startDate
                                        .message
                                }
                            </p>
                        )}
                    </div>

                    {/* End Date */}

                    <div className="space-y-2">
                        <Label htmlFor="endDate">
                            End Date
                        </Label>

                        <Input
                            id="endDate"
                            type="datetime-local"
                            {...register(
                                "endDate"
                            )}
                        />

                        {errors.endDate && (
                            <p className="text-sm text-red-500">
                                {
                                    errors.endDate
                                        .message
                                }
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Publishing */}

            <section className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="mb-6">
                    <h2 className="text-lg font-semibold">
                        Publishing
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Control the visibility of this offer.
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Active */}

                    <Controller
                        name="isActive"
                        control={control}
                        render={({ field }) => (
                            <div className="flex items-center justify-between rounded-lg border p-4">
                                <div>
                                    <Label className="text-sm font-medium">
                                        Active Offer
                                    </Label>

                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Allow this offer to
                                        be displayed.
                                    </p>
                                </div>

                                <Switch
                                    checked={
                                        field.value
                                    }
                                    onCheckedChange={
                                        field.onChange
                                    }
                                />
                            </div>
                        )}
                    />

                    {/* Featured */}

                    <Controller
                        name="isFeatured"
                        control={control}
                        render={({ field }) => (
                            <div className="flex items-center justify-between rounded-lg border p-4">
                                <div>
                                    <Label className="text-sm font-medium">
                                        Featured Offer
                                    </Label>

                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Show this offer in
                                        featured sections.
                                    </p>
                                </div>

                                <Switch
                                    checked={
                                        field.value
                                    }
                                    onCheckedChange={
                                        field.onChange
                                    }
                                />
                            </div>
                        )}
                    />
                </div>
            </section>

            {/* Submit */}

            <div className="flex justify-end">
                <Button
                    type="submit"
                    disabled={submitting}
                    className="min-w-[160px]"
                >
                    {submitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creating...
                        </>
                    ) : (
                        <>
                            <Check className="mr-2 h-4 w-4" />
                            Create Offer
                        </>
                    )}
                </Button>
            </div>
        </form>
    );
}