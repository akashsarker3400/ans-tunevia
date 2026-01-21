
import React from 'react';
import { motion } from 'framer-motion';
import DSPIcon from './DSPIcon';
import { DSPIconName } from '../types';

const FeatureSection: React.FC = () => {
  const stores: DSPIconName[] = [
    'spotify', 'itunes', 'youtube', 'tiktok', 'amazon', 
    'tidal', 'boomplay', 'anghami', 'jiosaavn', 'tencent',
    'deezer', 'pandora', 'audiomack', 'soundcloud', 'vevo'
  ];

  // Split stores into two groups for variety, or use all for both
  const row1 = [...stores, ...stores]; // Right to Left
  const row2 = [...stores.reverse(), ...stores]; // Left to Right

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden" id="services">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Sell Your Music Online Worldwide
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            We partnered directly with Digital Stores to allow any musician to sell their songs worldwide. 
            Choose an unlimited distribution plan, upload your music, and we'll do the rest.
          </motion.p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="flex flex-col gap-6 select-none">
        
        {/* Row 1: Right to Left */}
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-4 pr-4 whitespace-nowrap"
            animate={{ x: [0, "-50%"] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {row1.map((store, i) => (
              <div
                key={`row1-${store}-${i}`}
                className="group flex flex-row items-center gap-4 px-6 py-4 min-w-[200px] rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-green/30 transition-all duration-300"
              >
                <DSPIcon name={store as any} size={24} className="!p-1" />
                <span className="text-sm font-bold text-gray-300 group-hover:text-white capitalize tracking-wide transition-colors">
                  {store === 'jiosaavn' ? 'JioSaavn' : store === 'itunes' ? 'iTunes' : store}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-4 pr-4 whitespace-nowrap"
            initial={{ x: "-50%" }}
            animate={{ x: [ "-50%", 0] }}
            transition={{ 
              duration: 45, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {row2.map((store, i) => (
              <div
                key={`row2-${store}-${i}`}
                className="group flex flex-row items-center gap-4 px-6 py-4 min-w-[200px] rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-blue/30 transition-all duration-300"
              >
                <DSPIcon name={store as any} size={24} className="!p-1" />
                <span className="text-sm font-bold text-gray-300 group-hover:text-white capitalize tracking-wide transition-colors">
                  {store === 'jiosaavn' ? 'JioSaavn' : store === 'itunes' ? 'iTunes' : store}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Fade Gradients for Edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default FeatureSection;
