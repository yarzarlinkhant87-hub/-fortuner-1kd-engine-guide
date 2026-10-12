import React from 'react';

interface BrandLogoProps {
  brand: string;
  size?: number;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ brand, size = 20, className = '' }) => {
  const b = (brand || '').toUpperCase();

  if (b.includes('TOYOTA')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <ellipse cx="12" cy="12" rx="10" ry="7" />
        <ellipse cx="12" cy="12" rx="4" ry="7" />
        <ellipse cx="12" cy="9" rx="7" ry="3.5" />
      </svg>
    );
  }

  if (b.includes('ISUZU')) {
    return (
      <span className={`font-black tracking-tighter text-red-500 font-sans ${className}`} style={{ fontSize: size * 0.85 }}>
        ISUZU
      </span>
    );
  }

  if (b.includes('MITSUBISHI')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={`text-red-600 ${className}`}>
        <polygon points="12,2 8,9 16,9" />
        <polygon points="8,9 4,16 12,16" />
        <polygon points="16,9 12,16 20,16" />
      </svg>
    );
  }

  if (b.includes('NISSAN')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="9" />
        <rect x="3" y="10" width="18" height="4" rx="1" fill="currentColor" fillOpacity="0.2" />
      </svg>
    );
  }

  if (b.includes('MERCEDES') || b.includes('BENZ')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="3" x2="12" y2="12" />
        <line x1="12" y1="12" x2="4.2" y2="16.5" />
        <line x1="12" y1="12" x2="19.8" y2="16.5" />
      </svg>
    );
  }

  if (b.includes('SCANIA') || b.includes('SWEDEN')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7l3 5-3 5-3-5z" fill="currentColor" fillOpacity="0.4" />
      </svg>
    );
  }

  if (b.includes('CUMMINS') || b.includes('AMERICA')) {
    return (
      <span className={`font-black text-amber-500 font-mono tracking-wider ${className}`} style={{ fontSize: size * 0.85 }}>
        [C]
      </span>
    );
  }

  // Default vehicle badge
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8" />
    </svg>
  );
};
