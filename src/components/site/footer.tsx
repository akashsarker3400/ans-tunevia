import Link from "next/link";

import { contacts, nav, site } from "@/data/site";
import { Wordmark } from "./header";

const legal = [
  { label: "Terms of service", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "DMCA", href: "/dmca" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark className="text-[24px]" />
            <p className="mt-4 max-w-sm text-[15px] text-ink-muted">{site.description}</p>
          </div>
          <div className="md:col-span-2">
            <p className="label mb-4">Product</p>
            <ul className="space-y-2 text-[15px]">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="inline-block py-0.5 text-ink-muted hover:text-ink">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/youtube-cms" className="inline-block py-0.5 text-ink-muted hover:text-ink">
                  YouTube CMS
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="label mb-4">Legal</p>
            <ul className="space-y-2 text-[15px]">
              {legal.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="inline-block py-0.5 text-ink-muted hover:text-ink">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="label mb-4">Contact</p>
            <ul className="space-y-3 text-[15px]">
              {contacts.map((c) => (
                <li key={c.email}>
                  <span className="block font-mono text-[12px] text-ink-muted">{c.label}</span>
                  <a href={`mailto:${c.email}`} className="break-all hover:text-green-ink hover:underline">
                    {c.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[13px] text-ink-muted sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.legalName}. Built and operated by{" "}
            <a href={site.parent.url} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-green-ink">
              {site.parent.name}
            </a>
            .
          </span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
