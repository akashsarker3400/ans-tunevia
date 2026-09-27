import type { Metadata } from "next";
import { contacts, plans, site } from "@/data/site";
import { ArrowUpRight, PageHead, Reveal } from "@/components/site/shared";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Get started",
  description: `Start distributing with ${site.name}: email support@tunevia.com with your artist name, plan and links to your music. Copyright claims go to claim@tunevia.com.`,
  alternates: { canonical: "/contact" },
  openGraph: { title: `Get started · ${site.name}`, url: "/contact", images: ["/og.jpg"] },
  twitter: { title: `Get started · ${site.name}`, images: ["/og.jpg"] },
};

const subject = encodeURIComponent("New Tunevia account");
const body = encodeURIComponent(`Artist or label name:\nPlan (Artist / Label / Professional):\nCountry:\nLinks to your music:\nAnything else:`);

export default function Contact() {
  return (
    <>
      <PageHead label="Get started" title="Tell us about your music." sub="Accounts are opened by our team. Send one email with the details below and we will set you up, usually within one business day." />
      <div className="container-x grid gap-4 py-12 md:grid-cols-12 md:py-16">
        <Reveal className="card border-green p-8 md:col-span-7 md:p-10">
          <p className="label">Start distributing</p>
          <h2 className="text-h2 mt-3 text-[clamp(24px,2.4vw,32px)]">Email us to open an account.</h2>
          <ol className="mt-6 space-y-2 text-[15px] text-ink-muted">
            <li>1. Your artist or label name</li>
            <li>2. The plan you want ({plans.map((p) => p.name).join(", ")})</li>
            <li>3. Links to your music</li>
          </ol>
          <a href={`mailto:${site.email}?subject=${subject}&body=${body}`} className="btn-primary mt-8">
            Email {site.email}
            <ArrowUpRight className="size-4" />
          </a>
          <p className="mt-4 font-mono text-[12px] text-ink-muted">The button opens a pre-filled email. No mail app? Write to {site.email} directly.</p>
        </Reveal>
        <div className="grid gap-4 md:col-span-5">
          {contacts.map((c, i) => (
            <Reveal key={c.email} delay={0.05 + i * 0.05} className={cn("card flex flex-col p-8")}>
              <p className="label">{c.label}</p>
              <p className="mt-2 text-[15px] text-ink-muted">{c.who}</p>
              <a href={`mailto:${c.email}`} className="mt-6 break-all text-[20px] font-semibold tracking-[-0.01em] hover:text-green-ink">
                {c.email}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
