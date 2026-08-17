import React, { useState } from 'react';
import { Calendar, CheckCircle2, Circle } from 'lucide-react';

export default function CapabilitiesRoadmap() {
  const [activeTab, setActiveTab] = useState('Foundation');

  const milestones = [
    {
      phase: 'Foundation',
      action: 'Measure',
      status: 'COMPLETED',
      items: [
        'Attention Index 5-anchor calculation model',
        'Google Analytics & Segment API integrations',
        'Statistical bot detection & verification engine',
        'Self-service website owner onboarding'
      ]
    },
    {
      phase: 'Market',
      action: 'Discover',
      status: 'IN PROGRESS',
      items: [
        'DAE Attention Shares synthetic performance contracts',
        'Real-time Market Explorer & order book interface',
        'Decentralized trading infrastructure & AMM pools',
        'Curator lists and track record reputation score'
      ]
    },
    {
      phase: 'Network',
      action: 'Expand',
      status: 'PLANNED',
      items: [
        'Desktop & Mobile Web SDK integration',
        'Substack newsletters & podcast stream indexing',
        'YouTube video & creator channel attention metrics',
        'Open source software repository contribution metrics'
      ]
    },
    {
      phase: 'Protocol',
      action: 'Coordinate',
      status: 'PLANNED',
      items: [
        'Independent validator node network launch',
        'Community DAO governance & parameter voting',
        'Open oracle attestation standard',
        'Permissionless developer portal & SDKs'
      ]
    },
    {
      phase: 'Attention Economy',
      action: 'Scale',
      status: 'FUTURE',
      items: [
        'Attention futures & options derivatives',
        'Physical attention metrics & digital signage indexing',
        'AI agent browsing & automated machine settlement',
        'Global Web Attention Benchmark Index'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
            <Calendar className="w-3.5 h-3.5" />
            <span>CAPABILITY MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built on milestones, <span className="gradient-text-cyan">not hype.</span>
          </h2>
          <p className="text-lg text-gray-300">
            Engineered progress driven by protocol capability milestones.
          </p>
        </div>

        {/* Milestone Selector Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar justify-start sm:justify-center">
          {milestones.map((m) => (
            <button
              key={m.phase}
              onClick={() => setActiveTab(m.phase)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all shrink-0 ${
                activeTab === m.phase
                  ? 'bg-[#00F0FF] text-black shadow-glowCyan'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {m.phase} ({m.action})
            </button>
          ))}
        </div>

        {/* Selected Milestone Content Card */}
        {milestones.map((m) => {
          if (m.phase !== activeTab) return null;
          return (
            <div 
              key={m.phase}
              className="glass-panel-glow rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto border border-[#00F0FF]/30 space-y-6"
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono text-[#00F0FF] uppercase">{m.action} STAGE</span>
                  <h3 className="text-2xl font-bold text-white">{m.phase} Phase</h3>
                </div>
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                  m.status === 'COMPLETED'
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : m.status === 'IN PROGRESS'
                    ? 'bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/30'
                    : 'bg-white/5 text-gray-400 border-white/10'
                }`}>
                  {m.status}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {m.items.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
