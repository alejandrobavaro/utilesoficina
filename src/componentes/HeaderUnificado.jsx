import React from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import "../assets/scss/_03-Componentes/_HeaderUnificado.scss";

function HeaderUnificado({ darkMode, toggleDarkMode }) {
  return (
    <header className={`header-simplificado ${darkMode ? 'dark-mode' : ''}`}>
      <div className="contenedor-header">
        {/* Logo que lleva al inicio */}
        <Link to="/" className="logo-link">
          <img 
            src="/img/02-logos/logoutilesoficina (2).png" 
            alt="Logo Útiles de Oficina" 
            className="logo-img" 
          />
        </Link>
        
        {/* Botón de modo oscuro/claro */}
        <button 
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </header>
  );
}

export default HeaderUnificado;