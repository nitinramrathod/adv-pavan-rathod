import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import HeroSection from "@/components/home/HeroSection";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import PracticeAreas from "@/components/home/PracticeAreas";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedCases from "@/components/home/FeaturedCases";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import MapSection from "@/components/home/MapSection";
import BlogPreview from "@/components/home/BlogPreview";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.fullName} | Family, Civil, Criminal & Business Lawyer in Jalna Maharashtra`,
  description: SITE_CONFIG.description,
  alternates: { canonical: SITE_CONFIG.url },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSnapshot />
      <PracticeAreas />
      <WhyChooseUs />
      <FeaturedCases />
      <TestimonialsSection />
      <BlogPreview />
      <FAQSection />
      <MapSection />
      <CTASection />
    </>
  );
}
