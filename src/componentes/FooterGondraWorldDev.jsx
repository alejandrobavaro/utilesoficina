import React from "react";
import { FiCode } from "react-icons/fi";
import "../assets/scss/_03-Componentes/_FooterGondraWorldDev.scss";

function FooterGondraWorldDev({ darkMode }) {
  return (
    <div className={`trademarkGondraFooter ${darkMode ? 'dark-mode' : ''}`}>
      <div className="textoFooterAutor">
        <a
          href="https://alejandrobavaro.github.io/gondraworld-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-dev-link"
        >
          <div className="textoFooterGondraWorld">
            <FiCode className="icon-spin" /> Gondra World Dev <FiCode className="icon-spin reverse" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default FooterGondraWorldDev;