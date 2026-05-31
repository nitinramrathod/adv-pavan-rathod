import { Shield, Clock, Users, Star, Phone, FileText } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Honest & Transparent", desc: "We believe in complete transparency about your case — its strengths, challenges, and realistic outcomes." },
  { icon: Clock, title: "Timely Action", desc: "Swift legal action at critical moments can determine outcomes. We move fast when it matters." },
  { icon: Users, title: "Client-First Approach", desc: "Every client receives personal attention. You are not just a case number — your situation is unique." },
  { icon: Star, title: "Proven Track Record", desc: "30+ successfully handled cases across family, criminal, civil, business, and property law." },
  { icon: Phone, title: "Always Accessible", desc: "Accessible communication throughout your case. We answer calls and keep clients informed." },
  { icon: FileText, title: "Thorough Preparation", desc: "Meticulous document preparation and evidence gathering form the foundation of every case." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy dark:text-white mt-2 mb-4">
            What Sets Adv. Pavan Rathod Apart
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Legal representation that goes beyond courtrooms — a genuine partnership in your pursuit of justice.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-gold hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-navy dark:bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                <r.icon className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-navy dark:text-white mb-2">{r.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
