import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import blogs from "@/data/blogs.json";
import { formatDate } from "@/lib/utils";

export default function BlogPreview() {
  const recent = blogs.filter(b => b.featured).slice(0, 3);
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Legal Insights</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy dark:text-white mt-2">Legal Knowledge Hub</h2>
          </div>
          <Link href="/blog" className="flex items-center gap-2 text-gold hover:gap-3 transition-all font-medium text-sm">
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {recent.map(b => (
            <Link href={`/blog/${b.slug}`} key={b.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-navy h-32 flex items-center justify-center">
                <span className="font-display text-gold text-lg font-semibold text-center px-4">{b.category}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-navy dark:text-white mb-2 line-clamp-2 group-hover:text-gold transition-colors leading-snug">{b.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">{b.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{b.readTime}</span>
                  <span>{formatDate(b.date)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
