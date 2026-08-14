import React from 'react';
import { Globe, Plus, CheckCircle2 } from 'lucide-react';

export default function OwnerWorkspaceTab() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Owner Workspace</h1>
          <p className="text-sm text-gray-400">Manage digital property listings and Attention Index analytics integrations.</p>
        </div>
        <button className="px-4 py-2 bg-[#00F0FF] text-black font-bold text-xs rounded-xl shadow-glowCyan">
          + Add New Site
        </button>
      </div>

      <div className="bg-[#0E131F] p-6 rounded-2xl border border-white/10 space-y-4">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div className="font-bold text-white text-base">techflow.io</div>
          <span className="text-xs font-mono text-emerald-400">VERIFIED DOMAIN</span>
        </div>
        <div className="grid grid-cols-3 gap-4 text-xs font-mono">
          <div>
            <div className="text-gray-500">ATTENTION INDEX</div>
            <div className="text-xl font-bold text-white mt-1">91.4 ↑</div>
          </div>
          <div>
            <div className="text-gray-500">30D ATTENTION</div>
            <div className="text-xl font-bold text-emerald-400 mt-1">+18.2%</div>
          </div>
          <div>
            <div className="text-gray-500">GA4 INTEGRATION</div>
            <div className="text-xl font-bold text-[#00F0FF] mt-1">CONNECTED</div>
          </div>
        </div>
      </div>
    </div>
  );
}
