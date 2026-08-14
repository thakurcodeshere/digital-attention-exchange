import React, { useState } from 'react';
import type { NavTabId } from './types/navigation';
import { Sidebar } from './components/Sidebar';
import { HeaderBar } from './components/HeaderBar';
import { MainViewContent } from './components/views/AllViews';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTabId>('discover');
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [layoutMode, setLayoutMode] = useState<'vertical' | 'horizontal'>('vertical');

  return (
    <div className="app-container">
      {/* Vertical Navigation Bar on Left Side */}
      {layoutMode === 'vertical' && (
        <Sidebar
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      )}

      {/* Main Content Area */}
      <div className={`main-content ${layoutMode === 'vertical' && sidebarCollapsed ? 'collapsed' : ''} ${layoutMode === 'horizontal' ? 'no-sidebar' : ''}`} style={layoutMode === 'horizontal' ? { marginLeft: 0 } : undefined}>
        <HeaderBar
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          layoutMode={layoutMode}
          onToggleLayoutMode={() => setLayoutMode(layoutMode === 'vertical' ? 'horizontal' : 'vertical')}
        />

        <main>
          <MainViewContent tabId={activeTab} />
        </main>
      </div>
    </div>
  );
};

export default App;
