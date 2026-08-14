import React from 'react';
import { Layers, ArrowRight, Cpu } from 'lucide-react';

export default function ProtocolArchSection({ onOpenDocs }) {
  const stack = [
    { layer: 'APPLICATIONS', items: 'Market · Explorer · Owner Console · Analytics Apps', bg: 'bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/30' },
    { layer: 'MARKET LAYER', items: 'Site Shares · Attention Indices · Order Book Trading', bg: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
    { layer: 'VALUATION LAYER', items: 'Attention Index (AI Score) · 5 Anchor Weight Engine', bg: 'bg-purple-500/10 text-purple-400 border-purple-500/30' },
    { layer: 'VERIFICATION LAYER', items: 'Oracles · Statistical Anomaly Detection · Attestation Nodes', bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
    { layer: 'INCENTIVES', items: '$SITE Token · Engagement Rewards · Staking · Slashing', bg: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
    { layer: 'GOVERNANCE LAYER', items: 'Validators · Curators · Parameter Voting · Protocol Security', bg: 'bg-rose-500/10 text-rose-400 border-rose-500/30' }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-grid-pattern border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
            <Cpu className="w-3.5 h-3.5" />
            <span>PROTOCOL ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built as an open <span className="gradient-text-cyan">attention infrastructure layer.</span>
          </h2>
          <p className="text-lg text-gray-300">
            A modular stack designed for high throughput, verifiable analytics, and transparent market settlement.
          </p>
        </div>

        {/* Stacked Visual */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto space-y-4 border border-white/10">
          {stack.map((item, idx) => (
            <div 
              key={idx}
              className={`p-5 rounded-2xl border ${item.bg} flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono transition-all hover:scale-[1.01]`}
            >
              <div className="text-sm font-extrabold tracking-wider">{item.layer}</div>
              <div className="text-xs text-gray-300 font-sans">{item.items}</div>
            </div>
          ))}

          <div className="text-center pt-6">
            <button
              onClick={onOpenDocs}
              className="inline-flex items-center text-sm font-semibold text-[#00F0FF] hover:text-white transition-colors group"
            >
              <span>View technical architecture documentation</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
