import React from 'react';
import './WaveBackground.css';

const WaveBackground = () => {
  return (
    <div className="wave-container">
      {/* Animated Wave SVG */}
      <svg 
        className="waves" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" 
        preserveAspectRatio="none" 
        shapeRendering="auto"
      >
        <defs>
          <path 
            id="gentle-wave" 
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" 
          />
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(100, 255, 218, 0.3)" />
            <stop offset="50%" stopColor="rgba(100, 255, 218, 0.1)" />
            <stop offset="100%" stopColor="rgba(100, 255, 218, 0.3)" />
          </linearGradient>
        </defs>
        <g className="parallax">
          <use 
            xlinkHref="#gentle-wave" 
            x="48" 
            y="0"
            style={{
              filter: 'url(#wave-gradient)'
            }}
          />
          <use 
            xlinkHref="#gentle-wave" 
            x="48" 
            y="3"
            style={{
              filter: 'url(#wave-gradient)'
            }}
          />
          <use 
            xlinkHref="#gentle-wave" 
            x="48" 
            y="5"
            style={{
              filter: 'url(#wave-gradient)'
            }}
          />
          <use 
            xlinkHref="#gentle-wave" 
            x="48" 
            y="7"
            style={{
              filter: 'url(#wave-gradient)'
            }}
          />
        </g>
      </svg>

      {/* Glow Effect */}
      <div className="wave-glow" />
    </div>
  );
};

export default WaveBackground; 