import React from 'react';
import { ColorProvider } from './context/ColorContext';
import { FontProvider } from './context/FontContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import Color from './pages/Color';
import Typo from './pages/Typo';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <ColorProvider>
      <FontProvider>
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
