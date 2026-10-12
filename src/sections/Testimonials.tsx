import React, { useRef, useEffect } from 'react';
import { TestimonialCard } from '../components/TestimonialCard';
import { testimonialsData } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isHoveredRef = useRef(false);
  const animationFrameId = useRef<number | null>(null);

  // Triple the items to ensure uninterrupted seamless right-to-left scrolling
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Smooth continuous auto-scroll speed
    const speed = 1.0;

    const step = () => {
      if (container && !isHoveredRef.current) {
        container.scrollLeft += speed;

        // When one-third has passed (one complete set of reviews), wrap around smoothly
        const loopBoundary = container.scrollWidth / 3;
        if (container.scrollLeft >= loopBoundary) {
          container.scrollLeft -= loopBoundary;
        }
      }
      animationFrameId.current = requestAnimationFrame(step);
    };

    animationFrameId.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 bg-[#FAF9F5] border-b border-[#E6DFD5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#87786B] bg-[#EFEAE2] rounded-xs border border-[#E0D7CC]">
              <Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
              <span>Customer Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#18181B] tracking-tight leading-[1.15]">
              What Our Customers Say
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5C554E] leading-relaxed">
              Genuine experiences from Mumbai homeowners who commissioned custom furniture and complete interiors with Designer Furniture &amp; Interior.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2.5 mt-6 md:mt-0">
            <button
              type="button"
              onClick={scrollLeft}
              className="p-3 text-[#18181B] border border-[#D9D1C5] bg-[#FFFFFF] hover:bg-[#F8F6F2] active:bg-[#ECE5DC] transition-all rounded-xs cursor-pointer shadow-xs active:scale-95"
              aria-label="Scroll reviews left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={scrollRight}
              className="p-3 text-[#18181B] border border-[#D9D1C5] bg-[#FFFFFF] hover:bg-[#F8F6F2] active:bg-[#ECE5DC] transition-all rounded-xs cursor-pointer shadow-xs active:scale-95"
              aria-label="Scroll reviews right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Automatic Smooth Side-Scrolling Track (Right-to-Left) */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-hidden select-none px-4 sm:px-6 lg:px-8 py-3"
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
        onTouchStart={() => {
          isHoveredRef.current = true;
        }}
        onTouchEnd={() => {
          isHoveredRef.current = false;
        }}
      >
        {duplicatedTestimonials.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="w-[320px] sm:w-[380px] lg:w-[420px] shrink-0"
          >
            <TestimonialCard testimonial={item} />
          </div>
        ))}
      </div>

      {/* Subtle bottom note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <p className="text-xs text-[#87786B] text-center italic">
          Reviews automatically scroll continuously from right to left &bull; Hover or touch any card to pause
        </p>
      </div>
    </section>
  );
};
