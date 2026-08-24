import React, { useState, useEffect } from 'react';
import { Cpu, Activity, BarChart3, Zap, Smartphone, ArrowRight, CheckCircle, ShieldCheck, Play, Pause, RefreshCw, Layers } from 'lucide-react';
import { AUTOMATION_CAPABILITIES, BRAND_INFO } from '../../data/grainExData';
import { ScreenId } from '../../types';

interface AutomationScreenProps {
  onRequestQuote: (context?: string) => void;
  onNavigate: (screenId: ScreenId) => void;
}

export const AutomationScreen: React.FC<AutomationScreenProps> = ({
  onRequestQuote,
  onNavigate,
}) => {
  // Live Simulated SCADA Mimic State
  const [simulationRunning, setSimulationRunning] = useState<boolean>(true);
  const [currentTemp, setCurrentTemp] = useState<number>(58.4);
  const [currentMoisture, setCurrentMoisture] = useState<number>(14.2);
  const [currentThroughput, setCurrentThroughput] = useState<number>(24.8);
  const [activeRecipe, setActiveRecipe] = useState<string>('Ponni Parboiled Recipe #04');

  useEffect(() => {
    if (!simulationRunning) return;
    const interval = setInterval(() => {
      setCurrentTemp((prev) => +(58.0 + Math.random() * 1.5).toFixed(1));
      setCurrentMoisture((prev) => +(14.0 + (Math.sin(Date.now() / 3000) * 0.4)).toFixed(1));
      setCurrentThroughput((prev) => +(24.5 + Math.random() * 0.8).toFixed(1));
    }, 2000);
    return () => clearInterval(interval);
  }, [simulationRunning]);

  return (
    <section id="03-automation" className="pt-6 pb-12 bg-[#0c231a] text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 tech-dots-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Screen Header Badge */}
        <div className="flex items-center justify-between border-b border-[#2d6a4f]/60 pb-3 mb-8">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-[#116c4a] text-[#a1f4c8] text-xs font-mono font-bold rounded">
              SCREEN 03 OF 06
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#a1f4c8]">
              Industrial IoT & SCADA Systems
            </span>
          </div>
          <span className="text-xs text-gray-400 font-mono hidden sm:inline">
            INDUSTRY 4.0 READY
          </span>
        </div>

        {/* Hero Automation Section with Authentic Background Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-12 min-h-[380px] md:min-h-[440px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-100 hover:scale-105"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPcheTFqnJ1HsvSrHKXQ9ClSBTkPlRLvpin2xwXHmVXI7GV_E_glOZSCJ2X_KNC_rHtElWDTTqycX8NClw3vFKbsF0i6s9tV07-B40uzc6WKK8HhHYsRoui5WPIXzv_DIa3n2nymhZLPxzQNZ6s4HuBg5ZMD9xiFdYubIurKiY9_EGLk-2zI0ABvN3wgxxMuyGbEcpuRK9ZC9B3_unAaXqhs3IvR1j8YR5JhpzMfb8pZkrhkpllm8w')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#012d1d]/95 via-[#012d1d]/85 to-[#012d1d]/60" />
          </div>

          <div className="relative z-10 p-6 sm:p-10 md:p-12 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#116c4a]/80 text-[#a1f4c8] text-xs font-bold uppercase tracking-wider border border-[#a1f4c8]/30">
              <Cpu className="w-3.5 h-3.5" />
              <span>Smart Grain Automation</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-[0.25em] text-[#a1f4c8]">
                AUTOMATION & TECHNOLOGY
              </h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight uppercase">
                Connect. Control. Optimize.
              </h2>
            </div>

            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              Seamless integration of smart systems for modern industrial operations. GrainEx transforms traditional paddy processing mills into intelligent, connected, and self-optimizing manufacturing centers.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="automation-quote-cta-btn"
                onClick={() => onRequestQuote('Plant Automation & SCADA Solution')}
                className="px-6 py-3 bg-[#a1f4c8] hover:bg-emerald-300 text-[#0b2118] font-heading font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all flex items-center gap-2"
              >
                <span>Automate Your Mill</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bento Grid Architecture of Automation Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {/* Main Large Bento Item: Centralized SCADA */}
          <div className="md:col-span-8 bg-[#133527] rounded-2xl p-6 sm:p-8 border border-[#2d6a4f] space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-[#116c4a] rounded-xl text-[#a1f4c8] shadow">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-white/10 text-[#a1f4c8] text-xs font-mono font-bold rounded-full">
                  SIEMENS / ROCKWELL PLC
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-heading font-bold text-white">
                  Centralized SCADA & Multi-Touch Mimic
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Single-operator control over the entire grain pipeline. Interactive animated graphic mimics display grain flow rates, bin fill levels, air dampers, valve positions, and motor current draw with millisecond latency.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-gray-200">
                  <CheckCircle className="w-4 h-4 text-[#a1f4c8]" />
                  <span>Sequential Motor Interlocks</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-200">
                  <CheckCircle className="w-4 h-4 text-[#a1f4c8]" />
                  <span>Dynamic Grain Route Switching</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-200">
                  <CheckCircle className="w-4 h-4 text-[#a1f4c8]" />
                  <span>Automated Recipe Execution</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-200">
                  <CheckCircle className="w-4 h-4 text-[#a1f4c8]" />
                  <span>Integrated Emergency E-Stop Grid</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2d6a4f]/50 flex items-center justify-between text-xs text-[#a1f4c8]">
              <span>Zero Human Error In Grain Transfer</span>
              <span className="font-mono">EtherNet/IP & PROFINET Ready</span>
            </div>
          </div>

          {/* Bento Item 2: Sensor Telemetry */}
          <div className="md:col-span-4 bg-[#133527] rounded-2xl p-6 sm:p-8 border border-[#2d6a4f] space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="p-3 bg-[#116c4a] rounded-xl text-[#a1f4c8] w-fit shadow">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                Precision Sensor Array
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Multi-point dielectric continuous moisture probes, PT100 temperature sensors, and radar level indicators prevent over-drying and eliminate hot spots.
              </p>
            </div>
            <div className="bg-[#0b2118] p-3 rounded-lg border border-[#2d6a4f]/40 font-mono text-xs text-[#a1f4c8]">
              <span>Moisture Accuracy: ±0.2%</span>
            </div>
          </div>

          {/* Bento Item 3: Real-Time Analytics */}
          <div className="md:col-span-4 bg-[#133527] rounded-2xl p-6 sm:p-8 border border-[#2d6a4f] space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="p-3 bg-[#116c4a] rounded-xl text-[#a1f4c8] w-fit shadow">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                Production Intelligence
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Automated shift reporting, head rice recovery calculation, and steam consumption monitoring delivered directly to management inbox.
              </p>
            </div>
            <div className="bg-[#0b2118] p-3 rounded-lg border border-[#2d6a4f]/40 font-mono text-xs text-[#a1f4c8]">
              <span>Yield Tracking: Real-time</span>
            </div>
          </div>

          {/* Bento Item 4: Energy Management */}
          <div className="md:col-span-4 bg-[#133527] rounded-2xl p-6 sm:p-8 border border-[#2d6a4f] space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="p-3 bg-[#116c4a] rounded-xl text-[#a1f4c8] w-fit shadow">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                Dynamic Energy Savings
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                VFD synchronization modulates fan blowers and conveyor speeds to the exact grain moisture profile, reducing electrical consumption by up to 22%.
              </p>
            </div>
            <div className="bg-[#0b2118] p-3 rounded-lg border border-[#2d6a4f]/40 font-mono text-xs text-[#a1f4c8]">
              <span>Power Reduction: Up to 22%</span>
            </div>
          </div>

          {/* Bento Item 5: Remote Mobile Access */}
          <div className="md:col-span-4 bg-[#133527] rounded-2xl p-6 sm:p-8 border border-[#2d6a4f] space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="p-3 bg-[#116c4a] rounded-xl text-[#a1f4c8] w-fit shadow">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                Mobile Tele-Control
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Secure encrypted cloud connectivity allows mill executives to monitor real-time plant KPIs, throughput, and alarms on mobile devices anywhere.
              </p>
            </div>
            <div className="bg-[#0b2118] p-3 rounded-lg border border-[#2d6a4f]/40 font-mono text-xs text-[#a1f4c8]">
              <span>Cloud Sync: End-to-End SSL</span>
            </div>
          </div>
        </div>

        {/* Live Interactive SCADA Mimic Simulator */}
        <div className="bg-[#061811] rounded-2xl p-6 sm:p-8 border border-[#2d6a4f] shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2d6a4f] pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#25D366] animate-ping" />
              <div>
                <h4 className="font-heading font-bold text-lg text-white">
                  Live Plant SCADA Mimic Simulation
                </h4>
                <span className="text-xs text-gray-400 font-mono">
                  Module Line 01 • Active Recipe: {activeRecipe}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="toggle-simulation-btn"
                onClick={() => setSimulationRunning(!simulationRunning)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-colors ${
                  simulationRunning
                    ? 'bg-[#116c4a] text-[#a1f4c8]'
                    : 'bg-gray-800 text-gray-300'
                }`}
              >
                {simulationRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{simulationRunning ? 'LIVE STREAMING' : 'PAUSED'}</span>
              </button>
            </div>
          </div>

          {/* Telemetry Gauge Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-[#0c231a] p-4 rounded-xl border border-[#2d6a4f]/60 space-y-1">
              <span className="text-[11px] text-gray-400 font-mono uppercase">Dryer Air Temp</span>
              <div className="text-2xl sm:text-3xl font-heading font-black text-[#a1f4c8]">
                {currentTemp} <span className="text-sm font-normal text-gray-400">°C</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">PID Loop Optimal</span>
            </div>

            <div className="bg-[#0c231a] p-4 rounded-xl border border-[#2d6a4f]/60 space-y-1">
              <span className="text-[11px] text-gray-400 font-mono uppercase">Paddy Moisture</span>
              <div className="text-2xl sm:text-3xl font-heading font-black text-white">
                {currentMoisture} <span className="text-sm font-normal text-gray-400">%</span>
              </div>
              <span className="text-[10px] text-[#a1f4c8] font-mono">Target: 13.8%</span>
            </div>

            <div className="bg-[#0c231a] p-4 rounded-xl border border-[#2d6a4f]/60 space-y-1">
              <span className="text-[11px] text-gray-400 font-mono uppercase">Throughput Flow</span>
              <div className="text-2xl sm:text-3xl font-heading font-black text-white">
                {currentThroughput} <span className="text-sm font-normal text-gray-400">TPH</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">Continuous Feed</span>
            </div>

            <div className="bg-[#0c231a] p-4 rounded-xl border border-[#2d6a4f]/60 space-y-1">
              <span className="text-[11px] text-gray-400 font-mono uppercase">System Interlocks</span>
              <div className="text-2xl sm:text-3xl font-heading font-black text-[#25D366]">
                100% <span className="text-sm font-normal text-gray-400">SAFE</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">0 Active Alarms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
