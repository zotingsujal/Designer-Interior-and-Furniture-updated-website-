import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ShoppingBag, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/business';
import { Button } from './Button';
import { Logo } from './Logo';
import { useCart } from '../context/CartContext';
import { FurnitureMenuAccordion } from './furniture/FurnitureMenuAccordion';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenFurnitureHub: () => void;
  onSelectCategory: (categorySlug: string) => void;
  onSelectSubcategory: (categorySlug: string, subcategorySlug: string) => void;
  onNavigateHomeSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onOpenFurnitureHub,
  onSelectCategory,
  onSelectSubcategory,
  onNavigateHomeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      onNavigateHomeSection(href.substring(1));
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/95 backdrop-blur-md shadow-xs py-2.5 border-b border-[#E6DFD5]'
            : 'bg-[#FAF9F5]/90 backdrop-blur-xs py-3 sm:py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Authentic Brand Logo */}
            <button
              type="button"
              onClick={() => handleNavClick('#hero')}
              className="flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
              aria-label="Designer Furniture & Interior Home"
            >
              <Logo theme="dark" size="md" />
            </button>

            {/* Zone 2: Clean Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              <button
                type="button"
                onClick={() => handleNavClick('#hero')}
                className="text-xs uppercase tracking-[0.14em] font-medium text-[#4A453F] hover:text-[#18181B] transition-colors cursor-pointer"
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#about')}
                className="text-xs uppercase tracking-[0.14em] font-medium text-[#4A453F] hover:text-[#18181B] transition-colors cursor-pointer"
              >
                About
              </button>

              {/* Visually Prominent Furniture Catalogue Nav */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFurnitureHub();
                }}
                className="text-xs uppercase tracking-[0.14em] font-semibold text-[#18181B] hover:text-[#9A6F3E] transition-colors inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#F4EFEA] border border-[#D9D1C5] hover:border-[#18181B] cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Explore Furniture</span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#services')}
                className="text-xs uppercase tracking-[0.14em] font-medium text-[#4A453F] hover:text-[#18181B] transition-colors cursor-pointer"
              >
                Interiors
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#portfolio')}
                className="text-xs uppercase tracking-[0.14em] font-medium text-[#4A453F] hover:text-[#18181B] transition-colors cursor-pointer"
              >
                Our Work
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#reviews')}
                className="text-xs uppercase tracking-[0.14em] font-medium text-[#4A453F] hover:text-[#18181B] transition-colors cursor-pointer"
              >
                Reviews
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#contact')}
                className="text-xs uppercase tracking-[0.14em] font-medium text-[#4A453F] hover:text-[#18181B] transition-colors cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* Zone 3: Actions (Cart + Consultation + Phone + Menu) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Shopping Cart Trigger Icon */}
              <button
                type="button"
                onClick={openCart}
                className="relative p-2.5 text-[#18181B] hover:bg-[#EFEAE2] rounded-xs transition-colors cursor-pointer"
                aria-label={`Shopping cart with ${itemCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 min-w-[18px] h-[18px] px-1 bg-[#18181B] text-[#FAF9F5] text-[10px] font-bold rounded-full flex items-center justify-center animate-in zoom-in-50">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Consultation Button (Desktop) */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="hidden sm:inline-flex items-center justify-center text-xs px-3.5 sm:px-4 py-2 bg-transparent hover:bg-[#18181B] hover:text-[#FAF9F5] text-[#18181B] border border-[#18181B] rounded-xs shadow-2xs font-semibold tracking-wider uppercase transition-all duration-150 cursor-pointer"
              >
                Get Consultation
              </button>

              {/* Hamburger Button (Open for all screen sizes if clicked) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#18181B] hover:bg-[#EFEAE2] rounded-xs transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Expanded Hamburger Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#18181B]/60 backdrop-blur-xs transition-opacity">
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-8">
            <div className="w-screen max-w-sm sm:max-w-md bg-[#FAF9F5] border-l border-[#D9D1C5] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
              {/* Drawer Top Header */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E6DFD5] mb-5">
                  <Logo theme="dark" size="sm" />
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-[#87786B] hover:text-[#18181B] cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Primary Nav Items */}
                <nav className="flex flex-col space-y-1">
                  <button
                    type="button"
                    onClick={() => handleNavClick('#hero')}
                    className="text-left text-sm uppercase tracking-widest font-medium text-[#2B2724] hover:text-[#9A6F3E] py-2 transition-colors cursor-pointer"
                  >
                    Home
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavClick('#about')}
                    className="text-left text-sm uppercase tracking-widest font-medium text-[#2B2724] hover:text-[#9A6F3E] py-2 transition-colors cursor-pointer"
                  >
                    About
                  </button>

                  {/* Prominent Furniture Catalogue with Accordion */}
                  <FurnitureMenuAccordion
                    onSelectCategory={(slug) => {
                      setMobileMenuOpen(false);
                      onSelectCategory(slug);
                    }}
                    onSelectSubcategory={(catSlug, subSlug) => {
                      setMobileMenuOpen(false);
                      onSelectSubcategory(catSlug, subSlug);
                    }}
                    onCloseMenu={() => setMobileMenuOpen(false)}
                  />

                  <button
                    type="button"
                    onClick={() => handleNavClick('#services')}
                    className="text-left text-sm uppercase tracking-widest font-medium text-[#2B2724] hover:text-[#9A6F3E] py-2 transition-colors cursor-pointer"
                  >
                    Interiors
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavClick('#portfolio')}
                    className="text-left text-sm uppercase tracking-widest font-medium text-[#2B2724] hover:text-[#9A6F3E] py-2 transition-colors cursor-pointer"
                  >
                    Our Work
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavClick('#reviews')}
                    className="text-left text-sm uppercase tracking-widest font-medium text-[#2B2724] hover:text-[#9A6F3E] py-2 transition-colors cursor-pointer"
                  >
                    Reviews
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavClick('#contact')}
                    className="text-left text-sm uppercase tracking-widest font-medium text-[#2B2724] hover:text-[#9A6F3E] py-2 transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </nav>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-6 border-t border-[#E6DFD5] space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full inline-flex items-center justify-center text-xs py-3 px-4 bg-[#18181B] hover:bg-[#38332E] text-[#FAF9F5] rounded-xs shadow-2xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  Book Showroom Consultation
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="call"
                    size="sm"
                    href={businessInfo.telHref}
                    className="w-full text-center"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1" />
                    Call
                  </Button>
                  <Button
                    variant="whatsapp"
                    size="sm"
                    href={businessInfo.whatsappHref}
                    isExternal
                    className="w-full text-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5 mr-1" />
                    WhatsApp
                  </Button>
                </div>

                <div className="text-[11px] text-[#87786B] text-center pt-1 leading-relaxed">
                  Santacruz (West), Swami Vivekanand Rd, Mumbai
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
