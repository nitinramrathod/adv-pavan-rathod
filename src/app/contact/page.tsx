import type { Metadata } from "next";
import { SITE_CONFIG, PAGE_METADATA, PRACTICE_AREAS } from "@/lib/constants";
import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_METADATA.contact.title,
  description: PAGE_METADATA.contact.description,
  keywords: ["contact", "consultation", "free consultation", "legal help", ...SITE_CONFIG.keywords],
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
  openGraph: {
    type: "website",
    title: PAGE_METADATA.contact.title,
    description: PAGE_METADATA.contact.description,
    url: `${SITE_CONFIG.url}/contact`,
    images: [
      {
        url: `${SITE_CONFIG.url}${SITE_CONFIG.ogImageUrl}`,
        width: 1200,
        height: 630,
        alt: PAGE_METADATA.contact.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_METADATA.contact.title,
    description: PAGE_METADATA.contact.description,
    images: [`${SITE_CONFIG.url}${SITE_CONFIG.ogImageUrl}`],
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-gray-950">
      <div className="bg-navy py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Contact Adv. Pavan Rathod</h1>
          <p className="text-white/70 max-w-2xl mx-auto">Free initial consultation. Describe your legal situation and we will respond promptly.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 grid lg:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy dark:text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              <a href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gold transition-colors group">
                <div className="w-10 h-10 bg-navy dark:bg-gold/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <Phone className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                </div>
                <div><div className="text-xs text-gray-400 mb-0.5">Phone</div><div className="font-semibold text-navy dark:text-white text-sm">{SITE_CONFIG.phone}</div></div>
              </a>
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gold transition-colors group">
                <div className="w-10 h-10 bg-navy dark:bg-gold/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <MessageCircle className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                </div>
                <div><div className="text-xs text-gray-400 mb-0.5">WhatsApp</div><div className="font-semibold text-navy dark:text-white text-sm">Chat on WhatsApp</div></div>
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gold transition-colors group">
                <div className="w-10 h-10 bg-navy dark:bg-gold/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <Mail className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                </div>
                <div><div className="text-xs text-gray-400 mb-0.5">Email</div><div className="font-semibold text-navy dark:text-white text-sm">{SITE_CONFIG.email}</div></div>
              </a>
            </div>
          </div>

          <div className="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-gold" />
              <h3 className="font-display font-semibold text-navy dark:text-white">Office Address</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{SITE_CONFIG.address.full}</p>
            <p className="text-gray-500 text-xs mt-2">Primary Court: {SITE_CONFIG.court}</p>
          </div>

          <div className="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-gold" />
              <h3 className="font-display font-semibold text-navy dark:text-white">Office Hours</h3>
            </div>
            <div className="space-y-1.5 text-sm">
              {[["Monday – Friday","10:00 AM – 7:00 PM"],["Saturday","10:00 AM – 5:00 PM"],["Sunday","Closed"]].map(([d,t]) => (
                <div key={d} className="flex justify-between">
                  <span className="text-gray-500">{d}</span>
                  <span className={t === "Closed" ? "text-red-400" : "text-navy dark:text-white font-medium"}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <ContactForm practiceAreas={PRACTICE_AREAS} />
        </div>
      </div>

      {/* Map */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-14">
        <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 h-72">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30031!2d75.88!3d19.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba62c43be4a07%3A0x6c523f9b6d2e6c41!2sAmbad%2C%20Jalna%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" title="Office Location - Adv. Pavan Rathod"
          />
        </div>
      </div>
    </div>
  );
}
