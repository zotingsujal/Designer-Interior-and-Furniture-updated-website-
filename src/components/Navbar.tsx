import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Sparkles, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import { businessInfo } from '../data/business';
import { Button } from './Button';
import { Logo } from './Logo';
import { FurnitureMenuAccordion } from './furniture/FurnitureMenuAccordion';
import { furnitureCategories } from '../data/furniture';

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
  const [desktopFurnitureMenuOpen, setDesktopFurnitureMenuOpen] = useState(false);

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

              {/* Visually Prominent Furniture Catalogue Nav with Desktop Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDesktopFurnitureMenuOpen(true)}
                onMouseLeave={() => setDesktopFurnitureMenuOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setDesktopFurnitureMenuOpen(false);
                    onOpenFurnitureHub();
                  }}
                  className="text-xs uppercase tracking-[0.14em] font-semibold text-[#18181B] hover:text-[#9A6F3E] transition-colors inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#F4EFEA] border border-[#D9D1C5] hover:border-[#18181B] cursor-pointer"
                  aria-expanded={desktopFurnitureMenuOpen}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Explore Furniture</span>
                  <ChevronDown
                    className={`w-3 h-3 text-[#87786B] transition-transform duration-200 ${
                      desktopFurnitureMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Desktop Mega Dropdown */}
                {desktopFurnitureMenuOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[760px] max-w-[90vw] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-[#FAF9F5] border border-[#D9D1C5] rounded-xs shadow-2xl p-6">
                      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#EAE3D9]">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#87786B] block">
                            Showroom Catalogue
                          </span>
                          <h4 className="font-serif text-lg text-[#18181B] font-medium">
                            Explore Our Furniture &bull; 6 Major Collections
                          </h4>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setDesktopFurnitureMenuOpen(false);
                            onOpenFurnitureHub();
                          }}
                          className="text-xs font-semibold uppercase tracking-wider text-[#9A6F3E] hover:text-[#18181B] transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <span>View All Collections</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* 6 Major Categories in 3 Columns */}
                      <div className="grid grid-cols-3 gap-6">
                        {furnitureCategories.map((cat, idx) => (
                          <div key={cat.id} className="space-y-2 group">
                            <button
                              type="button"
                              onClick={() => {
                                setDesktopFurnitureMenuOpen(false);
                                onSelectCategory(cat.slug);
                              }}
                              className="w-full text-left font-serif text-sm font-semibold text-[#18181B] group-hover:text-[#9A6F3E] transition-colors flex items-center justify-between cursor-pointer border-b border-[#EAE3D9] pb-1"
                            >
                              <span className="flex items-center gap-1.5">
                                <span className="text-[10px] font-mono text-[#9A6F3E]">
                                  0{idx + 1}
                                </span>
                                <span>{cat.name}</span>
                              </span>
                              <ChevronRight className="w-3 h-3 text-[#B0A79C] group-hover:text-[#9A6F3E] transition-transform group-hover:translate-x-0.5" />
                            </button>

                            {/* Exact Subcategories */}
                            <ul className="space-y-1 pl-3.5">
                              {cat.subcategories.map((sub) => (
                                <li key={sub.id}>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setDesktopFurnitureMenuOpen(false);
                                      onSelectSubcategory(cat.slug, sub.slug);
                                    }}
                                    className="text-left text-xs text-[#5C554E] hover:text-[#18181B] transition-colors py-0.5 block w-full truncate cursor-pointer hover:font-medium"
                                  >
                                    {sub.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Mega Menu Footer */}
                      <div className="mt-5 pt-3.5 border-t border-[#EAE3D9] flex items-center justify-between text-xs text-[#87786B]">
                        <span>Factory Workshop in Santacruz West, Mumbai &bull; Custom Sizing Available</span>
                        <button
                          type="button"
                          onClick={() => {
                            setDesktopFurnitureMenuOpen(false);
                            onOpenConsultation();
                          }}
                          className="font-semibold text-[#18181B] hover:text-[#9A6F3E] uppercase tracking-wider text-[11px] cursor-pointer"
                        >
                          Book Custom Consultation &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

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
                onClick={() => handleNavClick('#faq')}
                className="text-xs uppercase tracking-[0.14em] font-medium text-[#4A453F] hover:text-[#18181B] transition-colors cursor-pointer"
              >
                FAQ
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#contact')}
                className="text-xs uppercase tracking-[0.14em] font-medium text-[#4A453F] hover:text-[#18181B] transition-colors cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* Zone 3: Actions (Consultation + Phone + Menu) */}
            <div className="flex items-center gap-2 sm:gap-3">

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
                    onClick={() => handleNavClick('#faq')}
                    className="text-left text-sm uppercase tracking-widest font-medium text-[#2B2724] hover:text-[#9A6F3E] py-2 transition-colors cursor-pointer"
                  >
                    FAQ
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
