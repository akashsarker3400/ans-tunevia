import type { Metadata } from "next";
import { publishing, site } from "@/data/site";
import { Check, Cta, PageHead, Reveal, Section } from "@/components/site/shared";

export const metadata: Metadata = {
  title: "Music publishing administration",
  description: `${site.name} registers your songs with collection societies worldwide and collects your mechanical and performance royalties. You keep 100% of your copyrights.`,
  alternates: { canonical: "/publishing" },
  openGraph: { title: `Publishing administration · ${site.name}`, url: "/publishing", images: ["/og.jpg"] },
  twitter: { title: `Publishing administration · ${site.name}`, images: ["/og.jpg"] },
};

export default function Publishing() {
  return (
    <>
      <PageHead label="Publishing administration" title={publishing.title} sub={publishing.lead} />
      <Section label="What we collect" title="Six streams most writers never see.">
        <div className="mt-10 grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {publishing.streams.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i * 0.04, 0.2)} className="bg-background p-7">
              <span className="font-mono text-[13px] text-ink-muted">0{i + 1}</span>
              <h3 className="text-h3 mt-6">{s.title}</h3>
              <p className="mt-2 text-[15px] text-ink-muted">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section label="How it works" tone="surface">
        <div className="mt-10 grid gap-4 md:grid-cols-12">
          <Reveal className="card bg-background p-8 md:col-span-7">
            <h2 className="text-h2 text-[clamp(24px,2.2vw,30px)]">Included in administration</h2>
            <ul className="mt-6 space-y-3 text-[15px]">
              {publishing.include.map((it) => (
                <li key={it} className="flex gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-green-ink" aria-hidden />
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05} className="card border-green bg-background p-8 md:col-span-5">
            <p className="label">Terms</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-[56px] leading-none font-semibold tracking-[-0.03em] tabular-nums">80%</span>
              <span className="text-[14px] text-ink-muted">to you</span>
            </div>
            <p className="mt-4 text-[15px] text-ink-muted">{publishing.terms}</p>
          </Reveal>
        </div>
      </Section>
      <Cta title="Turn your songwriting into income." sub="Send us your song list and we will tell you what is likely uncollected." />
    </>
  );
}
