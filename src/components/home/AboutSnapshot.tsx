import Link from "next/link";
import { CheckCircle, Award, MapPin, Scale } from "lucide-react";

const highlights = [
  "Enrolled Advocate at Jalna District Court",
  "BA. LL.B. – Recognized Law University",
  "30+ cases successfully handled",
  "Clients served across 3 states",
  "Known for honesty & client-first approach",
  "Free initial legal consultation",
];

export default function AboutSnapshot() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <Award className="w-3.5 h-3.5 text-gold" />
            <span className="text-gold text-xs font-medium">About Advocate Pavan Rathod</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6">
            Dedicated Legal Advocacy with Honesty at the Core
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Adv. Pavan Rathod is a trusted legal advocate based in Ambad, Jalna, Maharashtra. With a strong foundation in law and a genuine commitment to client welfare, he has successfully represented clients across family law, criminal defence, civil disputes, business law, and property matters.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Practising at the Jalna District Court, his approach is rooted in thorough preparation, transparent communication, and relentless advocacy — values that have earned him the trust of clients across Maharashtra, Madhya Pradesh, and Uttar Pradesh.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {highlights.map((h) => (
              <div key={h} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{h}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Link href="/about" className="bg-navy dark:bg-gold dark:text-navy text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
              Read Full Bio
            </Link>
            <Link href="/contact" className="border border-navy dark:border-gold text-navy dark:text-gold px-6 py-3 rounded-full font-semibold text-sm hover:bg-navy dark:hover:bg-gold hover:text-white dark:hover:text-navy transition-all">
              Free Consultation
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-display font-semibold text-navy dark:text-white">Court Experience</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {["Jalna District Court (Primary)", "Jalna Sessions Court", "Jalna Family Court", "Jalna Magistrate Courts", "Bombay High Court (Aurangabad Bench)", "Consumer & Labour Tribunals"].map(c => (
                <div key={c} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {c}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-display font-semibold text-navy dark:text-white">States Served</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Maharashtra", "Madhya Pradesh", "Uttar Pradesh"].map(s => (
                <span key={s} className="bg-navy/5 dark:bg-white/5 border border-navy/10 dark:border-white/10 text-navy dark:text-white text-xs px-3 py-1.5 rounded-full font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
