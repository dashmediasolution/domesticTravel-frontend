"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
    useForm,
    Controller,
    type FieldErrors,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    AlertCircle,
    ArrowLeft,
    Check,
    ChevronDown,
    ImagePlus,
    Loader2,
    Plus,
    Trash2,
    Upload,
    X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

import {
    packageSchema,
    type PackageFormInput,
    type PackageFormValues,
} from "@/lib/validations/package";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_GALLERY_IMAGES = 15;

const ALLOWED_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
];

type Destination = {
    id: string;
    name: string;
    slug: string;
};

type ParentPackage = {
    id: string;
    name: string;
    slug: string;
};

type WhyVisitItem = {
    id: string;
    title: string;
    description: string;
};

type ItineraryDay = {
    id: string;
    day: number;
    title: string;
    description: string;
    activities: string[];
    meals: string[];
    overnight: string;
};

type GalleryItem = {
    id: string;
    file: File;
    preview: string;
};

type ExistingImage = {
    url: string;
    publicId: string;
};

type PackageFormData = PackageFormValues & {
    id?: string;
    heroImage?: ExistingImage | null;
    gallery?: ExistingImage[];
};

type CreatePackageFormProps = {
    destinations?: Destination[];
    mode?: "create" | "edit";
    packageId?: string;
    initialData?: PackageFormData | null;
    onSuccess?: () => void;
};

function createWhyVisitItem(): WhyVisitItem {
    return {
        id: crypto.randomUUID(),
        title: "",
        description: "",
    };
}

function createItineraryDay(day: number): ItineraryDay {
    return {
        id: crypto.randomUUID(),
        day,
        title: "",
        description: "",
        activities: [],
        meals: [],
        overnight: "",
    };
}

function slugify(value: string) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

const parseNumber = (
    value: string | number | null | undefined
): number | null => {
    if (value === null || value === undefined) {
        return null;
    }

    if (typeof value === "number") {
        return Number.isFinite(value) ? value : null;
    }

    const trimmed = value.trim();

    if (!trimmed) {
        return null;
    }

    const number = Number(trimmed);

    return Number.isFinite(number) ? number : null;
};

function getErrorMessage(
    errors: FieldErrors<PackageFormValues>,
    field: keyof PackageFormValues
) {
    const error = errors[field];

    if (!error) {
        return null;
    }

    if (
        typeof error === "object" &&
        "message" in error &&
        typeof error.message === "string"
    ) {
        return error.message;
    }

    return null;
}

function InputError({
    message,
}: {
    message?: string | null;
}) {
    if (!message) {
        return null;
    }

    return (
        <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-destructive">
            <AlertCircle className="h-3.5 w-3.5" />
            {message}
        </p>
    );
}

function SectionHeader({
    title,
    description,
}: {
    title: string;
    description?: string;
}) {
    return (
        <div className="mb-6">
            <h2 className="text-lg font-semibold tracking-tight">
                {title}
            </h2>

            {description ? (
                <p className="mt-1 text-sm text-muted-foreground">
                    {description}
                </p>
            ) : null}
        </div>
    );
}

function StringArrayEditor({
    title,
    description,
    values,
    onChange,
    placeholder,
}: {
    title: string;
    description?: string;
    values: string[];
    onChange: (values: string[]) => void;
    placeholder: string;
}) {
    const addItem = () => {
        onChange([...values, ""]);
    };

    const updateItem = (
        index: number,
        value: string
    ) => {
        const updated = [...values];
        updated[index] = value;
        onChange(updated);
    };

    const removeItem = (index: number) => {
        onChange(
            values.filter(
                (_, itemIndex) =>
                    itemIndex !== index
            )
        );
    };

    return (
        <Card>
            <CardHeader>
                <SectionHeader
                    title={title}
                    description={description}
                />
            </CardHeader>

            <CardContent className="space-y-3">
                {values.length === 0 ? (
                    <div className="rounded-xl border border-dashed p-6 text-center">
                        <p className="text-sm text-muted-foreground">
                            No items added yet.
                        </p>
                    </div>
                ) : (
                    values.map((value, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2"
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-semibold">
                                {index + 1}
                            </div>

                            <Input
                                value={value}
                                onChange={(event) =>
                                    updateItem(
                                        index,
                                        event.target.value
                                    )
                                }
                                placeholder={placeholder}
                                className="h-10"
                            />

                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() =>
                                    removeItem(index)
                                }
                                className="shrink-0 text-destructive hover:text-destructive"
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    ))
                )}

                <Button
                    type="button"
                    variant="outline"
                    onClick={addItem}
                    className="w-full sm:w-auto"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Item
                </Button>
            </CardContent>
        </Card>
    );
}

function WhyVisitEditor({
    values,
    onChange,
}: {
    values: WhyVisitItem[];
    onChange: (
        values: WhyVisitItem[]
    ) => void;
}) {
    const addItem = () => {
        onChange([
            ...values,
            createWhyVisitItem(),
        ]);
    };

    const updateItem = (
        id: string,
        field: keyof WhyVisitItem,
        value: string
    ) => {
        onChange(
            values.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        [field]: value,
                    }
                    : item
            )
        );
    };

    const removeItem = (id: string) => {
        onChange(
            values.filter(
                (item) => item.id !== id
            )
        );
    };

    return (
        <Card>
            <CardHeader>
                <SectionHeader
                    title="Why Visit"
                    description="Add multiple reasons why travelers should choose this package."
                />
            </CardHeader>

            <CardContent className="space-y-4">
                {values.length === 0 ? (
                    <div className="rounded-xl border border-dashed p-6 text-center">
                        <p className="text-sm text-muted-foreground">
                            No reasons added yet.
                        </p>
                    </div>
                ) : (
                    values.map((item, index) => (
                        <div
                            key={item.id}
                            className="rounded-xl border p-4"
                        >
                            <div className="mb-4 flex items-center justify-between">
                                <p className="text-sm font-semibold">
                                    Reason {index + 1}
                                </p>

                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={() =>
                                        removeItem(
                                            item.id
                                        )
                                    }
                                    className="text-destructive hover:text-destructive"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <Label>
                                        Title
                                    </Label>

                                    <Input
                                        value={
                                            item.title
                                        }
                                        onChange={(
                                            event
                                        ) =>
                                            updateItem(
                                                item.id,
                                                "title",
                                                event.target
                                                    .value
                                            )
                                        }
                                        placeholder="Beautiful Landscapes"
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <Label>
                                        Description
                                    </Label>

                                    <Input
                                        value={
                                            item.description
                                        }
                                        onChange={(
                                            event
                                        ) =>
                                            updateItem(
                                                item.id,
                                                "description",
                                                event.target
                                                    .value
                                            )
                                        }
                                        placeholder="Explore breathtaking landscapes."
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                )}

                <Button
                    type="button"
                    variant="outline"
                    onClick={addItem}
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Why Visit
                </Button>
            </CardContent>
        </Card>
    );
}

function ItineraryEditor({
    values,
    onChange,
}: {
    values: ItineraryDay[];
    onChange: (
        values: ItineraryDay[]
    ) => void;
}) {
    const addDay = () => {
        onChange([
            ...values,
            createItineraryDay(
                values.length + 1
            ),
        ]);
    };

    const removeDay = (id: string) => {
        onChange(
            values
                .filter(
                    (item) => item.id !== id
                )
                .map((item, index) => ({
                    ...item,
                    day: index + 1,
                }))
        );
    };

    const updateDay = (
        id: string,
        field: keyof ItineraryDay,
        value: string
    ) => {
        onChange(
            values.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        [field]: value,
                    }
                    : item
            )
        );
    };

    const updateArray = (
        id: string,
        field: "activities" | "meals",
        value: string
    ) => {
        const items = value
            .split("\n")
            .map((item) => item.trim())
            .filter(Boolean);

        onChange(
            values.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        [field]: items,
                    }
                    : item
            )
        );
    };

    return (
        <Card>
            <CardHeader>
                <SectionHeader
                    title="Itinerary"
                    description="Build the package day by day."
                />
            </CardHeader>

            <CardContent className="space-y-5">
                {values.length === 0 ? (
                    <div className="rounded-xl border border-dashed p-8 text-center">
                        <p className="text-sm text-muted-foreground">
                            No itinerary days added.
                        </p>
                    </div>
                ) : (
                    values.map((day) => (
                        <div
                            key={day.id}
                            className="rounded-xl border p-4 sm:p-5"
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                                        {day.day}
                                    </div>

                                    <div>
                                        <p className="font-semibold">
                                            Day{" "}
                                            {day.day}
                                        </p>
                                    </div>
                                </div>

                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={() =>
                                        removeDay(
                                            day.id
                                        )
                                    }
                                    className="text-destructive hover:text-destructive"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>

                            <div className="grid gap-5">
                                <div>
                                    <Label>
                                        Day Title
                                    </Label>

                                    <Input
                                        value={
                                            day.title
                                        }
                                        onChange={(
                                            event
                                        ) =>
                                            updateDay(
                                                day.id,
                                                "title",
                                                event.target
                                                    .value
                                            )
                                        }
                                        placeholder="Arrival and local sightseeing"
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <Label>
                                        Description
                                    </Label>

                                    <Textarea
                                        value={
                                            day.description
                                        }
                                        onChange={(
                                            event
                                        ) =>
                                            updateDay(
                                                day.id,
                                                "description",
                                                event.target
                                                    .value
                                            )
                                        }
                                        placeholder="Describe the activities planned for this day."
                                        className="mt-2 min-h-[100px]"
                                    />
                                </div>

                                <div className="grid gap-5 md:grid-cols-2">
                                    <div>
                                        <Label>
                                            Activities
                                        </Label>

                                        <Textarea
                                            value={day.activities.join(
                                                "\n"
                                            )}
                                            onChange={(
                                                event
                                            ) =>
                                                updateArray(
                                                    day.id,
                                                    "activities",
                                                    event.target
                                                        .value
                                                )
                                            }
                                            placeholder={
                                                "Airport pickup\nHotel check-in\nLocal sightseeing"
                                            }
                                            className="mt-2 min-h-[120px]"
                                        />

                                        <p className="mt-1 text-xs text-muted-foreground">
                                            One activity per
                                            line.
                                        </p>
                                    </div>

                                    <div>
                                        <Label>
                                            Meals
                                        </Label>

                                        <Textarea
                                            value={day.meals.join(
                                                "\n"
                                            )}
                                            onChange={(
                                                event
                                            ) =>
                                                updateArray(
                                                    day.id,
                                                    "meals",
                                                    event.target
                                                        .value
                                                )
                                            }
                                            placeholder={
                                                "Breakfast\nDinner"
                                            }
                                            className="mt-2 min-h-[120px]"
                                        />

                                        <p className="mt-1 text-xs text-muted-foreground">
                                            One meal per
                                            line.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <Label>
                                        Overnight
                                    </Label>

                                    <Input
                                        value={
                                            day.overnight
                                        }
                                        onChange={(
                                            event
                                        ) =>
                                            updateDay(
                                                day.id,
                                                "overnight",
                                                event.target
                                                    .value
                                            )
                                        }
                                        placeholder="Manali"
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                )}

                <Button
                    type="button"
                    variant="outline"
                    onClick={addDay}
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Day
                </Button>
            </CardContent>
        </Card>
    );
}

function ImagePreview({
    preview,
    onRemove,
}: {
    preview: string;
    onRemove: () => void;
}) {
    return (
        <div className="group relative overflow-hidden rounded-xl border bg-muted">
            <img
                src={preview}
                alt="Package image preview"
                className="aspect-[4/3] w-full object-cover"
            />

            <button
                type="button"
                onClick={onRemove}
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white opacity-100 transition hover:bg-destructive"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
    );
}

function ImageUploader({
    title,
    description,
    file,
    onChange,
    onRemove,
}: {
    title: string;
    description: string;
    file: File | null;
    onChange: (file: File) => void;
    onRemove: () => void;
}) {
    const inputRef =
        useRef<HTMLInputElement>(null);

    const preview = useMemo(() => {
        if (!file) {
            return null;
        }

        return URL.createObjectURL(file);
    }, [file]);

    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const handleFile = (file: File) => {
        if (
            !ALLOWED_TYPES.includes(
                file.type
            )
        ) {
            alert(
                "Only JPG, PNG and WEBP images are allowed."
            );
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            alert(
                "Image size must be 5MB or smaller."
            );
            return;
        }

        onChange(file);
    };

    return (
        <div>
            <Label>{title}</Label>

            <p className="mb-3 mt-1 text-xs text-muted-foreground">
                {description}
            </p>

            {preview ? (
                <div className="relative max-w-md">
                    <ImagePreview
                        preview={preview}
                        onRemove={onRemove}
                    />
                </div>
            ) : (
                <button
                    type="button"
                    onClick={() =>
                        inputRef.current?.click()
                    }
                    className="flex min-h-[240px] w-full flex-col items-center justify-center rounded-xl border border-dashed bg-muted/20 px-6 text-center transition hover:bg-muted/40"
                >
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-sm">
                        <Upload className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <p className="text-sm font-semibold">
                        Click to upload
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                        JPG, PNG or WEBP · Max 5MB
                    </p>
                </button>
            )}

            <input
                ref={inputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={(event) => {
                    const selected =
                        event.target.files?.[0];

                    if (selected) {
                        handleFile(selected);
                    }

                    event.target.value = "";
                }}
            />
        </div>
    );
}

function GalleryUploader({
    images,
    onChange,
}: {
    images: GalleryItem[];
    onChange: (
        images: GalleryItem[]
    ) => void;
}) {
    const inputRef =
        useRef<HTMLInputElement>(null);

    const addFiles = (files: FileList | null) => {
        if (!files) {
            return;
        }

        const selected = Array.from(files);

        if (
            images.length + selected.length >
            MAX_GALLERY_IMAGES
        ) {
            alert(
                `Maximum ${MAX_GALLERY_IMAGES} gallery images are allowed.`
            );
            return;
        }

        const validFiles: File[] = [];

        for (const file of selected) {
            if (
                !ALLOWED_TYPES.includes(
                    file.type
                )
            ) {
                alert(
                    `${file.name}: Only JPG, PNG and WEBP images are allowed.`
                );
                continue;
            }

            if (file.size > MAX_FILE_SIZE) {
                alert(
                    `${file.name}: Image size must be 5MB or smaller.`
                );
                continue;
            }

            validFiles.push(file);
        }

        const newItems = validFiles.map(
            (file) => ({
                id: crypto.randomUUID(),
                file,
                preview:
                    URL.createObjectURL(file),
            })
        );

        onChange([
            ...images,
            ...newItems,
        ]);
    };

    const removeImage = (id: string) => {
        const image = images.find(
            (item) => item.id === id
        );

        if (image) {
            URL.revokeObjectURL(
                image.preview
            );
        }

        onChange(
            images.filter(
                (item) => item.id !== id
            )
        );
    };

    return (
        <Card>
            <CardHeader>
                <SectionHeader
                    title="Gallery"
                    description={`Add up to ${MAX_GALLERY_IMAGES} additional package images.`}
                />
            </CardHeader>

            <CardContent>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {images.map((image) => (
                        <ImagePreview
                            key={image.id}
                            preview={
                                image.preview
                            }
                            onRemove={() =>
                                removeImage(
                                    image.id
                                )
                            }
                        />
                    ))}

                    {images.length <
                        MAX_GALLERY_IMAGES && (
                            <button
                                type="button"
                                onClick={() =>
                                    inputRef.current?.click()
                                }
                                className="flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-dashed bg-muted/20 transition hover:bg-muted/40"
                            >
                                <ImagePlus className="mb-2 h-6 w-6 text-muted-foreground" />

                                <span className="text-xs font-medium">
                                    Add Images
                                </span>

                                <span className="mt-1 text-[10px] text-muted-foreground">
                                    {
                                        images.length
                                    }{" "}
                                    /{" "}
                                    {
                                        MAX_GALLERY_IMAGES
                                    }
                                </span>
                            </button>
                        )}
                </div>

                <input
                    ref={inputRef}
                    type="file"
                    multiple
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={(event) => {
                        addFiles(
                            event.target.files
                        );

                        event.target.value =
                            "";
                    }}
                />
            </CardContent>
        </Card>
    );
}
export default function CreatePackageForm({
    destinations = [],
    mode = "create",
    packageId,
    initialData,
    onSuccess,
}: CreatePackageFormProps) {
    const router = useRouter();

    const [destinationList, setDestinationList] =
        useState<Destination[]>(destinations);

    const [parentPackages, setParentPackages] =
        useState<ParentPackage[]>([]);

    const [
        loadingDestinations,
        setLoadingDestinations,
    ] = useState(false);

    const [
        loadingParents,
        setLoadingParents,
    ] = useState(false);

    const [heroImage, setHeroImage] =
        useState<File | null>(null);

    const [existingHeroImage, setExistingHeroImage] =
        useState<ExistingImage | null>(null);

    const [gallery, setGallery] =
        useState<GalleryItem[]>([]);

    const [existingGallery, setExistingGallery] =
        useState<ExistingImage[]>([]);

    const [removedGalleryPublicIds, setRemovedGalleryPublicIds] =
        useState<string[]>([]);
    const [
        whyVisit,
        setWhyVisit,
    ] = useState<WhyVisitItem[]>([]);

    const [
        itinerary,
        setItinerary,
    ] = useState<ItineraryDay[]>([]);

    const [
        highlights,
        setHighlights,
    ] = useState<string[]>([]);

    const [
        inclusions,
        setInclusions,
    ] = useState<string[]>([]);

    const [
        exclusions,
        setExclusions,
    ] = useState<string[]>([]);

    const [submitting, setSubmitting] =
        useState(false);

    const [serverError, setServerError] =
        useState("");

    const [successMessage, setSuccessMessage] =
        useState("");

    const {
        register,
        control,
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        formState: {
            errors,
        },
    } = useForm<
        PackageFormInput,
        unknown,
        PackageFormValues
    >({
        resolver: zodResolver(packageSchema),
        defaultValues: {
            name: "",
            slug: "",
            category: "",
            type: "REGULAR",
            occasion: "NONE",
            destinationId: "",
            parentId: null,

            subtitle: "",
            description: "",

            location: "",
            latitude: null,
            longitude: null,

            duration: "",
            groupSize: "",
            idealTrip: "",
            budget: "",
            bestTimeToVisit: [],

            originalPrice: null,
             discount: null,
            saveAmount: null,

            validTill: "",

            rating: null,
            reviewsCount: null,

            highlights: [],
            inclusions: [],
            exclusions: [],

            whyVisit: [],
            itinerary: [],

            metaTitle: "",
            metaDescription: "",
            keywords: [],

            isPublished: false,
            isFeatured: false,
        },
    });

    const initializedPackageId = useRef<string | null>(null);

    useEffect(() => {
        if (
            mode !== "edit" ||
            !initialData ||
            initializedPackageId.current === initialData.id
        ) {
            return;
        }

        initializedPackageId.current =
            initialData.id || packageId || null;

        reset({
            name: initialData.name || "",
            slug: initialData.slug || "",
            category: initialData.category || "",
            type: initialData.type || "REGULAR",
            occasion: initialData.occasion || "NONE",

            destinationId:
                initialData.destinationId || "",

            parentId:
                initialData.parentId || null,

            subtitle:
                initialData.subtitle || "",

            description:
                initialData.description || "",

            location:
                initialData.location || "",

            latitude:
                initialData.latitude ?? null,

            longitude:
                initialData.longitude ?? null,

            duration:
                initialData.duration || "",

            groupSize:
                initialData.groupSize || "",

            idealTrip:
                initialData.idealTrip || "",

            budget:
                initialData.budget || "",

            bestTimeToVisit:
                Array.isArray(initialData.bestTimeToVisit)
                    ? initialData.bestTimeToVisit
                    : [],

            originalPrice:
                initialData.originalPrice ?? null,

   
                

            discount:
                initialData.discount ?? null,

            saveAmount:
                initialData.saveAmount ?? null,

            validTill:
                initialData.validTill
                    ? String(initialData.validTill).slice(0, 10)
                    : "",

            rating:
                initialData.rating ?? null,

            reviewsCount:
                initialData.reviewsCount ?? null,

            highlights:
                Array.isArray(initialData.highlights)
                    ? initialData.highlights
                    : [],

            inclusions:
                Array.isArray(initialData.inclusions)
                    ? initialData.inclusions
                    : [],

            exclusions:
                Array.isArray(initialData.exclusions)
                    ? initialData.exclusions
                    : [],

            whyVisit:
                Array.isArray(initialData.whyVisit)
                    ? initialData.whyVisit
                    : [],

            itinerary:
                Array.isArray(initialData.itinerary)
                    ? initialData.itinerary
                    : [],

            metaTitle:
                initialData.metaTitle || "",

            metaDescription:
                initialData.metaDescription || "",

            keywords:
                Array.isArray(initialData.keywords)
                    ? initialData.keywords
                    : [],

            isPublished:
                Boolean(initialData.isPublished),

            isFeatured:
                Boolean(initialData.isFeatured),
        });

        setExistingHeroImage(
            initialData.heroImage || null
        );

        setExistingGallery(
            Array.isArray(initialData.gallery)
                ? initialData.gallery
                : []
        );

        setHighlights(
            Array.isArray(initialData.highlights)
                ? initialData.highlights
                : []
        );

        setInclusions(
            Array.isArray(initialData.inclusions)
                ? initialData.inclusions
                : []
        );

        setExclusions(
            Array.isArray(initialData.exclusions)
                ? initialData.exclusions
                : []
        );

        setWhyVisit(
            Array.isArray(initialData.whyVisit)
                ? initialData.whyVisit.map((item) => ({
                    id:
                        item.id ||
                        crypto.randomUUID(),
                    title: item.title || "",
                    description:
                        item.description || "",
                }))
                : []
        );

        setItinerary(
            Array.isArray(initialData.itinerary)
                ? initialData.itinerary.map(
                    (item, index) => ({
                        id: crypto.randomUUID(),
                        day:
                            item.day ||
                            index + 1,
                        title:
                            item.title || "",
                        description:
                            item.description ||
                            "",
                        activities:
                            Array.isArray(
                                item.activities
                            )
                                ? item.activities
                                : [],
                        meals:
                            Array.isArray(
                                item.meals
                            )
                                ? item.meals
                                : [],
                        overnight:
                            item.overnight ||
                            "",
                    })
                )
                : []
        );
    }, [
        mode,
        initialData,
        packageId,
        reset,
    ]);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const bestTimeToVisit = watch("bestTimeToVisit");
    const toggleMonth = (month: string) => {
        const current = getValues("bestTimeToVisit");

        const updated = current.includes(month)
            ? current.filter((item) => item !== month)
            : [...current, month];

        setValue("bestTimeToVisit", updated, {
            shouldValidate: true,
            shouldDirty: true,
        });
    };
    const selectedDestinationId =
        watch("destinationId");

    const isPublished =
        watch("isPublished");

    const isFeatured =
        watch("isFeatured");

    useEffect(() => {
        if (destinationList.length > 0) {
            return;
        }

        const loadDestinations =
            async () => {
                try {
                    setLoadingDestinations(
                        true
                    );

                    const response =
                        await fetch(
                            "/api/admin/get-all-destinations?limit=50",
                            {
                                cache: "no-store",
                            }
                        );

                    const result =
                        await response.json();

                    if (!response.ok) {
                        throw new Error(
                            result.message ||
                            "Failed to load destinations"
                        );
                    }

                    const items =
                        result.data?.destinations ||
                        result.data ||
                        [];

                    setDestinationList(
                        items.map(
                            (
                                item: Destination
                            ) => ({
                                id: item.id,
                                name: item.name,
                                slug: item.slug,
                            })
                        )
                    );
                } catch (error) {
                    console.error(
                        error
                    );
                } finally {
                    setLoadingDestinations(
                        false
                    );
                }
            };

        loadDestinations();
    }, [destinationList.length]);

    useEffect(() => {
        setValue(
            "parentId",
            null,
            {
                shouldDirty: true,
            }
        );

        setParentPackages([]);

        if (
            !selectedDestinationId
        ) {
            return;
        }

        const loadParentPackages =
            async () => {
                try {
                    setLoadingParents(
                        true
                    );

                    const response =
                        await fetch(
                            `/api/admin/get-all-packages?destinationId=${encodeURIComponent(
                                selectedDestinationId
                            )}&limit=1000`,
                            {
                                cache: "no-store",
                            }
                        );

                    if (!response.ok) {
                        return;
                    }

                    const result =
                        await response.json();

                    const items =
                        result.data?.packages ||
                        result.data ||
                        [];

                    setParentPackages(
                        items.map(
                            (
                                item: ParentPackage
                            ) => ({
                                id: item.id,
                                name: item.name,
                                slug: item.slug,
                            })
                        )
                    );
                } catch (error) {
                    console.error(
                        error
                    );
                } finally {
                    setLoadingParents(
                        false
                    );
                }
            };

        loadParentPackages();
    }, [
        selectedDestinationId,
        setValue,
    ]);

    useEffect(() => {
        return () => {
            gallery.forEach((item) => {
                URL.revokeObjectURL(
                    item.preview
                );
            });
        };
    }, [gallery]);

    const handleNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const name = event.target.value;

        setValue("name", name, {
            shouldDirty: true,
            shouldValidate: true,
        });

        setValue(
            "slug",
            slugify(name),
            {
                shouldDirty: true,
                shouldValidate: true,
            }
        );
    };

    const handleSubmitForm = async (values: PackageFormValues) => {
        try {
            setSubmitting(true);
            setServerError("");
            setSuccessMessage("");

            if (mode === "create" && !heroImage && !existingHeroImage) {
                setServerError("Hero image is required");
                return;
            }

       
            

            const formData = new FormData();

            formData.append("name", values.name);
            formData.append("slug", values.slug);
            formData.append("category", values.category);
            formData.append("type", values.type);
            formData.append("occasion", values.occasion);

            formData.append(
                "destinationId",
                values.destinationId
            );

            formData.append(
                "parentId",
                values.parentId || ""
            );

            formData.append(
                "subtitle",
                values.subtitle || ""
            );

            formData.append(
                "description",
                values.description || ""
            );

            formData.append(
                "location",
                values.location || ""
            );

            formData.append(
                "latitude",
                values.latitude !== null &&
                    values.latitude !== undefined
                    ? String(values.latitude)
                    : ""
            );

            formData.append(
                "longitude",
                values.longitude !== null &&
                    values.longitude !== undefined
                    ? String(values.longitude)
                    : ""
            );

            formData.append(
                "duration",
                values.duration || ""
            );

            formData.append(
                "groupSize",
                values.groupSize || ""
            );

            formData.append(
                "idealTrip",
                values.idealTrip || ""
            );

            formData.append(
                "budget",
                values.budget || ""
            );

            formData.append(
                "bestTimeToVisit",
                JSON.stringify(values.bestTimeToVisit || [])
            );

            formData.append(
                "originalPrice",
                values.originalPrice !== null &&
                    values.originalPrice !== undefined
                    ? String(values.originalPrice)
                    : ""
            );

       
            

            formData.append(
                "type",
                values.type || "REGULAR"
            );

            formData.append(
                "occasion",
                values.occasion || "NONE"
            );

            formData.append(
                "validTill",
                values.validTill || ""
            );

            formData.append(
                "rating",
                values.rating !== null &&
                    values.rating !== undefined
                    ? String(values.rating)
                    : ""
            );

            formData.append(
                "reviewsCount",
                values.reviewsCount !== null &&
                    values.reviewsCount !== undefined
                    ? String(values.reviewsCount)
                    : ""
            );

            formData.append(
                "highlights",
                JSON.stringify(highlights)
            );

            formData.append(
                "inclusions",
                JSON.stringify(inclusions)
            );

            formData.append(
                "exclusions",
                JSON.stringify(exclusions)
            );

            formData.append(
                "whyVisit",
                JSON.stringify(whyVisit)
            );

            formData.append(
                "itinerary",
                JSON.stringify(itinerary)
            );

            formData.append(
                "keywords",
                JSON.stringify(values.keywords || [])
            );

            formData.append(
                "metaTitle",
                values.metaTitle || ""
            );

            formData.append(
                "metaDescription",
                values.metaDescription || ""
            );

            formData.append(
                "isPublished",
                String(values.isPublished)
            );

            formData.append(
                "isFeatured",
                String(values.isFeatured)
            );

            /*
             * Existing gallery
             */

            if (mode === "edit") {
                formData.append(
                    "existingGallery",
                    JSON.stringify(existingGallery)
                );

                formData.append(
                    "removedGalleryPublicIds",
                    JSON.stringify(
                        removedGalleryPublicIds
                    )
                );
            }

            /*
             * New hero image
             */

            if (heroImage) {
                formData.append(
                    "heroImage",
                    heroImage
                );
            }

            /*
             * New gallery images
             */

            for (const item of gallery) {
                if (item.file) {
                    formData.append(
                        "gallery",
                        item.file
                    );
                }
            }

            /*
             * IMPORTANT:
             * Create = POST
             * Edit = PATCH
             */

            const url =
                mode === "edit"
                    ? `/api/admin/update-package/${packageId}`
                    : "/api/admin/packages";

            const method =
                mode === "edit"
                    ? "PATCH"
                    : "POST";

            console.log("PACKAGE SUBMIT:", {
                mode,
                packageId,
                url,
                method,
            });

            const response = await fetch(
                url,
                {
                    method,
                    body: formData,
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setServerError(
                    data.message ||
                    (
                        mode === "edit"
                            ? "Unable to update package"
                            : "Unable to create package"
                    )
                );

                return;
            }

            setSuccessMessage(
                mode === "edit"
                    ? "Package updated successfully"
                    : "Package created successfully"
            );

            if (onSuccess) {
                onSuccess();
            } else {
                router.push("/admin/packages");
            }
        } catch (error) {
            console.error(
                "PACKAGE_SUBMIT_ERROR:",
                error
            );

            setServerError(
                mode === "edit"
                    ? "Unable to update package"
                    : "Unable to create package"
            );
        } finally {
            setSubmitting(false);
        }
    };

    const handleInvalid = (
        formErrors: FieldErrors<PackageFormValues>
    ) => {
        console.error(
            "PACKAGE_FORM_ERRORS",
            formErrors
        );

        setServerError(
            "Please fix the highlighted validation errors before submitting."
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <form
            onSubmit={handleSubmit(
                handleSubmitForm,
                handleInvalid
            )}
            className="space-y-6 pb-12"
        >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">
                        Create Package
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Create a travel package
                        for a destination.
                    </p>
                </div>

                <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                        router.push(
                            "/admin/packages"
                        )
                    }
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
            </div>

            {serverError ? (
                <div className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

                    <div>
                        <p className="font-semibold">
                            Unable to create
                            package
                        </p>

                        <p className="mt-1">
                            {serverError}
                        </p>
                    </div>
                </div>
            ) : null}

            {successMessage ? (
                <div className="flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/5 p-4 text-sm text-green-700">
                    <Check className="h-5 w-5" />

                    <span>
                        {
                            successMessage
                        }
                    </span>
                </div>
            ) : null}

            <Card>
                <CardHeader>
                    <SectionHeader
                        title="Basic Information"
                        description="Define the main information for this travel package."
                    />
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="grid gap-5 md:grid-cols-2">
                        <div>
                            <Label htmlFor="name">
                                Package Name *
                            </Label>

                            <Input
                                id="name"
                                {...register(
                                    "name"
                                )}
                                onChange={
                                    handleNameChange
                                }
                                placeholder="Manali Adventure Package"
                                className="mt-2"
                            />

                            <InputError
                                message={getErrorMessage(
                                    errors,
                                    "name"
                                )}
                            />
                        </div>

                        <div>
                            <Label htmlFor="slug">
                                Slug *
                            </Label>

                            <Input
                                id="slug"
                                {...register(
                                    "slug"
                                )}
                                placeholder="manali-adventure-package"
                                className="mt-2"
                            />

                            <InputError
                                message={getErrorMessage(
                                    errors,
                                    "slug"
                                )}
                            />
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        <div>
                            <Label>
                                Destination *
                            </Label>

                            <Controller
                                name="destinationId"
                                control={
                                    control
                                }
                                render={({
                                    field,
                                }) => (
                                    <Select
                                        value={
                                            field.value ||
                                            undefined
                                        }
                                        onValueChange={
                                            field.onChange
                                        }
                                    >
                                        <SelectTrigger className="mt-2">
                                            <SelectValue
                                                placeholder={
                                                    loadingDestinations
                                                        ? "Loading..."
                                                        : "Select destination"
                                                }
                                            />
                                        </SelectTrigger>

                                        <SelectContent>
                                            {destinationList.map(
                                                (
                                                    destination
                                                ) => (
                                                    <SelectItem
                                                        key={
                                                            destination.id
                                                        }
                                                        value={
                                                            destination.id
                                                        }
                                                    >
                                                        {
                                                            destination.name
                                                        }
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectContent>
                                    </Select>
                                )}
                            />

                            <InputError
                                message={getErrorMessage(
                                    errors,
                                    "destinationId"
                                )}
                            />
                        </div>

                        <div>
                            <Label>
                                Category *
                            </Label>

                            <Input
                                {...register(
                                    "category"
                                )}
                                placeholder="Adventure"
                                className="mt-2"
                            />

                            <InputError
                                message={getErrorMessage(
                                    errors,
                                    "category"
                                )}
                            />
                        </div>

                        <div>
                            <Label>
                                Package Type
                            </Label>

                            <Controller
                                name="type"
                                control={
                                    control
                                }
                                render={({
                                    field,
                                }) => (
                                    <Select
                                        value={
                                            field.value
                                        }
                                        onValueChange={
                                            field.onChange
                                        }
                                    >
                                        <SelectTrigger className="mt-2">
                                            <SelectValue />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectItem value="REGULAR">
                                                Regular
                                            </SelectItem>

                                            <SelectItem value="SPECIAL">
                                                Special
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        <div>
                            <Label>
                                Occasion
                            </Label>

                            <Controller
                                name="occasion"
                                control={
                                    control
                                }
                                render={({
                                    field,
                                }) => (
                                    <Select
                                        value={
                                            field.value
                                        }
                                        onValueChange={
                                            field.onChange
                                        }
                                    >
                                        <SelectTrigger className="mt-2">
                                            <SelectValue />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectItem value="NONE">
                                                None
                                            </SelectItem>

                                            <SelectItem value="CHRISTMAS">
                                                Christmas
                                            </SelectItem>

                                            <SelectItem value="DIWALI">
                                                Diwali
                                            </SelectItem>

                                            <SelectItem value="NEW_YEAR">
                                                New Year
                                            </SelectItem>

                                            <SelectItem value="VALENTINE">
                                                Valentine
                                            </SelectItem>

                                            <SelectItem value="HOLI">
                                                Holi
                                            </SelectItem>

                                            <SelectItem value="EID">
                                                Eid
                                            </SelectItem>

                                            <SelectItem value="SUMMER">
                                                Summer
                                            </SelectItem>

                                            <SelectItem value="WINTER">
                                                Winter
                                            </SelectItem>

                                            <SelectItem value="FESTIVAL">
                                                Festival
                                            </SelectItem>

                                            <SelectItem value="OTHER">
                                                Other
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>

                        <div>
                            <Label>
                                Parent Package
                            </Label>

                            <Controller
                                name="parentId"
                                control={
                                    control
                                }
                                render={({
                                    field,
                                }) => (
                                    <Select
                                        value={
                                            field.value ||
                                            "none"
                                        }
                                        onValueChange={(
                                            value
                                        ) =>
                                            field.onChange(
                                                value ===
                                                    "none"
                                                    ? null
                                                    : value
                                            )
                                        }
                                        disabled={
                                            !selectedDestinationId ||
                                            loadingParents
                                        }
                                    >
                                        <SelectTrigger className="mt-2">
                                            <SelectValue
                                                placeholder={
                                                    loadingParents
                                                        ? "Loading..."
                                                        : "No parent package"
                                                }
                                            />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectItem value="none">
                                                No parent package
                                            </SelectItem>

                                            {parentPackages.map(
                                                (
                                                    item
                                                ) => (
                                                    <SelectItem
                                                        key={
                                                            item.id
                                                        }
                                                        value={
                                                            item.id
                                                        }
                                                    >
                                                        {
                                                            item.name
                                                        }
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectContent>
                                    </Select>
                                )}
                            />

                            <p className="mt-1.5 text-xs text-muted-foreground">
                                Only packages
                                belonging to the
                                selected destination
                                are shown.
                            </p>
                        </div>
                    </div>

                    <div>
                        <Label>
                            Subtitle
                        </Label>

                        <Input
                            {...register(
                                "subtitle"
                            )}
                            placeholder="Experience the best of Manali"
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <Label>
                            Description
                        </Label>

                        <Textarea
                            {...register(
                                "description"
                            )}
                            placeholder="Describe this package..."
                            className="mt-2 min-h-[150px]"
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <SectionHeader
                        title="Location & Trip Details"
                        description="Add geographic and travel information."
                    />
                </CardHeader>

                <CardContent className="space-y-6">
                    <div>
                        <Label>
                            Location
                        </Label>

                        <Input
                            {...register(
                                "location"
                            )}
                            placeholder="Manali, Himachal Pradesh"
                            className="mt-2"
                        />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        <div>
                            <Label>
                                Latitude
                            </Label>

                            <Input
                                type="number"
                                step="any"
                                {...register(
                                    "latitude",
                                    {
                                        setValueAs:
                                            parseNumber,
                                    }
                                )}
                                placeholder="32.2396"
                                className="mt-2"
                            />

                            <InputError
                                message={getErrorMessage(
                                    errors,
                                    "latitude"
                                )}
                            />
                        </div>

                        <div>
                            <Label>
                                Longitude
                            </Label>

                            <Input
                                type="number"
                                step="any"
                                {...register(
                                    "longitude",
                                    {
                                        setValueAs:
                                            parseNumber,
                                    }
                                )}
                                placeholder="77.1887"
                                className="mt-2"
                            />

                            <InputError
                                message={getErrorMessage(
                                    errors,
                                    "longitude"
                                )}
                            />
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        <div>
                            <Label>
                                Duration
                            </Label>

                            <Input
                                {...register(
                                    "duration"
                                )}
                                placeholder="5 Days / 4 Nights"
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <Label>
                                Group Size
                            </Label>

                            <Input
                                {...register(
                                    "groupSize"
                                )}
                                placeholder="2-10 People"
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <Label>
                                Ideal Trip
                            </Label>

                            <Input
                                {...register(
                                    "idealTrip"
                                )}
                                placeholder="Adventure & Honeymoon"
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        <div>
                            <Label>
                                Budget
                            </Label>

                            <Input
                                {...register(
                                    "budget"
                                )}
                                placeholder="₹15,000 - ₹25,000"
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-6 space-y-3">
                            <Label>
                                Best Time To Visit
                            </Label>

                            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                                {months.map((month) => {
                                    const selected =
                                        bestTimeToVisit.includes(month);

                                    return (
                                        <button
                                            key={month}
                                            type="button"
                                            onClick={() => toggleMonth(month)}
                                            className={`rounded-lg border px-3 py-2 text-sm transition ${selected
                                                ? "border-primary bg-primary text-white"
                                                : "bg-white hover:border-primary"
                                                }`}
                                        >
                                            {month}
                                        </button>
                                    );
                                })}
                            </div>

                            {errors.bestTimeToVisit?.message && (
                                <p className="text-xs text-red-500">
                                    {errors.bestTimeToVisit.message}
                                </p>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <SectionHeader
                        title="Pricing"
                        description="Set the package pricing. Discount and savings are calculated on the server."
                    />
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <Label>
                                Original Price
                            </Label>

                            <Input
                                type="number"
                                min="0"
                                step="0.01"
                                {...register(
                                    "originalPrice",
                                    {
                                        setValueAs:
                                            parseNumber,
                                    }
                                )}
                                placeholder="25000"
                                className="mt-2"
                            />
                        </div>



                        <div>
                            <Label>
                                Valid Till
                            </Label>

                            <Input
                                type="date"
                                {...register(
                                    "validTill"
                                )}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <Label>
                                Rating
                            </Label>

                            <Input
                                type="number"
                                min="0"
                                max="5"
                                step="0.1"
                                {...register(
                                    "rating",
                                    {
                                        setValueAs:
                                            parseNumber,
                                    }
                                )}
                                placeholder="4.8"
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        <div>
                            <Label>
                                Reviews Count
                            </Label>

                            <Input
                                type="number"
                                min="0"
                                step="1"
                                {...register(
                                    "reviewsCount",
                                    {
                                        setValueAs:
                                            parseNumber,
                                    }
                                )}
                                placeholder="120"
                                className="mt-2"
                            />
                        </div>

                        <div className="rounded-xl border bg-muted/30 p-4">
                            <p className="text-sm font-semibold">
                                Pricing calculation
                            </p>

                            <p className="mt-1 text-xs leading-5 text-muted-foreground">
                                Discount and save
                                amount are calculated
                                automatically by the
                                API using the original
                                and offer prices.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <StringArrayEditor
                title="Highlights"
                description="Key experiences and features included in this package."
                values={highlights}
                onChange={(values) => {
                    setHighlights(values);
                    setValue(
                        "highlights",
                        values,
                        {
                            shouldDirty: true,
                            shouldValidate: true,
                        }
                    );
                }}
                placeholder="Visit Rohtang Pass"
            />

            <StringArrayEditor
                title="Inclusions"
                description="Everything included in the package price."
                values={inclusions}
                onChange={(values) => {
                    setInclusions(values);
                    setValue(
                        "inclusions",
                        values,
                        {
                            shouldDirty: true,
                            shouldValidate: true,
                        }
                    );
                }}
                placeholder="Hotel accommodation"
            />

            <StringArrayEditor
                title="Exclusions"
                description="Things that are not included in the package."
                values={exclusions}
                onChange={(values) => {
                    setExclusions(values);
                    setValue(
                        "exclusions",
                        values,
                        {
                            shouldDirty: true,
                            shouldValidate: true,
                        }
                    );
                }}
                placeholder="Personal expenses"
            />

            <WhyVisitEditor
                values={whyVisit}
                onChange={(values) => {
                    setWhyVisit(values);
                    setValue(
                        "whyVisit",
                        values,
                        {
                            shouldDirty: true,
                            shouldValidate: true,
                        }
                    );
                }}
            />

            <ItineraryEditor
                values={itinerary}
                onChange={(values) => {
                    setItinerary(values);
                    setValue(
                        "itinerary",
                        values.map(
                            (item) => ({
                                day: item.day,
                                title: item.title,
                                description:
                                    item.description ||
                                    "",
                                activities:
                                    item.activities,
                                meals:
                                    item.meals,
                                overnight:
                                    item.overnight ||
                                    "",
                            })
                        ),
                        {
                            shouldDirty: true,
                            shouldValidate: true,
                        }
                    );
                }}
            />

            <Card>
                <CardHeader>
                    <SectionHeader
                        title="Package Images"
                        description="Upload the main package image and additional gallery images."
                    />
                </CardHeader>

                <CardContent className="space-y-8">
                    <ImageUploader
                        title="Hero Image *"
                        description="This image will be used as the main package image. Maximum 5MB."
                        file={
                            heroImage
                        }
                        onChange={
                            setHeroImage
                        }
                        onRemove={() =>
                            setHeroImage(
                                null
                            )
                        }
                    />

                    <GalleryUploader
                        images={gallery}
                        onChange={
                            setGallery
                        }
                    />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <SectionHeader
                        title="SEO"
                        description="Optimize this package page for search engines."
                    />
                </CardHeader>

                <CardContent className="space-y-6">
                    <div>
                        <Label>
                            Meta Title
                        </Label>

                        <Input
                            {...register(
                                "metaTitle"
                            )}
                            placeholder="Manali Adventure Package | Wander India"
                            className="mt-2"
                        />

                        <p className="mt-1.5 text-xs text-muted-foreground">
                            Recommended:
                            approximately 50-60
                            characters.
                        </p>
                    </div>

                    <div>
                        <Label>
                            Meta Description
                        </Label>

                        <Textarea
                            {...register(
                                "metaDescription"
                            )}
                            placeholder="Explore our Manali adventure package with accommodation, sightseeing and activities..."
                            className="mt-2 min-h-[110px]"
                        />

                        <p className="mt-1.5 text-xs text-muted-foreground">
                            Recommended:
                            approximately 140-160
                            characters.
                        </p>
                    </div>

                    <div>
                        <Label>
                            Keywords
                        </Label>

                        <Controller
                            name="keywords"
                            control={
                                control
                            }
                            render={({
                                field,
                            }) => (
                                <KeywordInput
                                    value={
                                        field.value ||
                                        []
                                    }
                                    onChange={
                                        field.onChange
                                    }
                                />
                            )}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <SectionHeader
                        title="Publishing"
                        description="Control the visibility of this package."
                    />
                </CardHeader>

                <CardContent className="space-y-5">
                    <div className="flex items-center justify-between rounded-xl border p-4">
                        <div className="pr-6">
                            <p className="font-semibold">
                                Publish Package
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Published packages
                                can be displayed on
                                the public website.
                            </p>
                        </div>

                        <Controller
                            name="isPublished"
                            control={
                                control
                            }
                            render={({
                                field,
                            }) => (
                                <Switch
                                    checked={
                                        field.value
                                    }
                                    onCheckedChange={
                                        field.onChange
                                    }
                                />
                            )}
                        />
                    </div>

                    <div className="flex items-center justify-between rounded-xl border p-4">
                        <div className="pr-6">
                            <p className="font-semibold">
                                Featured Package
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Mark this package as
                                featured in package
                                sections.
                            </p>
                        </div>

                        <Controller
                            name="isFeatured"
                            control={
                                control
                            }
                            render={({
                                field,
                            }) => (
                                <Switch
                                    checked={
                                        field.value
                                    }
                                    onCheckedChange={
                                        field.onChange
                                    }
                                />
                            )}
                        />
                    </div>
                </CardContent>
            </Card>

            <div className="sticky bottom-4 z-20">
                <div className="flex flex-col gap-3 rounded-2xl border bg-background/95 p-3 shadow-lg backdrop-blur sm:flex-row sm:justify-end">
                    <Button
                        type="button"
                        variant="outline"
                        disabled={
                            submitting
                        }
                        onClick={() =>
                            router.push(
                                "/admin/packages"
                            )
                        }
                        className="sm:min-w-32"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        disabled={submitting}
                        className="sm:min-w-40"
                    >
                        {submitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                {mode === "edit"
                                    ? "Updating..."
                                    : "Creating..."}
                            </>
                        ) : (
                            <>
                                <Check className="mr-2 h-4 w-4" />
                                {mode === "edit"
                                    ? "Update Package"
                                    : "Create Package"}
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </form>
    );
}

function KeywordInput({
    value,
    onChange,
}: {
    value: string[];
    onChange: (
        value: string[]
    ) => void;
}) {
    const [input, setInput] =
        useState("");

    const addKeyword = () => {
        const keyword =
            input.trim();

        if (!keyword) {
            return;
        }

        if (
            value.some(
                (item) =>
                    item.toLowerCase() ===
                    keyword.toLowerCase()
            )
        ) {
            setInput("");
            return;
        }

        onChange([
            ...value,
            keyword,
        ]);

        setInput("");
    };

    const removeKeyword = (
        index: number
    ) => {
        onChange(
            value.filter(
                (_, itemIndex) =>
                    itemIndex !== index
            )
        );
    };

    return (
        <div className="mt-2 rounded-xl border p-3">
            <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                    value={input}
                    onChange={(event) =>
                        setInput(
                            event.target
                                .value
                        )
                    }
                    onKeyDown={(event) => {
                        if (
                            event.key ===
                            "Enter"
                        ) {
                            event.preventDefault();
                            addKeyword();
                        }
                    }}
                    placeholder="manali packages"
                />

                <Button
                    type="button"
                    variant="outline"
                    onClick={
                        addKeyword
                    }
                    className="sm:w-24"
                >
                    Add
                </Button>
            </div>

            {value.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-2">
                    {value.map(
                        (
                            keyword,
                            index
                        ) => (
                            <div
                                key={`${keyword}-${index}`}
                                className="flex items-center gap-1 rounded-full bg-muted px-3 py-1.5 text-xs font-medium"
                            >
                                <span>
                                    {
                                        keyword
                                    }
                                </span>

                                <button
                                    type="button"
                                    onClick={() =>
                                        removeKeyword(
                                            index
                                        )
                                    }
                                    className="ml-1 rounded-full p-0.5 hover:bg-background"
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            </div>
                        )
                    )}
                </div>
            ) : null}
        </div>
    );
}