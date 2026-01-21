
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  ShieldCheck, 
  Zap, 
  BarChart4, 
  Database, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Users, 
  Briefcase, 
  Network,
  Cpu,
  TrendingUp,
  FileSpreadsheet,
  Lock,
  PlaySquare,
  Search,
  Laptop,
  Activity,
  Youtube
} from 'lucide-react';

interface ServicesPageProps {
  onNavigateToYoutube?: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigateToYoutube }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const categories = [
    {
      id: "distribution",
      title: "Strategic Distribution",
      tagline: "Global reach with trusted DSP connectivity",
      icon: <Globe className="text-brand-green" />,
      features: [
        { title: "Audio Distribution", desc: "Preferred partner pathways to 250+ global platforms including major DSPs and regional giants." },
        { title: "Video Distribution", desc: "Direct VEVO delivery API and official artist channel management on video-centric platforms." },
        { title: "Delivery Network", desc: "Optimized delivery via Merlin and direct-to-platform high-speed data rails." }
      ]
    },
    {
      id: "rights",
      title: "Rights Management",
      tagline: "Secure your IP with institutional-grade protection",
      icon: <ShieldCheck className="text-brand-blue" />,
      features: [
        { title: "Content ID & CMS", desc: "Advanced fingerprinting and manual claiming across social media and user-generated content platforms." },
        { title: "Publishing Admin", desc: "Worldwide composition registration and global mechanical/performance royalty collection." },
        { title: "Catalog Audits", desc: "Deep metadata reconciliation and historical royalty recovery services for established catalogs." }
      ]
    },
    {
      id: "tech",
      title: "Financial & Tech Rails",
      tagline: "Operational efficiency through automation",
      icon: <Cpu className="text-brand-purple" />,
      features: [
        { title: "Royalty Accounting", desc: "Transparent statement generation with multi-currency reconciliation and automated payouts." },
        { title: "Data API & FTP", desc: "White-label data delivery and direct ingestion for high-volume label partners." },
        { title: "360° Analytics", desc: "Real-time consumption insights and cross-platform demographic performance mapping." }
      ]
    }
  ];

  return (
    <div className="bg-brand-black overflow-hidden pt-24">
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(114,255,79,0.05),_transparent_40%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-green text-xs font-bold tracking-[0.2em] uppercase mb-8 inline-block">
              Music-Tech Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-[1.1]">
              COMPLETE INFRASTRUCTURE FOR <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple">
                INDEPENDENT LABELS & ARTISTS
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
              TuneVia provides complete music-tech services including distribution, rights management, 
              publishing, analytics, and global monetization pathways.
            </p>
            <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-500 uppercase tracking-widest">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-green" /> Institutional Rights</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-blue" /> Global Distribution</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-purple" /> Financial Transparency</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialty Services Callout */}
      <section className="py-12 border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.button 
            onClick={onNavigateToYoutube}
            {...fadeInUp}
            className="w-full p-8 rounded-[2rem] bg-gradient-to-r from-red-600/10 to-brand-purple/10 border border-red-500/20 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-red-500/50 transition-all group"
          >
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-2xl bg-red-600/20 text-red-500 group-hover:scale-110 transition-transform">
                <Youtube size={32} />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">YouTube CMS / MCN Monetization</h3>
                <p className="text-gray-400 text-sm">Maximize revenue and protect content through official MCN linkage.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 font-bold text-red-500 group-hover:gap-4 transition-all">
              Learn More <ArrowRight size={20} />
            </div>
          </motion.button>
        </div>
      </section>

      {/* 2. Why TuneVia Exists (Problem/Solution) */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Bridging the Gap Between <br/>Creativity and Global Markets</h2>
              <div className="space-y-8">
                <div className="group">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-brand-green group-hover:w-12 transition-all" />
                    The Challenge
                  </h4>
                  <p className="text-gray-400 pl-11">The modern music landscape is fragmented. Artists and labels often lose control and revenue due to opaque reporting and disjointed distribution networks.</p>
                </div>
                <div className="group">
                  <h4 className="text-brand-green font-bold mb-2 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-brand-green group-hover:w-12 transition-all" />
                    The TuneVia Solution
                  </h4>
                  <p className="text-gray-300 pl-11">We offer a unified tech ecosystem that prioritizes rights ownership, operational efficiency, and rapid financial reconciliation across all global platform integrations.</p>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="relative">
              <div className="aspect-video rounded-3xl bg-gradient-to-br from-brand-green/10 to-brand-blue/10 border border-white/10 p-1 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-brand-black/40 backdrop-blur-sm" />
                <div className="relative grid grid-cols-2 gap-4 p-8">
                  {[Network, Activity, Database, TrendingUp].map((Icon, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-3">
                      <Icon className="text-brand-green" size={32} />
                      <div className="h-2 w-16 bg-white/10 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Overview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-heading font-bold mb-4 uppercase tracking-tighter">Professional Service Tiers</h2>
            <p className="text-gray-400">Tailored solutions for independent entities and established record labels.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-brand-green/30 transition-all"
              >
                <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-8">{cat.tagline}</p>
                <div className="space-y-8">
                  {cat.features.map((feat, idx) => (
                    <div key={idx}>
                      <h4 className="text-white font-bold text-sm mb-2">{feat.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Deep Dive Sections (Selective Highlights) */}
      <section className="py-24 bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Social & Content ID */}
            <motion.div {...fadeInUp} className="p-12 rounded-[3rem] bg-gradient-to-br from-brand-blue/10 to-transparent border border-white/10">
              <Zap className="text-brand-blue mb-6" size={40} />
              <h3 className="text-3xl font-heading font-bold mb-6">Social Media Monetization</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Transform your tracks into revenue assets across TikTok, Instagram, and Facebook. We manage the preferred partner pathways to ensure your content is eligible for licensing and official catalog usage.
              </p>
              <ul className="space-y-4 mb-8">
                {["UGC Content ID Mapping", "Ad-supported revenue", "TikTok catalog management"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-brand-blue" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Label Specifics */}
            <motion.div {...fadeInUp} className="p-12 rounded-[3rem] bg-gradient-to-br from-brand-purple/10 to-transparent border border-white/10">
              <Layers className="text-brand-purple mb-6" size={40} />
              <h3 className="text-3xl font-heading font-bold mb-6">Label Infrastructure</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Advanced tools for managing multi-artist catalogs. From advanced royalty splitting to white-label delivery APIs, we provide the tech backbone for modern record labels.
              </p>
              <ul className="space-y-4 mb-8">
                {["Reconciliation Engine", "Multi-user permissions", "FTP/API Direct Delivery"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-brand-purple" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Key Features Bento Box */}
      <section className="py-24 bg-white/[0.01]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold mb-16">OPERATIONAL EXCELLENCE</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Search />, title: "360° View", desc: "Consolidated performance data from all sources." },
              { icon: <Lock />, title: "Rights First", desc: "Artist-first ownership and control protocols." },
              { icon: <FileSpreadsheet />, title: "Direct Statements", desc: "Clean, actionable financial reporting." },
              { icon: <Laptop />, title: "Full Dashboard", desc: "Enterprise management for global catalogs." },
              { icon: <PlaySquare />, title: "VEVO Delivery", desc: "Premium video distribution pathways." },
              { icon: <TrendingUp />, title: "Playlist Sync", desc: "Strategic editorial path mapping." },
              { icon: <Briefcase />, title: "Account Support", desc: "Professional assistance for every client." },
              { icon: <Network />, title: "Platform Data", desc: "Preferred partner API integrations." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/5 flex flex-col items-center gap-4 hover:bg-white/10 transition-colors"
              >
                <div className="text-brand-green">{item.icon}</div>
                <h4 className="text-white font-bold text-sm uppercase tracking-widest">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-snug">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTAs */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* For Artists */}
            <motion.div 
              {...fadeInUp}
              className="p-16 rounded-[4rem] bg-brand-green text-brand-black flex flex-col justify-between items-start group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <Users size={120} />
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-heading font-bold mb-6 uppercase tracking-tighter">Empowering <br/>Independent Artists</h3>
                <p className="text-brand-black/70 mb-12 max-w-sm font-medium leading-relaxed text-lg">
                  Launch your global career with 100% ownership and professional-grade distribution pathways.
                </p>
                <button className="bg-brand-black text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-3">
                  Start Distribution <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            {/* For Labels */}
            <motion.div 
              {...fadeInUp}
              className="p-16 rounded-[4rem] bg-white text-brand-black flex flex-col justify-between items-start group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <Briefcase size={120} />
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-heading font-bold mb-6 uppercase tracking-tighter">Institutional <br/>Label Solutions</h3>
                <p className="text-brand-black/70 mb-12 max-w-sm font-medium leading-relaxed text-lg">
                  Scalable infrastructure for established catalogs, high-volume release cycles, and API-driven delivery.
                </p>
                <button className="bg-brand-black text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-3">
                  Enterprise Onboarding <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4 opacity-40">TUNE VIA: YOU CREATE. WE COLLECT.</h2>
            <p className="text-gray-600 font-medium">Global platform integrations. Preferred partner pathways. Real outcomes.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
