import type { ReactNode } from "react";
import { PageHead } from "./shared";

export type LegalSection = { id: string; h: string; body: ReactNode };

export function LegalPage({ label, title, sub, updated, sections }: { label: string; title: string; sub: string; updated: string; sections: LegalSection[] }) {
  return (
    <>
      <PageHead label={label} title={title} sub={sub}>
        <p className="mt-6 font-mono text-[12px] text-ink-muted">Last updated {updated}</p>
      </PageHead>
      <div className="container-x grid gap-10 py-12 md:grid-cols-12 md:py-16">
        <nav aria-label="Contents" className="md:col-span-4">
          <ol className="sticky top-24 space-y-1">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="flex gap-3 rounded-[8px] px-3 py-2 text-[14px] text-ink-muted hover:bg-surface hover:text-ink">
                  <span className="font-mono text-[12px]">{String(i + 1).padStart(2, "0")}</span>
                  {s.h}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="space-y-12 md:col-span-8">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-h3 flex items-baseline gap-3">
                <span className="font-mono text-[12px] text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                {s.h}
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-[1.7] text-ink-muted [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-ink">{s.body}</div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
