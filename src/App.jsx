import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import TrustBar from './components/TrustBar.jsx';
import ProblemSection from './components/ProblemSection.jsx';
import BigIdeaSection from './components/BigIdeaSection.jsx';
import AttentionIndexSection from './components/AttentionIndexSection.jsx';
import MarketExplorer from './components/MarketExplorer.jsx';
import RolesSection from './components/RolesSection.jsx';
import WebsiteOwnerSection from './components/WebsiteOwnerSection.jsx';
import VisitorSection from './components/VisitorSection.jsx';
import MarketSharesSection from './components/MarketSharesSection.jsx';
import TransparencySection from './components/TransparencySection.jsx';
import BotPreventionSection from './components/BotPreventionSection.jsx';
import FlywheelSection from './components/FlywheelSection.jsx';
import ExpansionRoadmap from './components/ExpansionRoadmap.jsx';
import TokenSection from './components/TokenSection.jsx';
import ProtocolArchSection from './components/ProtocolArchSection.jsx';
import CapabilitiesRoadmap from './components/CapabilitiesRoadmap.jsx';
import JournalSection from './components/JournalSection.jsx';
import PricingSection from './components/PricingSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import Footer from './components/Footer.jsx';

import AppDemoModal from './components/AppDemoModal.jsx';
import OnboardingModal from './components/OnboardingModal.jsx';
import RegisterSiteModal from './components/RegisterSiteModal.jsx';

import DashboardLayout from './components/dashboard/DashboardLayout.jsx';

export default function App() {
  const [view, setView] = useState('landing'); // 'landing' | 'app'
  const [activeSubTab, setActiveSubTab] = useState('developers-api'); // default dashboard tab

  const [appDemoOpen, setAppDemoOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signup');
  const [registerSiteOpen, setRegisterSiteOpen] = useState(false);

  const handleOpenApp = (subTab = 'developers-api') => {
    setActiveSubTab(subTab);
    setView('app');
    window.scrollTo(0, 0);
  };

  const handleOpenAuth = (mode = 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const scrollToMethodology = () => {
    const el = document.getElementById('attention-index');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDocs = () => {
    const el = document.getElementById('docs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (view === 'app') {
    return (
      <DashboardLayout
        activeSubTab={activeSubTab}
        setActiveSubTab={setActiveSubTab}
        onBackToLanding={() => setView('landing')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#07090E] text-[#F3F4F6] selection:bg-[#00F0FF]/30 selection:text-[#00F0FF]">
      
      {/* Navbar */}
      <Navbar 
        onOpenAppDemo={() => handleOpenApp('discover')}
        onOpenAuth={handleOpenAuth}
        onOpenRegisterSite={() => setRegisterSiteOpen(true)}
      />

      {/* Main Landing Page Sections */}
      <main>
        <HeroSection 
          onOpenRegisterSite={() => setRegisterSiteOpen(true)}
          onOpenApp={() => handleOpenApp('discover')}
        />

        <TrustBar />

        <ProblemSection />

        <BigIdeaSection 
          onOpenMethodology={scrollToMethodology}
        />

        <AttentionIndexSection 
          onOpenMethodology={scrollToDocs}
        />

        <MarketExplorer 
          onOpenAppDemo={() => handleOpenApp('discover')}
        />

        <RolesSection 
          onOpenRegisterSite={() => setRegisterSiteOpen(true)}
          onOpenAppDemo={() => handleOpenApp('terminal')}
          onOpenAuth={handleOpenAuth}
        />

        <WebsiteOwnerSection 
          onOpenRegisterSite={() => setRegisterSiteOpen(true)}
        />

        <VisitorSection 
          onOpenAuth={handleOpenAuth}
        />

        <MarketSharesSection 
          onOpenAppDemo={() => handleOpenApp('terminal')}
        />

        <TransparencySection 
          onOpenDocs={scrollToDocs}
        />

        <BotPreventionSection />

        <FlywheelSection />

        <ExpansionRoadmap />

        <TokenSection 
          onOpenDocs={scrollToDocs}
        />

        <ProtocolArchSection 
          onOpenDocs={scrollToDocs}
        />

        <CapabilitiesRoadmap />

        <JournalSection />

        <PricingSection 
          onOpenRegisterSite={() => setRegisterSiteOpen(true)}
        />

        <FAQSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenAppDemo={() => handleOpenApp('developers-api')}
        onOpenAuth={handleOpenAuth}
        onOpenRegisterSite={() => setRegisterSiteOpen(true)}
      />

      {/* Interactive Modals */}
      <AppDemoModal 
        isOpen={appDemoOpen}
        onClose={() => setAppDemoOpen(false)}
      />

      <OnboardingModal 
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />

      <RegisterSiteModal 
        isOpen={registerSiteOpen}
        onClose={() => setRegisterSiteOpen(false)}
      />

    </div>
  );
}
