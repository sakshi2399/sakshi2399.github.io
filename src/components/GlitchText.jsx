import React from 'react';

export const GlitchText = ({ text, className = '' }) => (
  <div className={`relative group inline-block ${className}`}>
    <span className="relative z-10">{text}</span>
    <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-100 mix-blend-screen animate-pulse">
      {text}
    </span>
    <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-100 mix-blend-screen animate-pulse delay-75">
      {text}
    </span>
  </div>
);
