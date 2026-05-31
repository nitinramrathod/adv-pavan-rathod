import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Disclaimer | Adv. Pavan Rathod",
  robots: { index: false, follow: true },
};

export default function LegalDisclaimerPage() {
  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-gray-950">
      <div className="bg-navy py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-white">Legal Disclaimer</h1>
          <p className="text-white/60 mt-2 text-sm">Last updated: January 2024</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-14 prose prose-lg dark:prose-invert">
        <p><strong>Important Notice:</strong> This website is operated by Adv. Pavan Rathod, BA. LL.B., an enrolled advocate with the Bar Council of Maharashtra & Goa.</p>
        <h2>No Legal Advice</h2>
        <p>The content on this website is provided for general information only. It does not constitute legal advice and should not be relied upon as such. Every legal situation is unique and requires consultation with a qualified advocate.</p>
        <h2>No Attorney-Client Relationship</h2>
        <p>Visiting this website, reading its content, or submitting a contact form does not create an attorney-client relationship. A formal attorney-client relationship is established only through a signed engagement agreement.</p>
        <h2>Bar Council Rules</h2>
        <p>As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise in ways that are prohibited. This website is for information purposes only.</p>
        <h2>Case Results</h2>
        <p>Past case results described on this website are for informational purposes and do not guarantee similar outcomes in future cases. Each case has unique facts and circumstances.</p>
      </div>
    </div>
  );
}
