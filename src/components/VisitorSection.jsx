import React from 'react';
import { ArrowRight, User, ShieldCheck, Flame, PieChart, Sparkles } from 'lucide-react';

export default function VisitorSection({ onOpenAuth }) {
  const portfolio = [
    { cat: 'Tech', pct: 31, color: 'bg-[#00F0FF]' },
    { cat: 'News', pct: 24, color: 'bg-blue-500' },
    { cat: 'Education', pct: 18, color: 'bg-purple-500' },
    { cat: 'Research', pct: 15, color: 'bg-emerald-400' },
    { cat: 'Other', pct: 12, color: 'bg-gray-500' },
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 space-y-6 border border-white/10">
              
              {/* Today summary */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div className="flex items-center space-x-2">
                  <Flame className="w-5 h-5 text-amber-400 animate-bounce" />
                  <span className="text-sm font-bold font-mono text-white">TODAY'S ACTIVITY</span>
                </div>
                <span className="text-xs font-mono text-[#00F0FF]">7 DAY STREAK 🔥</span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="text-[10px] font-mono text-gray-400">ENGAGEMENT</div>
                  <div className="text-sm font-bold font-mono text-[#00F0FF] mt-1">+12.4 DAE</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="text-[10px] font-mono text-gray-400">STREAK</div>
                  <div className="text-sm font-bold font-mono text-white mt-1">7 days</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="text-[10px] font-mono text-gray-400">SESSIONS</div>
                  <div className="text-sm font-bold font-mono text-emerald-400 mt-1">14</div>
                </div>
              </div>

              {/* Portfolio breakdown */}
              <div className="space-y-4 pt-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-gray-300 font-semibold uppercase">ATTENTION PORTFOLIO</span>
                  <span className="text-gray-400">VERIFIED ATTENTION</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-3 rounded-full overflow-hidden flex bg-gray-800">
                  {portfolio.map((item, idx) => (
                    <div
                      key={idx}
                      style={{ width: `${item.pct}%` }}
                      className={`${item.color} h-full`}
                      title={`${item.cat}: ${item.pct}%`}
                    />
                  ))}
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                  {portfolio.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                      <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                      <span className="text-gray-300">{item.cat}</span>
                      <span className="text-white font-bold ml-auto">{item.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
              <User className="w-3.5 h-3.5" />
              <span>VISITOR VALUE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Your attention <br />
              <span className="gradient-text-cyan">has value.</span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              Digital Attention Exchange is designed to reward genuine participation across the attention economy.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-sm text-gray-300">
                <ShieldCheck className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
                <span>Earn verified engagement rewards while exploring participating websites</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-gray-300">
                <ShieldCheck className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
                <span>100% privacy-focused — no intrusive surveillance trackers required</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-gray-300">
                <ShieldCheck className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
                <span>Build your personal verified web reputation footprint</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenAuth('signup')}
                className="inline-flex items-center px-8 py-4 rounded-xl bg-[#00F0FF] text-black font-bold text-base hover:bg-[#00F0FF]/90 shadow-glowCyan transition-all group"
              >
                <span>Start participating</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
