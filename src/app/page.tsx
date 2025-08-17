"use client";

import {
  HeroSection,
  FeaturesSection,
  ChildCenteredSection,
  HowItWorksSection,
  TestimonialsSection,
  PricingSection,
  CTASection,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <ChildCenteredSection />
      <HowItWorksSection />
      <TestimonialsSection />

      <PricingSection />

      <CTASection />
    </div>
  );
}
