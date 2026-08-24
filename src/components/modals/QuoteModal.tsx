import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { BRAND_INFO, PRODUCT_MODULES } from '../../data/grainExData';

interface QuoteModalProps {
  isOpen: boolean;
  initialProduct?: string;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  initialProduct = '',
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(initialProduct || 'Complete Turnkey Paddy & Rice Plant');
  const [capacity, setCapacity] = useState('100 TPD');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setSelectedProduct(initialProduct);
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleWhatsAppInstant = () => {
    const text = `*Quick Quote Request*%0A*Name:* ${name || 'N/A'}%0A*Company:* ${company || 'N/A'}%0A*Phone:* ${phone || 'N/A'}%0A*Requirement:* ${selectedProduct}%0A*Capacity:* ${capacity}`;
    window.open(`https://wa.me/919789325252?text=${text}`, '_blank');
  };

  return (
    <div
      id="quote-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="quote-modal-dialog"
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-gray-200 overflow-hidden animate-in zoom-in-95 duration-200 text-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1b4332] text-white p-5 px-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-[#a1f4c8] uppercase tracking-wider block">
              GrainEx Engineering Proposal
            </span>
            <h3 className="font-heading font-black text-xl text-white">
              Request Fast Equipment Quote
            </h3>
          </div>
          <button
            id="close-quote-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-[#116c4a] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-8 h-8 text-[#a1f4c8]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-xl text-[#1b4332]">
                  Quote Request Received!
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Our applications engineer is preparing the commercial estimate for <strong className="text-[#1b4332]">{selectedProduct}</strong>. We will reach out to {phone || 'your phone'} shortly.
                </p>
              </div>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  id="quote-whatsapp-shortcut"
                  onClick={handleWhatsAppInstant}
                  className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly to WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-heading font-bold text-xs uppercase tracking-wider rounded-lg"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Full Name *</label>
                <input
                  id="quote-name-input"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#116c4a]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Mobile / WhatsApp *</label>
                  <input
                    id="quote-phone-input"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#116c4a]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Mill / Enterprise Name</label>
                  <input
                    id="quote-company-input"
                    type="text"
                    placeholder="Rice Mill / Firm Name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#116c4a]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Equipment / System Required</label>
                <select
                  id="quote-product-select"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3 py-2 text-xs font-medium focus:outline-none focus:border-[#116c4a]"
                >
                  <option value="Complete Turnkey Paddy & Rice Plant">Complete Turnkey Paddy & Rice Plant</option>
                  {PRODUCT_MODULES.map((m) => (
                    <option key={m.id} value={`${m.moduleCode}: ${m.title}`}>
                      {m.moduleCode}: {m.title}
                    </option>
                  ))}
                  <option value="Plant Automation & SCADA Upgrades">Plant Automation & SCADA Upgrades</option>
                  <option value="Tamil Nadu Process Custom Line">Tamil Nadu Process Custom Line</option>
                  <option value="After Sales & AMC Support">After Sales & AMC Support</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Target Throughput Capacity</label>
                <select
                  id="quote-capacity-select"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3 py-2 text-xs font-medium focus:outline-none focus:border-[#116c4a]"
                >
                  <option value="Under 50 TPD">Under 50 TPD</option>
                  <option value="100 TPD">100 TPD (Standard Commercial)</option>
                  <option value="200 TPD">200 TPD (High Capacity)</option>
                  <option value="300+ TPD">300+ TPD (Industrial Mega Mill)</option>
                </select>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  id="submit-fast-quote-btn"
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-3 bg-[#116c4a] hover:bg-[#158058] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? 'Submitting...' : 'Get Instant Pricing'}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
