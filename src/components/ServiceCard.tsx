import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../data/services';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  return (
    <div className="group relative bg-[#FAF9F5] border border-[#E6DFD5] hover:border-[#18181B] flex flex-col justify-between transition-all duration-300 hover:shadow-lg overflow-hidden">
      {/* Relevant Service Image (placed strictly in the service card) */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE3D9]">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#18181B]/85 backdrop-blur-xs text-[#FAF9F5] text-xs font-serif font-light tracking-widest uppercase">
          Category {service.categoryNumber}
        </div>
      </div>

      <div className="p-7 sm:p-9 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#18181B] font-normal mb-3 group-hover:text-[#5E5245] transition-colors">
            {service.title}
          </h3>

          <p className="text-sm text-[#5C554E] leading-relaxed mb-6 font-normal">
            {service.shortDescription}
          </p>

          <div className="pt-2 mb-8">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#87786B] font-semibold mb-3">
              Scope &amp; Specialties
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {service.items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-xs text-[#38332E] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0" />
                  <span className="font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-5 border-t border-[#EAE3D9]">
          <button
            type="button"
            onClick={() => onSelect(service)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#18181B] group-hover:text-[#9B7D56] transition-colors cursor-pointer"
          >
            <span>{service.ctaText}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
