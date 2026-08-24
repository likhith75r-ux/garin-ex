import React from 'react';
import { Phone, Mail, Globe, MapPin, ArrowUp, ArrowRight, ShieldCheck, Award, CheckCircle } from 'lucide-react';
import { BRAND_INFO, NAV_ITEMS } from '../data/grainExData';
import { ScreenId } from '../types';

interface FooterProps {
  onSelectScreen: (screen: ScreenId) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectScreen, onRequestQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0b2118] text-white pt-16 pb-10 border-t border-[#1b4332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Callout Box */}
        <div className="bg-gradient-to-r from-[#116c4a] to-[#1b4332] rounded-2xl p-8 md:p-10 mb-14 shadow-2xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#a1f4c8] text-xs font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>Turnkey Industrial Excellence</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white">
              Ready to Upgrade Your Paddy & Rice Processing Plant?
            </h3>
            <p className="text-gray-200 text-sm md:text-base max-w-2xl">
              Talk directly with GrainEx chief processing engineers for plant layout, energy optimization, and turnkey automation consultation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              id="footer-cta-quote-btn"
              onClick={onRequestQuote}
              className="px-6 py-3.5 bg-white text-[#1b4332] hover:bg-[#a1f4c8] font-heading font-black text-sm uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group active:scale-95"
            >
              <span>Get Free Proposal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              id="footer-cta-whatsapp-btn"
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-heading font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg transition-all flex items-center gap-2 active:scale-95"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-lg border border-white/20">
                <img
                  src={BRAND_INFO.logoLight}
                  alt="GrainEx Logo"
                  className="h-9 w-auto object-contain brightness-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-heading font-black text-2xl text-white tracking-wider block">
                  Grain<span className="text-[#a1f4c8]">Ex</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#a1f4c8] font-bold uppercase block -mt-1">
                  {BRAND_INFO.tagline}
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Pioneering modern industrial grain engineering. Delivering precision dryers, hydrothermal parboiling lines, automated storage, and intelligent SCADA plant control systems.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#a1f4c8] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Smart Solutions for a Better Tomorrow</span>
            </div>
          </div>

          {/* Col 2: Navigation Screens */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider">
              Screen Directory
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-nav-${item.id}`}
                    onClick={() => onSelectScreen(item.id)}
                    className="text-gray-300 hover:text-[#a1f4c8] transition-colors flex items-center gap-2 text-left"
                  >
                    <span className="text-xs font-mono text-[#a1f4c8]/70">{item.number}</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Specialist Capabilities */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider">
              Engineered Systems
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#a1f4c8]" />
                <span>Paddy Storage Bins & Silos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#a1f4c8]" />
                <span>Continuous Column Dryers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#a1f4c8]" />
                <span>Hydrothermal Parboiling Plants</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#a1f4c8]" />
                <span>Thermal Process Water Systems</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#a1f4c8]" />
                <span>Husk Steam Boiler Plants</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#a1f4c8]" />
                <span>Paddy & Polished Rice Coolers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#a1f4c8]" />
                <span>SCADA & PLC Automation</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Directly */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                id="footer-call-link"
                href={`tel:${BRAND_INFO.phoneFormatted}`}
                className="flex items-start gap-3 text-gray-300 hover:text-white group"
              >
                <Phone className="w-4 h-4 text-[#a1f4c8] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-xs text-gray-400 block font-mono">Mobile / WhatsApp</span>
                  <span className="font-bold text-white text-base">{BRAND_INFO.phone}</span>
                </div>
              </a>

              <a
                id="footer-email-link"
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-start gap-3 text-gray-300 hover:text-white group"
              >
                <Mail className="w-4 h-4 text-[#a1f4c8] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-xs text-gray-400 block font-mono">Official Email</span>
                  <span className="break-all font-medium">{BRAND_INFO.email}</span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-[#a1f4c8] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-gray-400 block font-mono">Headquarters</span>
                  <span>{BRAND_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} GrainEx - Innovation & Technology. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#a1f4c8]">Precision Industrial Engineering</span>
            <span>•</span>
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
