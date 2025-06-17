import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/coding-logo.svg';
import { Link } from 'react-scroll';
import contacting from '../../assets/contact.png';
import imgmenu from '../../assets/menu.png';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    // Check scroll position immediately
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const handleLinkClick = (target) => {
    setShowMenu(false);
    const element = document.getElementById(target);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const elementHeight = element.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
      
      // Calculate the offset to show the entire section
      let offsetPosition;
      if (elementHeight < windowHeight - navHeight) {
        // If section is shorter than viewport, scroll to its top
        offsetPosition = elementPosition + window.pageYOffset - navHeight;
      } else {
        // If section is taller than viewport, scroll to show as much as possible
        offsetPosition = elementPosition + window.pageYOffset - navHeight + (elementHeight - (windowHeight - navHeight));
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img 
        src={logo} 
        alt="Coding Logo" 
        className="logo"
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.95 }}
      />

      <div className="desktopmenu">
        {['intro', 'skills', 'education', 'works', 'contact'].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              activeClass="active"
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80} // Fixed offset for all sections
              className="desktopmenulistitem"
              onClick={() => handleLinkClick(item)}
            >
              {item === 'intro' ? 'Home' : item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="desktopmenubtn"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleLinkClick('contact')}
      >
        <img src={contacting} alt="" className="desktopmenuimg" />
        Contact Me
      </motion.button>

      <motion.img 
        src={imgmenu} 
        alt="menu" 
        className="mobmenu" 
        onClick={() => setShowMenu(!showMenu)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="navmenu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {['intro', 'skills', 'education', 'works', 'contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  activeClass="active"
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80} // Fixed offset for all sections
                  className="listitem"
                  onClick={() => handleLinkClick(item)}
                >
                  {item === 'intro' ? 'Home' : item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
