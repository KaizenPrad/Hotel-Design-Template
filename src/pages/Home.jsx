import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import RoomsPreview from "@/components/home/RoomsPreview";
import SignatureFeature from "@/components/home/SignatureFeature";
import WorldCards from "@/components/home/WorldCards";
import Services from "@/components/home/Services";
import DiningFeature from "@/components/home/DiningFeature";
import SpaFeature from "@/components/home/SpaFeature";
import ExperiencesPreview from "@/components/home/ExperiencesPreview";
import Testimonials from "@/components/home/Testimonials";
import LocationSection from "@/components/home/LocationSection";
import Newsletter from "@/components/common/Newsletter";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Home() {
  usePageMeta(
    "Luxe Haven Hotel | Luxury Hotel in New York",
    "Experience timeless elegance, exceptional hospitality and unforgettable stays at Luxe Haven Hotel — a boutique luxury hotel on East 50th Street, New York City.",
  );

  return (
    <>
      <Hero />
      <Intro />
      <RoomsPreview />
      <SignatureFeature />
      <WorldCards />
      <Services />
      <DiningFeature />
      <SpaFeature />
      <ExperiencesPreview />
      <Testimonials />
      <LocationSection />
      <Newsletter />
    </>
  );
}
