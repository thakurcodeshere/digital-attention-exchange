import React from 'react';
import { Layers, ChevronDown } from 'lucide-react';

export default function ExpansionRoadmap() {
  const phases = [
    {
      stage: 'TODAY',
      title: 'Websites',
      desc: 'Publishers, blogs, developer documentation, SaaS landing pages, news outlets.',
      active: true
    },
    {
      stage: 'NEXT',
      title: 'Apps · Newsletters · Video · Podcasts · Open Source',
      desc: 'Expanding attention indexing to software applications, Substack publications, YouTube streams, and GitHub repos.',
      active: false
    },
    {
      stage: 'LATER',
      title: 'Attention Futures · Indices · Physical Attention',
      desc: 'Introducing synthetic attention derivatives, sector-wide index funds, and physical digital signage attention markets.',
      active: false
    },
    {
      stage: 'FUTURE',
      title: 'AI-mediated attention economy',
      desc: 'Automated AI agent browsing, machine-to-machine attention settlement, and algorithmic curator funds.',
      active: false
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-grid-pattern border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
            <Layers className="w-3.5 h-3.5" />
            <span>VISION & EXPANSION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From websites to the <span className="gradient-text-cyan">attention economy.</span>
          </h2>
          <p className="text-lg text-gray-300">
            A progressive roadmap expanding attention measurement across all digital mediums.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto space-y-6">
          {phases.map((p, idx) => (
            <div 
              key={idx}
              className={`glass-panel rounded-3xl p-6 sm:p-8 border transition-all ${
                p.active
                  ? 'border-[#00F0FF] shadow-glowCyan bg-gradient-to-r from-[#00F0FF]/10 to-transparent'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                      p.active
                        ? 'bg-[#00F0FF] text-black border-[#00F0FF]'
                        : 'bg-white/5 text-gray-400 border-white/10'
                    }`}>
                      {p.stage}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{p.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
