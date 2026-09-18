 
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Bookmark, Star } from "lucide-react";
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
    rating: string;
    tag?: string;
    color?: string;
}

interface DestinationPackage {
    id: string;
    name: string;
    imageUrl: string;
    textColor: string;
    startingPrice: string;
    rating: string;
}

interface BestPackageByDestinationProps {
    location: string;
    packages: DestinationPackage[];
}

const toSlug = (value: string) =>
    value.toLowerCase().trim().replace(/\s+/g, "-");

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
        <Card className="group relative w-full overflow-hidden rounded-[24px] border-0 bg-white pt-0  mb-2">
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

                <button
                    type="button"
                    aria-label={`Bookmark ${title}`}
                    className="
                        absolute
                        right-4
                        top-4
                        z-10
                        transition-all
                        hover:scale-105
                    "
                >
                    <Bookmark
                        size={30}
                        strokeWidth={1.8}
                        className="
                            cursor-pointer
                            text-white
                            hover:fill-primary
                            hover:text-primary
                        "
                    />
                </button>
            </div>

            <CardHeader className="gap-1 px-5 pt-0">
                <CardTitle className="flex justify-between font-heading text-lg font-semibold">
                    {title}

                    <div className="flex items-center">
                        <Star className="mr-2 fill-amber-400 text-amber-400" />
                        <span>{rating}</span>
                        /5
                    </div>
                </CardTitle>

                {duration && (
                    <CardDescription className="text-lg">
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
                        rounded-full
                        border-primary
                        bg-white
                        px-4
                        py-4
                        text-md
                        text-primary
                        cursor-pointer
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
    const router = useRouter()

    return (
        <section className="flex w-full justify-center">
            <div className="w-[90%]">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="font-heading text-xl font-semibold sm:text-2xl">
                        Best Packages in {location}
                    </h2>

                    <Button
                        variant="ghost"
                        className="text-primary"
                    >
                        View all
                    </Button>
                </div>

                <div className="relative">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-5">
                            {packages.map((item, index) => (
                                <CarouselItem
                                    key={item.id}
                                    className="
                                        pl-5
                                        basis-full
                                        sm:basis-1/2
                                        lg:basis-1/3
                                        xl:basis-1/4
                                    "
                                    onClick={() => {
                                        router.push(
                                            `/package/${toSlug(location)}/${toSlug(item.name)}`
                                        );
                                    }}
                                >
                                    <Package
                                        title={item.name}
                                        price={`${item.startingPrice} / person`}
                                        image={item.imageUrl}
                                        rating={item.rating}
                                        color={
                                            colors[index % colors.length]
                                        }
                                        tag={
                                            index === 0
                                                ? "Best Seller"
                                                : index === 1
                                                  ? "Value for Money"
                                                  : index === 2
                                                    ? "Premium"
                                                    : "Popular"
                                        }
                                    />
                                </CarouselItem>
                            ))}
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
 
