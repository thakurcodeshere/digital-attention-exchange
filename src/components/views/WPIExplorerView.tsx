import React from 'react';
import { Activity, Server, Radio, Cpu, Network, CheckCircle2 } from 'lucide-react';

export const WPIExplorerView: React.FC = () => {
  return (
    <div className="view-page-container">
      {/* Telemetry Header Cards */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">WPI Global Index Value</span>
            <Activity size={18} className="metric-icon text-cyan" />
          </div>
          <div className="metric-value">98.42 <span className="metric-unit">pts</span></div>
          <div className="metric-footer positive">Optimal Performance (+1.2%)</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Telemetry Relay Nodes</span>
            <Server size={18} className="metric-icon text-indigo" />
          </div>
          <div className="metric-value">3,842</div>
          <div className="metric-footer positive">99.98% Network Uptime</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Proof Latency (Global Avg)</span>
            <Radio size={18} className="metric-icon text-emerald" />
          </div>
          <div className="metric-value">14.2 <span className="metric-unit">ms</span></div>
          <div className="metric-footer positive">Ultra Low-Latency Proofs</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Attention Bandwidth Stream</span>
            <Network size={18} className="metric-icon text-amber" />
          </div>
          <div className="metric-value">4.2 <span className="metric-unit">Tbps</span></div>
          <div className="metric-footer neutral">Peak Traffic Handled</div>
        </div>
      </div>

      {/* Real-time Proof Stream & Node Logs */}
      <div className="section-grid-2">
        <div className="content-box">
          <div className="box-header">
            <h3><Radio className="inline-icon text-cyan" /> Live WPI Telemetry Proof Stream</h3>
            <span className="live-pill"><span className="pulse-dot"></span> LIVE</span>
          </div>
          <div className="telemetry-log-stream">
            <div className="log-line">
              <span className="log-time">16:38:12</span>
              <span className="log-node">node-eu-west-902</span>
              <span className="log-msg">Verified ZK-Attention proof #894201 - Latency: 12ms</span>
              <CheckCircle2 size={14} className="text-emerald" />
            </div>
            <div className="log-line">
              <span className="log-time">16:38:10</span>
              <span className="log-node">node-us-east-148</span>
              <span className="log-msg">Batch attention block #894200 signed by 128 validators</span>
              <CheckCircle2 size={14} className="text-emerald" />
            </div>
            <div className="log-line">
              <span className="log-time">16:38:07</span>
              <span className="log-node">node-ap-south-331</span>
              <span className="log-msg">Telemetry hash sync completed - Bandwidth: 1.2 GB/s</span>
              <CheckCircle2 size={14} className="text-emerald" />
            </div>
            <div className="log-line">
              <span className="log-time">16:38:04</span>
              <span className="log-node">node-us-west-401</span>
              <span className="log-msg">Audit check passed: zero bot activity detected on pool #44</span>
              <CheckCircle2 size={14} className="text-emerald" />
            </div>
          </div>
        </div>

        <div className="content-box">
          <div className="box-header">
            <h3><Cpu className="inline-icon text-indigo" /> Regional Node Distribution</h3>
          </div>
          <div className="node-distribution-list">
            <div className="region-bar-item">
              <div className="region-header">
                <span>North America (US-East / US-West)</span>
                <span>1,420 Nodes (37%)</span>
              </div>
              <div className="progress-bar-bg"><div className="progress-bar-fill cyan" style={{ width: '37%' }}></div></div>
            </div>

            <div className="region-bar-item">
              <div className="region-header">
                <span>Europe Central (EU-Frankfurt / EU-London)</span>
                <span>1,180 Nodes (31%)</span>
              </div>
              <div className="progress-bar-bg"><div className="progress-bar-fill indigo" style={{ width: '31%' }}></div></div>
            </div>

            <div className="region-bar-item">
              <div className="region-header">
                <span>Asia Pacific (Tokyo / Singapore / Mumbai)</span>
                <span>940 Nodes (24%)</span>
              </div>
              <div className="progress-bar-bg"><div className="progress-bar-fill emerald" style={{ width: '24%' }}></div></div>
            </div>

            <div className="region-bar-item">
              <div className="region-header">
                <span>Latin America & Others</span>
                <span>302 Nodes (8%)</span>
              </div>
              <div className="progress-bar-bg"><div className="progress-bar-fill rose" style={{ width: '8%' }}></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
