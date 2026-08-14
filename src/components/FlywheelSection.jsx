import React from 'react';
import { RefreshCw, ArrowRight } from 'lucide-react';

export default function FlywheelSection() {
  const nodes = [
    'More Websites',
    'More Attention Data',
    'Better Measurement',
    'Better Discovery',
    'More Participants',
    'More Liquidity',
    'More Website Capital',
    'More Websites ↺'
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>ECONOMIC FLYWHEEL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            A market that gets <span className="gradient-text-cyan">smarter as it grows.</span>
          </h2>
          <p className="text-lg text-gray-300">
            Network effects create increasing liquidity, deeper data accuracy, and higher value for participating digital properties.
          </p>
        </div>

        {/* Circular Node Loop */}
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto border border-[#00F0FF]/30">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {nodes.slice(0, 7).map((node, i) => (
              <div 
                key={i}
                className="bg-[#07090E]/80 rounded-2xl p-5 border border-white/10 text-center space-y-2 hover:border-[#00F0FF]/40 transition-all"
              >
                <div className="text-[10px] font-mono text-[#00F0FF]">NODE 0{i + 1}</div>
                <div className="text-sm font-bold text-white font-sans">{node}</div>
              </div>
            ))}
            <div className="bg-gradient-to-tr from-[#00F0FF]/20 to-purple-600/30 rounded-2xl p-5 border border-[#00F0FF] text-center space-y-2 shadow-glowCyan">
              <div className="text-[10px] font-mono text-emerald-400 font-bold">RECURSIVE LOOP</div>
              <div className="text-sm font-extrabold text-white">More Websites ↺</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
