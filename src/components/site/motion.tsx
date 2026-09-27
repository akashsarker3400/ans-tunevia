"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

import { stores } from "@/data/site";
import { cn } from "@/lib/utils";
import { EASE } from "./shared";

/** Word-by-word headline reveal. Server HTML stays readable (noscript fallback via data-reveal). */
export function Words({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className={cn("inline", className)} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span data-reveal className="inline-block" initial={{ y: "110%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: EASE, delay: delay + i * 0.07 }} aria-hidden>
            {w}
          </motion.span>
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

/** 2px green progress line under the header. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.2 });
  return <motion.span aria-hidden className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-green" style={{ scaleX: x }} />;
}

/**
 * Delivery pipeline: your release -> tunevia -> stores, with packets travelling along the lines (SMIL, off for reduced motion).
 * A rotating log underneath names the store just delivered to.
 */
const PIPE_STORES = ["spotify", "itunes", "youtube", "tiktok", "amazon", "saavn", "boomplay", "anghami"];

export function Pipeline() {
  const reduce = useReducedMotion();
  const picks = PIPE_STORES.map((id) => stores.find((s) => s.id === id)!);
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setTick((v) => v + 1), 1600);
    return () => clearInterval(t);
  }, [reduce]);
  const current = picks[tick % picks.length];

  // Geometry: left node x=40, hub x=200, store column x=360; 8 stores spaced 44px from y=30.
  const W = 400;
  const H = 30 + 44 * 7 + 30;
  const hubY = H / 2;
  const paths = picks.map((_, i) => {
    const y = 30 + i * 44;
    return `M 214 ${hubY} C 290 ${hubY}, 290 ${y}, 346 ${y}`;
  });

  return (
    <div className="card overflow-hidden p-5 md:p-6">
      <div className="flex items-center justify-between">
        <span className="label">Delivery</span>
        <span className="font-mono text-[12px] text-green-ink">{stores.length} stores</span>
      </div>
      <div className="relative mt-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Your release goes through Tunevia to every store">
          {/* source -> hub */}
          <path d={`M 54 ${hubY} L 186 ${hubY}`} stroke="var(--line-strong)" strokeWidth="1" fill="none" />
          {paths.map((d, i) => (
            <path key={i} d={d} stroke="var(--line-strong)" strokeWidth="1" fill="none" />
          ))}
          {/* packets */}
          {!reduce && (
            <>
              <circle r="3" fill="var(--green)">
                <animateMotion dur="1.6s" repeatCount="indefinite" path={`M 54 ${hubY} L 186 ${hubY}`} />
              </circle>
              {paths.map((d, i) => (
                <circle key={i} r="2.5" fill="var(--green)">
                  <animateMotion dur="2.4s" begin={`${(i * 0.3).toFixed(1)}s`} repeatCount="indefinite" path={d} />
                </circle>
              ))}
            </>
          )}
          {/* source node */}
          <g>
            <rect x="10" y={hubY - 22} width="44" height="44" rx="10" fill="var(--bg)" stroke="var(--line-strong)" />
            <path d={`M 32 ${hubY - 8} v 16 M 24 ${hubY} l 8 -8 l 8 8`} stroke="var(--ink)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          {/* hub */}
          <g>
            <rect x="158" y={hubY - 28} width="56" height="56" rx="12" fill="var(--green)" />
            <text x="181" y={hubY + 8} textAnchor="middle" fontFamily="var(--font-geist)" fontWeight="600" fontSize="26" letterSpacing="-1.5" fill="var(--bg)">
              t
            </text>
            <circle cx="195" cy={hubY + 5} r="3" fill="var(--bg)" />
          </g>
          {/* store nodes */}
          {picks.map((s, i) => {
            const y = 30 + i * 44;
            return (
              <g key={s.id}>
                <rect x="346" y={y - 16} width="32" height="32" rx="16" fill="var(--bg)" stroke={current?.id === s.id && !reduce ? "var(--green)" : "var(--line)"} />
                <image href={`/dsp/${s.id}.svg`} x="350" y={y - 12} width="24" height="24" />
              </g>
            );
          })}
        </svg>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-line pt-4 font-mono text-[12px]">
        <span className="text-ink-muted">Your release</span>
        <span className="flex items-center gap-2 text-ink">
          <span aria-hidden className={cn("size-1.5 rounded-full bg-green", !reduce && "animate-pulse")} />
          delivered to {current?.name}
        </span>
      </div>
    </div>
  );
}

/** Two-row logo marquee. Pure CSS keyframes, pauses on hover, static when reduced motion is preferred. */
type StoreItem = (typeof stores)[number];

function MarqueeRow({ items, reverse }: { items: StoreItem[]; reverse?: boolean }) {
  return (
    <div className="marquee group relative overflow-hidden">
      <ul className={cn("marquee-track flex w-max items-center gap-3", reverse && "marquee-reverse")}>
        {[...items, ...items].map((s, i) => (
          <li key={`${s.id}-${i}`} aria-hidden={i >= items.length} className="flex items-center gap-2.5 rounded-[10px] border border-line bg-surface px-3.5 py-2 text-[13px] text-ink-muted transition-colors group-hover:border-line-strong">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/dsp/${s.id}.svg`} alt="" width={22} height={22} className="rounded-full" />
            <span className="whitespace-nowrap">{s.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section aria-label="Stores we deliver to" className="space-y-3 border-b border-line py-8">
      <MarqueeRow items={stores.slice(0, 18)} />
      <MarqueeRow items={stores.slice(18, 36)} reverse />
    </section>
  );
}

/** Animated split bars: the honest version of a "revenue dashboard". */
const SPLITS = [
  { label: "Distribution, on any plan", you: 100, note: "You keep 100% of what stores pay." },
  { label: "Publishing administration", you: 80, note: "20% administration fee on publishing income only." },
  { label: "YouTube CMS linking", you: 75, note: "25% share of gross YouTube earnings." },
  { label: "Standard distribution (no plan)", you: 80, note: "20% commission when you are not on a plan." },
];

export function Splits() {
  return (
    <ul className="mt-12 space-y-6">
      {SPLITS.map((s, i) => (
        <li key={s.label} className="grid gap-3 md:grid-cols-12 md:items-center">
          <div className="md:col-span-4">
            <p className="text-[15px] font-medium">{s.label}</p>
            <p className="text-[13px] text-ink-muted">{s.note}</p>
          </div>
          <div className="md:col-span-8">
            <div className="flex h-10 w-full overflow-hidden rounded-[8px] border border-line bg-background">
              <motion.div className="flex items-center justify-end bg-green pr-3 font-mono text-[12px] font-medium text-background" initial={{ width: "0%" }} whileInView={{ width: `${s.you}%` }} viewport={{ once: true, margin: "0px 0px -10% 0px" }} transition={{ duration: 1, ease: EASE, delay: i * 0.08 }}>
                {s.you}% you
              </motion.div>
              {s.you < 100 && <div className="flex flex-1 items-center justify-end pr-3 font-mono text-[12px] text-ink-muted">{100 - s.you}%</div>}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Horizontal connector that draws itself between step cards on desktop. */
export function StepLine() {
  return (
    <svg aria-hidden className="pointer-events-none absolute top-[38px] left-[16.66%] hidden h-[2px] w-[66.66%] md:block" viewBox="0 0 100 2" preserveAspectRatio="none">
      <line x1="0" y1="1" x2="100" y2="1" stroke="var(--line)" strokeWidth="2" />
      <motion.line x1="0" y1="1" x2="100" y2="1" stroke="var(--green)" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: EASE, delay: 0.2 }} />
    </svg>
  );
}
