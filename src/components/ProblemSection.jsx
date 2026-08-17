import React from 'react';
import { Globe, Users, TrendingUp, Sparkles } from 'lucide-react';

export default function ProblemSection() {
  const cards = [
    {
      title: 'Websites',
      icon: Globe,
      accent: 'text-blue-400',
      border: 'hover:border-blue-500/40',
      text: 'Millions of visitors can generate enormous value — but most websites have no direct way to price their attention.'
    },
    {
      title: 'People',
      icon: Users,
      accent: 'text-emerald-400',
      border: 'hover:border-emerald-500/40',
      text: 'Users spend hours creating the attention economy, while most of its economic value flows elsewhere.'
    },
    {
      title: 'Markets',
      icon: TrendingUp,
      accent: 'text-purple-400',
      border: 'hover:border-purple-500/40',
      text: 'Investors can trade companies behind websites, but not the attention performance of the websites themselves.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The internet runs on <span className="gradient-text-cyan">attention.</span>
          </h2>
          <p className="text-lg text-gray-300">
            But attention is difficult to measure, compare and value.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`glass-panel rounded-3xl p-8 space-y-5 border border-white/10 transition-all duration-300 transform hover:-translate-y-1 ${item.border}`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${item.accent}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Banner Highlight */}
        <div className="relative glass-panel-glow rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#00F0FF]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Sparkles className="w-8 h-8 text-[#00F0FF] animate-pulse" />
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              <span className="gradient-text-cyan">Digital Attention Exchange introduces an attention market.</span>
            </h3>
          </div>
          <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            A transparent valuation layer designed to measure, verify, and trade digital attention in real-time.
          </p>
        </div>

      </div>
    </section>
  );
}
