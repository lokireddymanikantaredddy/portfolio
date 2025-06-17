import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp, FaHeart } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.footer 
      className='footer'
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <nav className="footer-nav">
            <a href="/">Home</a>
            <a href="#skills">Skills</a>
            <a href="#works">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <div className="footer-social">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
          <p className="footer-contact">
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
        </div>

        <div className="footer-section">
          <h3>About</h3>
          <p className="footer-about">
            Full Stack Developer passionate about creating innovative web solutions. Always eager to take on new challenges and collaborate on exciting projects.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} Manikanta Reddy. Made with <FaHeart className="heart-icon" /> in India
        </p>
        <button 
          className="scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </motion.footer>
  );
};

export default Footer;
