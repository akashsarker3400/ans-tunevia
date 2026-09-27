import type { Metadata } from "next";
import { site, youtubeCms as y } from "@/data/site";
import { Check, Cta, PageHead, Reveal, Section } from "@/components/site/shared";

export const metadata: Metadata = {
  title: "YouTube CMS and Content ID for music channels",
  description: `Link your music channel to the ${site.name} YouTube CMS: Content ID protection, higher monetisation and claims on fan uploads. Eligibility, fees and payout terms.`,
  alternates: { canonical: "/youtube-cms" },
  openGraph: { title: `YouTube CMS · ${site.name}`, url: "/youtube-cms", images: ["/og.jpg"] },
  twitter: { title: `YouTube CMS · ${site.name}`, images: ["/og.jpg"] },
};

function List({ items, icon = "check" }: { items: string[]; icon?: "check" | "dot" }) {
  return (
    <ul className="mt-5 space-y-3 text-[15px]">
      {items.map((it) => (
        <li key={it} className="flex gap-3">
          {icon === "check" ? <Check className="mt-0.5 size-4 shrink-0 text-green-ink" aria-hidden /> : <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-green" />}
          {it}
        </li>
      ))}
    </ul>
  );
}

export default function YoutubeCms() {
  return (
    <>
      <PageHead label="YouTube CMS" title={y.title} sub={y.lead} />
      <Section label="Benefits">
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {y.benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05} className="card p-7">
              <span className="font-mono text-[13px] text-ink-muted">0{i + 1}</span>
              <h3 className="text-h3 mt-6">{b.title}</h3>
              <p className="mt-2 text-[15px] text-ink-muted">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section label="Conditions" title="Who can link, and what it takes to stay linked." tone="surface">
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Reveal className="card bg-background p-8">
            <h3 className="text-h3">Eligibility</h3>
            <List items={y.eligibility} />
          </Reveal>
          <Reveal delay={0.05} className="card bg-background p-8">
            <h3 className="text-h3">Staying active</h3>
            <p className="mt-5 text-[15px] text-ink-muted">{y.maintenance}</p>
          </Reveal>
          <Reveal delay={0.1} className="card border-destructive/40 bg-background p-8">
            <h3 className="text-h3">Copyright strikes</h3>
            <List items={y.strikes} icon="dot" />
          </Reveal>
          <Reveal delay={0.15} className="card bg-background p-8">
            <h3 className="text-h3">Fees and payment</h3>
            <List items={y.fees} icon="dot" />
          </Reveal>
        </div>
        <Reveal delay={0.2} className="mt-4 card bg-background p-8">
          <h3 className="text-h3">Unlinking</h3>
          <p className="mt-3 text-[15px] text-ink-muted">{y.unlinking}</p>
        </Reveal>
      </Section>
      <Cta title="Apply for CMS linking." sub={y.review} label="Apply by email" />
    </>
  );
}
