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
interface PackageProps {
    title: string;
    duration: string;
    price: string;
    image: string;
    rating: string;
    tag: string,
     color?: string;
}

const packages: PackageProps[] = [
    {
        title: "Manali Explorer",
        duration: "3 Nights / 4 Days",
        price: "₹8,999 / person",
        image: "/images/manali1.png",
        rating: "4.8",
        tag: "Best Seller"
    },
    {
        title: "Manali Adventure",
        duration: "4 Nights / 5 Days",
        price: "₹11,999 / person",
        image: "/images/manali1.png",
        rating: "4.8",
        tag: "Value for Money"
    },
    {
        title: "Manali Escape",
        duration: "5 Nights / 6 Days",
        price: "₹14,999 / person",
        image: "/images/manali1.png",
        rating: "4.8",
        tag: "Premium"
    },
    {
        title: "Manali Premium",
        duration: "6 Nights / 7 Days",
        price: "₹18,999 / person",
        image: "/images/manali1.png",
        rating: "4.8",
        tag: "Family Pack"
    },
];

export function Package({
    title,
    duration,
    price,
    image,
    rating,
    tag, 
    color
}: PackageProps) {
    return (
        <Card className="group relative w-full overflow-hidden rounded-[24px] border-0 bg-white pt-0 shadow-[0_4px_18px_rgba(0,0,0,0.08)]">
          
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <Badge className="absolute left-4 top-4 z-10 rounded-full   px-3 py-3 text-sm font-medium text-white 
                shadow-sm backdrop-blur-sm" style={{ backgroundColor: color }}>
                    {tag}
                </Badge>

                <button
                    type="button"
                    aria-label={`Bookmark ${title}`}
                    className="absolute right-4 top-4 z-10      transition-all hover:scale-105 "
                >
                    <Bookmark
                        size={30}
                        strokeWidth={1.8}
                        className="text-white hover:fill-primary hover:text-primary cursor-pointer"
                    />
                </button>
            </div>

            {/* Content */}
            <CardHeader className="gap-1 px-5 pt-0 ">
                <CardTitle className="flex  justify-between font-heading text-xl  font-semibold">
                    {title}
                    <div className="flex  ">
                        <Star className="text-amber-400 mr-2 fill-amber-400" /> <span>{rating}</span>/5
                    </div>
                </CardTitle>

                <CardDescription className="text-lg">
                    {duration}
                </CardDescription>
            </CardHeader>

            {/* Footer */}
            <CardFooter className="flex items-center justify-between gap-4 bg-white border-t-0 px-5 pb-3 pt-2">
                <span className="whitespace-nowrap md:text-xl font-semibold   sm:text-base">
                    {price}
                </span>

                <Button className="rounded-full px-5 text-lg py-5 text-primary bg-white border-primary">
                    View Details
                </Button>
            </CardFooter>
        </Card>
    );
}

export function BestPackageByDestination() {
    const colors=[
         "#FF9D00" ,"#1A9C5C" ,"#723FB9","#FF03C0"
    ]
    return (
        <section className="flex w-screen justify-center">
            <div className="w-[94%]">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="font-heading text-xl font-semibold sm:text-2xl">
                        Best Packages
                    </h2>

                    <Button variant="ghost" className="text-primary">
                        View all
                    </Button>
                </div>

                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {packages.map((item, index) => (
                        <Package
                            key={`${item.title}-${index}`}
                            title={item.title}
                            duration={item.duration}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                            tag={item.tag}
                            color={colors[index]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}