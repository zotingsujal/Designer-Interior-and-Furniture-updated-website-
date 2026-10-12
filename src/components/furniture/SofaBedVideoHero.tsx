import React from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';

interface SofaBedVideoHeroProps {
  onScrollToProducts?: () => void;
}

export const SofaBedVideoHero: React.FC<SofaBedVideoHeroProps> = ({ onScrollToProducts }) => {
  return (
    <div className="relative my-6 sm:my-8 bg-[#18181B] border border-[#27272A] rounded-xs overflow-hidden shadow-xl">
      {/* Video / Animated Sequence Container */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#18181B]">
        {/* HTML5 Video with fallback luxury poster */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
          className="w-full h-full object-cover opacity-85 scale-102 transition-transform duration-1000"
        >
          {/* Subtle architectural ambient video stream */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-living-room-with-a-comfortable-sofa-42512-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60 pointer-events-none" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14 text-white z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xs text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#D4C3B3] mb-3 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Dual-Purpose Engineering</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#FAF9F5] mb-3 drop-shadow-md">
            Comfort That Transforms With You
          </h2>

          <p className="text-xs sm:text-sm text-[#D4CECA] leading-relaxed max-w-2xl mb-6 font-light drop-shadow-sm">
            Designed for Mumbai spaces that demand more from every square foot. Our bespoke sofa cum beds transition effortlessly between day lounge seating and deep night sleep with concealed German pneumatic gas springs and built-in linen storage.
          </p>

          <div className="flex items-center gap-4">
            {onScrollToProducts && (
              <button
                type="button"
                onClick={onScrollToProducts}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF9F5] hover:bg-white text-[#18181B] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-md transition-all cursor-pointer"
              >
                <span>Explore Sofa Cum Beds</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            )}
            <span className="text-[11px] uppercase tracking-wider text-[#A1A1AA] hidden sm:inline-block">
              &bull; 100% Factory Custom Sizing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
