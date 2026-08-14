import { useState, useEffect } from 'react';
import { loadAppState, saveAppState } from './data/mockData';
import LandingPage from './pages/LandingPage';
import ClientPortal from './pages/ClientPortal';
import ReviewerPortal from './pages/ReviewerPortal';
import AdminPortal from './pages/AdminPortal';

export default function App() {
  const [state, setState] = useState(() => loadAppState());
  const [activeView, setActiveView] = useState('landing');
  const [toasts, setToasts] = useState([]);
  const [theme, setTheme] = useState(() => localStorage.getItem('attentra_theme') || 'light');

  // Sync state changes to localStorage
  useEffect(() => {
    saveAppState(state);
  }, [state]);

  // Sync theme changes to html node
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('attentra_theme', theme);
  }, [theme]);

  // Toast Notification Engine helper
  const showToast = (title, message, iconType = 'info') => {
    const id = Date.now() + Math.random().toString(36).substr(2, 5);
    const newToast = { id, title, message, iconType, removing: false };
    
    setToasts((prev) => [...prev, newToast]);

    // Schedule removing state
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, removing: true } : t))
      );
    }, 3700);

    // Schedule full cleanup
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Slow Background simulated notifications
  useEffect(() => {
    const simulatedEvents = [
      { title: "Escrow Deposited", text: "Client 'FinTech Startup' created campaign ($450 escrowed)", type: "success" },
      { title: "Campaign Completed", text: "Thumbnail study 'A/B Theme' reached target audience quota.", type: "success" },
      { title: "Auditor Warning", text: "Reviewer profile 'rev-903' failed keystroke timing checks.", type: "warning" },
      { title: "Fraud Trigger Blocked", text: "Intercepted bot spoofing general demographic filters.", type: "fraud" },
      { title: "Fast Match", text: "15 developers matched and accepted 'Usability Testing' campaign.", type: "info" }
    ];

    const interval = setInterval(() => {
      // Do not interrupt reviewer workspace sandbox testing
      const sandboxActive = document.getElementById('tab-reviewer-sandbox')?.classList.contains('active-sub-tab');
      if (Math.random() < 0.2 && !sandboxActive && activeView !== 'reviewer') {
        const ev = simulatedEvents[Math.floor(Math.random() * simulatedEvents.length)];
        showToast(ev.title, ev.text, ev.type);
      }
    }, 12000);

    return () => clearInterval(interval);
  }, [activeView]);

  const handleRoleChange = (role) => {
    setActiveView(role);
    setState(prev => ({
      ...prev,
      currentUser: { ...prev.currentUser, role }
    }));
  };

  return (
    <div className="app-wrapper">
      {/* Dynamic Background Glow Elements */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>

      {/* GLOBAL NAVBAR - SINGLE LINER WITH BALANCED SPACE */}
      <header className="global-navbar">
        {/* SEGMENT 1: BRAND LOGO + NAME + SIGNATURE LINE */}
        <div className="navbar-brand-container" onClick={() => handleRoleChange('landing')}>
          <div className="brand-logo-box">
            <i className="fa-solid fa-bolt-lightning logo-icon"></i>
          </div>
          <div className="brand-text-stack">
            <span className="brand-title">DIGITAL ATTENTION EXCHANGE</span>
            <span className="brand-signature-line">ATTENTION MARKET & TELEMETRY</span>
          </div>
        </div>

        {/* SEGMENT 2: LIVE INDEX WIDGET */}
        <div className="live-index-pill">
          <span className="pulse-dot"></span>
          <span className="index-label">LIVE INDEX</span>
          <span className="index-value">82.41</span>
          <span className="index-trend">↑</span>
        </div>

        {/* SEGMENT 3: NAVIGATION LINKS WITH BALANCED SPACING */}
        <nav className="navbar-menu-links">
          <a href="#explore" className="nav-link" onClick={() => handleRoleChange('landing')}>Explore</a>
          <a href="#how-it-works" className="nav-link" onClick={() => handleRoleChange('landing')}>How It Works</a>
          <a href="#attention-index" className="nav-link" onClick={() => handleRoleChange('landing')}>Attention Index</a>
          <a href="#for-owners" className="nav-link" onClick={() => handleRoleChange('landing')}>For Owners</a>
          <a href="#docs" className="nav-link" onClick={() => handleRoleChange('landing')}>Docs</a>
          <a href="#blog" className="nav-link" onClick={() => handleRoleChange('landing')}>Blog</a>
          <a href="#community" className="nav-link" onClick={() => handleRoleChange('landing')}>Community</a>
        </nav>

        {/* SEGMENT 4: USER ACTIONS & PORTAL ACCESS */}
        <div className="navbar-actions-group">
          {/* Theme Selector */}
          <div className="nav-dropdown" style={{ zIndex: 101 }}>
            <button className="dropdown-trigger theme-btn" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-subtle)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.78rem', color: 'var(--text-white)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <i className={`fa-solid ${
                theme === 'light' ? 'fa-sun text-amber' : 
                theme === 'dark' ? 'fa-moon text-indigo' : 
                theme === 'sunset' ? 'fa-cloud-sun text-rose' :
                'fa-eye text-success'
              }`}></i>
              <span className="capitalize">{theme === 'highcontrast' ? 'High Contrast' : theme}</span>
              <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.6rem' }}></i>
            </button>
            <div className="dropdown-content theme-dropdown-content" style={{ minWidth: '150px', right: 0, left: 'auto' }}>
              <a href="#" onClick={(e) => { e.preventDefault(); setTheme('light'); showToast('Theme Changed', 'Switched to Light Theme', 'success'); }}>
                <i className="fa-solid fa-sun text-amber"></i> Light
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); setTheme('dark'); showToast('Theme Changed', 'Switched to Dark Theme', 'success'); }}>
                <i className="fa-solid fa-moon text-indigo"></i> Dark
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); setTheme('sunset'); showToast('Theme Changed', 'Switched to Sunset Theme', 'success'); }}>
                <i className="fa-solid fa-cloud-sun text-rose"></i> Sunset
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); setTheme('highcontrast'); showToast('Theme Changed', 'Switched to High Contrast Theme', 'success'); }}>
                <i className="fa-solid fa-eye text-success"></i> High Contrast
              </a>
            </div>
          </div>

          {/* Quick Sign In */}
          <button className="nav-signin-btn" onClick={() => handleRoleChange('client')}>
            Sign In
          </button>

          {/* Launch App Button */}
          <button className="launch-app-btn" onClick={() => handleRoleChange('client')}>
            <span>Launch App</span>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>

          {/* User Header Widget */}
          {activeView !== 'landing' && (
            <div className="header-user-status" id="header-profile-widget">
              <div className="status-avatar">
                <i className={`fa-solid ${activeView === 'client' ? 'fa-building' : activeView === 'admin' ? 'fa-user-gear' : 'fa-user'}`}></i>
              </div>
              <div className="status-details">
                <span className="user-name">
                  {activeView === 'client' && 'Stripe Channel'}
                  {activeView === 'reviewer' && state.currentUser.name}
                  {activeView === 'admin' && 'Sentinel Admin'}
                </span>
                <div className="user-meta-scores">
                  <span className="meta-score text-success">
                    <i className="fa-solid fa-coins"></i>
                    <span id="header-wallet">
                      {activeView === 'client' && '1,080.00'}
                      {activeView === 'reviewer' && state.currentUser.balance.toFixed(2)}
                      {activeView === 'admin' && '64,200.00'}
                    </span>
                  </span>
                  <span className="meta-score text-indigo">
                    <i className="fa-solid fa-star"></i>
                    <span id="header-reputation">
                      {activeView === 'client' && '99.9'}
                      {activeView === 'reviewer' && state.currentUser.reputation.toFixed(1)}
                      {activeView === 'admin' && '100.0'}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* VIEWPORT ROUTER CONTENT */}
      <main className="main-content">
        {activeView === 'landing' && (
          <LandingPage 
            state={state} 
            setView={handleRoleChange} 
            showToast={showToast} 
          />
        )}
        {activeView === 'client' && (
          <ClientPortal 
            state={state} 
            setState={setState} 
            showToast={showToast} 
          />
        )}
        {activeView === 'reviewer' && (
          <ReviewerPortal 
            state={state} 
            setState={setState} 
            showToast={showToast} 
          />
        )}
        {activeView === 'admin' && (
          <AdminPortal 
            state={state} 
            setState={setState} 
            showToast={showToast} 
          />
        )}
      </main>

      {/* TOAST CONTAINER */}
      <div className="toast-container" id="toast-container">
        {toasts.map((t) => {
          let iconClass = 'fa-info-circle text-indigo';
          if (t.iconType === 'success') iconClass = 'fa-check-circle text-emerald';
          if (t.iconType === 'warning') iconClass = 'fa-exclamation-triangle text-amber';
          if (t.iconType === 'error') iconClass = 'fa-times-circle text-rose';
          if (t.iconType === 'fraud') iconClass = 'fa-user-ninja text-rose';

          return (
            <div key={t.id} className={`toast ${t.removing ? 'removing' : ''}`}>
              <div className="toast-icon">
                <i className={`fa-solid ${iconClass}`}></i>
              </div>
              <div className="toast-body">
                <h5>{t.title}</h5>
                <p>{t.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
