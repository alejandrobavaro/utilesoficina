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
  /**
   * Estado para el modo oscuro con inicialización desde localStorage
   * - Verifica si hay una preferencia guardada en localStorage
   * - Si no existe, usa true (modo oscuro) como valor predeterminado
   */
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode ? JSON.parse(savedMode) : true; // Default true (modo oscuro)
    } catch (error) {
      console.error("Error al leer darkMode de localStorage:", error);
      return true; // Fallback a modo oscuro si hay error
    }
  });
  
  /**
   * Efecto para manejar el modo oscuro:
   * 1. Guarda la preferencia en localStorage cuando cambia
   * 2. Aplica/remueve las clases CSS para el modo oscuro
   */
  useEffect(() => {
    try {
      // 1. Persistencia: Guardar en localStorage
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
      
      // 2. Aplicar clases CSS
      if (darkMode) {
        document.body.classList.add('dark-mode');
        document.documentElement.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
        document.documentElement.classList.remove('dark-mode');
      }
    } catch (error) {
      console.error("Error al manejar darkMode:", error);
    }
  }, [darkMode]);

  return (
    <Router>
      {/* Fondo animado simplificado */}
      <div className="background-animation">
        <div className="gradient-bg"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="content-wrapper">
        {/* Header con capacidad de cambiar el modo */}
        <HeaderUnificado 
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />

        {/* Contenido principal enrutado */}
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

        {/* Componentes adicionales */}
        <MainPublicidadSlider darkMode={darkMode} />
        <Footer darkMode={darkMode} />
        <MainWhatsappIcon darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;