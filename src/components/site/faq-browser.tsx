"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Faq } from "./faq";

export function FaqBrowser({ items }: { items: { cat: string; q: string; a: string }[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const cats = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.cat)))], [items]);
  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return items.filter((i) => (cat === "All" || i.cat === cat) && (!needle || `${i.q} ${i.a}`.toLowerCase().includes(needle)));
  }, [items, q, cat]);

  return (
    <section className="container-x py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-12">
        <aside className="md:col-span-4">
          <label className="relative block">
            <span className="sr-only">Search questions</span>
            <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-ink-muted" aria-hidden />
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search questions" className="h-12 w-full rounded-[10px] border border-line bg-surface pr-4 pl-11 text-[15px] placeholder:text-ink-muted focus:border-line-strong focus:outline-none" />
          </label>
          <ul className="mt-6 space-y-1" aria-label="Topics">
            {cats.map((c) => (
              <li key={c}>
                <button type="button" onClick={() => setCat(c)} aria-pressed={cat === c} className={cn("flex w-full items-center justify-between rounded-[8px] px-3 py-2 text-left text-[15px] transition-colors", cat === c ? "bg-surface text-ink" : "text-ink-muted hover:text-ink")}>
                  {c}
                  <span className="font-mono text-[12px] text-ink-muted">{c === "All" ? items.length : items.filter((i) => i.cat === c).length}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="md:col-span-8">
          {shown.length ? <Faq items={shown} /> : <p className="text-[15px] text-ink-muted">Nothing matches that search.</p>}
        </div>
      </div>
    </section>
  );
}
