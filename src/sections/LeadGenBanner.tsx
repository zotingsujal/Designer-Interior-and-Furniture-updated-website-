import React from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { businessInfo } from '../data/business';

interface LeadGenBannerProps {
  onOpenConsultation: () => void;
}

export const LeadGenBanner: React.FC<LeadGenBannerProps> = ({ onOpenConsultation }) => {
  const handleEnquiry = () => {
    // Priority: open the dedicated enquiry form modal or scroll smoothly to #enquiry
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#18181B] text-[#FAF9F5] border-b border-[#27272A] relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold mb-3">
          Have a Specific Requirement?
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.2] text-[#FAF9F5] mb-6 text-balance">
          Tell Us What You Are Looking For.
        </h2>

        <p className="text-base sm:text-lg text-[#D4CECA] leading-relaxed max-w-2xl mx-auto mb-10 text-balance font-light">
          Have a custom sofa idea, reference sketch, room floor plan or complete interior requirement? Our master artisans in Santacruz West can design and build pieces tailored to your exact measurements and aesthetic.
        </p>

        {/* CTA: ENQUIRY button beside WhatsApp CTA button in the middle lower website */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto w-full">
          {/* 1. Enquiry Button (Opens Enquiry form) */}
          <button
            type="button"
            onClick={handleEnquiry}
            className="w-full sm:flex-1 flex items-center justify-center gap-2.5 px-8 py-4 bg-[#FAF9F5] hover:bg-[#EAE3D9] text-[#18181B] text-base font-bold uppercase tracking-wider rounded-xs transition-all shadow-md cursor-pointer hover:shadow-lg active:scale-[0.98]"
            title="Submit Custom Furniture & Interior Enquiry"
          >
            <Send className="w-5 h-5 text-[#18181B]" />
            <span>ENQUIRY</span>
          </button>

          {/* 2. WhatsApp Call to Action Button */}
          <a
            href={businessInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-[#FFFFFF] text-base font-bold uppercase tracking-wider rounded-xs transition-all shadow-md cursor-pointer hover:shadow-lg active:scale-[0.98]"
            title="Chat with Workshop Specialists on WhatsApp"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <div className="mt-8 text-xs text-[#A1A1AA] tracking-wide">
          Direct consultations with our furniture &amp; interior specialists in Santacruz West, Mumbai.
        </div>
      </div>
    </section>
  );
};
