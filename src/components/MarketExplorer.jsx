import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Search, ExternalLink, Activity, Sparkles, Filter } from 'lucide-react';

export default function MarketExplorer({ onOpenAppDemo }) {
  const [activeTab, setActiveTab] = useState('ALL');

  const sites = [
    {
      name: 'TechFlow',
      domain: 'techflow.io',
      category: 'Tech',
      tag: 'TRENDING',
      ai: '91.4',
      change: '+18.2%',
      attention: '+24.8%',
      retention: '+12.1%',
      sessionAvg: '6m 15s',
      sparkline: 'M 0 30 Q 20 10 40 25 T 80 15 T 120 5'
    },
    {
      name: 'BuildStack',
      domain: 'buildstack.dev',
      category: 'Dev',
      tag: 'RISING',
      ai: '74.2',
      change: '+38.4%',
      attention: '+31.0%',
      retention: '+19.4%',
      sessionAvg: '9m 20s',
      sparkline: 'M 0 35 Q 30 25 60 15 T 120 5'
    },
    {
      name: 'ResearchHub',
      domain: 'researchhub.org',
      category: 'Research',
      tag: 'MOST ENGAGED',
      ai: '94.7',
      change: '+14.5%',
      attention: '+18.6%',
      retention: '+71.0%',
      sessionAvg: '8m 42s',
      sparkline: 'M 0 20 Q 40 30 70 10 T 120 2'
    },
    {
      name: 'DevSphere',
      domain: 'devsphere.app',
      category: 'Dev',
      tag: 'RISING',
      ai: '88.9',
      change: '+22.1%',
      attention: '+27.4%',
      retention: '+15.2%',
      sessionAvg: '12m 10s',
      sparkline: 'M 0 25 Q 30 15 60 20 T 120 8'
    },
    {
      name: 'DesignPulse',
      domain: 'designpulse.co',
      category: 'Media',
      tag: 'TRENDING',
      ai: '82.5',
      change: '+19.6%',
      attention: '+20.1%',
      retention: '+11.8%',
      sessionAvg: '5m 45s',
      sparkline: 'M 0 30 Q 25 20 55 10 T 120 12'
    },
    {
      name: 'CryptoMetrics',
      domain: 'cryptometrics.ai',
      category: 'Web3',
      tag: 'MOST ENGAGED',
      ai: '90.1',
      change: '+25.3%',
      attention: '+29.0%',
      retention: '+78.0%',
      sessionAvg: '11m 30s',
      sparkline: 'M 0 35 Q 20 5 60 15 T 120 4'
    }
  ];

  const filteredSites = sites.filter(s => {
    if (activeTab === 'ALL') return true;
    if (activeTab === 'TRENDING') return s.tag === 'TRENDING';
    if (activeTab === 'RISING') return s.tag === 'RISING';
    if (activeTab === 'MOST ENGAGED') return s.tag === 'MOST ENGAGED';
    if (activeTab === 'TECH') return s.category === 'Tech';
    if (activeTab === 'WEB3') return s.category === 'Web3';
    return true;
  });

  return (
    <section id="explore" className="py-20 lg:py-28 relative bg-grid-pattern border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
              <Activity className="w-3.5 h-3.5" />
              <span>MARKET EXPLORER PREVIEW</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Discover where <span className="gradient-text-cyan">attention is moving.</span>
            </h2>
            <p className="text-gray-300 text-base max-w-xl">
              Real-time performance indexes and growth metrics across verified digital properties.
            </p>
          </div>

          <button
            onClick={onOpenAppDemo}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#00F0FF] text-black font-bold text-sm hover:bg-[#00F0FF]/90 shadow-glowCyan transition-all shrink-0"
          >
            <span>Explore all markets</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-white/10">
          {['ALL', 'TRENDING', 'RISING', 'MOST ENGAGED', 'TECH', 'WEB3'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all shrink-0 ${
                activeTab === tab
                  ? 'bg-[#00F0FF] text-black shadow-glowCyan'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sites Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSites.map((site, idx) => (
            <div 
              key={idx}
              className="glass-panel rounded-3xl p-6 space-y-5 border border-white/10 hover:border-[#00F0FF]/40 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Top Header */}
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                      {site.name}
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                  </div>
                  <span className="text-xs font-mono text-gray-400">{site.domain}</span>
                </div>

                <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                  site.tag === 'TRENDING'
                    ? 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                    : site.tag === 'RISING'
                    ? 'bg-[#00F0FF]/10 border-[#00F0FF]/30 text-[#00F0FF]'
                    : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                }`}>
                  {site.tag}
                </span>
              </div>

              {/* Index Value & Sparkline */}
              <div className="bg-[#07090E]/80 rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase">AI INDEX</div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-extrabold font-mono text-white">{site.ai}</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">↑ {site.change}</span>
                  </div>
                </div>

                {/* SVG Sparkline */}
                <div className="w-24 h-10">
                  <svg className="w-full h-full" viewBox="0 0 120 40">
                    <path
                      d={site.sparkline}
                      fill="none"
                      stroke="#00F0FF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Secondary stats */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                  <div className="text-gray-500 text-[10px]">ATTENTION</div>
                  <div className="text-[#00F0FF] font-bold mt-0.5">{site.attention}</div>
                </div>
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                  <div className="text-gray-500 text-[10px]">AVG SESSION</div>
                  <div className="text-white font-bold mt-0.5">{site.sessionAvg}</div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenAppDemo}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#00F0FF]/20 border border-white/10 hover:border-[#00F0FF]/40 text-xs font-semibold text-white hover:text-[#00F0FF] transition-all flex items-center justify-center space-x-1"
              >
                <span>View Market Data</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={onOpenAppDemo}
            className="inline-flex items-center px-8 py-4 rounded-xl bg-[#00F0FF] text-black font-bold text-base hover:bg-[#00F0FF]/90 shadow-glowCyan transition-all"
          >
            <span>Explore all 12,482 Markets in App</span>
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </button>
        </div>

      </div>
    </section>
  );
}
