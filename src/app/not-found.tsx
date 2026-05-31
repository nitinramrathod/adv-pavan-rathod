import Link from "next/link";
import { Scale } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <Scale className="w-12 h-12 text-gold" />
        </div>
        <h1 className="font-display text-8xl font-bold text-gold mb-4">404</h1>
        <h2 className="font-display text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">The page you are looking for does not exist. It may have been moved or the URL may be incorrect.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="bg-gold text-navy px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors">
            Go to Homepage
          </Link>
          <Link href="/contact" className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:border-gold hover:text-gold transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
