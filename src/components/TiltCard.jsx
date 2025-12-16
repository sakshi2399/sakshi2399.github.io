import React from 'react';
import { useTilt } from '../hooks/useTilt.js';

export const TiltCard = ({ children, className = '' }) => {
  const tiltRef = useTilt(true);
  return (
    <div ref={tiltRef} className={`relative transform-gpu transition-all duration-200 ease-out ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none mix-blend-overlay" />
      {children}
    </div>
  );
};
