 "use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Attraction {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  isPublished?: boolean;
  sortOrder?: number;
}

interface AttractionsByDestinationProps {
  destination: string;
  attractions?: Attraction[];
}

export default function AttractionsByDestination({
  destination,
  attractions = [],
}: AttractionsByDestinationProps) {
  const publishedAttractions = attractions
    .filter((attraction) => attraction.isPublished !== false)
    .sort(
      (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0)
    );

  if (publishedAttractions.length === 0) {
    return null;
  }

  return (
    <section className="flex w-full flex-col items-center gap-8">
      <div className="flex w-[90%] flex-col gap-2">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">
          Top Attractions in {destination}
        </h2>
      </div>

      <div className="relative w-[90%]">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <div className="overflow-hidden rounded-[24px]">
            <CarouselContent className="-ml-4">
              {publishedAttractions.map((attraction) => (
                <CarouselItem
                  key={attraction.id}
                  className="basis-auto pl-4"
                >
                  <div className="group relative h-46.75 w-57 overflow-hidden rounded-[24px]">
                    <Image
                      src={attraction.imageUrl}
                      alt={attraction.name}
                      fill
                      sizes="228px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <p className="text-2xl font-bold leading-6">
                        {attraction.name}
                      </p>

                      {attraction.description && (
                        <p className="mt-2 line-clamp-2 text-sm font-light leading-5 text-white/90">
                          {attraction.description}
                        </p>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>

          {publishedAttractions.length > 1 && (
            <>
              <CarouselPrevious className="z-50 -left-5 h-10 w-10 border bg-background/95 shadow-md" />
              <CarouselNext className="z-50 -right-5 h-10 w-10 border bg-background/95 shadow-md" />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );

}
 