import React, { useState } from 'react';
import { Smartphone, Sparkles, Watch, ShoppingBag, User } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
  type?: 'product' | 'banner' | 'avatar';
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  category,
  type = 'product',
}) => {
  const [error, setError] = useState(false);

  if (error) {
    if (type === 'avatar') {
      return (
        <div className={`bg-gradient-to-br from-slate-700 to-slate-900 text-white flex items-center justify-center font-bold text-xs uppercase ${className}`}>
          {alt ? alt.slice(0, 2) : <User className="w-4 h-4" />}
        </div>
      );
    }

    if (type === 'banner') {
      return (
        <div className={`bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white flex flex-col items-center justify-center p-6 ${className}`}>
          <Sparkles className="w-10 h-10 text-[#e74c3c] mb-2 animate-pulse" />
          <span className="font-bold font-['Montserrat'] text-sm tracking-widest uppercase text-slate-300">
            LuxuryStore Exclusive
          </span>
        </div>
      );
    }

    return (
      <div className={`bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 flex flex-col items-center justify-center p-4 border border-slate-200/60 ${className}`}>
        {category === 'smartphones' ? (
          <Smartphone className="w-12 h-12 text-[#2c3e50] mb-2" />
        ) : category === 'accessories' ? (
          <Watch className="w-12 h-12 text-[#2c3e50] mb-2" />
        ) : (
          <ShoppingBag className="w-12 h-12 text-[#e74c3c] mb-2" />
        )}
        <span className="text-[11px] font-bold text-slate-700 text-center uppercase tracking-wider line-clamp-1">
          {alt || 'Produit de Luxe'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};
