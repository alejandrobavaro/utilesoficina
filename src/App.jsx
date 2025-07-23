import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

//------------ESTILOS--------------//
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/scss/_01-General/_App.scss";

//------------COMPONENTES--------------//
import HeaderUnificado from "./componentes/HeaderUnificado";
import MainContent from "./componentes/MainContent";
import MainWhatsappIcon from "./componentes/MainWhatsappIcon";
import MainPublicidadSlider from "./componentes/MainPublicidadSlider";
import Footer from "./componentes/Footer";
import ContactoLogoRedes from "./componentes/ContactoLogoRedes";
import ContactoFormularioSlider from "./componentes/ContactoFormularioSlider";
import ConsultasAyuda from "./componentes/ConsultasAyuda";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Efecto para aplicar las clases de modo oscuro
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <Router>
      {/* Fondo animado */}
      <div className="background-animation">
        <div className="particles"></div>
        <div className="gradient-bg"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="content-wrapper">
        <HeaderUnificado 
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />

        <div className="main-content">
          <div className="content">
            <Routes>
              <Route path="/" element={<MainContent darkMode={darkMode} />} />
              <Route
                path="/contacto"
                element={
                  <>
                    <ContactoLogoRedes darkMode={darkMode} />
                    <ContactoFormularioSlider darkMode={darkMode} />
                  </>
                }
              />
              <Route path="/ayuda" element={<ConsultasAyuda darkMode={darkMode} />} />
            </Routes>
          </div>
        </div>

        <MainPublicidadSlider darkMode={darkMode} />
        <Footer darkMode={darkMode} />
        <MainWhatsappIcon darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;