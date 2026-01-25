
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'publishing' | 'services' | 'faq' | 'video' | 'pricing' | 'login' | 'signup') => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: any, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button onClick={() => handleNav('home')} className="text-2xl font-bold font-heading tracking-tighter flex items-center gap-2">
          <span className="text-brand-green">Tune</span>
          <span>Via</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <button onClick={() => handleNav('home')} className={`hover:text-brand-green transition-colors ${currentPage === 'home' ? 'text-brand-green' : ''}`}>Home</button>
          <button onClick={() => handleNav('services')} className={`hover:text-brand-green transition-colors ${currentPage === 'services' ? 'text-brand-green' : ''}`}>Services</button>
          <button onClick={() => handleNav('video')} className={`hover:text-brand-green transition-colors ${currentPage === 'video' ? 'text-brand-green' : ''}`}>Video</button>
          <button onClick={() => handleNav('publishing')} className={`hover:text-brand-green transition-colors ${currentPage === 'publishing' ? 'text-brand-green' : ''}`}>Publishing</button>
          <button onClick={() => handleNav('faq')} className={`hover:text-brand-green transition-colors ${currentPage === 'faq' ? 'text-brand-green' : ''}`}>FAQ</button>
          <button onClick={() => handleNav('pricing')} className={`hover:text-brand-green transition-colors ${currentPage === 'pricing' ? 'text-brand-green' : ''}`}>Pricing</button>
          
          <div className="flex items-center gap-6 ml-4 border-l border-white/10 pl-8">
            <button 
              onClick={() => handleNav('login')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Log In
            </button>
            <button 
              onClick={() => handleNav('signup')}
              className="bg-brand-green text-brand-black px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-[0_0_20px_rgba(114,255,79,0.3)]"
            >
              Get Started
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-black border-b border-white/10 p-6 flex flex-col gap-6 md:hidden animate-in slide-in-from-top duration-300">
          <button onClick={() => handleNav('home')} className="text-left py-2 font-medium">Home</button>
          <button onClick={() => handleNav('services')} className="text-left py-2 font-medium">Services</button>
          <button onClick={() => handleNav('video')} className="text-left py-2 font-medium">Video</button>
          <button onClick={() => handleNav('publishing')} className="text-left py-2 font-medium">Publishing</button>
          <button onClick={() => handleNav('faq')} className="text-left py-2 font-medium">FAQ</button>
          <button onClick={() => handleNav('pricing')} className="text-left py-2 font-medium">Pricing</button>
          <hr className="border-white/5" />
          <button onClick={() => handleNav('login')} className="text-left py-2 font-medium text-brand-blue">Log In</button>
          <button onClick={() => handleNav('signup')} className="bg-brand-green text-brand-black px-6 py-3 rounded-full font-bold">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
