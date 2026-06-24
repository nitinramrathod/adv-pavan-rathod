import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Award, MapPin, Scale, Phone, MessageCircle, BookOpen, Target, Heart } from "lucide-react";
import { SITE_CONFIG, PAGE_METADATA } from "@/lib/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: PAGE_METADATA.about.title,
  description: PAGE_METADATA.about.description,
  keywords: ["about advocate", "lawyer profile", "legal experience", ...SITE_CONFIG.keywords],
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
  openGraph: {
    type: "profile",
    title: PAGE_METADATA.about.title,
    description: PAGE_METADATA.about.description,
    url: `${SITE_CONFIG.url}/about`,
    images: [
      {
        url: `${SITE_CONFIG.url}${SITE_CONFIG.profileImageUrl}`,
        width: 600,
        height: 600,
        alt: SITE_CONFIG.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_METADATA.about.title,
    description: PAGE_METADATA.about.description,
    images: [`${SITE_CONFIG.url}${SITE_CONFIG.profileImageUrl}`],
  },
};

const timeline = [
  { year: "2015–2019", title: "Law Education", desc: "Completed BA. LL.B. from a recognized law university, building a strong foundation in legal principles, criminal procedure, civil law, and constitutional law." },
  { year: "2019", title: "Enrolled as Advocate", desc: "Enrolled as an Advocate with the Bar Council of Maharashtra & Goa. Began practising at the Jalna District Court under experienced senior advocates." },
  { year: "2020–2021", title: "Early Practice", desc: "Handled family court matters, bail applications, and civil documentation cases. Developed deep expertise in local court procedures and revenue law." },
  { year: "2022", title: "Growing Reputation", desc: "Successfully handled landmark property dispute cases and complex family law matters. Expanded to serve clients from Aurangabad, Pune, and Nashik." },
  { year: "2023–Present", title: "Regional Advocate", desc: "Handling cases across Maharashtra, Madhya Pradesh, and Uttar Pradesh. Established as a trusted advocate for complex multi-state legal matters." },
];

const values = [
  { icon: Heart, title: "Client Compassion", desc: "We understand that legal disputes are deeply personal and stressful. Our approach centres on genuine empathy and client wellbeing." },
  { icon: CheckCircle, title: "Honesty First", desc: "We provide honest assessments of cases — including challenges — so clients can make informed decisions." },
  { icon: Scale, title: "Justice-Driven", desc: "Our practice is motivated by a genuine belief in justice, not just legal wins. We take on cases where we can truly help." },
  { icon: BookOpen, title: "Continuous Learning", desc: "Law is constantly evolving. We stay current with amendments, judgments, and procedural changes to give the best advice." },
  { icon: Target, title: "Strategic Excellence", desc: "Every case receives thorough analysis, strategic planning, and meticulous execution to achieve the best possible outcome." },
  { icon: Award, title: "Professional Integrity", desc: "We maintain the highest professional standards in every interaction — with clients, courts, and opposing parties." },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <Scale className="w-3.5 h-3.5 text-gold" />
              <span className="text-gold text-xs font-medium">About the Advocate</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Adv. Pavan Rathod<br /><span className="text-gold text-3xl">BA. LL.B.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              A dedicated legal advocate based in Jalna, Maharashtra — committed to delivering honest, expert legal representation with genuine care for every client's outcome.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Jalna District Court", "5+ Years Experience", "30+ Cases Handled", "3 States Served"].map(b => (
                <span key={b} className="bg-white/10 border border-white/20 text-white/80 text-xs px-3 py-1.5 rounded-full">✓ {b}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded-full font-bold text-sm hover:bg-yellow-400 transition-all">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-green-500 transition-all">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="text-center mb-8">
              <div className="w-44 h-32 bg-gold/10 border-2 border-gold/30 rounded-md flex items-center justify-center mx-auto mb-4">
                {/* <Scale className="w-14 h-14 text-gold" /> */}
                <Image width={80} height={80} 
                  src="/images/adv-pavan-rathod-jalna-11.png"
                    alt="Adv. Pavan Rathod" 
                    className="w-full h-full object-cover rounded-md" 
                    />
              </div>
              <h2 className="font-display text-2xl font-bold text-white">Adv. Pavan Rathod</h2>
              <p className="text-gold text-sm mt-1">BA. LL.B. | Enrolled Advocate</p>
              <p className="text-white/50 text-xs mt-1">Bar Council of Maharashtra & Goa</p>
            </div>
            <div className="space-y-3 text-sm">
              {[
                ["Education", "BA. LL.B."],
                ["Primary Court", "Jalna District Court"],
                ["Office", "Ambad, Jalna, Maharashtra"],
                ["Phone", SITE_CONFIG.phone],
                ["Email", SITE_CONFIG.email],
                ["Languages", "Marathi, Hindi, English"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/50">{k}</span>
                  <span className="text-white font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy dark:text-white mb-8">Biography</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-5 leading-relaxed">
            <p>Advocate Pavan Rathod is a practising advocate at the Jalna District Court, Maharashtra. After completing his BA. LL.B. from a recognized law university, he enrolled with the Bar Council of Maharashtra & Goa and began his legal career with a commitment to justice and client welfare.</p>
            <p>Based in Ambad, Jalna, Adv. Pavan Rathod has built a practice grounded in honesty, preparation, and genuine dedication to client outcomes. His areas of practice include Family Law, Criminal Law, Civil Law, Business Law, and Property Disputes — covering a comprehensive range of legal needs for individuals, families, and small businesses in Jalna and the surrounding region.</p>
            <p>Over the course of his practice, he has successfully handled 30+ cases, serving clients not only across Maharashtra but also from Madhya Pradesh and Uttar Pradesh. This cross-state reach reflects both his reputation and his willingness to go beyond geographic convenience to serve those who need quality legal representation.</p>
            <p>What distinguishes Adv. Pavan Rathod is his approach: transparent communication, realistic case assessments, meticulous documentation, and strategic advocacy tailored to each client's unique circumstances. He believes that a lawyer's role extends beyond the courtroom — it includes being a trusted advisor, a steady presence during difficult times, and a genuine advocate for justice.</p>
            <p>He is particularly known for his work in family court matters, where sensitivity and legal acumen must work in tandem. His criminal law practice — particularly bail applications and FIR quashing — has provided relief to numerous clients facing unjust circumstances. His property dispute expertise has helped families recover ancestral land and resolve complex title issues.</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Journey</span>
            <h2 className="font-display text-3xl font-bold text-navy dark:text-white mt-2">Professional Timeline</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold/20" />
            {timeline.map((t, i) => (
              <div key={i} className={`relative flex gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-14 md:pl-0`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
                    <div className="text-gold font-bold text-sm mb-1">{t.year}</div>
                    <h3 className="font-display font-semibold text-navy dark:text-white mb-2">{t.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
                <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-7 h-7 bg-gold rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                  <div className="w-2 h-2 bg-navy rounded-full" />
                </div>
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Core Values</span>
            <h2 className="font-display text-3xl font-bold text-navy dark:text-white mt-2">What Guides Our Practice</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <div className="w-12 h-12 bg-navy dark:bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display font-semibold text-navy dark:text-white mb-2">{v.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-navy text-center">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Discuss Your Legal Matter?</h2>
        <p className="text-white/70 mb-8">Get a free initial consultation and honest advice about your legal options.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all">
          Contact Adv. Pavan Rathod
        </Link>
      </section>
    </div>
  );
}
