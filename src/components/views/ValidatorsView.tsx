import React from 'react';
import { ShieldCheck, Server, Lock, Award } from 'lucide-react';

export const ValidatorsView: React.FC = () => {
  return (
    <div className="view-page-container">
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Active Consensus Validators</span>
            <ShieldCheck size={18} className="metric-icon text-cyan" />
          </div>
          <div className="metric-value">128 / 128</div>
          <div className="metric-footer positive">Fully Subscribed Active Set</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Total Staked $DAE</span>
            <Lock size={18} className="metric-icon text-indigo" />
          </div>
          <div className="metric-value">48,290,000</div>
          <div className="metric-footer positive">68.2% of Total Supply</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Staking Reward APY</span>
            <Award size={18} className="metric-icon text-emerald" />
          </div>
          <div className="metric-value">16.4%</div>
          <div className="metric-footer positive">+2.1% Validator Commission Share</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Consensus Uptime</span>
            <Server size={18} className="metric-icon text-amber" />
          </div>
          <div className="metric-value">99.99%</div>
          <div className="metric-footer neutral">0 Slashing Events in 90 Days</div>
        </div>
      </div>

      <div className="content-box">
        <div className="box-header">
          <h3><ShieldCheck className="inline-icon text-emerald" /> Top Validator Nodes Leaderboard</h3>
          <button className="btn-primary btn-sm">Delegate Stake</button>
        </div>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Validator Node</th>
                <th>Total Stake ($DAE)</th>
                <th>Commission</th>
                <th>Blocks Signed (30d)</th>
                <th>Uptime</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">
                  <div className="table-cell-title">Sentinel-Val-01 (Apex Security)</div>
                  <div className="table-cell-sub">0x892a...14f2</div>
                </td>
                <td>4,250,000 $DAE</td>
                <td>2.5%</td>
                <td>489,120</td>
                <td className="text-emerald">100.0%</td>
                <td><button className="btn-sm btn-primary">Delegate</button></td>
              </tr>
              <tr>
                <td className="font-semibold">
                  <div className="table-cell-title">Coinbase Staking Infrastructure</div>
                  <div className="table-cell-sub">0x11a4...99c0</div>
                </td>
                <td>3,890,000 $DAE</td>
                <td>3.0%</td>
                <td>472,900</td>
                <td className="text-emerald">99.99%</td>
                <td><button className="btn-sm btn-primary">Delegate</button></td>
              </tr>
              <tr>
                <td className="font-semibold">
                  <div className="table-cell-title">Paradigm Attention Node</div>
                  <div className="table-cell-sub">0x33e1...88a2</div>
                </td>
                <td>3,120,000 $DAE</td>
                <td>2.0%</td>
                <td>441,800</td>
                <td className="text-emerald">99.98%</td>
                <td><button className="btn-sm btn-primary">Delegate</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
