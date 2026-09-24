"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { X, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import BlogEditor from "./BlogEditor";

const blogSchema = z.object({
    title: z
        .string()
        .min(3, "Title must be at least 3 characters")
        .max(150, "Title must not exceed 150 characters"),

    slug: z
        .string()
        .min(3, "Slug must be at least 3 characters")
        .regex(
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
            "Slug can only contain lowercase letters, numbers and hyphens"
        ),

    excerpt: z
        .string()
        .max(300, "Excerpt must not exceed 300 characters")
        .optional(),

    content: z
        .string()
        .min(20, "Blog content is required"),

    featuredImage: z
        .instanceof(File)
        .refine(
            (file) => file.size <= 5 * 1024 * 1024,
            "Image must be less than 5MB"
        )
        .refine(
            (file) =>
                ["image/jpeg", "image/png", "image/webp"].includes(
                    file.type
                ),
            "Only JPG, PNG and WebP images are allowed"
        )
        .optional(),
    category: z
        .string(),
    tags: z
        .array(z.string())
        .min(1, "Add at least one tag"),

    isPublished: z.boolean(),
});

type BlogFormValues = z.infer<typeof blogSchema>;

interface BlogCategory {
     name: string;
 }

interface BlogFormProps {
    categories: BlogCategory[];
}

export default function BlogForm({
    categories,
}: BlogFormProps) {
    const [tagInput, setTagInput] = useState("");
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const {
        register,
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<BlogFormValues>({
        resolver: zodResolver(blogSchema),
        defaultValues: {
            title: "",
            slug: "",
            excerpt: "",
            content: "",
            featuredImage: undefined,
            category: "",
            tags: [],
            isPublished: false,
        },
    });

    const tags = watch("tags");

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    };

    const handleTitleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const title = event.target.value;

        setValue("title", title);

        setValue("slug", generateSlug(title), {
            shouldValidate: true,
        });
    };
    const addTag = () => {
        const tag = tagInput.trim();

        if (!tag) {
            return;
        }

        if (tags.includes(tag)) {
            setTagInput("");
            return;
        }

        setValue("tags", [...tags, tag]);
        setTagInput("");
    };

    const removeTag = (tagToRemove: string) => {
        setValue(
            "tags",
            tags.filter((tag) => tag !== tagToRemove)
        );
    };

    const handleImageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        setValue("featuredImage", file, {
            shouldValidate: true,
        });

        const previewUrl = URL.createObjectURL(file);

        setImagePreview(previewUrl);
    };

    const onSubmit = async (
        data: BlogFormValues
    ) => {
        try {
            const formData = new FormData();

            formData.append(
                "title",
                data.title
            );

            formData.append(
                "slug",
                data.slug
            );

            formData.append(
                "excerpt",
                data.excerpt || ""
            );

            formData.append(
                "content",
                data.content
            );

            formData.append(
                "category",
                data.category || ""
            );

            formData.append(
                "tags",
                JSON.stringify(data.tags)
            );

            formData.append(
                "isPublished",
                String(data.isPublished)
            );

            if (data.featuredImage) {
                formData.append(
                    "featuredImage",
                    data.featuredImage
                );
            }

            const response = await fetch(
                "/api/blogs",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const result =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message ||
                    "Failed to create blog"
                );
            }

            console.log(
                "BLOG CREATED:",
                result.data
            );

            alert(
                "Blog created successfully"
            );
        } catch (error) {
            console.error(error);

            alert(
                error instanceof Error
                    ? error.message
                    : "Something went wrong"
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Blog Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="title">
                                    Title
                                </Label>

                                <Input
                                    id="title"
                                    placeholder="Enter blog title"
                                    {...register("title")}
                                    onChange={handleTitleChange}
                                />

                                {errors.title && (
                                    <p className="text-sm text-red-500">
                                        {errors.title.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="slug">
                                    Slug
                                </Label>
                                <Input
                                    id="slug"
                                    readOnly
                                    className="cursor-not-allowed bg-gray-100 text-gray-500"
                                    placeholder="blog-title"
                                    {...register("slug")}
                                />

                                {errors.slug && (
                                    <p className="text-sm text-red-500">
                                        {errors.slug.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="excerpt">
                                    Excerpt
                                </Label>

                                <Textarea
                                    id="excerpt"
                                    placeholder="Short description of the blog..."
                                    rows={4}
                                    {...register("excerpt")}
                                />

                                {errors.excerpt && (
                                    <p className="text-sm text-red-500">
                                        {errors.excerpt.message}
                                    </p>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Blog Content
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <Controller
                                name="content"
                                control={control}
                                render={({ field }) => (
                                    <BlogEditor
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />

                            {errors.content && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.content.message}
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Publish
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-5">
                            <Controller
                                name="isPublished"
                                control={control}
                                render={({ field }) => (
                                    <div className="flex items-center gap-3">
                                        <Checkbox
                                            id="isPublished"
                                            checked={field.value}
                                            onCheckedChange={
                                                field.onChange
                                            }
                                        />

                                        <Label
                                            htmlFor="isPublished"
                                            className="cursor-pointer"
                                        >
                                            Publish this blog
                                        </Label>
                                    </div>
                                )}
                            />

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#2FC2B0] text-white hover:bg-[#24ad9e]"
                            >
                                {isSubmitting
                                    ? "Publishing..."
                                    : "Publish Blog"}
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Category
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <Controller
                                name="category"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            {categories.map(
                                                (category) => (
                                                    <SelectItem
                                                        key={
                                                            category.name
                                                        }
                                                        value={
                                                            category.name
                                                        }
                                                    >
                                                        {
                                                            category.name
                                                        }
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Featured Image
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <label
                                htmlFor="featuredImage"
                                className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center transition hover:border-[#2FC2B0] hover:bg-[#E8F8F6]"
                            >
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F8F6]">
                                    <Upload className="h-6 w-6 text-[#2FC2B0]" />
                                </div>

                                <p className="text-sm font-medium text-gray-900">
                                    Upload featured image
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                    JPG, PNG or WebP · Maximum 5MB
                                </p>

                                <input
                                    id="featuredImage"
                                    type="file"
                                    accept="image/jpeg,image/png,image/webp"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                            </label>

                            {errors.featuredImage && (
                                <p className="text-sm text-red-500">
                                    {errors.featuredImage.message}
                                </p>
                            )}

                            {imagePreview && (
                                <div className="relative overflow-hidden rounded-xl border">
                                    <div className="relative aspect-video">
                                        <Image
                                            src={imagePreview}
                                            alt="Featured image preview"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setImagePreview(null);
                                            setValue("featuredImage", undefined, {
                                                shouldValidate: true,
                                            });
                                        }}
                                        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Tags
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="flex gap-2">
                                <Input
                                    value={tagInput}
                                    placeholder="Add tag"
                                    onChange={(event) =>
                                        setTagInput(
                                            event.target.value
                                        )
                                    }
                                    onKeyDown={(event) => {
                                        if (
                                            event.key ===
                                            "Enter"
                                        ) {
                                            event.preventDefault();
                                            addTag();
                                        }
                                    }}
                                />

                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={addTag}
                                >
                                    Add
                                </Button>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <button
                                        key={tag}
                                        type="button"
                                        onClick={() =>
                                            removeTag(tag)
                                        }
                                        className="rounded-full bg-[#E8F8F6] px-3 py-1.5 text-sm text-[#00383B]"
                                    >
                                        {tag} ×
                                    </button>
                                ))}
                            </div>

                            {errors.tags && (
                                <p className="text-sm text-red-500">
                                    {errors.tags.message}
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </form>
    );
}