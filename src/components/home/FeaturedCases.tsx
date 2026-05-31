import Link from "next/link";
import { ArrowRight, MapPin, Calendar, CheckCircle } from "lucide-react";
import cases from "@/data/cases.json";

const featured = cases.filter(c => c.featured).slice(0, 3);

const categoryColors: Record<string, string> = {
  "Family Law": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
  "Property Disputes": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  "Criminal Law": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  "Business Law": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Civil Law": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

export default function FeaturedCases() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Case Results</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy dark:text-white mt-2">Featured Case Studies</h2>
          </div>
          <Link href="/cases" className="flex items-center gap-2 text-gold hover:gap-3 transition-all font-medium text-sm">
            View All Cases <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((c) => (
            <Link href={`/cases/${c.slug}`} key={c.id}
              className="group bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:border-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[c.category] || "bg-gray-100 text-gray-600"}`}>
                  {c.category}
                </span>
                <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-xs font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {c.outcome}
                </div>
              </div>
              <h3 className="font-display font-semibold text-navy dark:text-white mb-3 leading-snug group-hover:text-gold transition-colors line-clamp-2">
                {c.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{c.summary}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 pt-4 border-t border-gray-100 dark:border-gray-800">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{c.state}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{c.year}</span>
                <span>{c.duration}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
