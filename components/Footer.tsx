
import React from 'react';
import { Twitter, Instagram, Facebook, Youtube, Globe, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="pt-24 pb-12 border-t border-white/5 bg-brand-black/80 backdrop-blur-xl relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <button 
              onClick={() => onNavigate?.('home')} 
              className="text-2xl font-bold font-heading tracking-tighter flex items-center gap-2 mb-8 group"
            >
              <span className="text-brand-green group-hover:drop-shadow-[0_0_8px_rgba(114,255,79,0.5)] transition-all">Tune</span>
              <span className="text-white">Via</span>
            </button>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-[240px]">
              The next-generation digital supply chain for independent artists and record labels worldwide.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Twitter size={18} />, label: 'Twitter' },
                { icon: <Instagram size={18} />, label: 'Instagram' },
                { icon: <Facebook size={18} />, label: 'Facebook' },
                { icon: <Youtube size={18} />, label: 'Youtube' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-green/20 hover:text-brand-green border border-white/5 hover:border-brand-green/30 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="font-bold mb-8 text-white text-xs uppercase tracking-[0.2em]">Platform</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><button onClick={() => onNavigate?.('home')} className="hover:text-white transition-colors text-left flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Global Distribution</button></li>
              <li><button onClick={() => onNavigate?.('distribution-partners')} className="hover:text-white transition-colors text-left flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Partners & DSPs</button></li>
              <li><button onClick={() => onNavigate?.('video')} className="hover:text-white transition-colors text-left flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Video Delivery</button></li>
              <li><button onClick={() => onNavigate?.('youtube-cms')} className="hover:text-white transition-colors text-left flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> YouTube CMS</button></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold mb-8 text-white text-xs uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><button onClick={() => onNavigate?.('home')} className="hover:text-white transition-colors text-left flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> About TuneVia</button></li>
              <li><button onClick={() => onNavigate?.('services')} className="hover:text-white transition-colors text-left flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Core Services</button></li>
              <li><button onClick={() => onNavigate?.('publishing')} className="hover:text-white transition-colors text-left flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Publishing Admin</button></li>
              <li><button onClick={() => onNavigate?.('pricing')} className="hover:text-white transition-colors text-left flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Pricing Plans</button></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-bold mb-8 text-white text-xs uppercase tracking-[0.2em]">Support</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><button onClick={() => onNavigate?.('faq')} className="hover:text-white transition-colors text-left flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Help Center</button></li>
              <li><a href="mailto:support@tunevia.com" className="hover:text-white transition-colors text-left flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Contact Support</a></li>
              <li><button onClick={() => onNavigate?.('faq')} className="hover:text-white transition-colors text-left flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Royalty FAQ</button></li>
              <li><button onClick={() => onNavigate?.('services')} className="hover:text-white transition-colors text-left flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Distribution Guide</button></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-bold mb-8 text-white text-xs uppercase tracking-[0.2em]">Legal</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><button onClick={() => onNavigate?.('terms')} className="hover:text-white transition-colors text-left flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Terms of Service</button></li>
              <li><button onClick={() => onNavigate?.('privacy')} className="hover:text-white transition-colors text-left flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Privacy Policy</button></li>
              <li><button onClick={() => onNavigate?.('dmca')} className="hover:text-white transition-colors text-left flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> DMCA Policy</button></li>
              <li><button onClick={() => onNavigate?.('privacy')} className="hover:text-white transition-colors text-left flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Cookie Policy</button></li>
            </ul>
          </div>

        </div>

        {/* Cleaned Copyright Section */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-gray-500 text-[11px] font-heading tracking-widest font-medium uppercase">
            <p>© 2026 TUNEVIA MUSIC GROUP</p>
            <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
            <p className="opacity-40">ALL RIGHTS RESERVED</p>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5 text-gray-600 text-[9px] font-mono tracking-[0.2em] uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-green/80 animate-pulse shadow-[0_0_8px_rgba(114,255,79,0.4)]" />
              <span>Network: Optimal</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
            <div className="text-gray-700 text-[9px] font-mono tracking-[0.3em] uppercase">
              ID: TV-INFRA-2026
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
