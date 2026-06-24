import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { createAttorneySchema, createLocalBusinessSchema, createWebsiteSchema } from "@/lib/schema";
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
    images: [
      {
        url: `${SITE_CONFIG.url}${SITE_CONFIG.ogImageUrl}`,
        width: 1200,
        height: 630,
        alt: "Advocate Pavan Rathod - Lawyer in Jalna",
        type: "image/jpeg",
      },
      {
        url: `${SITE_CONFIG.url}/og-image-square.jpg`,
        width: 800,
        height: 800,
        alt: "Advocate Pavan Rathod - Lawyer in Jalna",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@advpavanrathod",
    creator: "@advpavanrathod",
    title: `${SITE_CONFIG.fullName} | Lawyer in Jalna`,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}${SITE_CONFIG.ogImageUrl}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE || "your-google-verification-code",
  },
  category: "Legal Services",
  classification: "Legal Services, Law Practice",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const attorneySchema = createAttorneySchema(
    SITE_CONFIG.name,
    SITE_CONFIG.fullName,
    SITE_CONFIG.description,
    SITE_CONFIG.phoneRaw,
    SITE_CONFIG.email,
    SITE_CONFIG.url,
    `${SITE_CONFIG.url}${SITE_CONFIG.profileImageUrl}`,
    SITE_CONFIG.address,
    { latitude: "19.8459", longitude: "75.7849" },
    { ratingValue: "5.0", reviewCount: "20" }
  );

  const localBusinessSchema = createLocalBusinessSchema(
    "Adv. Pavan Rathod Law Office",
    SITE_CONFIG.description,
    SITE_CONFIG.phoneRaw,
    SITE_CONFIG.email,
    SITE_CONFIG.address,
    SITE_CONFIG.url,
    `${SITE_CONFIG.url}${SITE_CONFIG.profileImageUrl}`,
    { latitude: "19.8459", longitude: "75.7849" }
  );

  const websiteSchema = createWebsiteSchema(
    SITE_CONFIG.name,
    SITE_CONFIG.description,
    SITE_CONFIG.url,
    `${SITE_CONFIG.url}${SITE_CONFIG.ogImageUrl}`
  );

  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      attorneySchema,
      localBusinessSchema,
      websiteSchema,
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_CONFIG.url}/#professional-service`,
        name: "Legal Services",
        description: SITE_CONFIG.description,
        provider: {
          "@type": "Attorney",
          name: SITE_CONFIG.fullName,
          url: SITE_CONFIG.url,
        },
        areaServed: SITE_CONFIG.states.map((state) => ({
          "@type": "Place",
          name: state,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Legal Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Family Law" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Criminal Law" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Civil Law" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Law" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property Disputes Resolution" } },
          ],
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#001a40" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
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
