export interface SeoSchema {
  [key: string]: any;
}

export const createPersonSchema = (name: string, email: string, phone: string, imageUrl: string, url: string) => ({
  "@type": "Person",
  name,
  email,
  telephone: phone,
  image: imageUrl,
  url,
});

export const createLocalBusinessSchema = (
  name: string,
  description: string,
  phone: string,
  email: string,
  address: { street: string; city: string; state: string; pincode: string; country: string },
  url: string,
  imageUrl: string,
  coordinates: { latitude: string; longitude: string }
) => ({
  "@type": "LocalBusiness",
  "@id": `${url}/#localbusiness`,
  name,
  description,
  url,
  telephone: phone,
  email,
  image: imageUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: address.street,
    addressLocality: address.city,
    addressRegion: address.state,
    postalCode: address.pincode,
    addressCountry: address.country,
  },
  priceRange: "₹₹",
  geo: {
    "@type": "GeoCoordinates",
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
  },
});

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const createArticleSchema = (
  headline: string,
  description: string,
  image: string | string[],
  datePublished: string,
  dateModified: string,
  author: string,
  publisher: string,
  url: string
) => ({
  "@type": "Article",
  headline,
  description,
  image: Array.isArray(image) ? image : [image],
  datePublished,
  dateModified: dateModified || datePublished,
  author: {
    "@type": "Person",
    name: author,
  },
  publisher: {
    "@type": "Organization",
    name: publisher,
  },
  url,
});

export const createLegalServiceSchema = (
  serviceName: string,
  description: string,
  provider: string,
  providerUrl: string
) => ({
  "@type": "ProfessionalService",
  name: serviceName,
  description,
  areaServed: ["Maharashtra", "Madhya Pradesh", "Uttar Pradesh"],
  provider: {
    "@type": "Attorney",
    name: provider,
    url: providerUrl,
  },
});

export const createFAQSchema = (
  faqs: Array<{
    question: string;
    answer: string;
  }>
) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const createWebsiteSchema = (name: string, description: string, url: string, imageUrl: string) => ({
  "@type": "WebSite",
  name,
  description,
  url,
  image: imageUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${url}?q={search_term_string}`,
    },
    query: "required name=search_term_string",
  },
});

export const createAttorneySchema = (
  name: string,
  fullName: string,
  description: string,
  phone: string,
  email: string,
  url: string,
  imageUrl: string,
  address: { street: string; area: string; city: string; state: string; pincode: string },
  coordinates: { latitude: string; longitude: string },
  rating: { ratingValue: string; reviewCount: string }
) => ({
  "@type": "Attorney",
  "@id": `${url}/#attorney`,
  name: fullName,
  alternateName: name,
  description,
  url,
  telephone: phone,
  email,
  image: imageUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${address.street}, ${address.area}`,
    addressLocality: address.city,
    addressRegion: address.state,
    postalCode: address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  areaServed: ["Maharashtra", "Madhya Pradesh", "Uttar Pradesh"],
  knowsAbout: ["Family Law", "Civil Law", "Criminal Law", "Business Law", "Property Disputes"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: rating.ratingValue,
    reviewCount: rating.reviewCount,
    bestRating: "5",
    worstRating: "1",
  },
});

export const createImageGallerySchema = (
  title: string,
  description: string,
  images: Array<{ url: string; name?: string }>,
  url: string
) => ({
  "@type": "ImageGallery",
  name: title,
  description,
  associatedMedia: images.map((img) => ({
    "@type": "ImageObject",
    url: img.url,
    name: img.name || title,
  })),
  isPartOf: {
    "@type": "WebPage",
    url,
  },
});

export const createServiceSchema = (
  serviceName: string,
  description: string,
  provider: string,
  providerUrl: string,
  areaServed: string[]
) => ({
  "@type": "Service",
  name: serviceName,
  description,
  provider: {
    "@type": "Attorney",
    name: provider,
    url: providerUrl,
  },
  areaServed: areaServed.map((area) => ({
    "@type": "Place",
    name: area,
  })),
});
