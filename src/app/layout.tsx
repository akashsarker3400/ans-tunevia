import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { contacts, site } from "@/data/site";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const title = `${site.name}: ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  category: "music",
  publisher: site.parent.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", url: site.domain, siteName: site.name, title, description: site.description, images: [{ url: "/og.jpg", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description: site.description, images: ["/og.jpg"] },
  formatDetection: { email: false, telephone: false },
  manifest: "/manifest.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.domain}/#org`,
      name: site.name,
      legalName: site.legalName,
      url: site.domain,
      logo: { "@type": "ImageObject", url: `${site.domain}/icon.png`, width: 512, height: 512 },
      image: `${site.domain}/og.jpg`,
      description: site.description,
      email: site.email,
      parentOrganization: { "@type": "Organization", name: site.parent.name, url: site.parent.url },
      knowsAbout: ["Music distribution", "Music publishing administration", "YouTube Content ID", "VEVO distribution", "Royalty collection"],
      contactPoint: contacts.map((c) => ({ "@type": "ContactPoint", contactType: c.label, email: c.email, availableLanguage: ["en", "bn"] })),
    },
    { "@type": "WebSite", "@id": `${site.domain}/#website`, url: site.domain, name: site.name, publisher: { "@id": `${site.domain}/#org` }, inLanguage: "en" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} dark`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only z-[200] rounded-[10px] bg-green px-4 py-2 font-medium text-background focus:not-sr-only focus:fixed focus:top-4 focus:left-4">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
