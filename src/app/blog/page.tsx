import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";
import blogs from "@/data/blogs.json";
import { formatDate } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Legal Insights & Blog | Adv. Pavan Rathod",
  description: "Read expert legal articles and insights on Family Law, Criminal Law, Civil Law, and Business Law from Advocate Pavan Rathod, Jalna, Maharashtra.",
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
};

const catColors: Record<string, string> = {
  "Family Law": "bg-pink-100 text-pink-700",
  "Civil Law": "bg-blue-100 text-blue-700",
  "Criminal Law": "bg-red-100 text-red-700",
  "Business Law": "bg-green-100 text-green-700",
};

export default function BlogPage() {
  const featured = blogs.find(b => b.featured);
  const rest = blogs.filter(b => !b.featured || b.id !== featured?.id);

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-gray-950">
      <div className="bg-navy py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Legal Knowledge</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Legal Insights & Blog</h1>
          <p className="text-white/70 max-w-2xl mx-auto">Practical legal knowledge written by Adv. Pavan Rathod to help you understand your rights and options.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        {featured && (
          <div className="mb-14">
            <Link href={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-0 bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-gold hover:shadow-xl transition-all">
              <div className="bg-navy h-56 lg:h-auto flex items-center justify-center p-10">
                <div className="text-center">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${catColors[featured.category] || "bg-gray-100"}`}>{featured.category}</span>
                  <p className="text-white/50 text-sm mt-4">Featured Article</p>
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <h2 className="font-display text-2xl font-bold text-navy dark:text-white mb-4 group-hover:text-gold transition-colors leading-snug">{featured.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featured.readTime}</span>
                    <span>{formatDate(featured.date)}</span>
                  </div>
                  <span className="text-gold flex items-center gap-1 text-sm font-medium">Read <ArrowRight className="w-4 h-4" /></span>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map(b => (
            <Link href={`/blog/${b.slug}`} key={b.id}
              className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-navy h-28 flex items-center justify-center">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${catColors[b.category] || "bg-gray-100"}`}>{b.category}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-navy dark:text-white mb-2 line-clamp-2 group-hover:text-gold transition-colors leading-snug">{b.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">{b.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{b.readTime}</span>
                  <span>{formatDate(b.date)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
