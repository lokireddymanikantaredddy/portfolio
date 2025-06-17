import React, { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
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
    fpsLimit: 30, // Reduced FPS
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: false // Disabled click interactions
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
        value: techLogos.map(logo => logo.color)
      },
      links: {
        color: "#64ffda",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce"
        },
        random: false,
        speed: 1, // Reduced speed
        straight: false,
        rotate: {
          animation: {
            enable: false // Disabled rotation
          }
        }
      },
      number: {
        density: {
          enable: true,
          area: 1000 // Increased area = fewer particles
        },
        value: 15 // Reduced number of particles
      },
      opacity: {
        value: 0.6
      },
      shape: {
        type: "circle", // Changed to simple circles instead of images
        options: {
          circle: {
            blur: 0
          }
        }
      },
      size: {
        value: { min: 6, max: 8 },
        animation: {
          enable: false // Disabled size animation
        }
      }
    },
    smooth: true
  };

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
      />
    </div>
  );
};

export default Background;