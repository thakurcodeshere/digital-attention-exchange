import React from 'react';
import { 
  Compass, 
  TrendingUp, 
  Activity, 
  Zap, 
  Globe, 
  UserCheck, 
  Briefcase, 
  ShieldCheck, 
  Coins, 
  FileText, 
  Code2, 
  Atom,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import type { TabId } from '../types/navigation';

interface SidebarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

interface NavItem {
  id: TabId;
  label: string;
  icon: React.ReactNode;
  badge?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  collapsed,
  setCollapsed
}) => {
  const navItems: NavItem[] = [
    { id: 'discover', label: 'Discover', icon: <Compass className="nav-icon" /> },
    { id: 'terminal', label: 'Terminal', icon: <TrendingUp className="nav-icon" /> },
    { id: 'wpi', label: 'WPI Explorer', icon: <Activity className="nav-icon" /> },
    { id: 'mining', label: 'Mining', icon: <Zap className="nav-icon" /> },
    { id: 'extension', label: 'Extension', icon: <Globe className="nav-icon" /> },
    { id: 'owner', label: 'Owner Workspace', icon: <UserCheck className="nav-icon" /> },
    { id: 'indices', label: 'Indices', icon: <Briefcase className="nav-icon" /> },
    { id: 'validators', label: 'Validators', icon: <ShieldCheck className="nav-icon" /> },
    { id: 'economy', label: '$SITE Economy', icon: <Coins className="nav-icon" /> },
    { id: 'governance', label: 'Governance', icon: <FileText className="nav-icon" /> },
    { id: 'api', label: 'Developers API', icon: <Code2 className="nav-icon" /> },
    { id: 'antifragility', label: 'Anti-Fragility', icon: <Atom className="nav-icon" /> }
  ];

  return (
    <aside className={`vertical-sidebar ${collapsed ? 'collapsed' : ''}`}>
      {/* Brand Header */}
      <div className="sidebar-brand">
        <div className="brand-logo-container">
          <div className="brand-icon relative overflow-hidden">
              {/* DAE monogram */}
              <span className="font-black text-[9px] tracking-tighter font-mono select-none leading-none">
                <span style={{color:'#00F0FF'}}>D</span>
                <span style={{color:'rgba(255,255,255,0.4)'}}>·</span>
                <span style={{color:'#3B82F6'}}>A</span>
                <span style={{color:'rgba(255,255,255,0.4)'}}>·</span>
                <span style={{color:'#8B5CF6'}}>E</span>
              </span>
            </div>
            {!collapsed && (
              <div className="brand-text">
                <span className="brand-title" style={{fontSize:'11px', letterSpacing:'0.05em'}}>Digital Attention Exchange</span>
                <span className="brand-subtitle">Where Attention Meets Value</span>
              </div>
            )}
        </div>
        <button 
          className="collapse-btn" 
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Navigation List - All 12 Segments intact */}
      <div className="sidebar-nav-container">
        <div className="nav-section-label">{!collapsed && 'PROTOCOLS & TOOLS'}</div>
        <nav className="vertical-nav-list">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`vertical-nav-item ${isActive ? 'active' : ''}`}
                title={collapsed ? item.label : undefined}
              >
                <div className="nav-item-content">
                  <span className="nav-icon-wrapper">{item.icon}</span>
                  {!collapsed && <span className="nav-item-label">{item.label}</span>}
                </div>
                {isActive && <div className="active-glow-pill" />}
                {item.badge && !collapsed && <span className="nav-badge">{item.badge}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Footer Status */}
      <div className="sidebar-footer">
        <div className="network-status-indicator">
          <span className="pulse-dot"></span>
          {!collapsed && (
            <div className="status-info">
              <span className="status-title">Mainnet Active</span>
              <span className="status-gas">Gas: 12 Gwei</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
