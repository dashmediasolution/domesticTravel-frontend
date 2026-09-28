"use client";

import { useEffect, useState } from "react";
import {
    useFieldArray,
    useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";

import type {
    AppDispatch,
    RootState,
} from "@/store";

import {
    createPackage,
    resetPackageState,
} from "@/store/packageSlice";
import {
    packageSchema,
    type PackageFormInput,
    type PackageFormValues,
} from "@/lib/validations/package";

const inputClass =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#2FC2B0]";

const emptyItinerary = {
    day: 1,
    title: "",
    description: "",
    activities: [""],
    meals: [""],
    overnight: "",
};

export default function CreatePackageForm() {
    const dispatch =
        useDispatch<AppDispatch>();

    const {
        loading,
        success,
        error,
    } = useSelector(
        (state: RootState) =>
            state.package
    );

    const [images, setImages] =
        useState<File[]>([]);

const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
} = useForm<PackageFormInput, unknown, PackageFormValues>({
    resolver: zodResolver(packageSchema),
    defaultValues: {
        name: "",
        slug: "",
        category: "",
        type: "REGULAR",
        occasion: "NONE",
        subtitle: "",
        description: "",
        location: "",
        latitude: undefined,
        longitude: undefined,
        duration: "",
        groupSize: "",
        idealTrip: "",
        budget: "",
        bestTimeToVisit: "",
        originalPrice: undefined,
        offerPrice: undefined,
        discount: undefined,
        saveAmount: undefined,
        validTill: "",
        rating: undefined,
        reviewsCount: undefined,
        highlights: [""],
        inclusions: [""],
        exclusions: [""],
        whyVisitTitle: "",
        whyVisitDescription: "",
        whyVisitHighlights: [""],
        heroImage: "",
        gallery: [],
        itinerary: [
            {
                day: 1,
                title: "",
                description: "",
                activities: [""],
                meals: [""],
                overnight: "",
            },
        ],
        metaTitle: "",
        metaDescription: "",
        keywords: [""],
        isPublished: false,
        isFeatured: false,
        publishedAt: "",
    },
});
    const {
        fields: itineraryFields,
        append: appendItinerary,
        remove: removeItinerary,
    } = useFieldArray({
        control,
        name: "itinerary",
    });

    const packageType = watch("type");
    const name = watch("name");

    useEffect(() => {
        const slug = name
            ?.toLowerCase()
            .trim()
            .replace(
                /[^a-z0-9\s-]/g,
                ""
            )
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");

        setValue("slug", slug);
    }, [name, setValue]);

    useEffect(() => {
        if (packageType === "REGULAR") {
            setValue(
                "occasion",
                "NONE"
            );
        }
    }, [packageType, setValue]);

    useEffect(() => {
        if (success) {
            reset();
            setImages([]);

            const timer =
                setTimeout(() => {
                    dispatch(
                        resetPackageState()
                    );
                }, 3000);

            return () =>
                clearTimeout(timer);
        }
    }, [
        success,
        dispatch,
        reset,
    ]);

    const onSubmit = async (
        values: PackageFormValues
    ) => {
        if (!images.length) {
            alert(
                "Please upload at least one package image."
            );
            return;
        }

        const formData =
            new FormData();

        Object.entries(values).forEach(
            ([key, value]) => {
                if (
                    key ===
                        "highlights" ||
                    key ===
                        "inclusions" ||
                    key ===
                        "exclusions" ||
                    key ===
                        "whyVisitHighlights" ||
                    key ===
                        "keywords" ||
                    key ===
                        "itinerary" ||
                    key === "gallery"
                ) {
                    formData.append(
                        key,
                        JSON.stringify(value)
                    );

                    return;
                }

                if (
                    typeof value ===
                    "boolean"
                ) {
                    formData.append(
                        key,
                        String(value)
                    );

                    return;
                }

                if (
                    value !== undefined &&
                    value !== null &&
                    value !== ""
                ) {
                    formData.append(
                        key,
                        String(value)
                    );
                }
            }
        );

        images.forEach(
            (image) => {
                formData.append(
                    "images",
                    image
                );
            }
        );

        await dispatch(
            createPackage({
                formData,
            })
        );
    };

    return (
        <form
            onSubmit={handleSubmit(
                onSubmit
            )}
            className="space-y-8"
        >
            {success && (
                <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                    Package created
                    successfully.
                </div>
            )}

            {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {error}
                </div>
            )}

            <section className="rounded-xl border bg-white p-6">
                <h2 className="mb-6 text-xl font-semibold">
                    Basic Information
                </h2>

                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Package Name
                        </label>

                        <input
                            {...register(
                                "name"
                            )}
                            className={
                                inputClass
                            }
                            placeholder="Kashmir Paradise"
                        />

                        {errors.name && (
                            <p className="mt-1 text-xs text-red-500">
                                {
                                    errors
                                        .name
                                        .message
                                }
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Slug
                        </label>

                        <input
                            {...register(
                                "slug"
                            )}
                            readOnly
                            className={`${inputClass} bg-gray-50`}
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Category
                        </label>

                        <input
                            {...register(
                                "category"
                            )}
                            className={
                                inputClass
                            }
                            placeholder="Nature"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Package Type
                        </label>

                        <select
                            {...register(
                                "type"
                            )}
                            className={
                                inputClass
                            }
                        >
                            <option value="REGULAR">
                                Regular Package
                            </option>

                            <option value="SPECIAL">
                                Special Package
                            </option>
                        </select>
                    </div>

                    {packageType ===
                        "SPECIAL" && (
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Special Occasion
                            </label>

                            <select
                                {...register(
                                    "occasion"
                                )}
                                className={
                                    inputClass
                                }
                            >
                                <option value="NONE">
                                    Select Occasion
                                </option>

                                <option value="CHRISTMAS">
                                    Christmas
                                </option>

                                <option value="DIWALI">
                                    Diwali
                                </option>

                                <option value="NEW_YEAR">
                                    New Year
                                </option>

                                <option value="VALENTINE">
                                    Valentine
                                </option>

                                <option value="HOLI">
                                    Holi
                                </option>

                                <option value="EID">
                                    Eid
                                </option>

                                <option value="SUMMER">
                                    Summer
                                </option>

                                <option value="WINTER">
                                    Winter
                                </option>

                                <option value="FESTIVAL">
                                    Festival
                                </option>

                                <option value="OTHER">
                                    Other
                                </option>
                            </select>
                        </div>
                    )}

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Subtitle
                        </label>

                        <input
                            {...register(
                                "subtitle"
                            )}
                            className={
                                inputClass
                            }
                            placeholder="The Paradise of Lakes & Mountains"
                        />
                    </div>
                </div>

                <div className="mt-5">
                    <label className="mb-2 block text-sm font-medium">
                        Description
                    </label>

                    <textarea
                        {...register(
                            "description"
                        )}
                        rows={5}
                        className={
                            inputClass
                        }
                        placeholder="Describe this travel package..."
                    />

                    {errors.description && (
                        <p className="mt-1 text-xs text-red-500">
                            {
                                errors
                                    .description
                                    .message
                            }
                        </p>
                    )}
                </div>
            </section>

            <section className="rounded-xl border bg-white p-6">
                <h2 className="mb-6 text-xl font-semibold">
                    Package Details
                </h2>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <FormInput
                        label="Location"
                        register={register(
                            "location"
                        )}
                        placeholder="Srinagar, Kashmir"
                    />

                    <FormInput
                        label="Duration"
                        register={register(
                            "duration"
                        )}
                        placeholder="5 Days / 4 Nights"
                    />

                    <FormInput
                        label="Group Size"
                        register={register(
                            "groupSize"
                        )}
                        placeholder="2 - 12 People"
                    />

                    <FormInput
                        label="Ideal Trip"
                        register={register(
                            "idealTrip"
                        )}
                        placeholder="Family, Honeymoon"
                    />

                    <FormInput
                        label="Budget"
                        register={register(
                            "budget"
                        )}
                        placeholder="₹25,000 - ₹40,000"
                    />

                    <FormInput
                        label="Best Time to Visit"
                        register={register(
                            "bestTimeToVisit"
                        )}
                        placeholder="March - October"
                    />
                </div>
            </section>

            <section className="rounded-xl border bg-white p-6">
                <h2 className="mb-6 text-xl font-semibold">
                    Pricing
                </h2>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <FormInput
                        label="Original Price"
                        register={register(
                            "originalPrice",
                            {
                                valueAsNumber:
                                    true,
                            }
                        )}
                        type="number"
                        placeholder="40000"
                    />

                    <FormInput
                        label="Offer Price"
                        register={register(
                            "offerPrice",
                            {
                                valueAsNumber:
                                    true,
                            }
                        )}
                        type="number"
                        placeholder="32000"
                    />

                    <FormInput
                        label="Discount %"
                        register={register(
                            "discount",
                            {
                                valueAsNumber:
                                    true,
                            }
                        )}
                        type="number"
                        placeholder="20"
                    />

                    <FormInput
                        label="Save Amount"
                        register={register(
                            "saveAmount",
                            {
                                valueAsNumber:
                                    true,
                            }
                        )}
                        type="number"
                        placeholder="8000"
                    />

                    <FormInput
                        label="Valid Till"
                        register={register(
                            "validTill"
                        )}
                        type="date"
                    />
                </div>
            </section>

            <ArrayField
                control={control}
                register={register}
                name="highlights"
                title="Highlights"
                placeholder="Dal Lake Shikara Ride"
            />

            <ArrayField
                control={control}
                register={register}
                name="inclusions"
                title="Inclusions"
                placeholder="Hotel accommodation"
            />

            <ArrayField
                control={control}
                register={register}
                name="exclusions"
                title="Exclusions"
                placeholder="Personal expenses"
            />

            <ArrayField
                control={control}
                register={register}
                name="whyVisitHighlights"
                title="Why Visit Highlights"
                placeholder="Beautiful Himalayan views"
            />

            <section className="rounded-xl border bg-white p-6">
                <h2 className="mb-6 text-xl font-semibold">
                    Why Visit
                </h2>

                <div className="space-y-5">
                    <FormInput
                        label="Title"
                        register={register(
                            "whyVisitTitle"
                        )}
                        placeholder="Why Visit Kashmir?"
                    />

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Description
                        </label>

                        <textarea
                            {...register(
                                "whyVisitDescription"
                            )}
                            rows={4}
                            className={
                                inputClass
                            }
                            placeholder="Explain why travelers should choose this package..."
                        />
                    </div>
                </div>
            </section>

            <section className="rounded-xl border bg-white p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                        Itinerary
                    </h2>

                    <button
                        type="button"
                        onClick={() =>
                            appendItinerary(
                                {
                                    day:
                                        itineraryFields.length +
                                        1,
                                    title: "",
                                    description:
                                        "",
                                    activities:
                                        [""],
                                    meals: [""],
                                    overnight:
                                        "",
                                }
                            )
                        }
                        className="rounded-lg bg-[#2FC2B0] px-4 py-2 text-sm font-medium text-white"
                    >
                        Add Day
                    </button>
                </div>

                <div className="space-y-6">
                    {itineraryFields.map(
                        (
                            field,
                            index
                        ) => (
                            <div
                                key={
                                    field.id
                                }
                                className="rounded-xl border p-5"
                            >
                                <div className="mb-5 flex items-center justify-between">
                                    <h3 className="font-semibold">
                                        Day{" "}
                                        {index +
                                            1}
                                    </h3>

                                    {itineraryFields.length >
                                        1 && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeItinerary(
                                                    index
                                                )
                                            }
                                            className="text-sm text-red-500"
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <FormInput
                                        label="Day Title"
                                        register={register(
                                            `itinerary.${index}.title`
                                        )}
                                        placeholder="Arrival in Srinagar"
                                    />

                                    <div>
                                        <label className="mb-2 block text-sm font-medium">
                                            Description
                                        </label>

                                        <textarea
                                            {...register(
                                                `itinerary.${index}.description`
                                            )}
                                            rows={
                                                3
                                            }
                                            className={
                                                inputClass
                                            }
                                            placeholder="Describe the day's activities..."
                                        />
                                    </div>

                                    <FormInput
                                        label="Overnight"
                                        register={register(
                                            `itinerary.${index}.overnight`
                                        )}
                                        placeholder="Srinagar"
                                    />
                                </div>
                            </div>
                        )
                    )}
                </div>
            </section>

            <section className="rounded-xl border bg-white p-6">
                <h2 className="mb-6 text-xl font-semibold">
                    SEO
                </h2>

                <div className="space-y-5">
                    <FormInput
                        label="Meta Title"
                        register={register(
                            "metaTitle"
                        )}
                        placeholder="Kashmir Tour Package"
                    />

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Meta Description
                        </label>

                        <textarea
                            {...register(
                                "metaDescription"
                            )}
                            rows={3}
                            className={
                                inputClass
                            }
                            placeholder="Explore the best Kashmir tour packages..."
                        />
                    </div>

                    <ArrayField
                        control={control}
                        register={
                            register
                        }
                        name="keywords"
                        title="Keywords"
                        placeholder="kashmir tour package"
                    />
                </div>
            </section>

            <section className="rounded-xl border bg-white p-6">
                <h2 className="mb-5 text-xl font-semibold">
                    Package Images
                </h2>

                <p className="mb-5 text-sm text-gray-500">
                    The first image will
                    automatically become
                    the hero image.
                </p>

                <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                    onChange={(event) => {
                        const selected =
                            Array.from(
                                event.target
                                    .files || []
                            ).slice(
                                0,
                                15
                            );

                        setImages(
                            selected
                        );
                    }}
                    className="block w-full text-sm"
                />

                {images.length >
                    0 && (
                    <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
                        {images.map(
                            (
                                image,
                                index
                            ) => (
                                <div
                                    key={`${image.name}-${index}`}
                                    className="overflow-hidden rounded-lg border"
                                >
                                    <img
                                        src={URL.createObjectURL(
                                            image
                                        )}
                                        alt={
                                            image.name
                                        }
                                        className="h-32 w-full object-cover"
                                    />

                                    <div className="p-2 text-xs">
                                        {index ===
                                            0 && (
                                            <span className="font-medium text-[#2FC2B0]">
                                                Hero Image
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                )}
            </section>

            <section className="rounded-xl border bg-white p-6">
                <h2 className="mb-5 text-xl font-semibold">
                    Publishing
                </h2>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <label className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            {...register(
                                "isPublished"
                            )}
                            className="h-4 w-4"
                        />

                        <span className="text-sm">
                            Publish Package
                        </span>
                    </label>

                    <label className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            {...register(
                                "isFeatured"
                            )}
                            className="h-4 w-4"
                        />

                        <span className="text-sm">
                            Featured Package
                        </span>
                    </label>
                </div>
            </section>

            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#2FC2B0] px-6 py-4 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {loading
                    ? "Creating Package..."
                    : "Create Package"}
            </button>
        </form>
    );
}

function FormInput({
    label,
    register,
    placeholder,
    type = "text",
}: {
    label: string;
    register: any;
    placeholder?: string;
    type?: string;
}) {
    return (
        <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
                {label}
            </label>

            <input
                {...register}
                type={type}
                placeholder={placeholder}
                className={inputClass}
            />
        </div>
    );
}

function ArrayField({
    control,
    register,
    name,
    title,
    placeholder,
}: any) {
    const {
        fields,
        append,
        remove,
    } = useFieldArray({
        control,
        name,
    });

    return (
        <section className="rounded-xl border bg-white p-6">
            <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                    {title}
                </h2>

                <button
                    type="button"
                    onClick={() =>
                        append("")
                    }
                    className="rounded-lg bg-[#2FC2B0] px-4 py-2 text-sm text-white"
                >
                    Add
                </button>
            </div>

            <div className="space-y-3">
                {fields.map(
                    (
                        field: any,
                        index: number
                    ) => (
                        <div
                            key={
                                field.id
                            }
                            className="flex gap-3"
                        >
                            <input
                                {...register(
                                    `${name}.${index}`
                                )}
                                className={
                                    inputClass
                                }
                                placeholder={
                                    placeholder
                                }
                            />

                            {fields.length >
                                1 && (
                                <button
                                    type="button"
                                    onClick={() =>
                                        remove(
                                            index
                                        )
                                    }
                                    className="px-3 text-sm text-red-500"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    )
                )}
            </div>
        </section>
    );
}