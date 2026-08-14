import React from 'react';
import { ShieldCheck, Eye, Lock, Vote, ArrowRight } from 'lucide-react';

export default function TransparencySection({ onOpenDocs }) {
  const cards = [
    {
      title: 'Open Methodology',
      icon: ShieldCheck,
      desc: 'Understand exactly how Attention Index scores are calculated with open math formulas.'
    },
    {
      title: 'Data Verification',
      icon: Eye,
      desc: 'Multiple independent oracle sources help validate reported website performance metrics.'
    },
    {
      title: 'Challenge System',
      icon: Lock,
      desc: 'Participants can challenge suspicious metrics and submit anti-manipulation proofs.'
    },
    {
      title: 'Public Governance',
      icon: Vote,
      desc: 'Protocol decisions, index parameters, and validator rules are transparent and community-owned.'
    }
  ];

  return (
    <section id="docs" className="py-20 lg:py-28 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
            <span>TRUST & VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Don't trust us. <span className="gradient-text-cyan">Verify the system.</span>
          </h2>
          <p className="text-lg text-gray-300">
            Every metric, index score, and market settlement is independently verifiable on-chain.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-panel rounded-3xl p-6 space-y-4 border border-white/10 hover:border-[#00F0FF]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00F0FF] transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={onOpenDocs}
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-base hover:text-[#00F0FF] transition-all group"
          >
            <span>Read the protocol</span>
            <ArrowRight className="w-5 h-5 ml-2 text-[#00F0FF] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
