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
  const balancedButtonClass =
    'flex items-center justify-center gap-1.5 py-2.5 px-2 bg-transparent hover:bg-[#18181B] hover:text-[#FAF9F5] text-[#18181B] border border-[#18181B] rounded-xs text-xs font-semibold uppercase tracking-wider transition-all duration-150 shadow-2xs cursor-pointer active:scale-95';

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
    <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-[#FAF9F5]/95 backdrop-blur-md border-t border-[#E6DFD5] px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Button 1: Call */}
        <a
          href={businessInfo.telHref}
          className={balancedButtonClass}
          title="Call Now"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>Call</span>
        </a>

        {/* Button 2: WhatsApp */}
        <a
          href={businessInfo.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={balancedButtonClass}
          title="WhatsApp Us"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Button 3: Enquiry (Directly redirects to enquiry form section, NEVER Cart) */}
        <button
          type="button"
          onClick={handleEnquiryClick}
          className={`${balancedButtonClass} bg-[#18181B] text-[#FAF9F5] hover:bg-[#27272A] border-[#18181B]`}
          title="Enquire Now"
        >
          <Send className="w-3.5 h-3.5 shrink-0 text-[#FAF9F5]" />
          <span>ENQUIRY</span>
        </button>
      </div>
    </div>
  );
};
