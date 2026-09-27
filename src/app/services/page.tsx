import type { Metadata } from "next";
import Link from "next/link";
import { pillars, site } from "@/data/site";
import { ArrowRight, Cta, PageHead, Reveal, Section } from "@/components/site/shared";

export const metadata: Metadata = {
  title: "Services: distribution, video, publishing, rights",
  description: `${site.name} services for independent artists and labels: audio and video distribution, publishing administration, YouTube Content ID and CMS, label tools.`,
  alternates: { canonical: "/services" },
  openGraph: { title: `${site.name} services`, url: "/services", images: ["/og.jpg"] },
  twitter: { title: `${site.name} services`, images: ["/og.jpg"] },
};

const extra = [
  { title: "Social monetisation", text: "Your catalogue on TikTok, Instagram, Facebook and Snapchat as licensed sounds, with usage claimed and paid." },
  { title: "Label tools", text: "Multi-artist catalogues, royalty splits, multi-user access and direct delivery by API or FTP for high-volume labels." },
  { title: "Catalogue audits", text: "Metadata clean-up and historical royalty recovery for established catalogues moving to Tunevia." },
  { title: "Analytics", text: "Consumption and audience data from every store in one dashboard, next to the money it made." },
];

export default function Services() {
  return (
    <>
      <PageHead label="Services" title="Everything between the studio and the stores." sub="Tunevia is a distribution and rights company, not a marketplace. Four things, done properly, for artists and labels of any size." />
      <Section label="Core services">
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <article id={p.slug} className="card flex h-full flex-col scroll-mt-24 p-7 md:p-9">
                <span className="font-mono text-[13px] text-ink-muted">0{i + 1}</span>
                <h2 className="text-h2 mt-8 text-[clamp(24px,2.2vw,30px)]">{p.title}</h2>
                <p className="mt-3 text-[16px] text-ink-muted">{p.text}</p>
                <ul className="mt-6 space-y-2 border-t border-line pt-5 text-[15px] text-ink-muted">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2.5">
                      <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-green" />
                      {it}
                    </li>
                  ))}
                </ul>
                {p.href !== "/stores" && (
                  <Link href={p.href} className="mt-7 inline-flex items-center gap-1.5 text-[15px] font-medium text-ink hover:text-green-ink">
                    Read more
                    <ArrowRight className="size-4" />
                  </Link>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section label="Also" title="For labels and larger catalogues." tone="surface">
        <div className="mt-10 grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2">
          {extra.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.04} className="bg-background p-7">
              <h3 className="text-h3">{e.title}</h3>
              <p className="mt-2 text-[15px] text-ink-muted">{e.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section label="Who it is for">
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Reveal className="card p-8">
            <p className="label">Independent artists</p>
            <h3 className="text-h2 mt-3 text-[clamp(24px,2.2vw,30px)]">Release under your own name, keep every right.</h3>
            <p className="mt-3 text-[15px] text-ink-muted">Unlimited releases from $9.99 a year. Your music on every store, your royalties paid monthly.</p>
            <Link href="/pricing" className="btn-ghost btn-sm mt-6">
              See plans
            </Link>
          </Reveal>
          <Reveal delay={0.05} className="card p-8">
            <p className="label">Labels</p>
            <h3 className="text-h2 mt-3 text-[clamp(24px,2.2vw,30px)]">Many artists, one statement.</h3>
            <p className="mt-3 text-[15px] text-ink-muted">Catalogue tools, Content ID, publishing administration and a person who knows your roster.</p>
            <Link href="/contact" className="btn-ghost btn-sm mt-6">
              Talk to us
            </Link>
          </Reveal>
        </div>
      </Section>
      <Cta title="You create. We collect." sub="Tell us what you release and we will suggest the right plan." />
    </>
  );
}
