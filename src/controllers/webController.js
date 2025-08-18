import React, { useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import MiddelBar from '../components/MiddleBar';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import Home from '../screens/Home';
import SobreNosotros from '../screens/SobreNosotros';
import PreguntasFrecuentes from '../screens/PreguntasFrecuentes';

import ScreenLugares from '../screenFunctions/screenLugares';
import ScreenPersonajes from '../screenFunctions/screenPersonajes';
import Episodios from '../screenFunctions/screenEpisodios';

import './webController.css';

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => setOpenSidebar((o) => !o);

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
            <Route path="/index" element={<Home />} />
            <Route path="/" element={<Navigate to="/index" replace />} />
            <Route path="/about" element={<SobreNosotros />} />
            <Route path="/faq" element={<PreguntasFrecuentes />} />
            <Route path="/lugares" element={<ScreenLugares />} />
            <Route path="/personajes" element={<ScreenPersonajes />} />
            <Route path="/episodios" element={<Episodios />} />
            <Route path="*" element={<Navigate to="/index" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
