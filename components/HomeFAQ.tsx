
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const HomeFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does it take for my music to go live?",
      a: "Our review process takes 24-48 hours. After approval, most major platforms like Spotify and Apple Music display your content within 1 to 5 days. For a perfect launch, we recommend uploading 3 weeks in advance."
    },
    {
      q: "Do I keep 100% of my royalties?",
      a: "Yes! On our Artist, Label, and Professional subscription plans, you keep 100% of the royalties collected from distribution. You are the owner, we are the rail."
    },
    {
      q: "What audio formats do you accept?",
      a: "We exclusively accept high-fidelity audio: 16-bit or 24-bit WAV files (44.1 kHz or higher). This ensures your music meets the institutional quality standards of global streaming services."
    },
    {
      q: "Can I release cover songs?",
      a: "Absolutely. You can distribute cover songs through TuneVia. Just ensure you have the appropriate mechanical licensing for the territories where it's required—we handle the technical delivery."
    },
    {
      q: "How and when do I get paid?",
      a: "Royalties are processed monthly. We offer multiple payout pathways including Bank Transfer, PayPal, and Payoneer. Best of all, we have no minimum threshold requirements for your withdrawals."
    },
    {
      q: "Can I switch from another distributor?",
      a: "Yes. Simply upload your music to TuneVia using the same ISRCs and UPCs, then request a takedown from your old distributor once your tracks are live through us to maintain your stream counts."
    },
    {
      q: "What's included in YouTube Content ID?",
      a: "YouTube Content ID allows us to fingerprint your music and claim ad revenue on any video uploaded to YouTube that uses your song, including user-generated content and shorts."
    },
    {
      q: "Do you offer Spotify verification?",
      a: "Yes. As a preferred partner, we provide a streamlined path to claim your Spotify for Artists profile and get that official blue verification checkmark automatically."
    }
  ];

  return (
    <section className="py-24 bg-brand-black" id="home-faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <HelpCircle className="mx-auto text-brand-green mb-4" size={40} />
          <h2 className="text-4xl font-heading font-bold mb-4 uppercase tracking-tighter">Common Questions</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02] hover:border-white/10 transition-colors">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-gray-200 text-lg">{faq.q}</span>
                <div className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-brand-green' : 'text-gray-600'}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
