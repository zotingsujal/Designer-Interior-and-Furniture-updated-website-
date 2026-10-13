import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ChevronDown, MessageSquare, HelpCircle, Sparkles, Send } from 'lucide-react';
import { websiteFaqs, CategorizedFAQ } from '../data/subcategoryFaqs';
import { businessInfo } from '../data/business';

interface FAQProps {
  onOpenConsultation?: () => void;
  onNavigateToEnquiry?: () => void;
}

export const FAQ: React.FC<FAQProps> = ({
  onOpenConsultation,
  onNavigateToEnquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    'All',
    'Custom Furniture',
    'Materials & Timber',
    'Showroom & Location',
    'Pricing & Delivery',
  ];

  const filteredFaqs =
    activeCategory === 'All'
      ? websiteFaqs
      : websiteFaqs.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleEnquiry = () => {
    if (onNavigateToEnquiry) {
      onNavigateToEnquiry();
      return;
    }
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenConsultation) {
      onOpenConsultation();
    }
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-[#EAE3D9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Knowledge & Guidance"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about commissioning bespoke furniture, material selections, and our Santacruz showroom experience."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#18181B] text-[#FAF9F5] shadow-xs'
                  : 'bg-[#F4EFEA] text-[#71717A] hover:text-[#18181B] hover:bg-[#EAE3D9] border border-[#E6DFD5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-xs transition-colors overflow-hidden ${
                  isOpen
                    ? 'bg-[#F4EFEA] border-[#D9D1C5] shadow-2xs'
                    : 'bg-[#FAF9F5] hover:bg-[#F9F6F0] border-[#E6DFD5]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4.5 px-5 sm:px-6 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-6 h-6 rounded-full bg-[#EAE3D9] text-[#18181B] flex items-center justify-center shrink-0 text-xs font-serif font-bold">
                      {idx + 1}
                    </span>
                    <span className="font-serif text-base sm:text-lg text-[#18181B] font-medium leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#87786B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#18181B]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#4A453F] leading-relaxed border-t border-[#EAE3D9]/60">
                    <p className="mt-2">{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-[#87786B] uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-[#C5A880]" />
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help CTA card */}
        <div className="mt-12 p-6 sm:p-8 bg-[#18181B] text-[#FAF9F5] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C5A880] block mb-1">
              Still Have Questions?
            </span>
            <h4 className="font-serif text-lg sm:text-xl font-normal text-[#FAF9F5] mb-1">
              Speak Directly with Our Senior Artisans &amp; Designers
            </h4>
            <p className="text-xs text-[#A1A1AA] max-w-md">
              Share your room dimensions, photos, or architectural sketches for a personalized response.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleEnquiry}
              className="px-5 py-2.5 bg-[#FAF9F5] hover:bg-[#EAE3D9] text-[#18181B] text-xs uppercase tracking-wider font-bold rounded-xs transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Send className="w-3.5 h-3.5 text-[#18181B]" />
              <span>ENQUIRY</span>
            </button>

            <a
              href={businessInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs uppercase tracking-wider font-bold rounded-xs transition-colors flex items-center gap-2 shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
