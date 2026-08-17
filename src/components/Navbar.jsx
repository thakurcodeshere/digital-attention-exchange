import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles, Activity, Globe } from 'lucide-react';

export default function Navbar({ onOpenAppDemo, onOpenAuth, onOpenRegisterSite }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-white/10 bg-[#07090E]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Live Ticker Status */}
          <div className="flex items-center space-x-3 xl:space-x-4 shrink-0">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00F0FF] via-[#3B82F6] to-[#8B5CF6] p-[1.5px] shadow-glowCyan group-hover:scale-105 transition-transform duration-300 shrink-0">
                <div className="w-full h-full bg-[#07090E] rounded-[9.5px] flex items-center justify-center">
                  <span className="font-mono font-black text-sm tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#3B82F6]">
                    DAE
                  </span>
                </div>
              </div>
              <div className="flex flex-col shrink-0">
                <span className="font-extrabold text-lg lg:text-xl tracking-tight text-white font-sans group-hover:text-[#00F0FF] transition-colors whitespace-nowrap">
                  Digital Attention Exchange
                </span>
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#00F0FF]/80 whitespace-nowrap">
                  Decentralized Attention Market
                </span>
              </div>
            </a>

            {/* Live Indicator Badge */}
            <div className="hidden 2xl:flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[11px] font-mono text-[#00F0FF] shrink-0 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping shrink-0" />
              <span className="whitespace-nowrap">LIVE INDEX 82.41 ↑</span>
            </div>
          </div>

          {/* Desktop Navigation Links - Guaranteed One-Liners with Balanced Space */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-7 shrink-0">
            <a href="#explore" className="text-sm font-medium text-gray-300 hover:text-[#00F0FF] transition-colors whitespace-nowrap">
              Explore
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-[#00F0FF] transition-colors whitespace-nowrap">
              How It Works
            </a>
            <a href="#attention-index" className="text-sm font-medium text-gray-300 hover:text-[#00F0FF] transition-colors whitespace-nowrap">
              Attention Index
            </a>
            <a href="#for-owners" className="text-sm font-medium text-gray-300 hover:text-[#00F0FF] transition-colors whitespace-nowrap">
              For Owners
            </a>
            <a href="#docs" className="text-sm font-medium text-gray-300 hover:text-[#00F0FF] transition-colors whitespace-nowrap">
              Docs
            </a>
            <a href="#blog" className="text-sm font-medium text-gray-300 hover:text-[#00F0FF] transition-colors whitespace-nowrap">
              Blog
            </a>
            <a href="#community" className="text-sm font-medium text-gray-300 hover:text-[#00F0FF] transition-colors whitespace-nowrap">
              Community
            </a>
          </div>

          {/* Right Action CTA Buttons - Guaranteed One-Liners */}
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            <button
              onClick={() => onOpenAuth('signin')}
              className="text-sm font-semibold text-gray-200 hover:text-[#00F0FF] px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Sign In
            </button>
            <button
              onClick={onOpenAppDemo}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-r from-[#00F0FF] via-[#3B82F6] to-[#8B5CF6] group-hover:from-[#00F0FF] group-hover:to-[#3B82F6] text-white shadow-glowCyan hover:shadow-glowBlue transition-all duration-300 transform hover:-translate-y-0.5 shrink-0 whitespace-nowrap"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#07090E] rounded-[10px] group-hover:bg-transparent flex items-center space-x-1.5 whitespace-nowrap">
                <span className="whitespace-nowrap">Launch App</span>
                <ArrowUpRight className="w-4 h-4 text-[#00F0FF] group-hover:text-white transition-colors shrink-0" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={onOpenAppDemo}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#00F0FF] text-black hover:bg-[#00F0FF]/90 transition-colors"
            >
              Launch App
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 px-4 pt-4 pb-6 space-y-3 bg-[#07090E]/95">
          <a
            href="#explore"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-[#00F0FF] hover:bg-white/5"
          >
            Explore
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-[#00F0FF] hover:bg-white/5"
          >
            How It Works
          </a>
          <a
            href="#attention-index"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-[#00F0FF] hover:bg-white/5"
          >
            Attention Index
          </a>
          <a
            href="#for-owners"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-[#00F0FF] hover:bg-white/5"
          >
            For Owners
          </a>
          <a
            href="#docs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-[#00F0FF] hover:bg-white/5"
          >
            Docs
          </a>
          <a
            href="#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-[#00F0FF] hover:bg-white/5"
          >
            Blog
          </a>
          <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('signup'); }}
              className="w-full text-center py-2.5 rounded-xl border border-white/10 text-sm font-semibold text-white hover:bg-white/5"
            >
              Sign Up
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenRegisterSite(); }}
              className="w-full text-center py-2.5 rounded-xl bg-[#00F0FF] text-black text-sm font-bold shadow-glowCyan"
            >
              Register Website
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
