
import React from 'react';
import { DSPIconName } from '../types';

/**
 * Mapping our app's internal names to the exact filenames in @akashsarker/dsp-icons
 */
const getIconUrl = (name: DSPIconName): string => {
    const baseUrl = "https://unpkg.com/@akashsarker/dsp-icons/icons/";
    
    // Normalization mapping
    const mapping: Record<string, string> = {
        'jiosaavn': 'saavn',
        'saavn': 'saavn',
        'youtube-music': 'youtube-music',
        '7digital': '7digital',
        'tuneglobal': 'tune-global'
    };
    
    let fileName = mapping[name] || name;
    return `${baseUrl}${fileName}.svg`;
};

interface DSPIconProps {
  name: DSPIconName;
  size?: number;
  className?: string;
  showText?: boolean;
}

const DSPIcon: React.FC<DSPIconProps> = ({ name, size = 32, className = "", showText = false }) => {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div 
      className={`relative flex items-center justify-center rounded-full bg-white/5 border border-white/10 p-2 backdrop-blur-sm group transition-all duration-300 hover:border-brand-green/50 hover:shadow-[0_0_15px_rgba(114,255,79,0.3)] ${className}`}
      style={{ width: size * 1.6, height: size * 1.6 }}
    >
      {!hasError ? (
        <img 
          src={getIconUrl(name)} 
          alt={name} 
          style={{ width: size, height: size }}
          className="object-contain transition-transform group-hover:scale-110"
          onError={() => setHasError(true)}
        />
      ) : (
        // Fallback to a stylized placeholder if icon is missing
        <div style={{ width: size, height: size }} className="flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 opacity-50">
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
            </svg>
        </div>
      )}
    </div>
  );
};

export default DSPIcon;
