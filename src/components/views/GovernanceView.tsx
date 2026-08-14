import React from 'react';
import { FileText, Vote, Users, CheckCircle2, Clock, Plus } from 'lucide-react';

export const GovernanceView: React.FC = () => {
  return (
    <div className="view-page-container">
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Active DAO Proposals</span>
            <FileText size={18} className="metric-icon text-cyan" />
          </div>
          <div className="metric-value">4 Active</div>
          <div className="metric-footer positive">Quorum Reached on 3 Proposals</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Your Voting Power</span>
            <Vote size={18} className="metric-icon text-indigo" />
          </div>
          <div className="metric-value">12,400 <span className="metric-unit">veSITE</span></div>
          <div className="metric-footer positive">1.2% of Total Vote Power</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Total DAO Voters</span>
            <Users size={18} className="metric-icon text-emerald" />
          </div>
          <div className="metric-value">14,280</div>
          <div className="metric-footer positive">+420 new delegates this week</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Passed Proposals</span>
            <CheckCircle2 size={18} className="metric-icon text-amber" />
          </div>
          <div className="metric-value">48 Total</div>
          <div className="metric-footer neutral">100% Executed on-chain</div>
        </div>
      </div>

      <div className="content-box">
        <div className="box-header">
          <h3><Vote className="inline-icon text-cyan" /> On-Chain Governance Proposals</h3>
          <button className="btn-primary btn-sm"><Plus size={14} /> Submit New Proposal</button>
        </div>
        <div className="proposal-list">
          <div className="proposal-card">
            <div className="proposal-header">
              <span className="proposal-id">SIP-42</span>
              <span className="proposal-status active"><Clock size={12} /> Voting Open (2 Days Left)</span>
            </div>
            <h4>Increase Mining Reward Allocation for AI Telemetry Nodes by 15%</h4>
            <p>Proposal to adjust emission curve parameters to incentivize zero-knowledge compute verification models.</p>
            <div className="proposal-vote-bar">
              <div className="vote-option for">
                <span>For (88.4%)</span>
                <span>12.4M veSITE</span>
              </div>
              <div className="vote-option against">
                <span>Against (11.6%)</span>
                <span>1.6M veSITE</span>
              </div>
            </div>
            <div className="proposal-actions">
              <button className="btn-sm btn-emerald">Vote FOR</button>
              <button className="btn-sm btn-rose">Vote AGAINST</button>
            </div>
          </div>

          <div className="proposal-card">
            <div className="proposal-header">
              <span className="proposal-id">SIP-41</span>
              <span className="proposal-status passed"><CheckCircle2 size={12} /> Passed & Executed</span>
            </div>
            <h4>Integrate Solana & Base L2 Attention Telemetry Relays</h4>
            <p>Deploy cross-chain zero-knowledge telemetry contracts to reduce gas fees by 95%.</p>
            <div className="proposal-vote-bar">
              <div className="vote-option for">
                <span>For (96.2%)</span>
                <span>18.1M veSITE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
