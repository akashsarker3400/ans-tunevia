import type { Metadata } from "next";
import { faq, site } from "@/data/site";
import { Cta, PageHead } from "@/components/site/shared";
import { FaqBrowser } from "@/components/site/faq-browser";

export const metadata: Metadata = {
  title: "Help and FAQ",
  description: `Answers about ${site.name} distribution, royalties, publishing, YouTube and video: delivery times, formats, payouts, switching distributors.`,
  alternates: { canonical: "/faq" },
  openGraph: { title: `Help · ${site.name}`, url: "/faq", images: ["/og.jpg"] },
  twitter: { title: `Help · ${site.name}`, images: ["/og.jpg"] },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHead label="Help" title="Questions, answered plainly." sub="Distribution, royalties, publishing, YouTube and video. If it is not here, email support and a person will answer." />
      <FaqBrowser items={faq} />
      <Cta title="Still stuck?" sub="Write to support@tunevia.com with your release or account details." label="Email support" href="mailto:support@tunevia.com" />
    </>
  );
}
