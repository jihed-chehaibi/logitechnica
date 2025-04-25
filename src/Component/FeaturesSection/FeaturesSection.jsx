import React from 'react';
import './FeaturesSection.css';
import { FiCheckCircle } from 'react-icons/fi';
import webSolutionsImage from '../../assets/image11.jpg';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">

        {/* IMAGE */}
        <div className="features-image">
          <img src={webSolutionsImage} alt="Développement web" />
        </div>

        {/* CONTENU */}
        <div className="features-content">
          <h2>
            Construisons ensemble <span>l'avenir numérique</span> de votre entreprise
          </h2>
          <p>
            Notre startup spécialisée en ingénierie logicielle et développement web vous accompagne dans
            la réalisation de solutions digitales innovantes, performantes et évolutives.
          </p>

          <ul>
            <li><FiCheckCircle className="icon" /> Développement de sites web et applications sur mesure</li>
            <li><FiCheckCircle className="icon" /> Solutions adaptées à vos objectifs métiers</li>
            <li><FiCheckCircle className="icon" /> Équipe jeune, agile et passionnée par la tech</li>
          </ul>

          <a href="/contact" className="features-button">Nous contacter</a>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
