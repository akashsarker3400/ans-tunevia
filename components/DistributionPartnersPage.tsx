
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Zap, Shield, ArrowUpRight, Filter, Info } from 'lucide-react';
import DSPIcon from './DSPIcon';
import { DSPIconName } from '../types';

interface DistributionPartnersPageProps {
  onGetStarted?: () => void;
}

const DistributionPartnersPage: React.FC<DistributionPartnersPageProps> = ({ onGetStarted }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const partners: { name: string; id: DSPIconName; category: string; region: string }[] = [
    { name: 'Spotify', id: 'spotify', category: 'Streaming', region: 'Global' },
    { name: 'Apple Music', id: 'itunes', category: 'Download/Stream', region: 'Global' },
    { name: 'Amazon Music', id: 'amazon', category: 'Streaming', region: 'Global' },
    { name: 'TikTok', id: 'tiktok', category: 'Social', region: 'Global' },
    { name: 'YouTube Music', id: 'youtube-music', category: 'Streaming', region: 'Global' },
    { name: 'Tidal', id: 'tidal', category: 'Hi-Fi', region: 'Global' },
    { name: '7digital', id: '7digital', category: 'Download/Stream', region: 'Global' },
    { name: 'AGEDI', id: 'agedi', category: 'Licensing', region: 'Europe' },
    { name: 'AliMusic', id: 'alimusic', category: 'Streaming', region: 'China' },
    { name: 'Anghami', id: 'anghami', category: 'Streaming', region: 'MENA' },
    { name: 'Audiomack', id: 'audiomack', category: 'Streaming', region: 'Global' },
    { name: 'AWA', id: 'awa', category: 'Streaming', region: 'Japan' },
    { name: 'Bandcamp', id: 'bandcamp', category: 'Store', region: 'Global' },
    { name: 'Boomplay', id: 'boomplay', category: 'Streaming', region: 'Africa' },
    { name: 'Canva', id: 'canva', category: 'Sync', region: 'Global' },
    { name: 'CapCut', id: 'capcut', category: 'Social', region: 'Global' },
    { name: 'Deezer', id: 'deezer', category: 'Streaming', region: 'Global' },
    { name: 'Douyin', id: 'douyin', category: 'Social', region: 'China' },
    { name: 'Facebook', id: 'facebook', category: 'Social', region: 'Global' },
    { name: 'FLO', id: 'flo', category: 'Streaming', region: 'Korea' },
    { name: 'Gaana', id: 'gaana', category: 'Streaming', region: 'India' },
    { name: 'JioSaavn', id: 'saavn', category: 'Streaming', region: 'India' },
    { name: 'Shazam', id: 'shazam', category: 'Discovery', region: 'Global' },
    { name: 'Snapchat', id: 'snap', category: 'Social', region: 'Global' },
    { name: 'SoundCloud', id: 'soundcloud', category: 'Streaming', region: 'Global' },
    { name: 'VEVO', id: 'vevo', category: 'Video', region: 'Global' },
    { name: 'WeChat', id: 'wechat', category: 'Social', region: 'China' },
  ];

  const filteredPartners = partners.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <article className="bg-brand-black min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-20">
          <span className="px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-bold tracking-[0.3em] uppercase mb-8 inline-block">
            Global Music Network
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-[1.1] tracking-tighter">
            250+ Digital Store <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple">
              Distribution Partners.
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            From major DSPs to regional giants, we ensure your music travels to every corner of the map, including Spotify, TikTok, and Tencent.
          </p>

          <div className="relative max-w-xl mx-auto group">
            <label htmlFor="store-search" className="sr-only">Search distribution stores</label>
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-green transition-colors" size={20} aria-hidden="true" />
            <input 
              id="store-search"
              type="text" 
              placeholder="Search by store name, country, or genre focus..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-5 pl-14 pr-6 text-white focus:border-brand-green/50 focus:outline-none transition-all placeholder:text-gray-600 focus:shadow-[0_0_20px_rgba(114,255,79,0.1)]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Partners Grid */}
        <section aria-label="List of supported stores">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <AnimatePresence mode='popLayout'>
              {filteredPartners.map((partner) => (
                <motion.div
                  layout
                  key={partner.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-brand-green/30 hover:bg-white/[0.05] transition-all flex flex-col items-center justify-center text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
                  
                  <DSPIcon name={partner.id} size={36} className="mb-6 !p-0 !bg-transparent !border-none !backdrop-blur-none group-hover:scale-110 transition-transform" />
                  
                  <div className="relative z-10">
                      <h3 className="text-sm font-bold text-white mb-2 leading-tight px-2">{partner.name}</h3>
                      <div className="flex flex-col gap-1">
                          <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{partner.category}</span>
                          <span className="text-[9px] text-brand-blue/70 uppercase tracking-tighter">{partner.region} Distribution</span>
                      </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Bottom SEO Section */}
        <section className="mt-32 p-12 lg:p-20 rounded-[4rem] bg-gradient-to-br from-brand-green/10 via-brand-black to-brand-blue/10 border border-white/10 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Reach Your Fans Globally.</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              We provide the digital supply chain needed to launch your music career on Spotify, Apple Music, and beyond. 
              Join thousands of artists pushing their sounds worldwide with TuneVia.
            </p>
            <button 
              onClick={onGetStarted}
              className="bg-brand-green text-brand-black px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(114,255,79,0.3)] flex items-center gap-3 mx-auto"
              aria-label="Start distributing music globally"
            >
              Start Your Release <ArrowUpRight size={24} />
            </button>
          </div>
        </section>
      </div>
    </article>
  );
};

export default DistributionPartnersPage;
