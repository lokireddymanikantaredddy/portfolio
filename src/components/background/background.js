import React, { useCallback } from 'react';
import { Particles } from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import './background.css';

const Background = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Reduced number of tech logos and simplified animations
  const techLogos = [
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
      name: "react"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
      name: "javascript"
    }
  ];

  const particleOptions = {
    autoPlay: true,
    background: {
      color: "transparent",
      opacity: 1
    },
    fullScreen: false,
    detectRetina: true,
    fpsLimit: 30,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: false
        },
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#64ffda"
      },
      links: {
        color: "#64ffda",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        outModes: {
          default: "bounce"
        },
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.2
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 3 }
      }
    }
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particleOptions}
      className="particles-container"
    />
  );
};

export default Background;