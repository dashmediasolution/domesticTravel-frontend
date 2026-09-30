"use client";

import { useState } from "react";

import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
    ImagePlus,
    Loader2,
    Upload,
    X,
} from "lucide-react";

import { bannerSchema } from "@/lib/validations/banner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

import type {
    BannerFormInput,
} from "@/lib/validations/banner";

const TARGET_OPTIONS = [
    {
        value: "DESTINATION",
        label: "Destination",
        placeholder: "/destinations/uttarakhand",
    },
    {
        value: "PACKAGE",
        label: "Package",
        placeholder: "/package/uttarakhand/rishikesh",
    },
    {
        value: "OFFER",
        label: "Offer",
        placeholder: "/offers/goa",
    },
    {
        value: "CUSTOM_URL",
        label: "Custom URL",
        placeholder: "https://example.com",
    },
] as const;

export default function CreateBannerForm() {
    const [imagePreview, setImagePreview] = useState<string | null>(
        null
    );

    const [submitError, setSubmitError] = useState("");

    const [successMessage, setSuccessMessage] = useState("");

    const {
        register,
        control,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<BannerFormInput>({
        resolver: zodResolver(bannerSchema),
        defaultValues: {
            title: "",
            altText: "",
            targetType: "DESTINATION",
            targetUrl: "",
            isActive: true,
            isFeatured: false,
            startDate: "",
            endDate: "",
            sortOrder: 0,
        },
    });

    const targetType = watch("targetType");

    const selectedTarget = TARGET_OPTIONS.find(
        (item) => item.value === targetType
    );

    const handleImageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        if (file.size > 7 * 1024 * 1024) {
            setSubmitError("Image must be smaller than 5MB");
            event.target.value = "";
            return;
        }

        if (
            ![
                "image/jpeg",
                "image/png",
                "image/webp",
            ].includes(file.type)
        ) {
            setSubmitError(
                "Only JPG, PNG, and WEBP images are allowed"
            );
            event.target.value = "";
            return;
        }

        setSubmitError("");

        const previewUrl = URL.createObjectURL(file);

        setImagePreview((previous) => {
            if (previous) {
                URL.revokeObjectURL(previous);
            }

            return previewUrl;
        });
    };
const removeImage = () => {
    setImagePreview((previous) => {
        if (previous) {
            URL.revokeObjectURL(previous);
        }

        return null;
    });

    const input = document.querySelector(
        'input[name="image"]'
    ) as HTMLInputElement | null;

    if (input) {
        input.value = "";
    }
};
    const onSubmit = async (values: BannerFormInput) => {
        setSubmitError("");
        setSuccessMessage("");

        try {
            const form = document.querySelector(
                "#create-banner-form"
            ) as HTMLFormElement | null;

            if (!form) {
                throw new Error("Banner form was not found");
            }

            const imageInput = form.querySelector(
                'input[name="image"]'
            ) as HTMLInputElement | null;

            const image = imageInput?.files?.[0];

            if (!image) {
                setSubmitError("Please select a banner image");
                return;
            }

            const formData = new FormData();

            formData.append("title", values.title);
            formData.append("altText", values.altText ?? "");
            formData.append("targetType", values.targetType);
            formData.append("targetUrl", values.targetUrl);

            formData.append(
                "isActive",
                String(values.isActive)
            );

            formData.append(
                "isFeatured",
                String(values.isFeatured)
            );

            formData.append(
                "startDate",
                values.startDate ?? ""
            );

            formData.append(
                "endDate",
                values.endDate ?? ""
            );

            formData.append(
                "sortOrder",
                String(values.sortOrder)
            );

            formData.append("image", image);

            const response = await fetch(
                "/api/admin/banners",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result?.message ||
                        "Failed to create banner"
                );
            }

            setSuccessMessage(
                "Banner created successfully."
            );

            reset();

            setImagePreview((previous) => {
                if (previous) {
                    URL.revokeObjectURL(previous);
                }

                return null;
            });

            if (imageInput) {
                imageInput.value = "";
            }
        } catch (error) {
            setSubmitError(
                error instanceof Error
                    ? error.message
                    : "Something went wrong while creating the banner."
            );
        }
    };

    return (
        <form
            id="create-banner-form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            {submitError && (
                <div className="rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    {submitError}
                </div>
            )}

            {successMessage && (
                <div className="rounded-lg border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary">
                    {successMessage}
                </div>
            )}

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                <div className="space-y-6 xl:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Banner Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">
                                    Banner Title
                                </Label>

                                <Input
                                    id="title"
                                    placeholder="Explore Uttarakhand"
                                    {...register("title")}
                                />

                                {errors.title && (
                                    <p className="text-sm text-destructive">
                                        {errors.title.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="altText">
                                    Alt Text
                                </Label>

                                <Textarea
                                    id="altText"
                                    placeholder="Beautiful Uttarakhand travel destination"
                                    rows={3}
                                    {...register("altText")}
                                />

                                {errors.altText && (
                                    <p className="text-sm text-destructive">
                                        {errors.altText.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="targetType">
                                    Target Type
                                </Label>

                                <select
                                    id="targetType"
                                    {...register("targetType")}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                                >
                                    {TARGET_OPTIONS.map(
                                        (option) => (
                                            <option
                                                key={
                                                    option.value
                                                }
                                                value={
                                                    option.value
                                                }
                                            >
                                                {option.label}
                                            </option>
                                        )
                                    )}
                                </select>

                                {errors.targetType && (
                                    <p className="text-sm text-destructive">
                                        {
                                            errors
                                                .targetType
                                                .message
                                        }
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="targetUrl">
                                    Target URL
                                </Label>

                                <Input
                                    id="targetUrl"
                                    placeholder={
                                        selectedTarget?.placeholder
                                    }
                                    {...register(
                                        "targetUrl"
                                    )}
                                />

                                <p className="text-xs text-muted-foreground">
                                    {targetType ===
                                    "CUSTOM_URL"
                                        ? "Enter a complete HTTP or HTTPS URL."
                                        : "Enter the internal route where this banner should redirect."
                                    }
                                </p>

                                {errors.targetUrl && (
                                    <p className="text-sm text-destructive">
                                        {
                                            errors.targetUrl
                                                .message
                                        }
                                    </p>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Banner Image
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div className="space-y-4">
                                <div className="rounded-xl border-2 border-dashed border-muted-foreground/20 p-4">
                                    {imagePreview ? (
                                        <div className="relative overflow-hidden rounded-lg">
                                            <img
                                                src={
                                                    imagePreview
                                                }
                                                alt="Banner preview"
                                                className="aspect-[1344/340] w-full object-cover"
                                            />

                                            <button
                                                type="button"
                                                onClick={
                                                    removeImage
                                                }
                                                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                    ) : (
                                        <label
                                            htmlFor="banner-image"
                                            className="flex cursor-pointer flex-col items-center justify-center py-12 text-center"
                                        >
                                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <ImagePlus className="h-7 w-7" />
                                            </div>

                                            <p className="text-sm font-medium">
                                                Upload banner
                                                image
                                            </p>

                                            <p className="mt-1 text-xs text-muted-foreground">
                                                JPG, PNG or
                                                WEBP · Max
                                                5MB
                                            </p>

                                            <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                                                <Upload className="h-4 w-4" />
                                                Choose Image
                                            </div>
                                        </label>
                                    )}

                                    <input
                                        id="banner-image"
                                        name="image"
                                        type="file"
                                        accept="image/jpeg,image/png,image/webp"
                                        onChange={
                                            handleImageChange
                                        }
                                        className={
                                            imagePreview
                                                ? "mt-4 block w-full text-sm"
                                                : "sr-only"
                                        }
                                    />
                                </div>

                                <p className="text-xs text-muted-foreground">
                                    Recommended banner
                                    ratio: 1344 × 340.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Publishing
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            <Controller
                                name="isActive"
                                control={control}
                                render={({
                                    field,
                                }) => (
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <Label>
                                                Active
                                            </Label>

                                            <p className="mt-1 text-xs text-muted-foreground">
                                                Show this
                                                banner on
                                                the website.
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

                            <Controller
                                name="isFeatured"
                                control={control}
                                render={({
                                    field,
                                }) => (
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <Label>
                                                Featured
                                            </Label>

                                            <p className="mt-1 text-xs text-muted-foreground">
                                                Mark this
                                                banner as
                                                featured.
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

                            <div className="space-y-2">
                                <Label htmlFor="sortOrder">
                                    Sort Order
                                </Label>

                                <Input
                                    id="sortOrder"
                                    type="number"
                                    min={0}
                                    {...register(
                                        "sortOrder",
                                        {
                                            valueAsNumber:
                                                true,
                                        }
                                    )}
                                />

                                <p className="text-xs text-muted-foreground">
                                    Lower numbers appear
                                    first.
                                </p>

                                {errors.sortOrder && (
                                    <p className="text-sm text-destructive">
                                        {
                                            errors.sortOrder
                                                .message
                                        }
                                    </p>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Schedule
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-5">
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
                                    <p className="text-sm text-destructive">
                                        {
                                            errors.startDate
                                                .message
                                        }
                                    </p>
                                )}
                            </div>

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
                                    <p className="text-sm text-destructive">
                                        {
                                            errors.endDate
                                                .message
                                        }
                                    </p>
                                )}
                            </div>

                            <p className="text-xs leading-5 text-muted-foreground">
                                Leave both fields empty
                                if the banner should not
                                have a scheduled period.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <Button
                    type="button"
                    variant="outline"
                    disabled={isSubmitting}
                    onClick={() => {
                        reset();

                        setImagePreview(
                            (previous) => {
                                if (previous) {
                                    URL.revokeObjectURL(
                                        previous
                                    );
                                }

                                return null;
                            }
                        );

                        setSubmitError("");
                        setSuccessMessage("");

                        const input =
                            document.querySelector(
                                'input[name="image"]'
                            ) as HTMLInputElement | null;

                        if (input) {
                            input.value = "";
                        }
                    }}
                >
                    Reset
                </Button>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="min-w-[160px]"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creating...
                        </>
                    ) : (
                        "Create Banner"
                    )}
                </Button>
            </div>
        </form>
    );
}