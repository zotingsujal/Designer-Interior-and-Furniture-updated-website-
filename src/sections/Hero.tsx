import React from 'react';
import { Calendar, ArrowDown, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/business';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenFurnitureHub?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onOpenFurnitureHub }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-36 overflow-hidden bg-[#18181B]"
    >
      {/* Real Project Living Room Interior Image from Client Google Drive */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/drive/drive_img_1_1CBInl.jpg"
          alt="Designer Furniture & Interior luxury living room project Mumbai"
          fetchPriority="high"
          className="w-full h-full object-cover object-center scale-100"
        />
        {/* Clean, professional dark tint so white text pops with maximum legibility */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/80 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Trust Statement - Clean white typography, no highlight boxes */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs uppercase tracking-[0.25em] text-white/90 font-semibold border-b border-white/40">
          <span>{businessInfo.trustStatement}</span>
        </div>

        {/* Hero Headline - Pure White Text, clearly seen, no highlight box */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white font-normal tracking-tight leading-[1.12] mb-6 text-balance max-w-4xl drop-shadow-md">
          {businessInfo.tagline}
        </h1>

        {/* Subheading - Pure White Text, clearly seen, no highlight box */}
        <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto mb-10 font-light text-balance drop-shadow-sm">
          {businessInfo.subtitle}
        </p>

        {/* Hero Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-transparent hover:bg-white hover:text-[#18181B] text-white border-2 border-white rounded-xs text-sm sm:text-base font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg active:scale-[0.98] backdrop-blur-xs"
          >
            <Calendar className="w-4 h-4 mr-2" />
            <span>Get Consultation</span>
          </button>

          {onOpenFurnitureHub && (
            <button
              type="button"
              onClick={onOpenFurnitureHub}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-[#18181B] hover:bg-[#FAF9F5] rounded-xs text-sm sm:text-base font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 mr-2 text-[#9A6F3E]" />
              <span>Explore Furniture</span>
            </button>
          )}
        </div>

        {/* Studio Location Note - White text */}
        <div className="mt-12 text-xs uppercase tracking-[0.18em] text-white/80 font-medium flex items-center gap-2 border-t border-white/20 pt-4">
          <span>Showroom in Santacruz (West), Mumbai</span>
          <span className="hidden sm:inline">&bull;</span>
          <span className="hidden sm:inline">Next to BUS DEPOT, SV Road</span>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-white/70 hover:text-white transition-colors"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] uppercase tracking-widest mb-1.5 font-medium">Discover</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
