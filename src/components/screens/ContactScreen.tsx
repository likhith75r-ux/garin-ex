import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { BRAND_INFO, PRODUCT_MODULES } from '../../data/grainExData';
import { InquiryFormData } from '../../types';

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    location: '',
    productRequired: 'Complete Turnkey Paddy & Rice Plant',
    projectRequirement: '50 - 150 TPD',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsAppSend = () => {
    const text = `*New Inquiry from GrainEx Web App*%0A%0A*Name:* ${formData.name || 'Not specified'}%0A*Company:* ${formData.company || 'Not specified'}%0A*Phone:* ${formData.phone || 'Not specified'}%0A*Email:* ${formData.email || 'Not specified'}%0A*Location:* ${formData.location || 'Not specified'}%0A*Product:* ${formData.productRequired}%0A*Capacity:* ${formData.projectRequirement}%0A*Notes:* ${formData.message || 'Please send detailed technical catalog and pricing proposal.'}`;
    window.open(`https://wa.me/919789325252?text=${text}`, '_blank');
  };

  return (
    <section id="06-contact-us" className="pt-6 pb-12 bg-[#f9faf6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Screen Header Badge */}
        <div className="border-b border-gray-300 pb-4 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2.5 py-1 bg-[#1b4332] text-white text-xs font-mono font-bold rounded">
              SCREEN 06 OF 06
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#116c4a]">
              Direct Engineering Consultation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#1b4332] uppercase tracking-tight">
            Contact Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            Let's build a smarter processing solution together. Reach out to our technical engineering team for equipment specifications, custom layout design, and fast quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone & WhatsApp Card */}
            <a
              id="contact-phone-card"
              href={`tel:${BRAND_INFO.phoneFormatted}`}
              className="block bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-[#1b4332] text-[#a1f4c8] rounded-xl group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#116c4a]">
                    Direct Phone / WhatsApp
                  </span>
                  <h3 className="text-2xl font-heading font-black text-[#1b4332] group-hover:text-[#116c4a] transition-colors">
                    {BRAND_INFO.phone}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Instant response for mill owners, plant managers, and consultants.
                  </p>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              id="contact-email-card"
              href={`mailto:${BRAND_INFO.email}`}
              className="block bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-[#116c4a] text-white rounded-xl group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#116c4a]">
                    Official Engineering Email
                  </span>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-[#1b4332] break-all group-hover:text-[#116c4a] transition-colors">
                    {BRAND_INFO.email}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Send tender inquiries, architectural civil drawings, and RFP documents.
                  </p>
                </div>
              </div>
            </a>

            {/* WhatsApp Direct Chat Box */}
            <div className="bg-gradient-to-br from-[#1b4332] to-[#0b2118] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#2d6a4f] space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#25D366] text-white rounded-xl">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    Need Instant WhatsApp Support?
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    <span className="text-xs text-[#a1f4c8] font-mono font-bold">24X7 Service Assistant Available</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Connect directly with our process applications engineer to discuss grain varieties, moisture curves, and equipment selection.
              </p>
              <a
                id="contact-whatsapp-direct-btn"
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>Chat with Process Engineer</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Proposal & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200">
              <div className="space-y-1 mb-6 border-b border-gray-200 pb-4">
                <div className="flex items-center gap-2 text-[#116c4a] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Technical Proposal Request</span>
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-[#1b4332]">
                  Send Us Your Plant Requirements
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Fill out the details below. Our chief technical team will review and respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div
                  id="inquiry-success-message"
                  className="bg-[#f0f9f4] border border-[#a1f4c8] rounded-2xl p-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300"
                >
                  <div className="w-16 h-16 bg-[#116c4a] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle className="w-8 h-8 text-[#a1f4c8]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-2xl text-[#1b4332]">
                      Thank You, {formData.name || 'Valued Customer'}!
                    </h4>
                    <p className="text-gray-700 text-sm max-w-md mx-auto">
                      Your equipment inquiry for <strong className="text-[#1b4332]">{formData.productRequired}</strong> has been received by the GrainEx engineering team.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <button
                      id="reset-form-btn"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
                    >
                      Submit Another Requirement
                    </button>
                    <button
                      id="whatsapp-confirm-btn"
                      onClick={handleWhatsAppSend}
                      className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
                    >
                      <span>Also Send to WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <form id="grain-inquiry-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-xs font-bold text-gray-700">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#116c4a] focus:bg-white"
                      />
                    </div>

                    {/* Company / Mill Name */}
                    <div className="space-y-1">
                      <label htmlFor="contact-company" className="text-xs font-bold text-gray-700">
                        Mill / Enterprise Name *
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        required
                        placeholder="e.g. Sri Lakshmi Rice Mills"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#116c4a] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1">
                      <label htmlFor="contact-phone" className="text-xs font-bold text-gray-700">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#116c4a] focus:bg-white"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-xs font-bold text-gray-700">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="e.g. rajesh@ricemills.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#116c4a] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Product Selection */}
                    <div className="space-y-1">
                      <label htmlFor="contact-product" className="text-xs font-bold text-gray-700">
                        Equipment / Module Needed
                      </label>
                      <select
                        id="contact-product"
                        name="productRequired"
                        value={formData.productRequired}
                        onChange={handleChange}
                        className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#116c4a] focus:bg-white"
                      >
                        <option value="Complete Turnkey Paddy & Rice Plant">Complete Turnkey Paddy & Rice Plant</option>
                        <option value="Module 01: Storage Bins & Silos">Module 01: Storage Bins & Silos</option>
                        <option value="Module 02: Industrial Dryers">Module 02: Industrial Dryers</option>
                        <option value="Module 03: Parboiling & Steaming">Module 03: Parboiling & Steaming</option>
                        <option value="Module 04: Process Water Systems">Module 04: Process Water Systems</option>
                        <option value="Module 05: Steam & Boiler Plant">Module 05: Steam & Boiler Plant</option>
                        <option value="Module 06: Paddy & Rice Coolers">Module 06: Paddy & Rice Coolers</option>
                        <option value="Plant Automation & SCADA Upgrades">Plant Automation & SCADA Upgrades</option>
                        <option value="Tamil Nadu Process Custom Line">Tamil Nadu Process Custom Line</option>
                      </select>
                    </div>

                    {/* Capacity Range */}
                    <div className="space-y-1">
                      <label htmlFor="contact-capacity" className="text-xs font-bold text-gray-700">
                        Capacity Requirement
                      </label>
                      <select
                        id="contact-capacity"
                        name="projectRequirement"
                        value={formData.projectRequirement}
                        onChange={handleChange}
                        className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#116c4a] focus:bg-white"
                      >
                        <option value="Under 50 TPD">Under 50 TPD (Small Mill)</option>
                        <option value="50 - 150 TPD">50 - 150 TPD (Medium Commercial)</option>
                        <option value="150 - 300 TPD">150 - 300 TPD (Large Commercial)</option>
                        <option value="300 - 500+ TPD">300 - 500+ TPD (Industrial Mega Mill)</option>
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-1">
                    <label htmlFor="contact-location" className="text-xs font-bold text-gray-700">
                      Plant Site Location / City & State *
                    </label>
                    <input
                      id="contact-location"
                      name="location"
                      type="text"
                      required
                      placeholder="e.g. Thanjavur, Tamil Nadu / Nellore, Andhra Pradesh"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#116c4a] focus:bg-white"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="text-xs font-bold text-gray-700">
                      Additional Notes / Custom Requirements
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      placeholder="Mention your grain variety (e.g. Ponni, BPT, Sona Masoori), existing plant layout, or specific steam parameters..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#116c4a] focus:bg-white resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      id="submit-proposal-form-btn"
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:flex-1 py-3.5 bg-[#1b4332] hover:bg-[#116c4a] text-white font-heading font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Submit Proposal Request</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <button
                      id="submit-whatsapp-shortcut-btn"
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full sm:w-auto px-4 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center justify-center gap-2"
                    >
                      <span>Send via WhatsApp</span>
                      <MessageSquare className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
