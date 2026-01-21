
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart3, Copyright, LayoutDashboard, ArrowRight } from 'lucide-react';

interface PublishingSectionProps {
  onLearnMore?: () => void;
}

const PublishingSection: React.FC<PublishingSectionProps> = ({ onLearnMore }) => {
  const features = [
    { icon: <ShieldCheck className="text-brand-green" />, text: "Collect royalties worldwide" },
    { icon: <BarChart3 className="text-brand-blue" />, text: "Track performance analytics" },
    { icon: <Copyright className="text-brand-purple" />, text: "Keep 100% copyrights" },
    { icon: <LayoutDashboard className="text-white" />, text: "Advanced revenue dashboard" },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="publishing">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-purple/10 blur-[120px] -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Maximize Your Earnings with <br />
              <span className="text-brand-purple">Music Publishing</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              When you write a song, you’re owed royalties. TuneVia collects your global publishing 
              royalties from Spotify, TikTok, YouTube, Radio, TV, Live & more. 
              Keep 100% of your copyrights while we handle the complex administration.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="p-2 rounded-lg bg-white/5">
                    {f.icon}
                  </div>
                  <span className="font-medium text-gray-200">{f.text}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={onLearnMore}
              className="group flex items-center gap-2 text-brand-purple font-bold text-lg hover:text-white transition-colors"
            >
              Explore Publishing Admin 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl">
               {/* Mock Dashboard UI */}
               <div className="space-y-6">
                 <div className="h-4 w-32 bg-white/20 rounded-full" />
                 <div className="grid grid-cols-2 gap-4">
                   <div className="h-24 bg-brand-green/10 border border-brand-green/20 rounded-xl p-4 flex flex-col justify-end">
                      <div className="text-brand-green font-bold text-xl">$14,240.50</div>
                      <div className="text-xs text-gray-400">Total Royalties</div>
                   </div>
                   <div className="h-24 bg-brand-blue/10 border border-brand-blue/20 rounded-xl p-4 flex flex-col justify-end">
                      <div className="text-brand-blue font-bold text-xl">1.2M</div>
                      <div className="text-xs text-gray-400">Total Streams</div>
                   </div>
                 </div>
                 <div className="space-y-3">
                   {[80, 60, 90, 40].map((w, i) => (
                     <div key={i} className="h-2 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${w}%` }}
                        className={`h-full bg-gradient-to-r ${i % 2 === 0 ? 'from-brand-green to-brand-blue' : 'from-brand-purple to-brand-blue'}`}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                       />
                     </div>
                   ))}
                 </div>
               </div>
            </div>
            {/* Background element */}
            <div className="absolute -inset-4 bg-brand-green/5 blur-2xl rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PublishingSection;
