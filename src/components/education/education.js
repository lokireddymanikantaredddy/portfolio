import React, { useState } from 'react';
import './education.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaMedal, FaUniversity, FaSchool, FaBook, FaLightbulb } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

const educationData = [
  {
    school: "Jain University",
    icon: <FaUniversity size={24} />,
    degree: "Bachelor of Technology",
    location: "Bangalore, Karnataka",
    year: "2020 - 2024",
    status: "completed",
    progress: 100,
    description: "Computer Science and Engineering",
    achievements: [
      "CGPA: 8.0",
      "Specialized in Full Stack Development"
    ],
    courses: [
      {
        name: "Data Structures & Algorithms",
        topics: ["Arrays & Strings", "Trees & Graphs", "Dynamic Programming", "Competitive Programming"]
      },
      {
        name: "Web Development",
        topics: ["Frontend Frameworks", "Backend Development", "Database Design", "API Development"]
      },
      {
        name: "Database Management",
        topics: ["MongoDB", "MySQL", "Data Modeling"]
      },
      {
        name: "Cloud Computing",
        topics: ["AWS", "DevOps"]
      }
    ]
  },
  {
    school: "Guru's junior college",
    icon: <MdSchool size={24} />,
    degree: "Intermediate (10+2)",
    location: "Guntur, Andhra Pradesh",
    year: "2018 - 2020",
    status: "completed",
    progress: 100,
    description: "Science Stream with Mathematics and Computer Science",
    achievements: [
      "Scored 9.09 in board exams",
      "Mathematics Club Member"
    ],
    courses: [
      {
        name: "Mathematics",
        topics: ["Calculus", "Algebra", "Statistics", "Linear Algebra"]
      },
      {
        name: "Physics",
        topics: ["Mechanics", "Electromagnetism", "Modern Physics", "Quantum Mechanics"]
      },
      {
        name: "Chemistry",
        topics: ["Organic", "Inorganic", "Physical", "Biochemistry"]
      },
      {
        name: "Computer Science",
        topics: ["Programming Basics", "Data Types", "Algorithms", "Computer Networks"]
      }
    ]
  },
  {
    school: "Bell and Bennett High School",
    icon: <FaSchool size={24} />,
    degree: "Secondary School",
    location: "Addanki, Andhra Pradesh",
    year: "2016 - 2018",
    status: "completed",
    progress: 100,
    description: "CBSE with Science and Mathematics Focus",
    achievements: [
      "Scored 8.8 in board exams",
      "Active in Science Club"
    ],
    courses: [
      {
        name: "Mathematics",
        topics: ["Geometry", "Algebra", "Arithmetic", "Calculus"]
      },
      {
        name: "Science",
        topics: ["Physics", "Chemistry", "Biology", "Computer Science"]
      },
      {
        name: "English",
        topics: ["Literature", "Grammar", "Composition", "Public Speaking"]
      },
      {
        name: "Social Studies",
        topics: ["History", "Geography", "Civics", "Economics"]
      }
    ]
  }
];

const TimelineItem = ({ edu, index, isSelected, onClick }) => {
  const itemRef = React.useRef(null);
  const prevSelectedRef = React.useRef(isSelected);

  React.useEffect(() => {
    // Only scroll if the item is being opened (not closed)
    if (isSelected && !prevSelectedRef.current) {
      const scrollToContent = () => {
        if (itemRef.current) {
          const navHeight = 80; // Height of the navbar
          const itemRect = itemRef.current.getBoundingClientRect();
          const itemHeight = itemRect.height;
          const windowHeight = window.innerHeight;
          const scrollPosition = window.pageYOffset + itemRect.top - navHeight;
          
          // If the expanded item is taller than the viewport, scroll to show as much as possible
          if (itemHeight > windowHeight - navHeight) {
            window.scrollTo({
              top: scrollPosition + (itemHeight - (windowHeight - navHeight)),
              behavior: 'smooth'
            });
          } else {
            // If the item fits in viewport, scroll to its top
            window.scrollTo({
              top: scrollPosition,
              behavior: 'smooth'
            });
          }
        }
      };

      // Wait for the content to expand before scrolling
      setTimeout(scrollToContent, 100);
    }
    prevSelectedRef.current = isSelected;
  }, [isSelected]);

  return (
    <motion.div
      ref={itemRef}
      className={`timeline-item ${isSelected ? 'selected' : ''}`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="timeline-content">
        <div className="timeline-marker">
          <FaGraduationCap size={20} />
        </div>
        <motion.div
          className="education-card"
          whileHover={{ scale: 1.01 }}
          layout="position"
        >
          <div className="education-header">
            <div className="school-info">
              <div className="school-icon">
                {edu.icon}
              </div>
              <h3>{edu.school}</h3>
            </div>
            <span className="year-badge">{edu.year}</span>
          </div>
          <div className="education-details">
            <h4>{edu.degree}</h4>
            <p className="location">
              <FaMapMarkerAlt /> {edu.location}
            </p>

            <AnimatePresence mode="wait">
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="expanded-content"
                >
                  <div className="achievements">
                    <h5>
                      <FaMedal /> Achievements
                    </h5>
                    <ul>
                      {edu.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="courses">
                    <h5>Key Courses</h5>
                    <div className="course-list">
                      {edu.courses.map((course, i) => (
                        <div
                          key={i}
                          className="course-item"
                        >
                          <div className="course-header">
                            <span className="course-name">{course.name}</span>
                          </div>
                          <div className="topic-tags">
                            {course.topics.map((topic, j) => (
                              <span
                                key={j}
                                className="topic-tag"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section id="education" className="education">
      <motion.div
        className="education-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header">
          <h2>Education Journey</h2>
          <div className="education-desc-container">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="education-desc-item"
            >
              <FaGraduationCap className="education-desc-icon" />
              <span>Explore my academic foundation that combines theoretical knowledge with practical expertise.</span>
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="education-desc-item"
            >
              <FaBook className="education-desc-icon" />
              <span>From computer science fundamentals to specialized courses in modern web technologies.</span>
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="education-desc-item"
            >
              <FaLightbulb className="education-desc-icon" />
              <span>My educational background has equipped me with the skills to tackle complex development challenges.</span>
            </motion.p>
          </div>
        </div>

        <div className="timeline">
          {educationData.map((edu, index) => (
            <TimelineItem
              key={index}
              edu={edu}
              index={index}
              isSelected={selectedIndex === index}
              onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education; 