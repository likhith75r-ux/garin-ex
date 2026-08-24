import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Cpu, Wrench, Sparkles, ChevronDown } from 'lucide-react';
import { BRAND_INFO } from '../../data/grainExData';
import { ScreenId } from '../../types';

interface IntroductionScreenProps {
  onNavigate: (screenId: ScreenId) => void;
  onRequestQuote: () => void;
}

export const IntroductionScreen: React.FC<IntroductionScreenProps> = ({
  onNavigate,
  onRequestQuote,
}) => {
  return (
    <section id="01-introduction" className="relative pt-6 pb-12">
      {/* Screen Header Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2">
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-[#1b4332] text-white text-xs font-mono font-bold rounded">
              SCREEN 01 OF 06
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#116c4a]">
              Corporate Overview & Heritage
            </span>
          </div>
          <span className="text-xs text-gray-500 font-medium hidden sm:inline">
            ISO 9001:2015 Certified Manufacturing
          </span>
        </div>
      </div>

      {/* Hero Banner with Authentic Background Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#1b4332]/20 min-h-[520px] md:min-h-[600px] flex items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkhqNPTAudRY4SXGJisiK4X3NuOmfLNd-4weIf6NZ80ejzMGkwJgha_0LsLV5OG62kgVY-oBjf0n5vdUAT9XAfZVF30Mgg_bm-HTmY2Rd7X9eKFfcb0lltvUPHbsWa0mq-tdrQFjSj21Z4_psfARsaMHBfnrxyrvs7hJXek1xSaEkOyNl0d36OX4eGnVUKSsadA8P1O9sXlATVnlA3YzsmE-_UZQCS39okBlKILZXA5B_p7drvFDHz3qOuRycuVNYzIA')`,
            }}
          >
            {/* Dark & Forest Green Gradient Overlay for optimal contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b2118]/95 via-[#1b4332]/85 to-[#0b2118]/60" />
            <div className="absolute inset-0 tech-dots-pattern opacity-30" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-16 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#a1f4c8]/30 text-[#a1f4c8]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">
                Grain Processing Evolution
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs sm:text-sm md:text-base font-heading font-extrabold uppercase tracking-[0.25em] text-[#a1f4c8]">
                {BRAND_INFO.tagline}
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight tracking-tight uppercase">
                Smart Solutions <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a1f4c8] to-emerald-200">
                  For a Better Tomorrow
                </span>
              </h1>
            </div>

            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              GrainEx is a premier industrial equipment manufacturer specializing in the research, design, fabrication, and commissioning of turnkey paddy and rice processing infrastructure with cutting-edge plant automation.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                id="hero-explore-products-btn"
                onClick={() => onNavigate('02-product')}
                className="px-6 py-3.5 bg-[#116c4a] hover:bg-[#158058] text-white font-heading font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 border border-[#a1f4c8]/30 active:scale-95 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-request-quote-btn"
                onClick={onRequestQuote}
                className="px-6 py-3.5 bg-white text-[#1b4332] hover:bg-[#a1f4c8] font-heading font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
              >
                Request a Quote
              </button>

              <a
                id="hero-whatsapp-btn"
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-sm rounded-lg backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
              >
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Introduction Story Block (Matching Screen 01 text verbatim) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-12 h-1 bg-[#116c4a] rounded-full" />
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#1b4332] tracking-tight uppercase">
                  Introduction
                </h3>
              </div>

              <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p className="font-medium text-gray-900 border-l-4 border-[#116c4a] pl-4 py-1">
                  GrainEx is a high-tech equipment manufacturer specializing in the research and development, design, production, and sales of smart agricultural equipment.
                </p>
                <p>
                  We offer a comprehensive range of products, including <strong className="text-[#1b4332] font-bold">storage bins</strong>, <strong className="text-[#1b4332] font-bold">dryers</strong>, and specialized <strong className="text-[#1b4332] font-bold">Tamil Nadu-type parboiling processes</strong>.
                </p>
                <p>
                  Our business covers <strong className="text-gray-900">grain drying and storage</strong>, <strong className="text-gray-900">comprehensive automation for grain plants</strong>, and <strong className="text-gray-900">professional after-sales services</strong>.
                </p>
              </div>

              {/* Core Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f9faf6] border border-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#116c4a] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading font-bold text-sm text-[#1b4332]">100% Engineered in India</h5>
                    <p className="text-xs text-gray-600">Built to withstand harsh tropical grain handling conditions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f9faf6] border border-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#116c4a] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading font-bold text-sm text-[#1b4332]">Turnkey Single-Source</h5>
                    <p className="text-xs text-gray-600">From foundation civil layouts to trial load commissioning</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics & Badges Panel */}
            <div className="lg:col-span-4 bg-[#1b4332] text-white rounded-xl p-6 sm:p-8 space-y-6 shadow-lg border border-[#2d6a4f]">
              <div className="space-y-1 border-b border-[#2d6a4f] pb-4">
                <span className="text-xs uppercase font-mono text-[#a1f4c8] tracking-wider">
                  Operational Focus
                </span>
                <h4 className="font-heading font-bold text-xl text-white">
                  Engineering Scope
                </h4>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg text-[#a1f4c8]">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-300 block">Module Capacity</span>
                    <span className="font-heading font-bold text-sm text-white">10 TPD to 500+ TPD</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg text-[#a1f4c8]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-300 block">Automation Level</span>
                    <span className="font-heading font-bold text-sm text-white">Integrated SCADA / PLC</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg text-[#a1f4c8]">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-300 block">Service Warranty</span>
                    <span className="font-heading font-bold text-sm text-white">24/7 After-Sales Support</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="intro-contact-shortcut-btn"
                  onClick={() => onNavigate('06-contact-us')}
                  className="w-full py-2.5 bg-[#a1f4c8] hover:bg-emerald-300 text-[#1b4332] font-heading font-black text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <span>Connect With Engineers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
