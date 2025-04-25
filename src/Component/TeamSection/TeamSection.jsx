import React from 'react';
import './TeamSection.css';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const team = [
  {
    name: "AHMED",
    role: "CEO",
    img: "https://img.freepik.com/photos-gratuite/jeune-homme-barbu-chemise-rayee_273609-5677.jpg",
    linkedin: "https://www.linkedin.com/in/ahmed"
  },
  {
    name: "NOUR",
    role: "CTO",
    img: "https://img.freepik.com/photos-gratuite/portrait-expressif-jeune-femme_1258-48167.jpg",
    linkedin: "https://www.linkedin.com/in/nour"
  },
  {
    name: "KHALIL",
    role: "UX Designer",
    img: "https://img.freepik.com/photos-gratuite/bouchent-portrait-jeune-homme-barbu-chemise-blanche-veste-posant-devant-camera-large-sourire-isole-gris_171337-629.jpg",
    linkedin: "https://www.linkedin.com/in/khalil"
  },
];

const TeamSection = () => {
  return (
    <motion.section
      className="team-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Notre Équipe</h2>

      <div className="team-grid">
        {team.map((member, idx) => (
          <motion.div
            className="team-card"
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="avatar-container">
              <img src={member.img} alt={member.name} className="team-avatar" />
            </div>
            <h4>{member.name}</h4>
            <p>{member.role}</p>
            <a href={member.linkedin} target="_blank" rel="noreferrer" className="linkedin-link">
              <FaLinkedin />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TeamSection;
