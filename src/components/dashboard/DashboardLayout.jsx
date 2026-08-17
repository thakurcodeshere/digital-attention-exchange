import React, { useState } from 'react';
import { 
  Compass, TrendingUp, Activity, Zap, Globe, UserCheck, Layers, 
  ShieldCheck, Coins, Vote, Code, Search, Bell, Wallet, ChevronLeft, ArrowLeft, ChevronRight 
} from 'lucide-react';

import DiscoverTab from './DiscoverTab';
import TerminalTab from './TerminalTab';
import WpiExplorerTab from './WpiExplorerTab';
import MiningTab from './MiningTab';
import ExtensionTab from './ExtensionTab';
import OwnerWorkspaceTab from './OwnerWorkspaceTab';
import IndicesTab from './IndicesTab';
import ValidatorsTab from './ValidatorsTab';
import SiteEconomyTab from './SiteEconomyTab';
import GovernanceTab from './GovernanceTab';
import DevelopersApiTab from './DevelopersApiTab';

export default function DashboardLayout({ activeSubTab, setActiveSubTab, onBackToLanding }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const menuItems = [
    { id: 'discover', label: 'Discover', icon: Compass },
    { id: 'terminal', label: 'Terminal', icon: TrendingUp },
    { id: 'wpi-explorer', label: 'WPI Explorer', icon: Activity },
    { id: 'mining', label: 'Mining', icon: Zap },
    { id: 'extension', label: 'Extension', icon: Globe },
    { id: 'owner-workspace', label: 'Owner Workspace', icon: UserCheck },
    { id: 'indices', label: 'Indices', icon: Layers },
    { id: 'validators', label: 'Validators', icon: ShieldCheck },
    { id: 'economy', label: '$DAE Economy', icon: Coins },
    { id: 'governance', label: 'Governance', icon: Vote },
    { id: 'developers-api', label: 'Developers API', icon: Code }
  ];

  const renderActiveView = () => {
    switch (activeSubTab) {
      case 'discover': return <DiscoverTab />;
      case 'terminal': return <TerminalTab />;
      case 'wpi-explorer': return <WpiExplorerTab />;
      case 'mining': return <MiningTab />;
      case 'extension': return <ExtensionTab />;
      case 'owner-workspace': return <OwnerWorkspaceTab />;
      case 'indices': return <IndicesTab />;
      case 'validators': return <ValidatorsTab />;
      case 'economy': return <SiteEconomyTab />;
      case 'governance': return <GovernanceTab />;
      case 'developers-api': default: return <DevelopersApiTab />;
    }
  };

  return (
    <div className="flex h-screen bg-[#07090E] text-[#F3F4F6] overflow-hidden font-sans">
      
      {/* LEFT VERTICAL SIDEBAR */}
      <aside className={`${sidebarCollapsed ? 'w-20' : 'w-72'} bg-[#07090E] border-r border-white/10 flex flex-col justify-between transition-all duration-300 z-30 shrink-0`}>
        
        <div className="space-y-6 p-4">
          
          {/* Logo & Collapse Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <div 
              onClick={onBackToLanding}
              className="flex items-center space-x-3 cursor-pointer group shrink-0"
              title="Return to Public Landing Page"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00F0FF] via-[#3B82F6] to-[#8B5CF6] p-[1.5px] shadow-glowCyan group-hover:scale-105 transition-transform duration-300 shrink-0">
                <div className="w-full h-full bg-[#07090E] rounded-[9.5px] flex items-center justify-center">
                  <span className="font-mono font-black text-sm tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#3B82F6]">
                    DAE
                  </span>
                </div>
              </div>

              {!sidebarCollapsed && (
                <div className="flex flex-col shrink-0">
                  <span className="font-extrabold text-sm tracking-tight text-white group-hover:text-[#00F0FF] transition-colors leading-tight whitespace-nowrap">
                    Digital Attention Exchange
                  </span>
                  <span className="text-[8px] uppercase font-mono tracking-widest text-[#00F0FF] whitespace-nowrap">
                    DECENTRALIZED ATTENTION MARKET
                  </span>
                </div>
              )}
            </div>

            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* Return to Landing Button */}
          {!sidebarCollapsed && (
            <button
              onClick={onBackToLanding}
              className="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-[#00F0FF] flex items-center space-x-2 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Landing Page</span>
            </button>
          )}

          {/* Sidebar Menu Header */}
          {!sidebarCollapsed && (
            <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 px-2 pt-2">
              PROTOCOLS & TOOLS
            </div>
          )}

          {/* Navigation Items */}
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSubTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSubTab(item.id)}
                  className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center px-0 py-3' : 'space-x-3 px-3 py-2.5'} rounded-xl text-xs font-mono font-medium transition-all ${
                    isActive
                      ? 'bg-[#00F0FF]/10 border border-[#00F0FF] text-[#00F0FF] font-bold shadow-glowCyan'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  title={item.label}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#00F0FF]' : 'text-gray-400'}`} />
                  {!sidebarCollapsed && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>

        </div>

        {/* Sidebar Footer Status */}
        <div className="p-4 border-t border-white/10 bg-[#040609] space-y-1 text-[11px] font-mono">
          <div className="flex items-center space-x-2 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {!sidebarCollapsed && <span>Mainnet Active</span>}
          </div>
          {!sidebarCollapsed && (
            <div className="text-gray-500 text-[10px]">Gas: 12 Gwei</div>
          )}
        </div>

      </aside>

      {/* MAIN VIEWPORT */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* TOP DASHBOARD HEADER BAR */}
        <header className="h-16 border-b border-white/10 bg-[#07090E] px-6 flex items-center justify-between z-20 shrink-0">
          
          {/* Search Input */}
          <div className="relative w-full max-w-md hidden sm:block">
            <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search pools, pairs, contracts... ⌘K"
              className="w-full bg-[#0E131F] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] transition-colors"
            />
          </div>

          {/* Right Metrics & Wallet Header Widgets */}
          <div className="flex items-center space-x-4 ml-auto">
            
            {/* DAE Ticker */}
            <div className="hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono">
              <span className="text-gray-400">$DAE:</span>
              <span className="text-white font-bold">$4.82</span>
              <span className="text-emerald-400 font-semibold">+8.4%</span>
            </div>

            {/* Notification Bell */}
            <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 relative transition-colors">
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] absolute top-1.5 right-1.5 animate-ping" />
            </button>

            {/* Wallet Button */}
            <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF] shadow-glowCyan">
              <Wallet className="w-4 h-4" />
              <span className="font-bold">0x7F2...8E91</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>

          </div>

        </header>

        {/* DASHBOARD TAB BODY */}
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto bg-[#07090E]">
          {renderActiveView()}
        </main>

      </div>

    </div>
  );
}
