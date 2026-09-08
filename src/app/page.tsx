
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
    <div className="flex gap-5 flex-col">
      <HeroSection />
      <SearachBar />
      <FeaturedDestination />
      <BrowseByCategory />
      <BannerCarousel banners={firstBanner} />
      <ExploreIndia />
      <UpcomingPackages />
      <BannerCarousel banners={secondBanner} />
      <WhyTravelWithUs />
      <BestOffers />
      <BannerCarousel banners={thirdBanner} />
      <TravelStories />
      <WhyChooseUs />
    </div>
  );
}
