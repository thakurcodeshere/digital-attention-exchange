import React from 'react';
import { Vote } from 'lucide-react';

export default function GovernanceTab() {
  const proposals = [
    { id: 'DAE-14', title: 'Increase Retention Gravity Weight from 20% to 22%', status: 'PASSED', votes: '4.8M DAE' },
    { id: 'DAE-15', title: 'Add Substack Newsletter Telemetry Module to Mainnet', status: 'VOTING NOW', votes: '2.1M DAE' }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">DAO Governance & SIP Proposals</h1>
        <p className="text-sm text-gray-400">Community voting on protocol parameters, index weights, and treasury grants.</p>
      </div>

      <div className="space-y-4">
        {proposals.map((p) => (
          <div key={p.id} className="bg-[#0E131F] p-6 rounded-2xl border border-white/10 flex justify-between items-center">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#00F0FF]">{p.id}</span>
              <div className="text-lg font-bold text-white">{p.title}</div>
              <div className="text-xs font-mono text-gray-400">Total Votes: {p.votes}</div>
            </div>
            <span className={`text-xs font-mono font-bold px-3 py-1.5 rounded-full border ${
              p.status === 'PASSED' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/30'
            }`}>
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
