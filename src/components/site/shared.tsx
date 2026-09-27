"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Check, Minus } from "lucide-react";

import { cn } from "@/lib/utils";
import { cta } from "@/data/site";

export const EASE = [0.22, 1, 0.36, 1] as const;
export { ArrowRight, ArrowUpRight, Check, Minus };

/** Short green hairline; pairs with a mono label to open a section. */
export function Rule({ className }: { className?: string }) {
  return <span aria-hidden className={cn("block h-px w-8 bg-green", className)} />;
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div data-reveal className={className} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -8% 0px" }} transition={{ duration: 0.45, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}

export function Section({ id, label, title, sub, action, children, className, tone = "bg" }: { id?: string; label: string; title?: ReactNode; sub?: string; action?: ReactNode; children?: ReactNode; className?: string; tone?: "bg" | "surface" }) {
  return (
    <section id={id} className={cn("py-16 md:py-24", tone === "surface" && "border-y border-line bg-surface", className)}>
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-3">
            <Rule />
            <span className="label">{label}</span>
          </div>
        </Reveal>
        {(title || sub) && (
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal delay={0.05} className="max-w-3xl">
              {title && <h2 className="text-h2">{title}</h2>}
              {sub && <p className="mt-4 max-w-[62ch] text-[17px] text-ink-muted">{sub}</p>}
            </Reveal>
            {action && <Reveal delay={0.1}>{action}</Reveal>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHead({ label, title, sub, children }: { label: string; title: string; sub?: string; children?: ReactNode }) {
  return (
    <section className="border-b border-line pt-14 pb-12 md:pt-20 md:pb-16">
      <div className="container-x">
        <div className="flex items-center gap-3">
          <Rule />
          <span className="label">{label}</span>
        </div>
        <h1 className="text-h1 mt-6 max-w-[18ch]">{title}</h1>
        {sub && <p className="mt-6 max-w-[62ch] text-[18px] text-ink-muted">{sub}</p>}
        {children}
      </div>
    </section>
  );
}

/** Store logo from public/dsp. Logos are round full-colour marks; a 1px ring keeps them tidy on graphite. */
export function Dsp({ id, name, size = 40, className }: { id: string; name?: string; size?: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`/dsp/${id}.svg`} alt={name ?? ""} width={size} height={size} loading="lazy" className={cn("rounded-full ring-1 ring-line", className)} />
  );
}

export function Cta({ title, sub, label = cta.label, href = cta.href }: { title: string; sub?: string; label?: string; href?: string }) {
  return (
    <section className="container-x py-8 md:py-12">
      <Reveal>
        <div className="card flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-14">
          <div className="max-w-[40ch]">
            <h2 className="text-h2">{title}</h2>
            {sub && <p className="mt-4 text-[17px] text-ink-muted">{sub}</p>}
          </div>
          <Link href={href} className="btn-primary shrink-0">
            {label}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto size-5 text-green-ink" aria-label="Included" />;
  if (value === false) return <Minus className="mx-auto size-5 text-line-strong" aria-label="Not included" />;
  return <span className="text-[14px] font-medium">{value}</span>;
}
