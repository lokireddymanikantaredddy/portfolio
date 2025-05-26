import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contacting from '../../assets/contact.png';
import imgmenu from '../../assets/menu.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img src={logo} alt="logo" className="logo" />

      <div className="desktopmenu">
        {['intro', 'skills', 'works', 'contact'].map((item, index) => (
          <Link
            key={item}
            activeClass="active"
            to={item}
            spy={true}
            smooth={true}
            offset={item === 'contact' ? -300 : -100}
            duration={500}
            className="desktopmenulistitem"
          >
            {item === 'intro' ? 'Home' : item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>

      <motion.button
        className="desktopmenubtn"
        whileHover={{ scale: 1.05 }}
        onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <img src={contacting} alt="" className="desktopmenuimg" />
        Contact Me
      </motion.button>

      <img src={imgmenu} alt="menu" className="mobmenu" onClick={() => setShowMenu(!showMenu)} />

      {showMenu && (
        <motion.div
          className="navmenu"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {['intro', 'skills', 'works', 'clients', 'contact'].map((item) => (
            <Link
              key={item}
              activeClass="active"
              to={item}
              spy={true}
              smooth={true}
              offset={item === 'contact' || item === 'clients' ? -300 : -100}
              duration={500}
              className="listitem"
              onClick={() => setShowMenu(false)}
            >
              {item === 'intro' ? 'Home' : item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
