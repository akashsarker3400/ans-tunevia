import { FaqHome, Hero, Money, Pillars, PricingHome, Steps, Why } from "@/components/site/home";
import { LogoMarquee } from "@/components/site/motion";
import { Cta } from "@/components/site/shared";
import { faq, site } from "@/data/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.slice(0, 8).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Hero />
      <LogoMarquee />
      <Steps />
      <Pillars />
      <Money />
      <Why />
      <PricingHome />
      <FaqHome />
      <Cta title="Ready to release?" sub={`Tell us about your music and we will set up your ${site.name} account.`} />
    </>
  );
}
