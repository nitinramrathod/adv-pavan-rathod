import Link from "next/link";
import { Heart, Scale, Shield, Briefcase, Home, MessageSquare, FileText, Gavel } from "lucide-react";
import services from "@/data/services.json";

const iconMap: Record<string, any> = { Heart, Scale, Shield, Briefcase, Home, MessageSquare, FileText, Gavel };

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Legal Expertise</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy dark:text-white mt-2 mb-4">Practice Areas</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive legal services across multiple practice areas, delivered with expertise and genuine dedication to client outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = iconMap[s.icon] || Scale;
            return (
              <Link href={`/contact?service=${s.slug}`} key={s.id}
                className="group bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:border-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: s.color + "15" }}>
                  <Icon className="w-6 h-6" style={{ color: s.color }} />
                </div>
                <h3 className="font-display font-semibold text-navy dark:text-white text-lg mb-2 group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-1">
                  {s.subServices.slice(0, 3).map((sub) => (
                    <li key={sub} className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                      {sub}
                    </li>
                  ))}
                  {s.subServices.length > 3 && (
                    <li className="text-xs text-gold font-medium">+{s.subServices.length - 3} more</li>
                  )}
                </ul>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
