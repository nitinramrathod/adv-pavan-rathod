import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Adv. Pavan Rathod",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-gray-950">
      <div className="bg-navy py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-white">Terms and Conditions</h1>
          <p className="text-white/60 mt-2 text-sm">Last updated: January 2024</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-14 prose prose-lg dark:prose-invert">
        <p>By accessing advpavanrathod.in, you agree to be bound by these Terms and Conditions.</p>
        <h2>Use of Website</h2>
        <p>This website is for informational purposes only. Content does not constitute legal advice and no attorney-client relationship is formed by visiting this website.</p>
        <h2>Intellectual Property</h2>
        <p>All content on this website — including text, graphics, and case studies — is the property of Adv. Pavan Rathod and may not be reproduced without permission.</p>
        <h2>Limitation of Liability</h2>
        <p>We are not liable for any loss arising from your use of or inability to use this website. Consult a qualified advocate for legal advice specific to your matter.</p>
        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of India. Disputes shall be subject to the jurisdiction of courts in Jalna, Maharashtra.</p>
      </div>
    </div>
  );
}
