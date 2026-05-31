"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is the first step to getting legal help from Adv. Pavan Rathod?", a: "Contact us via phone, WhatsApp, or the contact form for a free initial consultation. We will assess your situation, explain your legal options, and advise the best course of action without any obligation." },
  { q: "What areas of law does Adv. Pavan Rathod practise?", a: "We handle Family Law (divorce, custody, maintenance, domestic violence), Criminal Law (bail, FIR quashing, defence), Civil Law (property disputes, cheque bounce, succession), Business Law (partnership disputes, contracts, labour matters), and Property Disputes." },
  { q: "Does Adv. Pavan Rathod handle cases outside Jalna?", a: "Yes. While our primary court is the Jalna District Court, we have served clients across Maharashtra, Madhya Pradesh, and Uttar Pradesh. We also handle matters at the Bombay High Court (Aurangabad Bench)." },
  { q: "How long does a typical legal case take?", a: "Case duration varies significantly by type. Simple matters like succession certificates or name changes can be resolved in 2–4 months. Contested civil or criminal cases may take 6–18 months. We provide honest timelines specific to your case." },
  { q: "What are your consultation fees?", a: "We offer a free initial consultation to understand your situation. Fees for legal representation depend on the nature, complexity, and duration of the case. We discuss fees transparently before engagement." },
  { q: "Can I contact you on WhatsApp?", a: "Yes. You can reach Adv. Pavan Rathod directly on WhatsApp at +91 98238 85688 for quick queries and appointment scheduling. For urgent matters, a direct call is recommended." },
  { q: "What should I bring for my first consultation?", a: "Bring all documents related to your matter — notices, contracts, court orders, property papers, correspondence, FIR copies, or other relevant records. The more documentation you bring, the better we can assess your situation." },
  { q: "Do you handle family law matters sensitively?", a: "Absolutely. Family disputes are deeply personal. We approach divorce, custody, and domestic violence matters with complete confidentiality, empathy, and a genuine focus on protecting your interests and wellbeing." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy dark:text-white mt-2 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="font-semibold text-navy dark:text-white text-sm pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gold shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 pt-3 bg-white dark:bg-gray-950">
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
