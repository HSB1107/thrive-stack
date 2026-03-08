import FAQSection from "@/components/faq-section";
import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import HowItWorksSection from "@/components/how-it-works-section";
import SeatSection from "@/components/seat-section";
import StatisticsSection from "@/components/statistics-section";
import UsersFeedbackSection from "@/components/users-feedback-section";

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

      <StatisticsSection  />

      <HowItWorksSection />

      <UsersFeedbackSection />

      <FAQSection />

      <SeatSection />
    </div>
  );
}
