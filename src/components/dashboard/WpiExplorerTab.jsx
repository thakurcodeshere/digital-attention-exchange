import React from 'react';
import { Activity, ShieldCheck, Zap } from 'lucide-react';

export default function WpiExplorerTab() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">WPI Explorer (Web Performance Index)</h1>
        <p className="text-sm text-gray-400">Multi-dimensional attention telemetry and verified session metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0E131F] p-6 rounded-2xl border border-white/10 space-y-2">
          <div className="text-xs font-mono text-gray-400">ENGAGEMENT DEPTH (30%)</div>
          <div className="text-3xl font-extrabold font-mono text-[#00F0FF]">92.4 / 100</div>
        </div>
        <div className="bg-[#0E131F] p-6 rounded-2xl border border-white/10 space-y-2">
          <div className="text-xs font-mono text-gray-400">TRAFFIC VELOCITY (25%)</div>
          <div className="text-3xl font-extrabold font-mono text-purple-400">84.1 / 100</div>
        </div>
        <div className="bg-[#0E131F] p-6 rounded-2xl border border-white/10 space-y-2">
          <div className="text-xs font-mono text-gray-400">RETENTION GRAVITY (20%)</div>
          <div className="text-3xl font-extrabold font-mono text-emerald-400">89.8 / 100</div>
        </div>
      </div>
    </div>
  );
}
