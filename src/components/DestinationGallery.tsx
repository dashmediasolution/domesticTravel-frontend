 "use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import {
  Captions,
  Counter,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";

import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type GalleryImage = {
    url?: string;
  publicId?: string;
 
};

interface DestinationGalleryProps {
  images?: GalleryImage[];
  destinationName?: string;
}

export default function DestinationGallery({
  images = [],
  destinationName = "Gallery",
}: DestinationGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const gallery = useMemo(() => {
    return images
      .map((image, imageIndex) => {
        const src =  image.url;

        if (!src) return null;

        return {
          src,
          title: destinationName,
          description: destinationName || "",
          alt: destinationName,
          originalIndex: imageIndex,
        };
      })
      .filter(Boolean) as Array<{
      src: string;
      title: string;
      description: string;
      alt: string;
      originalIndex: number;
    }>;
  }, [images, destinationName]);

  if (gallery.length === 0) {
    return null;
  }

  const openGallery = (imageIndex: number) => {
    setIndex(imageIndex);
    setOpen(true);
  };

  return (
    <>
      <div className="grid w-full grid-cols-12 gap-2.5">
        {/* MAIN IMAGE */}
        <button
          type="button"
          onClick={() => openGallery(0)}
          className="group relative col-span-12 h-65 overflow-hidden rounded-[20px] text-left sm:h-75 lg:col-span-7 lg:h-76.25"
        >
          <Image
            src={gallery[0].src}
            alt={gallery[0].alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute bottom-4 left-4 text-white">
            <span className="mb-1 block text-[10px] font-medium uppercase tracking-wider text-white/70">
              Featured
            </span>

            <h3 className="text-lg font-semibold sm:text-xl">
              {gallery[0].title}
            </h3>
          </div>
        </button>

        {/* RIGHT GALLERY */}
        {gallery.length > 1 && (
          <div className="col-span-12 grid grid-cols-2 gap-2.5 lg:col-span-5">
            {/* SECOND IMAGE */}
            <button
              type="button"
              onClick={() => openGallery(1)}
              className="group relative col-span-2 h-37.5 overflow-hidden rounded-[20px] text-left"
            >
              <Image
                src={gallery[1].src}
                alt={gallery[1].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-xs font-medium">
                  {gallery[1].title}
                </p>
              </div>
            </button>

            {/* THIRD + FOURTH */}
            {gallery.slice(2, 4).map((image, index) => {
              const actualIndex = index + 2;

              return (
                <button
                  key={`${image.src}-${actualIndex}`}
                  type="button"
                  onClick={() => openGallery(actualIndex)}
                  className="group relative h-36.25 overflow-hidden rounded-[20px] text-left"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 12vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-xs font-medium">
                      {image.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* BOTTOM GALLERY */}
        {gallery.length > 4 && (
          <div className="col-span-12 grid grid-cols-3 gap-2.5">
            {gallery.slice(4, 7).map((image, index) => {
              const actualIndex = index + 4;
              const isWide = index % 2 === 1;

              return (
                <button
                  key={`${image.src}-${actualIndex}`}
                  type="button"
                  onClick={() => openGallery(actualIndex)}
                  className={`
                    group
                    relative
                    h-27.5
                    overflow-hidden
                    rounded-[18px]
                    text-left
                    sm:h-32.5
                    ${isWide ? "col-span-2" : "col-span-1"}
                  `}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      isWide
                        ? "(max-width: 640px) 66vw, 40vw"
                        : "(max-width: 640px) 33vw, 20vw"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/30" />

                  {image.title && (
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-xs font-medium">
                        {image.title}
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={gallery.map((image) => ({
          src: image.src,
          title: image.title,
          description: image.description,
        }))}
        plugins={[
          Captions,
          Counter,
          Fullscreen,
          Thumbnails,
          Zoom,
        ]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "center",
        }}
        thumbnails={{
          position: "bottom",
          width: 100,
          height: 70,
          border: 1,
          borderRadius: 8,
          padding: 2,
          gap: 8,
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
        animation={{
          fade: 300,
          swipe: 300,
        }}
        carousel={{
          finite: false,
        }}
        render={{
          buttonPrev: gallery.length > 1 ? undefined : () => null,
          buttonNext: gallery.length > 1 ? undefined : () => null,
        }}
      />
    </>
  );
}
 