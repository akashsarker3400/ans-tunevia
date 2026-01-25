
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import OrbitAnimation from './OrbitAnimation';

interface HeroProps {
  onGetStarted?: () => void;
  onLearnMore?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted, onLearnMore }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center" aria-labelledby="hero-heading">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-green text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
              Empowering Independent Artists Globally
            </div>
            
            <h1 id="hero-heading" className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
              Distribute Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple">
                Music Worldwide
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              Upload your songs to Spotify, Apple Music, TikTok, and 250+ stores. 
              Keep 100% ownership and collect global royalties with the industry's most advanced distribution rails.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <button 
                onClick={onGetStarted}
                className="bg-brand-green text-brand-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95 shadow-[0_0_25px_rgba(114,255,79,0.4)]" aria-label="Start music distribution"
              >
                Get Started
              </button>
              <button 
                onClick={onLearnMore}
                className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors" aria-label="Learn about our services"
              >
                Learn More
              </button>
            </div>
            
            <div className="space-y-3">
              {[
                "Unlimited Releases - All Platforms",
                "Keep 100% of your earnings & rights",
                "No major label contract required"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 size={18} className="text-brand-green" aria-hidden="true" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
            aria-hidden="true"
          >
            <OrbitAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
