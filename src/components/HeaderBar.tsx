import React from 'react';
import { NAV_ITEMS } from '../types/navigation';
import type { NavTabId } from '../types/navigation';
import { IconMapper } from './IconMapper';

interface HeaderBarProps {
  activeTab: NavTabId;
  onSelectTab: (tabId: NavTabId) => void;
  layoutMode: 'vertical' | 'horizontal';
  onToggleLayoutMode: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  activeTab,
  onSelectTab,
  layoutMode,
  onToggleLayoutMode,
}) => {
  const currentItem = NAV_ITEMS.find((item) => item.id === activeTab) || NAV_ITEMS[0];

  return (
    <>
      <header className="top-header-bar">
        <div className="header-title-section">
          <IconMapper name={currentItem.iconName} className="nav-icon" size={24} style={{ color: '#00f2fe' }} />
          <div>
            <h1 className="header-page-title">{currentItem.label}</h1>
          </div>
          <span className="header-live-badge">
            <span className="status-dot"></span> REALTIME METRICS
          </span>
        </div>

        <div className="header-actions">
          {/* Live Market Ticker */}
          <div className="market-ticker">
            <div className="ticker-item">
              <span className="ticker-label">$SITE:</span>
              <span className="ticker-value">$1.42</span>
              <span className="ticker-change">+5.8%</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-label">WPI:</span>
              <span className="ticker-value">148.2</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-label">Nodes:</span>
              <span className="ticker-value">1,024</span>
            </div>
          </div>

          {/* Layout Mode Switcher */}
          <button
            className="btn-secondary"
            onClick={onToggleLayoutMode}
            title="Toggle between Vertical Sidebar layout and Original Top Bar layout"
          >
            <IconMapper name="LayoutGrid" size={16} />
            <span>Layout: {layoutMode === 'vertical' ? 'Vertical Left Bar' : 'Top Bar'}</span>
          </button>
        </div>
      </header>

      {/* Recreated Original Top Bar Preview when horizontal mode is enabled */}
      {layoutMode === 'horizontal' && (
        <nav className="horizontal-bar-mode">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                className={`horizontal-item-btn ${isActive ? 'active' : ''}`}
                onClick={() => onSelectTab(item.id)}
              >
                <IconMapper name={item.iconName} size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      )}
    </>
  );
};
