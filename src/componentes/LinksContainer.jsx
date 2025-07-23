import React from "react";
import "../assets/scss/_03-Componentes/_LinksConteiner.scss"; // Cambiado a importación relativa


const LinksContainer = ({ darkMode }) => {
  // Lista de aplicaciones con sus datos
  const apps = [
    {
      name: "Calculadora Retro",
      url: "https://calculadoraretro.netlify.app/",
      logo: "/img/02-logos/logocalculadoraretro.png",
      color: "#6c5ce7" // Morado
    },
    {
      name: "Tareas en Proceso",
      url: "https://tareasenproceso.netlify.app/",
      logo: "/img/02-logos/logotareasenproceso.png",
      color: "#00cec9" // Turquesa
    },
    {
      name: "Mini Notas",
      url: "https://mininotas.netlify.app/",
      logo: "/img/02-logos/logomininotas.png",
      color: "#fd79a8" // Rosa
    },
    {
      name: "Mi Agendita",
      url: "https://miagendita.netlify.app/",
      logo: "/img/02-logos/logomiagendita.png",
      color: "#a29bfe" // Morado claro
    },
    {
      name: "DolarChito",
      url: "https://dolarchito.netlify.app/",
      logo: "/img/02-logos/logodolarchito.png",
      color: "#55efc4" // Verde agua
    },
    {
      name: "Temporizador",
      url: "https://temporizadordetareas.netlify.app/",
      logo: "/img/02-logos/logotemporizadordetareas.png",
      color: "#ffeaa7" // Amarillo
    },
    {
      name: "Mis Gastos",
      url: "https://misgastosintegrales-porfolio.netlify.app/login",
      logo: "/img/02-logos/logomisgastosintegrales.png",
      color: "#fab1a0" // Naranja
    },
    {
      name: "Mis Ingresos",
      url: "https://misingresosintegrales-porfolio.netlify.app/login",
      logo: "/img/02-logos/logomisgastos2.png",
      color: "#74b9ff" // Azul
    }
  ];

  return (
    <div className={`links-container ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Útiles de Oficina</h1>
      <p className="subtitle">Acceso rápido a tus herramientas</p>
      
      <div className="links-grid">
        {apps.map((app, index) => (
          <a 
            key={index} 
            href={app.url} 
            className="app-link"
            target="_blank" 
            rel="noopener noreferrer"
            style={{"--hover-color": app.color}}
          >
            <div className="app-logo-container">
              <img src={app.logo} alt={app.name} className="app-logo" />
              <div className="logo-hover-effect"></div>
            </div>
            <span className="app-name">{app.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksContainer;