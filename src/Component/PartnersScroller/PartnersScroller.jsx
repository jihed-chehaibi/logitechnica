import React from 'react';
import './PartnersScroller.css';
import { motion } from 'framer-motion';

const logos = [
  "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
  "https://studyopedia.com/wp-content/uploads/2022/10/bootstrap-stack.png",
  "https://freebsdfoundation.org/wp-content/uploads/2024/05/vscode-logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCelkmWfnQkGmyWNujbuC9mF04Ww5rGRN1vA&s",
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  
];

const PartnersScroller = () => {
  return (
    <motion.section
      className="partners-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="partners-title">Nos Partenaires</h2>
      <div className="partners-grid">
        {logos.map((logo, idx) => (
          <motion.div
            className="logo-card"
            key={idx}
            whileHover={{ rotate: 8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img src={logo} alt={`logo-${idx}`} className="logo-img" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PartnersScroller;
