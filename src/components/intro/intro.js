import React, { useState, useEffect } from 'react';
import './intro.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import RotatingText from '../text/RotatingText';
import ProfileCard from '../profile/ProfileCard';

const Intro = () => {
  const roles = [
    'Full Stack Developer',
    'Frontend Developer',
    'ReactJS Developer',
    'MERN Stack Developer'
  ];

  return (
    <section className="intro-section">
      <div className="intro-container">
        <motion.div
          className="intro-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="greeting">
            Hi There <span className="wave-emoji">👋</span>
          </h3>
          
          <div className="name-wrapper">
            <h2 className="pre-name">I'm</h2>
            <h1 className="name-title">Manikanta Reddy</h1>
          </div>
          
          <div className="role-container">
            <h2 className="static-text">I'm a</h2>
            <RotatingText
              texts={roles}
              mainClassName="role-text"
              splitLevelClassName="role-word"
              elementLevelClassName="role-char"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "120%" }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              staggerFrom="first"
              staggerDuration={0.025}
              rotationInterval={2000}
            />
          </div>

          <p className="intro-description">
            I am a passionate Full Stack Developer specializing in the MERN stack and modern web technologies. With a strong foundation in both frontend and backend development, I create responsive and user-centric applications that deliver exceptional experiences. From crafting beautiful interfaces to building robust server architectures, I bring ideas to life through clean code and innovative solutions.
          </p>

          <div className="intro-buttons">
            <motion.a 
              href="#contact" 
              className="btn hire-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
            <motion.a
              href="LOKIREDDY MANIKANTA REDDY RESUME.pdf"
              download="LOKIREDDY MANIKANTA REDDY RESUME.pdf"
              className="btn resume-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </div>

          <div className="social-links">
            <motion.a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="intro-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ProfileCard
            name="Manikanta Reddy"
            title="Full Stack Developer"
            handle="manikantareddy"
            status="Available for Work"
            contactText="Let's Connect"
            avatarUrl="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=portfolio&backgroundColor=gradient&backgroundRotation=360&backgroundType=gradientLinear&glasses=variant01&hair=short16&mouth=variant26&skinColor=f2d3b1"
            miniAvatarUrl="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=portfolio&backgroundColor=b6e3f4&glasses=variant01&hair=short16&mouth=variant26&skinColor=f2d3b1"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            behindGradient="radial-gradient(circle at 50% 50%, #00ffae 0%, #073aff 100%)"
            innerGradient="linear-gradient(145deg, #60496e 0%, #71C4FF 100%)"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
