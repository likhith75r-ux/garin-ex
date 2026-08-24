import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, Shield, Layers } from 'lucide-react';
import { ScreenId } from '../types';
import { BRAND_INFO, NAV_ITEMS } from '../data/grainExData';

interface NavbarProps {
  activeScreen: ScreenId;
  onSelectScreen: (screen: ScreenId) => void;
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeScreen,
  onSelectScreen,
  onRequestQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (screenId: ScreenId) => {
    onSelectScreen(screenId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1b4332]/95 backdrop-blur-md shadow-lg border-b border-[#2d6a4f]/50 py-2.5'
          : 'bg-[#1b4332] border-b border-[#2d6a4f]/40 py-3.5'
      }`}
    >
      {/* Top Banner Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div
            id="brand-logo-button"
            role="button"
            tabIndex={0}
            onClick={() => handleNavClick('01-introduction')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleNavClick('01-introduction'); }}
            className="flex items-center gap-3 cursor-pointer group focus:outline-none"
          >
            <div className="bg-white/10 p-1.5 rounded-lg border border-white/20 group-hover:border-[#a1f4c8]/60 transition-colors">
              <img
                src={BRAND_INFO.logoLight}
                alt="GrainEx Logo"
                className="h-9 md:h-10 w-auto object-contain brightness-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-xl md:text-2xl text-white tracking-wider">
                  Grain<span className="text-[#a1f4c8]">Ex</span>
                </span>
                <span className="hidden sm:inline-flex px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-[#116c4a] text-[#a1f4c8] rounded">
                  ISO 9001
                </span>
              </div>
              <span className="text-[10px] tracking-[0.22em] text-[#a1f4c8]/90 font-medium uppercase -mt-0.5">
                {BRAND_INFO.tagline}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (6 Screens) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-md transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white/15 text-[#a1f4c8] shadow-inner font-bold border border-white/10'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-[10px] font-mono opacity-60">{item.number}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action & Contact Info */}
          <div className="hidden md:flex items-center gap-3 xl:gap-4">
            <a
              id="header-phone-link"
              href={`tel:${BRAND_INFO.phoneFormatted}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#a1f4c8]" />
              <span>{BRAND_INFO.phone}</span>
            </a>

            <button
              id="header-quote-button"
              onClick={onRequestQuote}
              className="bg-[#116c4a] hover:bg-[#158058] text-white px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-1.5 border border-[#a1f4c8]/30 group active:scale-95"
            >
              <span>Get Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="header-mobile-quote-btn"
              onClick={onRequestQuote}
              className="bg-[#116c4a] text-white px-2.5 py-1.5 rounded text-xs font-bold uppercase"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#1b4332] border-t border-[#2d6a4f] px-4 pt-3 pb-6 space-y-2 shadow-2xl mt-3 animate-in slide-in-from-top duration-200"
        >
          <div className="grid grid-cols-1 gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#116c4a] text-white font-bold'
                      : 'text-gray-200 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#a1f4c8]">{item.number}</span>
                    <span>{item.label}</span>
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#a1f4c8]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
            <a
              id="mobile-call-link"
              href={`tel:${BRAND_INFO.phoneFormatted}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/10 text-white rounded-lg text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-[#a1f4c8]" />
              <span>Call {BRAND_INFO.phone}</span>
            </a>
            <button
              id="mobile-quote-action-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-3 bg-[#116c4a] hover:bg-[#158058] text-white font-bold rounded-lg text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
            >
              <span>Request Fast Technical Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
