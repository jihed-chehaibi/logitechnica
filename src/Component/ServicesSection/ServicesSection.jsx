import React, { useEffect } from 'react';
import './ServicesSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaBullhorn, FaPalette } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    desc: 'Conception ou refonte de sites e-commerce, vitrines, institutionnels, événements.',
    type: 'white',
  },
 
  {
    icon: <FaMobileAlt />,
    title: 'Applications mobiles',
    desc: 'Développement multiplateforme, UI fluide, performance et accessibilité optimales.',
    type: 'white',
  },
  {
    icon: <FaBullhorn />,
    title: 'Marketing digital',
    desc: 'SEO, SEA, campagnes, stratégie d’acquisition et réputation numérique.',
    type: 'white',
  },
  
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="services-section">
      <div className="services-container">
        <motion.div
          className="section-title-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">Nos domaines d’expertise</p>
          <h2 className="section-title">
            Des <span className="gradient-text">solutions digitales</span><br />
            pour vos projets ambitieux
          </h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 260 }}
              className={`service-card ${service.type === 'gradient' ? 'card-gradient' : 'card-white'}`}
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="icon-badge">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
