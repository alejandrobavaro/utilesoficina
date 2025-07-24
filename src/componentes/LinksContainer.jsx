import React from "react";
import "../assets/scss/_03-Componentes/_LinksConteiner.scss";

/**
 * Componente principal que muestra una grilla de aplicaciones como accesos directos
 * @param {boolean} darkMode - Indica si el modo oscuro está activado
 * @returns {JSX.Element} - Renderiza la sección de accesos directos
 */
const LinksContainer = ({ darkMode }) => {
  // Array de aplicaciones con sus propiedades
  const apps = [
    {
      name: "Calculadora Retro",
      url: "https://calculadoraretro.netlify.app/",
      logo: "/img/02-logos/logocalculadoraretro1a.png"
    },
    {
      name: "Tareas en Proceso",
      url: "https://tareasenproceso.netlify.app/",
      logo: "/img/02-logos/logotareasenproceso1a.png"
    },
    {
      name: "Mini Notas",
      url: "https://mininotas.netlify.app/",
      logo: "/img/02-logos/logomininotas1a.png"
    },
    {
      name: "Mi Agendita",
      url: "https://miagendita.netlify.app/",
      logo: "/img/02-logos/logomiagendita1a.png"
    },
    {
      name: "DolarChito",
      url: "https://dolarchito.netlify.app/",
      logo: "/img/02-logos/logodolarchito1a.png"
    },
    {
      name: "Temporizador",
      url: "https://temporizadordetareas.netlify.app/",
      logo: "/img/02-logos/logotemporizadordetareas1a.png"
    },
    {
      name: "Mis Gastos",
      url: "https://misgastosintegrales-porfolio.netlify.app/login",
      logo: "/img/02-logos/logomisgastosintegrales1a.png"
    },
    {
      name: "Mis Ingresos",
      url: "https://misingresosintegrales-porfolio.netlify.app/login",
      logo: "/img/02-logos/logomisingresos1a.png"
    }
  ];

  return (
    /**
     * Contenedor principal con clase condicional para modo oscuro
     * - `links-container`: Clase base para estilos
     * - `dark-mode`: Clase adicional cuando está activado el modo oscuro
     */
    <div className={`links-container ${darkMode ? 'dark-mode' : ''}`}>
      {/* Contenedor del título con logo y texto */}
      <div className="title-container">
        {/* Logo principal del componente */}
        <img className="main-logo" src="/img/02-logos/logoutilesoficina1a.png" alt="Útiles de Oficina" />
        {/* Texto del título */}
        <div className="title-text">
          <h1>Útiles Oficina</h1>
          <p className="subtitle">Acceso rápido a tus herramientas</p>
        </div>
      </div>
      
      {/* Grilla de aplicaciones */}
      <div className="links-grid">
        {apps.map((app, index) => (
          /**
           * Enlace a cada aplicación
           * - `key`: Identificador único para React
           * - `href`: URL de destino
           * - `target="_blank"`: Abre en nueva pestaña
           * - `rel="noopener noreferrer"`: Seguridad para enlaces externos
           */
          <a 
            key={index} 
            href={app.url} 
            className="app-link"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {/* Contenedor del logo con tamaño aumentado */}
            <div className="app-logo-container">
              {/* Imagen del logo con descripción accesible */}
              <img src={app.logo} alt={app.name} className="app-logo" />
            </div>
            
            {/* Nombre de la aplicación */}
            <span className="app-name">{app.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksContainer;