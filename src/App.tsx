import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { ScreenBar } from './components/ScreenBar';
import { ScreenPagination } from './components/ScreenPagination';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { IntroductionScreen } from './components/screens/IntroductionScreen';
import { ProductScreen } from './components/screens/ProductScreen';
import { AutomationScreen } from './components/screens/AutomationScreen';
import { SpecialistInScreen } from './components/screens/SpecialistInScreen';
import { AfterSalesScreen } from './components/screens/AfterSalesScreen';
import { ContactScreen } from './components/screens/ContactScreen';
import { ProductDetailModal } from './components/modals/ProductDetailModal';
import { QuoteModal } from './components/modals/QuoteModal';
import { ServiceTicketModal } from './components/modals/ServiceTicketModal';
import { ProductModule, ScreenId } from './types';
import { NAV_ITEMS } from './data/grainExData';

const VALID_SCREENS: ScreenId[] = [
  '01-introduction',
  '02-product',
  '03-automation',
  '04-specialist-in',
  '05-after-sales',
  '06-contact-us',
];

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>(() => {
    const hash = window.location.hash.replace('#', '') as ScreenId;
    if (VALID_SCREENS.includes(hash)) {
      return hash;
    }
    return '01-introduction';
  });

  const [selectedProduct, setSelectedProduct] = useState<ProductModule | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quoteInitialProduct, setQuoteInitialProduct] = useState<string>('');
  const [serviceTicketOpen, setServiceTicketOpen] = useState<boolean>(false);

  const handleNavigate = useCallback((screenId: ScreenId) => {
    setActiveScreen(screenId);
    window.location.hash = screenId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Listen to browser Back / Forward buttons & Hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ScreenId;
      if (VALID_SCREENS.includes(hash)) {
        setActiveScreen(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard navigation (Left / Right arrow keys & 1-6 number keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is currently typing in an input, textarea, or select
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') {
        return;
      }

      const currentIndex = VALID_SCREENS.indexOf(activeScreen);

      if (e.key === 'ArrowRight' && currentIndex < VALID_SCREENS.length - 1) {
        handleNavigate(VALID_SCREENS[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        handleNavigate(VALID_SCREENS[currentIndex - 1]);
      } else if (['1', '2', '3', '4', '5', '6'].includes(e.key)) {
        const num = parseInt(e.key, 10);
        if (num >= 1 && num <= VALID_SCREENS.length) {
          handleNavigate(VALID_SCREENS[num - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeScreen, handleNavigate]);

  const handleOpenQuote = (initialProduct: string = '') => {
    setQuoteInitialProduct(initialProduct);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f9faf6] text-[#1a1c1a] font-sans antialiased flex flex-col selection:bg-[#116c4a] selection:text-white">
      {/* Top Fixed Brand Navigation */}
      <Navbar
        activeScreen={activeScreen}
        onSelectScreen={handleNavigate}
        onRequestQuote={() => handleOpenQuote('General Grain Processing Plant Proposal')}
      />

      {/* Screen Header Bar with 6-Screen Stepper & Direct Jump Tabs */}
      <ScreenBar
        activeScreen={activeScreen}
        onSelectScreen={handleNavigate}
      />

      {/* Main Single Screen Display with Animated Transitions */}
      <main className="flex-1 min-h-[600px] flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScreen}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="flex-1 flex flex-col justify-between"
          >
            {/* Screen 01: Introduction & Heritage */}
            {activeScreen === '01-introduction' && (
              <IntroductionScreen
                onNavigate={handleNavigate}
                onRequestQuote={() => handleOpenQuote('Complete Turnkey Paddy & Rice Plant')}
              />
            )}

            {/* Screen 02: Products & Modules */}
            {activeScreen === '02-product' && (
              <ProductScreen
                onSelectProduct={(product) => setSelectedProduct(product)}
                onRequestQuote={handleOpenQuote}
                onNavigate={handleNavigate}
              />
            )}

            {/* Screen 03: Automation & Technology */}
            {activeScreen === '03-automation' && (
              <AutomationScreen
                onRequestQuote={handleOpenQuote}
                onNavigate={handleNavigate}
              />
            )}

            {/* Screen 04: Specialist In */}
            {activeScreen === '04-specialist-in' && (
              <SpecialistInScreen
                onRequestQuote={handleOpenQuote}
                onNavigate={handleNavigate}
              />
            )}

            {/* Screen 05: After Sales & Service */}
            {activeScreen === '05-after-sales' && (
              <AfterSalesScreen
                onOpenServiceTicket={() => setServiceTicketOpen(true)}
                onRequestQuote={handleOpenQuote}
                onNavigate={handleNavigate}
              />
            )}

            {/* Screen 06: Contact Us */}
            {activeScreen === '06-contact-us' && (
              <ContactScreen />
            )}

            {/* Dedicated Bottom Screen Pagination & Next/Prev Controls */}
            <ScreenPagination
              activeScreen={activeScreen}
              onSelectScreen={handleNavigate}
              onRequestQuote={() => handleOpenQuote('Turnkey Grain Processing Inquiry')}
            />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onSelectScreen={handleNavigate}
        onRequestQuote={() => handleOpenQuote('Turnkey Project Consultation')}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInquire={(productTitle) => {
          setSelectedProduct(null);
          handleOpenQuote(productTitle);
        }}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        initialProduct={quoteInitialProduct}
        onClose={() => setQuoteModalOpen(false)}
      />

      <ServiceTicketModal
        isOpen={serviceTicketOpen}
        onClose={() => setServiceTicketOpen(false)}
      />
    </div>
  );
}
