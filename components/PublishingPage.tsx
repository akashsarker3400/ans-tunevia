
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe2, 
  Radio, 
  Disc, 
  User, 
  Music, 
  FileText, 
  CheckCircle2, 
  Timer, 
  Film, 
  Tv, 
  Gamepad2, 
  Layers, 
  PieChart, 
  Unlock,
  MessageSquareCode,
  ArrowRight,
  Fingerprint,
  Activity,
  Zap,
  ShieldCheck
} from 'lucide-react';

interface PublishingPageProps {
  onGetStarted?: () => void;
}

const PublishingPage: React.FC<PublishingPageProps> = ({ onGetStarted }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const revenueStreams = [
    { icon: <Radio size={32} className="text-brand-green" />, title: "Radio & Broadcast Performance", desc: "Collected from radio, TV broadcasts, concerts, and international public performance sources." },
    { icon: <Disc size={32} className="text-brand-blue" />, title: "Mechanical Streaming Royalties", desc: "Generated through digital streams, downloads, and physical reproductions across global regions." },
    { icon: <User size={32} className="text-brand-purple" />, title: "Songwriter Share Protection", desc: "Ensures songwriters receive the portion of royalties tied directly to their creative authorship." },
    { icon: <Music size={32} className="text-white" />, title: "Global Publisher Share", desc: "Collected as part of publishing rights ownership and global performance/mechanical splits." },
    { icon: <Layers size={32} className="text-brand-green" />, title: "Master Recording Revenue", desc: "Additional allocation from master recordings depending on distribution performance." },
    { icon: <MessageSquareCode size={32} className="text-brand-blue" />, title: "Lyric Monetization", desc: "Collected from lyric platforms, digital integrations, and sync-based lyric usage." },
  ];

  const features = [
    "Worldwide song registration & administration",
    "Royalty collection from PROs & CMOs worldwide",
    "Metadata management for global compliance",
    "Institutional catalog ingestion pipelines",
    "Transparent royalty audits and reporting",
    "Direct artist payouts via multiple gateways",
    "Sync licensing for film, TV, and ads",
    "No upfront fees for distribution clients"
  ];

  const stats = [
    { value: "120+", label: "Countries Covered", icon: <Globe2 className="text-brand-blue" /> },
    { value: "2,500+", label: "Societies Managed", icon: <ShieldCheck className="text-brand-purple" /> },
    { value: "100%", label: "Rights Ownership", icon: <Fingerprint className="text-brand-green" /> },
    { value: "80%", label: "Royalty Share", icon: <PieChart className="text-white" /> }
  ];

  return (
    <article className="pt-24 bg-brand-black overflow-hidden selection:bg-brand-purple selection:text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32" aria-labelledby="publishing-hero-title">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <span className="px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold tracking-widest uppercase mb-8 inline-block">
              Institutional Music Publishing
            </span>
            <h1 id="publishing-hero-title" className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-[1.1]">
              Collect Your Global <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-green">
                Mechanical & Performance Royalties.
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              In today’s digital landscape, music publishing royalties are often left on the table. 
              TuneVia ensures independent creators are registered worldwide to collect every cent they are owed 
              from streams, radio, and public performances.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={onGetStarted}
                className="bg-brand-purple text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(163,111,255,0.4)]"
                aria-label="Onboard catalog for publishing"
              >
                Onboard Your Catalog
              </button>
              <button className="bg-white/5 border border-white/10 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors" aria-label="Contact publishing agent">
                Contact Agent
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 relative overflow-hidden bg-white/[0.01] border-y border-white/5" aria-labelledby="reach-title">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 id="reach-title" className="text-4xl md:text-5xl font-heading font-bold mb-8">Global Reach, <br/><span className="text-brand-blue">Local Compliance</span></h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Collecting mechanical royalties across different territories requires deep music-tech expertise. 
                TuneVia manages direct affiliations with <span className="text-white font-bold">CMOs, PROs, and DSPs</span> to maximize your payout velocity.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  "International PRO Linkage",
                  "Automated Song Registration",
                  "Quarterly Payout Cycles",
                  "GDPR & CCPA Compliant"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <Zap size={16} className="text-brand-blue flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <section key={i} className="p-8 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-center group hover:border-brand-blue/50 transition-colors">
                  <div className="mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-4xl font-bold font-heading mb-2">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="py-24" aria-labelledby="revenue-title">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="revenue-title" className="text-4xl font-heading font-bold mb-4">Songwriter Revenue Streams</h2>
            <div className="w-24 h-1 bg-brand-purple mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">We operate global rights administration to ensure songwriters get paid for lyrics, melodies, and performances.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revenueStreams.map((stream, i) => (
              <section key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-purple/30 hover:bg-white/[0.07] transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{stream.icon}</div>
                <h3 className="text-xl font-bold mb-4">{stream.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{stream.desc}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="cta-title">
        <div className="absolute inset-0 bg-brand-purple/10 blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
           <div className="p-12 lg:p-20 rounded-[2.5rem] bg-brand-purple text-white flex flex-col md:flex-row justify-between items-center group gap-8">
              <div className="max-w-xl">
                <h2 id="cta-title" className="text-4xl font-heading font-bold mb-4 text-white">Turn Your Ownership into Revenue.</h2>
                <p className="text-white/80 leading-relaxed text-lg">
                  TuneVia Publishing is the professional rail for independent songwriters. 
                  Don't leave your royalties unclaimed in black-box pools.
                </p>
              </div>
              <button 
                onClick={onGetStarted}
                className="bg-white text-brand-black px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors flex items-center gap-3 whitespace-nowrap"
                aria-label="Start collecting royalties"
              >
                Register Now <ArrowRight size={20} />
              </button>
           </div>
        </div>
      </section>
    </article>
  );
};

export default PublishingPage;
