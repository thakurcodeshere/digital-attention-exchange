import React from 'react';
import { Globe, ShieldCheck, Download, Check, Lock, AlertCircle } from 'lucide-react';

export const ExtensionView: React.FC = () => {
  return (
    <div className="view-page-container">
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Active Extension Clients</span>
            <Globe size={18} className="metric-icon text-cyan" />
          </div>
          <div className="metric-value">642,800</div>
          <div className="metric-footer positive">Chromium & Firefox Verified</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Zero-Knowledge Privacy Audit</span>
            <ShieldCheck size={18} className="metric-icon text-emerald" />
          </div>
          <div className="metric-value">100% Passed</div>
          <div className="metric-footer positive">No personal data collected</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Extension Sync Speed</span>
            <Lock size={18} className="metric-icon text-indigo" />
          </div>
          <div className="metric-value">0.4 <span className="metric-unit">sec</span></div>
          <div className="metric-footer neutral">Instant Local Proof Signing</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Extension Version</span>
            <AlertCircle size={18} className="metric-icon text-amber" />
          </div>
          <div className="metric-value">v3.4.2</div>
          <div className="metric-footer positive">Latest Release Active</div>
        </div>
      </div>

      <div className="section-grid-2">
        <div className="content-box">
          <div className="box-header">
            <h3><Globe className="inline-icon text-cyan" /> DAE Attention Extension for Browsers</h3>
          </div>
          <div className="extension-hero-body">
            <p>
              The DAE Browser Extension seamlessly transforms your daily web surfing into passive attention rewards. Your attention proofs are encrypted locally using Zero-Knowledge SNARKs before submitting to the protocol.
            </p>
            <div className="browser-download-grid">
              <div className="browser-card">
                <div className="browser-icon chrome"></div>
                <h4>Google Chrome</h4>
                <p>Chrome Web Store</p>
                <button className="btn-sm btn-primary"><Download size={14} /> Install (v3.4.2)</button>
              </div>

              <div className="browser-card">
                <div className="browser-icon firefox"></div>
                <h4>Mozilla Firefox</h4>
                <p>Firefox Add-ons</p>
                <button className="btn-sm btn-primary"><Download size={14} /> Install (v3.4.2)</button>
              </div>

              <div className="browser-card">
                <div className="browser-icon brave"></div>
                <h4>Brave Browser</h4>
                <p>Native Integration</p>
                <button className="btn-sm btn-primary"><Download size={14} /> Enable Extension</button>
              </div>
            </div>
          </div>
        </div>

        <div className="content-box">
          <div className="box-header">
            <h3><Lock className="inline-icon text-emerald" /> Privacy & Cryptographic Integrity</h3>
          </div>
          <ul className="feature-check-list">
            <li>
              <Check className="check-icon text-emerald" />
              <div>
                <strong>Local ZK-Proof Generation</strong>
                <p>Browsing metrics are computed inside WebAssembly on your device and never sent to external servers.</p>
              </div>
            </li>
            <li>
              <Check className="check-icon text-emerald" />
              <div>
                <strong>Automated Sybil & Bot Filtering</strong>
                <p>Keystroke dynamics & micro-movements ensure genuine human attention without tracking cookies.</p>
              </div>
            </li>
            <li>
              <Check className="check-icon text-emerald" />
              <div>
                <strong>Instant Reward Settlement</strong>
                <p>Earned $DAE tokens land directly in your connected Web3 wallet upon completing attention quotas.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
