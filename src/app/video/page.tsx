import type { Metadata } from "next";
import { site, video } from "@/data/site";
import { Cta, Dsp, PageHead, Reveal, Section } from "@/components/site/shared";
import { Faq } from "@/components/site/faq";

export const metadata: Metadata = {
  title: "Music video distribution and VEVO channels",
  description: `Deliver music videos to YouTube, VEVO, Apple Music and Tidal with ${site.name}. Official VEVO artist channels, Content ID for video, monthly reporting.`,
  alternates: { canonical: "/video" },
  openGraph: { title: `Video distribution · ${site.name}`, url: "/video", images: ["/og.jpg"] },
  twitter: { title: `Video distribution · ${site.name}`, images: ["/og.jpg"] },
};

export default function Video() {
  return (
    <>
      <PageHead label="Video" title={video.title} sub={video.lead}>
        <ul className="mt-8 flex flex-wrap gap-3">
          {["youtube", "vevo", "itunes", "tidal"].map((id) => (
            <li key={id} className="flex items-center gap-2 rounded-[10px] border border-line px-3 py-2 text-[14px]">
              <Dsp id={id} size={22} />
              {{ youtube: "YouTube", vevo: "VEVO", itunes: "Apple Music", tidal: "Tidal" }[id]}
            </li>
          ))}
        </ul>
      </PageHead>
      <Section label="What is included">
        <div className="mt-10 grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {video.features.map((f, i) => (
            <Reveal key={f.title} delay={Math.min(i * 0.04, 0.2)} className="bg-background p-7">
              <span className="font-mono text-[13px] text-ink-muted">0{i + 1}</span>
              <h3 className="text-h3 mt-6">{f.title}</h3>
              <p className="mt-2 text-[15px] text-ink-muted">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section label="VEVO" title="An official VEVO artist channel." sub="The same channel type major-label artists have: VEVO watermark, higher ad rates, search priority on video platforms and chart eligibility. Included in the Professional plan for eligible artists." tone="surface">
        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {["Request the channel through Tunevia", "We verify your artist metadata", "Channel set-up and first delivery (7 to 14 days)", "Official Artist Channel synchronisation"].map((s, i) => (
            <Reveal key={s} delay={i * 0.05} className="card flex h-full flex-col bg-background p-6">
              <span className="font-mono text-[13px] text-green-ink">0{i + 1}</span>
              <p className="mt-6 text-[15px]">{s}</p>
            </Reveal>
          ))}
        </ol>
      </Section>
      <Section label="Process" title="From master to every screen.">
        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {video.process.map((s, i) => (
            <Reveal key={s} delay={i * 0.05} className="card flex h-full flex-col p-6">
              <span className="font-mono text-[13px] text-ink-muted">Step {i + 1}</span>
              <p className="mt-6 text-[15px]">{s}</p>
            </Reveal>
          ))}
        </ol>
      </Section>
      <Section label="Questions" tone="surface">
        <div className="mt-8 max-w-[760px]">
          <Faq items={video.faq} />
        </div>
      </Section>
      <Cta title="Send us your video." sub="Tell us the release date and we will plan the delivery backwards from it." />
    </>
  );
}
