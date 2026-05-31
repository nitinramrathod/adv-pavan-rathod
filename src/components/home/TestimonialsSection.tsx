"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import testimonials from "@/data/testimonials.json";
import { formatDate } from "@/lib/utils";

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const per = 3;
  const total = Math.ceil(testimonials.length / per);
  const visible = testimonials.slice(idx * per, idx * per + per);

  return (
    <section className="py-20 px-4 md:px-8 bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Client Voices</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2 mb-4">What Clients Say</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Real experiences from real clients across Maharashtra, Madhya Pradesh, and Uttar Pradesh.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {visible.map((t) => (
            <div key={t.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
              <Quote className="w-8 h-8 text-gold/30 absolute top-4 right-4" />
              <div className="flex mb-3">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-4">"{t.review}"</p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white text-sm">{t.name}</div>
                <div className="text-gold text-xs">{t.location} • {t.caseType}</div>
                <div className="text-white/40 text-xs mt-1">{formatDate(t.date)}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <button onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors disabled:opacity-30">
            <ChevronLeft className="w-4 h-4" />
          </button>
          {[...Array(total)].map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === idx ? "bg-gold w-6" : "bg-white/20"}`} />
          ))}
          <button onClick={() => setIdx(Math.min(total - 1, idx + 1))} disabled={idx === total - 1}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors disabled:opacity-30">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
