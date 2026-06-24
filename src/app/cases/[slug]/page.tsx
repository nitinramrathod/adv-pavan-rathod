import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Clock, CheckCircle, Quote } from "lucide-react";
import cases from "@/data/cases.json";
import { SITE_CONFIG } from "@/lib/constants";
import { createCasesBreadcrumbs } from "@/lib/breadcrumbs";

export async function generateStaticParams() {
  return cases.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find(c => c.slug === slug);
  if (!c) return {};

  const breadcrumbs = createCasesBreadcrumbs(SITE_CONFIG.url, c.title);

  return {
    title: `${c.title} | Case Study - Adv. Pavan Rathod`,
    description: c.summary,
    keywords: [c.category, c.state, "case study", "legal case", ...SITE_CONFIG.keywords],
    alternates: { canonical: `${SITE_CONFIG.url}/cases/${c.slug}` },
    openGraph: {
      type: "website",
      title: c.title,
      description: c.summary,
      url: `${SITE_CONFIG.url}/cases/${c.slug}`,
      images: [
        {
          url: `${SITE_CONFIG.url}${SITE_CONFIG.ogImageUrl}`,
          width: 1200,
          height: 630,
          alt: c.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.summary,
      images: [`${SITE_CONFIG.url}${SITE_CONFIG.ogImageUrl}`],
    },
  };
}

const catColors: Record<string, string> = {
  "Family Law": "bg-pink-100 text-pink-700",
  "Property Disputes": "bg-orange-100 text-orange-700",
  "Criminal Law": "bg-red-100 text-red-700",
  "Business Law": "bg-green-100 text-green-700",
  "Civil Law": "bg-blue-100 text-blue-700",
};

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = cases.find(c => c.slug === slug);
  if (!c) notFound();

  const related = cases.filter(r => r.category === c.category && r.slug !== c.slug).slice(0, 3);

  const sections = [
    { title: "Client Challenge", content: c.clientChallenge },
    { title: "Legal Strategy", content: c.legalStrategy },
    { title: "Investigation & Evidence", content: c.investigation },
    { title: "Documentation", content: c.documentation },
    { title: "Court Proceedings", content: c.proceedings },
    { title: "Resolution", content: c.resolution },
    { title: "Final Outcome", content: c.outcome_detail },
    { title: "Lessons Learned", content: c.lessonsLearned },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="bg-navy py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/cases" className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Cases
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${catColors[c.category] || "bg-gray-100 text-gray-600"}`}>{c.category}</span>
            <span className="flex items-center gap-1 text-green-400 text-xs font-semibold"><CheckCircle className="w-3.5 h-3.5" />{c.outcome}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{c.title}</h1>
          <p className="text-white/70 text-lg mb-6">{c.summary}</p>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{c.state}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{c.year}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{c.duration}</span>
            <span>{c.court}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-14">
        <div className="space-y-8">
          {sections.map(s => (
            <div key={s.title} className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
              <h2 className="font-display text-xl font-semibold text-navy dark:text-white mb-3">{s.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>

        {/* Client Feedback */}
        <div className="mt-10 bg-navy rounded-2xl p-8 relative overflow-hidden">
          <Quote className="w-12 h-12 text-gold/20 absolute top-4 right-4" />
          <h2 className="font-display text-xl font-semibold text-gold mb-4">Client Feedback</h2>
          <p className="text-white/80 text-lg leading-relaxed italic">"{c.clientFeedback}"</p>
          <div className="mt-4 flex gap-1">
            {[...Array(5)].map((_, i) => <span key={i} className="text-gold">★</span>)}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {c.tags.map(t => (
            <span key={t} className="bg-navy/5 dark:bg-white/5 border border-navy/10 dark:border-white/10 text-navy dark:text-white text-xs px-3 py-1.5 rounded-full">
              #{t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gold/10 border border-gold/30 rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-navy dark:text-white mb-2">Facing a Similar Legal Issue?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Contact Adv. Pavan Rathod for an honest assessment of your case.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-navy text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-navy/90 transition-colors">
              Free Consultation
            </Link>
            <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-green-500 transition-colors">
              WhatsApp Now
            </a>
          </div>
        </div>

        {/* Related Cases */}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="font-display text-2xl font-bold text-navy dark:text-white mb-6">Related Cases</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map(r => (
                <Link href={`/cases/${r.slug}`} key={r.id}
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 hover:border-gold transition-colors">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${catColors[r.category] || "bg-gray-100"}`}>{r.category}</span>
                  <h4 className="font-display font-semibold text-navy dark:text-white mt-2 mb-1 text-sm line-clamp-2">{r.title}</h4>
                  <p className="text-gray-500 text-xs line-clamp-2">{r.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
