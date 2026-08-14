import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export default function PricingSection({ onOpenRegisterSite }) {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Explorer',
      price: '$0',
      period: 'Forever Free',
      desc: 'Essential attention indexing for independent web creators.',
      features: [
        'Basic Attention Index score calculation',
        'Public website market profile',
        'Market discovery & ranking placement',
        'Basic engagement analytics'
      ],
      cta: 'Get Started Free',
      highlight: false
    },
    {
      name: 'Builder',
      price: annual ? '$49' : '$59',
      period: 'per month',
      desc: 'For growing websites & digital publishers building audience assets.',
      features: [
        'Advanced Attention Index diagnostics & breakdown',
        'Historical 30D / 90D trend telemetry',
        'Full REST & GraphQL API access',
        'Actionable visitor retention & growth insights',
        'Custom Curator list embedding widgets'
      ],
      cta: 'Start 14-Day Free Trial',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Billed Annually',
      desc: 'For digital networks, media conglomerates, & institution funds.',
      features: [
        'High-rate limits dedicated API infrastructure',
        'Custom multi-property index weighting models',
        'Dedicated data pipeline & oracle attestation nodes',
        'Multi-property portfolio analytics dashboard',
        '24/7 Enterprise SLA support & legal compliance docs'
      ],
      cta: 'Contact Sales',
      highlight: false
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BUSINESS SERVICES PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            For every stage of <span className="gradient-text-cyan">your website.</span>
          </h2>
          <p className="text-lg text-gray-300">
            SaaS analytics and business diagnostic services kept strictly separate from protocol token economics.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-3 pt-4">
            <span className={`text-xs font-mono ${!annual ? 'text-white font-bold' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="w-12 h-6 rounded-full bg-gray-800 p-1 flex items-center transition-colors relative"
            >
              <div className={`w-4 h-4 rounded-full bg-[#00F0FF] transition-transform ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-xs font-mono ${annual ? 'text-white font-bold' : 'text-gray-400'}`}>
              Annual <span className="text-[#00F0FF]">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((p, idx) => (
            <div 
              key={idx}
              className={`glass-panel rounded-3xl p-8 space-y-6 flex flex-col justify-between transition-all duration-300 ${
                p.highlight
                  ? 'border-[#00F0FF] shadow-glowCyan bg-gradient-to-b from-[#00F0FF]/10 to-[#0E131F]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="space-y-4">
                {p.highlight && (
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#00F0FF] text-black">
                    MOST POPULAR
                  </span>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-white">{p.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">{p.desc}</p>
                </div>

                <div className="flex items-baseline space-x-1 pt-2">
                  <span className="text-4xl font-extrabold font-mono text-white">{p.price}</span>
                  <span className="text-xs font-mono text-gray-400">/ {p.period}</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  {p.features.map((f, i) => (
                    <div key={i} className="flex items-start space-x-3 text-xs text-gray-300">
                      <Check className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={onOpenRegisterSite}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all ${
                    p.highlight
                      ? 'bg-[#00F0FF] text-black hover:bg-[#00F0FF]/90 shadow-glowCyan'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {p.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
