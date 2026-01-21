
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, User, DollarSign, Award, Headphones, CheckCircle } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const reasons = [
    {
      icon: <Zap className="text-brand-green" size={32} />,
      title: "Fast Distribution",
      desc: "Your music goes live on all platforms within 24-48 hours."
    },
    {
      icon: <User className="text-brand-blue" size={32} />,
      title: "Artist-First Approach",
      desc: "We're built by artists, for artists. Your success is our success."
    },
    {
      icon: <DollarSign className="text-brand-purple" size={32} />,
      title: "Quick Payments",
      desc: "Get paid monthly with no minimum threshold requirements."
    },
    {
      icon: <Award className="text-white" size={32} />,
      title: "Industry Recognition",
      desc: "Trusted by over 100,000 artists and labels worldwide."
    },
    {
      icon: <Headphones className="text-brand-green" size={32} />,
      title: "Dedicated Support",
      desc: "Our team is available 24/7 to help you with any questions."
    },
    {
      icon: <CheckCircle className="text-brand-blue" size={32} />,
      title: "Quality Standards",
      desc: "We ensure your music meets all platform quality requirements."
    }
  ];

  return (
    <section className="py-24 bg-brand-black/30 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Why artists choose <span className="text-brand-green">TuneVia</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Join thousands of artists who trust us with their music distribution.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-brand-green/30 hover:bg-white/[0.05] transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
