import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What is SITE?',
      a: 'SITE is the market for internet attention. It provides an open valuation and verification layer that converts digital traffic into multi-dimensional Attention Index market data.'
    },
    {
      q: 'What exactly does $SITE represent?',
      a: '$SITE is the coordination and utility token of the ecosystem. It is used for validator staking, reward distribution, protocol parameter governance, and market settlement.'
    },
    {
      q: 'What are Site Shares?',
      a: 'Site Shares represent market exposure to the measured attention performance of an individual website or digital property.'
    },
    {
      q: 'Does owning a Site Share mean owning part of a company?',
      a: 'No. Site Shares represent exposure to measured attention performance metrics, not corporate equity, voting rights, or company ownership.'
    },
    {
      q: 'How is attention measured?',
      a: 'Attention is measured across 5 weighted anchors: Engagement Depth (30%), Traffic Velocity (25%), Retention Gravity (20%), Economic Conversion (15%), and Network Effect (10%).'
    },
    {
      q: 'How do you detect bots?',
      a: 'SITE uses multi-layer behavioral telemetry, statistical anomaly detection, validator attestations, and zero-knowledge human interaction proofs to filter out synthetic engagement.'
    },
    {
      q: 'Can website owners manipulate their metrics?',
      a: 'Manipulating metrics is economically disincentivized. Unnatural traffic spikes trigger automated discounts, validator challenges, and potential slashing of staked collateral.'
    },
    {
      q: 'Who verifies the data?',
      a: 'Independent oracle operators, validator node networks, and community curators continuously audit reported analytics metrics.'
    },
    {
      q: 'Can I earn by participating?',
      a: 'Yes. Visitors earn rewards for verified high-depth sessions, curators earn list fees, website owners access new capital markets, and validators earn attestation rewards.'
    },
    {
      q: 'How does the token work?',
      a: '$SITE serves as the ecosystem settlement currency, reward payout unit, validator staking asset, and protocol governance voting mechanism.'
    },
    {
      q: 'Is SITE regulated?',
      a: 'SITE operates as an open digital attention data infrastructure layer. Specific market instruments comply with relevant jurisdictional policies.'
    },
    {
      q: 'Which countries are supported?',
      a: 'The public marketing experience and open methodology are globally accessible everywhere digital attention exists.'
    },
    {
      q: 'What happens if a website shuts down?',
      a: 'If a digital property goes offline, its Attention Index score gracefully decays, and Site Share liquidity pools settle according to protocol rules.'
    },
    {
      q: 'What happens if the protocol fails?',
      a: 'SITE is built on open-source smart contracts and immutable data indexers that remain fully accessible independently.'
    },
    {
      q: 'Is the code open source?',
      a: 'Yes! All core protocol contracts, indexers, SDKs, and calculation specifications are completely open source on GitHub.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-grid-pattern border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="gradient-text-cyan">Questions</span>
          </h2>
          <p className="text-lg text-gray-300">
            Clear, transparent answers to core questions about SITE.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center space-x-4 focus:outline-none hover:bg-white/5 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white font-sans">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#00F0FF] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-gray-300 leading-relaxed border-t border-white/5 bg-[#07090E]/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
