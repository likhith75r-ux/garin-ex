import React from 'react';
import { MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '../data/grainExData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip badge */}
      <div className="hidden sm:flex items-center gap-2 bg-[#1b4332] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-[#2d6a4f] animate-bounce">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
        <span className="font-mono font-bold text-[#a1f4c8]">24X7 Service Assistant</span>
      </div>

      <a
        id="floating-whatsapp-btn"
        href={BRAND_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-wa-pulse"
      >
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zM17.5 14.33c-.22.61-1.28 1.17-1.78 1.22-.47.05-1.08.08-3.48-.91-2.92-1.21-4.79-4.22-4.93-4.41-.15-.19-1.18-1.57-1.18-2.99s.74-2.12 1.01-2.41c.27-.29.6-.36.8-.36.2 0 .4 0 .58.01.19.01.44-.07.69.52.26.61.88 2.14.96 2.3.08.16.13.35.02.56-.1.22-.16.35-.31.53-.16.18-.33.4-.47.54-.16.15-.32.32-.14.63.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.53.31.16.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.16.29.1 1.83.86 2.14 1.02.32.16.53.24.61.37.08.13.08.77-.14 1.38z" />
        </svg>
      </a>
    </div>
  );
};
