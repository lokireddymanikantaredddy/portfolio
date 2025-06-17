import React, { useState, useMemo } from 'react';
import './skills.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaDatabase, FaServer, FaPalette } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import ShinyText from '../text/ShinyText';

const skillCategories = {
  frontend: {
    title: "Frontend Development",
    skills: [
      {
        icon: <IoLogoJavascript size={32} color="#F7DF1E" />,
        title: "JavaScript",
        description: "Modern ES6+ development with async/await",
        relatedTech: ["ES6+", "TypeScript", "DOM API"],
      },
      {
        icon: <FaCode size={32} color="#61DBFB" />,
        title: "React.js",
        description: "Building responsive SPAs with React Hooks",
        relatedTech: ["Redux", "Next.js", "Router"],
      },
      {
        icon: <FaPalette size={32} color="#e34c26" />,
        title: "HTML5",
        description: "Semantic and accessible web structures",
        relatedTech: ["SEO", "A11y", "Forms"],
      },
      {
        icon: <FaPalette size={32} color="#3178C6" />,
        title: "CSS3",
        description: "Modern layouts and animations",
        relatedTech: ["Flexbox", "Grid", "SASS"],
      },
      {
        icon: <SiTailwindcss size={32} color="#38BDF8" />,
        title: "Tailwind",
        description: "Utility-first CSS framework",
        relatedTech: ["PostCSS", "Design", "UI"],
      },
      {
        icon: <MdDesignServices size={32} color="#FF7262" />,
        title: "UI/UX Design",
        description: "Creating intuitive user experiences",
        relatedTech: ["Figma", "Wireframes", "Prototypes"],
      },
    ]
  },
  backend: {
    title: "Backend Development",
    skills: [
      {
        icon: <FaServer size={32} color="#68a063" />,
        title: "Node.js",
        description: "Server-side JavaScript development",
        relatedTech: ["Express", "REST", "GraphQL"],
      },
      {
        icon: <SiMongodb size={32} color="#4DB33D" />,
        title: "MongoDB",
        description: "NoSQL database management",
        relatedTech: ["Mongoose", "Atlas", "Aggregation"],
      },
    ]
  },
  tools: {
    title: "Tools & DevOps",
    skills: [
      {
        icon: <FaDatabase size={32} color="#f1502f" />,
        title: "Git & GitHub",
        description: "Version control and collaboration",
        relatedTech: ["CI/CD", "Actions", "Git Flow"],
      },
    ]
  }
};

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.3,
        delay: Math.min(index * 0.1, 0.3)
      }}
      whileHover={{ 
        scale: 1.01,
        transition: {
          duration: 0.2
        }
      }}
    >
      <div className="skill-icon-wrapper">
        {skill.icon}
      </div>
      <h3>{skill.title}</h3>
      <p>{skill.description}</p>
      <div className="skill-tags">
        {skill.relatedTech.map((tech, i) => (
          <ShinyText 
            key={tech} 
            text={tech} 
            speed={5}
            className="tech-tag"
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = useMemo(() => {
    // Get all skills if 'all' category is selected
    const skills = activeCategory === 'all' 
      ? Object.values(skillCategories).flatMap(category => category.skills)
      : skillCategories[activeCategory].skills;

    if (!searchQuery) return skills;
    return skills.filter(skill => 
      skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.relatedTech.some(tech => 
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, activeCategory]);

  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2>My Skills</h2>
        <div className="skills-desc-container">
          <p className="skills-desc">
            Explore my comprehensive toolkit that spans frontend development, backend technologies, and cloud solutions. I bring expertise in crafting beautiful user interfaces, building robust server architectures, and implementing efficient solutions across the full development stack.
          </p>
        </div>
        
        <div className="skills-search">
          <input
            type="text"
            placeholder="Search skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-tabs">
          <motion.button
            key="all"
            className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ShinyText 
              text="All Skills"
              speed={5}
              disabled={activeCategory !== 'all'}
              className="category-text"
            />
          </motion.button>
          {Object.keys(skillCategories).map(category => (
            <motion.button
              key={category}
              className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShinyText 
                text={skillCategories[category].title}
                speed={5}
                disabled={activeCategory !== category}
                className="category-text"
              />
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <section data-category={activeCategory}>
          <motion.div
            key={activeCategory}
            className="skills-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.title} skill={skill} index={index} />
            ))}
          </motion.div>
        </section>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
