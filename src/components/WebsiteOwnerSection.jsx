import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, ChevronRight, Activity, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function WebsiteOwnerSection({ onOpenRegisterSite }) {
  const steps = ['CONNECT', 'MEASURE', 'VERIFY', 'LIST', 'GROW'];

  return (
    <section id="for-owners" className="py-20 lg:py-28 relative bg-grid-pattern border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Value Prop */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF]">
              <Globe className="w-3.5 h-3.5" />
              <span>FOR WEBSITE OWNERS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Your audience is <br />
              <span className="gradient-text-cyan">already valuable.</span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              SITE gives website owners a new way to measure, understand and participate in the economic value of their attention.
            </p>

            {/* Workflow Pipeline */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">ONBOARDING PIPELINE</div>
              <div className="flex flex-wrap items-center gap-2">
                {steps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-bold text-[#00F0FF]">
                      {step}
                    </span>
                    {idx < steps.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-gray-600" />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenRegisterSite}
                className="inline-flex items-center px-8 py-4 rounded-xl bg-[#00F0FF] text-black font-bold text-base hover:bg-[#00F0FF]/90 shadow-glowCyan transition-all group"
              >
                <span>Register your website</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Dashboard Mockup Card */}
          <div className="lg:col-span-6">
            <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 space-y-6 border border-[#00F0FF]/30">
              
              {/* Top Bar */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-bold font-mono text-white">YOUR SITE / CONSOLE</span>
                </div>
                <span className="text-xs font-mono text-gray-400">ID: #8492-VERIFIED</span>
              </div>

              {/* Attention Index Metric */}
              <div className="bg-[#07090E]/90 rounded-2xl p-5 border border-white/10 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-mono text-gray-400 uppercase">Attention Index</span>
                  <span className="text-xs font-mono text-emerald-400 font-bold">+21.8% 30D</span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-extrabold font-mono text-white">87.2</span>
                  <span className="text-xl font-bold text-emerald-400">↑</span>
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-gray-400 uppercase">Dimension Breakdown</div>
                
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-xl">
                    <span className="text-gray-300">Engagement</span>
                    <span className="text-[#00F0FF] font-bold">92 / 100</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-xl">
                    <span className="text-gray-300">Traffic Growth</span>
                    <span className="text-[#00F0FF] font-bold">81 / 100</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-xl">
                    <span className="text-gray-300">Retention</span>
                    <span className="text-[#00F0FF] font-bold">89 / 100</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-xl">
                    <span className="text-gray-300">Conversion</span>
                    <span className="text-[#00F0FF] font-bold">76 / 100</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-xl">
                    <span className="text-gray-300">Network Effect</span>
                    <span className="text-[#00F0FF] font-bold">91 / 100</span>
                  </div>
                </div>
              </div>

              {/* Bottom stats summary */}
              <div className="grid grid-cols-2 gap-3 text-center pt-2">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="text-[10px] font-mono text-gray-500 uppercase">Verified Sessions</div>
                  <div className="text-base font-bold font-mono text-white mt-0.5">1.82M</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="text-[10px] font-mono text-gray-500 uppercase">Market Interest</div>
                  <div className="text-base font-bold font-mono text-emerald-400 mt-0.5">↑ 34%</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
