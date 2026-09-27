"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import type { Store } from "@/data/site";
import { cn } from "@/lib/utils";
import { Dsp } from "./shared";

export function StoreGrid({ stores }: { stores: Store[] }) {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState("All");
  const regions = useMemo(() => ["All", ...Array.from(new Set(stores.map((s) => s.region)))], [stores]);
  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return stores.filter((s) => (region === "All" || s.region === region) && (!needle || `${s.name} ${s.category} ${s.region}`.toLowerCase().includes(needle)));
  }, [stores, q, region]);

  return (
    <section className="container-x py-12 md:py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <label className="relative block w-full md:max-w-sm">
          <span className="sr-only">Search stores</span>
          <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-ink-muted" aria-hidden />
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by store, region or type" className="h-12 w-full rounded-[10px] border border-line bg-surface pr-4 pl-11 text-[15px] placeholder:text-ink-muted focus:border-line-strong focus:outline-none" />
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by region">
          {regions.map((r) => (
            <button key={r} type="button" onClick={() => setRegion(r)} aria-pressed={region === r} className={cn("h-9 rounded-[8px] border px-3 text-[13px] font-medium transition-colors", region === r ? "border-green bg-green text-background" : "border-line text-ink-muted hover:border-line-strong hover:text-ink")}>
              {r}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 font-mono text-[12px] text-ink-muted">
        {shown.length} of {stores.length} stores
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {shown.map((s) => (
          <li key={s.id} className="card card-hover flex items-center gap-4 p-4">
            <Dsp id={s.id} name={s.name} size={40} />
            <div className="min-w-0">
              <p className="truncate text-[15px] font-medium">{s.name}</p>
              <p className="truncate font-mono text-[12px] text-ink-muted">
                {s.category} · {s.region}
              </p>
            </div>
          </li>
        ))}
      </ul>
      {shown.length === 0 && <p className="mt-10 text-[15px] text-ink-muted">No store matches that search.</p>}
    </section>
  );
}
