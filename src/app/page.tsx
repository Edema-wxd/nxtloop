"use client";

import {
  HeroSection,
  AboutSection,
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
      <AboutSection />
      <FeaturesSection />
      <ChildCenteredSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}
