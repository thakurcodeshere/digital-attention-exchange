import React, { useState } from 'react';
import { TrendingUp, Layers } from 'lucide-react';

export const TerminalView: React.FC = () => {
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [orderType, setOrderType] = useState<'limit' | 'market'>('limit');

  return (
    <div className="view-page-container">
      {/* Pair Header Bar */}
      <div className="terminal-header-bar">
        <div className="pair-info">
          <div className="pair-title">$SITE / USDC</div>
          <div className="pair-price">$4.8250 <span className="price-up">+8.42%</span></div>
        </div>
        <div className="pair-stats">
          <div className="pair-stat">
            <span className="stat-label">24h High</span>
            <span className="stat-val">$5.1200</span>
          </div>
          <div className="pair-stat">
            <span className="stat-label">24h Low</span>
            <span className="stat-val">$4.3800</span>
          </div>
          <div className="pair-stat">
            <span className="stat-label">24h Volume</span>
            <span className="stat-val">3,892,100 $SITE</span>
          </div>
          <div className="pair-stat">
            <span className="stat-label">Attention Liquidity</span>
            <span className="stat-val">$14,250,000</span>
          </div>
        </div>
      </div>

      {/* Main Terminal Layout */}
      <div className="terminal-grid">
        {/* Price Chart Area */}
        <div className="content-box terminal-chart-box">
          <div className="box-header">
            <h3><TrendingUp className="inline-icon text-cyan" /> Attention Market Candlestick Stream</h3>
            <div className="timeframe-selector">
              <button className="tf-btn">1m</button>
              <button className="tf-btn">5m</button>
              <button className="tf-btn active">1h</button>
              <button className="tf-btn">1d</button>
            </div>
          </div>
          <div className="mock-candlestick-chart">
            <div className="chart-grid-lines">
              <div className="grid-line"><span>$5.10</span></div>
              <div className="grid-line"><span>$4.90</span></div>
              <div className="grid-line"><span>$4.70</span></div>
              <div className="grid-line"><span>$4.50</span></div>
            </div>
            {/* Visual simulated price candles */}
            <div className="candle-bars">
              <div className="candle green" style={{ height: '40%', bottom: '20%' }}></div>
              <div className="candle green" style={{ height: '55%', bottom: '25%' }}></div>
              <div className="candle red" style={{ height: '30%', bottom: '45%' }}></div>
              <div className="candle green" style={{ height: '70%', bottom: '20%' }}></div>
              <div className="candle green" style={{ height: '85%', bottom: '15%' }}></div>
              <div className="candle red" style={{ height: '25%', bottom: '70%' }}></div>
              <div className="candle green" style={{ height: '90%', bottom: '10%' }}></div>
            </div>
          </div>
        </div>

        {/* Orderbook */}
        <div className="content-box terminal-orderbook">
          <div className="box-header">
            <h3><Layers className="inline-icon text-indigo" /> Order Book</h3>
          </div>
          <div className="orderbook-table">
            <div className="ob-header">
              <span>Price (USDC)</span>
              <span>Size ($SITE)</span>
              <span>Total</span>
            </div>
            {/* Asks (Sell) */}
            <div className="ob-asks">
              <div className="ob-row ask"><span>4.8500</span><span>1,200</span><span>5,820</span></div>
              <div className="ob-row ask"><span>4.8450</span><span>4,500</span><span>21,802</span></div>
              <div className="ob-row ask"><span>4.8320</span><span>8,900</span><span>43,004</span></div>
            </div>
            <div className="ob-spread">Spread: 0.0070 (0.14%)</div>
            {/* Bids (Buy) */}
            <div className="ob-bids">
              <div className="ob-row bid"><span>4.8250</span><span>12,400</span><span>59,830</span></div>
              <div className="ob-row bid"><span>4.8100</span><span>8,300</span><span>39,923</span></div>
              <div className="ob-row bid"><span>4.7950</span><span>15,000</span><span>71,925</span></div>
            </div>
          </div>
        </div>

        {/* Trade Execution Desk */}
        <div className="content-box terminal-trade-desk">
          <div className="box-header">
            <div className="trade-tab-group">
              <button 
                className={`trade-tab buy ${tradeType === 'buy' ? 'active' : ''}`}
                onClick={() => setTradeType('buy')}
              >
                Buy $SITE
              </button>
              <button 
                className={`trade-tab sell ${tradeType === 'sell' ? 'active' : ''}`}
                onClick={() => setTradeType('sell')}
              >
                Sell $SITE
              </button>
            </div>
          </div>
          <div className="trade-form">
            <div className="form-group">
              <label>Order Type</label>
              <select className="select-input" value={orderType} onChange={(e) => setOrderType(e.target.value as any)}>
                <option value="limit">Limit Order</option>
                <option value="market">Market Instant Execution</option>
              </select>
            </div>

            <div className="form-group">
              <label>Price (USDC)</label>
              <input type="number" className="form-control" defaultValue="4.8250" />
            </div>

            <div className="form-group">
              <label>Amount ($SITE)</label>
              <input type="number" className="form-control" placeholder="0.00" />
            </div>

            <div className="form-summary">
              <div className="summary-row"><span>Estimated Total:</span><span>0.00 USDC</span></div>
              <div className="summary-row"><span>Protocol Trading Fee (0.05%):</span><span>0.00 USDC</span></div>
            </div>

            <button className={`btn-block ${tradeType === 'buy' ? 'btn-emerald' : 'btn-rose'}`}>
              {tradeType === 'buy' ? 'Place Buy Order' : 'Place Sell Order'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
