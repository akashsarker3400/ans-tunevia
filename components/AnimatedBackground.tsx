
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  // Memoize random particle properties to prevent re-renders from changing positions
  const particles = useMemo(() => {
    return [...Array(45)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 12 + Math.random() * 18,
      delay: Math.random() * -20,
      scale: 0.5 + Math.random() * 1,
      opacity: 0.15 + Math.random() * 0.25,
      drift: (Math.random() - 0.5) * 200, // pixels
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-50 bg-brand-black overflow-hidden pointer-events-none">
      {/* Layer 1: The Deep Grid with subtle pulse */}
      <motion.div 
        animate={{ opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)',
          willChange: 'opacity'
        }} 
      />

      {/* Layer 2: Atmospheric Plasma Orbs - Increased Opacity and Blur for high visibility */}
      <motion.div 
        animate={{ 
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.15, 0.9, 1],
          rotate: [0, 90, -90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-brand-green/20 blur-[140px] rounded-full"
        style={{ willChange: 'transform', mixBlendMode: 'screen' }}
      />
      
      <motion.div 
        animate={{ 
          x: [0, -120, 70, 0],
          y: [0, 110, -60, 0],
          scale: [1, 1.25, 0.85, 1],
          rotate: [0, -60, 120, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-25%] right-[-15%] w-[80%] h-[80%] bg-brand-blue/25 blur-[160px] rounded-full"
        style={{ willChange: 'transform', mixBlendMode: 'screen' }}
      />

      <motion.div 
        animate={{ 
          x: [0, 60, -90, 0],
          y: [0, 90, -40, 0],
          opacity: [0.08, 0.15, 0.08],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[30%] right-[15%] w-[50%] h-[50%] bg-brand-purple/20 blur-[150px] rounded-full"
        style={{ willChange: 'transform, opacity', mixBlendMode: 'screen' }}
      />

      {/* Layer 3: Drifting Data Particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ 
              left: p.left, 
              top: '115%',
              opacity: 0,
              scale: p.scale
            }}
            animate={{ 
              top: '-15%',
              x: [0, p.drift, 0],
              opacity: [0, p.opacity, 0]
            }}
            transition={{ 
              top: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
              x: { duration: p.duration / 2, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }
            }}
            className="absolute w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)]"
            style={{ willChange: 'transform, top' }}
          />
        ))}
      </div>

      {/* Layer 4: Digital Texture */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch">
              <animate attributeName="baseFrequency" values="0.7;0.75;0.7" dur="4s" repeatCount="indefinite" />
            </feTurbulence>
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Layer 5: Stronger Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0A_100%)] opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-100 h-1/2 bottom-0" />
    </div>
  );
};

export default AnimatedBackground;
