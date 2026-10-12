import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-[#FAF9F5] border border-[#E6DFD5] p-6 sm:p-8 flex flex-col justify-between h-full relative transition-all duration-300 hover:border-[#87786B] hover:shadow-xs">
      <div>
        <div className="flex items-center justify-between mb-4">
          <Quote className="w-6 h-6 text-[#C5A880]/70" />
          {testimonial.projectContext && (
            <span className="text-[11px] uppercase tracking-wider text-[#87786B] font-medium">
              {testimonial.projectContext}
            </span>
          )}
        </div>

        <p className="text-sm sm:text-[15px] text-[#38332E] leading-relaxed italic mb-6 font-normal">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="pt-4 border-t border-[#EAE3D9] flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-[#18181B] tracking-tight">
            {testimonial.author}
          </div>
          <div className="text-[11px] text-[#87786B] tracking-wide">
            Verified Customer · Santacruz, Mumbai
          </div>
        </div>
      </div>
    </div>
  );
};
