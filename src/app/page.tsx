"use client";

import {
  HeroSection,
  AboutSection,
  ServicesSection,
  FeaturesSection,
  ChildCenteredSection,
  HowItWorksSection,
  TrustSafetySection,
  TestimonialsSection,
  MobileAppSection,
  CarerJobsSection,
  PricingSection,
  WhoItsForSection,
  WhyNestloopSection,
  CTASection,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <ChildCenteredSection />
      <HowItWorksSection />
      <TrustSafetySection />
      <TestimonialsSection />
      <MobileAppSection />
      <CarerJobsSection />
      <PricingSection />
      <WhoItsForSection />
      <WhyNestloopSection />
      <CTASection />
    </div>
  );
}
