import React from 'react';
import { ShieldCheck, Cpu } from 'lucide-react';

export default function ValidatorsTab() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Validator Nodes & Data Defense</h1>
        <p className="text-sm text-gray-400">Oracle attestation streams, bot challenge logs, and node reward telemetry.</p>
      </div>

      <div className="bg-[#0E131F] p-6 rounded-2xl border border-white/10 space-y-4 font-mono text-xs">
        <div className="flex justify-between items-center text-gray-400 border-b border-white/10 pb-3">
          <span>ACTIVE VALIDATOR NODES: 64 OPERATORS</span>
          <span className="text-emerald-400 font-bold">NETWORK HEALTH 100%</span>
        </div>

        <div className="space-y-2 bg-[#07090E] p-4 rounded-xl text-gray-300">
          <div>[17:20:11] Validator Node #12 verified telemetry block #194820</div>
          <div>[17:20:15] Intercepted synthetic traffic spike on Domain #912 — 1,280 bot sessions discounted</div>
          <div className="text-emerald-400">[17:20:20] Slashing challenge resolved cleanly. Bounty +45 SITE awarded to Node #12</div>
        </div>
      </div>
    </div>
  );
}
