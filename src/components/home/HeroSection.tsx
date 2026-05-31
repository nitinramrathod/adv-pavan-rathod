"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, ChevronDown, Shield, Award, Users } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const stats = [
  { label: "Cases Handled", value: 30, suffix: "+", icon: Shield },
  { label: "Years Experience", value: 5, suffix: "+", icon: Award },
  { label: "States Served", value: 3, suffix: "", icon: Users },
  { label: "Success Rate", value: 95, suffix: "%", icon: Award },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(value / 60);
        const timer = setInterval(() => {
          start += step;
          if (start >= value) { setCount(value); clearInterval(timer); }
          else setCount(start);
        }, 30);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0e2a4a] to-navy" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-3.5 h-3.5 text-gold" />
            <span className="text-gold text-xs font-medium">Trusted Legal Advocate Since 2019</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Your Trusted{" "}
            <span className="text-gold">Legal Advocate</span>{" "}
            in Jalna, Maharashtra
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
            Adv. Pavan Rathod provides dedicated legal representation across Family Law, Criminal Law, Civil Law, Business Law, and Property Disputes — with honesty, expertise, and a client-first approach.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["30+ Cases Won", "3 States Served", "Free Consultation", "Jalna District Court"].map((b) => (
              <span key={b} className="bg-white/10 border border-white/20 text-white/80 text-xs px-3 py-1.5 rounded-full">
                ✓ {b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3.5 rounded-full font-bold text-sm hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg shadow-gold/30">
              Get Free Consultation
            </Link>
            <a href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello%20Advocate%20Pavan%20Rathod%2C%20I%20need%20legal%20assistance.`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-green-500 transition-all hover:scale-105">
              <MessageCircle className="w-4 h-4" />
              WhatsApp Now
            </a>
            <a href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:border-gold hover:text-gold transition-all">
              <Phone className="w-4 h-4" />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>

        {/* Right – Stats Card */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="text-center mb-8">
              <div className="w-28 h-28 bg-gold/10 border-2 border-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10 text-gold" />
                </div>
              </div>
              <h2 className="font-display text-2xl font-bold text-white">Adv. Pavan Rathod</h2>
              <p className="text-gold text-sm mt-1">BA. LL.B. | Enrolled Advocate</p>
              <p className="text-white/60 text-xs mt-1">Jalna District Court, Maharashtra</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">
                  <div className="font-display text-3xl font-bold text-gold">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-white/60 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-center">
              <p className="text-green-400 text-sm font-semibold">🟢 Available for Consultation</p>
              <p className="text-white/50 text-xs mt-0.5">Mon–Sat: 10:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
