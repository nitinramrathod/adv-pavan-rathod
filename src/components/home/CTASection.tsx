import Link from "next/link";
import { Phone, MessageCircle, PhoneCall } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0e2a4a] to-navy" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
          <span className="text-gold text-xs font-medium">Free Initial Consultation</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
          Need Legal Help?<br />
          <span className="text-gold">Let's Talk Today.</span>
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
          Don't navigate legal challenges alone. Contact Adv. Pavan Rathod for an honest assessment of your situation and the best path forward.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg shadow-gold/30">
            Get Free Consultation
          </Link>
          <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-500 transition-all">
            <MessageCircle className="w-5 h-5" />
            WhatsApp Now
          </a>
          <a href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:border-gold hover:text-gold transition-all">
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
        <p className="text-white/40 text-sm mt-8">Office Hours: Mon–Sat 10:00 AM – 7:00 PM | {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}</p>
      </div>
    </section>
  );
}
