import React from 'react';

export default function GridOverlay({ className = "" }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Dotted route lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1" fill="#14B8A6" />
          </pattern>
          <pattern id="lines" width="120" height="120" patternUnits="userSpaceOnUse">
            <line x1="0" y1="60" x2="120" y2="60" stroke="#14B8A6" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="60" y1="0" x2="60" y2="120" stroke="#14B8A6" strokeWidth="0.5" strokeDasharray="4 4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#lines)" />
      </svg>
      
      {/* Connection nodes */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400/20 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-teal-400/15 rounded-full animate-pulse delay-300" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-teal-400/20 rounded-full animate-pulse delay-700" />
    </div>
  );
}