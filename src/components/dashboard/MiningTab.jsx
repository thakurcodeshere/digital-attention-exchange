import React from 'react';
import { Zap, Flame, Award } from 'lucide-react';

export default function MiningTab() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Attention Mining & Staking</h1>
        <p className="text-sm text-gray-400">Earn $DAE tokens for verified high-depth dwell sessions across participating sites.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-[#0E131F] p-6 rounded-2xl border border-white/10 space-y-2">
          <div className="text-xs font-mono text-gray-400">MINED TODAY</div>
          <div className="text-3xl font-extrabold font-mono text-[#00F0FF]">+12.4 DAE</div>
        </div>
        <div className="bg-[#0E131F] p-6 rounded-2xl border border-white/10 space-y-2">
          <div className="text-xs font-mono text-gray-400">STREAK BONUS</div>
          <div className="text-3xl font-extrabold font-mono text-amber-400">7 DAYS 🔥</div>
        </div>
        <div className="bg-[#0E131F] p-6 rounded-2xl border border-white/10 space-y-2">
          <div className="text-xs font-mono text-gray-400">STAKED COLLATERAL</div>
          <div className="text-3xl font-extrabold font-mono text-emerald-400">1,240 DAE</div>
        </div>
      </div>
    </div>
  );
}
