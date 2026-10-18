import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { TrustStrip } from './sections/TrustStrip';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { ValueProposition } from './sections/ValueProposition';
import { CustomFurniture } from './sections/CustomFurniture';
import { Portfolio } from './sections/Portfolio';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { Testimonials } from './sections/Testimonials';
import { LeadGenBanner } from './sections/LeadGenBanner';
import { ProjectEnquiry } from './sections/ProjectEnquiry';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceItem } from './data/services';
import { PortfolioItem } from './data/portfolio';

// Furniture Shopping Experience
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/furniture/CartDrawer';
import { CartToast } from './components/furniture/CartToast';
import { CheckoutModal } from './components/furniture/CheckoutModal';
import { FurnitureHubView } from './views/FurnitureHubView';
import { FurnitureCategoryView } from './views/FurnitureCategoryView';
import { FurnitureSubcategoryView } from './views/FurnitureSubcategoryView';
import { FurnitureProductDetailView } from './views/FurnitureProductDetailView';
import {
  FurnitureCategory,
  FurnitureSubcategory,
  FurnitureProduct,
  furnitureCategories,
  getCategoryBySlug,
  getSubcategoryBySlug,
  getProductBySlug,
} from './data/furniture';
type ViewMode =
  | 'home'
  | 'furniture-hub'
  | 'furniture-category'
  | 'furniture-subcategory'
  | 'furniture-product';

function getInitialView(): ViewMode {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash || '';
  if (hash.startsWith('#/furniture/product/')) return 'furniture-product';
  if (hash.startsWith('#/furniture/')) return 'furniture-subcategory';
  if (hash === '#/furniture') return 'furniture-hub';
  return 'home';
}

function AppContent() {
  const [view, setView] = useState<ViewMode>(getInitialView);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>('sofas');
  const [selectedSubcategorySlug, setSelectedSubcategorySlug] = useState<string>('l-shaped-sofas');
  const [selectedProductSlug, setSelectedProductSlug] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#/furniture/product/')) {
      return window.location.hash.replace('#/furniture/product/', '');
    }
    return '';
  });

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Custom Furniture');

  // Checkout modal
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [directBuyProduct, setDirectBuyProduct] = useState<FurnitureProduct | null>(null);

  // Parse URL hash on load & hashchange
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash;

      if (!hash || hash === '#' || hash === '#/home' || hash === '#hero') {
        setView('home');
        return;
      }

      if (hash.startsWith('#/furniture/product/')) {
        const slug = hash.replace('#/furniture/product/', '');
        if (slug) {
          setSelectedProductSlug(slug);
          setView('furniture-product');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      if (hash.startsWith('#/furniture/')) {
        const parts = hash.replace('#/furniture/', '').split('/');
        if (parts.length >= 2 && parts[0] && parts[1]) {
          setSelectedCategorySlug(parts[0]);
          setSelectedSubcategorySlug(parts[1]);
          setView('furniture-subcategory');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        } else if (parts.length === 1 && parts[0]) {
          setSelectedCategorySlug(parts[0]);
          setView('furniture-category');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      if (hash === '#/furniture') {
        setView('furniture-hub');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // If it's a section anchor (e.g. #about, #services, #custom, #portfolio, #contact)
      setView('home');
      const targetId = hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);

    return () => {
      window.removeEventListener('hashchange', parseHash);
    };
  }, []);

  const handleOpenFurnitureHub = () => {
    window.location.hash = '#/furniture';
    setView('furniture-hub');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (cat: FurnitureCategory | string) => {
    const slug = typeof cat === 'string' ? cat : cat.slug;
    setSelectedCategorySlug(slug);
    window.location.hash = `#/furniture/${slug}`;
    setView('furniture-category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSubcategory = (
    catSlugOrSub: string | FurnitureSubcategory,
    subSlug?: string
  ) => {
    let catSlug = '';
    let sSlug = '';

    if (typeof catSlugOrSub === 'object') {
      catSlug = catSlugOrSub.categorySlug || selectedCategorySlug;
      sSlug = catSlugOrSub.slug;
    } else {
      catSlug = catSlugOrSub;
      sSlug = subSlug || '';
    }

    setSelectedCategorySlug(catSlug);
    setSelectedSubcategorySlug(sSlug);
    window.location.hash = `#/furniture/${catSlug}/${sSlug}`;
    setView('furniture-subcategory');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: FurnitureProduct) => {
    setSelectedProductSlug(product.slug);
    window.location.hash = `#/furniture/product/${product.slug}`;
    setView('furniture-product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBuyNowProduct = (product: FurnitureProduct) => {
    setDirectBuyProduct(product);
    setIsCheckoutOpen(true);
  };

  const handleReturnHome = () => {
    window.location.hash = '#hero';
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHomeSection = (sectionId: string) => {
    if (view !== 'home') {
      setView('home');
      window.location.hash = `#${sectionId}`;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Consultation Modal Handlers
  const handleOpenConsultation = (projectType: string = 'Custom Furniture') => {
    setSelectedProjectType(projectType);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  const handleSelectService = (service: ServiceItem) => {
    handleOpenConsultation(service.title);
  };

  const handleEnquirePortfolioItem = (item: PortfolioItem) => {
    handleOpenConsultation(item.categoryLabel);
  };

  // Resolve Active Category, Subcategory, Product objects
  const currentCategory =
    getCategoryBySlug(selectedCategorySlug) || furnitureCategories[0];
  const currentSubcategory =
    getSubcategoryBySlug(selectedCategorySlug, selectedSubcategorySlug) ||
    currentCategory.subcategories[0];
  const activeProduct = getProductBySlug(selectedProductSlug);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#18181B] selection:bg-[#C5A880]/30 selection:text-[#18181B] flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation('Custom Furniture')}
        onOpenFurnitureHub={handleOpenFurnitureHub}
        onSelectCategory={handleSelectCategory}
        onSelectSubcategory={handleSelectSubcategory}
        onNavigateHomeSection={handleNavigateHomeSection}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {view === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              onOpenConsultation={() => handleOpenConsultation('Custom Furniture')}
              onOpenFurnitureHub={handleOpenFurnitureHub}
            />

            {/* Trust & Category Pillars */}
            <TrustStrip />

            {/* About Section */}
            <About onOpenConsultation={() => handleOpenConsultation('Bespoke Furniture & Interior')} />

            {/* Services & Offerings */}
            <Services onSelectService={handleSelectService} />

            {/* Value Proposition Journey */}
            <ValueProposition />

            {/* Dedicated Custom Furniture Section */}
            <CustomFurniture onOpenConsultation={() => handleOpenConsultation('Custom Piece Creation')} />

            {/* Curated Portfolio & Work Showcase */}
            <Portfolio onEnquireItem={handleEnquirePortfolioItem} />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Authentic Customer Testimonials */}
            <Testimonials />

            {/* Lead Generation Conversion Banner */}
            <LeadGenBanner onOpenConsultation={() => handleOpenConsultation('Consultation Request')} />

            {/* Detailed Project Planning Enquiry Form */}
            <ProjectEnquiry />

            {/* Comprehensive Frequently Asked Questions */}
            <FAQ
              onOpenConsultation={() => handleOpenConsultation('General Enquiry')}
              onNavigateToEnquiry={() => handleNavigateHomeSection('enquiry')}
            />

            {/* Studio Location & Contact Section */}
            <Contact onOpenConsultation={() => handleOpenConsultation('Showroom Visit')} />
          </>
        )}

        {view === 'furniture-hub' && (
          <FurnitureHubView
            onSelectCategory={handleSelectCategory}
            onSelectProduct={handleSelectProduct}
            onBuyNowProduct={handleBuyNowProduct}
            onReturnHome={handleReturnHome}
            onOpenConsultation={() => handleOpenConsultation('Custom Furniture')}
          />
        )}

        {view === 'furniture-category' && currentCategory && (
          <FurnitureCategoryView
            category={currentCategory}
            onSelectSubcategory={handleSelectSubcategory}
            onSelectProduct={handleSelectProduct}
            onBuyNowProduct={handleBuyNowProduct}
            onReturnHub={handleOpenFurnitureHub}
            onReturnHome={handleReturnHome}
          />
        )}

        {view === 'furniture-subcategory' && currentCategory && currentSubcategory && (
          <FurnitureSubcategoryView
            category={currentCategory}
            subcategory={currentSubcategory}
            onSelectProduct={handleSelectProduct}
            onBuyNowProduct={handleBuyNowProduct}
            onReturnCategory={() => handleSelectCategory(currentCategory)}
            onReturnHub={handleOpenFurnitureHub}
            onReturnHome={handleReturnHome}
          />
        )}

        {view === 'furniture-product' && activeProduct && (
          <FurnitureProductDetailView
            product={activeProduct}
            category={
              getCategoryBySlug(activeProduct.categorySlug) || currentCategory
            }
            subcategory={
              getSubcategoryBySlug(
                activeProduct.categorySlug,
                activeProduct.subcategorySlug
              ) || currentSubcategory
            }
            onSelectProduct={handleSelectProduct}
            onBuyNowProduct={handleBuyNowProduct}
            onReturnSubcategory={() =>
              handleSelectSubcategory(
                activeProduct.categorySlug,
                activeProduct.subcategorySlug
              )
            }
            onReturnCategory={() =>
              handleSelectCategory(activeProduct.categorySlug)
            }
            onReturnHub={handleOpenFurnitureHub}
            onReturnHome={handleReturnHome}
            onOpenConsultation={(title) => handleOpenConsultation(title || activeProduct.name)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenCategory={handleSelectCategory}
        onOpenFurnitureHub={handleOpenFurnitureHub}
      />

      {/* Mobile Sticky Bar with direct Enquiry Section Redirection */}
      <MobileStickyBar
        onOpenConsultation={() => handleOpenConsultation('Mobile Enquiry')}
        onNavigateToEnquiry={() => handleNavigateHomeSection('enquiry')}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer onProceedToCheckout={() => setIsCheckoutOpen(true)} />

      {/* Floating Cart Toast notification */}
      <CartToast />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => {
          setIsCheckoutOpen(false);
          setDirectBuyProduct(null);
        }}
        directBuyProduct={directBuyProduct}
      />

      {/* Consultation Modal Dialog */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        defaultProjectType={selectedProjectType}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
