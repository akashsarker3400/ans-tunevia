
import React from 'react';
import { Twitter, Instagram, Facebook, Youtube, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'publishing' | 'services' | 'faq' | 'video' | 'pricing' | 'youtube-cms' | 'distribution-partners') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <button onClick={() => onNavigate?.('home')} className="text-2xl font-bold font-heading tracking-tighter flex items-center gap-2 mb-6 text-left">
              <span className="text-brand-green">Tune</span>
              <span>Via</span>
            </button>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering independent artists with worldwide distribution, publishing admin, and transparent royalty collection.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green/20 hover:text-brand-green transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green/20 hover:text-brand-green transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green/20 hover:text-brand-green transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green/20 hover:text-brand-green transition-all"><Youtube size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => onNavigate?.('home')} className="hover:text-white transition-colors text-left">Distribution</button></li>
              <li><button onClick={() => onNavigate?.('distribution-partners')} className="hover:text-brand-green transition-colors text-left flex items-center gap-2">Distribution Partners</button></li>
              <li><button onClick={() => onNavigate?.('video')} className="hover:text-white transition-colors text-left">Video Distribution</button></li>
              <li><button onClick={() => onNavigate?.('youtube-cms')} className="hover:text-red-500 transition-colors text-left flex items-center gap-2">YouTube Monetization</button></li>
              <li><button onClick={() => onNavigate?.('services')} className="hover:text-white transition-colors text-left">Core Services</button></li>
              <li><button onClick={() => onNavigate?.('publishing')} className="hover:text-white transition-colors text-left">Publishing Admin</button></li>
              <li><button onClick={() => onNavigate?.('pricing')} className="hover:text-white transition-colors text-left">Detailed Pricing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Support</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => onNavigate?.('faq')} className="hover:text-white transition-colors text-left">Help & FAQ</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Distribution Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Royalty FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Copyright Infringement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© TuneVia 2026. All rights reserved.</p>
          <p>Designed for the next generation of music creators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
