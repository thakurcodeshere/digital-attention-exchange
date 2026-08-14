import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenAppDemo, onOpenAuth, onOpenRegisterSite }) {
  return (
    <footer id="community" className="bg-[#040609] text-gray-400 border-t border-white/10 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Branding Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/10 pb-10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00F0FF] to-[#3B82F6] p-[1px]">
                <div className="w-full h-full bg-[#07090E] rounded-[11px] flex items-center justify-center font-mono font-black text-lg text-[#00F0FF]">
                  S
                </div>
              </div>
              <span className="text-3xl font-extrabold text-white tracking-wider font-sans">SITE</span>
            </div>
            <div className="text-xs font-mono tracking-widest text-[#00F0FF] uppercase">
              THE MARKET FOR INTERNET ATTENTION
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenRegisterSite}
              className="px-5 py-2.5 rounded-xl border border-white/15 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
            >
              List Your Website
            </button>
            <button
              onClick={onOpenAppDemo}
              className="px-5 py-2.5 rounded-xl bg-[#00F0FF] text-black font-bold text-sm hover:bg-[#00F0FF]/90 shadow-glowCyan transition-all flex items-center space-x-1"
            >
              <span>Launch App</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6 Column Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-xs font-mono">
          
          {/* PRODUCT */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-wider uppercase">PRODUCT</div>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#explore" className="hover:text-[#00F0FF] transition-colors">Explore</a></li>
              <li><button onClick={onOpenAppDemo} className="hover:text-[#00F0FF] transition-colors text-left">Market</button></li>
              <li><a href="#for-owners" className="hover:text-[#00F0FF] transition-colors">For Owners</a></li>
              <li><button onClick={() => onOpenAuth('signup')} className="hover:text-[#00F0FF] transition-colors text-left">Earn</button></li>
              <li><a href="#docs" className="hover:text-[#00F0FF] transition-colors">API</a></li>
            </ul>
          </div>

          {/* PROTOCOL */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-wider uppercase">PROTOCOL</div>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#how-it-works" className="hover:text-[#00F0FF] transition-colors">How It Works</a></li>
              <li><a href="#attention-index" className="hover:text-[#00F0FF] transition-colors">Attention Index</a></li>
              <li><a href="#docs" className="hover:text-[#00F0FF] transition-colors">Token Mechanics</a></li>
              <li><a href="#docs" className="hover:text-[#00F0FF] transition-colors">Governance</a></li>
              <li><a href="#docs" className="hover:text-[#00F0FF] transition-colors">Security</a></li>
            </ul>
          </div>

          {/* DEVELOPERS */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-wider uppercase">DEVELOPERS</div>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#00F0FF] transition-colors">GitHub</a></li>
              <li><a href="#docs" className="hover:text-[#00F0FF] transition-colors">Documentation</a></li>
              <li><a href="#docs" className="hover:text-[#00F0FF] transition-colors">API Docs</a></li>
              <li><a href="#docs" className="hover:text-[#00F0FF] transition-colors">Developer Portal</a></li>
            </ul>
          </div>

          {/* COMMUNITY */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-wider uppercase">COMMUNITY</div>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-[#00F0FF] transition-colors">Discord</a></li>
              <li><a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-[#00F0FF] transition-colors">X (Twitter)</a></li>
              <li><a href="#blog" className="hover:text-[#00F0FF] transition-colors">Forum</a></li>
              <li><a href="#docs" className="hover:text-[#00F0FF] transition-colors">Governance</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-wider uppercase">COMPANY</div>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#docs" className="hover:text-[#00F0FF] transition-colors">About</a></li>
              <li><a href="#blog" className="hover:text-[#00F0FF] transition-colors">Blog</a></li>
              <li><a href="#blog" className="hover:text-[#00F0FF] transition-colors">Research</a></li>
              <li><a href="#docs" className="hover:text-[#00F0FF] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-wider uppercase">LEGAL</div>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Token Disclaimer</a></li>
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Market Rules</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Tagline & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
          <div>© 2026 SITE. All rights reserved.</div>
          <div className="text-[#00F0FF] font-semibold">
            Digital attention is measurable. The market is just beginning.
          </div>
        </div>

      </div>
    </footer>
  );
}
