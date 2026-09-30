"use client";

import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Loader2, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

import {
    faqSchema,
    FAQFormInput,
    FAQFormValues,
} from "@/lib/validations/faq";

interface Destination {
    id: string;
    name: string;
}

interface Package {
    id: string;
    name: string;
}

interface CreateFAQFormProps {
    destinations: Destination[];
    packages: Package[];
}

type FAQTarget = "DESTINATION" | "PACKAGE";

interface FAQItem {
    id: string;
    question: string;
    answer: string;
 }

export default function CreateFAQForm({
    destinations,
    packages,
}: CreateFAQFormProps) {
    const [targetType, setTargetType] =
        useState<FAQTarget>("DESTINATION");

    const [faqs, setFaqs] = useState<FAQItem[]>([
        {
            id: crypto.randomUUID(),
            question: "",
            answer: "",

        },
    ]);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [serverError, setServerError] = useState("");

    const {
        register,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<FAQFormInput>({
        resolver: zodResolver(faqSchema),
        defaultValues: {
            destinationId: "",
            packageId: "",
            faqs: [],
        },
    });

    const destinationId = watch("destinationId");
    const packageId = watch("packageId");

    useEffect(() => {
        if (targetType === "DESTINATION") {
            setValue("packageId", "", {
                shouldValidate: true,
            });
        } else {
            setValue("destinationId", "", {
                shouldValidate: true,
            });
        }
    }, [targetType, setValue]);

    const updateFAQ = (
        id: string,
        field: keyof FAQItem,
        value: string | boolean
    ) => {
        setFaqs((current) =>
            current.map((faq) =>
                faq.id === id
                    ? {
                          ...faq,
                          [field]: value,
                      }
                    : faq
            )
        );
    };

    const addFAQ = () => {
        setFaqs((current) => [
            ...current,
            {
                id: crypto.randomUUID(),
                question: "",
                answer: "",

            },
        ]);
    };

    const removeFAQ = (id: string) => {
        setFaqs((current) => {
            if (current.length === 1) {
                return current;
            }

            return current.filter((faq) => faq.id !== id);
        });
    };

    const handleTargetTypeChange = (
        value: string | null
    ) => {
        if (
            value === "DESTINATION" ||
            value === "PACKAGE"
        ) {
            setTargetType(value);
        }
    };

    const validateForm = () => {
        if (targetType === "DESTINATION" && !destinationId) {
            setServerError(
                "Please select a destination."
            );
            return false;
        }

        if (targetType === "PACKAGE" && !packageId) {
            setServerError("Please select a package.");
            return false;
        }

        if (faqs.length === 0) {
            setServerError(
                "Please add at least one FAQ."
            );
            return false;
        }

        for (let index = 0; index < faqs.length; index++) {
            const faq = faqs[index];

            if (!faq.question.trim()) {
                setServerError(
                    `Please enter a question for FAQ ${
                        index + 1
                    }.`
                );
                return false;
            }

            if (faq.question.trim().length < 5) {
                setServerError(
                    `Question ${index + 1} must be at least 5 characters.`
                );
                return false;
            }

            if (faq.question.trim().length > 300) {
                setServerError(
                    `Question ${index + 1} must not exceed 300 characters.`
                );
                return false;
            }

            if (!faq.answer.trim()) {
                setServerError(
                    `Please enter an answer for FAQ ${
                        index + 1
                    }.`
                );
                return false;
            }

            if (faq.answer.trim().length < 5) {
                setServerError(
                    `Answer ${index + 1} must be at least 5 characters.`
                );
                return false;
            }

            if (faq.answer.trim().length > 5000) {
                setServerError(
                    `Answer ${index + 1} must not exceed 5000 characters.`
                );
                return false;
            }
        }

        return true;
    };

    const handleSubmit = async () => {
        setSuccess("");
        setServerError("");

        if (!validateForm()) {
            return;
        }

        try {
            setLoading(true);

            const payload = {
                destinationId:
                    targetType === "DESTINATION"
                        ? destinationId || ""
                        : "",

                packageId:
                    targetType === "PACKAGE"
                        ? packageId || ""
                        : "",

                faqs: faqs.map((faq) => ({
                    question: faq.question.trim(),
                    answer: faq.answer.trim(),

                })),
            };

            const response = await fetch(
                "/api/admin/faq",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message ||
                        "Failed to create FAQs"
                );
            }

            setSuccess(
                result.message ||
                    "FAQs created successfully."
            );

            setFaqs([
                {
                    id: crypto.randomUUID(),
                    question: "",
                    answer: "",

                },
            ]);

            reset({
                destinationId: "",
                packageId: "",
                faqs: [],
            });

            setTargetType("DESTINATION");
        } catch (error) {
            console.error(
                "CREATE_FAQS_ERROR:",
                error
            );

            setServerError(
                error instanceof Error
                    ? error.message
                    : "Failed to create FAQs"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full pb-28">
            <div className="mb-6">
                <h1 className="text-2xl font-bold tracking-tight text-[#00383B]">
                    Create FAQs
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                    Add multiple frequently asked
                    questions for a destination or
                    package.
                </p>
            </div>

            <Card className="border-none shadow-sm">
                <CardHeader>
                    <CardTitle className="text-lg text-[#00383B]">
                        FAQ Details
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label>
                                FAQ For
                            </Label>

                            <Select
                                value={targetType}
                                onValueChange={
                                    handleTargetTypeChange
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select target" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="DESTINATION">
                                        Destination
                                    </SelectItem>

                                    <SelectItem value="PACKAGE">
                                        Package
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {targetType ===
                            "DESTINATION" && (
                            <div className="space-y-2">
                                <Label>
                                    Destination
                                </Label>

                                <Select
                                    value={
                                        destinationId ||
                                        ""
                                    }
                                    onValueChange={(
                                        value
                                    ) =>
                                        setValue(
                                            "destinationId",
                                            value ??
                                                "",
                                            {
                                                shouldValidate:
                                                    true,
                                                shouldDirty:
                                                    true,
                                            }
                                        )
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select destination" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {destinations.map(
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

                                {errors.destinationId && (
                                    <p className="text-sm text-red-500">
                                        {
                                            errors
                                                .destinationId
                                                .message
                                        }
                                    </p>
                                )}
                            </div>
                        )}

                        {targetType ===
                            "PACKAGE" && (
                            <div className="space-y-2">
                                <Label>
                                    Package
                                </Label>

                                <Select
                                    value={
                                        packageId ||
                                        ""
                                    }
                                    onValueChange={(
                                        value
                                    ) =>
                                        setValue(
                                            "packageId",
                                            value ??
                                                "",
                                            {
                                                shouldValidate:
                                                    true,
                                                shouldDirty:
                                                    true,
                                            }
                                        )
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select package" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {packages.map(
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
                                        )}
                                    </SelectContent>
                                </Select>

                                {errors.packageId && (
                                    <p className="text-sm text-red-500">
                                        {
                                            errors
                                                .packageId
                                                .message
                                        }
                                    </p>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="border-t pt-6">
                        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 className="text-base font-semibold text-[#00383B]">
                                    Questions &
                                    Answers
                                </h2>

                                <p className="text-sm text-muted-foreground">
                                    Add multiple FAQs
                                    for the selected{" "}
                                    {targetType ===
                                    "DESTINATION"
                                        ? "destination"
                                        : "package"}
                                    .
                                </p>
                            </div>

                            <Button
                                type="button"
                                variant="outline"
                                onClick={addFAQ}
                                disabled={loading}
                            >
                                <Plus className="mr-2 h-4 w-4" />
                                Add FAQ
                            </Button>
                        </div>

                        <div className="space-y-5">
                            {faqs.map(
                                (faq, index) => (
                                    <Card
                                        key={
                                            faq.id
                                        }
                                        className="border"
                                    >
                                        <CardHeader className="pb-4">
                                            <div className="flex items-center justify-between gap-3">
                                                <CardTitle className="text-sm font-semibold text-[#00383B]">
                                                    FAQ{" "}
                                                    {index +
                                                        1}
                                                </CardTitle>

                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-red-500 hover:bg-red-50 hover:text-red-600"
                                                    onClick={() =>
                                                        removeFAQ(
                                                            faq.id
                                                        )
                                                    }
                                                    disabled={
                                                        loading ||
                                                        faqs.length ===
                                                            1
                                                    }
                                                    title="Remove FAQ"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="space-y-5">
                                            <div className="space-y-2">
                                                <Label
                                                    htmlFor={`question-${faq.id}`}
                                                >
                                                    Question
                                                </Label>

                                                <Input
                                                    id={`question-${faq.id}`}
                                                    value={
                                                        faq.question
                                                    }
                                                    onChange={(
                                                        event
                                                    ) =>
                                                        updateFAQ(
                                                            faq.id,
                                                            "question",
                                                            event
                                                                .target
                                                                .value
                                                        )
                                                    }
                                                    placeholder="Enter frequently asked question"
                                                    maxLength={
                                                        300
                                                    }
                                                    disabled={
                                                        loading
                                                    }
                                                />

                                                <div className="flex justify-end">
                                                    <span className="text-xs text-muted-foreground">
                                                        {
                                                            faq
                                                                .question
                                                                .length
                                                        }
                                                        /300
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label
                                                    htmlFor={`answer-${faq.id}`}
                                                >
                                                    Answer
                                                </Label>

                                                <Textarea
                                                    id={`answer-${faq.id}`}
                                                    value={
                                                        faq.answer
                                                    }
                                                    onChange={(
                                                        event
                                                    ) =>
                                                        updateFAQ(
                                                            faq.id,
                                                            "answer",
                                                            event
                                                                .target
                                                                .value
                                                        )
                                                    }
                                                    placeholder="Enter the answer"
                                                    rows={
                                                        5
                                                    }
                                                    maxLength={
                                                        5000
                                                    }
                                                    disabled={
                                                        loading
                                                    }
                                                    className="resize-y"
                                                />

                                                <div className="flex justify-end">
                                                    <span className="text-xs text-muted-foreground">
                                                        {
                                                            faq
                                                                .answer
                                                                .length
                                                        }
                                                        /5000
                                                    </span>
                                                </div>
                                            </div>


                                        </CardContent>
                                    </Card>
                                )
                            )}
                        </div>
                    </div>

                    {serverError && (
                        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                            {serverError}
                        </div>
                    )}

                    {success && (
                        <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                            {success}
                        </div>
                    )}
                </CardContent>
            </Card>

            <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 px-4 py-4 shadow-lg backdrop-blur">
                <div className="mx-auto flex max-w-7xl justify-end">
                    <Button
                        type="button"
                        size="lg"
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full sm:w-auto sm:min-w-[180px]"
                    >
                        {loading && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}

                        {loading
                            ? "Creating FAQs..."
                            : `Create ${faqs.length} FAQ${
                                  faqs.length >
                                  1
                                      ? "s"
                                      : ""
                              }`}
                    </Button>
                </div>
            </div>
        </div>
    );
}