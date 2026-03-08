import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      {/**
       * We are not wrapping the rest of the content inside grid-background!!
       * This is because we want the grid background to be behind the content and not affect the layout of the content. If we wrap the content inside grid-background, it will affect the layout and make it look weird.
       */}
      <HeroSection />

      <FeaturesSection />
    </div>
  );
}
