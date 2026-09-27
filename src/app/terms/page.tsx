import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of service",
  description: `The terms that govern ${site.name} distribution, royalties and ownership.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function Terms() {
  return (
    <LegalPage
      label="Legal"
      title="Terms of service."
      sub="Please read these terms carefully. By using Tunevia you agree to the conditions below on music distribution, royalty collection and intellectual property."
      updated="15 January 2026"
      sections={[
        {
          id: "intro",
          h: "Introduction",
          body: (
            <>
              <p>These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Tunevia platform, services and applications. Tunevia is a music distribution service provided to independent artists and labels by {site.legalName}, a company of {site.parent.name}.</p>
              <p>By opening an account you acknowledge that you have read, understood and agreed to be bound by these Terms and by our Privacy Policy.</p>
            </>
          ),
        },
        {
          id: "accounts",
          h: "User accounts",
          body: (
            <ul>
              <li>You must be at least 18 years old, or the age of majority in your jurisdiction, to enter into this agreement.</li>
              <li>You agree to provide accurate, current and complete information when registering and to keep it up to date.</li>
              <li>You are responsible for safeguarding your password and for any activity under your account.</li>
            </ul>
          ),
        },
        {
          id: "distribution",
          h: "Distribution rights",
          body: (
            <>
              <p>By submitting music to Tunevia you grant us a non-exclusive, sub-licensable right to distribute, perform and monetise that content across digital service providers (DSPs) worldwide, including Spotify, Apple Music and YouTube, with metadata that meets each store&apos;s requirements.</p>
              <p><strong>Territorial control.</strong> You may include or exclude territories from distribution. Worldwide availability is the default.</p>
            </>
          ),
        },
        {
          id: "ownership",
          h: "Ownership and intellectual property",
          body: (
            <>
              <p><strong>Tunevia does not take ownership of your music.</strong> You retain 100% of your master recording rights and 100% of your underlying composition copyrights.</p>
              <p>You represent and warrant that you own, or have obtained, all rights and licences needed for the content you distribute through the platform. Distributing content with unauthorised samples, uncleared covers or masters you do not own violates these Terms and results in immediate termination of your account and forfeiture of royalties.</p>
            </>
          ),
        },
        {
          id: "royalties",
          h: "Royalties and payments",
          body: (
            <>
              <p>We process the royalties we receive from DSPs and credit them to your account.</p>
              <ul>
                <li><strong>Artist, Label and Professional plans:</strong> you keep 100% of the royalties we receive from distribution.</li>
                <li><strong>Standard distribution</strong> (no subscription): Tunevia retains a 20% commission on gross royalties.</li>
                <li><strong>Publishing administration:</strong> Tunevia retains a 20% administration fee on publishing income.</li>
                <li><strong>Reporting cycles:</strong> most stores report on a 45 to 90 day delay. Your statement updates as reports are reconciled.</li>
              </ul>
            </>
          ),
        },
        {
          id: "prohibited",
          h: "Prohibited content",
          body: (
            <>
              <p>We maintain strict quality control. The following is prohibited:</p>
              <ul>
                <li>AI-generated spam content</li>
                <li>Unauthorised cover versions</li>
                <li>Hate speech or incitement</li>
                <li>Silent tracks or click-fraud audio</li>
                <li>Misleading artist names</li>
                <li>Uncleared samples</li>
              </ul>
            </>
          ),
        },
        {
          id: "termination",
          h: "Termination",
          body: (
            <>
              <p>You may end this agreement at any time by requesting a takedown of your catalogue and closing your account. Stores can take up to 30 days to process takedowns.</p>
              <p>Tunevia may terminate accounts that violate these Terms, take part in fraudulent streaming activity or infringe third-party copyrights.</p>
              <p>Questions about these Terms: <a href={`mailto:${site.email}`} className="link">{site.email}</a>.</p>
            </>
          ),
        },
      ]}
    />
  );
}
