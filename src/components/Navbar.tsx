import React, { useState } from 'react';
import { Phone, Menu, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ScreenId } from '../types';
import { BRAND_INFO } from '../data/grainExData';

interface NavbarProps {
  activeScreen: ScreenId;
  onSelectScreen: (screen: ScreenId) => void;
  onRequestQuote: () => void;
}

export const NAV_LINKS: { id: ScreenId; label: string; number: string; shortLabel: string }[] = [
  { id: '01-introduction', number: '01', label: '01. INTRODUCTION', shortLabel: 'Introduction' },
  { id: '02-product', number: '02', label: '02. PRODUCT', shortLabel: 'Products & Modules' },
  { id: '03-automation', number: '03', label: '03. AUTOMATION', shortLabel: 'Automation & IoT' },
  { id: '04-specialist-in', number: '04', label: '04. SPECIALIST IN', shortLabel: 'Specialist In' },
  { id: '05-after-sales', number: '05', label: '05. AFTER SALES & SERVICE', shortLabel: 'After Sales & Service' },
  { id: '06-contact-us', number: '06', label: '06. CONTACT US', shortLabel: 'Contact Us' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeScreen,
  onSelectScreen,
  onRequestQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentIndex = NAV_LINKS.findIndex((item) => item.id === activeScreen);
  const currentItem = NAV_LINKS[currentIndex] || NAV_LINKS[0];
  const prevItem = currentIndex > 0 ? NAV_LINKS[currentIndex - 1] : null;
  const nextItem = currentIndex < NAV_LINKS.length - 1 ? NAV_LINKS[currentIndex + 1] : null;

  const handleNavClick = (screenId: ScreenId) => {
    onSelectScreen(screenId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 shadow-2xl">
      {/* 1. TOP BRAND ROW: Big White Logo Card with Sub-words, Tagline, 24X7 Assistant & Quote */}
      <div className="bg-[#0b2318] text-white border-b border-[#1b4332] py-2 sm:py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Big White Logo Card + Words Below Logo + Bold Motto & Tagline */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Big Square White Logo Card with Under-Logo Text */}
            <button
              id="header-logo-card"
              onClick={() => handleNavClick('01-introduction')}
              className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-3.5 shadow-2xl flex flex-col items-center justify-center shrink-0 border border-gray-100 hover:opacity-95 transition-opacity group min-w-[130px] sm:min-w-[170px] lg:min-w-[210px]"
              title="GrainEx - Home"
            >
              <img
                src={BRAND_INFO.logoLight}
                alt="GrainEx Logo"
                className="h-14 sm:h-20 lg:h-24 w-auto object-contain scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Words below logo */}
              <div className="mt-1 sm:mt-2 text-center font-heading font-black tracking-wider uppercase text-[#1b4332] text-[7.5px] sm:text-[10px] lg:text-[11.5px] leading-tight select-none">
                <div className="tracking-widest whitespace-nowrap">CONSULTANCY • ENGINEERING • INSTALLATION</div>
                <div className="tracking-widest mt-0.5 whitespace-nowrap">AUTOMATION • PROCESS</div>
              </div>
            </button>

            {/* Tagline & Headline */}
            <div className="flex flex-col justify-center">
              <h1 className="font-heading font-black text-sm sm:text-xl lg:text-2xl text-white tracking-wide uppercase leading-tight">
                INNOVATE. INTEGRATE. ELEVATE.
              </h1>
              <p className="text-[#a1f4c8] italic text-xs sm:text-sm font-medium tracking-normal mt-0.5">
                Smart Solutions for a Better Tomorrow
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#116c4a] text-[#a1f4c8] text-[10px] sm:text-xs font-mono font-bold border border-[#a1f4c8]/30">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  24X7 Service Assistant
                </span>
              </div>
            </div>
          </div>

          {/* Right: Phone, 24X7 & Request A Quote Pill Button */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Phone Number & 24x7 indicator */}
            <div className="hidden md:flex flex-col items-end text-right">
              <span className="text-[10px] font-mono font-bold text-[#a1f4c8] uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                24X7 SERVICE ASSISTANT
              </span>
              <a
                id="header-phone-contact"
                href={`tel:${BRAND_INFO.phoneFormatted}`}
                className="flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-white hover:text-[#a1f4c8] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#a1f4c8]" />
                <span>{BRAND_INFO.phone}</span>
              </a>
            </div>

            {/* Request A Quote White Pill Button */}
            <button
              id="header-request-quote-pill"
              onClick={onRequestQuote}
              className="bg-white hover:bg-[#e8f5e9] text-[#0b2318] hover:text-[#0b2318] px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-heading font-black uppercase tracking-wider transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              REQUEST A QUOTE
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. SUB-HEADER SCREEN NAVIGATION STRIP WITH EMBEDDED PREV / NEXT CONTROLS */}
      <div className="bg-[#0e2c20] border-b border-[#2d6a4f]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-1.5 gap-2">
            
            {/* Left/Center: 6 Screen Navigation Tabs */}
            <nav className="hidden lg:flex items-center gap-1 overflow-x-auto">
              {NAV_LINKS.map((item) => {
                const isActive = activeScreen === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-tab-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`py-2 px-2.5 xl:px-3 text-xs xl:text-[13px] font-heading font-extrabold uppercase tracking-wider transition-all relative whitespace-nowrap ${
                      isActive
                        ? 'text-[#a1f4c8] font-black'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#a1f4c8] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Screen Title Indicator */}
            <div className="lg:hidden flex items-center gap-2 text-white py-1">
              <span className="px-2 py-0.5 bg-[#116c4a] text-[#a1f4c8] font-mono font-bold text-xs rounded">
                SCREEN {currentItem.number}
              </span>
              <span className="font-heading font-bold text-xs uppercase text-gray-200 truncate">
                {currentItem.shortLabel}
              </span>
            </div>

            {/* Right: Screen Navigation Stepper (01-06 Pills + Next Screen Button) in Header */}
            <div className="flex items-center gap-2">
              {/* Prev Button */}
              {prevItem && (
                <button
                  id="header-nav-prev-btn"
                  onClick={() => handleNavClick(prevItem.id)}
                  className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-heading font-bold transition-all"
                  title={`Go back to ${prevItem.shortLabel}`}
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-[#a1f4c8]" />
                  <span className="hidden md:inline">Prev</span>
                </button>
              )}

              {/* 01 to 06 Stepper Pills */}
              <div className="flex items-center gap-1 bg-black/30 p-1 rounded-lg border border-white/10">
                {NAV_LINKS.map((item) => {
                  const isActive = item.id === activeScreen;
                  return (
                    <button
                      key={item.id}
                      id={`header-step-pill-${item.number}`}
                      onClick={() => handleNavClick(item.id)}
                      title={`Jump to Screen ${item.number}: ${item.shortLabel}`}
                      className={`w-7 h-7 rounded-md text-xs font-mono font-bold flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-[#116c4a] text-[#a1f4c8] shadow font-black scale-105 border border-[#a1f4c8]/50'
                          : 'text-gray-300 hover:bg-white/15 hover:text-white'
                      }`}
                    >
                      {item.number}
                    </button>
                  );
                })}
              </div>

              {/* Next Screen Button (Highlight CTA) */}
              {nextItem ? (
                <button
                  id="header-nav-next-btn"
                  onClick={() => handleNavClick(nextItem.id)}
                  className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg bg-[#116c4a] hover:bg-[#158058] text-white text-xs font-heading font-bold transition-all shadow-md border border-[#a1f4c8]/40 active:scale-95 group"
                >
                  <div className="text-left hidden sm:block">
                    <span className="text-[9px] font-mono uppercase text-[#a1f4c8] block leading-none">
                      NEXT: SCREEN {nextItem.number}
                    </span>
                    <span className="text-xs font-bold leading-tight block text-white truncate max-w-[130px]">
                      {nextItem.shortLabel}
                    </span>
                  </div>
                  <span className="sm:hidden font-bold">Next</span>
                  <div className="p-1 rounded bg-white/20 text-[#a1f4c8] group-hover:translate-x-0.5 transition-transform">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              ) : (
                <button
                  id="header-nav-proposal-btn"
                  onClick={onRequestQuote}
                  className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg bg-[#116c4a] hover:bg-[#158058] text-white text-xs font-heading font-bold transition-all shadow-md border border-[#a1f4c8]/40 active:scale-95"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#a1f4c8]" />
                </button>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* 3. MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-[#0e2c20] border-b border-[#2d6a4f] px-4 py-4 space-y-2 shadow-2xl animate-in slide-in-from-top duration-150 text-white"
        >
          <div className="grid grid-cols-1 gap-1">
            {NAV_LINKS.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#116c4a] text-[#a1f4c8] border border-[#a1f4c8]/30'
                      : 'text-gray-200 hover:bg-white/10'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#a1f4c8]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <div className="px-3 py-1.5 bg-[#116c4a] rounded-lg text-xs font-mono font-bold text-[#a1f4c8] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>24X7 Service Assistant Available</span>
            </div>
            <a
              href={`tel:${BRAND_INFO.phoneFormatted}`}
              className="flex items-center justify-center gap-2 py-2 bg-white/10 rounded-lg text-xs font-mono font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-[#a1f4c8]" />
              <span>{BRAND_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
