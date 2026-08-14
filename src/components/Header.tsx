import React from 'react';
import { Search, Bell, Wallet, Shield } from 'lucide-react';
import type { TabId } from '../types/navigation';

interface HeaderProps {
  activeTab: TabId;
}

const tabTitles: Record<TabId, { title: string; subtitle: string }> = {
  discover: { title: 'Discover', subtitle: 'Explore trending attention pools, top yield metrics & campaigns' },
  terminal: { title: 'Terminal', subtitle: 'Pro trading engine for attention tokens & market pairs' },
  wpi: { title: 'WPI Explorer', subtitle: 'Web Performance & Attention Index telemetry node stream' },
  mining: { title: 'Mining', subtitle: 'Proof-of-Attention node hardware & hash rate telemetry' },
  extension: { title: 'Extension', subtitle: 'Browser attention extension client status & active sync nodes' },
  owner: { title: 'Owner Workspace', subtitle: 'Protocol admin controls, parameter overrides & treasury' },
  indices: { title: 'Indices', subtitle: 'Attention-weighted asset baskets & algorithmic index funds' },
  validators: { title: 'Validators', subtitle: 'Consensus nodes, staking breakdown & slashing protection' },
  economy: { title: '$SITE Economy', subtitle: 'Tokenomics, burn metrics ($SITE buyback) & staking APY' },
  governance: { title: 'Governance', subtitle: 'On-chain DAO proposals, voting power & proposal execution' },
  api: { title: 'Developers API', subtitle: 'REST & WebSocket API telemetry, SDKs & developer webhooks' },
  antifragility: { title: 'Anti-Fragility', subtitle: 'Protocol resilience analytics, stress tests & circuit breakers' }
};

export const Header: React.FC<HeaderProps> = ({ activeTab }) => {
  const current = tabTitles[activeTab] || { title: 'Dashboard', subtitle: 'Digital Attention Exchange' };

  return (
    <header className="main-top-header">
      <div className="header-left">
        <div className="active-view-meta">
          <h1 className="header-view-title">{current.title}</h1>
          <p className="header-view-subtitle">{current.subtitle}</p>
        </div>
      </div>

      <div className="header-right">
        {/* Quick Search */}
        <div className="header-search-bar">
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search pools, pairs, contracts..." 
            className="search-input"
          />
          <kbd className="search-kbd">⌘K</kbd>
        </div>

        {/* Live Network Metric */}
        <div className="network-stat-pill">
          <span className="stat-label">$SITE:</span>
          <span className="stat-val">$4.82</span>
          <span className="stat-change positive">+8.4%</span>
        </div>

        {/* Notifications */}
        <button className="header-icon-btn" title="Notifications">
          <Bell size={18} />
          <span className="btn-badge-dot"></span>
        </button>

        {/* Wallet Connect Button */}
        <button className="wallet-connect-btn">
          <Wallet size={16} />
          <span>0x7F2...8E91</span>
          <Shield size={14} className="verified-shield" />
        </button>
      </div>
    </header>
  );
};
