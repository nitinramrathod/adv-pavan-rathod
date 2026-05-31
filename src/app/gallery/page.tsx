"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import gallery from "@/data/gallery.json";

const categories = ["All", ...Array.from(new Set(gallery.map(g => g.category)))];

export default function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<typeof gallery[0] | null>(null);

  const filtered = cat === "All" ? gallery : gallery.filter(g => g.category === cat);

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-gray-950">
      <div className="bg-navy py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Gallery</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Photo Gallery</h1>
          <p className="text-white/70 max-w-2xl mx-auto">A visual look at our legal practice, office, and professional engagements.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                cat === c ? "bg-navy text-white dark:bg-gold dark:text-navy" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}>
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map(item => (
            <div key={item.id} className="break-inside-avoid group relative rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 cursor-pointer hover:border-gold transition-all"
              onClick={() => setLightbox(item)}>
              <Image src={item.src} alt={item.title} width={800} height={600} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-white/60 text-xs">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 p-2 text-white/60 hover:text-white bg-white/10 rounded-full">
            <X className="w-6 h-6" />
          </button>
          <div onClick={e => e.stopPropagation()} className="max-w-4xl w-full">
            <Image src={lightbox.src} alt={lightbox.title} width={1200} height={800} className="w-full rounded-2xl object-contain max-h-[80vh]" />
            <div className="text-center mt-4">
              <p className="text-white font-semibold">{lightbox.title}</p>
              <p className="text-white/50 text-sm">{lightbox.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
