import React, { useState } from 'react';
import { Code, Key, Zap, Check, Copy, Plus, Activity, Terminal } from 'lucide-react';

export default function DevelopersApiTab() {
  const [copied, setCopied] = useState(false);
  const [keys, setKeys] = useState([
    { name: 'Production Mainnet Key', key: 'dae_live_98a42f0192e81...', status: 'Active' },
    { name: 'Staging Sandbox Key', key: 'dae_test_1109a842f11c2...', status: 'Active' }
  ]);
  const [keyModalOpen, setKeyModalOpen] = useState(false);

  const sdkCode = `import { DAEClient } from '@dae/sdk';

const dae = new DAEClient({
  apiKey: 'dae_live_98a42f0192e81',
  network: 'mainnet'
});

// Stream real-time zero-knowledge attention proofs
dae.telemetry.onProof((proof) => {
  console.log('Verified Attention Block:', proof.blockNumber);
  console.log('Reward Earned ($DAE):', proof.reward);
});`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sdkCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleGenerateKey = () => {
    const newKey = {
      name: `API Key #${keys.length + 1}`,
      key: `dae_live_${Math.random().toString(36).substr(2, 12)}...`,
      status: 'Active'
    };
    setKeys([...keys, newKey]);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">Developers API</h1>
        <p className="text-sm text-gray-400 font-sans">
          REST & WebSocket API telemetry, SDKs & developer webhooks
        </p>
      </div>

      {/* Top 4 Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1 */}
        <div className="bg-[#0E131F] rounded-2xl p-5 border border-white/10 space-y-3">
          <div className="flex justify-between items-center text-xs font-mono text-gray-400">
            <span>API Requests (24h)</span>
            <Code className="w-4 h-4 text-[#00F0FF]" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-white">48.2M</div>
          <div className="text-xs font-mono text-emerald-400 font-semibold">99.99% Success Rate</div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0E131F] rounded-2xl p-5 border border-white/10 space-y-3">
          <div className="flex justify-between items-center text-xs font-mono text-gray-400">
            <span>Active API Keys</span>
            <Key className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-white">4,120 Keys</div>
          <div className="text-xs font-mono text-emerald-400 font-semibold">+180 created this month</div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0E131F] rounded-2xl p-5 border border-white/10 space-y-3">
          <div className="flex justify-between items-center text-xs font-mono text-gray-400">
            <span>Avg API Latency</span>
            <Terminal className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-white">8.4 <span className="text-lg text-gray-400 font-normal">ms</span></div>
          <div className="text-xs font-mono text-[#00F0FF] font-semibold">Ultra fast WebSocket stream</div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#0E131F] rounded-2xl p-5 border border-white/10 space-y-3">
          <div className="flex justify-between items-center text-xs font-mono text-gray-400">
            <span>Webhook Delivery</span>
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-white">100.0%</div>
          <div className="text-xs font-mono text-gray-400">0 Failed Retries</div>
        </div>

      </div>

      {/* Main Grid: Code Quickstart & Key Credentials */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: JavaScript SDK Quickstart */}
        <div className="lg:col-span-7 bg-[#0E131F] rounded-2xl p-6 border border-white/10 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Code className="w-4 h-4 text-[#00F0FF]" />
              <span className="text-sm font-bold font-mono text-white">JavaScript / TypeScript SDK Quickstart</span>
            </div>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white flex items-center space-x-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>

          <div className="bg-[#07090E] rounded-xl p-5 border border-white/5 font-mono text-xs text-gray-300 leading-relaxed overflow-x-auto">
            <pre className="text-emerald-400">
              <code>{sdkCode}</code>
            </pre>
          </div>
        </div>

        {/* Right: Manage API Credentials */}
        <div className="lg:col-span-5 bg-[#0E131F] rounded-2xl p-6 border border-white/10 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Key className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-bold font-mono text-white">Manage API Credentials</span>
              </div>

              <button
                onClick={handleGenerateKey}
                className="px-3 py-1.5 rounded-xl bg-[#00F0FF] text-black font-bold text-xs hover:bg-[#00F0FF]/90 transition-all flex items-center space-x-1 shadow-glowCyan"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Generate New Key</span>
              </button>
            </div>

            <div className="space-y-3">
              {keys.map((k, idx) => (
                <div key={idx} className="bg-[#07090E] p-4 rounded-xl border border-white/5 space-y-1 font-mono text-xs">
                  <div className="text-gray-200 font-semibold">{k.name}</div>
                  <div className="text-gray-400 break-all text-[11px]">{k.key}</div>
                  <div className="text-emerald-400 text-[10px] pt-1">{k.status}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-xs font-mono text-gray-400 border-t border-white/10 pt-4">
            Need production webhooks or custom rate limits? <a href="#docs" className="text-[#00F0FF] underline">Request enterprise access →</a>
          </div>
        </div>

      </div>

    </div>
  );
}
