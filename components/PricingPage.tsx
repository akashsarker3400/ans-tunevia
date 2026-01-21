
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  Info, 
  Zap, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  Plus, 
  Minus,
  Globe,
  PieChart,
  Lock,
  Crown
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const comparisonData = [
    { feature: "Unlimited Music Distribution", artist: true, label: true, professional: true, info: "Distribute as many songs as you want to all major platforms." },
    { feature: "Keep 100% Ownership", artist: true, label: true, professional: true, info: "You retain full ownership of your masters and compositions." },
    { feature: "Artist Profiles Management", artist: "1 Artist", label: "Up to 10", professional: "Unlimited", info: "Number of unique artist profiles you can manage under one account." },
    { feature: "YouTube Content ID", artist: false, label: true, professional: true, info: "Claim revenue from fan-uploaded videos on YouTube." },
    { feature: "Spotify Verification", artist: false, label: true, professional: true, info: "Assistance with official blue checkmark verification." },
    { feature: "VEVO Channel Creation", artist: false, label: false, professional: true, info: "Professional VEVO onboarding and video distribution." },
    { feature: "Publishing Administration", artist: false, label: false, professional: true, info: "We collect your mechanical/performance royalties worldwide." },
    { feature: "Custom Label Name", artist: false, label: true, professional: true, info: "Choose what label name appears on DSPs." },
    { feature: "Support Response Time", artist: "48 Hours", label: "24 Hours", professional: "Priority (Instant)", info: "Direct access to our music-tech specialists." },
    { feature: "API Access", artist: false, label: false, professional: true, info: "Integrate TuneVia directly into your own applications." },
    { feature: "Dedicated Account Manager", artist: false, label: false, professional: true, info: "A direct contact person for your label operations." },
  ];

  const plans = [
    {
      name: "Artist",
      price: "$9.99",
      period: "year",
      description: "Perfect for independent artists just getting started.",
      features: [
        "Unlimited releases",
        "80+ streaming platforms",
        "Keep 100% royalties",
        "Basic analytics",
        "ISRC & UPC codes",
        "Release scheduling"
      ]
    },
    {
      name: "Label",
      price: "$39.99",
      period: "year",
      description: "For labels and artists with multiple releases.",
      features: [
        "Everything in Artist",
        "Up to 10 artists",
        "YouTube Content ID",
        "Advanced analytics",
        "Priority support",
        "Custom label name",
        "Spotify verification"
      ],
      isFeatured: true
    },
    {
      name: "Professional",
      price: "$99.99",
      period: "year",
      description: "For established artists and large labels.",
      features: [
        "Everything in Label",
        "Unlimited artists",
        "VEVO channel",
        "Publishing admin",
        "Sync licensing",
        "Dedicated manager",
        "API access",
        "White-label options"
      ]
    }
  ];

  const faqs = [
    { q: "Is the price fixed per year?", a: "Yes. Your subscription locks in the rate at the time of purchase. We do not have hidden per-release fees or per-store charges." },
    { q: "Can I cancel my subscription at any time?", a: "Yes, you can cancel your auto-renewal at any time. Your music will remain live until the end of your current billing period." },
    { q: "What happens if I don't renew?", a: "If a subscription expires, platforms may eventually remove the content. We offer a 30-day grace period to renew and keep your legacy music live." },
    { q: "How does the Publishing 80/20 split work?", a: "For Professional plan users, we collect 100% of your mechanical and performance royalties. We retain a 20% administration fee for the complex global collection and audit work, while you keep 80%." },
    { q: "Can I upgrade my plan mid-year?", a: "Absolutely. You can upgrade from Artist to Label or Professional. You'll only pay the pro-rated difference for the remainder of your billing cycle." }
  ];

  return (
    <div className="bg-brand-black pt-24 min-h-screen selection:bg-brand-green selection:text-brand-black">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp}>
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-green text-xs font-bold tracking-[0.3em] uppercase mb-8 inline-block">
              Transparent Pricing Model
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-bold mb-6 tracking-tighter leading-none">
              PLANS FOR EVERY <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple">
                MUSIC JOURNEY.
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Institutional-grade distribution infrastructure at accessible annual rates. No hidden fees, no complicated math.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-[2.5rem] border relative overflow-hidden group transition-all duration-500 ${
                  plan.isFeatured 
                  ? 'bg-[#121212] border-brand-green/50 shadow-[0_0_50px_rgba(114,255,79,0.1)] scale-105 z-10' 
                  : 'bg-white/5 border-white/5 hover:border-white/20'
                }`}
              >
                {plan.isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-green text-brand-black text-[10px] font-bold rounded-full uppercase tracking-widest z-20">
                    Most Popular
                  </div>
                )}
                <div className="relative z-10">
                  <div className="mb-10 text-center">
                    <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                      {i === 0 && <Zap size={20} className="text-brand-green" />}
                      {i === 1 && <Star size={20} className="text-brand-green" />}
                      {i === 2 && <Crown size={20} className="text-brand-green" />}
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-6xl font-heading font-bold">{plan.price}</span>
                      <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">/{plan.period}</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-6 leading-relaxed max-w-[240px] mx-auto">
                      {plan.description}
                    </p>
                  </div>
                  <ul className="space-y-4 mb-12">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <Check size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-5 rounded-2xl font-bold transition-all ${
                    plan.isFeatured 
                    ? 'bg-brand-green text-brand-black shadow-[0_0_30px_rgba(114,255,79,0.3)] hover:scale-[1.02]' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                  }`}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center">Interactive Feature Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-0">
              <thead>
                <tr className="border-b border-white/10 text-gray-500 uppercase tracking-widest text-[10px] font-bold">
                  <th className="pb-6 border-b border-white/10">Plan Features</th>
                  <th className="pb-6 px-4 border-b border-white/10 text-center">Artist</th>
                  <th className="pb-6 px-4 border-b border-white/10 text-center">Label</th>
                  <th className="pb-6 px-4 border-b border-white/10 text-center">Professional</th>
                  <th className="pb-6 text-right border-b border-white/10">Info</th>
                </tr>
              </thead>
              <tbody className="relative">
                {comparisonData.map((row, i) => (
                  <tr 
                    key={i} 
                    className={`transition-all duration-300 relative group ${hoveredRow === i ? 'bg-white/[0.03]' : ''}`}
                    onMouseEnter={() => setHoveredRow(i)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className={`py-6 border-b border-white/5 font-bold transition-colors ${hoveredRow === i ? 'text-white' : 'text-gray-400'}`}>
                      {row.feature}
                    </td>
                    <td className={`py-6 px-4 border-b border-white/5 text-center transition-all duration-300 ${hoveredRow === i ? 'bg-brand-green/5' : ''}`}>
                      <div className="flex justify-center">
                        {typeof row.artist === 'boolean' ? (
                          <motion.div animate={{ color: row.artist ? '#72FF4F' : '#333' }}>
                            {row.artist ? <CheckCircle2 size={18} /> : <Minus size={18} />}
                          </motion.div>
                        ) : (
                          <span className={`text-[10px] font-bold uppercase transition-colors ${hoveredRow === i ? 'text-white' : 'text-gray-600'}`}>{row.artist}</span>
                        )}
                      </div>
                    </td>
                    <td className={`py-6 px-4 border-b border-white/5 text-center transition-all duration-300 ${hoveredRow === i ? 'bg-brand-green/10' : ''}`}>
                      <div className="flex justify-center">
                        {typeof row.label === 'boolean' ? (
                          <motion.div animate={{ color: row.label ? '#72FF4F' : '#333' }}>
                            {row.label ? <CheckCircle2 size={18} /> : <Minus size={18} />}
                          </motion.div>
                        ) : (
                          <span className={`text-[10px] font-bold uppercase transition-colors ${hoveredRow === i ? 'text-brand-green' : 'text-gray-600'}`}>{row.label}</span>
                        )}
                      </div>
                    </td>
                    <td className={`py-6 px-4 border-b border-white/5 text-center transition-all duration-300 ${hoveredRow === i ? 'bg-brand-blue/10' : ''}`}>
                      <div className="flex justify-center">
                        {typeof row.professional === 'boolean' ? (
                          <motion.div animate={{ color: row.professional ? '#3ACDFF' : '#333' }}>
                            {row.professional ? <CheckCircle2 size={18} /> : <Minus size={18} />}
                          </motion.div>
                        ) : (
                          <span className={`text-[10px] font-bold uppercase transition-colors ${hoveredRow === i ? 'text-brand-blue' : 'text-gray-600'}`}>{row.professional}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-6 text-right border-b border-white/5">
                      <div className="group/info relative inline-block">
                        <Info size={16} className="text-gray-700 cursor-help hover:text-white transition-colors" />
                        <div className="absolute bottom-full right-0 mb-3 w-64 p-4 rounded-xl bg-white text-brand-black text-[11px] font-bold leading-snug opacity-0 pointer-events-none group-hover/info:opacity-100 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-50 transform translate-y-2 group-hover/info:translate-y-0">
                          {row.info}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-24 bg-brand-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Pricing FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02]">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-gray-200">{faq.q}</span>
                  {openFaq === i ? <Minus size={20} className="text-brand-green"/> : <Plus size={20} className="text-gray-600"/>}
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
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto p-12 lg:p-20 rounded-[4rem] bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple relative group">
            <div className="absolute inset-0 bg-brand-black/20 transition-colors rounded-[4rem]" />
            <div className="relative z-10">
              <h2 className="text-5xl font-heading font-bold mb-8 text-white">Join the Independent <br/>Revolution</h2>
              <p className="text-xl text-white/80 mb-12">Start your subscription today. Grow without limits.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-white text-brand-black px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform flex items-center gap-3">
                  Get Started <ArrowRight size={24} />
                </button>
                <button className="bg-transparent border border-white/30 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
