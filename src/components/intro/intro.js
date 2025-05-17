import React from 'react'
import './intro.css';
// import bg from '../../assets/image.png';
import btnimg from '../../assets/hireme.png';
import { Link } from 'react-scroll';
// import myresume from '../../assets/resume.pdf'


const Intro = () => {
  return (
    <section id="intro">
        <div className='introcontent'>
            <span className='hello'>Hello,</span>
            <span className='introtext'>I'am <span className='introname'>Manikanta Reddy</span><br/>Web Developer
            <p className='intropara'> I am a Web Developer with experience in creating user friendly websites. </p>
            <Link><button className='btn'><img src= {btnimg} alt='hier me' className='btnimg'/>Hier Me</button></Link>
            <Link><a href='resume.pdf' download='Resume.pdf'><button className='btn' >Resume</button></a></Link>
            </span>

        </div>
        {/* <img src={bg} alt="profile" className='bg'/> */}
    </section>
  )
}

export default Intro;
