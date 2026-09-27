import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Bump when page content changes.
  const now = new Date("2026-09-27");
  const pages = ["", "/services", "/video", "/publishing", "/youtube-cms", "/stores", "/pricing", "/faq", "/contact", "/terms", "/privacy", "/dmca"];
  return pages.map((p) => ({
    url: `${site.domain}${p}`,
    lastModified: now,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : ["/terms", "/privacy", "/dmca"].includes(p) ? 0.2 : 0.7,
  }));
}
