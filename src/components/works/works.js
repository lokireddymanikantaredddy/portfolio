import React, { useState, useEffect } from 'react';
import './works.css';
import { FaTimes, FaSearch, FaArrowRight } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { BiCodeAlt } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, projectsData, getProjectsByCategory, searchProjects } from './projectsData';

const MetricItem = ({ value, label }) => (
  <div className="metric">
    <span className="metric-value">{value}</span>
    <span>{label}</span>
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="modal-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-header">
          <h2>{project.title}</h2>
          <span className="project-status" data-status={project.status}>
            {project.status}
          </span>
        </div>

        <div className="project-gallery">
          {project.images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.url} alt={image.caption} />
              <p className="image-caption">{image.caption}</p>
            </div>
          ))}
        </div>

        <div className="project-info">
          <div className="info-section">
            <h3>Overview</h3>
            <p>{project.fullDescription}</p>
          </div>

          <div className="info-section">
            <h3>Technologies</h3>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  <tech.icon />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="info-grid">
            <div className="info-section">
              <h3>Key Features</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="info-section">
              <h3>Challenges & Solutions</h3>
              <div className="challenges-solutions">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="challenge-solution">
                    <p className="challenge"><strong>Challenge:</strong> {challenge}</p>
                    <p className="solution"><strong>Solution:</strong> {project.solutions[index]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3>Project Metrics</h3>
            <div className="metrics-grid">
              {Object.entries(project.metrics).map(([key, value]) => (
                <MetricItem key={key} value={value} label={key} />
              ))}
            </div>
          </div>

          <div className="project-links">
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="demo-link">
              <HiOutlineExternalLink /> Live Demo
            </a>
            <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="code-link">
              <BiCodeAlt /> View Code
            </a>
          </div>

          <div className="project-meta">
            <p><strong>Role:</strong> {project.role}</p>
            <p><strong>Completed:</strong> {new Date(project.completionDate).toLocaleDateString('en-US', { year: 'numeric' })}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let filtered = searchQuery 
        ? searchProjects(searchQuery)
        : getProjectsByCategory(selectedCategory);
      setFilteredProjects(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  return (
    <section id='works' className='works-section'>
      <motion.h2
        className='works-title'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="works-desc-container">
        <p className="works-desc">
          Welcome to my project showcase! Here you'll find a collection of my work that demonstrates my expertise in modern web development. Each project represents unique challenges solved with cutting-edge technologies, from full-stack applications to specialized tools, showcasing my commitment to creating robust and engaging user experiences.
        </p>
      </div>

      <div className="portfolio-controls">
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className='works-grid'>
        <AnimatePresence>
          {isLoading ? (
            <motion.div
              className="loading-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="loading-spinner"></div>
            </motion.div>
          ) :
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className='portfolio-item'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="portfolio-image-wrapper">
                  <img
                    src={project.images[0].url}
                    className='portfolio-img'
                    alt={`Screenshot of ${project.title}`}
                    loading="lazy"
                  />
                  <div className='portfolio-overlay'>
                    <div className='portfolio-content'>
                      <h3>{project.title}</h3>
                      <div className="tech-tags">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag">
                            <tech.icon /> {tech.name}
                          </span>
                        ))}
                      </div>
                      <p className='portfolio-desc'>{project.shortDescription}</p>
                      <div className='portfolio-metrics'>
                        <div className="metrics-row">
                          {Object.entries(project.metrics)
                            .filter(([key]) => key === 'users' || key === 'bookings')
                            .map(([key, value]) => (
                              <MetricItem key={key} value={value} label={key} />
                            ))}
                        </div>
                        <div className="see-more">
                          See more details <FaArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          }
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;
