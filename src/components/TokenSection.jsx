import React from 'react';
import { Coins, ArrowRight, ShieldCheck, Vote, Layers, Lock, Award, Key } from 'lucide-react';

export default function TokenSection({ onOpenDocs }) {
  const utilityNodes = [
    { title: 'Rewards', icon: Award, desc: 'Verified visitor & curator incentive distributions' },
    { title: 'Staking', icon: Lock, desc: 'Validator collateral & economic challenge security' },
    { title: 'Governance', icon: Vote, desc: 'Protocol parameter updates & index methodology voting' },
    { title: 'Market Settlement', icon: Coins, desc: 'Liquidity pools & Site Shares settlement currency' },
    { title: 'Verification', icon: ShieldCheck, desc: 'Oracle attestation rewards & anti-manipulation bounties' },
    { title: 'Access', icon: Key, desc: 'Enterprise API access & deep historical data analytics' }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
            <Coins className="w-3.5 h-3.5" />
            <span>ECOSYSTEM COORDINATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            One network. <span className="gradient-text-cyan">One coordination layer.</span>
          </h2>
          <p className="text-lg text-gray-300">
            <strong className="text-white font-semibold">$DAE</strong> is designed as the coordination asset of the ecosystem, while individual Site Shares represent exposure to individual attention markets.
          </p>
        </div>

        {/* 6 Nodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {utilityNodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <div 
                key={i}
                className="glass-panel rounded-3xl p-6 space-y-3 border border-white/10 hover:border-[#00F0FF]/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00F0FF]/10 text-[#00F0FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00F0FF] transition-colors">{node.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{node.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={onOpenDocs}
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-base hover:text-[#00F0FF] transition-all group"
          >
            <span>Read the token model</span>
            <ArrowRight className="w-5 h-5 ml-2 text-[#00F0FF] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
