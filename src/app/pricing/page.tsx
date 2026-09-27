import type { Metadata } from "next";
import { matrix, plans, pricingFaq, site } from "@/data/site";
import { PricingCards } from "@/components/site/home";
import { Cell, Cta, PageHead, Reveal, Section } from "@/components/site/shared";
import { Faq } from "@/components/site/faq";

export const metadata: Metadata = {
  title: "Pricing: unlimited distribution from $9.99 a year",
  description: `${site.name} plans for artists and labels: Artist $9.99, Label $39.99, Professional $99.99 per year. Unlimited releases, 100% of distribution royalties, no per-release fees.`,
  alternates: { canonical: "/pricing" },
  openGraph: { title: `Pricing · ${site.name}`, url: "/pricing", images: ["/og.jpg"] },
  twitter: { title: `Pricing · ${site.name}`, images: ["/og.jpg"] },
};

const offersJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${site.name} music distribution`,
  brand: { "@type": "Brand", name: site.name },
  offers: plans.map((p) => ({ "@type": "Offer", name: `${p.name} plan`, price: p.price.replace("$", ""), priceCurrency: "USD", url: `${site.domain}/pricing`, availability: "https://schema.org/InStock" })),
};

export default function Pricing() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offersJsonLd) }} />
      <PageHead label="Pricing" title="One yearly price. Unlimited releases." sub="Every plan includes unlimited releases and 100% of your distribution royalties. The difference is how many names you release under and which extra services are included." />
      <section className="container-x">
        <PricingCards />
      </section>
      <Section label="Compare" title="Plan by plan." tone="surface">
        <Reveal className="mt-10 overflow-x-auto rounded-[14px] border border-line bg-background">
          <table className="w-full min-w-[720px] text-left text-[15px]">
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="p-5 font-medium text-ink-muted">Feature</th>
                {plans.map((p) => (
                  <th key={p.name} scope="col" className="p-5 text-center">
                    <span className="block font-semibold">{p.name}</span>
                    <span className="block font-mono text-[12px] text-ink-muted">{p.price} / year</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrix.map((row) => (
                <tr key={row.feature} className="border-b border-line last:border-b-0">
                  <th scope="row" className="p-5 font-normal">
                    <span className="block font-medium">{row.feature}</span>
                    <span className="block text-[13px] text-ink-muted">{row.info}</span>
                  </th>
                  {row.cells.map((c, i) => (
                    <td key={i} className="p-5 text-center">
                      <Cell value={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Section>
      <Section label="Questions" title="About billing.">
        <div className="mt-8 max-w-[760px]">
          <Faq items={pricingFaq} />
        </div>
      </Section>
      <Cta title="Not sure which plan?" sub="Tell us how many artists and releases you have and we will point you to the right one." />
    </>
  );
}
