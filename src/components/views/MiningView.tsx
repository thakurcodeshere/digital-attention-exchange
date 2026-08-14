import React, { useState } from 'react';
import { Zap, Cpu, Award, Play, Pause, RefreshCw, CheckCircle } from 'lucide-react';

export const MiningView: React.FC = () => {
  const [isMining, setIsMining] = useState(true);

  return (
    <div className="view-page-container">
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Attention Hash Rate</span>
            <Zap size={18} className="metric-icon text-amber" />
          </div>
          <div className="metric-value">12.4 <span className="metric-unit">MH/s</span></div>
          <div className="metric-footer positive">Active Proof-of-Attention Worker</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Unclaimed $SITE Rewards</span>
            <Award size={18} className="metric-icon text-emerald" />
          </div>
          <div className="metric-value">148.50 <span className="metric-unit">$SITE</span></div>
          <div className="metric-footer positive">~$716.51 USDC</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Mining Efficiency</span>
            <Cpu size={18} className="metric-icon text-cyan" />
          </div>
          <div className="metric-value">99.4%</div>
          <div className="metric-footer neutral">0 Rejected Proofs</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Active Mining Hardware</span>
            <RefreshCw size={18} className="metric-icon text-indigo" />
          </div>
          <div className="metric-value">4 Devices</div>
          <div className="metric-footer positive">Synced across browser & desktop</div>
        </div>
      </div>

      <div className="section-grid-2">
        <div className="content-box">
          <div className="box-header">
            <h3><Zap className="inline-icon text-amber" /> Mining Node Command Desk</h3>
            <button 
              className={`btn-sm ${isMining ? 'btn-rose' : 'btn-emerald'}`}
              onClick={() => setIsMining(!isMining)}
            >
              {isMining ? <><Pause size={14} /> Pause Node</> : <><Play size={14} /> Start Mining</>}
            </button>
          </div>
          <div className="mining-status-panel">
            <div className="status-hero-card">
              <div className="hero-status-title">
                <span className={`status-indicator ${isMining ? 'online' : 'offline'}`}></span>
                {isMining ? 'Attention Mining active on Local Worker' : 'Node Paused'}
              </div>
              <p className="hero-status-desc">
                Your browser & background telemetry extension are validating user engagement proofs and receiving $SITE rewards every block.
              </p>
              <div className="claim-action-row">
                <button className="btn-lg btn-primary">Claim 148.50 $SITE Rewards</button>
                <button className="btn-lg btn-secondary">Stake Rewards (+15% APY)</button>
              </div>
            </div>
          </div>
        </div>

        <div className="content-box">
          <div className="box-header">
            <h3><Cpu className="inline-icon text-indigo" /> Connected Hardware Workers</h3>
          </div>
          <div className="worker-list">
            <div className="worker-item">
              <div className="worker-info">
                <div className="worker-name">MacBook Pro M3 Max - Chrome Extension</div>
                <div className="worker-sub">Hashrate: 6.2 MH/s • Temp: 42°C</div>
              </div>
              <span className="worker-status active"><CheckCircle size={14} /> Active</span>
            </div>

            <div className="worker-item">
              <div className="worker-info">
                <div className="worker-name">Windows Workstation RTX 4090 - Desktop Client</div>
                <div className="worker-sub">Hashrate: 4.8 MH/s • Temp: 54°C</div>
              </div>
              <span className="worker-status active"><CheckCircle size={14} /> Active</span>
            </div>

            <div className="worker-item">
              <div className="worker-info">
                <div className="worker-name">Brave Mobile Browser - iOS Worker</div>
                <div className="worker-sub">Hashrate: 1.4 MH/s • Low Power Mode</div>
              </div>
              <span className="worker-status active"><CheckCircle size={14} /> Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
