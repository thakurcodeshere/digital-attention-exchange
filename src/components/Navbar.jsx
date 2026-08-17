import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenAppDemo, onOpenAuth, onOpenRegisterSite }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#07090E]/95 backdrop-blur-xl">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-[72px] gap-5">

          {/* ── SEGMENT 1: BRAND LOGO + NAME + SIGNATURE ── */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            {/* DAE Monogram Logo */}
            <div className="relative w-11 h-11 flex-shrink-0">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00F0FF] to-[#3B82F6] opacity-80 blur-[6px] group-hover:opacity-100 transition-opacity duration-300" />
              {/* Inner box */}
              <div className="relative w-11 h-11 rounded-xl bg-[#07090E] border border-[#00F0FF]/60 flex items-center justify-center group-hover:border-[#00F0FF] transition-all duration-300 overflow-hidden">
                {/* Diagonal accent line */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/10 to-transparent" />
                {/* D·A·E monogram */}
                <span className="relative font-black text-[11px] tracking-tighter leading-none font-mono text-[#00F0FF] group-hover:text-white transition-colors select-none">
                  <span className="text-[#00F0FF]">D</span>
                  <span className="text-white/50">·</span>
                  <span className="text-[#3B82F6]">A</span>
                  <span className="text-white/50">·</span>
                  <span className="text-[#8B5CF6]">E</span>
                </span>
              </div>
            </div>

            {/* Brand Name + Signature */}
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-[15px] tracking-widest text-white uppercase font-sans whitespace-nowrap group-hover:text-[#00F0FF] transition-colors duration-300">
                Digital Attention Exchange
              </span>
              <span className="text-[9px] uppercase font-mono tracking-[0.18em] text-[#00F0FF]/70 whitespace-nowrap mt-[1px]">
                WHERE ATTENTION MEETS VALUE
              </span>
            </div>
          </a>

          {/* ── SEGMENT 2: LIVE INDEX BADGE ── */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00F0FF]/8 border border-[#00F0FF]/20 text-[11px] font-mono text-[#00F0FF] flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping flex-shrink-0" />
            <span className="whitespace-nowrap">LIVE INDEX 82.41 ↑</span>
          </div>

          {/* ── SEGMENT 3: NAVIGATION LINKS (one-liner, whitespace-nowrap) ── */}
          <div className="hidden lg:flex items-center gap-6 ml-2">
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
          </div>

          {/* ── SEGMENT 4: ACTION BUTTONS (pushed to right) ── */}
          <div className="hidden md:flex items-center gap-3 ml-auto flex-shrink-0">
            <a
              href="#community"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Community
            </a>
            <button
              onClick={() => onOpenAuth('signin')}
              className="text-sm font-semibold text-gray-200 hover:text-[#00F0FF] px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Sign In
            </button>
            <button
              onClick={onOpenAppDemo}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-r from-[#00F0FF] via-[#3B82F6] to-[#8B5CF6] hover:from-[#00F0FF] hover:to-[#3B82F6] text-white shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_28px_rgba(59,130,246,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 flex-shrink-0"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#07090E] rounded-[10px] group-hover:bg-transparent flex items-center gap-2 whitespace-nowrap">
                <span>Launch App</span>
                <ArrowUpRight className="w-4 h-4 text-[#00F0FF] group-hover:text-white transition-colors" />
              </span>
            </button>
          </div>

          {/* ── MOBILE MENU BUTTON ── */}
          <div className="flex md:hidden items-center gap-3 ml-auto">
            <button
              onClick={onOpenAppDemo}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#00F0FF] text-black hover:bg-[#00F0FF]/90 transition-colors whitespace-nowrap"
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

      {/* ── MOBILE DRAWER ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 px-4 pt-4 pb-6 space-y-3 bg-[#07090E]/95 backdrop-blur-xl">
          {[
            { href: '#explore', label: 'Explore' },
            { href: '#how-it-works', label: 'How It Works' },
            { href: '#attention-index', label: 'Attention Index' },
            { href: '#for-owners', label: 'For Owners' },
            { href: '#docs', label: 'Docs' },
            { href: '#blog', label: 'Blog' },
            { href: '#community', label: 'Community' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-[#00F0FF] hover:bg-white/5"
            >
              {label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('signin'); }}
              className="w-full text-center py-2.5 rounded-xl border border-white/10 text-sm font-semibold text-white hover:bg-white/5"
            >
              Sign In
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenRegisterSite(); }}
              className="w-full text-center py-2.5 rounded-xl bg-[#00F0FF] text-black text-sm font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              Register Website
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
