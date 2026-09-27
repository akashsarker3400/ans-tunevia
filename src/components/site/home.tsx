"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { cta, faq, hero, heroStores, pillars, plans, steps, stores, why } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Dsp, Reveal, Rule, Section } from "./shared";
import { Faq } from "./faq";

/* ---------------- Hero ---------------- */

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -20]);
  const picks = heroStores.map((id) => stores.find((s) => s.id === id)!).filter(Boolean);

  return (
    <section className="border-b border-line pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <Rule />
            <span className="label">{hero.kicker}</span>
          </div>
          <h1 className="text-h1 mt-8 max-w-[17ch]">{hero.title}</h1>
          <p className="mt-6 max-w-[56ch] text-[clamp(17px,1.35vw,19px)] leading-[1.6] text-ink-muted">{hero.lead}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={cta.href} className="btn-primary">
              {cta.label}
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/pricing" className="btn-ghost">
              See pricing
            </Link>
          </div>
          <ul className="mt-9 grid gap-2.5 text-[15px] text-ink-muted sm:grid-cols-1">
            {hero.points.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <Check className="size-4 text-green-ink" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <motion.div style={reduce ? undefined : { y }} className="lg:col-span-5">
          <div className="card p-5 md:p-6">
            <div className="flex items-center justify-between">
              <span className="label">Delivery board</span>
              <span className="font-mono text-[12px] text-green-ink">{stores.length} stores</span>
            </div>
            <ul className="mt-5 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-4">
              {picks.map((s) => (
                <li key={s.id} className="flex flex-col items-center gap-2 rounded-[10px] border border-line bg-background p-3">
                  <Dsp id={s.id} name={s.name} size={36} />
                  <span className="max-w-full truncate text-[11px] text-ink-muted">{s.name}</span>
                </li>
              ))}
            </ul>
            <Link href="/stores" className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink hover:text-green-ink">
              All stores
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Store strip ---------------- */

export function StoreStrip() {
  const row = stores.slice(0, 24);
  return (
    <section aria-label="Stores" className="container-x py-10">
      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {row.map((s) => (
          <li key={s.id} className="flex items-center gap-2 text-[13px] text-ink-muted">
            <Dsp id={s.id} size={22} />
            {s.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------------- Steps ---------------- */

export function Steps() {
  return (
    <Section id="how" label="How it works" title="Three steps. No paperwork." tone="surface">
      <ol className="mt-12 grid gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06} className="card flex h-full flex-col bg-background p-7">
            <span className="font-mono text-[13px] text-green-ink">0{i + 1}</span>
            <h3 className="text-h3 mt-8">{s.title}</h3>
            <p className="mt-2 text-[15px] text-ink-muted">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

/* ---------------- Pillars ---------------- */

export function Pillars() {
  return (
    <Section id="services" label="What we do" title="One account for the whole catalogue." sub="Distribution, video, publishing and rights, handled by one team and reported on one statement." action={<Link href="/services" className="btn-ghost btn-sm">All services</Link>}>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {pillars.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <Link href={p.href} className="card card-hover group flex h-full flex-col p-7 md:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[13px] text-ink-muted">0{i + 1}</span>
                <ArrowRight className="size-4 text-ink-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink" />
              </div>
              <h3 className="text-h2 mt-10 text-[clamp(24px,2.2vw,30px)]">{p.title}</h3>
              <p className="mt-3 text-[15px] text-ink-muted">{p.text}</p>
              <ul className="mt-6 space-y-2 border-t border-line pt-5 text-[14px] text-ink-muted">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-2.5">
                    <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-green" />
                    {it}
                  </li>
                ))}
              </ul>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Why ---------------- */

export function Why() {
  return (
    <Section id="why" label="Why Tunevia" title="Built by a label, for people who release music." tone="surface">
      <div className="mt-12 grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2">
        {why.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.05} className="bg-background p-7 md:p-8">
            <h3 className="text-h3">{w.title}</h3>
            <p className="mt-2 text-[15px] text-ink-muted">{w.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Pricing ---------------- */

export function PricingCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("grid gap-4 lg:grid-cols-3", compact ? "mt-12" : "mt-10")}>
      {plans.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.05} className={cn("card flex h-full flex-col p-7 md:p-8", p.featured && "border-green")}>
          <div className="flex items-center justify-between">
            <span className="label">{p.name}</span>
            {p.featured && <span className="rounded-full bg-green px-2.5 py-1 font-mono text-[11px] font-medium text-background">Most chosen</span>}
          </div>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-[44px] leading-none font-semibold tracking-[-0.03em] tabular-nums">{p.price}</span>
            <span className="text-[14px] text-ink-muted">{p.period}</span>
          </div>
          <p className="mt-3 text-[15px] text-ink-muted">{p.text}</p>
          <ul className="mt-6 space-y-2.5 border-t border-line pt-6 text-[14px]">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-green-ink" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
          <Link href={cta.href} className={cn("mt-8", p.featured ? "btn-primary" : "btn-ghost")}>
            Start with {p.name}
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function PricingHome() {
  return (
    <Section id="pricing" label="Pricing" title="One yearly price. Unlimited releases." sub="No per-release or per-store fees. 100% of distribution royalties on every plan." action={<Link href="/pricing" className="btn-ghost btn-sm">Compare plans</Link>}>
      <PricingCards compact />
    </Section>
  );
}

/* ---------------- FAQ ---------------- */

export function FaqHome() {
  const items = faq.filter((f) => ["How long until my music is live?", "Do I keep 100% of my royalties?", "How and when do I get paid?", "Can I switch from another distributor?", "What audio formats do you accept?"].includes(f.q));
  return (
    <Section id="faq" label="Questions" title="Before you upload." tone="surface" action={<Link href="/faq" className="btn-ghost btn-sm">All questions</Link>}>
      <div className="mt-10 max-w-[760px]">
        <Faq items={items} />
      </div>
    </Section>
  );
}
