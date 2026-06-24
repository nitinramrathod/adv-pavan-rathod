import type { Metadata } from "next";
import { SITE_CONFIG, PAGE_METADATA } from "@/lib/constants";
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
  title: PAGE_METADATA.home.title,
  description: PAGE_METADATA.home.description,
  keywords: SITE_CONFIG.keywords,
  alternates: { canonical: SITE_CONFIG.url },
  openGraph: {
    type: "website",
    title: PAGE_METADATA.home.title,
    description: PAGE_METADATA.home.description,
    url: SITE_CONFIG.url,
    images: [
      {
        url: `${SITE_CONFIG.url}${SITE_CONFIG.ogImageUrl}`,
        width: 1200,
        height: 630,
        alt: PAGE_METADATA.home.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_METADATA.home.title,
    description: PAGE_METADATA.home.description,
    images: [`${SITE_CONFIG.url}${SITE_CONFIG.ogImageUrl}`],
  },
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
