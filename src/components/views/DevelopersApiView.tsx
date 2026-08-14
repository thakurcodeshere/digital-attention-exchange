import React, { useState } from 'react';
import { Code2, Key, Terminal, Copy, Check, Zap } from 'lucide-react';

export const DevelopersApiView: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `import { SiteClient } from '@site/sdk';

const site = new SiteClient({
  apiKey: 'site_live_98a42f0192e81',
  network: 'mainnet'
});

// Stream real-time zero-knowledge attention proofs
site.telemetry.onProof((proof) => {
  console.log('Verified Attention Block:', proof.blockNumber);
  console.log('Reward Earned ($SITE):', proof.reward);
});`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="view-page-container">
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">API Requests (24h)</span>
            <Code2 size={18} className="metric-icon text-cyan" />
          </div>
          <div className="metric-value">48.2M</div>
          <div className="metric-footer positive">99.99% Success Rate</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Active API Keys</span>
            <Key size={18} className="metric-icon text-indigo" />
          </div>
          <div className="metric-value">4,120 Keys</div>
          <div className="metric-footer positive">+180 created this month</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Avg API Latency</span>
            <Terminal size={18} className="metric-icon text-emerald" />
          </div>
          <div className="metric-value">8.4 <span className="metric-unit">ms</span></div>
          <div className="metric-footer positive">Ultra fast WebSocket stream</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Webhook Delivery</span>
            <Zap size={18} className="metric-icon text-amber" />
          </div>
          <div className="metric-value">100.0%</div>
          <div className="metric-footer neutral">0 Failed Retries</div>
        </div>
      </div>

      <div className="section-grid-2">
        <div className="content-box">
          <div className="box-header">
            <h3><Code2 className="inline-icon text-cyan" /> JavaScript / TypeScript SDK Quickstart</h3>
            <button className="btn-sm btn-secondary" onClick={copyToClipboard}>
              {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              {copied ? 'Copied' : 'Copy Code'}
            </button>
          </div>
          <pre className="code-block">
            <code>{codeSnippet}</code>
          </pre>
        </div>

        <div className="content-box">
          <div className="box-header">
            <h3><Key className="inline-icon text-indigo" /> Manage API Credentials</h3>
            <button className="btn-sm btn-primary">+ Generate New Key</button>
          </div>
          <div className="api-keys-list">
            <div className="key-item">
              <div className="key-info">
                <div className="key-name">Production Mainnet Key</div>
                <div className="key-val">site_live_98a42f0192e81...</div>
              </div>
              <span className="key-badge active">Active</span>
            </div>

            <div className="key-item">
              <div className="key-info">
                <div className="key-name">Staging Sandbox Key</div>
                <div className="key-val">site_test_1109a842f11c2...</div>
              </div>
              <span className="key-badge active">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
