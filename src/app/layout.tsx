import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import CallbackModal from "@/components/forms/CallbackModal";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.fullName} | Family, Civil, Criminal & Business Lawyer in Jalna Maharashtra`,
    template: `%s | Adv. Pavan Rathod - Lawyer in Jalna`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.fullName }],
  creator: SITE_CONFIG.fullName,
  publisher: SITE_CONFIG.fullName,
  formatDetection: { telephone: true, email: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: `Adv. Pavan Rathod - Lawyer in Jalna`,
    title: `${SITE_CONFIG.fullName} | Trusted Lawyer in Jalna, Maharashtra`,
    description: SITE_CONFIG.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Advocate Pavan Rathod - Lawyer in Jalna" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.fullName} | Lawyer in Jalna`,
    description: SITE_CONFIG.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: SITE_CONFIG.url },
  verification: { google: "your-google-verification-code" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Attorney",
        "@id": `${SITE_CONFIG.url}/#attorney`,
        name: SITE_CONFIG.fullName,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        telephone: SITE_CONFIG.phoneRaw,
        email: SITE_CONFIG.email,
        image: `${SITE_CONFIG.url}/images/advocate-pavan-rathod.jpg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.area}`,
          addressLocality: SITE_CONFIG.address.city,
          addressRegion: SITE_CONFIG.address.state,
          postalCode: SITE_CONFIG.address.pincode,
          addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: "19.8459", longitude: "75.7849" },
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "10:00", closes: "19:00" },
        ],
        areaServed: ["Maharashtra", "Madhya Pradesh", "Uttar Pradesh"],
        knowsAbout: ["Family Law", "Civil Law", "Criminal Law", "Business Law", "Property Disputes"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Legal Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Family Law" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Criminal Law" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Civil Law" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Law" } },
          ],
        },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "20", bestRating: "5", worstRating: "1" },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_CONFIG.url}/#localbusiness`,
        name: "Adv. Pavan Rathod Law Office",
        url: SITE_CONFIG.url,
        telephone: SITE_CONFIG.phoneRaw,
        email: SITE_CONFIG.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.area}`,
          addressLocality: SITE_CONFIG.address.city,
          addressRegion: SITE_CONFIG.address.state,
          postalCode: SITE_CONFIG.address.pincode,
          addressCountry: "IN",
        },
        priceRange: "₹₹",
        image: `${SITE_CONFIG.url}/images/advocate-pavan-rathod.jpg`,
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <CallbackModal />
      </body>
    </html>
  );
}
