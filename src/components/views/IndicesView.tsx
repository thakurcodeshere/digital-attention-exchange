import React from 'react';
import { Briefcase, TrendingUp, PieChart, Layers } from 'lucide-react';

export const IndicesView: React.FC = () => {
  return (
    <div className="view-page-container">
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Total Index TVL</span>
            <Briefcase size={18} className="metric-icon text-cyan" />
          </div>
          <div className="metric-value">$84,190,000</div>
          <div className="metric-footer positive">+24.1% MoM Growth</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Attention Baskets</span>
            <Layers size={18} className="metric-icon text-indigo" />
          </div>
          <div className="metric-value">6 Active Baskets</div>
          <div className="metric-footer neutral">Algorithmic Rebalancing</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Top Performing Index</span>
            <TrendingUp size={18} className="metric-icon text-emerald" />
          </div>
          <div className="metric-value">ATTN-AI-10</div>
          <div className="metric-footer positive">+58.4% YTD Return</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">Rebalancing Frequency</span>
            <PieChart size={18} className="metric-icon text-amber" />
          </div>
          <div className="metric-value">Weekly</div>
          <div className="metric-footer neutral">Epoch 128 Pending</div>
        </div>
      </div>

      <div className="content-box">
        <div className="box-header">
          <h3><PieChart className="inline-icon text-cyan" /> Attention-Weighted Asset Indices</h3>
          <button className="btn-primary btn-sm">Create Custom Basket</button>
        </div>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Index Name</th>
                <th>Underlying Asset Composition</th>
                <th>Market Cap</th>
                <th>24h Change</th>
                <th>7d APY Yield</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">
                  <div className="table-cell-title">ATTN-AI-10 (AI Attention Index)</div>
                  <div className="table-cell-sub">Top 10 AI telemetry & compute pools</div>
                </td>
                <td>$SITE (40%), $FET (20%), $TAO (20%), $RENDER (20%)</td>
                <td>$38,400,000</td>
                <td className="text-emerald">+4.2%</td>
                <td className="text-emerald font-bold">34.8%</td>
                <td><button className="btn-sm btn-primary">Invest</button></td>
              </tr>
              <tr>
                <td className="font-semibold">
                  <div className="table-cell-title">MEDIA-ATTN (Digital Media Yield Index)</div>
                  <div className="table-cell-sub">Streaming & content viewer pools</div>
                </td>
                <td>$SITE (50%), $BAT (25%), $AUDIO (25%)</td>
                <td>$24,100,000</td>
                <td className="text-emerald">+2.8%</td>
                <td className="text-emerald font-bold">28.2%</td>
                <td><button className="btn-sm btn-primary">Invest</button></td>
              </tr>
              <tr>
                <td className="font-semibold">
                  <div className="table-cell-title">DEFI-ATTN (DeFi Attention Benchmark)</div>
                  <div className="table-cell-sub">DEX & lending protocol telemetry</div>
                </td>
                <td>$SITE (45%), $UNI (20%), $AAVE (20%), $MKR (15%)</td>
                <td>$21,690,000</td>
                <td className="text-rose">-0.8%</td>
                <td className="text-emerald font-bold">22.4%</td>
                <td><button className="btn-sm btn-primary">Invest</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
