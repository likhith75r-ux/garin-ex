import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Cpu, Factory, FileText, Sparkles } from 'lucide-react';
import { ProductModule } from '../../types';
import { BRAND_INFO } from '../../data/grainExData';

interface ProductDetailModalProps {
  product: ProductModule | null;
  onClose: () => void;
  onInquire: (productTitle: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onInquire,
}) => {
  if (!product) return null;

  return (
    <div
      id="product-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="product-detail-modal-dialog"
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 animate-in zoom-in-95 duration-200 text-gray-900 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#1b4332] text-white p-5 px-6 flex items-center justify-between border-b border-[#2d6a4f] z-10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 bg-[#116c4a] text-[#a1f4c8] text-xs font-mono font-bold rounded">
              {product.moduleCode}
            </span>
            <h3 className="font-heading font-black text-xl md:text-2xl text-white">
              {product.title}
            </h3>
          </div>
          <button
            id="close-product-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 space-y-6 flex-1">
          {/* Main Visual & Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 rounded-xl overflow-hidden bg-gray-100 shadow-md border border-gray-200 max-h-72">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#116c4a] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Heavy-Duty Industrial Specification</span>
              </div>
              <h4 className="font-heading font-extrabold text-2xl text-[#1b4332]">
                {product.title}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {product.fullDescription}
              </p>
              <div className="p-3 bg-[#f0f4f1] rounded-lg border border-gray-200 flex items-center justify-between">
                <span className="text-xs text-gray-600 font-semibold">Standard Capacity:</span>
                <span className="font-heading font-bold text-sm text-[#1b4332]">{product.capacityRange}</span>
              </div>
            </div>
          </div>

          {/* Technical Specs Table */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <h5 className="font-heading font-bold text-base text-[#1b4332] uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#116c4a]" />
              <span>Engineering Specifications</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(product.specs).map(([label, val]) => (
                <div key={label} className="p-3 bg-[#f9faf6] rounded-lg border border-gray-200 flex justify-between items-center text-xs">
                  <span className="font-semibold text-gray-600">{label}:</span>
                  <span className="font-bold text-[#1b4332] text-right ml-2">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <h5 className="font-heading font-bold text-base text-[#1b4332] uppercase tracking-wider flex items-center gap-2">
              <Factory className="w-4 h-4 text-[#116c4a]" />
              <span>Key Technical Highlights</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 p-2 rounded bg-[#f9faf6]">
                  <CheckCircle2 className="w-4 h-4 text-[#116c4a] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="space-y-2 pt-4 border-t border-gray-200">
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-gray-500">
              Typical Grain Line Applications
            </h5>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#1b4332]/10 text-[#1b4332] text-xs font-semibold rounded-full">
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-gray-50 p-4 px-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3">
          <a
            id="modal-direct-whatsapp-btn"
            href={`https://wa.me/919789325252?text=Hello%20GrainEx,%20I%20would%20like%20to%20get%20technical%20details%20for%20${encodeURIComponent(product.title)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-heading font-bold text-[#116c4a] hover:underline"
          >
            Chat with Engineer about {product.title} →
          </a>

          <div className="flex items-center gap-3">
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-heading font-bold uppercase tracking-wider rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              id="modal-request-quote-action"
              onClick={() => {
                onClose();
                onInquire(product.title);
              }}
              className="px-5 py-2 bg-[#116c4a] hover:bg-[#158058] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg shadow transition-all flex items-center gap-1.5"
            >
              <span>Get Quotation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
