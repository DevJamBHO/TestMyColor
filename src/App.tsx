import React from 'react';
import { ColorProvider } from './context/ColorContext';
import { FontProvider } from './context/FontContext';
import { ColorBlindProvider } from './context/ColorBlindContext';
import { ControlPanelsProvider } from './context/ControlPanelsContext';
import { PanelsStateProvider } from './context/PanelsStateContext';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Color from './pages/Color';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import { trackEvent } from './utils/analytics';
import ControlPanelsWrapper from './components/ControlPanelsWrapper';
import GlobalSidebarMenu from './components/GlobalSidebarMenu';
import BreadcrumbProvider from './components/ui/BreadcrumbProvider';
import useScrollToTop from './hooks/useScrollToTop';
import { usePanelsState } from './context/PanelsStateContext';

// Composant pour tracker les changements de route
const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackEvent('pageview', {
      path: location.pathname,
      search: location.search
    });
  }, [location]);

  return null;
};

// Composant interne qui utilise le contexte
const AppContent: React.FC = () => {
  // Scroll vers le haut à chaque changement de page
  useScrollToTop();
  const { isSidebarVisible } = usePanelsState();

  return (
    <>
      <BreadcrumbProvider>
        <RouteChangeTracker />
        <ControlPanelsWrapper />
        <GlobalSidebarMenu />
        <div
          id="app-content"
          style={{
            marginLeft: isSidebarVisible ? '300px' : '0',
            transition: 'margin-left 0.3s ease',
            minHeight: '100vh'
          }}
          className="app-content"
        >
          <Routes>
            <Route path="/" element={<Navigate to="/color" />} />
            <Route path="/color" element={<Color />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BreadcrumbProvider>
    </>
  );
};

const App: React.FC = () => {
  return (
    <ColorProvider>
      <FontProvider>
        <ColorBlindProvider>
          <ControlPanelsProvider>
            <PanelsStateProvider>
              <AppContent />
            </PanelsStateProvider>
          </ControlPanelsProvider>
        </ColorBlindProvider>
      </FontProvider>
    </ColorProvider>
  );
};

export default App;
