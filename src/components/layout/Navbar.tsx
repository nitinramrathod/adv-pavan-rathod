"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Sun, Moon, Scale } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) setDark(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nd = !dark;
    setDark(nd);
    document.documentElement.classList.toggle("dark", nd);
    localStorage.setItem("theme", nd ? "dark" : "light");
  };

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent")}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gold-50 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
            {/* <Scale className="w-5 h-5 text-navy" /> */}
            <Image width={80} height={80} 
                              src="/apple-touch-icon.png"
                                alt="Adv. Pavan Rathod" 
                                className="w-full h-full object-cover rounded-md" 
                                />
          </div>
          <div>
            <div className="font-display text-white font-bold text-lg leading-tight">Adv. Pavan Rathod</div>
            <div className="text-gold text-xs">BA. LL.B. | Jalna, Maharashtra</div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-white/80 hover:text-gold transition-colors text-sm font-medium">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2 text-white/70 hover:text-gold transition-colors" aria-label="Toggle theme">
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="flex items-center gap-2 bg-gold text-navy px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            {SITE_CONFIG.phone}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button onClick={toggleTheme} className="p-2 text-white/70 hover:text-gold" aria-label="Toggle theme">
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 text-white" aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-white/10 px-4 py-6">
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} className="block text-white/80 hover:text-gold transition-colors text-base font-medium">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="flex items-center gap-2 bg-gold text-navy px-4 py-3 rounded-full font-semibold mt-6 justify-center">
            <Phone className="w-4 h-4" />
            {SITE_CONFIG.phone}
          </a>
        </div>
      )}
    </header>
  );
}
