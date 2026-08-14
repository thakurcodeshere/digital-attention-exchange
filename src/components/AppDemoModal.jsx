import React, { useState } from 'react';
import { X, TrendingUp, Globe, User, ShieldCheck, Activity, Search, ArrowUpRight, BarChart2, Flame, RefreshCw, Wallet } from 'lucide-react';

export default function AppDemoModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [tradeAmount, setTradeAmount] = useState('100');
  const [tradeStatus, setTradeStatus] = useState(null);

  if (!isOpen) return null;

  const sampleMarkets = [
    { name: 'TechFlow.io', ai: '91.4', change: '+18.2%', sharePrice: '$14.20', vol: '1.2M' },
    { name: 'ResearchHub.org', ai: '94.7', change: '+12.1%', sharePrice: '$28.50', vol: '2.4M' },
    { name: 'BuildStack.dev', ai: '74.2', change: '+38.4%', sharePrice: '$8.90', vol: '850K' },
    { name: 'DevSphere.app', ai: '88.9', change: '+14.5%', sharePrice: '$19.40', vol: '1.8M' }
  ];

  const handleTrade = (action) => {
    setTradeStatus(`Successfully submitted ${action} order of ${tradeAmount} SITE on TechFlow.io!`);
    setTimeout(() => setTradeStatus(null), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-6xl glass-panel-glow rounded-3xl border border-[#00F0FF]/40 bg-[#07090E] text-white overflow-hidden shadow-2xl flex flex-col h-[90vh]">
        
        {/* Top App Navbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0E131F]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#00F0FF] text-black font-mono font-black flex items-center justify-center">
              S
            </div>
            <span className="font-extrabold text-xl tracking-wider font-sans">SITE APP</span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              ● SIMULATED MAINNET
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
              <Wallet className="w-3.5 h-3.5" />
              <span>0x84...92A (1,240.50 SITE)</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main App Layout */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          
          {/* App Sidebar Tabs */}
          <div className="w-full md:w-56 bg-[#090C14] border-r border-white/10 p-4 space-y-1 text-xs font-mono shrink-0 flex md:flex-col overflow-x-auto md:overflow-visible">
            {[
              { id: 'overview', label: 'Overview', icon: Activity },
              { id: 'explore', label: 'Explore', icon: Search },
              { id: 'markets', label: 'Site Markets', icon: TrendingUp },
              { id: 'owner', label: 'Owner Console', icon: Globe },
              { id: 'portfolio', label: 'Portfolio & Rewards', icon: User },
              { id: 'validator', label: 'Validator & Defense', icon: ShieldCheck },
            ].map((t) => {
              const Icon = t.icon;
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`w-full px-4 py-3 rounded-xl text-left flex items-center space-x-3 transition-all shrink-0 ${
                    isActive
                      ? 'bg-[#00F0FF]/15 text-[#00F0FF] font-bold border border-[#00F0FF]/30 shadow-glowCyan'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>

          {/* App Body Content */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-[#07090E]">

            {tradeStatus && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono animate-fadeIn">
                {tradeStatus}
              </div>
            )}

            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <div className="text-xs font-mono text-gray-400">GLOBAL ATTENTION INDEX</div>
                    <div className="text-3xl font-extrabold font-mono text-white mt-2">82.41 ↑</div>
                    <div className="text-xs text-emerald-400 font-mono mt-1">+2.84% 24h</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <div className="text-xs font-mono text-gray-400">24H ATTENTION VOLUME</div>
                    <div className="text-3xl font-extrabold font-mono text-[#00F0FF] mt-2">84.2M</div>
                    <div className="text-xs text-gray-400 font-mono mt-1">12,482 Active Sites</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <div className="text-xs font-mono text-gray-400">VERIFIED SESSIONS</div>
                    <div className="text-3xl font-extrabold font-mono text-purple-400 mt-2">1.8B</div>
                    <div className="text-xs text-emerald-400 font-mono mt-1">99.8% Bot Discounted</div>
                  </div>
                </div>

                <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
                  <div className="text-sm font-bold font-mono text-white">TOP ATTENTION PERFORMERS</div>
                  <div className="space-y-2">
                    {sampleMarkets.map((m, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5 text-xs font-mono">
                        <div className="font-bold text-white">{m.name}</div>
                        <div className="text-gray-400">AI {m.ai}</div>
                        <div className="text-emerald-400 font-bold">{m.change}</div>
                        <div className="text-[#00F0FF]">{m.sharePrice}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: EXPLORE / MARKETS */}
            {(activeTab === 'explore' || activeTab === 'markets') && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Site Share Trading Terminal</h3>
                  <span className="text-xs font-mono text-gray-400">PAIR: TECHFLOW / SITE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Order book preview */}
                  <div className="lg:col-span-7 glass-panel rounded-2xl p-5 border border-white/10 space-y-4">
                    <div className="text-xs font-mono text-gray-400 uppercase">Live Order Book — TechFlow.io</div>
                    
                    <div className="space-y-1.5 text-xs font-mono">
                      <div className="flex justify-between text-rose-400 bg-rose-500/10 p-2 rounded">
                        <span>SELL 14.25</span>
                        <span>500 SHARES</span>
                      </div>
                      <div className="flex justify-between text-rose-400 bg-rose-500/10 p-2 rounded">
                        <span>SELL 14.22</span>
                        <span>1,200 SHARES</span>
                      </div>
                      <div className="text-center font-bold text-white py-1 border-y border-white/10">
                        LAST MATCH: $14.20
                      </div>
                      <div className="flex justify-between text-emerald-400 bg-emerald-500/10 p-2 rounded">
                        <span>BUY 14.18</span>
                        <span>800 SHARES</span>
                      </div>
                      <div className="flex justify-between text-emerald-400 bg-emerald-500/10 p-2 rounded">
                        <span>BUY 14.15</span>
                        <span>2,500 SHARES</span>
                      </div>
                    </div>
                  </div>

                  {/* Trade action box */}
                  <div className="lg:col-span-5 bg-white/5 rounded-2xl p-5 border border-white/10 space-y-4">
                    <div className="text-xs font-mono text-gray-400 uppercase">Trade Site Shares</div>
                    
                    <div className="space-y-2 text-xs font-mono">
                      <label className="text-gray-300">Amount ($SITE)</label>
                      <input
                        type="text"
                        value={tradeAmount}
                        onChange={(e) => setTradeAmount(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#07090E] border border-white/10 text-white font-mono"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => handleTrade('BUY')}
                        className="py-3 rounded-xl bg-emerald-500 text-black font-bold text-xs shadow-glowEmerald"
                      >
                        BUY SHARES
                      </button>
                      <button
                        onClick={() => handleTrade('SELL')}
                        className="py-3 rounded-xl bg-rose-500 text-white font-bold text-xs"
                      >
                        SELL SHARES
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: OWNER CONSOLE */}
            {activeTab === 'owner' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Website Owner Console</h3>
                  <span className="text-xs font-mono text-[#00F0FF]">LIVE DOMAIN: TECHFLOW.IO</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="text-xs font-mono text-gray-400">ATTENTION INDEX</div>
                    <div className="text-2xl font-extrabold text-white mt-1">91.4 ↑</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="text-xs font-mono text-gray-400">VERIFIED SESSIONS</div>
                    <div className="text-2xl font-extrabold text-[#00F0FF] mt-1">1.82M</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="text-xs font-mono text-gray-400">MARKET CAPITALIZATION</div>
                    <div className="text-2xl font-extrabold text-emerald-400 mt-1">$4.2M</div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: PORTFOLIO */}
            {activeTab === 'portfolio' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Visitor Attention Rewards</h3>
                  <span className="text-xs font-mono text-emerald-400">STREAK: 7 DAYS 🔥</span>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                  <div className="text-xs font-mono text-gray-400">TODAY'S ACCUMULATED REWARDS</div>
                  <div className="text-4xl font-extrabold font-mono text-[#00F0FF]">+12.4 SITE</div>
                  <div className="text-xs text-gray-300 font-mono">14 Verified High-Depth Dwell Sessions</div>
                </div>
              </div>
            )}

            {/* TAB 5: VALIDATOR */}
            {activeTab === 'validator' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Validator Node Telemetry</h3>
                  <span className="text-xs font-mono text-purple-400">NODE STATUS: ACTIVE</span>
                </div>

                <div className="bg-black/60 p-4 rounded-2xl border border-white/10 font-mono text-xs text-gray-300 space-y-2">
                  <div>[16:44:02] Oracle attestation broadcast received from Node #14</div>
                  <div>[16:44:05] Bot challenge resolved: 1,420 synthetic sessions slashed on Domain #88</div>
                  <div className="text-emerald-400">[16:44:10] Attestation block #184920 verified. Reward +0.40 SITE</div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
