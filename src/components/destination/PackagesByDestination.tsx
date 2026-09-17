"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

 

 interface Attraction {
    name: string;
    stat: string;
    image: string;
  }
  
  interface PackagesByDestinationProps {
    destination: string;
    attractions: Attraction[];
  }
  
  export default function PackagesByDestination({
    destination,
    attractions,
  }: PackagesByDestinationProps) {
        return (
        <section className="flex w-full flex-col items-center gap-8  ">
            <div className="flex w-[90%] flex-col gap-2">
                 <h2 className="font-heading text-3xl font-semibold tracking-tight">Top Attractions in {destination}</h2>
            </div>

             <div className="relative w-[90%]">
                <Carousel opts={{ align: "start", loop: false }} className="w-full">
                    <div className="overflow-hidden rounded-[24px]">
                        <CarouselContent className="-ml-4">
                            {attractions.map((attraction, index) => (
                                <CarouselItem key={index} className="basis-auto pl-4">
                                    <div className="group relative h-46.75 w-57 overflow-hidden rounded-[24px]">
                                        <Image src={attraction.image} alt={attraction.name} fill sizes="228px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                            <p className=" text-2xl font-bold  leading-6">{attraction.name}</p>
                                            <p className="text-md font-light ">{attraction.stat}</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </div>

                    <CarouselPrevious className="z-50 -left-5 h-10 w-10 border bg-background/95 shadow-md" />
                    <CarouselNext className="z-50 -right-5 h-10 w-10 border bg-background/95 shadow-md" />
                </Carousel>
            </div>
        </section>
    )
}