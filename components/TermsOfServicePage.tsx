
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileText, Scale, Gavel, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: '1. Introduction', icon: <FileText size={18} /> },
    { id: 'accounts', title: '2. User Accounts', icon: <Lock size={18} /> },
    { id: 'distribution', title: '3. Distribution Rights', icon: <Scale size={18} /> },
    { id: 'ownership', title: '4. Ownership & IP', icon: <Shield size={18} /> },
    { id: 'royalties', title: '5. Royalties & Payments', icon: <Gavel size={18} /> },
    { id: 'prohibited', title: '6. Prohibited Content', icon: <AlertCircle size={18} /> },
    { id: 'termination', title: '7. Termination', icon: <ArrowRight size={18} /> },
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
    <div className="bg-brand-black pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeInUp} className="max-w-4xl mb-20">
          <span className="px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold tracking-widest uppercase mb-6 inline-block">
            Legal Governance
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 tracking-tighter">
            TERMS OF <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
              SERVICE.
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Please read these terms carefully. By using TuneVia, you agree to the conditions outlined below regarding music distribution, royalty collection, and intellectual property.
          </p>
          <div className="mt-8 text-sm text-gray-500 font-mono">
            Last Updated: January 15, 2026
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-32 space-y-2 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6 px-2">Table of Contents</h3>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                    activeSection === section.id 
                    ? 'bg-brand-blue text-brand-black font-bold shadow-[0_0_15px_rgba(58,205,255,0.3)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {section.icon}
                  {section.title}
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4 space-y-16">
            <section id="introduction" className="scroll-mt-32">
              <h2 className="text-3xl font-heading font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-brand-blue text-sm">01.</span> Introduction
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  These Terms of Service ("Terms") govern your access to and use of the TuneVia platform, services, and applications. TuneVia is a music distribution service provided to independent artists and labels.
                </p>
                <p>
                  By creating an account, you acknowledge that you have read, understood, and agreed to be bound by these Terms, as well as our Privacy Policy.
                </p>
              </div>
            </section>

            <section id="accounts" className="scroll-mt-32">
              <h2 className="text-3xl font-heading font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-brand-blue text-sm">02.</span> User Accounts
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-green mt-1 flex-shrink-0" />
                    <p><span className="text-white font-bold">Eligibility:</span> You must be at least 18 years old or the age of majority in your jurisdiction to enter into this agreement.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-green mt-1 flex-shrink-0" />
                    <p><span className="text-white font-bold">Accuracy:</span> You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-green mt-1 flex-shrink-0" />
                    <p><span className="text-white font-bold">Security:</span> You are responsible for safeguarding your password and for any activities or actions under your account.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="distribution" className="scroll-mt-32">
              <h2 className="text-3xl font-heading font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-brand-blue text-sm">03.</span> Distribution Rights
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  By submitting your music to TuneVia, you grant us a non-exclusive, sub-licensable right to distribute, perform, and monetize your content across global Digital Service Providers (DSPs).
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="p-8 rounded-3xl bg-brand-blue/5 border border-brand-blue/10">
                    <h4 className="text-white font-bold mb-4 uppercase tracking-tighter">Scope of Rights</h4>
                    <p className="text-sm">We deliver your content to over 250+ stores, including Spotify, Apple Music, and YouTube, ensuring metadata compliance and institutional-grade delivery.</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-brand-green/5 border border-brand-green/10">
                    <h4 className="text-white font-bold mb-4 uppercase tracking-tighter">Territorial Control</h4>
                    <p className="text-sm">You retain the right to specify or exclude certain territories from distribution, though global availability is default for maximizing revenue.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="ownership" className="scroll-mt-32">
              <h2 className="text-3xl font-heading font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-brand-blue text-sm">04.</span> Ownership & IP
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p className="text-white font-bold text-lg">
                  TuneVia does NOT take ownership of your music.
                </p>
                <p>
                  You retain 100% of your master recording rights and 100% of your underlying composition copyrights. You represent and warrant that you own or have obtained all necessary rights and licenses for the content you distribute through our platform.
                </p>
                <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
                  <h4 className="text-red-500 font-bold mb-2 flex items-center gap-2">
                    <AlertCircle size={18} /> Warranty of Non-Infringement
                  </h4>
                  <p className="text-sm text-gray-400">
                    Distributing content that contains unauthorized samples, uncleared covers, or stolen masters is a violation of these Terms and will result in immediate termination of your account and forfeiture of royalties.
                  </p>
                </div>
              </div>
            </section>

            <section id="royalties" className="scroll-mt-32">
              <h2 className="text-3xl font-heading font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-brand-blue text-sm">05.</span> Royalties & Payments
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  We process royalties received from DSPs and credit them to your account.
                </p>
                <ul className="space-y-4 list-none">
                  <li className="flex gap-4">
                    <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 flex-shrink-0" />
                    <span><span className="text-white font-bold">Artist/Label Plans:</span> Users on these plans keep 100% of the royalties we receive from distribution services.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 flex-shrink-0" />
                    <span><span className="text-white font-bold">Standard Distribution:</span> For users not on a subscription plan, TuneVia retains a 20% commission on gross royalties.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 flex-shrink-0" />
                    <span><span className="text-white font-bold">Reporting Cycles:</span> Most stores report on a 45-90 day delay. Your dashboard will update as soon as reports are reconciled.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="prohibited" className="scroll-mt-32">
              <h2 className="text-3xl font-heading font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-brand-blue text-sm">06.</span> Prohibited Content
              </h2>
              <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5">
                <p className="mb-6">We maintain strict quality control. The following content types are prohibited:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-generated spam content",
                    "Unauthorized cover versions",
                    "Hate speech or incitement",
                    "Silent tracks or click-fraud audio",
                    "Misleading artist names",
                    "Uncleared master samples"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-brand-black/40 border border-white/5 text-gray-400 text-sm">
                      <AlertCircle size={16} className="text-red-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="termination" className="scroll-mt-32">
              <h2 className="text-3xl font-heading font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-brand-blue text-sm">07.</span> Termination
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  You may terminate your agreement at any time by requesting a takedown of your catalog and closing your account. Please note that it may take up to 30 days for all DSPs to process takedown requests.
                </p>
                <p>
                  TuneVia reserves the right to terminate accounts that violate our policies, participate in fraudulent streaming activity, or infringe upon third-party copyrights.
                </p>
              </div>
            </section>

            <div className="pt-12 border-t border-white/5 text-center">
              <h3 className="text-xl font-bold mb-4">Questions about our Terms?</h3>
              <p className="text-gray-500 mb-8">Our legal and support teams are here to help you understand your rights.</p>
              <button className="bg-brand-blue text-brand-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                Contact Legal Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
