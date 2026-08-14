import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles, Activity, Globe } from 'lucide-react';

export default function Navbar({ onOpenAppDemo, onOpenAuth, onOpenRegisterSite }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-white/10 bg-[#07090E]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Live Ticker Status */}
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00F0FF] to-[#3B82F6] p-[1px] shadow-glowCyan group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#07090E] rounded-[11px] flex items-center justify-center">
                  <span className="font-mono font-black text-xl text-[#00F0FF]">S</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-wider text-white font-sans group-hover:text-[#00F0FF] transition-colors">
                  SITE
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400">
                  Attention Market
                </span>
              </div>
            </a>

            {/* Live Indicator Badge */}
            <div className="hidden lg:flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[11px] font-mono text-[#00F0FF]">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
              <span>LIVE INDEX 82.41 ↑</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#explore" className="text-sm font-medium text-gray-300 hover:text-[#00F0FF] transition-colors">
              Explore
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-[#00F0FF] transition-colors">
              How It Works
            </a>
            <a href="#attention-index" className="text-sm font-medium text-gray-300 hover:text-[#00F0FF] transition-colors">
              Attention Index
            </a>
            <a href="#for-owners" className="text-sm font-medium text-gray-300 hover:text-[#00F0FF] transition-colors">
              For Owners
            </a>
            <a href="#docs" className="text-sm font-medium text-gray-300 hover:text-[#00F0FF] transition-colors">
              Docs
            </a>
            <a href="#blog" className="text-sm font-medium text-gray-300 hover:text-[#00F0FF] transition-colors">
              Blog
            </a>
          </div>

          {/* Right Action CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#community" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Community
            </a>
            <button
              onClick={() => onOpenAuth('signin')}
              className="text-sm font-semibold text-gray-200 hover:text-[#00F0FF] px-4 py-2 rounded-lg transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={onOpenAppDemo}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-r from-[#00F0FF] via-[#3B82F6] to-[#8B5CF6] group-hover:from-[#00F0FF] group-hover:to-[#3B82F6] text-white shadow-glowCyan hover:shadow-glowBlue transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#07090E] rounded-[10px] group-hover:bg-transparent flex items-center space-x-2">
                <span>Launch App</span>
                <ArrowUpRight className="w-4 h-4 text-[#00F0FF] group-hover:text-white transition-colors" />
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
