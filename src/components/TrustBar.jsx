import React from 'react';
import { ShieldCheck, BarChart2, Users, Database } from 'lucide-react';

export default function TrustBar() {
  const badges = [
    { title: 'Open Methodology', icon: ShieldCheck, desc: 'Public calculation formulas' },
    { title: 'Transparent Metrics', icon: BarChart2, desc: 'Real-time verifiable data' },
    { title: 'Community Verification', icon: Users, desc: 'Validator attestations' },
    { title: 'Public Market Data', icon: Database, desc: 'Open data infrastructure' },
  ];

  return (
    <section className="border-y border-white/10 bg-[#07090E]/90 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Pillars Ribbon */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-sm font-mono tracking-widest text-gray-400 font-semibold uppercase mb-8">
          <span className="text-[#00F0FF]">MEASURE</span>
          <span className="text-gray-600">•</span>
          <span className="text-blue-400">VERIFY</span>
          <span className="text-gray-600">•</span>
          <span className="text-emerald-400">DISCOVER</span>
          <span className="text-gray-600">•</span>
          <span className="text-purple-400">PARTICIPATE</span>
        </div>

        {/* Statement */}
        <p className="text-center text-gray-300 max-w-3xl mx-auto text-base sm:text-lg mb-8 leading-relaxed font-sans">
          Built around transparent attention metrics, independent verification and open market data.
        </p>

        {/* 4 Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div 
                key={i} 
                className="glass-panel rounded-2xl p-4 flex flex-col items-center text-center space-y-2 border border-white/5 hover:border-[#00F0FF]/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#00F0FF] group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-white group-hover:text-[#00F0FF] transition-colors">{badge.title}</div>
                <div className="text-xs text-gray-400">{badge.desc}</div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
