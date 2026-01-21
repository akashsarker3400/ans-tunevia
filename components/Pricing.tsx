
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Artist",
      price: "$9.99",
      period: "year",
      description: "Perfect for independent artists just getting started.",
      features: [
        "Unlimited releases",
        "80+ streaming platforms",
        "Keep 100% royalties",
        "Basic analytics",
        "ISRC & UPC codes",
        "Release scheduling"
      ]
    },
    {
      name: "Label",
      price: "$39.99",
      period: "year",
      description: "For labels and artists with multiple releases.",
      features: [
        "Everything in Artist",
        "Up to 10 artists",
        "YouTube Content ID",
        "Advanced analytics",
        "Priority support",
        "Custom label name",
        "Spotify verification"
      ],
      isFeatured: true
    },
    {
      name: "Professional",
      price: "$99.99",
      period: "year",
      description: "For established artists and large labels.",
      features: [
        "Everything in Label",
        "Unlimited artists",
        "VEVO channel",
        "Publishing admin",
        "Sync licensing",
        "Dedicated manager",
        "API access",
        "White-label options"
      ]
    }
  ];

  return (
    <section className="py-24 relative" id="pricing">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Simple, Annual Pricing</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Transparent plans designed for every stage of your music career. 
          The most artist-friendly distribution model in the industry.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative p-8 lg:p-10 rounded-[2.5rem] text-left border transition-all duration-300 flex flex-col ${
                plan.isFeatured 
                ? 'bg-[#151515] border-brand-green/50 shadow-[0_0_40px_rgba(114,255,79,0.1)] scale-105 z-10' 
                : 'bg-[#0F0F0F] border-white/5 hover:border-white/10'
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-green text-brand-black text-[10px] font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold font-heading">{plan.price}</span>
                  <span className="text-gray-500 font-medium">/{plan.period}</span>
                </div>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed px-4">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-brand-green/20 flex items-center justify-center">
                      <Check size={10} className="text-brand-green" />
                    </div>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                plan.isFeatured 
                ? 'bg-brand-green text-brand-black hover:shadow-[0_0_20px_rgba(114,255,79,0.4)]' 
                : 'bg-white/5 text-white hover:bg-white/10'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple relative overflow-hidden group">
          <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/10 transition-colors" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Stream & Distribute Your Music <br /> Without a Label
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
               <button className="bg-white text-brand-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                  Get Started
               </button>
               <button className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                  View Detailed Pricing
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
