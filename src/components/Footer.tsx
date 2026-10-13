import React from 'react';
import { Phone, MessageSquare, MapPin, ArrowUp, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/business';
import { Logo } from './Logo';

interface FooterProps {
  onOpenCategory?: (categorySlug: string) => void;
  onOpenFurnitureHub?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCategory,
  onOpenFurnitureHub,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#18181B] text-[#FAF9F5] border-t border-[#27272A] pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-[#27272A]">
          {/* Col 1: Brand Logo & Tagline */}
          <div className="space-y-4">
            <Logo theme="light" size="lg" />
            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-sm italic">
              &ldquo;{businessInfo.tagline}&rdquo;
            </p>
            <p className="text-xs text-[#71717A] leading-relaxed">
              Specializing in custom-built furniture, bespoke residential joinery, and tailored interior solutions across Mumbai.
            </p>
            <div className="pt-2 text-xs text-[#C5A880] tracking-wider uppercase font-semibold">
              Santacruz (West), Mumbai
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A1A1AA]">
              <li>
                <a href="#hero" className="hover:text-[#FAF9F5] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF9F5] transition-colors">
                  About Us
                </a>
              </li>
              {onOpenFurnitureHub && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenFurnitureHub}
                    className="hover:text-[#FAF9F5] transition-colors inline-flex items-center gap-1.5 text-[#C5A880] font-medium cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Explore Furniture Catalogue</span>
                  </button>
                </li>
              )}
              <li>
                <a href="#services" className="hover:text-[#FAF9F5] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#custom" className="hover:text-[#FAF9F5] transition-colors">
                  Custom Pieces
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#FAF9F5] transition-colors">
                  Design Inspirations &amp; Work
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FAF9F5] transition-colors">
                  Client Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FAF9F5] transition-colors">
                  Frequently Asked Questions (FAQ)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FAF9F5] transition-colors">
                  Visit Showroom &amp; Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Furniture Collections */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-4">
              Furniture Collections
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A1A1AA]">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenCategory?.('sofas')}
                  className="hover:text-[#FAF9F5] transition-colors cursor-pointer text-left"
                >
                  Custom Sofas &amp; Sectionals
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenCategory?.('sofas')}
                  className="hover:text-[#FAF9F5] transition-colors cursor-pointer text-left"
                >
                  Sofa-cum-Beds with Storage
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenCategory?.('dining-tables')}
                  className="hover:text-[#FAF9F5] transition-colors cursor-pointer text-left"
                >
                  Solid Teak Dining Tables
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenCategory?.('bedroom-beds')}
                  className="hover:text-[#FAF9F5] transition-colors cursor-pointer text-left"
                >
                  Hydraulic Storage Beds
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenCategory?.('wardrobe-collection')}
                  className="hover:text-[#FAF9F5] transition-colors cursor-pointer text-left"
                >
                  Wardrobes &amp; Dressing Units
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenCategory?.('tv-units')}
                  className="hover:text-[#FAF9F5] transition-colors cursor-pointer text-left"
                >
                  Architectural TV Units &amp; Consoles
                </button>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FAF9F5] transition-colors">
                  Complete Home Interiors
                </a>
              </li>
              <li>
                <a href="#custom" className="hover:text-[#FAF9F5] transition-colors">
                  Bespoke Joinery &amp; Woodcraft
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Studio Info */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-4">
              Showroom &amp; Contact
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-[#A1A1AA] leading-relaxed">
              <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
              <span>{businessInfo.address.full}</span>
            </div>

            <div className="space-y-2 pt-1">
              <a
                href={businessInfo.telHref}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FAF9F5] hover:text-[#C5A880] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span className="font-medium">{businessInfo.phone}</span>
              </a>

              <a
                href={businessInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FAF9F5] hover:text-[#C5A880] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A880]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-[#71717A] leading-relaxed border-t border-[#27272A]">
              Open All 7 Days: 10:30 AM &ndash; 9:00 PM
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>
            &copy; {new Date().getFullYear()} Designer Furniture &amp; Interior. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-[#FAF9F5] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
