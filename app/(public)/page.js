import RestaurantFacilities from "@/components/Facilities/RestaurantFacilities";
import Hero from "@/components/hero/Hero";
import MenuHighlights from "@/components/menuHighlights/MenuHighlights";
import OurStory from "@/components/ourStory/OurStory";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <RestaurantFacilities/>
      <MenuHighlights/>
      <Testimonials/>
    </>
  );
}
