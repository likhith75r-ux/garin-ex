import React from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { ScreenId } from '../types';
import { NAV_ITEMS } from '../data/grainExData';

interface ScreenPaginationProps {
  activeScreen: ScreenId;
  onSelectScreen: (screenId: ScreenId) => void;
  onRequestQuote?: () => void;
}

export const ScreenPagination: React.FC<ScreenPaginationProps> = ({
  activeScreen,
  onSelectScreen,
  onRequestQuote,
}) => {
  const currentIndex = NAV_ITEMS.findIndex((item) => item.id === activeScreen);
  const prevItem = currentIndex > 0 ? NAV_ITEMS[currentIndex - 1] : null;
  const nextItem = currentIndex < NAV_ITEMS.length - 1 ? NAV_ITEMS[currentIndex + 1] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Previous Screen Button */}
        <div className="w-full md:w-auto flex-1 flex justify-start">
          {prevItem ? (
            <button
              id={`pagination-prev-${prevItem.id}`}
              onClick={() => onSelectScreen(prevItem.id)}
              className="w-full sm:w-auto group flex items-center gap-3 px-5 py-3 rounded-xl bg-[#f9faf6] hover:bg-[#1b4332] text-[#1b4332] hover:text-white border border-gray-200 hover:border-[#1b4332] transition-all shadow-sm"
            >
              <div className="p-2 rounded-lg bg-white group-hover:bg-white/20 text-[#116c4a] group-hover:text-[#a1f4c8] transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase tracking-wider block opacity-70 group-hover:text-[#a1f4c8]">
                  Screen {prevItem.number}
                </span>
                <span className="font-heading font-bold text-xs sm:text-sm">
                  {prevItem.label}
                </span>
              </div>
            </button>
          ) : (
            <div className="hidden sm:block text-xs font-mono text-gray-400 pl-2">
              Start of GrainEx Catalog
            </div>
          )}
        </div>

        {/* Center Screen Indicator Steps (1 to 6) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = item.id === activeScreen;
            return (
              <button
                key={item.id}
                id={`screen-step-pill-${item.number}`}
                onClick={() => onSelectScreen(item.id)}
                title={`Go to Screen ${item.number}: ${item.label}`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  isActive
                    ? 'bg-[#116c4a] text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <span>{item.number}</span>
                <span className="hidden lg:inline text-[11px] font-sans font-medium">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Next Screen Button */}
        <div className="w-full md:w-auto flex-1 flex justify-end">
          {nextItem ? (
            <button
              id={`pagination-next-${nextItem.id}`}
              onClick={() => onSelectScreen(nextItem.id)}
              className="w-full sm:w-auto group flex items-center justify-end gap-3 px-5 py-3 rounded-xl bg-[#116c4a] hover:bg-[#158058] text-white transition-all shadow-md hover:shadow-lg"
            >
              <div className="text-right">
                <span className="text-[10px] font-mono uppercase tracking-wider block text-[#a1f4c8]">
                  Next: Screen {nextItem.number}
                </span>
                <span className="font-heading font-bold text-xs sm:text-sm text-white">
                  {nextItem.label}
                </span>
              </div>
              <div className="p-2 rounded-lg bg-white/20 text-[#a1f4c8] group-hover:translate-x-0.5 transition-transform">
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          ) : (
            onRequestQuote && (
              <button
                id="pagination-finish-quote-btn"
                onClick={onRequestQuote}
                className="w-full sm:w-auto group flex items-center justify-end gap-3 px-5 py-3 rounded-xl bg-[#116c4a] hover:bg-[#158058] text-white transition-all shadow-md"
              >
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-wider block text-[#a1f4c8]">
                    Ready to Build?
                  </span>
                  <span className="font-heading font-bold text-xs sm:text-sm text-white">
                    Request Project Proposal
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-white/20 text-[#a1f4c8]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};
