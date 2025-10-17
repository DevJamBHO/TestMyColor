import React from 'react';
import { ColorProvider } from './context/ColorContext';
import { FontProvider } from './context/FontContext';
import { ColorBlindProvider } from './context/ColorBlindContext';
import { ControlPanelsProvider } from './context/ControlPanelsContext';
import { PanelsStateProvider } from './context/PanelsStateContext';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Color from './pages/Color';
import Typo from './pages/Typo';
import RGAALab from './pages/RGAALab';
import DesignSystem from './pages/DesignSystem';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import { trackEvent } from './utils/analytics';
import SmartPalette from './pages/SmartPalette';
import ControlPanelsWrapper from './components/ControlPanelsWrapper';
import GlobalSidebarMenu from './components/GlobalSidebarMenu';
import Breadcrumb from './components/Breadcrumb';
import BreadcrumbProvider from './components/ui/BreadcrumbProvider';

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

const App: React.FC = () => {
  return (
    <ColorProvider>
      <FontProvider>
        <ColorBlindProvider>
          <ControlPanelsProvider>
            <PanelsStateProvider>
              <BreadcrumbProvider>
                <RouteChangeTracker />
                <ControlPanelsWrapper />
                <GlobalSidebarMenu />
                <div id="app-content" style={{ marginLeft: '300px' }}>
                  <Routes>
                    <Route path="/" element={<Navigate to="/color" />} />
                    <Route path="/color" element={<Color />} />
                    <Route path="/typo" element={<Typo />} />
                    <Route path="/smart-palette" element={<SmartPalette />} />
                    <Route path="/rgaa-lab" element={<RGAALab />} />
                    <Route path="/design-system" element={<DesignSystem />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </BreadcrumbProvider>
            </PanelsStateProvider>
          </ControlPanelsProvider>
        </ColorBlindProvider>
      </FontProvider>
    </ColorProvider>
  );
};

export default App;
