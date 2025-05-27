import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import './intro.css';

const Intro = () => {
  return (
    <section className="intro-section">
      <motion.div
        className="intro-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>Hi There, I'm</h3>
        <h1 className="mainname">
         <span className="name"> Manikanta Reddy</span>
        </h1>
        <span>I Work as</span>
        <h2 className="role gradient-text">
          <Typewriter
            words={['Full Stack Developer', 'Frontend Developer', 'ReactJS Developer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p>
          I'm a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I build responsive, dynamic, and scalable web applications that solve real-world problems and deliver seamless user experiences.
        </p>

        <div className="intro-buttons">
          <a href="#contact" className="btn hire-btn">Hire Me</a>
          <a
            href="LOKIREDDY MANIKANTA REDDY RESUME.pdf"
            download="LOKIREDDY MANIKANTA REDDY RESUME.pdf"
            className="btn resume-btn"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
