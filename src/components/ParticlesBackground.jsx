import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// 1. Definimos el componente
const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false, // LO PONEMOS EN FALSE PARA CONTROLARLO NOSOTROS CON CSS
        zIndex: -1,
      },
      background: {
        color: {
          value: "#0f172a",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#2dd4bf",
        },
        links: {
          color: "#2dd4bf",
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      // 2. ENVOLVEMOS LAS PARTÍCULAS EN UN DIV FIJO PARA QUE NO AFECTEN AL SCROLL
      <div style={{ 
          position: "fixed", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          zIndex: -1 
      }}>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="h-full w-full" // Asegura que ocupe todo el div padre
        />
      </div>
    );
  }

  return <></>;
};

// 3. LA MAGIA: React.memo EVITA QUE SE RECARGUE AL HACER SCROLL
const ParticlesBackground = React.memo(ParticlesComponent);

export default ParticlesBackground;