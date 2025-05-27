import React from 'react';
import { Particles } from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import './background.css';

const Background = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  // Tech logos with their official colors
  const techLogos = [
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
      name: "html5"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
      name: "css3"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
      name: "react"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
      name: "nodejs"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
      name: "mongodb"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
      name: "javascript"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      color: "#06B6D4",
      name: "tailwindcss"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
      name: "git"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "#181717",
      name: "github"
    }
  ];

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "#000000",
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 1 },
              repulse: { distance: 100, duration: 0.4 },
            },
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
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              speed: 1.5,
              rotate: {
                animation: {
                  enable: true,
                  speed: 5,
                  sync: false
                }
              }
            },
            number: {
              density: { enable: true, area: 1000 },
              value: 60,
            },
            opacity: { value: 0.3,
              animation: {
                enable: true,
                speed: 1,
                sync: false
              }
            },
            shape: {
              type: "image",
              options: {
                images: techLogos.map(logo => ({
                  src: logo.src,
                  width: 20,
                  height: 20
                }))
              }
            },
            size: { 
              value: { min: 10, max: 20 },
              random: true
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Background;