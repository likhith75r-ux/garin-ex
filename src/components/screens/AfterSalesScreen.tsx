import React, { useState } from 'react';
import { ShieldCheck, Phone, Wrench, Radio, TrendingUp, PackageCheck, ArrowRight, CheckCircle2, Clock, Headphones } from 'lucide-react';
import { SERVICE_OFFERINGS, BRAND_INFO } from '../../data/grainExData';
import { ScreenId } from '../../types';

interface AfterSalesScreenProps {
  onOpenServiceTicket: () => void;
  onRequestQuote: (context?: string) => void;
  onNavigate: (screenId: ScreenId) => void;
}

export const AfterSalesScreen: React.FC<AfterSalesScreenProps> = ({
  onOpenServiceTicket,
  onRequestQuote,
  onNavigate,
}) => {
  return (
    <section id="05-after-sales" className="pt-6 pb-12 bg-[#f4f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Screen Header Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-300 pb-4 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 bg-[#1b4332] text-white text-xs font-mono font-bold rounded">
                SCREEN 05 OF 06
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#116c4a]">
                Dedicated Technical Support
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#1b4332] uppercase tracking-tight">
              After Sales & Service
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-1 max-w-2xl">
              Support beyond installation. Ensuring seamless performance, maximum uptime, and decades of longevity for all your grain processing systems.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="open-service-ticket-btn"
              onClick={onOpenServiceTicket}
              className="px-5 py-3 bg-[#1b4332] hover:bg-[#116c4a] text-white rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-all shadow flex items-center gap-2"
            >
              <Headphones className="w-4 h-4 text-[#a1f4c8]" />
              <span>Raise Service Ticket</span>
            </button>

            <a
              id="emergency-support-call-btn"
              href={`tel:${BRAND_INFO.phoneFormatted}`}
              className="px-4 py-3 bg-white text-[#1b4332] hover:bg-gray-100 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-all border border-gray-300 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#116c4a]" />
              <span>24/7 Helpline</span>
            </a>
          </div>
        </div>

        {/* 2 Main Visual Showcases (Control Room + Engineering Workbench) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: 24/7 Monitoring Control Room */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 flex flex-col group">
            <div className="relative h-64 overflow-hidden bg-gray-900">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4GebLmRbNKiL_OKzFvvd6pKEUvpB2-9ortKahL5vNfY2HdwBvIXNVTB6VFQhpHWZBtvbmK4hxclQctjZqYzKrHRSZtEZdNETP7F5V4GNAl29Xqt8RkcZjvuXKZucRdS4QNIneifTK5GeFwLxtfPY9GZUVt6DFWQH6jQ_I94EMBazEz5S585LbSiJez5CPC8GKYv_WhxBolbaQeBWsw4v7nq9bWewxWrXr6qQg6bYne72uc0By90o2"
                alt="24/7 Grain Control Room Monitoring"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#1b4332] text-[#a1f4c8] text-xs font-mono font-bold uppercase rounded-md shadow">
                  TELE-DIAGNOSTICS
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#116c4a] text-xs font-bold uppercase">
                  <Radio className="w-4 h-4" />
                  <span>Remote Plant Telemetry</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-[#1b4332]">
                  24/7 Monitoring & Support
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Real-time telemetry and cloud diagnostics allow our senior engineers to remotely troubleshoot PLC routines, check sensor calibrations, and prevent unplanned downtime before it affects production.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#116c4a]">
                  Instant remote response within 30 minutes
                </span>
                <button
                  id="after-sales-monitor-inquire"
                  onClick={() => onRequestQuote('24/7 Remote Monitoring Subscription')}
                  className="text-xs font-heading font-bold text-[#1b4332] hover:text-[#116c4a] flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Precision Circuit Engineering & Installation */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 flex flex-col group">
            <div className="relative h-64 overflow-hidden bg-gray-900">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-j5Rf9nkOlhvrtT9fawdWfShjzsCqnqlE12qOaU6j_p2Wu42yH8Cpdp1wV9Dv0Rm5r5fOFxaM5udcFhsP-nTjlxeBIsbkenJzlIIfNCD7iBComsUaxGEYB17eAlg93r2YvVlaN28lA0wSOU_RyJ_nsukXAajDh_MHpIwofvO_Iq7sii6zM06Ebd_vc6pYWiedZ4lZUrG_v67YvqSWuFy6f7HAW2J3S3AymKlQGQptfY4rASecRgwg"
                alt="Precision Circuit and Commissioning Engineering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#1b4332] text-[#a1f4c8] text-xs font-mono font-bold uppercase rounded-md shadow">
                  FIELD ENGINEERING
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#116c4a] text-xs font-bold uppercase">
                  <Wrench className="w-4 h-4" />
                  <span>On-Site Execution</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-[#1b4332]">
                  Installation & Commissioning
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Certified mechanical, electrical, and instrumentation specialists deploy to your plant site for rigorous structural erection, cable harnessing, and dry/wet trial load commissioning.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#116c4a]">
                  Comprehensive operator training included
                </span>
                <button
                  id="after-sales-install-inquire"
                  onClick={() => onRequestQuote('Installation & Commissioning Service')}
                  className="text-xs font-heading font-bold text-[#1b4332] hover:text-[#116c4a] flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Secondary Service Cards (Preventive Maintenance, Upgrades, Spares) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_OFFERINGS.slice(2).map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#f0f4f1] text-[#1b4332] rounded-xl">
                    {service.id === 'preventive-maintenance' && <ShieldCheck className="w-6 h-6 text-[#116c4a]" />}
                    {service.id === 'modernization-upgrades' && <TrendingUp className="w-6 h-6 text-[#116c4a]" />}
                    {service.id === 'spare-parts' && <PackageCheck className="w-6 h-6 text-[#116c4a]" />}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#116c4a]/10 text-[#116c4a] rounded">
                    {service.badge}
                  </span>
                </div>

                <h4 className="font-heading font-bold text-lg text-[#1b4332]">
                  {service.title}
                </h4>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>

                {service.features && (
                  <div className="space-y-1.5 pt-2 border-t border-gray-100">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#116c4a] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-gray-100">
                <button
                  id={`inquire-service-${service.id}`}
                  onClick={() => onRequestQuote(`Service Inquiry: ${service.title}`)}
                  className="w-full py-2 bg-[#f4f5f0] hover:bg-[#116c4a] text-[#1b4332] hover:text-white rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
