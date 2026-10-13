import React from 'react';
import { Phone, MessageSquare, Send } from 'lucide-react';
import { businessInfo } from '../data/business';

interface MobileStickyBarProps {
  onOpenConsultation: () => void;
  onNavigateToEnquiry?: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenConsultation,
  onNavigateToEnquiry,
}) => {
  const handleEnquiryClick = () => {
    if (onNavigateToEnquiry) {
      onNavigateToEnquiry();
      return;
    }
    // Direct anchor navigation to enquiry section
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#enquiry';
      setTimeout(() => {
        const target = document.getElementById('enquiry');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        else onOpenConsultation();
      }, 120);
    }
  };

  return (
    <>
      {/* 1. Mobile Bottom Sticky Bar (screens < 640px) */}
      <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-[#FAF9F5]/95 backdrop-blur-md border-t border-[#E6DFD5] px-3 py-2 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          {/* Call Button */}
          <a
            href={businessInfo.telHref}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-transparent hover:bg-[#18181B] hover:text-[#FAF9F5] text-[#18181B] border border-[#18181B] rounded-xs text-xs font-semibold uppercase tracking-wider transition-all duration-150 shadow-2xs cursor-pointer active:scale-95"
            title="Call Now"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span>Call</span>
          </a>

          {/* WhatsApp CTA Button */}
          <a
            href={businessInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#25D366] hover:bg-[#20BD5A] text-white border border-[#25D366] rounded-xs text-xs font-bold uppercase tracking-wider transition-all duration-150 shadow-2xs cursor-pointer active:scale-95"
            title="WhatsApp Us"
          >
            <MessageSquare className="w-3.5 h-3.5 shrink-0 fill-current" />
            <span>WhatsApp</span>
          </a>

          {/* ENQUIRY Button next to WhatsApp Button */}
          <button
            type="button"
            onClick={handleEnquiryClick}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#18181B] hover:bg-[#27272A] text-[#FAF9F5] border border-[#18181B] rounded-xs text-xs font-bold uppercase tracking-wider transition-all duration-150 shadow-2xs cursor-pointer active:scale-95"
            title="Submit Custom Furniture Enquiry"
          >
            <Send className="w-3.5 h-3.5 shrink-0 text-[#FAF9F5]" />
            <span>ENQUIRY</span>
          </button>
        </div>
      </div>

      {/* 2. Desktop & Tablet Floating Sticky CTA Bar Down Middle of Website (screens >= 640px) */}
      <aside aria-label="Quick contact" className="fixed bottom-5 left-1/2 -translate-x-1/2 z-30 hidden sm:flex items-center gap-3 px-5 py-2.5 bg-[#18181B]/95 text-[#FAF9F5] backdrop-blur-md rounded-full border border-[#38332E] shadow-2xl animate-in fade-in slide-in-from-bottom-4">
        {/* Call Link */}
        <a
          href={businessInfo.telHref}
          className="flex items-center gap-1.5 text-xs text-[#D4CECA] hover:text-[#FAF9F5] transition-colors py-1 px-2"
          title={`Call ${businessInfo.phone}`}
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
          <span className="font-medium tracking-wide">Call Studio</span>
        </a>

        {/* Subtle Divider */}
        <div className="w-px h-4 bg-[#38332E]" />

        {/* WhatsApp CTA Button */}
        <a
          href={businessInfo.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-150 shadow-xs cursor-pointer hover:shadow-md active:scale-95"
          title="Chat with Us on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp Us</span>
        </a>

        {/* ENQUIRY CTA Button Next to WhatsApp Button */}
        <button
          type="button"
          onClick={handleEnquiryClick}
          className="flex items-center gap-2 px-5 py-2 bg-[#FAF9F5] hover:bg-[#EAE3D9] text-[#18181B] text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-150 shadow-xs cursor-pointer hover:shadow-md active:scale-95"
          title="Submit Custom Furniture Enquiry"
        >
          <Send className="w-3.5 h-3.5 text-[#18181B]" />
          <span>ENQUIRY</span>
        </button>
      </aside>
    </>
  );
};
