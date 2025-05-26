import React from 'react';
import './skills.css';
import { FaReact, FaCss3Alt, FaNodeJs, FaHtml5, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss,  } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io5";

const skills = [
  {
    icon: <FaHtml5 size={40} color="#e34c26" />,
    title: "HTML",
    description: "Experienced in HTML5, CSS3, and JavaScript to build fast, accessible, and SEO-friendly websites."
  },
  {
    icon: <FaCss3Alt size={40} color="#3178C6" />,
    title: "CSS",
    description: "Experienced in HTML5, CSS3, and JavaScript to build fast, accessible, and SEO-friendly websites."
  },
  {
    icon: <FaReact size={40} color="#61DBFB" />,
    title: "React.js Developer",
    description: "Building responsive SPAs with React Hooks, Context API, and RESTful APIs integration."
  },
  {
    icon: <FaNodeJs size={40} color="#68a063" />,
    title: "Node.js Developer",
    description: "Creating scalable backend systems using Node.js and Express."
  },
  {
    icon: <SiMongodb size={40} color="#4DB33D" />,
    title: "MongoDB Design",
    description: "Designing efficient NoSQL schemas and deploying via MongoDB Atlas."
  },
  {
    icon: <IoLogoJavascript size={40} color="#FFFF00" />,
    title: "JavaScript",
    description: "Writing robust and maintainable code using static typing and modern JavaScript features."
  },
  {
    icon: <SiTailwindcss size={40} color="#38BDF8" />,
    title: "Tailwind CSS",
    description: "Crafting beautiful, responsive UIs with utility-first Tailwind CSS framework."
  },
  {
    icon: <FaGitAlt size={40} color="#f1502f" />,
    title: "Git & GitHub",
    description: "Version control and collaboration using Git, GitHub flow, and branching strategies."
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="skills-title">What I Do</h2>
      <p className="skills-subtitle">I craft full-stack solutions with clean code and modern architectures.</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
