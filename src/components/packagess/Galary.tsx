"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryImage {
    src: string;
    alt?: string;
}

interface GalleryProps {
    images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
    const [open, setOpen] = useState(false);

    const desktopImages = images.slice(0, 6);
    const tabletImages = images.slice(0, 4);
    const mobileImages = images.slice(0, 3);

    const slides = images.map((image) => ({
        src: image.src,
        alt: image.alt || "Gallery image",
    }));

    return (
        <>
            <section className="w-[94%]">
                {/* Header */}
                <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-sm font-medium text-foreground sm:text-base">
                        Gallery
                    </h2>

                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => setOpen(true)}
                        className="
                            h-7
                            rounded-full
                            border-primary
                            bg-transparent
                            px-3
                            text-[10px]
                            font-normal
                            text-primary
                            shadow-none
                            transition-colors
                            hover:bg-primary
                            hover:text-white

                            sm:h-8
                            sm:px-3.5
                            sm:text-[11px]

                            md:px-4
                        "
                    >
                        View All Photos
                        <ArrowRight className="ml-1 size-3 sm:size-3.5" />
                    </Button>
                </div>

                {/* Desktop */}
                <div className="hidden gap-2 lg:flex">
                    {desktopImages.map((image, index) => (
                        <GalleryItem
                            key={`${image.src}-${index}`}
                            image={image}
                            onClick={() => setOpen(true)}
                        />
                    ))}
                </div>

                {/* Tablet */}
                <div className="hidden gap-2 sm:flex lg:hidden">
                    {tabletImages.map((image, index) => (
                        <GalleryItem
                            key={`${image.src}-${index}`}
                            image={image}
                            onClick={() => setOpen(true)}
                        />
                    ))}
                </div>

                {/* Mobile */}
                <div className="flex gap-2 sm:hidden">
                    {mobileImages.map((image, index) => (
                        <GalleryItem
                            key={`${image.src}-${index}`}
                            image={image}
                            onClick={() => setOpen(true)}
                        />
                    ))}
                </div>
            </section>

            {/* Full Gallery */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
            />
        </>
    );
}

interface GalleryItemProps {
    image: GalleryImage;
    onClick: () => void;
}

function GalleryItem({ image, onClick }: GalleryItemProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="
                group
                relative
                min-w-0
                flex-1
                aspect-[1.45/1]
                overflow-hidden
                rounded-xl
                outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
                focus-visible:ring-offset-2
            "
        >
            <Image
                src={image.src}
                alt={image.alt || "Gallery image"}
                fill
                sizes="
                    (max-width: 639px) 31vw,
                    (max-width: 1023px) 24vw,
                    16vw
                "
                className="
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-105
                "
            />

            <span
                className="
                    absolute
                    inset-0
                    bg-black/0
                    transition-colors
                    duration-300
                    group-hover:bg-black/10
                "
            />
        </button>
    );
}