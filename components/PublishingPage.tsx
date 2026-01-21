
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

const PublishingPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const revenueStreams = [
    { icon: <Radio size={32} className="text-brand-green" />, title: "Performance Royalties", desc: "Collected from radio, TV broadcasts, concerts, public venues, streaming platforms, and international public performance sources." },
    { icon: <Disc size={32} className="text-brand-blue" />, title: "Mechanical Royalties", desc: "Generated through digital streams, downloads, and physical reproductions across global regions." },
    { icon: <User size={32} className="text-brand-purple" />, title: "Writer Share", desc: "Ensures songwriters receive the portion of royalties tied directly to their creative authorship." },
    { icon: <Music size={32} className="text-white" />, title: "Publisher Share", desc: "Collected as part of publishing rights ownership and global performance/mechanical splits." },
    { icon: <Layers size={32} className="text-brand-green" />, title: "Recording Revenue", desc: "Additional allocation from master recordings depending on distribution performance and licensing." },
    { icon: <MessageSquareCode size={32} className="text-brand-blue" />, title: "Lyrics Monetization", desc: "Collected from lyric platforms, digital integrations, and sync-based lyric usage." },
  ];

  const features = [
    "Worldwide registration & publishing administration",
    "Royalty collection from multiple societies & digital platforms",
    "Metadata management & composition verification",
    "Catalog ingestion & song registration",
    "Royalty audits & transparency reporting",
    "Direct artist payouts via modern payment systems",
    "Sync & licensing representation (optional)",
    "No upfront fees for distribution clients"
  ];

  const stats = [
    { value: "120+", label: "Countries Covered", icon: <Globe2 className="text-brand-blue" /> },
    { value: "2,500+", label: "Societies Managed", icon: <ShieldCheck className="text-brand-purple" /> },
    { value: "100%", label: "Copyright Ownership", icon: <Fingerprint className="text-brand-green" /> },
    { value: "80%", label: "Royalty Share", icon: <PieChart className="text-white" /> }
  ];

  return (
    <div className="pt-24 bg-brand-black overflow-hidden selection:bg-brand-purple selection:text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <span className="px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold tracking-widest uppercase mb-8 inline-block">
              Publishing Administration
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-[1.1]">
              Secure Your Sound. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-green">
                Collect Your True Value.
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              In today’s global music landscape, royalty collection is more complex than ever. 
              TuneVia ensures that creators are compensated across every revenue stream 
              their music generates — worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-brand-purple text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(163,111,255,0.4)]">
                Onboard Your Catalog
              </button>
              <button className="bg-white/5 border border-white/10 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                Contact Agent
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Reach, Local Compliance Section */}
      <section className="py-24 relative overflow-hidden bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Global Reach, <br/><span className="text-brand-blue">Local Compliance</span></h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Collecting royalties across different territories requires deep expertise. 
                We manage the complexities of international systems, including direct affiliations with 
                <span className="text-white"> CMOs, PROs, and global tech platforms.</span>
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  "Different societies",
                  "Different registration rules",
                  "Different payment cycles",
                  "Different legal requirements"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <Zap size={16} className="text-brand-blue flex-shrink-0" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-3xl bg-brand-blue/5 border border-brand-blue/20">
                <p className="text-gray-300 italic">
                  "Tune Via manages these complexities on behalf of creators, ensuring royalties 
                  don’t get stuck, forfeited, or underreported."
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-center group hover:border-brand-blue/50 transition-colors"
                >
                  <div className="mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-4xl font-bold font-heading mb-2">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Streams Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">🧩 Key Revenue Streams</h2>
            <div className="w-24 h-1 bg-brand-purple mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">We operate globally, managing publishing rights across multiple territories to maximize your earnings.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revenueStreams.map((stream, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-purple/30 hover:bg-white/[0.07] transition-all group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">{stream.icon}</div>
                <h3 className="text-xl font-bold mb-4">{stream.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{stream.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timing Matters Section - INTELLECTUAL PROPERTY CIRCLE */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="order-2 lg:order-1 relative h-[500px] flex items-center justify-center">
              {/* Animated Rings */}
              <div className="absolute w-[400px] h-[400px] rounded-full border border-brand-purple/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-[460px] h-[460px] rounded-full border border-brand-blue/10 animate-[spin_35s_linear_infinite_reverse]" />
              <div className="absolute w-[340px] h-[340px] rounded-full border border-brand-green/10 animate-[pulse_4s_ease-in-out_infinite]" />
              
              {/* Inner Core */}
              <motion.div 
                className="relative z-10 w-80 h-80 rounded-full bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 backdrop-blur-3xl border border-white/10 flex items-center justify-center p-10 text-center shadow-[0_0_100px_rgba(163,111,255,0.1)]"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                 <div>
                    <div className="mb-4 flex justify-center"><Fingerprint size={48} className="text-brand-purple" /></div>
                    <div className="text-2xl font-bold font-heading mb-4 text-white leading-tight">Your Music is <br/>Intellectual Property</div>
                    <div className="h-[1px] w-12 bg-white/20 mx-auto mb-4" />
                    <div className="text-sm text-gray-400 font-medium">Publishing turns ownership <br/>into revenue.</div>
                 </div>
              </motion.div>

              {/* Orbiting Elements */}
              <motion.div 
                className="absolute w-4 h-4 bg-brand-purple rounded-full blur-[2px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ offsetPath: "path('M 200, 200 m -230, 0 a 230,230 0 1,0 460,0 a 230,230 0 1,0 -460,0')" }}
              />
            </motion.div>
            
            <motion.div {...fadeInUp} className="order-1 lg:order-2">
              <h2 className="text-4xl font-heading font-bold mb-8">🕒 Why Timing Matters: <br/><span className="text-brand-purple text-3xl font-normal italic">Don't Lose Money</span></h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Many global royalties operate on strict deadlines. 
                Miss the window &rarr; royalties go unclaimed or are absorbed by societies. 
                We prevent missed registrations, lost royalties, and manual paperwork delays.
              </p>
              <div className="space-y-6">
                 <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex gap-4 hover:border-brand-purple/50 transition-colors">
                    <CheckCircle2 className="text-brand-purple mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold mb-1 text-white">Automated Deadlines</h4>
                      <p className="text-sm text-gray-400">Our systems monitor society windows so you never miss a filing date.</p>
                    </div>
                 </div>
                 <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex gap-4 hover:border-brand-blue/50 transition-colors">
                    <CheckCircle2 className="text-brand-blue mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold mb-1 text-white">Global Compliance</h4>
                      <p className="text-sm text-gray-400">Handle territory-specific compliance issues without lifting a finger.</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section className="py-24 bg-brand-black">
        <div className="container mx-auto px-6">
           <h2 className="text-4xl font-heading font-bold mb-16 text-center">🛠️ What We Do</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 hover:bg-white/10 transition-colors cursor-default"
                >
                  <CheckCircle2 className="text-brand-green flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-300 font-medium leading-snug">{feature}</span>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Sync Section */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-heading font-bold mb-8">🎬 Sync & Licensing Opportunities</h2>
            <p className="text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
              Expand your commercial potential. We provide non-exclusive synchronization services 
              for high-impact visual media worldwide, while you retain total control.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
               {[
                 { icon: <Film />, label: "Film & Movie" },
                 { icon: <Tv />, label: "TV & OTT" },
                 { icon: <Globe2 />, label: "Advertising" },
                 { icon: <Gamepad2 />, label: "Gaming" },
                 { icon: <Music />, label: "Libraries" },
                 { icon: <Activity />, label: "Agencies" }
               ].map((item, i) => (
                 <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-4 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                      {item.icon}
                    </div>
                    <span className="font-bold uppercase tracking-widest text-[10px] text-gray-500 group-hover:text-white transition-colors">{item.label}</span>
                 </motion.div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Ecosystem Bridge */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="p-12 lg:p-20 rounded-[3rem] bg-gradient-to-br from-brand-purple/10 via-transparent to-brand-green/10 border border-white/10 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0A_100%)] opacity-40 pointer-events-none" />
             <div className="relative z-10">
               <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Built for the Modern Music Industry</h2>
               <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                 The traditional publishing model is outdated. Artists release music in minutes — royalties should move just as fast.
               </p>
               <div className="flex flex-wrap justify-center items-center gap-6 text-brand-purple font-bold tracking-widest text-xs uppercase">
                 <span>Tech</span>
                 <ArrowRight size={14} className="text-gray-700" />
                 <span>Rights</span>
                 <ArrowRight size={14} className="text-gray-700" />
                 <span>Distribution</span>
                 <ArrowRight size={14} className="text-gray-700" />
                 <span>Financial Rails</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Exclusive Access & CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-purple/10 blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
           <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-8">
              <div className="p-12 rounded-[2.5rem] bg-white/5 border border-white/10">
                 <div className="p-3 rounded-2xl bg-brand-green/20 w-fit mb-6">
                   <Unlock className="text-brand-green" />
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Exclusive Access</h3>
                 <p className="text-gray-400 leading-relaxed">
                   Publishing administration services are exclusively available to TuneVia distribution clients. 
                   This allows for <span className="text-white">unified metadata, cleaner registrations, and faster royalty processing.</span>
                 </p>
              </div>
              <div className="p-12 rounded-[2.5rem] bg-brand-purple text-white flex flex-col justify-between items-start group">
                 <div>
                   <h3 className="text-3xl font-heading font-bold mb-4">You Create. We Collect.</h3>
                   <p className="text-white/80 leading-relaxed mb-8">
                     If your music is streaming, syncing, performing, or being consumed — you deserve to get paid for it. 
                     TuneVia Publishing ensures nothing falls through the cracks.
                   </p>
                 </div>
                 <button className="bg-white text-brand-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-3">
                    Onboard Your Catalog <ArrowRight size={20} />
                 </button>
              </div>
           </div>
           
           <div className="text-center mt-12">
             <p className="text-gray-500 font-medium">Interested in Publishing Administration?</p>
             <p className="text-gray-600 text-sm mt-2 flex justify-center items-center gap-2">
               Available to TuneVia distribution clients only <span className="w-1 h-1 bg-gray-700 rounded-full" /> Contact us to onboard.
             </p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default PublishingPage;
