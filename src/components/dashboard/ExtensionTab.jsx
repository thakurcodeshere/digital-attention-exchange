import React from 'react';
import { Globe, ShieldCheck } from 'lucide-react';

export default function ExtensionTab() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Browser Extension Attestation</h1>
        <p className="text-sm text-gray-400">Zero-knowledge proof telemetry plugin status.</p>
      </div>

      <div className="bg-[#0E131F] p-8 rounded-2xl border border-white/10 space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-white">DAE Extension v2.4</div>
          <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 font-mono text-xs rounded-full border border-emerald-500/30">
            ● CONNECTED & ACTIVE
          </span>
        </div>
        <p className="text-xs text-gray-400">
          Privately attests dwell duration and scroll depth to oracle nodes without storing personal browsing history.
        </p>
      </div>
    </div>
  );
}
