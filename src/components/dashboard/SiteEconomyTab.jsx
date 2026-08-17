import React from 'react';
import { Coins } from 'lucide-react';

export default function SiteEconomyTab() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">$DAE Economy & Tokenomics</h1>
        <p className="text-sm text-gray-400">Circulating supply, staking APYs, liquidity pools, and protocol emissions.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-[#0E131F] p-6 rounded-2xl border border-white/10 space-y-2">
          <div className="text-xs font-mono text-gray-400">$DAE PRICE</div>
          <div className="text-3xl font-extrabold font-mono text-white">$4.82</div>
          <div className="text-xs font-mono text-emerald-400 font-bold">+8.4% 24h</div>
        </div>

        <div className="bg-[#0E131F] p-6 rounded-2xl border border-white/10 space-y-2">
          <div className="text-xs font-mono text-gray-400">STAKING APY</div>
          <div className="text-3xl font-extrabold font-mono text-[#00F0FF]">14.8%</div>
          <div className="text-xs font-mono text-gray-400">Fixed Protocol Yield</div>
        </div>

        <div className="bg-[#0E131F] p-6 rounded-2xl border border-white/10 space-y-2">
          <div className="text-xs font-mono text-gray-400">TOTAL VALUE LOCKED</div>
          <div className="text-3xl font-extrabold font-mono text-purple-400">$48.6M</div>
          <div className="text-xs font-mono text-gray-400">Liquidity & Collateral</div>
        </div>
      </div>
    </div>
  );
}
