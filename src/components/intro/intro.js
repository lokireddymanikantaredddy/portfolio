import React from 'react';
import { motion } from 'framer-motion';
import './intro.css';

const Intro = () => {
  return (
    <div className="intro-section">
      <motion.div
        className="intro-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>Hello,</h3>
        <h1>
          I'm <span className="gradient-text">Manikanta Reddy</span>
        </h1>
        <p>
          A passionate web developer focused on crafting clean, scalable, and user-friendly experiences.
        </p>

        <div className="intro-buttons">
          <a href="#contact" className="btn hire-btn">Hire Me</a>
          <a href="LOKIREDDY MANIKANTA REDDY RESUME.pdf" download="LOKIREDDY MANIKANTA REDDY RESUME.pdf" className="btn resume-btn">Resume</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
