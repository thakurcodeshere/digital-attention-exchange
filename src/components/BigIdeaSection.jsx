import React from 'react';
import { ArrowRight, Activity, ShieldCheck, TrendingUp, ChevronRight } from 'lucide-react';

export default function BigIdeaSection({ onOpenMethodology }) {
  const steps = [
    {
      num: '01',
      title: 'MEASURE',
      subtitle: 'Attention is measured across sites',
      desc: 'Multi-dimensional analysis evaluating engagement depth, traffic velocity, retention gravity, economic conversion, and network effects.',
      icon: Activity,
      color: 'from-[#00F0FF] to-blue-500'
    },
    {
      num: '02',
      title: 'VERIFY',
      subtitle: 'Genuine activity is verified',
      desc: 'Independent validator networks and statistical anomaly detection filter out artificial bot traffic and synthetic engagement.',
      icon: ShieldCheck,
      color: 'from-blue-500 to-purple-500'
    },
    {
      num: '03',
      title: 'MARKET',
      subtitle: 'Attention becomes market data',
      desc: 'Real-time Attention Index scores unlock public market discovery, Site Shares, and transparent performance valuation.',
      icon: TrendingUp,
      color: 'from-purple-500 to-emerald-500'
    }
  ];

  const pipeline = [
    'People',
    'Attention',
    'Measurement',
    'Verification',
    'Attention Index',
    'Market'
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 relative bg-grid-pattern border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
            <span>THE BIG IDEA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How SITE transforms traffic into <span className="gradient-text-cyan">market data.</span>
          </h2>
          <p className="text-lg text-gray-300">
            A simple three-step infrastructure powering the global attention market.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="relative glass-panel rounded-3xl p-8 space-y-6 border border-white/10 hover:border-[#00F0FF]/40 transition-all duration-300 group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-4xl font-extrabold font-mono text-gray-600 group-hover:text-[#00F0FF] transition-colors">
                    {step.num}
                  </span>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${step.color} p-[1px]`}>
                    <div className="w-full h-full bg-[#07090E] rounded-[15px] flex items-center justify-center text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono tracking-widest text-[#00F0FF] uppercase mb-1">{step.title}</div>
                  <h3 className="text-xl font-bold text-white">{step.subtitle}</h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Pipeline Flow */}
        <div className="glass-panel-glow rounded-3xl p-8 max-w-5xl mx-auto space-y-6">
          <div className="text-center text-xs font-mono uppercase tracking-widest text-gray-400">
            Value Creation Flow
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {pipeline.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-mono font-semibold text-white hover:border-[#00F0FF]/40 hover:text-[#00F0FF] transition-all">
                  {item}
                </div>
                {idx < pipeline.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-[#00F0FF] shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={onOpenMethodology}
              className="inline-flex items-center text-sm font-semibold text-[#00F0FF] hover:text-white transition-colors group"
            >
              <span>See the methodology</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
