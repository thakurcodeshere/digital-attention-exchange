import React from 'react';
import { TrendingUp, ArrowRight, ShieldCheck, Info } from 'lucide-react';

export default function MarketSharesSection({ onOpenAppDemo }) {
  return (
    <section className="py-20 lg:py-28 relative bg-grid-pattern border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>MARKET INSTRUMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            A new way to <span className="gradient-text-cyan">look at the web.</span>
          </h2>
          <p className="text-lg text-gray-300">
            Introducing Site Shares and verified attention valuation primitives.
          </p>
        </div>

        {/* Progressive Disclosure Explanation Card */}
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto border border-[#00F0FF]/30 space-y-8">
          
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] flex items-center justify-center shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">What are Site Shares?</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                <strong className="text-white font-semibold">Site Shares</strong> represent market exposure to the measured performance of a participating digital property. They do not represent ownership of the underlying company.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/5 space-y-2">
              <div className="text-sm font-bold text-[#00F0FF]">Performance Exposure</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Reflects real-time fluctuations in a website's Attention Index, session volume, and verified engagement gravity.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/5 space-y-2">
              <div className="text-sm font-bold text-emerald-400">Non-Equity Instrument</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Designed purely as a synthetic attention index market asset without corporate equity or voting obligations.
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onOpenAppDemo}
              className="inline-flex items-center px-8 py-4 rounded-xl bg-[#00F0FF] text-black font-bold text-base hover:bg-[#00F0FF]/90 shadow-glowCyan transition-all group"
            >
              <span>Understand Site Shares</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
