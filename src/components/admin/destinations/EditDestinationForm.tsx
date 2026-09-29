"use client";

import { useEffect, useRef, useState } from "react";
import {
    useForm,
    type FieldErrors,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    destinationSchema,
    type DestinationFormValues,
} from "@/lib/validations/destination";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import {
    ImagePlus,
    Loader2,
    Plus,
    X,
} from "lucide-react";

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

type ExistingImage = {
    url: string;
    publicId?: string;
};

type GalleryItem = {
    id: string;
    file?: File;
    preview: string;
    existing: boolean;
    url?: string;
    publicId?: string;
};

type AttractionItem = {
    id: string;
    name: string;
    description: string;
    image: File | null;
    imagePreview: string | null;
    existingImageUrl: string | null;
    existingPublicId?: string;
    existing: boolean;
};

type WhyVisitItem = {
    id: string;
    title: string;
    description: string;
};

type DestinationResponse = {
    id: string;
    name: string;
    slug: string;
    subtitle?: string | null;
    description?: string | null;
    location?: string | null;
    idealTrip?: string | null;
    budget?: string | null;
    activities?: string[];
    bestTimeToVisit?: string[];
    whyVisit?: WhyVisitItem[];
    attractions?: Array<{
        id: string;
        name: string;
        description: string;
        imageUrl?: string | null;
        publicId?: string | null;
        sortOrder?: number;
    }>;
    heroImage?: string | null;
    gallery?: ExistingImage[];
    metaTitle?: string | null;
    metaDescription?: string | null;
    keywords?: string[];
    isPublished?: boolean;
    isFeatured?: boolean;
};

type Props = {
    destinationId: string;
};

export default function EditDestinationForm({
    destinationId,
}: Props) {
    const [heroImage, setHeroImage] =
        useState<File | null>(null);

    const [heroPreview, setHeroPreview] =
        useState<string | null>(null);

    const [existingHeroImage, setExistingHeroImage] =
        useState<string | null>(null);

    const [gallery, setGallery] =
        useState<GalleryItem[]>([]);

    const heroInputRef =
        useRef<HTMLInputElement | null>(null);

    const galleryInputRef =
        useRef<HTMLInputElement | null>(null);

    const objectUrlsRef =
        useRef<Set<string>>(new Set());

    const [activities, setActivities] =
        useState<string[]>([]);

    const [activityInput, setActivityInput] =
        useState("");

    const [bestTimeToVisit, setBestTimeToVisit] =
        useState<string[]>([]);

    const [keywords, setKeywords] =
        useState<string[]>([]);

    const [keywordInput, setKeywordInput] =
        useState("");

    const [attractions, setAttractions] =
        useState<AttractionItem[]>([]);

    const [whyVisit, setWhyVisit] =
        useState<WhyVisitItem[]>([]);

    const [loadingDestination, setLoadingDestination] =
        useState(true);

    const [error, setError] = useState("");

    const [success, setSuccess] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<DestinationFormValues>({
        resolver: zodResolver(destinationSchema),

        defaultValues: {
            name: "",
            slug: "",
            subtitle: "",
            description: "",
            location: "",
            idealTrip: "",
            budget: "",
            activities: [],
            bestTimeToVisit: [],
            whyVisit: [],
            attractions: [],
            metaTitle: "",
            metaDescription: "",
            keywords: [],
            isPublished: false,
            isFeatured: false,
        },
    });

    const onInvalid = (
        formErrors: FieldErrors<DestinationFormValues>
    ) => {
        setError("");

        const messages: string[] = [];

        if (formErrors.name?.message) {
            messages.push(
                `Destination Name: ${formErrors.name.message}`
            );
        }

        if (formErrors.slug?.message) {
            messages.push(
                `Slug: ${formErrors.slug.message}`
            );
        }

        if (formErrors.subtitle?.message) {
            messages.push(
                `Subtitle: ${formErrors.subtitle.message}`
            );
        }

        if (formErrors.description?.message) {
            messages.push(
                `Description: ${formErrors.description.message}`
            );
        }

        if (formErrors.activities?.message) {
            messages.push(
                `Activities: ${formErrors.activities.message}`
            );
        }

        if (formErrors.bestTimeToVisit?.message) {
            messages.push(
                `Best Time to Visit: ${formErrors.bestTimeToVisit.message}`
            );
        }

        if (formErrors.whyVisit?.message) {
            messages.push(
                `Why Visit: ${formErrors.whyVisit.message}`
            );
        }

        if (Array.isArray(formErrors.whyVisit)) {
            formErrors.whyVisit.forEach(
                (itemError, index) => {
                    if (!itemError) return;

                    if (itemError.title?.message) {
                        messages.push(
                            `Why Visit ${index + 1} Title: ${itemError.title.message}`
                        );
                    }

                    if (
                        itemError.description?.message
                    ) {
                        messages.push(
                            `Why Visit ${index + 1} Description: ${itemError.description.message}`
                        );
                    }
                }
            );
        }

        if (formErrors.attractions?.message) {
            messages.push(
                `Attractions: ${formErrors.attractions.message}`
            );
        }

        if (Array.isArray(formErrors.attractions)) {
            formErrors.attractions.forEach(
                (itemError, index) => {
                    if (!itemError) return;

                    if (itemError.name?.message) {
                        messages.push(
                            `Attraction ${index + 1} Name: ${itemError.name.message}`
                        );
                    }

                    if (
                        itemError.description?.message
                    ) {
                        messages.push(
                            `Attraction ${index + 1} Description: ${itemError.description.message}`
                        );
                    }
                }
            );
        }

        if (formErrors.metaTitle?.message) {
            messages.push(
                `Meta Title: ${formErrors.metaTitle.message}`
            );
        }

        if (
            formErrors.metaDescription?.message
        ) {
            messages.push(
                `Meta Description: ${formErrors.metaDescription.message}`
            );
        }

        if (formErrors.keywords?.message) {
            messages.push(
                `Keywords: ${formErrors.keywords.message}`
            );
        }

        setError(
            messages.length
                ? messages.join(" • ")
                : "Please check the highlighted fields."
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const generateSlug = (value: string) => {
        return value
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    };

    const handleNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const name = event.target.value;

        setValue("name", name, {
            shouldValidate: true,
            shouldDirty: true,
        });

        setValue(
            "slug",
            generateSlug(name),
            {
                shouldValidate: true,
                shouldDirty: true,
            }
        );
    };

    const addActivity = () => {
        const value =
            activityInput.trim();

        if (!value) return;

        if (
            activities.some(
                (item) =>
                    item.toLowerCase() ===
                    value.toLowerCase()
            )
        ) {
            setActivityInput("");
            return;
        }

        const updated = [
            ...activities,
            value,
        ];

        setActivities(updated);

        setValue(
            "activities",
            updated,
            {
                shouldValidate: true,
                shouldDirty: true,
            }
        );

        setActivityInput("");
    };

    const removeActivity = (
        index: number
    ) => {
        const updated =
            activities.filter(
                (_, i) => i !== index
            );

        setActivities(updated);

        setValue(
            "activities",
            updated,
            {
                shouldValidate: true,
                shouldDirty: true,
            }
        );
    };

    const toggleMonth = (
        month: string
    ) => {
        const updated =
            bestTimeToVisit.includes(month)
                ? bestTimeToVisit.filter(
                    (item) =>
                        item !== month
                )
                : [
                    ...bestTimeToVisit,
                    month,
                ];

        setBestTimeToVisit(updated);

        setValue(
            "bestTimeToVisit",
            updated,
            {
                shouldValidate: true,
                shouldDirty: true,
            }
        );
    };

    const addKeyword = () => {
        const value =
            keywordInput.trim();

        if (!value) return;

        if (
            keywords.some(
                (item) =>
                    item.toLowerCase() ===
                    value.toLowerCase()
            )
        ) {
            setKeywordInput("");
            return;
        }

        const updated = [
            ...keywords,
            value,
        ];

        setKeywords(updated);

        setValue(
            "keywords",
            updated,
            {
                shouldValidate: true,
                shouldDirty: true,
            }
        );

        setKeywordInput("");
    };

    const removeKeyword = (
        index: number
    ) => {
        const updated =
            keywords.filter(
                (_, i) => i !== index
            );

        setKeywords(updated);

        setValue(
            "keywords",
            updated,
            {
                shouldValidate: true,
                shouldDirty: true,
            }
        );
    };

    const validateImage = (
        file: File
    ) => {
        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/webp",
        ];

        if (
            !allowedTypes.includes(
                file.type
            )
        ) {
            setError(
                "Only JPG, PNG and WEBP images are allowed"
            );

            return false;
        }

        if (
            file.size >
            5 * 1024 * 1024
        ) {
            setError(
                "Each image must be smaller than 5MB"
            );

            return false;
        }

        return true;
    };

    const createPreview = (
        file: File
    ) => {
        const url =
            URL.createObjectURL(file);

        objectUrlsRef.current.add(
            url
        );

        return url;
    };

    const revokePreview = (
        url: string | null
    ) => {
        if (!url) return;

        URL.revokeObjectURL(url);

        objectUrlsRef.current.delete(
            url
        );
    };

    const loadDestination = async () => {
        setLoadingDestination(true);
        setError("");

        try {
            const response =
                await fetch(
                    `/api/admin/get-destination?id=${destinationId}`,
                    {
                        method: "GET",
                        cache: "no-store",
                    }
                );

            const result =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message ||
                        "Failed to load destination"
                );
            }

            const destination: DestinationResponse =
                result.data;

            reset({
                name:
                    destination.name ||
                    "",
                slug:
                    destination.slug ||
                    "",
                subtitle:
                    destination.subtitle ||
                    "",
                description:
                    destination.description ||
                    "",
                location:
                    destination.location ||
                    "",
                idealTrip:
                    destination.idealTrip ||
                    "",
                budget:
                    destination.budget ||
                    "",
                activities:
                    destination.activities ||
                    [],
                bestTimeToVisit:
                    destination.bestTimeToVisit ||
                    [],
                whyVisit:
                    destination.whyVisit ||
                    [],
                attractions:
                    destination.attractions?.map(
                        (item) => ({
                            name:
                                item.name,
                            description:
                                item.description,
                        })
                    ) || [],
                metaTitle:
                    destination.metaTitle ||
                    "",
                metaDescription:
                    destination.metaDescription ||
                    "",
                keywords:
                    destination.keywords ||
                    [],
                isPublished:
                    Boolean(
                        destination.isPublished
                    ),
                isFeatured:
                    Boolean(
                        destination.isFeatured
                    ),
            });

            setActivities(
                destination.activities ||
                []
            );

            setBestTimeToVisit(
                destination.bestTimeToVisit ||
                []
            );

            setKeywords(
                destination.keywords ||
                []
            );

            setWhyVisit(
                (
                    destination.whyVisit ||
                    []
                ).map((item) => ({
                    id:
                        item.id ||
                        crypto.randomUUID(),
                    title:
                        item.title || "",
                    description:
                        item.description ||
                        "",
                }))
            );

            setExistingHeroImage(
                destination.heroImage ||
                null
            );

            setHeroImage(null);
            setHeroPreview(null);

            setGallery(
                (
                    destination.gallery ||
                    []
                ).map(
                    (image) => ({
                        id:
                            crypto.randomUUID(),
                        preview:
                            image.url,
                        existing: true,
                        url:
                            image.url,
                        publicId:
                            image.publicId,
                    })
                )
            );

            setAttractions(
                (
                    destination.attractions ||
                    []
                )
                    .sort(
                        (
                            a,
                            b
                        ) =>
                            (
                                a.sortOrder ||
                                0
                            ) -
                            (
                                b.sortOrder ||
                                0
                            )
                    )
                    .map(
                        (item) => ({
                            id:
                                item.id,
                            name:
                                item.name ||
                                "",
                            description:
                                item.description ||
                                "",
                            image:
                                null,
                            imagePreview:
                                null,
                            existingImageUrl:
                                item.imageUrl ||
                                null,
                            existingPublicId:
                                item.publicId ||
                                undefined,
                            existing:
                                true,
                        })
                    )
            );
        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "Failed to load destination"
            );
        } finally {
            setLoadingDestination(false);
        }
    };

    useEffect(() => {
        if (!destinationId) return;

        loadDestination();
    }, [destinationId]);

    const handleHeroImage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file =
            event.target.files?.[0];

        if (!file) return;

        if (!validateImage(file)) {
            event.target.value = "";
            return;
        }

        if (heroPreview) {
            revokePreview(
                heroPreview
            );
        }

        setHeroImage(file);

        setHeroPreview(
            createPreview(file)
        );

        setError("");

        event.target.value = "";
    };

    const removeHeroImage = () => {
        if (heroPreview) {
            revokePreview(
                heroPreview
            );
        }

        setHeroImage(null);
        setHeroPreview(null);

        setError("");
    };

    const handleGallery = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const files = Array.from(
            event.target.files || []
        );

        if (!files.length) return;

        if (
            gallery.length +
            files.length >
            15
        ) {
            setError(
                `You can have a maximum of 15 gallery images. You currently have ${gallery.length}.`
            );

            event.target.value = "";

            return;
        }

        for (const file of files) {
            if (!validateImage(file)) {
                event.target.value = "";
                return;
            }
        }

        const newImages: GalleryItem[] =
            files.map((file) => ({
                id:
                    crypto.randomUUID(),
                file,
                preview:
                    createPreview(file),
                existing: false,
            }));

        setGallery(
            (previous) => [
                ...previous,
                ...newImages,
            ]
        );

        setError("");

        event.target.value = "";
    };

    const removeGalleryImage = (
        id: string
    ) => {
        setGallery(
            (previous) => {
                const image =
                    previous.find(
                        (item) =>
                            item.id === id
                    );

                if (
                    image &&
                    !image.existing
                ) {
                    revokePreview(
                        image.preview
                    );
                }

                return previous.filter(
                    (item) =>
                        item.id !== id
                );
            }
        );
    };

    const addAttraction = () => {
        const newAttraction: AttractionItem =
            {
                id:
                    crypto.randomUUID(),
                name: "",
                description: "",
                image: null,
                imagePreview: null,
                existingImageUrl:
                    null,
                existing:
                    false,
            };

        const updated = [
            ...attractions,
            newAttraction,
        ];

        setAttractions(updated);

        setValue(
            "attractions",
            updated.map(
                (attraction) => ({
                    name:
                        attraction.name,
                    description:
                        attraction.description,
                })
            ),
            {
                shouldValidate: true,
                shouldDirty: true,
            }
        );
    };

    const removeAttraction = (
        id: string
    ) => {
        const attraction =
            attractions.find(
                (item) =>
                    item.id === id
            );

        if (
            attraction?.imagePreview
        ) {
            revokePreview(
                attraction.imagePreview
            );
        }

        const updated =
            attractions.filter(
                (item) =>
                    item.id !== id
            );

        setAttractions(updated);

        setValue(
            "attractions",
            updated.map(
                (item) => ({
                    name:
                        item.name,
                    description:
                        item.description,
                })
            ),
            {
                shouldValidate: true,
                shouldDirty: true,
            }
        );
    };

    const updateAttraction = (
        id: string,
        field:
            | "name"
            | "description",
        value: string
    ) => {
        const updated =
            attractions.map(
                (item) =>
                    item.id === id
                        ? {
                            ...item,
                            [field]:
                                value,
                        }
                        : item
            );

        setAttractions(updated);

        setValue(
            "attractions",
            updated.map(
                (item) => ({
                    name:
                        item.name,
                    description:
                        item.description,
                })
            ),
            {
                shouldValidate: true,
                shouldDirty: true,
            }
        );
    };

    const updateAttractionImage = (
        id: string,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file =
            event.target.files?.[0];

        if (!file) return;

        if (!validateImage(file)) {
            event.target.value = "";
            return;
        }

        const preview =
            createPreview(file);

        setAttractions(
            (previous) =>
                previous.map(
                    (item) => {
                        if (
                            item.id !==
                            id
                        ) {
                            return item;
                        }

                        if (
                            item.imagePreview
                        ) {
                            revokePreview(
                                item.imagePreview
                            );
                        }

                        return {
                            ...item,
                            image: file,
                            imagePreview:
                                preview,
                        };
                    }
                )
        );

        setError("");

        event.target.value = "";
    };

    const removeAttractionImage = (
        id: string
    ) => {
        setAttractions(
            (previous) =>
                previous.map(
                    (item) => {
                        if (
                            item.id !==
                            id
                        ) {
                            return item;
                        }

                        if (
                            item.imagePreview
                        ) {
                            revokePreview(
                                item.imagePreview
                            );
                        }

                        return {
                            ...item,
                            image: null,
                            imagePreview:
                                null,
                            existingImageUrl:
                                null,
                            existingPublicId:
                                undefined,
                        };
                    }
                )
        );
    };

    const addWhyVisit = () => {
        const newItem: WhyVisitItem =
            {
                id:
                    crypto.randomUUID(),
                title: "",
                description: "",
            };

        const updated = [
            ...whyVisit,
            newItem,
        ];

        setWhyVisit(updated);

        setValue(
            "whyVisit",
            updated,
            {
                shouldValidate: true,
                shouldDirty: true,
            }
        );
    };

    const removeWhyVisit = (
        id: string
    ) => {
        const updated =
            whyVisit.filter(
                (item) =>
                    item.id !== id
            );

        setWhyVisit(updated);

        setValue(
            "whyVisit",
            updated,
            {
                shouldValidate: true,
                shouldDirty: true,
            }
        );
    };

    const updateWhyVisit = (
        id: string,
        field:
            | "title"
            | "description",
        value: string
    ) => {
        const updated =
            whyVisit.map(
                (item) =>
                    item.id === id
                        ? {
                            ...item,
                            [field]:
                                value,
                        }
                        : item
            );

        setWhyVisit(updated);

        setValue(
            "whyVisit",
            updated,
            {
                shouldValidate: true,
                shouldDirty: true,
            }
        );
    };

    const clearImagePreviews = () => {
        objectUrlsRef.current.forEach(
            (url) => {
                URL.revokeObjectURL(
                    url
                );
            }
        );

        objectUrlsRef.current.clear();
    };

    useEffect(() => {
        return () => {
            objectUrlsRef.current.forEach(
                (url) => {
                    URL.revokeObjectURL(
                        url
                    );
                }
            );

            objectUrlsRef.current.clear();
        };
    }, []);

    const onSubmit = async (
        data: DestinationFormValues
    ) => {
        setError("");
        setSuccess("");

        if (
            !heroImage &&
            !existingHeroImage
        ) {
            setError(
                "Hero image is required"
            );

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

            return;
        }

        if (gallery.length > 15) {
            setError(
                "Maximum 15 gallery images are allowed"
            );

            return;
        }

        for (
            const attraction of attractions
        ) {
            if (
                !attraction.name.trim()
            ) {
                setError(
                    "Every attraction must have a name"
                );

                return;
            }

            if (
                !attraction.description.trim()
            ) {
                setError(
                    `Description is required for ${attraction.name || "attraction"}`
                );

                return;
            }

            if (
                !attraction.image &&
                !attraction.existingImageUrl
            ) {
                setError(
                    `Image is required for ${attraction.name || "attraction"}`
                );

                return;
            }
        }

        for (
            const item of whyVisit
        ) {
            if (!item.title.trim()) {
                setError(
                    "Every Why Visit item must have a title"
                );

                return;
            }

            if (
                !item.description.trim()
            ) {
                setError(
                    "Every Why Visit item must have a description"
                );

                return;
            }
        }

        setLoading(true);

        try {
            const formData =
                new FormData();

            formData.append(
                "name",
                data.name
            );

            formData.append(
                "slug",
                data.slug
            );

            formData.append(
                "subtitle",
                data.subtitle || ""
            );

            formData.append(
                "description",
                data.description || ""
            );

            formData.append(
                "location",
                data.location || ""
            );

            formData.append(
                "idealTrip",
                data.idealTrip || ""
            );

            formData.append(
                "budget",
                data.budget || ""
            );

            formData.append(
                "activities",
                JSON.stringify(
                    data.activities
                )
            );

            formData.append(
                "bestTimeToVisit",
                JSON.stringify(
                    data.bestTimeToVisit
                )
            );

            formData.append(
                "whyVisit",
                JSON.stringify(
                    whyVisit.map(
                        (item) => ({
                            id:
                                item.id,
                            title:
                                item.title.trim(),
                            description:
                                item.description.trim(),
                        })
                    )
                )
            );

            formData.append(
                "metaTitle",
                data.metaTitle || ""
            );

            formData.append(
                "metaDescription",
                data.metaDescription ||
                    ""
            );

            formData.append(
                "keywords",
                JSON.stringify(
                    data.keywords
                )
            );

            formData.append(
                "isPublished",
                String(
                    data.isPublished
                )
            );

            formData.append(
                "isFeatured",
                String(
                    data.isFeatured
                )
            );

            if (heroImage) {
                formData.append(
                    "heroImage",
                    heroImage
                );
            }

            const existingGallery =
                gallery
                    .filter(
                        (item) =>
                            item.existing
                    )
                    .map(
                        (item) => ({
                            url:
                                item.url ||
                                item.preview,
                            publicId:
                                item.publicId ||
                                "",
                        })
                    );

            formData.append(
                "existingGallery",
                JSON.stringify(
                    existingGallery
                )
            );

            gallery
                .filter(
                    (item) =>
                        !item.existing &&
                        item.file
                )
                .forEach(
                    (item) => {
                        if (!item.file)
                            return;

                        formData.append(
                            "galleryImages",
                            item.file
                        );
                    }
                );

            const attractionData =
                attractions.map(
                    (
                        attraction,
                        index
                    ) => ({
                        id:
                            attraction.id,
                        name:
                            attraction.name.trim(),
                        description:
                            attraction.description.trim(),
                        sortOrder:
                            index,
                        imageUrl:
                            attraction
                                .existingImageUrl ||
                            null,
                        publicId:
                            attraction
                                .existingPublicId ||
                            null,
                    })
                );

            formData.append(
                "attractions",
                JSON.stringify(
                    attractionData
                )
            );

            attractions.forEach(
                (attraction) => {
                    if (
                        attraction.image
                    ) {
                        formData.append(
                            `attractionImage_${attraction.id}`,
                            attraction.image
                        );
                    }
                }
            );

            const response =
                await fetch(
                    `/api/admin/update-destination?id=${destinationId}`,
                    {
                        method: "PATCH",
                        body: formData,
                    }
                );

            const result =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message ||
                        "Failed to update destination"
                );
            }

            setSuccess(
                "Destination updated successfully"
            );

            clearImagePreviews();

            setHeroImage(null);
            setHeroPreview(null);

            await loadDestination();

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "Something went wrong"
            );

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } finally {
            setLoading(false);
        }
    };

    if (loadingDestination) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Loader2 className="size-5 animate-spin" />
                    Loading destination...
                </div>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit(
                onSubmit,
                onInvalid
            )}
            className="space-y-8"
        >
            {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                </div>
            )}

            {success && (
                <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600">
                    {success}
                </div>
            )}

            <section className="rounded-xl border bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-6">
                    <h2 className="text-lg font-semibold">
                        Basic Information
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Update the basic information for your destination.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label>
                            Destination Name *
                        </Label>

                        <Input
                            {...register(
                                "name"
                            )}
                            onChange={
                                handleNameChange
                            }
                        />

                        {errors.name && (
                            <p className="text-xs text-red-500">
                                {
                                    errors
                                        .name
                                        .message
                                }
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label>
                            Slug *
                        </Label>

                        <Input
                            {...register(
                                "slug"
                            )}
                        />

                        {errors.slug && (
                            <p className="text-xs text-red-500">
                                {
                                    errors
                                        .slug
                                        .message
                                }
                            </p>
                        )}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label>
                            Subtitle
                        </Label>

                        <Input
                            {...register(
                                "subtitle"
                            )}
                        />

                        {errors.subtitle && (
                            <p className="text-xs text-red-500">
                                {
                                    errors
                                        .subtitle
                                        .message
                                }
                            </p>
                        )}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label>
                            Description
                        </Label>

                        <Textarea
                            {...register(
                                "description"
                            )}
                            rows={5}
                        />

                        {errors.description && (
                            <p className="text-xs text-red-500">
                                {
                                    errors
                                        .description
                                        .message
                                }
                            </p>
                        )}
                    </div>
                </div>
            </section>

            <section className="rounded-xl border bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-6">
                    <h2 className="text-lg font-semibold">
                        Travel Information
                    </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    <div className="space-y-2">
                        <Label>
                            Location
                        </Label>

                        <Input
                            {...register(
                                "location"
                            )}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>
                            Ideal Trip
                        </Label>

                        <Input
                            {...register(
                                "idealTrip"
                            )}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>
                            Budget
                        </Label>

                        <Input
                            {...register(
                                "budget"
                            )}
                        />
                    </div>
                </div>

                <div className="mt-6 space-y-3">
                    <Label>
                        Activities
                    </Label>

                    <div className="flex gap-2">
                        <Input
                            value={
                                activityInput
                            }
                            onChange={(
                                event
                            ) =>
                                setActivityInput(
                                    event
                                        .target
                                        .value
                                )
                            }
                            onKeyDown={(
                                event
                            ) => {
                                if (
                                    event.key ===
                                    "Enter"
                                ) {
                                    event.preventDefault();
                                    addActivity();
                                }
                            }}
                            placeholder="Trekking"
                        />

                        <Button
                            type="button"
                            onClick={
                                addActivity
                            }
                        >
                            <Plus />
                            Add
                        </Button>
                    </div>

                    {activities.length >
                        0 && (
                        <div className="flex flex-wrap gap-2">
                            {activities.map(
                                (
                                    activity,
                                    index
                                ) => (
                                    <div
                                        key={`${activity}-${index}`}
                                        className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary"
                                    >
                                        {
                                            activity
                                        }

                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeActivity(
                                                    index
                                                )
                                            }
                                            className="text-primary/70 hover:text-primary"
                                        >
                                            <X className="size-4" />
                                        </button>
                                    </div>
                                )
                            )}
                        </div>
                    )}
                </div>

                <div className="mt-6 space-y-3">
                    <Label>
                        Best Time To Visit
                    </Label>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                        {months.map(
                            (month) => {
                                const selected =
                                    bestTimeToVisit.includes(
                                        month
                                    );

                                return (
                                    <button
                                        key={
                                            month
                                        }
                                        type="button"
                                        onClick={() =>
                                            toggleMonth(
                                                month
                                            )
                                        }
                                        className={`rounded-lg border px-3 py-2 text-sm transition ${
                                            selected
                                                ? "border-primary bg-primary text-white"
                                                : "bg-white hover:border-primary"
                                        }`}
                                    >
                                        {
                                            month
                                        }
                                    </button>
                                );
                            }
                        )}
                    </div>
                </div>
            </section>

            <section className="rounded-xl border bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-lg font-semibold">
                            Why Visit
                        </h2>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Add multiple reasons why travelers should visit this destination.
                        </p>
                    </div>

                    <Button
                        type="button"
                        variant="outline"
                        onClick={
                            addWhyVisit
                        }
                    >
                        <Plus className="size-4" />
                        Add Why Visit
                    </Button>
                </div>

                {whyVisit.length ===
                0 ? (
                    <div className="rounded-xl border border-dashed px-5 py-8 text-center">
                        <p className="text-sm text-muted-foreground">
                            No Why Visit items added yet.
                        </p>

                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="mt-4"
                            onClick={
                                addWhyVisit
                            }
                        >
                            <Plus className="size-4" />
                            Add First Reason
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {whyVisit.map(
                            (
                                item,
                                index
                            ) => {
                                const itemErrors =
                                    errors
                                        .whyVisit?.[
                                        index
                                    ];

                                return (
                                    <div
                                        key={
                                            item.id
                                        }
                                        className="rounded-xl border bg-muted/10 p-4"
                                    >
                                        <div className="mb-4 flex items-center justify-between">
                                            <h3 className="text-sm font-semibold">
                                                Why Visit{" "}
                                                {index +
                                                    1}
                                            </h3>

                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={() =>
                                                    removeWhyVisit(
                                                        item.id
                                                    )
                                                }
                                                className="h-8 px-2 text-red-500 hover:bg-red-50 hover:text-red-600"
                                            >
                                                <X className="size-4" />

                                                <span className="hidden sm:inline">
                                                    Remove
                                                </span>
                                            </Button>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <Label>
                                                    Title *
                                                </Label>

                                                <Input
                                                    value={
                                                        item.title
                                                    }
                                                    onChange={(
                                                        event
                                                    ) =>
                                                        updateWhyVisit(
                                                            item.id,
                                                            "title",
                                                            event
                                                                .target
                                                                .value
                                                        )
                                                    }
                                                />

                                                {itemErrors?.title
                                                    ?.message && (
                                                    <p className="text-xs text-red-500">
                                                        {
                                                            itemErrors
                                                                .title
                                                                .message
                                                        }
                                                    </p>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <Label>
                                                    Description *
                                                </Label>

                                                <Textarea
                                                    value={
                                                        item.description
                                                    }
                                                    onChange={(
                                                        event
                                                    ) =>
                                                        updateWhyVisit(
                                                            item.id,
                                                            "description",
                                                            event
                                                                .target
                                                                .value
                                                        )
                                                    }
                                                    rows={
                                                        4
                                                    }
                                                />

                                                {itemErrors
                                                    ?.description
                                                    ?.message && (
                                                    <p className="text-xs text-red-500">
                                                        {
                                                            itemErrors
                                                                .description
                                                                .message
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                )}
            </section>

            <section className="rounded-xl border bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-6">
                    <h2 className="text-lg font-semibold">
                        Hero Image
                    </h2>
                </div>

                {existingHeroImage &&
                    !heroPreview && (
                    <div className="relative mb-5 overflow-hidden rounded-xl border">
                        <img
                            src={
                                existingHeroImage
                            }
                            alt="Current hero"
                            className="h-64 w-full object-cover"
                        />

                        <div className="absolute left-3 top-3 rounded-md bg-black/70 px-2 py-1 text-xs text-white">
                            Current Hero Image
                        </div>
                    </div>
                )}

                <div
                    onClick={() =>
                        heroInputRef.current?.click()
                    }
                    className="flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition hover:bg-muted/30"
                >
                    <ImagePlus className="mb-3 size-8 text-muted-foreground" />

                    <span className="text-sm font-medium">
                        {heroImage
                            ? "Change Selected Hero Image"
                            : "Replace Hero Image"}
                    </span>

                    <span className="mt-1 text-xs text-muted-foreground">
                        JPG, PNG or WEBP — Maximum 5MB
                    </span>

                    <input
                        ref={
                            heroInputRef
                        }
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        className="hidden"
                        onChange={
                            handleHeroImage
                        }
                    />
                </div>

                {heroPreview && (
                    <div className="relative mt-5 overflow-hidden rounded-xl border">
                        <img
                            src={
                                heroPreview
                            }
                            alt="New hero preview"
                            className="h-64 w-full object-cover"
                        />

                        <div className="absolute left-3 top-3 rounded-md bg-primary px-2 py-1 text-xs text-white">
                            New Hero Image
                        </div>

                        <button
                            type="button"
                            onClick={
                                removeHeroImage
                            }
                            className="absolute right-3 top-3 rounded-full bg-black/70 p-2 text-white hover:bg-black"
                        >
                            <X className="size-4" />
                        </button>
                    </div>
                )}
            </section>

            <section className="rounded-xl border bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-lg font-semibold">
                            Gallery
                        </h2>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Keep existing images or add new ones. Maximum 15 images.
                        </p>
                    </div>

                    <div>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() =>
                                galleryInputRef.current?.click()
                            }
                            disabled={
                                gallery.length >=
                                15
                            }
                        >
                            <Plus className="size-4" />
                            Add Images
                        </Button>

                        <input
                            ref={
                                galleryInputRef
                            }
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                            multiple
                            className="hidden"
                            onChange={
                                handleGallery
                            }
                        />
                    </div>
                </div>

                {gallery.length ===
                0 ? (
                    <div
                        onClick={() =>
                            galleryInputRef.current?.click()
                        }
                        className="flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition hover:bg-muted/30"
                    >
                        <ImagePlus className="mb-3 size-8 text-muted-foreground" />

                        <p className="text-sm font-medium">
                            Add gallery images
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                            JPG, PNG or WEBP — Maximum 5MB each
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                        {gallery.map(
                            (
                                image,
                                index
                            ) => (
                                <div
                                    key={
                                        image.id
                                    }
                                    className="group relative overflow-hidden rounded-xl border bg-muted"
                                >
                                    <img
                                        src={
                                            image.preview
                                        }
                                        alt={`Gallery image ${
                                            index +
                                            1
                                        }`}
                                        className="aspect-square w-full object-cover"
                                    />

                                    <div className="absolute left-2 top-2 rounded-md bg-black/70 px-2 py-1 text-[10px] font-medium text-white">
                                        {image.existing
                                            ? "Existing"
                                            : "New"}
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/60 px-2 py-1.5">
                                        <span className="text-[10px] font-medium text-white">
                                            Image{" "}
                                            {index +
                                                1}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeGalleryImage(
                                                    image.id
                                                )
                                            }
                                            className="rounded-full p-1 text-white hover:bg-red-500"
                                        >
                                            <X className="size-3.5" />
                                        </button>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                )}

                {gallery.length >
                    0 && (
                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                        <span>
                            {
                                gallery.length
                            }
                            /15 images
                        </span>

                        {gallery.length <
                            15 && (
                            <span>
                                {15 -
                                    gallery.length}{" "}
                                remaining
                            </span>
                        )}
                    </div>
                )}
            </section>

            <section className="rounded-xl border bg-white p-4 shadow-sm sm:p-5">
                <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <div>
                        <h2 className="text-lg font-semibold">
                            Attractions
                        </h2>

                        <p className="mt-1 text-xs text-muted-foreground">
                            Add places and attractions available at this destination.
                        </p>
                    </div>

                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={
                            addAttraction
                        }
                    >
                        <Plus className="size-4" />
                        Add Attraction
                    </Button>
                </div>

                {attractions.length ===
                0 ? (
                    <div className="rounded-lg border border-dashed px-4 py-6 text-center">
                        <p className="text-sm text-muted-foreground">
                            No attractions added yet.
                        </p>

                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="mt-3"
                            onClick={
                                addAttraction
                            }
                        >
                            <Plus className="size-4" />
                            Add First Attraction
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {attractions.map(
                            (
                                attraction,
                                index
                            ) => {
                                const itemErrors =
                                    errors
                                        .attractions?.[
                                        index
                                    ];

                                return (
                                    <div
                                        key={
                                            attraction.id
                                        }
                                        className="rounded-lg border bg-muted/10 p-3 sm:p-4"
                                    >
                                        <div className="mb-3 flex items-center justify-between">
                                            <h3 className="text-sm font-semibold">
                                                Attraction{" "}
                                                {index +
                                                    1}
                                            </h3>

                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={() =>
                                                    removeAttraction(
                                                        attraction.id
                                                    )
                                                }
                                                className="h-8 px-2 text-red-500 hover:bg-red-50 hover:text-red-600"
                                            >
                                                <X className="size-4" />

                                                <span className="hidden sm:inline">
                                                    Remove
                                                </span>
                                            </Button>
                                        </div>

                                        <div className="grid gap-3 md:grid-cols-[1fr_220px]">
                                            <div className="space-y-3">
                                                <div className="space-y-1.5">
                                                    <Label className="text-xs">
                                                        Name *
                                                    </Label>

                                                    <Input
                                                        value={
                                                            attraction.name
                                                        }
                                                        onChange={(
                                                            event
                                                        ) =>
                                                            updateAttraction(
                                                                attraction.id,
                                                                "name",
                                                                event
                                                                    .target
                                                                    .value
                                                            )
                                                        }
                                                        placeholder="Kainchi Dham"
                                                        className="h-9"
                                                    />

                                                    {itemErrors
                                                        ?.name
                                                        ?.message && (
                                                        <p className="text-xs text-red-500">
                                                            {
                                                                itemErrors
                                                                    .name
                                                                    .message
                                                            }
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="space-y-1.5">
                                                    <Label className="text-xs">
                                                        Description *
                                                    </Label>

                                                    <Textarea
                                                        value={
                                                            attraction.description
                                                        }
                                                        onChange={(
                                                            event
                                                        ) =>
                                                            updateAttraction(
                                                                attraction.id,
                                                                "description",
                                                                event
                                                                    .target
                                                                    .value
                                                            )
                                                        }
                                                        placeholder="Describe this attraction..."
                                                        rows={
                                                            3
                                                        }
                                                        className="min-h-[90px] resize-none"
                                                    />

                                                    {itemErrors
                                                        ?.description
                                                        ?.message && (
                                                        <p className="text-xs text-red-500">
                                                            {
                                                                itemErrors
                                                                    .description
                                                                    .message
                                                            }
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <Label className="text-xs">
                                                    Image *
                                                </Label>

                                                {!attraction.image &&
                                                !attraction.existingImageUrl ? (
                                                    <label className="flex h-[123px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed bg-white text-center transition hover:bg-muted/30">
                                                        <ImagePlus className="mb-1.5 size-6 text-muted-foreground" />

                                                        <span className="text-xs font-medium">
                                                            Upload Image
                                                        </span>

                                                        <span className="mt-0.5 text-[10px] text-muted-foreground">
                                                            JPG, PNG, WEBP • Max 5MB
                                                        </span>

                                                        <input
                                                            type="file"
                                                            accept="image/jpeg,image/png,image/webp"
                                                            className="hidden"
                                                            onChange={(
                                                                event
                                                            ) =>
                                                                updateAttractionImage(
                                                                    attraction.id,
                                                                    event
                                                                )
                                                            }
                                                        />
                                                    </label>
                                                ) : (
                                                    <div className="relative h-[123px] overflow-hidden rounded-lg border bg-muted">
                                                        {attraction.imagePreview ? (
                                                            <>
                                                                <img
                                                                    src={
                                                                        attraction.imagePreview
                                                                    }
                                                                    alt={
                                                                        attraction.name ||
                                                                        "Attraction preview"
                                                                    }
                                                                    className="h-full w-full object-cover"
                                                                />

                                                                <div className="absolute left-1.5 top-1.5 rounded bg-primary px-1.5 py-0.5 text-[9px] text-white">
                                                                    New
                                                                </div>
                                                            </>
                                                        ) : attraction.existingImageUrl ? (
                                                            <>
                                                                <img
                                                                    src={
                                                                        attraction.existingImageUrl
                                                                    }
                                                                    alt={
                                                                        attraction.name ||
                                                                        "Attraction"
                                                                    }
                                                                    className="h-full w-full object-cover"
                                                                />

                                                                <div className="absolute left-1.5 top-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[9px] text-white">
                                                                    Existing
                                                                </div>
                                                            </>
                                                        ) : null}

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                removeAttractionImage(
                                                                    attraction.id
                                                                )
                                                            }
                                                            className="absolute right-1.5 top-1.5 rounded-full bg-black/70 p-1.5 text-white transition hover:bg-red-500"
                                                        >
                                                            <X className="size-3.5" />
                                                        </button>
                                                    </div>
                                                )}

                                                {(attraction.image ||
                                                    attraction.existingImageUrl) && (
                                                    <label className="block cursor-pointer text-center text-[10px] text-primary hover:underline">
                                                        Replace Image

                                                        <input
                                                            type="file"
                                                            accept="image/jpeg,image/png,image/webp"
                                                            className="hidden"
                                                            onChange={(
                                                                event
                                                            ) =>
                                                                updateAttractionImage(
                                                                    attraction.id,
                                                                    event
                                                                )
                                                            }
                                                        />
                                                    </label>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                )}
            </section>

            <section className="rounded-xl border bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-6">
                    <h2 className="text-lg font-semibold">
                        SEO
                    </h2>
                </div>

                <div className="space-y-5">
                    <div className="space-y-2">
                        <Label>
                            Meta Title
                        </Label>

                        <Input
                            {...register(
                                "metaTitle"
                            )}
                        />

                        {errors.metaTitle && (
                            <p className="text-xs text-red-500">
                                {
                                    errors
                                        .metaTitle
                                        .message
                                }
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label>
                            Meta Description
                        </Label>

                        <Textarea
                            {...register(
                                "metaDescription"
                            )}
                            rows={4}
                        />

                        {errors.metaDescription && (
                            <p className="text-xs text-red-500">
                                {
                                    errors
                                        .metaDescription
                                        .message
                                }
                            </p>
                        )}
                    </div>

                    <div className="space-y-3">
                        <Label>
                            Keywords
                        </Label>

                        <div className="flex gap-2">
                            <Input
                                value={
                                    keywordInput
                                }
                                onChange={(
                                    event
                                ) =>
                                    setKeywordInput(
                                        event
                                            .target
                                            .value
                                    )
                                }
                                onKeyDown={(
                                    event
                                ) => {
                                    if (
                                        event.key ===
                                        "Enter"
                                    ) {
                                        event.preventDefault();
                                        addKeyword();
                                    }
                                }}
                                placeholder="uttarakhand tourism"
                            />

                            <Button
                                type="button"
                                onClick={
                                    addKeyword
                                }
                            >
                                <Plus />
                                Add
                            </Button>
                        </div>

                        {keywords.length >
                            0 && (
                            <div className="flex flex-wrap gap-2">
                                {keywords.map(
                                    (
                                        keyword,
                                        index
                                    ) => (
                                        <div
                                            key={`${keyword}-${index}`}
                                            className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary"
                                        >
                                            {
                                                keyword
                                            }

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeKeyword(
                                                        index
                                                    )
                                                }
                                            >
                                                <X className="size-4" />
                                            </button>
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="rounded-xl border bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-6">
                    <h2 className="text-lg font-semibold">
                        Publishing
                    </h2>
                </div>

                <div className="space-y-5">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <p className="font-medium">
                                Publish Destination
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Make this destination visible
                                on the website.
                            </p>
                        </div>

                        <Switch
                            checked={watch(
                                "isPublished"
                            )}
                            onCheckedChange={(
                                checked
                            ) =>
                                setValue(
                                    "isPublished",
                                    checked,
                                    {
                                        shouldValidate:
                                            true,
                                        shouldDirty:
                                            true,
                                    }
                                )
                            }
                        />
                    </div>

                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <p className="font-medium">
                                Featured Destination
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Show this destination in
                                featured sections.
                            </p>
                        </div>

                        <Switch
                            checked={watch(
                                "isFeatured"
                            )}
                            onCheckedChange={(
                                checked
                            ) =>
                                setValue(
                                    "isFeatured",
                                    checked,
                                    {
                                        shouldValidate:
                                            true,
                                        shouldDirty:
                                            true,
                                    }
                                )
                            }
                        />
                    </div>
                </div>
            </section>

            <div className="flex justify-end">
                <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                >
                    {loading && (
                        <Loader2 className="animate-spin" />
                    )}

                    {loading
                        ? "Updating..."
                        : "Update Destination"}
                </Button>
            </div>
        </form>
    );
}