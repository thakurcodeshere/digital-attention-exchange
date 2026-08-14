import React from 'react';
import type { NavTabId } from '../../types/navigation';
import { IconMapper } from '../IconMapper';

interface ViewProps {
  tabId: NavTabId;
}

export const DiscoverView: React.FC = () => (
  <div className="view-container">
    {/* Summary Stat Cards */}
    <div className="dashboard-grid">
      <div className="stat-card">
        <div className="stat-header">
          <span>Global Attention Volume</span>
          <IconMapper name="Activity" size={18} />
        </div>
        <div className="stat-value">4.82B Min</div>
        <div className="stat-footer">
          <span className="positive-change">↑ 18.4%</span>
          <span style={{ color: 'var(--text-muted)' }}>vs yesterday</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <span>Active Publishers</span>
          <IconMapper name="Globe" size={18} />
        </div>
        <div className="stat-value">14,290</div>
        <div className="stat-footer">
          <span className="positive-change">↑ 120 new</span>
          <span style={{ color: 'var(--text-muted)' }}>this week</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <span>Avg Attention Yield / Node</span>
          <IconMapper name="Zap" size={18} />
        </div>
        <div className="stat-value">12.4 $SITE</div>
        <div className="stat-footer">
          <span className="positive-change">↑ 4.2%</span>
          <span style={{ color: 'var(--text-muted)' }}>APR 24.8%</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <span>$SITE Staked</span>
          <IconMapper name="Clock" size={18} />
        </div>
        <div className="stat-value">42.8M</div>
        <div className="stat-footer">
          <span className="positive-change">64.2%</span>
          <span style={{ color: 'var(--text-muted)' }}>of circulating supply</span>
        </div>
      </div>
    </div>

    {/* Featured Markets Table */}
    <div className="panel-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h2 className="panel-title" style={{ margin: 0 }}>
          <IconMapper name="Compass" style={{ color: 'var(--accent-cyan)' }} />
          Trending Digital Attention Markets
        </h2>
        <button className="btn-primary">
          <IconMapper name="Compass" size={16} /> Explore All Markets
        </button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Market Pair</th>
            <th>24h Attention (Hours)</th>
            <th>Current Rate</th>
            <th>24h Change</th>
            <th>Total Liquidity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>AI Tech News / US-East</strong></td>
            <td>1,420,000 hrs</td>
            <td>0.0084 $SITE/sec</td>
            <td className="positive-change">+14.2%</td>
            <td>$4.2M</td>
            <td><button className="btn-secondary">Trade</button></td>
          </tr>
          <tr>
            <td><strong>Developer Tools & API Stream</strong></td>
            <td>980,500 hrs</td>
            <td>0.0120 $SITE/sec</td>
            <td className="positive-change">+8.9%</td>
            <td>$2.8M</td>
            <td><button className="btn-secondary">Trade</button></td>
          </tr>
          <tr>
            <td><strong>Crypto & Web3 Gaming Feed</strong></td>
            <td>2,150,000 hrs</td>
            <td>0.0062 $SITE/sec</td>
            <td style={{ color: 'var(--accent-amber)' }}>-2.1%</td>
            <td>$6.1M</td>
            <td><button className="btn-secondary">Trade</button></td>
          </tr>
          <tr>
            <td><strong>Global Finance & Markets</strong></td>
            <td>840,000 hrs</td>
            <td>0.0095 $SITE/sec</td>
            <td className="positive-change">+22.4%</td>
            <td>$3.5M</td>
            <td><button className="btn-secondary">Trade</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export const TerminalView: React.FC = () => (
  <div className="view-container">
    <div className="panel-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="panel-title">
          <IconMapper name="TrendingUp" style={{ color: 'var(--accent-cyan)' }} />
          High-Frequency Attention Terminal
        </h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn-secondary">1m</button>
          <button className="btn-primary">5m</button>
          <button className="btn-secondary">1h</button>
          <button className="btn-secondary">1d</button>
        </div>
      </div>
      <div style={{
        height: '320px',
        background: '#070a10',
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        marginTop: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem'
        }}>
          <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>DAE/USD</span>
          <span style={{ color: 'var(--accent-green)', marginLeft: '12px' }}>$1.4204 (+5.84%)</span>
          <span style={{ color: 'var(--text-muted)', marginLeft: '12px' }}>High: $1.4650 | Low: $1.3120</span>
        </div>
        <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          <IconMapper name="TrendingUp" size={48} style={{ color: 'var(--accent-cyan)', opacity: 0.5, marginBottom: '8px' }} />
          <p style={{ fontFamily: 'var(--font-mono)' }}>Candlestick & Order Book Data Streaming via WebSocket</p>
        </div>
      </div>
    </div>
  </div>
);

export const WpiExplorerView: React.FC = () => (
  <div className="view-container">
    <div className="panel-card">
      <h2 className="panel-title">
        <IconMapper name="Activity" style={{ color: 'var(--accent-cyan)' }} />
        Web Performance & Attention Index (WPI) Explorer
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
        Real-time telemetry and network latency monitoring across 1,024 active consensus nodes.
      </p>
      <div className="dashboard-grid">
        <div className="stat-card">
          <div className="stat-header"><span>Global WPI Index</span></div>
          <div className="stat-value">148.2 pts</div>
          <div className="stat-footer"><span className="positive-change">Optimal Health</span></div>
        </div>
        <div className="stat-card">
          <div className="stat-header"><span>Avg Packet Latency</span></div>
          <div className="stat-value">14.2 ms</div>
          <div className="stat-footer"><span className="positive-change">-2.1ms lower</span></div>
        </div>
        <div className="stat-card">
          <div className="stat-header"><span>Verified Impressions</span></div>
          <div className="stat-value">842M/day</div>
          <div className="stat-footer"><span className="positive-change">100% cryptographic proof</span></div>
        </div>
      </div>
    </div>
  </div>
);

export const MiningView: React.FC = () => (
  <div className="view-container">
    <div className="panel-card">
      <h2 className="panel-title">
        <IconMapper name="Zap" style={{ color: 'var(--accent-cyan)' }} />
        Proof-of-Attention Mining Dashboard
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
        Earn $SITE token rewards by hosting attention validation daemons and browser extension workers.
      </p>
      <div className="dashboard-grid">
        <div className="stat-card">
          <div className="stat-header"><span>Your Hashrate</span></div>
          <div className="stat-value">84.2 TH/s</div>
          <div className="stat-footer"><span className="positive-change">Active Worker #4</span></div>
        </div>
        <div className="stat-card">
          <div className="stat-header"><span>Estimated 24h Payout</span></div>
          <div className="stat-value">142.50 $SITE</div>
          <div className="stat-footer"><span className="positive-change">~$202.35 USD</span></div>
        </div>
      </div>
    </div>
  </div>
);

export const GenericTabView: React.FC<ViewProps> = ({ tabId }) => (
  <div className="view-container">
    <div className="panel-card">
      <h2 className="panel-title" style={{ textTransform: 'capitalize' }}>
        <IconMapper name="Atom" style={{ color: 'var(--accent-cyan)' }} />
        {tabId.replace('-', ' ')} Module Overview
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
        Active workspace view for {tabId.toUpperCase()} section. Telemetry and controls fully loaded.
      </p>
      <div className="dashboard-grid">
        <div className="stat-card">
          <div className="stat-header"><span>Status</span></div>
          <div className="stat-value" style={{ color: 'var(--accent-green)' }}>ONLINE</div>
        </div>
        <div className="stat-card">
          <div className="stat-header"><span>Sync State</span></div>
          <div className="stat-value">100%</div>
        </div>
      </div>
    </div>
  </div>
);

export const MainViewContent: React.FC<ViewProps> = ({ tabId }) => {
  switch (tabId) {
    case 'discover':
      return <DiscoverView />;
    case 'terminal':
      return <TerminalView />;
    case 'wpi':
      return <WpiExplorerView />;
    case 'mining':
      return <MiningView />;
    default:
      return <GenericTabView tabId={tabId} />;
  }
};
