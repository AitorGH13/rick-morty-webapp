import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { applyAssetBase } from './utils/assets';

import MiddelBar from './components/layout/MiddleBar';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';

import Home from './screens/Home';
import SobreNosotros from './screens/SobreNosotros';
import PreguntasFrecuentes from './screens/PreguntasFrecuentes';

import ScreenLugares from './screens/ScreenLugares';
import ScreenPersonajes from './screens/ScreenPersonajes';
import Episodios from './screens/ScreenEpisodios';

import './styles/webController.css';

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => setOpenSidebar((o) => !o);

  useEffect(() => {
    applyAssetBase();
  }, []);

  return (
    <Router>
      <div style={{ minHeight: '100vh' }}>
        <Navbar />

        <div className="header">
          <MiddelBar toggleSidebar={toggleSidebar} />
          <Sidebar open={openSidebar} toggleSidebar={toggleSidebar} />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<SobreNosotros />} />
            <Route path="/faq" element={<PreguntasFrecuentes />} />
            <Route path="/lugares" element={<ScreenLugares />} />
            <Route path="/personajes" element={<ScreenPersonajes />} />
            <Route path="/episodios" element={<Episodios />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
