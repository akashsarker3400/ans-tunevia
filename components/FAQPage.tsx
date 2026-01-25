
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Minus, 
  Search, 
  Globe, 
  DollarSign, 
  FileText, 
  ShieldCheck, 
  Youtube,
  Music,
  ArrowRight
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Distribution', 'Royalties', 'Publishing', 'Metadata', 'YouTube/MCN'];

  const faqs: FAQItem[] = [
    {
      category: 'Distribution',
      question: 'How long does it take for my music to go live on Spotify?',
      answer: 'Once you submit your release, our quality control team reviews it within 24-48 hours. After approval, it typically takes 7-14 days for music to appear on all major platforms like Spotify, Apple Music, and Amazon.'
    },
    {
      category: 'Distribution',
      question: 'Which music stores do you distribute to?',
      answer: 'TuneVia distributes your music to 250+ stores globally, including Spotify, Apple Music, TikTok, Instagram, Amazon, Tidal, and Deezer, plus regional platforms like JioSaavn and Gaana.'
    },
    {
      category: 'Royalties',
      question: 'What is the royalty share for independent artists?',
      answer: 'TuneVia offers a 100% royalty share on subscription plans. For standard distribution, we use an 80/20 split in favor of the artist, ensuring you keep most of your earnings.'
    },
    {
      category: 'Publishing',
      question: 'Do I keep my copyrights with TuneVia Publishing?',
      answer: 'Yes, TuneVia acts as an administrator only. You retain 100% ownership of your underlying copyrights and master recordings.'
    },
    {
      category: 'YouTube/MCN',
      question: 'How do I monetize my YouTube channel through TuneVia?',
      answer: 'We offer Content ID services and MCN linkage for eligible channels. This allows you to claim revenue from user-generated content and protect your rights on the platform.'
    }
  ];

  // Inject FAQ Structured Data for Google
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema');
      if (existingScript) document.head.removeChild(existingScript);
    };
  }, []);

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const getCategoryIcon = (cat: string) => {
    switch(cat) {
      case 'Distribution': return <Globe size={18} />;
      case 'Royalties': return <DollarSign size={18} />;
      case 'Publishing': return <FileText size={18} />;
      case 'YouTube/MCN': return <Youtube size={18} />;
      case 'Metadata': return <Music size={18} />;
      default: return <Plus size={18} />;
    }
  };

  return (
    <article className="pt-24 bg-brand-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white/[0.03] to-transparent border-b border-white/5" aria-labelledby="faq-title">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 id="faq-title" className="text-4xl md:text-6xl font-heading font-bold mb-6">Music Distribution <span className="text-brand-green">Help Center</span></h1>
            <p className="text-gray-400 text-lg mb-10">Find answers to questions about royalties, publishing, and global store delivery.</p>
            
            <div className="relative max-w-xl mx-auto">
              <label htmlFor="faq-search" className="sr-only">Search help questions</label>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} aria-hidden="true" />
              <input 
                id="faq-search"
                type="text" 
                placeholder="Search for keywords (e.g. 'Royalties', 'Spotify')" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white focus:border-brand-green/50 focus:outline-none transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Categories */}
            <nav className="lg:w-1/4" aria-label="FAQ categories">
              <div className="sticky top-32 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6 pl-4">Filter by Service</h3>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeCategory === cat ? 'bg-brand-green text-brand-black font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                  >
                    {activeCategory === cat ? <ArrowRight size={18} /> : getCategoryIcon(cat)}
                    {cat}
                  </button>
                ))}
              </div>
            </nav>

            {/* FAQ Items */}
            <div className="lg:w-3/4 space-y-4">
              <AnimatePresence mode='popLayout'>
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, idx) => {
                    const isOpen = openItems.includes(idx);
                    return (
                      <div
                        key={faq.question}
                        className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'bg-white/5 border-white/20' : 'border-white/5 bg-transparent'}`}
                      >
                        <button
                          onClick={() => toggleItem(idx)}
                          className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-brand-green/20 rounded-2xl"
                          aria-expanded={isOpen}
                        >
                          <h2 className="text-lg font-bold pr-8">{faq.question}</h2>
                          <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-green' : 'text-gray-500'}`}>
                            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                          </div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                    <Search size={48} className="mx-auto text-gray-600 mb-4" />
                    <p className="text-xl font-bold text-gray-400">No results found for your search.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default FAQPage;
