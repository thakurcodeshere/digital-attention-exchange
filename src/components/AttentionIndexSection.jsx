import React, { useState } from 'react';
import { Sliders, ArrowRight, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';

export default function AttentionIndexSection({ onOpenMethodology }) {
  // Simulator State
  const [weights, setWeights] = useState({
    engagement: 91,
    velocity: 84,
    retention: 88,
    conversion: 76,
    network: 92
  });

  const presets = {
    tech: { name: 'SITE / TECHNOLOGY', engagement: 91, velocity: 84, retention: 88, conversion: 76, network: 92 },
    techflow: { name: 'TechFlow.io', engagement: 95, velocity: 92, retention: 89, conversion: 85, network: 94 },
    research: { name: 'ResearchHub.org', engagement: 98, velocity: 78, retention: 96, conversion: 80, network: 95 },
    buildstack: { name: 'BuildStack.dev', engagement: 79, velocity: 88, retention: 72, conversion: 68, network: 74 }
  };

  // Calculate weighted Attention Index
  // 30% Engagement + 25% Velocity + 20% Retention + 15% Conversion + 10% Network
  const calculatedAI = (
    (weights.engagement * 0.30) +
    (weights.velocity * 0.25) +
    (weights.retention * 0.20) +
    (weights.conversion * 0.15) +
    (weights.network * 0.10)
  ).toFixed(1);

  const applyPreset = (key) => {
    const p = presets[key];
    if (p) {
      setWeights({
        engagement: p.engagement,
        velocity: p.velocity,
        retention: p.retention,
        conversion: p.conversion,
        network: p.network
      });
    }
  };

  const anchors = [
    { weight: '30%', name: 'Engagement Depth', key: 'engagement', desc: 'Dwell time, scroll depth, active interaction, session intensity' },
    { weight: '25%', name: 'Traffic Velocity', key: 'velocity', desc: 'Growth rate, unique visitors, momentum spikes, session count' },
    { weight: '20%', name: 'Retention Gravity', key: 'retention', desc: 'Return visits, cohort stickiness, subscription persistence' },
    { weight: '15%', name: 'Economic Conversion', key: 'conversion', desc: 'Monetization efficiency, micro-transactions, checkout intent' },
    { weight: '10%', name: 'Network Effect', key: 'network', desc: 'Social sharing, inbound backlinks, curator referrals, domain authority' },
  ];

  return (
    <section id="attention-index" className="py-20 lg:py-28 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VALUATION METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Not all traffic is <span className="gradient-text-cyan">equal.</span>
          </h2>
          <p className="text-lg text-gray-300">
            SITE evaluates websites using multiple dimensions of attention.
          </p>
        </div>

        {/* 5 Cards / Weight Breakdown Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {anchors.map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-[#00F0FF]/40 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="flex justify-between items-center">
                <span className="text-2xl font-extrabold font-mono text-[#00F0FF]">
                  {item.weight}
                </span>
                <span className="text-[10px] font-mono text-gray-500 uppercase">ANCHOR {idx + 1}</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">{item.name}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Formula Display Banner */}
        <div className="glass-panel rounded-2xl p-6 max-w-4xl mx-auto mb-16 text-center space-y-3 border border-white/10">
          <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">Mathematical Formula</div>
          <div className="text-base sm:text-xl font-mono font-bold text-[#00F0FF] overflow-x-auto py-1">
            AI = (Engagement Depth × 0.30) + (Traffic Velocity × 0.25) + (Retention × 0.20) + (Economic Conversion × 0.15) + (Network Effect × 0.10)
          </div>
        </div>

        {/* Interactive Simulator Card */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-10 max-w-5xl mx-auto border border-[#00F0FF]/30">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6 mb-8">
            <div>
              <div className="flex items-center space-x-2">
                <Sliders className="w-5 h-5 text-[#00F0FF]" />
                <h3 className="text-2xl font-bold text-white">Interactive Attention Index Calculator</h3>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Adjust dimension sliders to recalculate real-time Attention Index score
              </p>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-gray-400 mr-1">PRESETS:</span>
              {Object.keys(presets).map((key) => (
                <button
                  key={key}
                  onClick={() => applyPreset(key)}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#00F0FF]/20 border border-white/10 hover:border-[#00F0FF]/40 text-xs font-mono text-gray-300 hover:text-white transition-all"
                >
                  {presets[key].name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Column */}
            <div className="lg:col-span-7 space-y-5">
              {anchors.map((item) => (
                <div key={item.key} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-gray-300 font-semibold">{item.name} ({item.weight})</span>
                    <span className="text-[#00F0FF] font-bold">{weights[item.key]} / 100</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={weights[item.key]}
                    onChange={(e) => setWeights({ ...weights, [item.key]: parseInt(e.target.value) })}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#00F0FF]"
                  />
                </div>
              ))}
            </div>

            {/* Result Box Column */}
            <div className="lg:col-span-5 bg-[#07090E]/90 rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center space-y-4">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                CALCULATED ATTENTION INDEX
              </span>

              <div className="relative flex items-center justify-center w-36 h-36 rounded-full border-4 border-[#00F0FF] shadow-glowCyan bg-[#0E131F]">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-extrabold font-mono text-white tracking-tight">
                    {calculatedAI}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 mt-1 font-semibold">VERIFIED</span>
                </div>
              </div>

              <div className="w-full space-y-2 text-xs font-mono text-gray-400 text-left pt-2 border-t border-white/10">
                <div className="flex justify-between">
                  <span>Engagement Depth:</span>
                  <span className="text-white">{weights.engagement}</span>
                </div>
                <div className="flex justify-between">
                  <span>Traffic Velocity:</span>
                  <span className="text-white">{weights.velocity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Retention Gravity:</span>
                  <span className="text-white">{weights.retention}</span>
                </div>
                <div className="flex justify-between">
                  <span>Economic Conversion:</span>
                  <span className="text-white">{weights.conversion}</span>
                </div>
                <div className="flex justify-between">
                  <span>Network Effect:</span>
                  <span className="text-white">{weights.network}</span>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center pt-8">
            <button
              onClick={onOpenMethodology}
              className="inline-flex items-center px-6 py-3 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/40 text-[#00F0FF] font-semibold text-sm hover:bg-[#00F0FF] hover:text-black transition-all group"
            >
              <span>Explore the methodology</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
