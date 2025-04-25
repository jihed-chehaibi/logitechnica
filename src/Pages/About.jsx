import React from 'react';
import './About.css';
import NavBar from '../Component/NavBar/NavBar';
import { motion } from 'framer-motion';
import Footer from '../Component/Footer/Footer';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FcPositiveDynamic, FcApproval, FcManager } from 'react-icons/fc';

const aboutCards = [
  {
    title: "🚀 Notre mission",
    text: "Créer des solutions numériques performantes, sur-mesure et humaines. Nous accompagnons nos clients dans leur transformation digitale avec expertise, agilité et créativité.",
    image: "https://renaissanceacademytilhar.com/img/mission.jpg",
  },
  {
    title: "📖 Notre histoire",
    text: "Fondée par des passionnés du web, Logitechnica est née pour offrir des services digitaux de haute qualité à toutes tailles d’entreprise. Notre ADN : l'innovation et la proximité client.",
    image: "https://cbx-prod.b-cdn.net/COLOURBOX21199229.jpg?width=800&height=800&quality=70",
  },
  {
    title: "💡 Nos valeurs",
    text: "Innovation, transparence, qualité et sens de l'humain. Nous mettons l’utilisateur au cœur de chaque projet pour livrer une vraie valeur ajoutée.",
    image: "https://img.freepik.com/vecteurs-premium/valeurs-marque-concept-icone-reussite_313674-503.jpg",
  }
];

const About = () => {
  return (
    <>
      <NavBar />
      <section className="about-hero">
        <div className="hero-content">
          <h1>À propos de <span>Logitechnica</span></h1>
          <p>Nous sommes une startup tech passionnée par l’innovation digitale.</p>
        </div>

      </section>

      {/* SECTION À PROPOS */}
      <section className="about-card-section">
        {aboutCards.map((item, index) => (
          <motion.div
            className="about-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="card-content">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* SECTION POURQUOI NOUS */}
      <section className="about-why">
        <h2 className="why-title">Pourquoi choisir <span>Logitechnica</span> ?</h2>
        <div className="why-cards">
          {[
            {
              icon: <FcManager />,
              title: "Approche personnalisée",
              text: "Nous comprenons vos besoins métier pour créer des solutions sur mesure.",
            },
            {
              icon: <FcPositiveDynamic />,
              title: "Résultats concrets",
              text: "Nos projets visent la performance, l’efficacité et l’évolution continue.",
            },
            {
              icon: <FcApproval />,
              title: "Satisfaction client",
              text: "La réussite de nos clients est notre plus grande fierté.",
            },
          ].map((card, i) => (
            <motion.div
              className="why-card"
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="why-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION STATISTIQUES */}
      <section className="about-stats">
        <h2 className="stats-title">Nos chiffres clés</h2>
        <div className="stats-grid">
          {[
            { label: "Projets livrés", value: 120 },
            { label: "Clients satisfaits", value: 250 },
            { label: "Années d'expérience", value: 5 },
          ].map((item, idx) => {
            const [ref, inView] = useInView({ triggerOnce: true });
            return (
              <div className="stat-card" key={idx} ref={ref}>
                <span className="stat-value">
                  {inView ? <CountUp end={item.value} duration={2} /> : '0'}+
                </span>
                <p>{item.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION TIMELINE */}
      <section className="about-timeline">
        <h2 className="timeline-title">Notre parcours</h2>
        <ul className="timeline-list">
          <li><span>2020</span> Fondation de Logitechnica</li>
          <li><span>2021</span> 1er grand client et site livré</li>
          <li><span>2022</span> Croissance et nouveaux services</li>
          <li><span>2023</span> 100+ clients & projets internationaux</li>
          <li><span>2024</span> Innovations IA et Blockchain</li>
        </ul>
      </section>

      {/* SECTION CTA CONTACT */}
      <section className="about-contact-cta">
        <h3>Prêt à travailler avec nous ?</h3>
        <a href="/contact" className="cta-button-about">Nous contacter</a>
      </section>

      <Footer />
    </>
  );
};

export default About;
