import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Adv. Pavan Rathod",
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-gray-950">
      <div className="bg-navy py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-white">Cookie Policy</h1>
          <p className="text-white/60 mt-2 text-sm">Last updated: January 2024</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-14 prose prose-lg dark:prose-invert">
        <p>This Cookie Policy explains how advpavanrathod.in uses cookies and similar technologies.</p>
        <h2>What Are Cookies</h2>
        <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your experience.</p>
        <h2>Cookies We Use</h2>
        <p><strong>Essential Cookies:</strong> Required for the website to function (e.g., theme preference storage via localStorage).</p>
        <p><strong>Analytics Cookies:</strong> We may use Google Analytics to understand how visitors use our website. This data is anonymous and aggregated.</p>
        <h2>Managing Cookies</h2>
        <p>You can control cookies through your browser settings. Disabling cookies may affect website functionality.</p>
        <h2>Contact</h2>
        <p>For cookie-related questions, email us at advpavanrathod@gmail.com.</p>
      </div>
    </div>
  );
}
