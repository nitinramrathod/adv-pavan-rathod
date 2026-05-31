import Link from "next/link";
import { Phone, Mail, MapPin, Scale, MessageCircle } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, PRACTICE_AREAS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <Scale className="w-5 h-5 text-navy" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">Adv. Pavan Rathod</div>
                <div className="text-gold text-xs">BA. LL.B.</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Trusted legal counsel in Jalna, Maharashtra. Serving clients across Maharashtra, Madhya Pradesh, and Uttar Pradesh with honesty and dedication.
            </p>
            <div className="flex gap-3">
              <a href={SITE_CONFIG.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.socialLinks.phone}
                className="w-9 h-9 bg-gold/20 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors" aria-label="Phone">
                <Phone className="w-4 h-4 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-display font-semibold text-gold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              {PRACTICE_AREAS.map((area) => (
                <li key={area}>
                  <span className="text-white/60 text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-gold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="flex items-start gap-3 text-white/60 hover:text-gold transition-colors group">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm">{SITE_CONFIG.phone}</span>
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-start gap-3 text-white/60 hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm">{SITE_CONFIG.email}</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm">{SITE_CONFIG.address.full}</span>
              </div>
            </div>
            <div className="mt-6 p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-gold font-semibold mb-1">Office Hours</p>
              <p className="text-xs text-white/60">Mon – Sat: 10:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-navy/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white/40 text-xs text-center">
            &copy; {new Date().getFullYear()} Adv. Pavan Rathod. All rights reserved. | {SITE_CONFIG.court}
          </p>
          <div className="flex gap-4 text-xs text-white/40">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-gold transition-colors">Terms</Link>
            <Link href="/legal-disclaimer" className="hover:text-gold transition-colors">Disclaimer</Link>
            <Link href="/cookie-policy" className="hover:text-gold transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
