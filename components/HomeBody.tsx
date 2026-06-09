"use client";

import { TemplateNavbar } from "@/components/TemplateNavbar";
import { Footer } from "@/components/Footer";
import {
  HeroSection,
  LogoMarqueeSection,
  AboutSection,
  ServicesSection,
  WorkSection,
  TeamSection,
  TestimonialsSection,
  PricingSection,
  FAQSection,
  AwardsSection,
  CTASection,
} from "@/components/home";

// Temporarily hides the team profiles section on the home page. The section is
// intentionally kept — flip this to `true` to bring the team profiles back.
const SHOW_TEAM = false;

export function HomeBody() {
  return (
    <div className="main">
      <div className="gradient-background" />
      <TemplateNavbar />
      <HeroSection />
      <LogoMarqueeSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      {SHOW_TEAM && <TeamSection />}
      <TestimonialsSection />
      {/*<PricingSection />*/}
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
