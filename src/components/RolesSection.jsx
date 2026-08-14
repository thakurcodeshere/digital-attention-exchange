import React, { useState } from 'react';
import { User, Globe, TrendingUp, Brain, ShieldCheck, ArrowRight } from 'lucide-react';

export default function RolesSection({ onOpenRegisterSite, onOpenAppDemo, onOpenAuth }) {
  const [activeRole, setActiveRole] = useState('visitors');

  const roles = [
    {
      id: 'visitors',
      title: 'Visitors',
      icon: User,
      badge: '👤 PARTICIPATE & EARN',
      tagline: 'Turn attention into participation.',
      desc: 'Engage with participating websites and earn rewards based on verified engagement.',
      benefits: [
        'Earn $SITE rewards for verified high-depth sessions',
        'Build a personalized verified Attention Portfolio',
        'Privacy-preserving attestation with zero tracker bloat',
        'Discover high-quality curation feeds across the web'
      ],
      ctaText: 'Start exploring →',
      action: () => onOpenAuth('signup')
    },
    {
      id: 'owners',
      title: 'Website Owners',
      icon: Globe,
      badge: '🌐 MONETIZE ATTENTION',
      tagline: 'Turn audience attention into an asset.',
      desc: 'Connect your analytics, measure your Attention Index and access new ways to monetize growth.',
      benefits: [
        'Measure multi-dimensional Attention Index (0–100)',
        'Issue Site Shares to access decentralized capital',
        'Gain deep diagnostic insights into visitor retention',
        'Unlock new direct monetization beyond traditional ads'
      ],
      ctaText: 'List your website →',
      action: onOpenRegisterSite
    },
    {
      id: 'traders',
      title: 'Traders',
      icon: TrendingUp,
      badge: '📈 TRADE PERFORMANCE',
      tagline: 'Trade attention performance.',
      desc: 'Discover emerging websites, analyze market data and participate in Site Share markets.',
      benefits: [
        'Gain market exposure to digital attention trends',
        'Trade Site Shares backed by verified analytics data',
        'Access real-time Attention Index order books',
        'Hedge or speculate on web sector performance'
      ],
      ctaText: 'Explore markets →',
      action: onOpenAppDemo
    },
    {
      id: 'curators',
      title: 'Curators',
      icon: Brain,
      badge: '🧠 BUILD CONVICTION',
      tagline: 'Build conviction around the web.',
      desc: 'Create thematic collections and develop a public track record around your market thesis.',
      benefits: [
        'Publish curated site lists and sector indices',
        'Earn curator fees when users engage with your lists',
        'Establish a verifiable public reputation score',
        'Launch community-funded Curator Index funds'
      ],
      ctaText: 'Become a curator →',
      action: onOpenAppDemo
    },
    {
      id: 'validators',
      title: 'Validators',
      icon: ShieldCheck,
      badge: '🛡️ VERIFY & STRENGTHEN',
      tagline: 'Help keep the market honest.',
      desc: 'Challenge suspicious metrics, verify data and strengthen the network.',
      benefits: [
        'Operate data verification oracles & attestation nodes',
        'Challenge suspicious metrics and bot activity',
        'Earn validator rewards and slashing bounties',
        'Maintain the integrity of open attention metrics'
      ],
      ctaText: 'Learn about verification →',
      action: onOpenAppDemo
    }
  ];

  const currentRole = roles.find(r => r.id === activeRole);

  return (
    <section className="py-20 lg:py-28 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
            <span>PARTICIPANT ARCHETYPES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Choose your role in the <span className="gradient-text-cyan">attention economy.</span>
          </h2>
          <p className="text-lg text-gray-300">
            Whether you visit, own, trade, curate, or validate — SITE creates value for every ecosystem participant.
          </p>
        </div>

        {/* Interactive Role Switcher Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {roles.map((r) => {
            const Icon = r.icon;
            const isActive = r.id === activeRole;
            return (
              <button
                key={r.id}
                onClick={() => setActiveRole(r.id)}
                className={`p-4 rounded-2xl border transition-all flex flex-col items-center space-y-2 text-center ${
                  isActive
                    ? 'bg-gradient-to-b from-[#00F0FF]/20 to-blue-900/30 border-[#00F0FF] shadow-glowCyan text-white'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'text-[#00F0FF]' : 'text-gray-400'}`} />
                <span className="text-sm font-bold font-sans">{r.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Role Content Card */}
        {currentRole && (
          <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 border border-[#00F0FF]/30 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
                <span>{currentRole.badge}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                {currentRole.tagline}
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                {currentRole.desc}
              </p>

              <div className="space-y-3 pt-2">
                {currentRole.benefits.map((b, i) => (
                  <div key={i} className="flex items-start space-x-3 text-sm text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-[#00F0FF] mt-2 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={currentRole.action}
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-[#00F0FF] text-black font-bold text-base hover:bg-[#00F0FF]/90 shadow-glowCyan transition-all"
                >
                  <span>{currentRole.ctaText}</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>

            {/* Visual Callout */}
            <div className="lg:col-span-5 bg-[#07090E]/90 rounded-2xl p-6 border border-white/10 space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] mx-auto flex items-center justify-center">
                <currentRole.icon className="w-8 h-8" />
              </div>
              <div className="text-xl font-bold text-white">{currentRole.title} Console</div>
              <div className="text-xs font-mono text-gray-400">
                Custom dashboard tailored for {currentRole.title.toLowerCase()} with live real-time metrics and reward telemetry.
              </div>
              <div className="pt-2">
                <button
                  onClick={currentRole.action}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-semibold text-gray-300"
                >
                  Preview {currentRole.title} Dashboard
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
