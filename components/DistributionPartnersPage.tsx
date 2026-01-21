
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Zap, Shield, ArrowUpRight, Filter, Info } from 'lucide-react';
import DSPIcon from './DSPIcon';
import { DSPIconName } from '../types';

const DistributionPartnersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const partners: { name: string; id: DSPIconName; category: string; region: string }[] = [
    { name: '7digital', id: '7digital', category: 'Download/Stream', region: 'Global' },
    { name: 'AGEDI', id: 'agedi', category: 'Licensing', region: 'Europe' },
    { name: 'AliMusic', id: 'alimusic', category: 'Streaming', region: 'China' },
    { name: 'Amazon Music', id: 'amazon', category: 'Streaming', region: 'Global' },
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
    { name: 'Hook', id: 'hook', category: 'Social', region: 'Global' },
    { name: 'Hungama', id: 'hungama', category: 'Streaming', region: 'India' },
    { name: 'iHeartRadio', id: 'iheart', category: 'Radio', region: 'USA' },
    { name: 'iMusica', id: 'imusica', category: 'Streaming', region: 'LATAM' },
    { name: 'iTunes', id: 'itunes', category: 'Download', region: 'Global' },
    { name: 'Jaxsta', id: 'jaxsta', category: 'Metadata', region: 'Global' },
    { name: 'JOOX', id: 'joox', category: 'Streaming', region: 'Asia' },
    { name: 'KKBOX', id: 'kkbox', category: 'Streaming', region: 'Asia' },
    { name: 'Kuaishou', id: 'kuaishou', category: 'Social', region: 'China' },
    { name: 'Kugou', id: 'kugou', category: 'Streaming', region: 'China' },
    { name: 'Kuwo', id: 'kuwo', category: 'Streaming', region: 'China' },
    { name: 'Lickd', id: 'lickd', category: 'Licensing', region: 'Global' },
    { name: 'Line Music', id: 'linemusic', category: 'Streaming', region: 'Japan' },
    { name: 'Lissen', id: 'lissen', category: 'Streaming', region: 'Global' },
    { name: 'Mixcloud', id: 'mixcloud', category: 'Radio', region: 'Global' },
    { name: 'MOOV', id: 'moov', category: 'Streaming', region: 'Hong Kong' },
    { name: 'Napster', id: 'napster', category: 'Streaming', region: 'Global' },
    { name: 'NetEase Cloud Music', id: 'netease', category: 'Streaming', region: 'China' },
    { name: 'Nuuday', id: 'nuuday', category: 'Streaming', region: 'Nordics' },
    { name: 'Pandora', id: 'pandora', category: 'Radio', region: 'USA' },
    { name: 'Peloton', id: 'peloton', category: 'Fitness', region: 'Global' },
    { name: 'Qobuz', id: 'qobuz', category: 'Hi-Fi', region: 'Global' },
    { name: 'JioSaavn', id: 'saavn', category: 'Streaming', region: 'India' },
    { name: 'Shazam', id: 'shazam', category: 'Discovery', region: 'Global' },
    { name: 'Snapchat', id: 'snap', category: 'Social', region: 'Global' },
    { name: 'SoundCloud', id: 'soundcloud', category: 'Streaming', region: 'Global' },
    { name: 'SoundExchange', id: 'soundexchange', category: 'Rights', region: 'USA' },
    { name: 'Spotify', id: 'spotify', category: 'Streaming', region: 'Global' },
    { name: 'Tencent Music', id: 'tencent', category: 'Streaming', region: 'China' },
    { name: 'Tidal', id: 'tidal', category: 'Hi-Fi', region: 'Global' },
    { name: 'TikTok', id: 'tiktok', category: 'Social', region: 'Global' },
    { name: 'Trebel', id: 'trebel', category: 'Streaming', region: 'Global' },
    { name: 'TuneGlobal', id: 'tuneglobal', category: 'Technical', region: 'Global' },
    { name: 'VEVO', id: 'vevo', category: 'Video', region: 'Global' },
    { name: 'VK Music', id: 'vkmusic', category: 'Social', region: 'CIS' },
    { name: 'WeChat', id: 'wechat', category: 'Social', region: 'China' },
    { name: 'YouTube Music', id: 'youtube-music', category: 'Streaming', region: 'Global' },
    { name: 'YouTube Content ID', id: 'youtube', category: 'Rights', region: 'Global' },
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
    <div className="bg-brand-black min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-20">
          <span className="px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-bold tracking-[0.3em] uppercase mb-8 inline-block">
            Global Network
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-[1.1] tracking-tighter">
            WHERE YOUR <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple">
              MUSIC TRAVELS.
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Our supply chain reaches over 250+ digital service providers worldwide. 
            From global giants to niche regional innovators, we ensure your sounds hit every corner of the map.
          </p>

          <div className="relative max-w-xl mx-auto group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-green transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by store name, region, or category..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-5 pl-14 pr-6 text-white focus:border-brand-green/50 focus:outline-none transition-all placeholder:text-gray-600 focus:shadow-[0_0_20px_rgba(114,255,79,0.1)]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div {...fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-20">
            {[
                { label: 'Total DSPs', value: '250+', icon: <Globe size={18}/> },
                { label: 'Territories', value: '190+', icon: <Zap size={18}/> },
                { label: 'Content ID', value: 'Enabled', icon: <Shield size={18}/> },
                { label: 'Delivery Speed', value: '24-48h', icon: <ArrowUpRight size={18}/> }
            ].map((stat, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 text-center flex flex-col items-center justify-center gap-2">
                    <div className="text-brand-green mb-1">{stat.icon}</div>
                    <div className="text-2xl font-bold font-heading text-white">{stat.value}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
            ))}
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredPartners.map((partner, i) => (
              <motion.div
                layout
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-brand-green/30 hover:bg-white/[0.05] transition-all flex flex-col items-center justify-center text-center overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
                
                <DSPIcon name={partner.id} size={36} className="mb-6 !p-0 !bg-transparent !border-none !backdrop-blur-none group-hover:scale-110 transition-transform" />
                
                <div className="relative z-10">
                    <h3 className="text-sm font-bold text-white mb-2 leading-tight px-2">{partner.name}</h3>
                    <div className="flex flex-col gap-1">
                        <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{partner.category}</span>
                        <span className="text-[9px] text-brand-blue/70 uppercase tracking-tighter">{partner.region}</span>
                    </div>
                </div>

                {/* Info Tooltip Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Info size={12} className="text-gray-600" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPartners.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-center py-32"
          >
            <div className="text-gray-600 mb-4 flex justify-center"><Search size={48} /></div>
            <h3 className="text-xl font-bold text-gray-500">No distribution partners found</h3>
            <p className="text-gray-600 mt-2">Try adjusting your search criteria or check back later for new additions.</p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div 
          {...fadeInUp}
          className="mt-32 p-12 lg:p-20 rounded-[4rem] bg-gradient-to-br from-brand-green/10 via-brand-black to-brand-blue/10 border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0A_100%)] opacity-40 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Ready to Go Global?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Join TuneVia and push your sounds to every platform listed above, and many more. 
              The future of music distribution is decentralized, fast, and global.
            </p>
            <button className="bg-brand-green text-brand-black px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(114,255,79,0.3)] flex items-center gap-3 mx-auto">
              Onboard Now <ArrowUpRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DistributionPartnersPage;
