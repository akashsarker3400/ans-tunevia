import type { Metadata } from "next";
import { site, stores } from "@/data/site";
import { Cta, PageHead } from "@/components/site/shared";
import { StoreGrid } from "@/components/site/store-grid";

export const metadata: Metadata = {
  title: "Stores we deliver to",
  description: `Where ${site.name} delivers your music: Spotify, Apple Music, Amazon, YouTube, TikTok, Tidal, Deezer and regional stores across India, China, Africa, MENA and East Asia.`,
  alternates: { canonical: "/stores" },
  openGraph: { title: `Stores · ${site.name}`, url: "/stores", images: ["/og.jpg"] },
  twitter: { title: `Stores · ${site.name}`, images: ["/og.jpg"] },
};

const listJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${site.name} delivery stores`,
  itemListElement: stores.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name })),
};

export default function Stores() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }} />
      <PageHead label="Stores" title="Where your music goes." sub={`The stores and platforms ${site.name} delivers to today, from the global services to the regional ones that matter for South Asian, Chinese, African and Middle Eastern listeners. New stores are added as partnerships open.`} />
      <StoreGrid stores={stores} />
      <Cta title="A store missing?" sub="Tell us where your listeners are and we will check whether we can deliver there." />
    </>
  );
}
