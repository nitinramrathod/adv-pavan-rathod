import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";
import blogs from "@/data/blogs.json";
import { SITE_CONFIG } from "@/lib/constants";
import { createBlogBreadcrumbs } from "@/lib/breadcrumbs";
import { createBreadcrumbSchema } from "@/lib/schema";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return blogs.map(b => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = blogs.find(b => b.slug === slug);
  if (!b) return {};

  const breadcrumbs = createBlogBreadcrumbs(SITE_CONFIG.url, b.title);

  return {
    title: `${b.title} | Adv. Pavan Rathod Blog`,
    description: b.excerpt,
    keywords: [...b.tags, b.category, ...SITE_CONFIG.keywords],
    authors: [{ name: b.author }],
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${b.slug}` },
    openGraph: {
      type: "article",
      title: b.title,
      description: b.excerpt,
      url: `${SITE_CONFIG.url}/blog/${b.slug}`,
      images: [
        {
          url: `${SITE_CONFIG.url}${SITE_CONFIG.ogImageUrl}`,
          width: 1200,
          height: 630,
          alt: b.title,
        },
      ],
      publishedTime: b.date,
      authors: [b.author],
      tags: b.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: b.title,
      description: b.excerpt,
      images: [`${SITE_CONFIG.url}${SITE_CONFIG.ogImageUrl}`],
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = blogs.find(b => b.slug === slug);
  if (!b) notFound();

  const related = blogs.filter(r => r.category === b.category && r.slug !== b.slug).slice(0, 3);

  const breadcrumbs = createBlogBreadcrumbs(SITE_CONFIG.url, b.title);
  const breadcrumbSchema = createBreadcrumbSchema(breadcrumbs);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: b.title,
        description: b.excerpt,
        author: { "@type": "Person", name: b.author },
        datePublished: b.date,
        dateModified: b.date,
        image: {
          "@type": "ImageObject",
          url: `${SITE_CONFIG.url}${SITE_CONFIG.ogImageUrl}`,
          width: 1200,
          height: 630,
        },
        publisher: { "@type": "Organization", name: "Adv. Pavan Rathod", logo: { "@type": "ImageObject", url: `${SITE_CONFIG.url}${SITE_CONFIG.profileImageUrl}` } },
        mainEntityOfPage: `${SITE_CONFIG.url}/blog/${b.slug}`,
      },
      breadcrumbSchema,
    ],
  };

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="bg-navy py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full">{b.category}</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mt-4 mb-4 leading-tight">{b.title}</h1>
          <div className="flex flex-wrap gap-4 text-white/50 text-sm">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{b.author}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{b.readTime}</span>
            <span>{formatDate(b.date)}</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-14">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-semibold mb-6 border-l-4 border-gold pl-5">{b.excerpt}</p>
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>{b.content}</p>
          <p className="mt-6">This is an article written by {b.author} providing general legal information. For advice specific to your situation, contact our office for a free consultation.</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {b.tags.map(t => (
            <span key={t} className="bg-navy/5 dark:bg-white/5 border border-navy/10 dark:border-white/10 text-xs px-3 py-1.5 rounded-full text-navy dark:text-white">#{t}</span>
          ))}
        </div>

        <div className="mt-12 bg-gold/10 border border-gold/30 rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-navy dark:text-white mb-2">Need Legal Advice?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Contact Adv. Pavan Rathod for a free consultation on your legal matter.</p>
          <Link href="/contact" className="bg-navy text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-navy/90 transition-colors">
            Free Consultation
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="font-display text-xl font-bold text-navy dark:text-white mb-6">Related Articles</h3>
            <div className="space-y-4">
              {related.map(r => (
                <Link href={`/blog/${r.slug}`} key={r.id}
                  className="flex gap-4 bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 hover:border-gold transition-colors">
                  <div className="flex-1">
                    <h4 className="font-display font-semibold text-navy dark:text-white text-sm mb-1 hover:text-gold transition-colors">{r.title}</h4>
                    <p className="text-gray-500 text-xs line-clamp-1">{r.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
