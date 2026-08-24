import React from 'react';
import { ScreenId } from '../types';
import { NAV_ITEMS } from '../data/grainExData';
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';

interface ScreenBarProps {
  activeScreen: ScreenId;
  onSelectScreen: (screenId: ScreenId) => void;
}

export const ScreenBar: React.FC<ScreenBarProps> = ({
  activeScreen,
  onSelectScreen,
}) => {
  const currentIndex = NAV_ITEMS.findIndex((item) => item.id === activeScreen);
  const currentItem = NAV_ITEMS[currentIndex] || NAV_ITEMS[0];

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectScreen(NAV_ITEMS[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < NAV_ITEMS.length - 1) {
      onSelectScreen(NAV_ITEMS[currentIndex + 1].id);
    }
  };

  return (
    <div className="bg-[#0e2c20] text-white border-b border-[#2d6a4f]/50 pt-16 sm:pt-20 pb-3 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Active Screen Indicator */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <div className="flex items-center gap-1 bg-[#116c4a] text-[#a1f4c8] px-2.5 py-1 rounded-md text-xs font-mono font-bold">
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>SCREEN {currentItem.number} OF 06</span>
            </div>
            <h1 className="font-heading font-bold text-sm sm:text-base text-white tracking-wide">
              {currentItem.label}
            </h1>
          </div>

          {/* Quick Screen Tabs (6 Screens) */}
          <div className="flex items-center gap-1 overflow-x-auto max-w-full py-1 scrollbar-none">
            {NAV_ITEMS.map((item) => {
              const isActive = item.id === activeScreen;
              return (
                <button
                  key={item.id}
                  id={`screen-tab-direct-${item.number}`}
                  onClick={() => onSelectScreen(item.id)}
                  className={`px-2.5 sm:px-3 py-1 text-xs rounded-md font-mono font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#a1f4c8] text-[#0e2c20] shadow-sm font-black'
                      : 'bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white'
                  }`}
                >
                  <span>{item.number}</span>
                  <span className="hidden md:inline font-sans font-medium text-[11px]">
                    {item.label.split(' ')[0]}
                  </span>
                </button>
              );
            })}

            {/* Quick Prev / Next Arrows */}
            <div className="flex items-center gap-1 ml-1 border-l border-white/20 pl-2">
              <button
                id="screen-bar-prev-btn"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-1 rounded bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors"
                title="Previous Screen (Left Arrow)"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                id="screen-bar-next-btn"
                onClick={handleNext}
                disabled={currentIndex === NAV_ITEMS.length - 1}
                className="p-1 rounded bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors"
                title="Next Screen (Right Arrow)"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
