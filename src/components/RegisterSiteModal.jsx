import React, { useState } from 'react';
import { X, Globe, Check, ArrowRight, Activity, ShieldCheck } from 'lucide-react';

export default function RegisterSiteModal({ isOpen, onClose }) {
  const [domain, setDomain] = useState('');
  const [category, setCategory] = useState('Tech / Software');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (domain) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg glass-panel-glow rounded-3xl p-6 sm:p-8 space-y-6 border border-[#00F0FF]/30 bg-[#07090E]">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 text-xs font-mono text-[#00F0FF]">
                <Globe className="w-3.5 h-3.5" />
                <span>WEBSITE OWNER REGISTRATION</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Register Your Website</h3>
              <p className="text-sm text-gray-400">
                Connect your analytics to calculate your Attention Index and access new monetization ways.
              </p>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-gray-300 mb-1.5 uppercase font-bold">Website Domain URL</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. techflow.io"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00F0FF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1.5 uppercase font-bold">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0E131F] border border-white/10 text-white focus:outline-none focus:border-[#00F0FF]"
                >
                  <option value="Tech / Software">Tech / Software</option>
                  <option value="News & Media">News & Media</option>
                  <option value="Education & Research">Education & Research</option>
                  <option value="Web3 & Crypto">Web3 & Crypto</option>
                  <option value="E-Commerce">E-Commerce</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-1.5 uppercase font-bold">Analytics Source Integration</label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-xl border border-[#00F0FF]/40 bg-[#00F0FF]/10 text-white font-bold flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#00F0FF]" />
                    <span>Google Analytics 4</span>
                  </div>
                  <div className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 flex items-center space-x-2">
                    <span>Segment API</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#00F0FF] text-black font-bold text-sm shadow-glowCyan hover:bg-[#00F0FF]/90 transition-all flex items-center justify-center space-x-2"
            >
              <span>Connect & Calculate Attention Index</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
              <Activity className="w-8 h-8 animate-pulse" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Website Registered!</h3>
              <p className="text-sm text-gray-300 font-mono">
                <span className="text-[#00F0FF]">{domain}</span> has been queued for verification.
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-xs font-mono space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-gray-400">ESTIMATED ATTENTION INDEX:</span>
                <span className="text-emerald-400 font-bold">84.5 ↑</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">STATUS:</span>
                <span className="text-[#00F0FF]">PENDING ORACLE ATTESTATION</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl bg-[#00F0FF] text-black font-bold text-sm shadow-glowCyan"
            >
              Go to Owner Console
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
