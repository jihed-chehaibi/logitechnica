// src/Component/HeroSection/HeroSection.jsx

import React from 'react';
import './HeroSection.css';
import HeroImage from '../../assets/heroimg.png';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="heroSection noVideo">
      {/* FOND ANIMÉ */}
      <div className="animatedBackground"></div>

      {/* SVG VAGUE */}
      <svg className="hero-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path fill="#ffffff" fillOpacity="1"
          d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,176C840,171,960,117,1080,90.7C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      {/* CONTENU */}
      <div className="heroContentGrid">
        <div className="heroImageContainer">
          <img src={HeroImage} alt="Illustration" className="heroImage" />
        </div>

        <div className="heroTextContent">
          <span className="hero-badge">✨ Votre partenaire digital</span>
          <h1 className="heroTitle">
            <TypeAnimation
              sequence={[
                'Des solutions digitales sur mesure',
                2000,
                'Agence web Tunisie',
                2000,
                'Une expertise fiable & agile',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="heroSubtitle">
            Boostez votre transformation digitale avec nos solutions web & mobiles personnalisées.
          </p>
          <div className="heroButtons fadeInButtons">
            <button className="heroButton primary" onClick={() => navigate('/contact')}>
              Commencer
            </button>
            <button className="heroButton secondary" onClick={() => navigate('/a-propos')}>
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
