"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface PackageProps {
    title: string;
    duration?: string;
    price: string;
    image: string;
    rating?: string;
    tag?: string;
    color?: string;
}

interface DestinationPackage {
    id: string;
    name: string;
    slug: string;
    subtitle?: string;
    originalPrice?: number;
    hasOffer?: boolean;

    offer?: {
        offerPrice?: number;
        originalPrice?: number;
        discount?: number | null;
        saveAmount?: number | null;
        slug: string
    } | null;

    heroImage?: {
        url?: string;
        publicId?: string | null;
    };
}

interface BestPackageByDestinationProps {
    location: string;
    packages: DestinationPackage[];
}

export function Package({
    title,
    duration,
    price,
    image,
    rating,
    tag,
    color,
}: PackageProps) {

     return (
        <Card className="group relative mb-2 w-full gap-0 overflow-hidden rounded-[24px] border-0 bg-white pt-0">
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {tag && (
                    <Badge
                        className="
                            absolute
                            left-4
                            top-4
                            z-10
                            rounded-full
                            px-3
                            py-3
                            text-sm
                            font-medium
                            text-white
                            shadow-sm
                            backdrop-blur-sm
                        "
                        style={{
                            backgroundColor: color,
                        }}
                    >
                        {tag}
                    </Badge>
                )}
            </div>

            <CardHeader className="gap-1 px-5 pt-4">
                <CardTitle className="flex justify-between gap-3 font-heading text-lg font-semibold">
                    <span>{title}</span>

                    {rating && (
                        <div className="flex shrink-0 items-center">
                            <Star className="mr-2 fill-amber-400 text-amber-400" />
                            <span>{rating}</span>
                            /5
                        </div>
                    )}
                </CardTitle>

                {duration && (
                    <CardDescription className="text-base">
                        {duration}
                    </CardDescription>
                )}
            </CardHeader>

            <CardFooter className="flex items-center justify-between gap-4 border-t-0 bg-white px-5 pb-3 pt-0">
                <span className="whitespace-nowrap font-semibold sm:text-base md:text-md">
                    {price}
                </span>

                <Button
                    variant="outline"
                    className="
                        cursor-pointer
                        rounded-full
                        border-primary
                        bg-white
                        px-4
                        py-4
                        text-md
                        text-primary
                        hover:bg-primary
                        hover:text-white
                    "
                >
                    View Details
                </Button>
            </CardFooter>
        </Card>
    );
}

export function BestPackageByDestination({
    location,
    packages,
}: BestPackageByDestinationProps) {
    const colors = [
        "#FF9D00",
        "#1A9C5C",
        "#723FB9",
        "#FF03C0",
    ];

    const router = useRouter();

    if (!packages?.length) {
        return null;
    }

   

    return (
        <section className="flex w-full justify-center">
            <div className="w-[90%]">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="font-heading text-xl font-semibold sm:text-2xl">
                        Best Packages in {location}
                    </h2>
 
                </div>

                <div className="relative">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full gap-0"
                    >
                        <CarouselContent className="-ml-5 gap-0">
                            {packages.map((item, index) => {
                                const image = item.heroImage?.url;

                                if (!image) {
                                    return null;
                                }

                                const packagePrice =
                                    item.hasOffer &&
                                        item.offer?.offerPrice
                                        ? `₹${item.offer.offerPrice.toLocaleString(
                                            "en-IN"
                                        )} / person`
                                        : item.originalPrice
                                            ? `₹${item.originalPrice.toLocaleString(
                                                "en-IN"
                                            )} / person`
                                            : "Price on request";

                                const tag = item.hasOffer
                                    ? "Special Offer"
                                    : index === 0
                                        ? "Best Seller"
                                        : index === 1
                                            ? "Value for Money"
                                            : index === 2
                                                ? "Premium"
                                                : "Popular";

                                return (
                                    <CarouselItem
                                        key={item.id}
                                        className="
                                            pl-5
                                            gap-0
                                            basis-full
                                            sm:basis-1/2
                                            lg:basis-1/3
                                            xl:basis-1/4
                                        "
                                        onClick={() => {
                                            if (item.hasOffer && item.offer) {
                                               
                                                router.push(`/offers/package/${item.offer.slug}`);
                                            } else {
                                                router.push(
                                                    `/package/${location}/${item.slug}`
                                                );
                                            }
                                        }}
                                    >
                                        <Package
                                            title={item.name}
                                            duration={item.subtitle}
                                            price={packagePrice}
                                            image={image}
                                            color={
                                                colors[
                                                index % colors.length
                                                ]
                                            }
                                            tag={tag}
                                        />
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>

                        <CarouselPrevious
                            className="
                                -left-4
                                h-10
                                w-10
                            "
                        />

                        <CarouselNext
                            className="
                                -right-4
                                h-10
                                w-10
                            "
                        />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}