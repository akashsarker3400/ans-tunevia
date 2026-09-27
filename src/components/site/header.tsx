"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cta, nav, site } from "@/data/site";
import { ScrollProgress } from "./motion";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline text-[20px] leading-none font-semibold tracking-[-0.03em]", className)} aria-label={site.name}>
      tune<span className="text-green">via</span>
      <span aria-hidden className="ml-1 mb-[2px] inline-block size-1.5 rounded-full bg-green" />
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={cn("fixed inset-x-0 top-0 z-50 h-[72px] border-b bg-background transition-colors", scrolled ? "border-line" : "border-transparent")}>
        <ScrollProgress />
        <div className="container-x flex h-full items-center justify-between gap-4">
          <Link href="/" className="flex items-center" aria-label={site.name}>
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => {
              const active = pathname.startsWith(n.href);
              return (
                <Link key={n.href} href={n.href} aria-current={active ? "page" : undefined} className={cn("relative rounded-[8px] px-3.5 py-2 text-[14px] font-medium transition-colors hover:text-ink", active ? "text-ink" : "text-ink-muted")}>
                  {n.label}
                  {active && <span className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-green" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="hidden text-[14px] font-medium text-ink-muted hover:text-ink sm:block">
              Contact
            </Link>
            <Link href={cta.href} className="btn-primary btn-sm hidden sm:inline-flex">
              {cta.label}
            </Link>
            <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} className="grid size-11 place-items-center rounded-[10px] border border-line lg:hidden">
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={cn("fixed inset-0 top-[72px] z-40 bg-background lg:hidden", open ? "block" : "hidden")} aria-hidden={!open}>
        <nav aria-label="Mobile" className="container-x flex h-full flex-col justify-between py-8">
          <ul className="divide-y divide-line">
            {[...nav, { label: "Contact", href: "/contact" }].map((n, i) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="flex items-center justify-between py-4 text-[24px] font-semibold tracking-[-0.02em]">
                  {n.label}
                  <span className="font-mono text-[12px] text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="pb-8">
            <Link href={cta.href} onClick={() => setOpen(false)} className="btn-primary w-full">
              {cta.label}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
