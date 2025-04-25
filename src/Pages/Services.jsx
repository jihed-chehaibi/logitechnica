import React, { useState } from 'react';
import './Services.css';
import NavBar from '../Component/NavBar/NavBar';
import { motion } from 'framer-motion';
import { FcServices, FcSupport, FcIdea, FcPhoneAndroid } from 'react-icons/fc';
import { FaLaptopCode } from "react-icons/fa";
import { CgCommunity } from "react-icons/cg";
import Footer from '../Component/Footer/Footer';

const services = [
  {
    icon: <FcIdea />,
    title: 'Conception UX/UI',
    fullText: "Nous créons des expériences utilisateurs élégantes, efficaces et cohérentes via Figma, design systems et user flows centrés sur les besoins réels.",
  },
  {
    icon: <FaLaptopCode />,
    title: 'Développement Web',
    fullText: "Notre agence web prend en charge, non seulement, la mise en place de votre site mais également son optimisation et l’amélioration de son interactivité.",
  },
  {
    icon: <FcPhoneAndroid />,
    title: 'Développement Mobile',
    fullText: "Nos experts développent des applications mobiles interactives, dynamiques et adaptées aux besoins de chaque entreprise.",
  },
  {
    icon: <FcServices />,
    title: 'IT Consulting & Audit',
    fullText: "Architecture scalable, stack adaptée, audit de performance & sécurité. Accompagnement de vos choix techniques clés.",
  },
  {
    icon: <FcSupport />,
    title: 'Support & Maintenance',
    fullText: "Maintenance corrective, évolutive, monitoring, backups, support réactif. Nous garantissons la stabilité de vos projets.",
  },
  {
    icon: <CgCommunity />,
    title: 'Community Management',
    fullText: "Nos community managers prennent en charge la planification des publications et la création du contenu.",
  },
];

const pricing = [
  { name: 'Pack Essentiel', price: '499€', features: ['Site vitrine', 'Design responsive', 'Hébergement 1 an'] },
  { name: 'Pack Pro', price: '999€', features: ['Web App sur mesure', 'UX/UI avancé', 'Support dédié'] },
  { name: 'Pack Premium', price: '1499€', features: ['E-commerce complet', 'SEO avancé', 'Accompagnement expert'] },
];

const tools = ['React', 'Node.js', 'Figma', 'Angular', 'Laravel', 'Java', 'Python', 'MongoDB', 'Firebase', 'Git', 'GitHub' ,'AWS', 'Azure', 'C #' , 'WordPress'];

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  return (
    <>
      <NavBar />

      {/* HERO SECTION AMÉLIORÉE */}
      <section className="services-hero">


        <h1 className="typing-title">
        Nos Services 
        </h1>
        <p>Notre équipe vous accompagne à chaque étape de votre digitalisation.</p>
      </section>

      <section className="services-cards">
        <div className="services-grid">
          {services.map((item, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <button onClick={() => openModal(index)} className="read-more-btn">Lire plus</button>
            </motion.div>
          ))}
        </div>

        {selectedIndex !== null && (
          <div className="service-modal-overlay" onClick={closeModal}>
            <motion.div
              className="service-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>{services[selectedIndex].title}</h3>
              <div className="modal-content-scroll">
                <p>{services[selectedIndex].fullText}</p>
              </div>
              <button className="close-btn" onClick={closeModal}>Fermer</button>
            </motion.div>
          </div>
        )}
      </section>

      <section className="services-tools">
        <h2>Nos outils & technologies</h2>
        <div className="tools-grid">
          {tools.map((tool, i) => (
            <motion.div
              className="tool-item"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="services-pricing">
        <h2 className="pricing-title">Nos packs de services</h2>
        <div className="pricing-grid">
          {pricing.map((pack, i) => (
            <div className="pricing-card" key={i}>
              <h3>{pack.name}</h3>
              <p className="price">{pack.price}</p>
              <ul>
                {pack.features.map((f, j) => (
                  <li key={j}>✔ {f}</li>
                ))}
              </ul>
              <a href="/contact" className="pricing-btn">Choisir ce pack</a>
            </div>
          ))}
        </div>
      </section>

      <section className="services-contact">
        <h2>Vous avez un projet ?</h2>
        <p>Parlons-en ensemble. Nous sommes à votre écoute.</p>
        <a href="/contact" className="cta-contact">Nous contacter</a>
      </section>

      <Footer />
    </>
  );
};

export default Services;
