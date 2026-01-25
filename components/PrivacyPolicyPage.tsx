
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Eye, 
  Database, 
  UserPlus, 
  Cookie, 
  Share2, 
  Lock, 
  Mail, 
  Info,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: '1. Overview', icon: <Eye size={18} /> },
    { id: 'collection', title: '2. Data Collection', icon: <Database size={18} /> },
    { id: 'usage', title: '3. How We Use Data', icon: <UserPlus size={18} /> },
    { id: 'cookies', title: '4. Cookies & Tracking', icon: <Cookie size={18} /> },
    { id: 'sharing', title: '5. Data Sharing', icon: <Share2 size={18} /> },
    { id: 'security', title: '6. Security Measures', icon: <Lock size={18} /> },
    { id: 'rights', title: '7. Your Rights', icon: <ShieldCheck size={18} /> },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-brand-black pt-32 pb-24 min-h-screen selection:bg-brand-blue selection:text-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div {...fadeInUp} className="max-w-4xl mb-20">
          <span className="px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-bold tracking-widest uppercase mb-6 inline-block">
            Data Governance
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 tracking-tighter">
            PRIVACY <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">
              POLICY.
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            At TuneVia, we prioritize your privacy as much as your music. This policy outlines how we handle your personal information, royalties data, and digital footprint.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-mono">
            <span>Last Updated: February 01, 2026</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full" />
            <span>Version 2.4</span>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-32 space-y-2 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6 px-2">Navigation</h3>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                    activeSection === section.id 
                    ? 'bg-brand-green text-brand-black font-bold shadow-[0_0_15px_rgba(114,255,79,0.3)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {section.icon}
                  {section.title}
                </button>
              ))}
            </div>
          </aside>

          {/* Policy Content */}
          <div className="lg:w-3/4 space-y-20">
            {/* 01. Overview */}
            <section id="overview" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <Eye size={24} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white">Overview</h2>
              </div>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  This Privacy Policy describes how TuneVia ("we," "us," or "our") collects, uses, and shares your personal information when you visit our website, use our distribution services, or interact with our platform.
                </p>
                <p>
                  By using TuneVia, you consent to the data practices described in this statement. We are committed to transparency regarding the storage and processing of your metadata, payout details, and account activity.
                </p>
              </div>
            </section>

            {/* 02. Data Collection */}
            <section id="collection" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Database size={24} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white">Information We Collect</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                  <h4 className="text-brand-green font-bold mb-4 uppercase text-xs tracking-widest">Personal Identification</h4>
                  <ul className="space-y-3 text-sm text-gray-400">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-green"/> Full name and stage name</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-green"/> Email and physical address</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-green"/> Tax ID (for royalty payouts)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-green"/> Identification documents (KYC)</li>
                  </ul>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                  <h4 className="text-brand-blue font-bold mb-4 uppercase text-xs tracking-widest">Metadata & Usage</h4>
                  <ul className="space-y-3 text-sm text-gray-400">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-blue"/> ISRC and UPC codes</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-blue"/> Song titles and lyrics</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-blue"/> Audio file waveforms</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-blue"/> IP addresses and device logs</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 text-sm italic">
                Note: We do not store full credit card details. All financial transactions are handled via PCI-compliant partners like Stripe or PayPal.
              </p>
            </section>

            {/* 03. Usage */}
            <section id="usage" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <UserPlus size={24} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white">How We Use Information</h2>
              </div>
              <div className="p-8 rounded-[2.5rem] bg-brand-purple/5 border border-brand-purple/10 space-y-6">
                <p className="text-gray-300">We utilize your information for the following core business functions:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Facilitating music distribution to DSPs",
                    "Calculating and processing royalty payouts",
                    "Authenticating your account access",
                    "Providing customer support via helpdesk",
                    "Complying with legal tax reporting",
                    "Improving platform UI/UX through analytics"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-brand-black/40 border border-white/5 text-gray-400 text-sm">
                      <ArrowRight size={14} className="text-brand-purple" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 04. Cookies */}
            <section id="cookies" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                  <Cookie size={24} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white">Cookies & Tracking</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>
                  We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
                </p>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                  <h4 className="text-white font-bold text-sm">Types of Cookies We Use:</h4>
                  <ul className="space-y-4 list-none text-sm">
                    <li><span className="text-brand-green font-bold">Session Cookies:</span> We use Session Cookies to operate our Service and maintain your login state.</li>
                    <li><span className="text-brand-blue font-bold">Preference Cookies:</span> We use Preference Cookies to remember your settings (like language or currency).</li>
                    <li><span className="text-brand-purple font-bold">Analytics Cookies:</span> We use these to understand how users interact with our distribution dashboard.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 05. Data Sharing */}
            <section id="sharing" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <Share2 size={24} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white">Data Sharing</h2>
              </div>
              <div className="space-y-6 text-gray-400">
                <p>
                  We do not sell your personal data. However, we must share specific data with third parties to fulfill our service obligations:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white/[0.03] border-l-4 border-brand-green">
                    <h5 className="text-white font-bold mb-2">Digital Service Providers</h5>
                    <p className="text-xs">Metadata shared with Spotify, Apple, Amazon, etc., to list your music.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/[0.03] border-l-4 border-brand-blue">
                    <h5 className="text-white font-bold mb-2">Payment Processors</h5>
                    <p className="text-xs">Payout details shared with banking partners and payment gateways.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/[0.03] border-l-4 border-brand-purple">
                    <h5 className="text-white font-bold mb-2">Compliance Partners</h5>
                    <p className="text-xs">Identity data shared for KYC/AML and tax reporting compliance.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/[0.03] border-l-4 border-white/20">
                    <h5 className="text-white font-bold mb-2">Legal Authorities</h5>
                    <p className="text-xs">Only when required by law or to protect our rights and property.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 06. Security */}
            <section id="security" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                  <Lock size={24} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white">Security Measures</h2>
              </div>
              <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-grow space-y-4">
                  <p className="text-gray-400">
                    The security of your data is important to us. We use industrial-grade encryption and security protocols to protect your information:
                  </p>
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs text-gray-500">
                    <li className="flex items-center gap-2"><CheckCircle2 size={12}/> AES-256 Encryption</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={12}/> TLS/SSL Protocols</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={12}/> Multi-Factor Auth</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={12}/> Regular Audits</li>
                  </ul>
                </div>
                <div className="w-32 h-32 rounded-full border-4 border-brand-green/20 flex items-center justify-center animate-pulse">
                  <ShieldCheck size={48} className="text-brand-green" />
                </div>
              </div>
            </section>

            {/* 07. Rights */}
            <section id="rights" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white">Your Data Rights</h2>
              </div>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Depending on your location (GDPR in Europe, CCPA in California), you have rights regarding your personal data:
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between group cursor-default">
                    <span className="text-white font-medium text-sm">Right to Access</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Request Copy</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between group cursor-default">
                    <span className="text-white font-medium text-sm">Right to Rectification</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Correct Errors</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between group cursor-default">
                    <span className="text-white font-medium text-sm">Right to Erasure</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Delete Account</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between group cursor-default">
                    <span className="text-white font-medium text-sm">Right to Object</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Stop Processing</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Footer */}
            <div className="pt-20 border-t border-white/5 text-center">
              <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-brand-green/10 mb-8">
                <Mail className="text-brand-green" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Contact Privacy Officer</h3>
              <p className="text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your data rights, please contact our dedicated privacy team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:privacy@tunevia.com" className="bg-brand-green text-brand-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
                  privacy@tunevia.com <ArrowRight size={18}/>
                </a>
                <button className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
                  Compliance Center
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
