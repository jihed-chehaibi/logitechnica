import React from 'react';
import './FinalCTASection.css';
import { motion } from 'framer-motion';

const FinalCTASection = () => {
  return (
    <motion.section
      className="final-cta-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="cta-content">
        <h2 className="cta-title">
          Ensemble, construisons vos solutions digitales de demain.
        </h2>
        <p className="cta-subtitle">
          Notre équipe vous accompagne pour concevoir des produits innovants, sur mesure, et à fort impact.
        </p>
        <div className="cta-buttons">
          <a href="/contact" className="cta-button primary">Nous contacter</a>
          <a href="/services" className="cta-button secondary">Découvrir nos services</a>
        </div>
      </div>
      
    </motion.section>
  );
};

export default FinalCTASection;
