import React from 'react';
import { Coins, Flame, RefreshCw, BarChart3 } from 'lucide-react';

export const SiteEconomyView: React.FC = () => {
  return (
    <div className="view-page-container">
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">$DAE Market Cap</span>
            <Coins size={18} className="metric-icon text-cyan" />
          </div>
          <div className="metric-value">$341,800,000</div>
          <div className="metric-footer positive">Circulating Supply: 70,829,100</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Total $DAE Burned</span>
            <Flame size={18} className="metric-icon text-rose" />
          </div>
          <div className="metric-value">4,170,890 <span className="metric-unit">$DAE</span></div>
          <div className="metric-footer positive">Deflationary Buyback & Burn</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Protocol Revenue (24h)</span>
            <BarChart3 size={18} className="metric-icon text-emerald" />
          </div>
          <div className="metric-value">$412,500</div>
          <div className="metric-footer positive">100% Routed to Tokenomics</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Burn Mechanism Rate</span>
            <RefreshCw size={18} className="metric-icon text-amber" />
          </div>
          <div className="metric-value">12,400 <span className="metric-unit">$DAE / day</span></div>
          <div className="metric-footer positive">Auto Buyback Active</div>
        </div>
      </div>

      <div className="section-grid-2">
        <div className="content-box">
          <div className="box-header">
            <h3><Flame className="inline-icon text-rose" /> Token Burn Mechanism & Protocol Revenue</h3>
          </div>
          <div className="tokenomics-breakdown">
            <p>
              Every transaction and attention proof fee generated on the Digital Attention Exchange feeds into the automated $DAE Buyback & Burn smart contract.
            </p>
            <div className="burn-stats-row">
              <div className="burn-card">
                <span className="label">Last Burn Event</span>
                <span className="val text-rose">18,400 $DAE (2 hrs ago)</span>
              </div>
              <div className="burn-card">
                <span className="label">Next Scheduled Burn</span>
                <span className="val text-emerald">22,000 $DAE in 4h 12m</span>
              </div>
            </div>
          </div>
        </div>

        <div className="content-box">
          <div className="box-header">
            <h3><Coins className="inline-icon text-cyan" /> Token Distribution Split</h3>
          </div>
          <div className="token-split-list">
            <div className="split-item">
              <div className="split-header">
                <span>Public Staking & Attention Mining</span>
                <span>45.0%</span>
              </div>
              <div className="progress-bar-bg"><div className="progress-bar-fill cyan" style={{ width: '45%' }}></div></div>
            </div>

            <div className="split-item">
              <div className="split-header">
                <span>Protocol Treasury & Ecosystem Reserve</span>
                <span>25.0%</span>
              </div>
              <div className="progress-bar-bg"><div className="progress-bar-fill indigo" style={{ width: '25%' }}></div></div>
            </div>

            <div className="split-item">
              <div className="split-header">
                <span>Core Contributors (4-Year Vesting)</span>
                <span>15.0%</span>
              </div>
              <div className="progress-bar-bg"><div className="progress-bar-fill emerald" style={{ width: '15%' }}></div></div>
            </div>

            <div className="split-item">
              <div className="split-header">
                <span>Strategic Partners & Liquidity Pools</span>
                <span>15.0%</span>
              </div>
              <div className="progress-bar-bg"><div className="progress-bar-fill amber" style={{ width: '15%' }}></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
