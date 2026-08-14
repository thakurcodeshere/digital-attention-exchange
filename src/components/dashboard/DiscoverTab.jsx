import React, { useState } from 'react';
import { Search, TrendingUp, Filter, ExternalLink, Activity, ArrowUpRight } from 'lucide-react';

export default function DiscoverTab() {
  const [filter, setFilter] = useState('ALL');

  const sites = [
    { name: 'TechFlow.io', ai: '91.4', change: '+18.2%', category: 'Tech', volume: '1.8M SITE', dwell: '6m 15s' },
    { name: 'ResearchHub.org', ai: '94.7', change: '+12.1%', category: 'Research', volume: '3.4M SITE', dwell: '8m 42s' },
    { name: 'BuildStack.dev', ai: '74.2', change: '+38.4%', category: 'Dev Tools', volume: '920K SITE', dwell: '9m 20s' },
    { name: 'DevSphere.app', ai: '88.9', change: '+14.5%', category: 'Dev Tools', volume: '2.1M SITE', dwell: '12m 10s' },
    { name: 'DesignPulse.co', ai: '82.5', change: '+19.6%', category: 'Design', volume: '1.4M SITE', dwell: '5m 45s' },
    { name: 'CryptoMetrics.ai', ai: '90.1', change: '+25.3%', category: 'Web3', volume: '4.2M SITE', dwell: '11m 30s' }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Attention Market Discover</h1>
          <p className="text-sm text-gray-400">Discover and explore verified attention properties across the web.</p>
        </div>

        <div className="flex items-center space-x-2">
          {['ALL', 'TECH', 'DEV TOOLS', 'WEB3'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                filter === cat
                  ? 'bg-[#00F0FF] text-black shadow-glowCyan'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sites.filter(s => filter === 'ALL' || s.category.toUpperCase().includes(filter)).map((s, idx) => (
          <div key={idx} className="bg-[#0E131F] rounded-2xl p-5 border border-white/10 space-y-4 hover:border-[#00F0FF]/40 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-lg font-bold text-white flex items-center space-x-1.5">
                  <span>{s.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                </div>
                <span className="text-xs font-mono text-gray-400">{s.category}</span>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {s.change}
              </span>
            </div>

            <div className="bg-[#07090E] p-3 rounded-xl border border-white/5 flex justify-between items-center">
              <div>
                <div className="text-[10px] font-mono text-gray-500">ATTENTION INDEX</div>
                <div className="text-2xl font-extrabold font-mono text-[#00F0FF]">{s.ai}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono text-gray-500">AVG DWELL TIME</div>
                <div className="text-sm font-bold font-mono text-white">{s.dwell}</div>
              </div>
            </div>

            <div className="flex justify-between text-xs font-mono text-gray-400">
              <span>Volume: {s.volume}</span>
              <span className="text-[#00F0FF] cursor-pointer hover:underline">Trade Shares →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
