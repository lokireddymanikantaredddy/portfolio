import React from 'react';
import './works.css';
import carrental from '../../assets/car rental.png';
import dashboard from '../../assets/dashboard.png';
// import portofolio3 from '../../assets/portfolio-3.png';
// import portofolio4 from '../../assets/portfolio-4.png';
// import portofolio5 from '../../assets/portfolio-5.png';
// import portofolio6 from '../../assets/portfolio-6.png';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Works = () => {
  const portfolioItems = [
    { 
      id: 1, 
      img: carrental, 
      title: "Car Rental Platform", 
      description: "Full-featured online store with cart functionality and payment integration",
      tech: "React, Node.js, MongoDB",
      demo: "https://manirentacar.netlify.app/",
      code: "https://github.com/lokireddymanikantaredddy/car-rental.io" 
    },
    { 
      id: 2, 
      img: dashboard, 
      title: "creator dashboard", 
      description: "Kanban-style productivity app with drag-and-drop interface",
      tech: "React, Firebase",
      demo: "https://creator-dashboard-nu.vercel.app/",
      code: "https://github.com/lokireddymanikantaredddy/Creator-Dashboard" 
    },
    // { 
    //   id: 3, 
    //   img: portofolio3, 
    //   title: "Health & Fitness Tracker", 
    //   description: "Workout and nutrition tracker with data visualization",
    //   tech: "React, Chart.js, Express",
    //   demo: "https://fitness-demo.example.com",
    //   code: "https://github.com/yourusername/fitness-tracker" 
    // },
    // { 
    //   id: 4, 
    //   img: portofolio4, 
    //   title: "Social Media Dashboard", 
    //   description: "Analytics dashboard for social media metrics",
    //   tech: "React, D3.js, Node.js",
    //   demo: "https://social-demo.example.com",
    //   code: "https://github.com/yourusername/social-dashboard" 
    // },
    // { 
    //   id: 5, 
    //   img: portofolio5, 
    //   title: "Restaurant Booking System", 
    //   description: "Reservation platform with table management",
    //   tech: "React, MongoDB, Stripe API",
    //   demo: "https://restaurant-demo.example.com",
    //   code: "https://github.com/yourusername/booking-system" 
    // },
    // { 
    //   id: 6, 
    //   img: portofolio6, 
    //   title: "Weather Forecast App", 
    //   description: "Real-time weather data with 5-day forecasts",
    //   tech: "React, OpenWeather API",
    //   demo: "https://weather-demo.example.com",
    //   code: "https://github.com/yourusername/weather-app" 
    // }
  ];

  return (
    <section id='works' className='works-section'>
      <h2 className='works-title'>My Portfolio</h2>
      <p className='works-desc'>
        Here are some of my featured projects. Each one was built to solve specific problems
        while demonstrating different technical capabilities.
      </p>
      
      <div className='works-grid'>
        {portfolioItems.map((item) => (
          <div key={item.id} className='portfolio-item'>
            <img 
              src={item.img} 
              className='portfolio-img' 
              alt={`Screenshot of ${item.title}`}
            />
            <div className='portfolio-overlay'>
              <div className='portfolio-content'>
                <h3>{item.title}</h3>
                <p className='portfolio-tech'>{item.tech}</p>
                <p className='portfolio-desc'>{item.description}</p>
                <div className='portfolio-links'>
                  <a 
                    href={item.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='demo-link'
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a 
                    href={item.code} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='code-link'
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className='works-btn'>
        View Full Portfolio
      </button>
    </section>
  );
}

export default Works;