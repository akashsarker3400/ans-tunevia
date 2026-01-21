
import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Music, Wallet } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Upload size={32} className="text-brand-green" />,
      title: "Upload Your Music",
      desc: "Easily upload your tracks or albums quickly and release it worldwide. Apple Music, spotify, iTunes, Amazon and 100+ digital stores for your track to keep playing.",
      color: "brand-green"
    },
    {
      icon: <Music size={32} className="text-brand-blue" />,
      title: "We Release Your Music to Stores",
      desc: "Why wait when you already have your masterpiece? Start selling your music. We release your music worldwide. More stores and streaming services than you have ever heard of.",
      color: "brand-blue"
    },
    {
      icon: <Wallet size={32} className="text-brand-purple" />,
      title: "Get Paid",
      desc: "Begin your music career here. Sell your music and get paid every time your music is played. All you have to do is upload your track and we’ve got it from there. Sell soundtracks online.",
      color: "brand-purple"
    }
  ];

  // Fix: Removed 'viewport' property as it is not part of the Variants type and is already passed as a prop
  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  // Fix: Added 'as const' to the transition type to match AnimationGeneratorType expectations in Framer Motion
  const itemVariants = {
    initial: { opacity: 0, y: 30, scale: 0.9 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 80, damping: 12 }
    }
  };

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden" id="how-it-works">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tighter"
          >
            HOW <span className="text-brand-green">TUNE VIA</span> WORKS
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-brand-green mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            The simplest path from your studio to the world's biggest stages.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid md:grid-cols-3 gap-12 max-w-6xl mx-auto"
        >
          {/* Animated Connecting Line (Desktop Only) */}
          <div className="absolute top-[48px] left-[15%] right-[15%] h-[1px] hidden md:block overflow-hidden pointer-events-none">
            <motion.div 
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="w-full h-full bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple shadow-[0_0_15px_rgba(114,255,79,0.3)]"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step Icon Container */}
              <div className="relative mb-8">
                {/* Pulsing ring background */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: [0.8, 1.3, 0.8], opacity: [0, 0.3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  className={`absolute inset-0 rounded-full bg-brand-green/20`}
                />
                
                <div className={`w-24 h-24 rounded-full bg-brand-black border-2 border-white/10 flex items-center justify-center relative z-10 transition-all duration-500 group-hover:border-brand-green/50 group-hover:shadow-[0_0_30px_rgba(114,255,79,0.2)]`}>
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Step number badge */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white text-brand-black font-bold flex items-center justify-center text-xs shadow-xl z-20">
                  {i + 1}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-green transition-colors duration-300">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs group-hover:text-gray-300 transition-colors">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
