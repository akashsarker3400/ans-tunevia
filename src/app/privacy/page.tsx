import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} collects, uses and protects your personal information, metadata and payout details.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function Privacy() {
  return (
    <LegalPage
      label="Legal"
      title="Privacy policy."
      sub="How we handle your personal information, royalty data and account activity."
      updated="1 February 2026"
      sections={[
        {
          id: "intro",
          h: "Introduction",
          body: (
            <>
              <p>This Privacy Policy describes how Tunevia (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses and shares your personal information when you visit our website, use our distribution services or interact with our platform.</p>
              <p>By using Tunevia you consent to the practices described here. We are committed to being clear about how your metadata, payout details and account activity are stored and processed.</p>
            </>
          ),
        },
        {
          id: "collect",
          h: "Information we collect",
          body: (
            <>
              <p><strong>Personal identification:</strong> full name and stage name, email and postal address, tax ID (for royalty payouts), identification documents (KYC).</p>
              <p><strong>Metadata and usage:</strong> ISRC and UPC codes, song titles and lyrics, audio files, IP addresses and device logs.</p>
              <p>We do not store full card details. Payments are handled by PCI-compliant payment partners.</p>
            </>
          ),
        },
        {
          id: "use",
          h: "How we use information",
          body: (
            <ul>
              <li>Delivering your music to DSPs</li>
              <li>Calculating and paying royalties</li>
              <li>Authenticating your account</li>
              <li>Providing customer support</li>
              <li>Meeting legal and tax reporting obligations</li>
              <li>Improving the platform through analytics</li>
            </ul>
          ),
        },
        {
          id: "cookies",
          h: "Cookies and tracking",
          body: (
            <>
              <p>We use cookies and similar technologies to operate the service and remember your settings.</p>
              <ul>
                <li><strong>Session cookies</strong> keep you signed in.</li>
                <li><strong>Preference cookies</strong> remember settings such as language or currency.</li>
                <li><strong>Analytics cookies</strong> help us understand how the dashboard is used.</li>
              </ul>
            </>
          ),
        },
        {
          id: "sharing",
          h: "Sharing",
          body: (
            <>
              <p>We do not sell your personal data. We share specific data with third parties only to deliver the service:</p>
              <ul>
                <li><strong>Digital service providers:</strong> metadata shared with Spotify, Apple, Amazon and other stores to list your music.</li>
                <li><strong>Payment processors:</strong> payout details shared with banks and payment gateways.</li>
                <li><strong>Compliance partners:</strong> identity data for KYC/AML and tax reporting.</li>
                <li><strong>Legal authorities:</strong> only when required by law or to protect our rights and property.</li>
              </ul>
            </>
          ),
        },
        {
          id: "security",
          h: "Security",
          body: <p>We protect your information with encryption in transit and at rest, access controls and multi-factor authentication for our own systems. No method of transmission is entirely secure; if you believe your account has been compromised, contact us at once.</p>,
        },
        {
          id: "rights",
          h: "Your rights",
          body: (
            <>
              <p>Depending on where you live (for example GDPR in Europe or CCPA in California) you have rights over your personal data, including access, rectification, erasure and portability.</p>
              <p>To exercise them, or for any privacy question, write to <a href={`mailto:${site.email}`} className="link">{site.email}</a>.</p>
            </>
          ),
        },
      ]}
    />
  );
}
