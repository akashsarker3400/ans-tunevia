
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Tv, 
  Youtube, 
  Zap, 
  Globe, 
  ShieldCheck, 
  LayoutDashboard, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Video, 
  PieChart, 
  Bell, 
  UserCheck, 
  Layers, 
  Cpu, 
  Search, 
  Plus, 
  Minus,
  Briefcase,
  Users,
  Code2,
  Star,
  ExternalLink,
  Info
} from 'lucide-react';

const VideoPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    },
    viewport: { once: true }
  };

  const coreFeatures = [
    { 
      icon: <Tv size={32} className="text-brand-green" />, 
      title: "VEVO Distribution", 
      desc: "Institutional access to the premium VEVO ecosystem. Professional channel management and institutional-grade placement.",
      tooltip: "Get official VEVO watermark and channel verification."
    },
    { 
      icon: <Zap size={32} className="text-brand-blue" />, 
      title: "Instant Publishing", 
      desc: "Optimized delivery pathways ensure your visual content hits global platforms with minimal latency.",
      tooltip: "Rapid delivery to global endpoints in hours, not days."
    },
    { 
      icon: <Database size={32} className="text-brand-purple" />, 
      title: "Direct Content Delivery", 
      desc: "High-speed supply chain rails connecting your masters and high-resolution assets to global endpoints.",
      tooltip: "Lossless transfer of 4K master files via fiber-speed rails."
    },
    { 
      icon: <ShieldCheck size={32} className="text-white" />, 
      title: "Metadata & Rights", 
      desc: "Centralized governance of intellectual property through structured metadata and ownership tracking.",
      tooltip: "DDEX-compliant metadata for global rights reconciliation."
    },
    { 
      icon: <Youtube size={32} className="text-brand-green" />, 
      title: "UGC Monetization", 
      desc: "Advanced fingerprinting and manual claiming for user-generated content across social video platforms.",
      tooltip: "Claim revenue from every fan-uploaded video automatically."
    },
    { 
      icon: <Layers size={32} className="text-brand-blue" />, 
      title: "Catalog Control", 
      desc: "Complete oversight for independent artists and labels managing large volumes of visual assets.",
      tooltip: "Bulk management tools for large-scale video libraries."
    },
    { 
      icon: <Clock size={32} className="text-brand-purple" />, 
      title: "Content Scheduling", 
      desc: "Strategic deployment tools for synchronized global launches and campaign-specific releases.",
      tooltip: "Pre-schedule global premieres with sub-second accuracy."
    },
    { 
      icon: <Cpu size={32} className="text-white" />, 
      title: "AI-Powered Insights", 
      desc: "Consumption analytics and performance forecasting driven by proprietary music-tech data engines.",
      tooltip: "Proprietary predictive analytics for audience growth."
    },
    { 
      icon: <Globe size={32} className="text-brand-green" />, 
      title: "Global Platform Access", 
      desc: "Preferred partner pathways and global platform integrations across all major visual DSPs.",
      tooltip: "Direct ingestion into 250+ video-centric territories."
    }
  ];

  const workflow = [
    { title: "Ingestion", desc: "Upload high-resolution video assets and masters to our secure infrastructure." },
    { title: "Configuration", desc: "Structured metadata mapping and territorial rights assignment." },
    { title: "Compliance", desc: "Institutional-grade QA and platform-specific compliance validation." },
    { title: "Deployment", desc: "Automated delivery to global premium video endpoints." },
    { title: "Reconciliation", desc: "Performance tracking and consolidated financial reporting." }
  ];

  const faqs = [
    { q: "How do I submit my videos for distribution?", a: "Submissions are managed through your professional dashboard. Simply upload your 1080p or 4K master, provide metadata, and our system initiates the supply chain process." },
    { q: "Can I get a VEVO channel through TuneVia?", a: "Yes. We provide official VEVO channel creation and management services for eligible distribution clients as part of our premium visual offering." },
    { q: "How long until my videos are live globally?", a: "Standard delivery time is 7-10 business days after QA approval. We recommend submitting assets 3 weeks prior to release to ensure synchronized global deployment." },
    { q: "Do I keep 100% of my rights?", a: "Absolutely. TuneVia is an administration and technology partner. You retain full ownership and control of your intellectual property at all times." },
    { q: "How are royalties reported and paid?", a: "Visual performance royalties are consolidated in your dashboard. Reporting occurs monthly with direct payout pathways via our financial rails." }
  ];

  return (
    <div className="bg-brand-black overflow-hidden pt-24 selection:bg-brand-blue selection:text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 blur-[150px] rounded-full" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-purple/5 blur-[120px] rounded-full" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <span className="px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold tracking-[0.3em] uppercase mb-8 inline-block">
              Premium Video Tech
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-bold mb-8 tracking-tighter leading-none">
              GLOBAL VIDEO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-green to-brand-purple">
                DISTRIBUTION RAILS
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              End-to-end digital supply chain for music and video content. 
              Direct pathways to premium visual platforms with institutional-grade tech.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-brand-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(58,205,255,0.6)] transition-all flex items-center gap-3 shadow-[0_0_40px_rgba(58,205,255,0.3)]">
                Start Distributing Videos <Play size={20} fill="currentColor" />
              </button>
              <button className="bg-white/5 border border-white/10 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
                Enterprise Solutions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-heading font-bold mb-8">Unifying the Digital Supply Chain</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                TuneVia Video Distribution is a professional-grade tech ecosystem built for independent artists, record labels, and global media entities. We provide the infrastructure needed to manage, distribute, and monetize visual assets at scale.
              </p>
              <div className="space-y-4">
                {[
                  "Global platform reach & visibility",
                  "Automated royalty reconciliation",
                  "Centralized rights governance",
                  "Strategic metadata management"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 size={20} className="text-brand-blue" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="relative p-12 rounded-[3rem] bg-gradient-to-br from-brand-blue/5 to-transparent border border-white/10 overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0A_100%)] opacity-20" />
               <div className="relative z-10 grid grid-cols-1 gap-8">
                  <div className="flex items-center gap-6 group">
                     <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-[0_0_20px_rgba(58,205,255,0.4)] transition-all">
                        <Users size={32} />
                     </div>
                     <div>
                        <h4 className="text-white font-bold mb-1">Artists & Labels</h4>
                        <p className="text-gray-500 text-sm">Professional deployment for independent creators.</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                     <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white group-hover:shadow-[0_0_20px_rgba(114,255,79,0.4)] transition-all">
                        <Briefcase size={32} />
                     </div>
                     <div>
                        <h4 className="text-white font-bold mb-1">Media Companies</h4>
                        <p className="text-gray-500 text-sm">Enterprise-grade infrastructure for high-volume catalogs.</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                     <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white group-hover:shadow-[0_0_20px_rgba(163,111,255,0.4)] transition-all">
                        <Globe size={32} />
                     </div>
                     <div>
                        <h4 className="text-white font-bold mb-1">Platforms</h4>
                        <p className="text-gray-500 text-sm">Seamless ingestion rails for global platform partners.</p>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-heading font-bold mb-4 uppercase tracking-tighter">Infrastructure Features</h2>
             <div className="w-24 h-1 bg-brand-blue mx-auto mb-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((f, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp}
                transition={{ delay: i * 0.05 }}
                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-brand-blue/30 hover:bg-white/[0.08] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all group relative"
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform relative">
                  {f.icon}
                  
                  {/* Futuristic Tooltip */}
                  <AnimatePresence>
                    {hoveredFeature === i && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 z-50 pointer-events-none"
                      >
                        <div className="bg-brand-black/90 backdrop-blur-md border border-brand-blue/50 p-3 rounded-xl shadow-[0_0_20px_rgba(58,205,255,0.3)] text-center">
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-black border-r border-b border-brand-blue/50 rotate-45" />
                          <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-1">Tech Insight</p>
                          <p className="text-xs text-white leading-tight font-medium">{f.tooltip}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* VEVO Callout / Deep Dive */}
          <motion.div 
            {...fadeInUp}
            className="mt-16 p-12 rounded-[3rem] bg-gradient-to-br from-brand-green/10 via-brand-black to-brand-blue/10 border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <Star size={180} className="text-brand-green" />
            </div>
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-brand-green text-brand-black px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">Premium Focus</span>
                <h3 className="text-3xl font-heading font-bold">VEVO Artist Channels</h3>
              </div>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Elevate your brand presence with an Official VEVO Artist Channel. TuneVia provides direct onboarding pathways for independent artists to access the same premium visibility as major label artists.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="text-white font-bold flex items-center gap-2"><CheckCircle2 size={18} className="text-brand-green" /> Why VEVO?</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Higher CPMs and ad revenue potential</li>
                    <li>• Institutional search priority on global video engines</li>
                    <li>• Premium branding with the iconic VEVO watermark</li>
                    <li>• Eligibility for official chart reporting</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-bold flex items-center gap-2"><Clock size={18} className="text-brand-blue" /> The Process</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>1. Request channel via TuneVia dashboard</li>
                    <li>2. Institutional-grade metadata verification</li>
                    <li>3. Supply chain ingestion (7-14 days)</li>
                    <li>4. Verified OAC synchronization</li>
                  </ul>
                </div>
              </div>
              <button className="flex items-center gap-2 text-brand-green font-bold hover:gap-4 hover:scale-105 transition-all">
                Learn about VEVO Onboarding <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section with Sequential Animation */}
      <section className="py-24 bg-brand-blue/5 overflow-hidden">
        <div className="container mx-auto px-6">
           <h2 className="text-4xl font-heading font-bold mb-16 text-center">Global Deployment Workflow</h2>
           <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-5 gap-4 relative"
           >
              {/* Connector Line Animation */}
              <div className="absolute top-12 left-[10%] right-[10%] h-[1px] hidden md:block">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-brand-blue/50 via-brand-purple/50 to-brand-green/50 shadow-[0_0_10px_rgba(58,205,255,0.4)]"
                />
              </div>

              {workflow.map((step, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  className="relative p-6 text-center group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-full bg-brand-black border border-brand-blue/40 flex items-center justify-center text-brand-blue font-bold mx-auto mb-6 relative z-10 shadow-[0_0_15px_rgba(58,205,255,0.2)] group-hover:border-brand-blue group-hover:shadow-[0_0_25px_rgba(58,205,255,0.5)] transition-all"
                  >
                    {i + 1}
                  </motion.div>
                  <h4 className="text-white font-bold mb-3 group-hover:text-brand-blue transition-colors">{step.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* Dashboard Highlights (SaaS style) */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp} className="order-2 lg:order-1">
               <div className="p-1 rounded-[2.5rem] bg-gradient-to-br from-brand-blue/40 to-transparent border border-white/10 shadow-[0_0_50px_rgba(58,205,255,0.1)]">
                  <div className="bg-brand-black p-8 rounded-[2rem] space-y-8">
                     <div className="flex items-center justify-between">
                        <div className="h-4 w-32 bg-white/10 rounded-full" />
                        <div className="flex gap-2">
                           <div className="w-2 h-2 rounded-full bg-red-500" />
                           <div className="w-2 h-2 rounded-full bg-yellow-500" />
                           <div className="w-2 h-2 rounded-full bg-green-500" />
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                           <PieChart className="text-brand-blue" size={20} />
                           <div className="text-xl font-bold font-heading">Reconciliation</div>
                           <div className="h-1.5 w-full bg-brand-blue/20 rounded-full overflow-hidden">
                              <div className="h-full bg-brand-blue w-3/4" />
                           </div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                           <Bell className="text-brand-green" size={20} />
                           <div className="text-xl font-bold font-heading">Smart Alerts</div>
                           <div className="h-1.5 w-full bg-brand-green/20 rounded-full overflow-hidden">
                              <div className="h-full bg-brand-green w-1/2" />
                           </div>
                        </div>
                     </div>
                     <div className="space-y-3">
                        {[1,2,3].map(i => (
                           <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02]">
                              <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded bg-white/5" />
                                 <div className="h-2 w-24 bg-white/10 rounded-full" />
                              </div>
                              <div className="h-2 w-12 bg-brand-blue/40 rounded-full" />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </motion.div>
            <motion.div {...fadeInUp} className="order-1 lg:order-2">
               <span className="text-brand-blue font-bold tracking-widest text-xs uppercase mb-4 block">Unified Oversight</span>
               <h2 className="text-4xl font-heading font-bold mb-8">Professional Dashboard <br/>& Control Surface</h2>
               <p className="text-gray-400 text-lg mb-8">
                 Manage your entire visual supply chain from a single centralized interface. Optimized for real-time monitoring and reporting.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <h4 className="text-white font-bold flex items-center gap-2 group cursor-help transition-colors hover:text-brand-blue">
                        <UserCheck size={16} className="text-brand-blue"/> Channel Management
                     </h4>
                     <p className="text-sm text-gray-500">Automated OAC and VEVO profile governance.</p>
                  </div>
                  <div className="space-y-2">
                     <h4 className="text-white font-bold flex items-center gap-2 group cursor-help transition-colors hover:text-brand-green">
                        <LayoutDashboard size={16} className="text-brand-green"/> Video Analytics
                     </h4>
                     <p className="text-sm text-gray-500">Deep consumption data from all global platforms.</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Advantages Section */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-4xl font-heading font-bold mb-16">Technical Capabilities</h2>
           <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                { title: "DDEX Compliance", desc: "Industry-standard metadata formatting for seamless multi-territory delivery." },
                { title: "Scalable Ingestion", desc: "Enterprise infrastructure designed for high-volume catalog batch delivery." },
                { title: "Low-Latency Rails", desc: "Optimized data delivery paths for rapid publishing across the globe." }
              ].map((item, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                  <div className="text-brand-blue font-bold mb-4 flex justify-center"><Code2 size={40} className="hover:scale-110 transition-transform cursor-help" /></div>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center">Built for Every Tier</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-brand-blue/5 hover:border-brand-blue/30 transition-all">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><Star className="text-brand-blue" /> Artists</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Launch your professional visual identity. Get VEVO verified, manage your YouTube presence, and monetize every view across global platforms.</p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>• Unified audio & video ingestion</li>
                <li>• Automated OAC requests</li>
                <li>• Global DSP visibility</li>
              </ul>
            </motion.div>
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-brand-green/5 hover:border-brand-green/30 transition-all">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><Layers className="text-brand-green" /> Indie Labels</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Scale your operations with multi-artist catalog management. Centralized supply chain monitoring and automated royalty reconciliation for your entire roster.</p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>• Batch asset management</li>
                <li>• Advanced metadata reconciliation</li>
                <li>• Custom sub-label reporting</li>
              </ul>
            </motion.div>
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-brand-purple/5 hover:border-brand-purple/30 transition-all">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><Database className="text-brand-purple" /> Media Orgs</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Institutional infrastructure for media conglomerates and high-volume catalogs. API-driven delivery and high-throughput ingestion pipelines.</p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>• Direct API ingestion rails</li>
                <li>• White-label delivery options</li>
                <li>• Priority low-latency support</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black">
        <div className="container mx-auto px-6 max-w-4xl">
           <h2 className="text-3xl font-heading font-bold mb-12 text-center uppercase tracking-widest">Video FAQ</h2>
           <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02]">
                   <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                   >
                      <span className="font-bold text-gray-200">{faq.q}</span>
                      {openFaq === i ? <Minus size={20} className="text-brand-blue"/> : <Plus size={20} className="text-gray-600"/>}
                   </button>
                   <AnimatePresence>
                      {openFaq === i && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-white/5 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                   </AnimatePresence>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/10 blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
           <div className="max-w-4xl mx-auto p-12 lg:p-20 rounded-[4rem] bg-white/5 border border-white/10 group">
              <h2 className="text-5xl font-heading font-bold mb-8">Distribute Your Videos <br/>With TuneVia</h2>
              <p className="text-xl text-gray-400 mb-12">Institutional-grade onboarding. Optimized royalties. Unified monetization.</p>
              <button className="bg-brand-blue text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 hover:shadow-[0_0_35px_rgba(58,205,255,0.7)] transition-all flex items-center gap-3 mx-auto shadow-[0_0_40px_rgba(58,205,255,0.3)]">
                 Onboard Your Catalog <ArrowRight size={24} />
              </button>
           </div>
           <div className="mt-16 text-gray-600 font-medium uppercase tracking-[0.3em] text-[10px]">
              Trusted by industry professionals and growing media catalogs worldwide.
           </div>
        </div>
      </section>
    </div>
  );
};

export default VideoPage;
