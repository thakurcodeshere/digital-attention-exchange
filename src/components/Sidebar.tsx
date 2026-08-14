import React, { useState } from 'react';
import { NAV_ITEMS } from '../types/navigation';
import type { NavTabId } from '../types/navigation';
import { IconMapper } from './IconMapper';

interface SidebarProps {
  activeTab: NavTabId;
  onSelectTab: (tabId: NavTabId) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  collapsed,
  onToggleCollapse,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = NAV_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = ['Core', 'Network', 'Management', 'Ecosystem'] as const;

  return (
    <aside className={`sidebar-vertical ${collapsed ? 'collapsed' : ''}`}>
      {/* Brand Header */}
      <div className="sidebar-brand">
        <a href="#discover" className="brand-logo-group" onClick={(e) => { e.preventDefault(); onSelectTab('discover'); }}>
          <div className="brand-icon-box">
            <IconMapper name="Atom" size={22} />
          </div>
          {!collapsed && (
            <div className="brand-text">
              <span className="brand-title">DIGITAL ATTENTION</span>
              <span className="brand-subtitle">EXCHANGE</span>
            </div>
          )}
        </a>
        <button
          className="collapse-toggle-btn"
          onClick={onToggleCollapse}
          title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          <IconMapper name={collapsed ? 'ChevronRight' : 'ChevronLeft'} size={16} />
        </button>
      </div>

      {/* Search Filter Bar (Shown when expanded) */}
      {!collapsed && (
        <div className="sidebar-search-box">
          <div className="search-input-wrapper">
            <IconMapper name="Search" />
            <input
              type="text"
              placeholder="Search features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="sidebar-search-input"
            />
          </div>
        </div>
      )}

      {/* Vertical Navigation Items List */}
      <div className="sidebar-nav-list">
        {categories.map((category) => {
          const categoryItems = filteredItems.filter((item) => item.category === category);
          if (categoryItems.length === 0) return null;

          return (
            <React.Fragment key={category}>
              {!collapsed && <div className="nav-category-header">{category}</div>}
              {categoryItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    className={`nav-item-btn ${isActive ? 'active' : ''}`}
                    onClick={() => onSelectTab(item.id)}
                    title={collapsed ? `${item.label} - ${item.description}` : item.description}
                  >
                    <IconMapper name={item.iconName} className="nav-icon" />
                    {!collapsed && (
                      <>
                        <span className="nav-label">{item.label}</span>
                        {item.badge && (
                          <span className={`nav-badge badge-${item.badgeType || 'info'}`}>
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </button>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>

      {/* Sidebar Footer User Info */}
      <div className="sidebar-footer">
        <div className="user-avatar">AI</div>
        {!collapsed && (
          <div className="user-info">
            <span className="user-name">Gyan (Owner)</span>
            <span className="user-status">
              <span className="status-dot"></span> Mainnet Online
            </span>
          </div>
        )}
      </div>
    </aside>
  );
};
