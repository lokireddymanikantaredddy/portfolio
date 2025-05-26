import React from 'react';
import { motion } from 'framer-motion';
import './footer.css';

const Footer = () => {
  return (
    <motion.footer 
      className='footer'
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span>© {new Date().getFullYear()} Manikanta Reddy. All rights reserved.</span>
    </motion.footer>
  );
};

export default Footer;
