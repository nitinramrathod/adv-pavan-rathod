import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function MapSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Location</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy dark:text-white mt-2 mb-4">Visit Our Office</h2>
          <p className="text-gray-600 dark:text-gray-400">Conveniently located in Ambad, Jalna, Maharashtra</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-80 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30031.12345!2d75.88!3d19.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba62c43be4a07%3A0x6c523f9b6d2e6c41!2sAmbad%2C%20Jalna%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" height="100%" style={{ border: 0, minHeight: "320px" }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Office Location - Adv. Pavan Rathod, Ambad, Jalna"
            />
          </div>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-navy dark:text-white mb-1">Office Address</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{SITE_CONFIG.address.full}</p>
                </div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1 pl-13">
                <p>Primary Court: {SITE_CONFIG.court}</p>
                <p>Mon–Sat: 10:00 AM – 7:00 PM</p>
              </div>
            </div>

            <div className="space-y-3">
              <a href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="flex items-center gap-3 bg-navy text-white rounded-xl p-4 hover:bg-navy/90 transition-colors">
                <Phone className="w-5 h-5 text-gold" />
                <div>
                  <div className="text-xs text-white/60">Call Us</div>
                  <div className="font-semibold text-sm">{SITE_CONFIG.phone}</div>
                </div>
              </a>
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-600 text-white rounded-xl p-4 hover:bg-green-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <div>
                  <div className="text-xs text-white/70">WhatsApp</div>
                  <div className="font-semibold text-sm">Send Message</div>
                </div>
              </a>
              <a href={`https://www.google.com/maps/dir/?api=1&destination=Ambad+Jalna+Maharashtra`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-blue-600 text-white rounded-xl p-4 hover:bg-blue-500 transition-colors">
                <Navigation className="w-5 h-5" />
                <div>
                  <div className="text-xs text-white/70">Directions</div>
                  <div className="font-semibold text-sm">Get Directions</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
