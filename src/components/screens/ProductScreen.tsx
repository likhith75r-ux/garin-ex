import React, { useState } from 'react';
import { Layers, ArrowRight, Eye, Calculator, Check, Sparkles, SlidersHorizontal, Info } from 'lucide-react';
import { PRODUCT_MODULES } from '../../data/grainExData';
import { ProductModule, ScreenId } from '../../types';

interface ProductScreenProps {
  onSelectProduct: (product: ProductModule) => void;
  onRequestQuote: (initialProduct?: string) => void;
  onNavigate: (screenId: ScreenId) => void;
}

export const ProductScreen: React.FC<ProductScreenProps> = ({
  onSelectProduct,
  onRequestQuote,
  onNavigate,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [calcPaddyCapacity, setCalcPaddyCapacity] = useState<number>(100);
  const [calcProcessType, setCalcProcessType] = useState<string>('parboiled');

  const filteredProducts = PRODUCT_MODULES.filter((product) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'storage' && product.id === 'storage-bins') return true;
    if (filterCategory === 'thermal' && (product.id === 'dryers' || product.id === 'cooler')) return true;
    if (filterCategory === 'hydrothermal' && (product.id === 'parboiling' || product.id === 'water-tank' || product.id === 'steam-plant')) return true;
    return true;
  });

  // Calculate estimated sizing
  const dryerTph = (calcPaddyCapacity / 20).toFixed(1);
  const boilerTph = (calcPaddyCapacity * (calcProcessType === 'parboiled' ? 0.035 : 0.02)).toFixed(1);
  const siloStorageVolume = Math.round(calcPaddyCapacity * 2.5);

  return (
    <section id="02-product" className="pt-6 pb-12 bg-[#f4f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Screen Header Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-300 pb-4 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 bg-[#1b4332] text-white text-xs font-mono font-bold rounded">
                SCREEN 02 OF 06
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#116c4a]">
                Engineered Grain Infrastructure
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#1b4332] uppercase tracking-tight">
              Products & Modules
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-1 max-w-2xl">
              Precision-fabricated paddy handling, parboiling, drying, and cooling systems engineered for maximum head rice yield and minimum energy consumption.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-xl border border-gray-200 shadow-sm">
            <button
              id="filter-all-btn"
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filterCategory === 'all'
                  ? 'bg-[#1b4332] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              All (6 Modules)
            </button>
            <button
              id="filter-storage-btn"
              onClick={() => setFilterCategory('storage')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filterCategory === 'storage'
                  ? 'bg-[#1b4332] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Storage & Silos
            </button>
            <button
              id="filter-thermal-btn"
              onClick={() => setFilterCategory('thermal')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filterCategory === 'thermal'
                  ? 'bg-[#1b4332] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Drying & Cooling
            </button>
            <button
              id="filter-hydrothermal-btn"
              onClick={() => setFilterCategory('hydrothermal')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filterCategory === 'hydrothermal'
                  ? 'bg-[#1b4332] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Hydrothermal & Steam
            </button>
          </div>
        </div>

        {/* 6 Products Grid (Screenshots reference matching layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col group"
            >
              {/* Image Container with Module Code Badge */}
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#1b4332] text-[#a1f4c8] text-xs font-mono font-black uppercase tracking-wider rounded-md shadow-md border border-[#a1f4c8]/20">
                    {product.moduleCode}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-1 bg-black/75 backdrop-blur-sm text-white text-[11px] font-semibold rounded shadow">
                    {product.capacityRange}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-heading font-extrabold text-[#1b4332] group-hover:text-[#116c4a] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Key Bullet Features */}
                <div className="space-y-1.5 pt-2 border-t border-gray-100">
                  {product.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <Check className="w-3.5 h-3.5 text-[#116c4a] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 flex items-center gap-2">
                  <button
                    id={`view-details-${product.id}-btn`}
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 py-2.5 px-3 bg-[#f0f4f1] hover:bg-[#e1eae3] text-[#1b4332] rounded-lg text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-gray-200"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Specs</span>
                  </button>

                  <button
                    id={`quote-for-${product.id}-btn`}
                    onClick={() => onRequestQuote(product.title)}
                    className="py-2.5 px-4 bg-[#116c4a] hover:bg-[#158058] text-white rounded-lg text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-all shadow hover:shadow-md"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Plant Capacity Sizing Estimator */}
        <div className="mt-16 bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-gray-200 pb-6 mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#116c4a] text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Interactive Tool for Mill Owners</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#1b4332]">
                Instant Module Capacity & Sizing Calculator
              </h3>
              <p className="text-gray-600 text-sm max-w-2xl">
                Estimate the required drying capacity, boiler steam rating, and buffer silo volume based on your target daily milling throughput.
              </p>
            </div>

            <button
              id="calc-quote-btn"
              onClick={() => onRequestQuote(`Custom Sizing: ${calcPaddyCapacity} TPD ${calcProcessType}`)}
              className="px-5 py-3 bg-[#1b4332] hover:bg-[#116c4a] text-white rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow flex items-center gap-2"
            >
              <span>Request Sizing Layout Drawing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Input 1: Capacity Slider */}
            <div className="space-y-2 bg-[#f9faf6] p-4 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center text-xs font-bold text-gray-700">
                <span>Target Milling (TPD):</span>
                <span className="text-[#116c4a] font-mono text-base">{calcPaddyCapacity} TPD</span>
              </div>
              <input
                id="capacity-tpd-slider"
                type="range"
                min="20"
                max="500"
                step="10"
                value={calcPaddyCapacity}
                onChange={(e) => setCalcPaddyCapacity(Number(e.target.value))}
                className="w-full accent-[#116c4a] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>20 TPD</span>
                <span>250 TPD</span>
                <span>500 TPD</span>
              </div>
            </div>

            {/* Input 2: Process Type */}
            <div className="space-y-2 bg-[#f9faf6] p-4 rounded-xl border border-gray-200">
              <label className="text-xs font-bold text-gray-700 block">Processing Type:</label>
              <select
                id="process-type-select"
                value={calcProcessType}
                onChange={(e) => setCalcProcessType(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs font-semibold text-[#1b4332] focus:outline-none focus:border-[#116c4a]"
              >
                <option value="parboiled">Parboiled Rice (Tamil Nadu / Traditional)</option>
                <option value="steam">Single / Double Steam Rice</option>
                <option value="raw">Raw Paddy Processing Only</option>
              </select>
              <span className="text-[10px] text-gray-500 block">Affects steam and dryer heat balance</span>
            </div>

            {/* Calculated Output 1: Recommended Dryer & Boiler */}
            <div className="bg-[#1b4332] text-white p-4 rounded-xl space-y-2">
              <span className="text-[10px] font-mono text-[#a1f4c8] uppercase tracking-wider block">
                Recommended Sizing
              </span>
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-gray-300">Dryer Column:</span>
                <span className="font-heading font-black text-lg text-white">~{dryerTph} TPH</span>
              </div>
              <div className="flex items-baseline justify-between pt-1 border-t border-white/10">
                <span className="text-xs text-gray-300">Husk Boiler:</span>
                <span className="font-heading font-black text-lg text-[#a1f4c8]">~{boilerTph} TPH</span>
              </div>
            </div>

            {/* Calculated Output 2: Silo Buffer Volume */}
            <div className="bg-[#0b2118] text-white p-4 rounded-xl space-y-2">
              <span className="text-[10px] font-mono text-[#a1f4c8] uppercase tracking-wider block">
                Buffer Storage Volume
              </span>
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-gray-300">Silo Capacity:</span>
                <span className="font-heading font-black text-lg text-white">~{siloStorageVolume} Tons</span>
              </div>
              <div className="flex items-baseline justify-between pt-1 border-t border-white/10">
                <span className="text-xs text-gray-300">Storage Bins:</span>
                <span className="font-heading font-black text-sm text-[#a1f4c8]">2 to 4 Hopper Units</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
