import React from "react";
import { Link } from "react-router-dom";
import FooterGondraWorldDev from './FooterGondraWorldDev';
import { FiInstagram, FiYoutube, FiFacebook, FiTwitter } from "react-icons/fi";
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer({ darkMode }) {
  return (
    <footer className={`footer-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="footer-content">
        <div className="footer-columns">
          {/* Columna izquierda con logo */}
          <div className="footer-column">
            <a href="#" className="footer-logo-link">
              <img
                className="footer-logo"
                src="/img/02-logos/logoutilesoficina.png"
                alt="Logo Útiles de Oficina"
              />
            </a>
          </div>
          
          {/* Columna central con redes sociales */}
          <div className="footer-column">
            <div className="social-links">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <FiInstagram className="social-icon" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="YouTube"
              >
                <FiYoutube className="social-icon" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <FiFacebook className="social-icon" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <FiTwitter className="social-icon" />
              </a>
            </div>
          </div>
          
          {/* Columna derecha con logo */}
          <div className="footer-column">
            <a href="#" className="footer-logo-link">
              <img
                className="footer-logo"
                src="/img/02-logos/logoutilesoficina.png"
                alt="Logo Útiles de Oficina"
              />
            </a>
          </div>
        </div>
        
        {/* Divisor animado */}
        <div className="footer-divider"></div>
        
        {/* Copyright y marca */}
        <div className="footer-copyright">
          <FooterGondraWorldDev darkMode={darkMode} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;