"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Filter, MapPin, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import cases from "@/data/cases.json";

const categories = ["all", "Family Law", "Criminal Law", "Civil Law", "Business Law", "Property Disputes"];
const states = ["all", "Maharashtra", "Madhya Pradesh", "Uttar Pradesh"];
const years = ["all", "2023", "2022"];

const catColors: Record<string, string> = {
  "Family Law": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
  "Property Disputes": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  "Criminal Law": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  "Business Law": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Civil Law": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

export default function CasesPage() {
  const [cat, setCat] = useState("all");
  const [state, setState] = useState("all");
  const [year, setYear] = useState("all");
  const [q, setQ] = useState("");

  const filtered = cases.filter(c => {
    if (cat !== "all" && c.category !== cat) return false;
    if (state !== "all" && c.state !== state) return false;
    if (year !== "all" && c.year !== parseInt(year)) return false;
    if (q && !c.title.toLowerCase().includes(q.toLowerCase()) && !c.summary.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="bg-navy py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Case Studies</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Legal Case Studies</h1>
          <p className="text-white/70 max-w-2xl mx-auto">Real cases, real outcomes. Explore how Adv. Pavan Rathod has helped clients across diverse legal matters.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Filters */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 mb-10 border border-gray-100 dark:border-gray-800">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search cases..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
            <select value={cat} onChange={e => setCat(e.target.value)}
              className="border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold">
              {categories.map(c => <option key={c} value={c}>{c === "all" ? "All Categories" : c}</option>)}
            </select>
            <select value={state} onChange={e => setState(e.target.value)}
              className="border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold">
              {states.map(s => <option key={s} value={s}>{s === "all" ? "All States" : s}</option>)}
            </select>
            <select value={year} onChange={e => setYear(e.target.value)}
              className="border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold">
              {years.map(y => <option key={y} value={y}>{y === "all" ? "All Years" : y}</option>)}
            </select>
          </div>
          <p className="text-gray-400 text-xs mt-3">{filtered.length} cases found</p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(c => (
            <Link href={`/cases/${c.slug}`} key={c.id}
              className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:border-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${catColors[c.category] || "bg-gray-100 text-gray-600"}`}>
                  {c.category}
                </span>
                <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-xs font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" /> {c.outcome}
                </div>
              </div>
              <h2 className="font-display font-semibold text-navy dark:text-white mb-2 leading-snug group-hover:text-gold transition-colors line-clamp-2">{c.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{c.summary}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-3">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{c.state}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{c.year}</span>
                <span className="text-gold flex items-center gap-1">View <ArrowRight className="w-3 h-3" /></span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No cases found matching your filters.</p>
            <button onClick={() => { setCat("all"); setState("all"); setYear("all"); setQ(""); }}
              className="mt-4 text-gold text-sm hover:underline">Clear filters</button>
          </div>
        )}
      </div>
    </div>
  );
}
