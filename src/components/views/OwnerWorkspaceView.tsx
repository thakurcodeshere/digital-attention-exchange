import React from 'react';
import { ShieldAlert, Key, Landmark, Sliders, AlertTriangle, FileCode2 } from 'lucide-react';

export const OwnerWorkspaceView: React.FC = () => {
  return (
    <div className="view-page-container">
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Protocol Treasury Vault</span>
            <Landmark size={18} className="metric-icon text-cyan" />
          </div>
          <div className="metric-value">$64,250,000</div>
          <div className="metric-footer positive">Multi-Sig 4-of-7 Timelock Active</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Circuit Breaker Status</span>
            <ShieldAlert size={18} className="metric-icon text-emerald" />
          </div>
          <div className="metric-value">ARMED</div>
          <div className="metric-footer positive">Emergency Freeze Ready</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Protocol Fee Share</span>
            <Sliders size={18} className="metric-icon text-indigo" />
          </div>
          <div className="metric-value">0.05%</div>
          <div className="metric-footer neutral">0.03% to Stakers / 0.02% Burn</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Admin Multi-Sig Keyholders</span>
            <Key size={18} className="metric-icon text-amber" />
          </div>
          <div className="metric-value">7 Signers</div>
          <div className="metric-footer positive">Hardware Security Modules Synced</div>
        </div>
      </div>

      <div className="section-grid-2">
        <div className="content-box">
          <div className="box-header">
            <h3><Sliders className="inline-icon text-indigo" /> Protocol Operational Parameters</h3>
          </div>
          <div className="admin-param-form">
            <div className="form-group">
              <label>Attention Escrow Min Lockup Period</label>
              <div className="input-group">
                <input type="text" className="form-control" defaultValue="7 Days (604800s)" />
                <button className="btn-sm btn-secondary">Update</button>
              </div>
            </div>

            <div className="form-group">
              <label>Attention Proof Validation Slashing Threshold</label>
              <div className="input-group">
                <input type="text" className="form-control" defaultValue="15.0% Invalid Proof Rate" />
                <button className="btn-sm btn-secondary">Update</button>
              </div>
            </div>

            <div className="form-group">
              <label>Global Mining Emission Rate Modifier</label>
              <div className="input-group">
                <input type="text" className="form-control" defaultValue="1.00x Base Emission" />
                <button className="btn-sm btn-secondary">Update</button>
              </div>
            </div>
          </div>
        </div>

        <div className="content-box danger-zone-box">
          <div className="box-header">
            <h3 className="text-rose"><AlertTriangle className="inline-icon" /> Owner Emergency Controls</h3>
          </div>
          <div className="danger-zone-body">
            <p>High-security protocol actions require multi-sig threshold confirmation before executing on mainnet.</p>
            <div className="action-buttons-stack">
              <button className="btn-block btn-rose">
                <ShieldAlert size={16} /> Trigger Protocol Emergency Pause (Circuit Breaker)
              </button>
              <button className="btn-block btn-secondary">
                <FileCode2 size={16} /> Propose Timelock Smart Contract Upgrade
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
