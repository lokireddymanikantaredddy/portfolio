import React from 'react';
import './skills.css';
import uidesign from '../../assets/ui-design.png'
// import webdesign from '../../assets/website-design.png'
import reactlogo from '../../assets/reactlogo.png'
import nodelogo from '../../assets/nodelogo.png'
import mongo from '../../assets/mongo.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skilltitle'>What I do</span>
        <span className='skilldesc'> I craft full-stack solutions with clean code and modern architectures.</span>
        <div className='skillbars'>
            <div className='skillbar'>
                <img src={uidesign} alt='logo' className='skillbarimg' />
                <div className='skillbartext'>
                    <h2>WEB DEVELOPER</h2>
                    <p>Full-stack web developer specializing in building responsive, high-performance websites using modern technologies like HTML5, CSS3, JavaScript, and popular frameworks</p>
                </div>
            </div>


            <div className='skillbar'>
                <img src={reactlogo} alt='logo' className='skillbarimg' />
                <div className='skillbartext'>
                    <h2>REACT.JS DEVELOPER</h2>
                    <p>Skilled React developer with expertise in building dynamic single-page applications using React hooks, context API, and integrating with RESTful APIs and state management solutions.</p>
                </div>
            </div>

            <div className='skillbar'>
                <img src={nodelogo} alt='logo' className='skillbarimg' />
                <div className='skillbartext'>
                    <h2>NODE JS</h2>
                    <p>Full-stack JavaScript developer with strong Node.js expertise, capable of building end-to-end applications using React (frontend) + Node.js/Express (backend)</p>
                </div>
            </div>

            <div className='skillbar'>
                <img src={mongo} alt='logo' className='skillbarimg' />
                <div className='skillbartext'>
                    <h2>NODE JS</h2>
                    <p>Design NoSQL databases with efficient schema architecture, aggregation pipelines, and cloud deployment via MongoDB Atlas.</p>
                </div>
            </div>

        </div>
    </section>
  )
}


export default Skills
