import React from 'react';
import { AlertTriangle, ShieldCheck, ChevronRight, Cpu } from 'lucide-react';

export default function BotPreventionSection() {
  const steps = [
    { title: 'BOT', color: 'text-rose-400 border-rose-500/40 bg-rose-500/10' },
    { title: 'DETECT', color: 'text-amber-400 border-amber-500/40 bg-amber-500/10' },
    { title: 'DISCOUNT', color: 'text-purple-400 border-purple-500/40 bg-purple-500/10' },
    { title: 'CHALLENGE', color: 'text-blue-400 border-blue-500/40 bg-blue-500/10' },
    { title: 'VERIFY', color: 'text-[#00F0FF] border-[#00F0FF]/40 bg-[#00F0FF]/10' },
    { title: 'SLASH', color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10' }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-grid-pattern border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>ANTI-MANIPULATION ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Attention is valuable only <span className="gradient-text-cyan">when it is real.</span>
          </h2>
          <p className="text-lg text-gray-300">
            Digital Attention Exchange combines behavioral signals, analytics sources, statistical anomaly detection and community challenges to make artificial engagement economically harder.
          </p>
        </div>

        {/* Pipeline visual */}
        <div className="glass-panel-glow rounded-3xl p-8 max-w-5xl mx-auto border border-white/10 space-y-8">
          
          <div className="text-center text-xs font-mono uppercase tracking-widest text-gray-400">
            Anti-Bot & Manipulation Defense Pipeline
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {steps.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className={`px-4 py-3 rounded-2xl border font-mono font-extrabold text-sm shadow-md transition-all hover:scale-105 ${item.color}`}>
                  {item.title}
                </div>
                {idx < steps.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-gray-500 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="bg-[#07090E]/90 rounded-2xl p-6 border border-white/10 text-xs font-mono text-gray-400 max-w-3xl mx-auto leading-relaxed text-center">
            <ShieldCheck className="w-5 h-5 text-[#00F0FF] mx-auto mb-2" />
            <span>
              Statistical anomaly detection flags unnatural traffic spikes. Validator attestations challenge bad actors, while zero-knowledge behavioral attestations verify human presence without compromising personal identity privacy.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
