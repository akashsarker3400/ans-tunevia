
import React from 'react';
import { motion } from 'framer-motion';
// Added Zap and Layers to imports
import { 
  Youtube, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Clock, 
  DollarSign, 
  ArrowRight,
  Monitor,
  Video,
  Radio,
  Share2,
  MessageSquare,
  FileX,
  Scale,
  Zap,
  Layers
} from 'lucide-react';

const YoutubeCMSPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const benefits = [
    {
      icon: <TrendingUp className="text-brand-green" size={32} />,
      title: "Revenue Optimization",
      desc: "Increased revenue potential through TuneVia's optimization strategies and better CPM rates."
    },
    {
      icon: <ShieldCheck className="text-brand-blue" size={32} />,
      title: "Content ID Protection",
      desc: "Automatic Content ID service to ensure your music is protected and monetized across YouTube."
    },
    {
      icon: <Users className="text-brand-purple" size={32} />,
      title: "Premium Partner Access",
      desc: "Direct linkage options through top industry partners including Believe Music, Merlin, and Revelator's."
    }
  ];

  const maintenanceActivities = [
    { icon: <Video size={20} />, text: "Upload and publish a video" },
    { icon: <Radio size={20} />, text: "Perform a live stream" },
    { icon: <Zap size={20} />, text: "Post a Short (Reel)" },
    { icon: <Layers size={20} />, text: "Create a playlist" },
    { icon: <Share2 size={20} />, text: "Create a Community Post" },
    { icon: <MessageSquare size={20} />, text: "Comment as Channel Owner" }
  ];

  return (
    <div className="bg-brand-black pt-24 min-h-screen selection:bg-red-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-3xl bg-red-600/10 border border-red-600/20 text-red-500">
                <Youtube size={48} />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
              YOUTUBE CHANNEL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-brand-purple to-brand-blue">
                MONETIZATION
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Maximize Revenue: Join the TuneVia YouTube CMS/MCN. Secure your content, unlock higher earnings, and benefit from premium optimization strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                Check Eligibility Now <ArrowRight size={20} />
              </button>
            </div>
            <p className="mt-8 text-xs text-gray-600 uppercase tracking-widest font-bold">
              Powered by Premium Partners: Believe Music, Merlin, Revelator's
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Benefits of Linking Your Channel</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-brand-black border border-white/5 hover:border-red-600/30 transition-all group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Maintenance */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Conditions */}
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-3">
                <Monitor className="text-brand-green" /> Eligibility Conditions
              </h2>
              <div className="space-y-4">
                {[
                  { label: "Content Focus", text: "100% of the content must be strictly music-related." },
                  { label: "Ownership", text: "At least 95% of the content must be original and fully owned by you." },
                  { label: "YouTube Criteria", text: "Must meet all of YouTube’s YPP acceptance requirements." },
                  { label: "Compliance", text: "You must adhere to YouTube’s monetization guidelines." },
                  { label: "Monitoring", text: "Channel must be registered with TuneVia’s email for monitoring purposes." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex gap-4">
                    <CheckCircle2 className="text-brand-green flex-shrink-0" size={20} />
                    <div>
                      <span className="text-brand-green font-bold text-xs uppercase tracking-widest block mb-1">{item.label}</span>
                      <p className="text-gray-300 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Maintenance */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-3">
                <Clock className="text-brand-blue" /> Maintenance Policy
              </h2>
              <div className="p-8 rounded-[2.5rem] bg-brand-blue/5 border border-brand-blue/20">
                <p className="text-gray-300 mb-8 font-medium">
                  To remain partnered, you must perform at least <span className="text-brand-blue font-bold">two (2)</span> of the following activities per month:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {maintenanceActivities.map((act, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-brand-black/40 border border-white/5 text-gray-400 text-xs">
                      <span className="text-brand-blue">{act.icon}</span>
                      {act.text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 p-6 border-l-4 border-brand-blue bg-brand-blue/5 rounded-r-2xl">
                <p className="text-xs text-gray-400 leading-relaxed italic">
                  Consistent engagement is a primary requirement of our premium partners to maintain institutional-grade monetization status.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Warning Policy Section */}
      <section className="py-24 bg-red-600/5 border-y border-red-600/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <AlertTriangle className="text-red-500 animate-pulse" size={48} />
            </div>
            <h2 className="text-4xl font-heading font-bold mb-4 uppercase">Copyright Strike & Compliance Policy</h2>
            <p className="text-red-400 font-bold tracking-widest text-xs uppercase">Strict Enforcement in Effect</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-brand-black border border-red-900/50">
              <h4 className="text-red-500 font-bold mb-4 flex items-center gap-2"><FileX size={20}/> One Strike Policy</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Immediate unlinking and holding of upcoming revenue if a strike is received and not successfully countered.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-brand-black border border-red-900/50">
              <h4 className="text-red-500 font-bold mb-4 flex items-center gap-2"><AlertTriangle size={20}/> Zero Manipulation</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Manipulating monetization (improper intros/outros) or purchasing third-party placements is strictly prohibited.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-brand-black border border-red-900/50">
              <h4 className="text-red-500 font-bold mb-4 flex items-center gap-2"><Scale size={20}/> Penalties</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Violations may lead to Content ID removal, immediate termination, and potential legal action or fines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-heading font-bold mb-8">Fees & Payment Terms</h2>
              <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-green/10 to-transparent border border-brand-green/20">
                  <h4 className="text-xl font-bold mb-4 text-brand-green flex items-center gap-2">
                    <DollarSign size={24} /> Revenue Share
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex gap-2">
                      <ArrowRight className="text-brand-green flex-shrink-0" size={16} />
                      <span>TuneVia retains a <span className="text-white font-bold">25% revenue share</span> from gross YouTube earnings.</span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="text-brand-green flex-shrink-0" size={16} />
                      <span>Negotiable rates may be offered for high-earning channels ($5k+/mo).</span>
                    </li>
                  </ul>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Clock size={24} /> Payout Lifecycle
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-gray-500 font-bold uppercase block mb-1">Payment Cycle</span>
                      <p className="text-sm text-white">Two-month cycle (e.g. Jan earnings paid in Mar)</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 font-bold uppercase block mb-1">Threshold</span>
                      <p className="text-sm text-white">$50.00 USD Minimum</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="p-10 rounded-[3rem] bg-white text-brand-black">
                <h3 className="text-2xl font-bold mb-6">Payment Methods & Taxes</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-black/5 flex items-center justify-center">
                      <ShieldCheck className="text-brand-black" />
                    </div>
                    <p className="text-sm font-medium leading-relaxed">Payments are processed exclusively via <span className="font-bold underline">bank transfer</span> to ensured verified entities.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-black/5 flex items-center justify-center">
                      <Info className="text-brand-black" />
                    </div>
                    <p className="text-sm font-medium leading-relaxed">Channel owners are solely responsible for all applicable local taxes and VAT requirements.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Termination Policy */}
      <section className="py-24 bg-white/[0.01] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-heading font-bold mb-12 uppercase tracking-tighter">Termination & Unlinking Policy</h2>
            <div className="grid sm:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h4 className="text-white font-bold flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-brand-green"/> TuneVia Rights</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We reserve the right to unlink your channel immediately for violation of any terms or YouTube policies.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-bold flex items-center gap-2 text-sm"><Clock size={16} className="text-brand-blue"/> Owner Unlinking</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Requires 2-month prior written notice before the terms end date to process institutional unlinking.
                </p>
              </div>
            </div>
            <div className="mt-12 p-8 border border-dashed border-red-500/20 rounded-3xl">
              <p className="text-sm text-red-400 font-bold uppercase tracking-widest mb-2">Legal Notice</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Violation of these terms or attempting to defraud the YouTube monetization system may result in legal action, total revenue forfeiture, and compensation fines.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Ready to Optimize Your Channel?</h2>
          <button className="bg-white text-brand-black px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Apply for CMS Linking
          </button>
          <p className="mt-6 text-gray-500 text-sm">Application review typically takes 3-5 business days.</p>
        </div>
      </section>
    </div>
  );
};

export default YoutubeCMSPage;
