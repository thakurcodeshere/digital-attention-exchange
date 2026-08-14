import React from 'react';
import { Compass, TrendingUp, Users, Flame, ArrowUpRight, Eye } from 'lucide-react';

export const DiscoverView: React.FC = () => {
  return (
    <div className="view-page-container">
      {/* Top Banner Stats */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">24h Total Attention Volume</span>
            <Eye size={18} className="metric-icon text-cyan" />
          </div>
          <div className="metric-value">14.8M <span className="metric-unit">hrs</span></div>
          <div className="metric-footer positive">+18.4% vs last week</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Active Attention Pools</span>
            <Compass size={18} className="metric-icon text-indigo" />
          </div>
          <div className="metric-value">1,420</div>
          <div className="metric-footer positive">38 new added today</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Avg Attention Yield (APY)</span>
            <Flame size={18} className="metric-icon text-rose" />
          </div>
          <div className="metric-value">34.2%</div>
          <div className="metric-footer neutral">Boosted by $SITE incentives</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Active Miners & Viewers</span>
            <Users size={18} className="metric-icon text-emerald" />
          </div>
          <div className="metric-value">84,910</div>
          <div className="metric-footer positive">+3,240 verified users</div>
        </div>
      </div>

      {/* Featured Campaigns & Trending Pools */}
      <div className="section-grid-2">
        <div className="content-box">
          <div className="box-header">
            <h3><Flame className="inline-icon text-rose" /> Trending Attention Campaigns</h3>
            <button className="btn-text">View All</button>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Campaign / Protocol</th>
                  <th>Target Audience</th>
                  <th>Escrow Pool</th>
                  <th>Proof APY</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">
                    <div className="table-cell-title">Solana Mobile dApp Hub</div>
                    <div className="table-cell-sub">User Onboarding Study</div>
                  </td>
                  <td>DeFi Power Users</td>
                  <td>$450,000 $SITE</td>
                  <td className="text-emerald font-bold">42.8%</td>
                  <td><button className="btn-sm btn-primary">Join Pool</button></td>
                </tr>
                <tr>
                  <td className="font-semibold">
                    <div className="table-cell-title">FinTech AI Friction Audit</div>
                    <div className="table-cell-sub">UX Feedback & Eye Tracking</div>
                  </td>
                  <td>Global Traders</td>
                  <td>$280,000 $SITE</td>
                  <td className="text-emerald font-bold">38.4%</td>
                  <td><button className="btn-sm btn-primary">Join Pool</button></td>
                </tr>
                <tr>
                  <td className="font-semibold">
                    <div className="table-cell-title">Web3 Browser Extension Test</div>
                    <div className="table-cell-sub">Key Retention Metrics</div>
                  </td>
                  <td>Crypto Natives</td>
                  <td>$195,000 $SITE</td>
                  <td className="text-emerald font-bold">29.1%</td>
                  <td><button className="btn-sm btn-primary">Join Pool</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box">
          <div className="box-header">
            <h3><TrendingUp className="inline-icon text-cyan" /> Attention Market Highlights</h3>
          </div>
          <div className="highlight-list">
            <div className="highlight-item">
              <div className="highlight-badge cyan">HOT</div>
              <div className="highlight-info">
                <h4>Media Attention Yield Basket #4</h4>
                <p>Top 10 streaming & content telemetry channels yielding 28.5% real-time APY.</p>
              </div>
              <ArrowUpRight size={18} className="text-muted" />
            </div>

            <div className="highlight-item">
              <div className="highlight-badge indigo">NEW</div>
              <div className="highlight-info">
                <h4>Verified Developer Telemetry Pool</h4>
                <p>SDK event stream validation incentivizing zero-knowledge attention proofs.</p>
              </div>
              <ArrowUpRight size={18} className="text-muted" />
            </div>

            <div className="highlight-item">
              <div className="highlight-badge emerald">STAKING</div>
              <div className="highlight-info">
                <h4>$SITE Lock-up Vault Season 3</h4>
                <p>Lock $SITE for 90 days to receive multiplier on all mining attention rewards.</p>
              </div>
              <ArrowUpRight size={18} className="text-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
