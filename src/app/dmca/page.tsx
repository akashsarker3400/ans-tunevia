import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "DMCA and copyright claims",
  description: `Report infringing content distributed through ${site.name}, or submit a counterclaim to a takedown notice.`,
  alternates: { canonical: "/dmca" },
  robots: { index: true, follow: true },
};

const portals = [
  { name: "Spotify", href: "https://www.spotify.com/us/legal/infringement-form/" },
  { name: "Apple Music / iTunes", href: "https://www.apple.com/legal/internet-services/itunes/itunesstorenotices/" },
  { name: "YouTube / Google", href: "https://support.google.com/legal/troubleshooter/1114905" },
  { name: "Anghami", href: "mailto:contentclaims@anghami.com" },
];

export default function Dmca() {
  return (
    <LegalPage
      label="Legal"
      title="DMCA and copyright claims."
      sub="Tunevia only distributes content its users have the rights to. Here is how to report infringement, and how to respond if you receive a notice."
      updated="15 January 2026"
      sections={[
        {
          id: "report",
          h: "Report infringement",
          body: (
            <>
              <p>If someone has distributed your music, artwork or photos through Tunevia without permission, email our Claims Department with a link to the release and a description of the work you own.</p>
              <p>
                <a href={`mailto:${site.claimsEmail}`} className="link">
                  {site.claimsEmail}
                </a>
              </p>
            </>
          ),
        },
        {
          id: "counterclaim",
          h: "Counterclaim",
          body: (
            <>
              <p>If you have received a DMCA takedown notice from Tunevia and believe it is mistaken, send your counterclaim to <a href={`mailto:${site.claimsEmail}`} className="link">{site.claimsEmail}</a> with the release details, your contact information and the basis of your claim.</p>
            </>
          ),
        },
        {
          id: "elsewhere",
          h: "Content distributed by others",
          body: (
            <>
              <p>If your work was uploaded through a service other than Tunevia, we cannot act on it, but each store has its own process:</p>
              <ul>
                {portals.map((p) => (
                  <li key={p.href}>
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="link">
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ),
        },
        {
          id: "policy",
          h: "Our policy",
          body: <p>Tunevia acts as a digital service provider under the Digital Millennium Copyright Act. We respond promptly to valid takedown notices and terminate the accounts of repeat infringers.</p>,
        },
      ]}
    />
  );
}
