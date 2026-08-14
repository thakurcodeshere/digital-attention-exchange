import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, Zap, Activity, Globe, Eye, BarChart3 } from 'lucide-react';

export default function HeroSection({ onOpenRegisterSite }) {
  const [indexVal, setIndexVal] = useState(82.41);
  const [tickerItems, setTickerItems] = useState([
    { site: 'TechFlow.io', ai: '91.4', change: '+18.2%', time: '2s ago' },
    { site: 'BuildStack.dev', ai: '74.2', change: '+38.4%', time: '5s ago' },
    { site: 'ResearchHub.org', ai: '94.7', change: '+12.1%', time: '12s ago' },
    { site: 'DevSphere.app', ai: '88.9', change: '+14.5%', time: '18s ago' },
  ]);

  // Simulate real-time ticking index value
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexVal((prev) => +(prev + (Math.random() * 0.08 - 0.03)).toFixed(2));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-grid-pattern">
      {/* Glow Orbs background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow-cyan pointer-events-none opacity-60" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] radial-glow-blue pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Category Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF] shadow-glowCyan">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
              <span className="font-semibold tracking-wide uppercase">Attention Market / Web Infrastructure</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
              The market for <br />
              <span className="gradient-text-cyan">internet attention.</span>
            </h1>

            {/* Supporting Statement */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed font-normal">
              Every day, billions of people spend time on websites. <strong className="text-white font-semibold">SITE</strong> turns that attention into measurable market data — so websites can understand their value, users can earn from genuine engagement, and markets can discover where attention is moving.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
              <a
                href="#explore"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#00F0FF] text-black font-bold text-base hover:bg-[#00F0FF]/90 shadow-glowCyan transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <span>Explore the Market</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenRegisterSite}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl glass-panel border border-white/15 hover:border-[#00F0FF]/40 text-white font-semibold text-base hover:bg-white/5 transition-all duration-300 group"
              >
                <span>I'm a Website Owner</span>
                <ArrowRight className="w-5 h-5 ml-2 text-[#00F0FF] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Metrics Pills */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold font-mono text-white">84.2M</div>
                <div className="text-xs text-gray-400 font-sans mt-0.5">Attention Volume</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#00F0FF]">12,482</div>
                <div className="text-xs text-gray-400 font-sans mt-0.5">Active Sites</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-emerald-400">1.8B</div>
                <div className="text-xs text-gray-400 font-sans mt-0.5">Verified Sessions</div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Market Visualizer Card */}
          <div className="lg:col-span-5">
            <div className="relative glass-panel-glow rounded-3xl p-6 sm:p-8 space-y-6 transform hover:scale-[1.01] transition-all duration-300">
              
              {/* Header inside Card */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-[#00F0FF] animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-gray-400">ATTENTION MARKET</span>
                </div>
                <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  <TrendingUp className="w-3.5 h-3.5 mr-1" />
                  <span>MARKET OPEN</span>
                </div>
              </div>

              {/* Index Value Box */}
              <div className="bg-[#07090E]/80 rounded-2xl p-5 border border-white/10 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-mono text-gray-400 uppercase">SITE ATTENTION INDEX</span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">+2.84% 24h</span>
                </div>
                <div className="flex items-baseline space-x-3">
                  <span className="text-4xl font-extrabold font-mono text-white tracking-tight">
                    {indexVal}
                  </span>
                  <span className="text-xl font-bold text-emerald-400">↑</span>
                </div>
              </div>

              {/* Live Wave Chart (SVG) */}
              <div className="h-40 relative rounded-xl bg-[#07090E]/60 border border-white/5 p-4 flex flex-col justify-end overflow-hidden">
                <div className="absolute top-3 left-4 text-[11px] font-mono text-gray-500">Live Attention Stream (Real-Time)</div>
                <svg className="w-full h-28 overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 70 Q 30 40 60 65 T 120 40 T 180 50 T 240 25 T 300 10 L 300 100 L 0 100 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    d="M 0 70 Q 30 40 60 65 T 120 40 T 180 50 T 240 25 T 300 10"
                    fill="none"
                    stroke="#00F0FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Glowing pulsing node point */}
                  <circle cx="300" cy="10" r="5" fill="#00F0FF" className="animate-ping" />
                  <circle cx="300" cy="10" r="4" fill="#FFFFFF" />
                </svg>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                  <div className="text-[10px] text-gray-400 font-mono uppercase">Attention Vol</div>
                  <div className="text-sm font-bold font-mono text-white mt-1">84.2M</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                  <div className="text-[10px] text-gray-400 font-mono uppercase">Active Sites</div>
                  <div className="text-sm font-bold font-mono text-[#00F0FF] mt-1">12,482</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                  <div className="text-[10px] text-gray-400 font-mono uppercase">Engagement</div>
                  <div className="text-sm font-bold font-mono text-emerald-400 mt-1">1.8B</div>
                </div>
              </div>

              {/* Ticker stream */}
              <div className="pt-2">
                <div className="text-[10px] uppercase font-mono tracking-widest text-gray-500 mb-2">Live Verified Activity</div>
                <div className="space-y-1.5">
                  {tickerItems.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs font-mono bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
                      <span className="text-gray-300 font-semibold">{item.site}</span>
                      <span className="text-gray-400">AI {item.ai}</span>
                      <span className="text-emerald-400 font-bold">{item.change}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center text-[11px] text-gray-500 font-mono">
                Visualizing live internet attention performance metrics
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
