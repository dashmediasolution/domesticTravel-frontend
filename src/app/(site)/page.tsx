
import SearachBar from "@/components/homePage/SerachBar";
import { FeaturedDestination } from "@/components/homePage/FeaturedDestination";
import BrowseByCategory from "@/components/homePage/BrowseByCategory";
import BannerCarousel, { type Banner, } from "@/components/homePage/Carousel";
import WhyTravelWithUs from "@/components/homePage/TravelWithUs";
import UpcomingPackages from "@/components/homePage/UpcomingPackages";
import TravelStories from "@/components/homePage/TravelStories";
import ExploreIndia from "@/components/homePage/ExploreIndia";
import WhyChooseUs from "@/components/homePage/WhyChooseUs";
import BestOffers from "@/components/homePage/BestOffers";
import HeroSection from "@/components/homePage/HeroSection";
import Memories from "@/components/Memories";
import BlogSection from "@/components/BlogSection";
import TravelersReviews from "@/components/Reviews";
import EarlyBirdSale from "@/components/packagess/EarlyBirdSale";
const firstBanner: Banner[] = [
  {
    id: 1,
    image: "/images/banners/banner_1.png",
    title: "Explore Incredible India",
    redirectUrl: "/destinations/india",
  },
  {
    id: 2,
    image: "/images/banners/banner_2.png",
    title: "Discover New Destinations",
    redirectUrl: "/destinations",
  },
  {
    id: 3,
    image: "/images/banners/banner_3.png",
    title: "Your Next Adventure Awaits",
    redirectUrl: "/adventure",
  },
];
const secondBanner: Banner[] = [
  {
    id: 1,
    image: "/images/banners/banner_7.png",
    title: "Explore Incredible India",
    redirectUrl: "/destinations/india",
  },
  {
    id: 2,
    image: "/images/banners/banner_8.png",
    title: "Discover New Destinations",
    redirectUrl: "/destinations",
  },
  {
    id: 3,
    image: "/images/banners/banner_9.png",
    title: "Your Next Adventure Awaits",
    redirectUrl: "/adventure",
  },
];
const thirdBanner: Banner[] = [
  {
    id: 1,
    image: "/images/banners/banner_4.png",
    title: "Explore Incredible India",
    redirectUrl: "/destinations/india",
  },
  {
    id: 2,
    image: "/images/banners/banner_5.png",
    title: "Discover New Destinations",
    redirectUrl: "/destinations",
  },
  {
    id: 3,
    image: "/images/banners/banner_6.png",
    title: "Your Next Adventure Awaits",
    redirectUrl: "/adventure",
  },
];
export default function Home() {
  return (
    <div className="flex gap-5 flex-col justify-center items-center">
      <HeroSection />
      <SearachBar bottomPosition="3.5" />
      <FeaturedDestination />
      <BrowseByCategory />
      <EarlyBirdSale/>
      <BannerCarousel banners={firstBanner} />
      <ExploreIndia />
      <BestOffers />
      <BannerCarousel banners={secondBanner} />
      <WhyTravelWithUs />
      <UpcomingPackages />
      <BannerCarousel banners={thirdBanner} />
      <BlogSection />
      <WhyChooseUs />
      <div className="w-full flex justify-center items-center my-10">
        <div className="w-[95%] flex justify-center items-center">
          <TravelersReviews />
        </div>
      </div>
      <Memories />
    </div>
  );
}


/* 
    Web Dev - MERN 
    Devops
    AI

      
*/