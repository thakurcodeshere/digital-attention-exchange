import React from 'react';
import { BookOpen, ArrowRight, Clock, Tag } from 'lucide-react';

export default function JournalSection() {
  const articles = [
    {
      title: 'Why Pageviews Are a Poor Measure of Attention',
      category: 'Attention Economics',
      readTime: '6 min read',
      date: 'Aug 12, 2026',
      desc: 'Traditional web analytics reward accidental clicks and clickbait over genuine dwell time. Here is how we redefine digital valuation.'
    },
    {
      title: 'Building the Attention Index',
      category: 'Methodology',
      readTime: '9 min read',
      date: 'Aug 04, 2026',
      desc: 'A deep dive into the mathematical weights and 5 anchor dimensions powering real-time attention score calculations.'
    },
    {
      title: 'Can Human Attention Become a Market?',
      category: 'Market Research',
      readTime: '7 min read',
      date: 'Jul 28, 2026',
      desc: 'Exploring how open market mechanisms pricing web performance unlock liquidity for creators and digital publishers.'
    },
    {
      title: 'How We Detect Artificial Engagement',
      category: 'Data Science',
      readTime: '8 min read',
      date: 'Jul 19, 2026',
      desc: 'Inside the statistical anomaly detection and behavioral attestation algorithms keeping the SITE market honest.'
    },
    {
      title: 'The Economics of Digital Attention',
      category: 'Web Infrastructure',
      readTime: '11 min read',
      date: 'Jul 10, 2026',
      desc: 'An architectural paper examining how attention valuation bridges the gap between web traffic and financial markets.'
    }
  ];

  return (
    <section id="blog" className="py-20 lg:py-28 relative bg-grid-pattern border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>RESEARCH & ARTICLES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Attention <span className="gradient-text-cyan">Economy Journal</span>
          </h2>
          <p className="text-lg text-gray-300">
            Establishing Digital Attention Exchange as an intellectual category creator in web valuation data science.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <article 
              key={idx}
              className="glass-panel rounded-3xl p-6 space-y-4 border border-white/10 hover:border-[#00F0FF]/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="text-[#00F0FF] font-semibold">{art.category}</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed">
                  {art.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-gray-500">{art.date}</span>
                <span className="inline-flex items-center text-xs font-semibold text-[#00F0FF] group-hover:translate-x-1 transition-transform">
                  Read Article →
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
