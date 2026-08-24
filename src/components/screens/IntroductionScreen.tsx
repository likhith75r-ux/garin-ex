import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
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
    <section
      id="01-introduction"
      className="relative min-h-[calc(100vh-140px)] flex flex-col justify-center py-10 sm:py-16 overflow-hidden"
    >
      {/* Immersive Agriculture / Green Paddy Field Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkhqNPTAudRY4SXGJisiK4X3NuOmfLNd-4weIf6NZ80ejzMGkwJgha_0LsLV5OG62kgVY-oBjf0n5vdUAT9XAfZVF30Mgg_bm-HTmY2Rd7X9eKFfcb0lltvUPHbsWa0mq-tdrQFjSj21Z4_psfARsaMHBfnrxyrvs7hJXek1xSaEkOyNl0d36OX4eGnVUKSsadA8P1O9sXlATVnlA3YzsmE-_UZQCS39okBlKILZXA5B_p7drvFDHz3qOuRycuVNYzIA')`,
        }}
      >
        {/* Deep Green Tint Overlay as shown in screenshot */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#092217]/90 via-[#0d2e20]/88 to-[#092217]/95" />
        <div className="absolute inset-0 tech-dots-pattern opacity-20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Giant Centered Headline: INTRODUCTION */}
        <div className="text-center pt-2">
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-[#b8f5d4] tracking-[0.18em] uppercase drop-shadow-md">
            INTRODUCTION
          </h1>
        </div>

        {/* 5 Distinct Narrative Paragraphs Matching the Exact Corporate Text */}
        <div className="space-y-5 sm:space-y-6 text-white/95 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed font-normal">
          {/* Paragraph 1 */}
          <div className="p-4 sm:p-5 rounded-xl bg-black/25 backdrop-blur-sm border-l-4 border-[#a1f4c8] shadow-md">
            <p>
              <strong className="text-white font-bold">GrainEx – Innovation & Technology</strong> is an engineering-driven company specializing in paddy processing plants, rice processing machinery, automation and integrated processing solutions. We provide complete plant planning and layout solutions, customized machinery and process systems designed according to the specific production requirements, site conditions and operational needs of our customers.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="p-4 sm:p-5 rounded-xl bg-black/25 backdrop-blur-sm border-l-4 border-[#a1f4c8] shadow-md">
            <p>
              GrainEx brings together engineering expertise, modern technology, equipment solutions and process integration to deliver reliable and efficient solutions for the paddy and rice processing industry. From individual machines and processing systems to complete plant solutions, we focus on developing practical and customized solutions that support improved productivity, consistent quality and efficient plant operation.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="p-4 sm:p-5 rounded-xl bg-black/25 backdrop-blur-sm border-l-4 border-[#a1f4c8] shadow-md">
            <p>
              Our capabilities extend across engineering, equipment supply, installation, automation, commissioning and technical support. We work closely with our customers throughout the project lifecycle, ensuring that each stage of the processing system is properly planned, integrated and implemented.
            </p>
          </div>

          {/* Paragraph 4 */}
          <div className="p-4 sm:p-5 rounded-xl bg-black/25 backdrop-blur-sm border-l-4 border-[#a1f4c8] shadow-md">
            <p>
              At GrainEx, quality, reliability, efficiency and customer satisfaction are at the core of our approach. Our engineering and service team is committed to supporting customers beyond installation, with technical assistance, maintenance, modernization, process improvements, performance upgrades and solutions for existing processing equipment and drying systems.
            </p>
          </div>

          {/* Paragraph 5 */}
          <div className="p-4 sm:p-5 rounded-xl bg-black/25 backdrop-blur-sm border-l-4 border-[#a1f4c8] shadow-md">
            <p>
              Our objective is to combine innovation, engineering expertise and practical industry knowledge to create smarter processing solutions that deliver long-term value to our customers.
            </p>
          </div>
        </div>

        {/* Signature Quote Banner as shown in screenshot */}
        <div className="pt-4 text-center">
          <div className="inline-block p-6 sm:p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-[#a1f4c8]/30 max-w-3xl shadow-2xl">
            <blockquote className="font-heading italic font-bold text-lg sm:text-xl md:text-2xl text-white leading-snug">
              “Innovation and expertise together create the foundation for a better tomorrow.”
            </blockquote>
            <p className="mt-3 font-heading font-black text-xs sm:text-sm uppercase tracking-[0.2em] text-[#a1f4c8]">
              GRAINEX – SMART SOLUTIONS FOR A BETTER TOMORROW.
            </p>
          </div>
        </div>

        {/* Quick Action Navigation Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            id="intro-explore-products-btn"
            onClick={() => onNavigate('02-product')}
            className="px-6 py-3 bg-[#116c4a] hover:bg-[#158058] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 border border-[#a1f4c8]/40 active:scale-95"
          >
            <span>Explore Products & Modules</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="intro-request-proposal-btn"
            onClick={onRequestQuote}
            className="px-6 py-3 bg-white text-[#092217] hover:bg-[#b8f5d4] font-heading font-black text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow-lg transition-all active:scale-95"
          >
            Request Equipment Quote
          </button>
        </div>
      </div>
    </section>
  );
};
