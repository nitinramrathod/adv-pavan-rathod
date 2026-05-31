import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Adv. Pavan Rathod",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-gray-950">
      <div className="bg-navy py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/60 mt-2 text-sm">Last updated: January 2024</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-14 prose prose-lg dark:prose-invert">
        <p>This Privacy Policy describes how Adv. Pavan Rathod ("we", "us") collects, uses, and protects information you provide through <strong>advpavanrathod.in</strong>.</p>
        <h2>Information We Collect</h2>
        <p>We collect information you voluntarily provide: name, phone number, email address, city, and details of your legal matter submitted through contact or callback forms.</p>
        <h2>How We Use Information</h2>
        <p>Information is used solely to respond to your legal inquiry and provide consultation. We do not sell, rent, or share your personal information with third parties.</p>
        <h2>Confidentiality</h2>
        <p>All information shared regarding legal matters is treated with strict confidentiality. Communications with advocates are privileged under Indian law.</p>
        <h2>Data Security</h2>
        <p>We implement appropriate technical measures to protect your information. However, no internet transmission is 100% secure.</p>
        <h2>Contact</h2>
        <p>For privacy concerns: {SITE_CONFIG.email} | {SITE_CONFIG.phone}</p>
      </div>
    </div>
  );
}
