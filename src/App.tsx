import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import type { TabId } from './types/navigation';

import { DiscoverView } from './components/views/DiscoverView';
import { TerminalView } from './components/views/TerminalView';
import { WPIExplorerView } from './components/views/WPIExplorerView';
import { MiningView } from './components/views/MiningView';
import { ExtensionView } from './components/views/ExtensionView';
import { OwnerWorkspaceView } from './components/views/OwnerWorkspaceView';
import { IndicesView } from './components/views/IndicesView';
import { ValidatorsView } from './components/views/ValidatorsView';
import { SiteEconomyView } from './components/views/SiteEconomyView';
import { GovernanceView } from './components/views/GovernanceView';
import { DevelopersApiView } from './components/views/DevelopersApiView';
import { AntiFragilityView } from './components/views/AntiFragilityView';

import './index.css';

export function App() {
  const [activeTab, setActiveTab] = useState<TabId>('discover');
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'discover':
        return <DiscoverView />;
      case 'terminal':
        return <TerminalView />;
      case 'wpi':
        return <WPIExplorerView />;
      case 'mining':
        return <MiningView />;
      case 'extension':
        return <ExtensionView />;
      case 'owner':
        return <OwnerWorkspaceView />;
      case 'indices':
        return <IndicesView />;
      case 'validators':
        return <ValidatorsView />;
      case 'economy':
        return <SiteEconomyView />;
      case 'governance':
        return <GovernanceView />;
      case 'api':
        return <DevelopersApiView />;
      case 'antifragility':
        return <AntiFragilityView />;
      default:
        return <DiscoverView />;
    }
  };

  return (
    <div className="app-container">
      {/* VERTICAL SIDEBAR ON LEFT SIDE */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* MAIN VIEWPORT NEXT TO SIDEBAR */}
      <div className="main-viewport">
        <Header activeTab={activeTab} />
        <main className="content-viewport">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
}

export default App;
