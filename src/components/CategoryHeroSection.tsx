import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideIcon, ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
    
export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface CategoryHeroData {
   tagline: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  stats: StatItem[];
  backgroundImage: string;
  imageAlt?: string;
  className?: string;
}

export interface CategoryHeroSectionProps {
  data?: CategoryHeroData;
}

// Accepts either `data={props}` OR spread props directly `{...props}`
export const CategoryHeroSection: React.FC<
  CategoryHeroSectionProps & Partial<CategoryHeroData>
> = (props) => {
  const config = props.data ? props.data : (props as CategoryHeroData);

  const {
     tagline,
    titleTop,
    titleBottom,
    description,
    stats = [],
    backgroundImage,
    imageAlt = "Hero category cover image",
    className,
  } = config;

  return (
    <section
      className={cn(
        "relative min-h-[550px] md:min-h-[640px] w-full flex flex-col justify-between overflow-hidden bg-slate-900 text-white",
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-10 flex-1 flex flex-col justify-between">
    

        {/* Headings */}
        <div className="max-w-2xl my-auto py-6">
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-amber-300 drop-shadow mb-2 sm:mb-3">
            {tagline}
          </p>

          <h1 className="font-black uppercase tracking-tight leading-[0.95] text-4xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-md">
            <span className="block text-white">{titleTop}</span>
            <span className="block text-white">{titleBottom}</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-100 max-w-lg leading-relaxed drop-shadow font-normal">
            {description}
          </p>
        </div>

        {/* Stats */}
        <div className="pt-6">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2.5 sm:gap-3 bg-white/95 backdrop-blur-md text-slate-900 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-lg border border-white/20 transition-all hover:bg-white hover:scale-105"
                >
                  <div className="flex items-center justify-center p-1.5 rounded-md bg-teal-50 text-teal-600">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-950">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-500 font-medium">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};