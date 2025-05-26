import React from 'react';
import './works.css';
import carrental from '../../assets/car rental.png';
import dashboard from '../../assets/dashboard.png';
import portfolio1 from '../../assets/portfolio-1.png';
import { FaExternalLinkAlt, FaGithub,} from 'react-icons/fa';
import { motion } from 'framer-motion';

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
      title: "Creator Dashboard",
      description: "Kanban-style productivity app with drag-and-drop interface",
      tech: "React, Firebase",
      demo: "https://creator-dashboard-nu.vercel.app/",
      code: "https://github.com/lokireddymanikantaredddy/Creator-Dashboard"
    },
    {
      id: 3,
      img: portfolio1,
      title: "youtube-transcript summerizer",
      description: "summerize your youtube video with ease by using your preffered ai tool and prompt",
      tech: "React, Firebase",
      demo: "https://youtu.be/8fhrsuhGuaI?si=wpwJoSq4q9TParol",
      code: "https://github.com/lokireddymanikantaredddy/youtube-video-transcript-summarizer"
    },
  ];

  return (
    <section id='works' className='works-section'>
      <motion.h2
        className='works-title'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Portfolio
      </motion.h2>

      <motion.p
        className='works-desc'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Here are some of my featured projects. Each one was built to solve specific problems
        while demonstrating different technical capabilities.
      </motion.p>

      <div className='works-grid'>
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            className='portfolio-item'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="portfolio-image-wrapper">
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
                    <a href={item.demo} target="_blank" rel="noopener noreferrer" className='demo-link'>
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a href={item.code} target="_blank" rel="noopener noreferrer" className='code-link'>
                      <FaGithub /> View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className='works-btn-wrapper'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button className='works-btn'>
          View Full Portfolio
        </button>
      </motion.div>
    </section>
  );
};

export default Works;
