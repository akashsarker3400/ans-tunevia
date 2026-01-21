
import React, { useState } from 'react';
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
      question: 'How long does it take for my music to go live?',
      answer: 'Once you submit your release, our quality control team reviews it within 24-48 hours. After approval, it typically takes 7-14 days for music to appear on all major platforms like Spotify, Apple Music, and Amazon. We recommend uploading at least 3 weeks before your release date to ensure everything is ready for a professional launch.'
    },
    {
      category: 'Distribution',
      question: 'Which stores do you distribute to?',
      answer: 'TuneVia distributes your music to 250+ stores globally, including Spotify, Apple Music, TikTok, Instagram, Amazon, Tidal, and Deezer. We also have specialized distribution for regional markets like JioSaavn, Gaana, and Wynk in India, and Shadhin in Bangladesh.'
    },
    {
      category: 'Distribution',
      question: 'Can I release cover songs through TuneVia?',
      answer: 'Yes! You can distribute cover songs. However, you must ensure you have the appropriate mechanical licenses if required by specific territories. TuneVia handles the digital distribution, but artists are responsible for ensuring they have rights to the composition.'
    },
    {
      category: 'Royalties',
      question: 'How much royalty share do I keep?',
      answer: 'TuneVia offers a highly competitive model. Under our Artist and Label lifetime plans, you keep 100% of your ownership. For standard distribution, we offer an 80/20 split in your favor, which is among the best in the industry for the level of global tech infrastructure we provide.'
    },
    {
      category: 'Royalties',
      question: 'When and how do I get paid?',
      answer: 'Royalties are reported monthly. Most stores report earnings 2-3 months after the stream occurs. You can withdraw your earnings once you reach our minimum threshold of $50 via Payoneer, direct Bank Transfer, or PayPal.'
    },
    {
      category: 'Publishing',
      question: 'What is Publishing Administration and why do I need it?',
      answer: 'Distribution collects royalties for your sound recording (master). Publishing collects royalties for the underlying composition (lyrics and melody). If you write your own songs, you are owed additional "mechanical" and "performance" royalties every time your song is streamed or performed. TuneVia Publishing Admin registers your work worldwide to collect these additional earnings.'
    },
    {
      category: 'YouTube/MCN',
      question: 'How does Content ID work?',
      answer: 'Content ID is a fingerprinting system that allows us to identify and monetize videos that use your music. When someone uploads a video containing your song, our system automatically places a claim, ensuring the resulting ad revenue is directed to you.'
    },
    {
      category: 'YouTube/MCN',
      question: 'Can I get an Official Artist Channel (OAC)?',
      answer: 'Yes! TuneVia can request an Official Artist Channel (the one with the music note icon) for you on YouTube. You generally need at least 3 official releases delivered by us to YouTube Music to be eligible.'
    },
    {
      category: 'Metadata',
      question: 'What audio format should I upload?',
      answer: 'We require high-quality audio: 16-bit or 24-bit WAV files (44.1 kHz or higher). We do not accept MP3s for distribution as platforms require lossless audio to ensure the best listening experience for fans.'
    },
    {
      category: 'Metadata',
      question: 'What are the artwork requirements?',
      answer: 'Artwork must be a perfect square, at least 3000 x 3000 pixels, in JPG or PNG format. It should not contain social media handles, website URLs, or logos of other stores. It must be high-quality and not blurred.'
    },
    {
      category: 'Publishing',
      question: 'Is Publishing Administration exclusive?',
      answer: 'Our Publishing Administration service is a "Collection Only" agreement. You retain 100% ownership of your copyrights. It is an exclusive administration agreement for the territories you choose, meaning only one entity can collect these specific royalties on your behalf to avoid conflicts.'
    }
  ];

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
    <div className="pt-24 bg-brand-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white/[0.03] to-transparent border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">How can we <span className="text-brand-green">help you?</span></h1>
            <p className="text-gray-400 text-lg mb-10">Everything you need to know about distributing, managing, and monetizing your music worldwide.</p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="text" 
                placeholder="Search for questions (e.g. 'Spotify', 'Payouts')" 
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
            <div className="lg:w-1/4">
              <div className="sticky top-32 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6 pl-4">Categories</h3>
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
            </div>

            {/* FAQ Items */}
            <div className="lg:w-3/4 space-y-4">
              <AnimatePresence mode='popLayout'>
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, idx) => {
                    const isOpen = openItems.includes(idx);
                    return (
                      <motion.div
                        layout
                        key={faq.question}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'bg-white/5 border-white/20' : 'border-white/5 bg-transparent'}`}
                      >
                        <button
                          onClick={() => toggleItem(idx)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="text-lg font-bold pr-8">{faq.question}</span>
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
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                    <Search size={48} className="mx-auto text-gray-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-400">No results found</h3>
                    <p className="text-gray-600">Try searching with different keywords or browse all categories.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-brand-green/5">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto p-12 rounded-[3rem] bg-brand-black border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl font-heading font-bold mb-6">Still have questions?</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">If you couldn't find the answer you were looking for, our professional support team is ready to help you navigate your music career.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-brand-green text-brand-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">Contact Support</button>
                <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">Help Center</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
