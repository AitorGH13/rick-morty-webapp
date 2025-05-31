// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const sections = [
    { label: 'Inicio', to: '/' },
    { label: 'Personajes', to: '/personajes' },
    { label: 'Lugares', to: '/lugares' },
    { label: 'Episodios', to: '/episodios' },
    { label: 'Sobre Nosotros', to: '/about' },
    { label: 'Preguntas Frecuentes', to: '/faq' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Links Desktop */}
        <div className="nav-desktop">
          {sections.map((s) => (
            <Link key={s.to} to={s.to} className="nav-link">
              {s.label}
            </Link>
          ))}
        </div>

        {/* Botón Hamburger */}
        <button
          className="nav-toggle"
          aria-label="Abrir menú"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`hamburger ${open ? 'open' : ''}`} />
        </button>

        {/* Menú Mobile */}
        <div className={`nav-mobile ${open ? 'open' : ''}`}>
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="nav-link-mobile"
              onClick={() => setOpen(false)}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
