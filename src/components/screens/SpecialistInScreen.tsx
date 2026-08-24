import React, { useState } from 'react';
import { Sliders, Layers, Sparkles, Compass, CheckCircle2, ArrowRight, ShieldAlert, Award, FileText, Check } from 'lucide-react';
import { SPECIALIST_CAPABILITIES, TURNKEY_PHASES } from '../../data/grainExData';
import { ScreenId } from '../../types';

interface SpecialistInScreenProps {
  onRequestQuote: (context?: string) => void;
  onNavigate: (screenId: ScreenId) => void;
}

export const SpecialistInScreen: React.FC<SpecialistInScreenProps> = ({
  onRequestQuote,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  return (
    <section id="04-specialist-in" className="pt-6 pb-12 bg-[#f9faf6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Screen Header Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-300 pb-4 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 bg-[#1b4332] text-white text-xs font-mono font-bold rounded">
                SCREEN 04 OF 06
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#116c4a]">
                Core Engineering Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#1b4332] uppercase tracking-tight">
              Specialist In
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-1 max-w-2xl">
              Unrivaled process engineering across complex hydrothermal rice treatments, advanced turnkey installations, and regional grain optimizations.
            </p>
          </div>

          <button
            id="specialist-consult-btn"
            onClick={() => onRequestQuote('Turnkey Project & Process Engineering Consultation')}
            className="px-5 py-3 bg-[#116c4a] hover:bg-[#158058] text-white rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-all shadow hover:shadow-lg flex items-center gap-2 self-start md:self-auto"
          >
            <span>Consult Chief Engineer</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Hero Atmospheric Banner with Authentic Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-300 mb-12 min-h-[320px] md:min-h-[380px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAr3OTQw-XCPfRkJ1YGaqVMgiJAE-ykz9oD8kHSJknYsZBYAPMrdFubOBeo83knFBhReEpd8LKEk5XHMK-anBkpgkvtXNo6W79y0_uBGK4e_FR6uuoXNiahVAevyUgAWD-u3DBIAbo4-jqWkpVHDgu8OBuKl7Ke6TniqsH_cweIV9azMQYz5-bQI8J-Mu351uXFvqteHM6tjP5fVNXAoFlS_r5-Z8HcEXeN3iUYqQok8SBy4gkK_pU9')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#012d1d]/90 via-[#012d1d]/75 to-transparent" />
          </div>

          <div className="relative z-10 p-6 sm:p-10 md:p-12 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#a1f4c8] text-xs font-bold uppercase tracking-widest border border-white/20">
              <Award className="w-3.5 h-3.5" />
              <span>Proven Process Track Record</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white uppercase leading-tight">
              Pioneering Modern Hydrothermal & Steam Processing
            </h3>

            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              Every grain variety requires distinct hydrothermal kinetics. GrainEx engineers design custom recipe automation that locks in kernel strength, produces uniform golden translucency, and maximizes market recovery rates.
            </p>
          </div>
        </div>

        {/* 5 Core Specialist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {SPECIALIST_CAPABILITIES.map((capability) => {
            const isFullWidth = capability.id === 'tamil-nadu-process';
            return (
              <div
                key={capability.id}
                id={`specialist-card-${capability.id}`}
                className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col justify-between ${
                  isFullWidth ? 'md:col-span-2 bg-gradient-to-br from-white to-[#f0f7f3] border-[#116c4a]/30' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Card Header & Status Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#1b4332] text-[#a1f4c8] rounded-xl shadow">
                        {capability.id === 'plant-automation' && <Sliders className="w-5 h-5" />}
                        {capability.id === 'steam-rice' && <Layers className="w-5 h-5" />}
                        {capability.id === 'parboiled-process' && <Sparkles className="w-5 h-5" />}
                        {capability.id === 'turnkey-projects' && <Compass className="w-5 h-5" />}
                        {capability.id === 'tamil-nadu-process' && <CheckCircle2 className="w-5 h-5 text-[#a1f4c8]" />}
                      </div>
                      <h3 className="font-heading font-extrabold text-xl text-[#1b4332]">
                        {capability.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#116c4a]/10 text-[#116c4a] text-xs font-bold border border-[#116c4a]/20">
                      <span>{capability.statusBadge.value}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {capability.description}
                  </p>

                  {/* Tags */}
                  {capability.tags && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {capability.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-[#f0f4f1] text-[#1b4332] text-xs font-semibold rounded-md border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    id={`inquire-specialist-${capability.id}`}
                    onClick={() => onRequestQuote(`Specialist Inquiry: ${capability.title}`)}
                    className="text-xs font-heading font-bold uppercase tracking-wider text-[#116c4a] hover:text-[#1b4332] flex items-center gap-1.5 group"
                  >
                    <span>Request Process Flowchart</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] font-mono text-gray-400">ISO 9001 Process Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Turnkey Project Execution Timeline */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200">
          <div className="space-y-2 border-b border-gray-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#116c4a]">
              Turnkey Execution Methodology
            </span>
            <h3 className="text-2xl font-heading font-bold text-[#1b4332]">
              6 Phases from Raw Land to Commercial Milling Production
            </h3>
            <p className="text-gray-600 text-sm max-w-3xl">
              GrainEx takes complete accountability for your mill project. From initial soil and capacity survey to trial load handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TURNKEY_PHASES.map((phase, idx) => (
              <div
                key={phase.step}
                id={`turnkey-phase-${phase.step}`}
                onClick={() => setSelectedPhase(idx)}
                className={`p-5 rounded-xl border transition-all cursor-pointer ${
                  selectedPhase === idx
                    ? 'bg-[#1b4332] text-white border-[#1b4332] shadow-lg scale-102'
                    : 'bg-[#f9faf6] hover:bg-white text-gray-800 border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-sm font-black px-2 py-0.5 rounded ${
                      selectedPhase === idx ? 'bg-[#a1f4c8] text-[#1b4332]' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    PHASE {phase.step}
                  </span>
                  <Check className={`w-4 h-4 ${selectedPhase === idx ? 'text-[#a1f4c8]' : 'text-gray-400'}`} />
                </div>
                <h4 className="font-heading font-bold text-base mb-1.5">{phase.title}</h4>
                <p
                  className={`text-xs leading-relaxed ${
                    selectedPhase === idx ? 'text-gray-200' : 'text-gray-600'
                  }`}
                >
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
