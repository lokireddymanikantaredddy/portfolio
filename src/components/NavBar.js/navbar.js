import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contacting from '../../assets/contact.png'
import imgmenu from '../../assets/menu.png'

const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);


  return (
    <nav className='navbar'>
        <img src={logo} alt="logo" className='logo'/>
        <div className='desktopmenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-300} duration={500} className='desktopmenulistitem'>Clients</Link>
        </div>
        <button className='desktopmenubtn' onClick ={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }} >
        <img src={contacting} alt="" className='desktopmenuimg'/>contact me</button>

        <img src={imgmenu} alt="menu" className='mobmenu'onClick={() => setShowMenu(!showMenu)}/>
        <div className='navmenu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listitem'  onClick={() =>setShowMenu (false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={() =>setShowMenu (false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='listitem'  onClick={() =>setShowMenu (false)}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-300} duration={500} className='listitem'onClick={() =>setShowMenu (false)}>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-300} duration={500} className='listitem'onClick={() =>setShowMenu (false)}>Contact</Link>
        </div>

    </nav>
  )
}

export default Navbar
