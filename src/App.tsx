import React from 'react';
import { ColorProvider } from './context/ColorContext';
import { FontProvider } from './context/FontContext';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Color from './pages/Color';
import Typo from './pages/Typo';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import { trackEvent } from './utils/analytics';

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
        <RouteChangeTracker />
        <Routes>
          <Route path="/" element={<Navigate to="/color" />} />
          <Route path="/color" element={<Color />} />
          <Route path="/typo" element={<Typo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FontProvider>
    </ColorProvider>
  );
};

export default App;
