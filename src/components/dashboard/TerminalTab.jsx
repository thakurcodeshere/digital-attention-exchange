import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

export default function TerminalTab() {
  const [amount, setAmount] = useState('100');
  const [tradeMessage, setTradeMessage] = useState(null);

  const handleOrder = (type) => {
    setTradeMessage(`Executed ${type} order for ${amount} SITE on TechFlow.io`);
    setTimeout(() => setTradeMessage(null), 3500);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Trading Terminal</h1>
          <p className="text-sm text-gray-400">Order book execution for synthetic Site Shares performance contracts.</p>
        </div>
        <span className="text-xs font-mono text-[#00F0FF] px-3 py-1 bg-[#00F0FF]/10 rounded-full border border-[#00F0FF]/30">
          TECHFLOW / SITE
        </span>
      </div>

      {tradeMessage && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          {tradeMessage}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-[#0E131F] rounded-2xl p-6 border border-white/10 space-y-4">
          <div className="text-xs font-mono text-gray-400 uppercase">Live Order Book</div>
          <div className="space-y-2 font-mono text-xs">
            <div className="flex justify-between bg-rose-500/10 p-2.5 rounded text-rose-400">
              <span>SELL 14.25</span>
              <span>500 SHARES</span>
            </div>
            <div className="flex justify-between bg-rose-500/10 p-2.5 rounded text-rose-400">
              <span>SELL 14.22</span>
              <span>1,200 SHARES</span>
            </div>
            <div className="text-center font-bold text-white py-2 border-y border-white/10">
              LAST MATCH PRICE: $14.20 (+18.2%)
            </div>
            <div className="flex justify-between bg-emerald-500/10 p-2.5 rounded text-emerald-400">
              <span>BUY 14.18</span>
              <span>800 SHARES</span>
            </div>
            <div className="flex justify-between bg-emerald-500/10 p-2.5 rounded text-emerald-400">
              <span>BUY 14.15</span>
              <span>2,500 SHARES</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 bg-[#0E131F] rounded-2xl p-6 border border-white/10 space-y-5">
          <div className="text-xs font-mono text-gray-400 uppercase">Place Trade Order</div>
          <div className="space-y-2 text-xs font-mono">
            <label className="text-gray-300">Amount ($SITE)</label>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 rounded-xl bg-[#07090E] border border-white/10 text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => handleOrder('BUY')} className="py-3 rounded-xl bg-emerald-500 text-black font-bold text-xs shadow-glowEmerald">
              BUY SHARES
            </button>
            <button onClick={() => handleOrder('SELL')} className="py-3 rounded-xl bg-rose-500 text-white font-bold text-xs">
              SELL SHARES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
