import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, ImageOff, Send } from 'lucide-react';
import { PortfolioItem } from '../data/portfolio';
import { businessInfo } from '../data/business';

interface PortfolioCardProps {
  item: PortfolioItem;
  onEnquire: (item: PortfolioItem) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onEnquire }) => {
  const [imageFailed, setImageFailed] = useState(false);

  const whatsappInquiryUrl = `https://wa.me/919821432122?text=Hello%20Designer%20Furniture%20%26%20Interior%2C%20I%20am%20interested%20in%20a%20design%20similar%20to%20your%20${encodeURIComponent(
    item.categoryLabel
  )}%20showcase.%20Please%20share%20details.`;

  return (
    <div className="group relative bg-[#FAF9F5] border border-[#E6DFD5] overflow-hidden flex flex-col transition-all duration-300 hover:border-[#18181B] hover:shadow-lg">
      {/* Image container */}
      <div className="relative aspect-[4/3] bg-[#EFEAE2] overflow-hidden">
        {!imageFailed ? (
          <img
            src={item.image}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#EAE3D9]">
            <ImageOff className="w-8 h-8 text-[#9B8D82] mb-2" />
            <span className="text-xs uppercase tracking-wider text-[#5C554E] font-medium">
              {item.categoryLabel}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Quick action buttons appearing on hover */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onEnquire(item)}
            className="px-3 py-1.5 bg-[#18181B] text-[#FAF9F5] text-[11px] uppercase tracking-wider font-semibold rounded-xs shadow-md flex items-center gap-1.5 hover:bg-[#38332E] transition-colors cursor-pointer"
            title="Send Enquiry"
          >
            <Send className="w-3.5 h-3.5 text-[#FAF9F5]" />
            <span>ENQUIRY</span>
          </button>
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-[#1F5435] text-white text-[11px] uppercase tracking-wider font-semibold rounded-xs shadow-md flex items-center gap-1.5 hover:bg-[#19452B] transition-colors"
            title="Enquire on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#87786B] font-semibold">
              {item.category}
            </span>
            <span className="text-[10px] text-[#A1998F] tracking-wide">
              Bespoke Solution
            </span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl text-[#18181B] font-normal leading-snug mb-3 group-hover:text-[#5E5245] transition-colors">
            {item.categoryLabel}
          </h3>

          {item.description && (
            <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed mb-4">
              {item.description}
            </p>
          )}

          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#5C554E] mb-4">
            {item.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <span className="text-[#9B8D82]">·</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-3 border-t border-[#EAE3D9] flex items-center justify-between">
          <button
            type="button"
            onClick={() => onEnquire(item)}
            className="text-xs uppercase tracking-wider font-semibold text-[#18181B] hover:text-[#9B7D56] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>ENQUIRY &bull; Discuss Customization</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
