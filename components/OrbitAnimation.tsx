
import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';
import DSPIcon from './DSPIcon';
import { DSPIconName } from '../types';

const OrbitAnimation: React.FC = () => {
  const innerIcons: DSPIconName[] = ['spotify', 'itunes', 'youtube', 'tiktok'];
  const outerIcons: DSPIconName[] = ['amazon', 'tidal', 'boomplay', 'jiosaavn', 'anghami', 'tencent'];

  return (
    <div className="relative w-full aspect-square flex items-center justify-center max-w-[600px] mx-auto">
      {/* Background Glows */}
      <div className="absolute w-3/4 h-3/4 bg-brand-blue/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute w-1/2 h-1/2 bg-brand-purple/10 rounded-full blur-[80px]" />

      {/* Center Symbol */}
      <motion.div 
        className="relative z-20 w-24 h-24 md:w-32 md:h-32 bg-brand-black border-2 border-brand-green/30 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(114,255,79,0.2)]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="absolute inset-0 bg-brand-green/5 rounded-full blur-xl" />
        <DollarSign size={48} className="text-brand-green drop-shadow-[0_0_10px_rgba(114,255,79,0.5)]" />
      </motion.div>

      {/* Inner Ring */}
      <motion.div 
        className="absolute w-[55%] h-[55%] border border-white/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {innerIcons.map((icon, idx) => {
          const angle = (idx / innerIcons.length) * (2 * Math.PI);
          const x = Math.cos(angle) * 50;
          const y = Math.sin(angle) * 50;
          return (
            <motion.div
              key={icon}
              className="absolute"
              style={{ left: `${50 + x}%`, top: `${50 + y}%`, transform: 'translate(-50%, -50%)' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <DSPIcon name={icon} size={28} />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Outer Ring */}
      <motion.div 
        className="absolute w-[85%] h-[85%] border border-white/5 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {outerIcons.map((icon, idx) => {
          const angle = (idx / outerIcons.length) * (2 * Math.PI);
          const x = Math.cos(angle) * 50;
          const y = Math.sin(angle) * 50;
          return (
            <motion.div
              key={icon}
              className="absolute"
              style={{ left: `${50 + x}%`, top: `${50 + y}%`, transform: 'translate(-50%, -50%)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <DSPIcon name={icon} size={30} />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Floating Sparkles/Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{ opacity: 0.1, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.5, 0.1], 
            scale: [0, 1.2, 0],
            x: [Math.random() * 400 - 200, Math.random() * 400 - 200],
            y: [Math.random() * 400 - 200, Math.random() * 400 - 200]
          }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default OrbitAnimation;
