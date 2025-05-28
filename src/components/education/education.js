import React from 'react';
import './education.css';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      school: "Jain University",
      degree: "Bachelor of Technology",
      location: "Bangalore, Karnataka",

      year: "2020 - 2024",
      description: "I completed my Bachelor of Technology in Computer Science and Engineering at Jain University. \n\n I scored 8.0 CGPA."
    },
    {
      school: "Guru's junior college",
      degree: "Intermediate",
      location: "Guntur, Andhra Pradesh",
      year: "2018 - 2020",
      description: "I completed my Intermediate education at Guru's junior college. \n\n I scored 9.09 in my Intermediate board exams."
    },
    {
      school: "Bell and Bennett High School",
      degree: "Secondary School",
      location: "Addanki, Andhra Pradesh",
      year: "2016 - 2018",
      description: "I completed my Secondary School education at Bell and Bennett High School. \n\n I scored 8.8 in my Secondary School board exams."
    }
  ];

  return (
    <section id="education" className="education">
      <motion.div
        className="educationContent"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="educationTitle">Education</h2>
        <div className="educationList">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="educationItem"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="schoolName">{edu.school}</h3>
              <p className="degree">{edu.degree}</p>
              <p className="location">{edu.location}</p>
              <p className="year">{edu.year}</p>
              <p className="description">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education; 