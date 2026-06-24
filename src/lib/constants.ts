export const SITE_CONFIG = {
  name: "Adv. Pavan Rathod",
  fullName: "Advocate Pavan Rathod, BA. LL.B.",
  tagline: "Trusted Legal Counsel in Jalna & Maharashtra",
  description: "Advocate Pavan Rathod is a trusted lawyer in Jalna, Maharashtra offering Family Law, Civil Law, Criminal Law, Business Law and legal consultation services. Successfully handled 30+ cases across Maharashtra, Madhya Pradesh and Uttar Pradesh.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://advpavanrathod.in",
  phone: "+91 98238 85688",
  phoneRaw: "+919823885688",
  whatsapp: "919823885688",
  email: "adv.pavanrathod@gmail.com",
  address: {
    street: "Shop No. 3",
    area: "Ambad",
    city: "Jalna",
    state: "Maharashtra",
    country: "India",
    pincode: "431214",
    full: "Shop No. 3, Ambad, Jalna, Maharashtra 431214, India",
  },
  court: "Jalna District Court",
  experience: "30+",
  states: ["Maharashtra", "Madhya Pradesh", "Uttar Pradesh"],
  socialLinks: {
    whatsapp: "https://wa.me/919823885688",
    phone: "tel:+919823885688",
    email: "mailto:adv.pavanrathod@gmail.com",
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.8!2d75.7849!3d19.8459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUwJzQ1LjMiTiA3NcKwNDcnMDUuNiJF!5e0!3m2!1sen!2sin!4v1234567890",
  // OG Image URL
  ogImageUrl: "/images/og-image.png",
  // Advocate Profile Image
  profileImageUrl: "/images/adv-pavan-rathod-5.jpeg",
  // Comprehensive keywords by category
  keywords: [
    // General keywords
    "advocate in jalna",
    "lawyer in jalna",
    "legal consultant jalna",
    "advocate pavan rathod",
    "best advocate in jalna",
    // Family Law keywords
    "family lawyer jalna",
    "divorce lawyer jalna",
    "matrimonial law jalna",
    "family dispute resolution",
    "marriage counseling lawyer",
    // Criminal Law keywords
    "criminal lawyer jalna",
    "criminal advocate jalna",
    "bail lawyer jalna",
    "criminal defense attorney",
    "criminal court representation",
    // Civil Law keywords
    "civil lawyer jalna",
    "civil litigation attorney",
    "contract lawyer",
    "property dispute lawyer",
    "civil rights attorney",
    // Business Law keywords
    "business lawyer jalna",
    "business law attorney",
    "corporate legal services",
    "contract drafting",
    "business registration lawyer",
    // Property Law keywords
    "property lawyer jalna",
    "real estate attorney",
    "property dispute resolution",
    "land registration lawyer",
    "conveyance lawyer",
    // Location-based keywords
    "district court lawyer jalna",
    "lawyer in jalna maharashtra",
    "legal advisor jalna",
    "advocate aurangabad",
    "lawyer madhya pradesh",
    // Service-related keywords
    "free legal consultation",
    "legal advice online",
    "legal documentation services",
    "court representation",
  ],
};

// Page-specific metadata templates
export const PAGE_METADATA = {
  home: {
    title: "Adv. Pavan Rathod | Family, Civil, Criminal & Business Lawyer in Jalna Maharashtra",
    description: "Advocate Pavan Rathod offers expert legal services in Family Law, Civil Law, Criminal Law, and Business Law. Free initial consultation. Trusted by clients across Maharashtra.",
  },
  about: {
    title: "About Adv. Pavan Rathod | Lawyer in Jalna, Maharashtra",
    description: "Learn about Advocate Pavan Rathod, BA. LL.B. — a dedicated legal advocate with 5+ years experience, successfully handling 30+ cases across Maharashtra, Madhya Pradesh, and Uttar Pradesh.",
  },
  blog: {
    title: "Legal Insights & Blog | Adv. Pavan Rathod",
    description: "Read expert legal articles and insights on Family Law, Criminal Law, Civil Law, and Business Law from Advocate Pavan Rathod, Jalna, Maharashtra.",
  },
  cases: {
    title: "Legal Case Studies | Adv. Pavan Rathod - Real Cases, Real Outcomes",
    description: "Explore real case studies and legal outcomes from Advocate Pavan Rathod. See how complex legal matters were successfully resolved across Maharashtra, Madhya Pradesh, and Uttar Pradesh.",
  },
  contact: {
    title: "Contact Adv. Pavan Rathod | Free Legal Consultation - Jalna",
    description: "Contact Advocate Pavan Rathod for a free initial legal consultation. Serving clients in Jalna, Maharashtra and across India. Call, WhatsApp or fill the form.",
  },
  gallery: {
    title: "Gallery | Adv. Pavan Rathod - Office & Events",
    description: "View our office, court appearances, client testimonials, and professional events. Get to know Advocate Pavan Rathod and our commitment to legal excellence.",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/#practice-areas" },
  { label: "Case Studies", href: "/cases" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const PRACTICE_AREAS = [
  "Family Law",
  "Civil Law",
  "Criminal Law",
  "Business Law",
  "Property Disputes",
  "Legal Consultation",
  "Documentation & Agreements",
  "Court Representation",
];

export const STATES = ["Maharashtra", "Madhya Pradesh", "Uttar Pradesh"];
