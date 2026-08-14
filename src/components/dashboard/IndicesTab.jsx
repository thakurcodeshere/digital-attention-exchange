import React from 'react';
import { Layers } from 'lucide-react';

export default function IndicesTab() {
  const indices = [
    { name: 'Top 10 Tech Index', ai: '93.2', change: '+14.2%', sites: '10 Properties' },
    { name: 'Developer Tools Basket', ai: '88.5', change: '+22.1%', sites: '15 Properties' },
    { name: 'Web3 & AI Frontier', ai: '91.0', change: '+31.4%', sites: '12 Properties' }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Curator Indices & Sector Funds</h1>
        <p className="text-sm text-gray-400">Public curator index baskets and thematic web performance funds.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {indices.map((item, idx) => (
          <div key={idx} className="bg-[#0E131F] p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="text-lg font-bold text-white">{item.name}</div>
            <div className="flex justify-between items-baseline font-mono text-xs">
              <span className="text-[#00F0FF] text-xl font-extrabold">AI {item.ai}</span>
              <span className="text-emerald-400 font-bold">{item.change}</span>
            </div>
            <div className="text-xs text-gray-400 font-mono pt-2 border-t border-white/5">{item.sites}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
