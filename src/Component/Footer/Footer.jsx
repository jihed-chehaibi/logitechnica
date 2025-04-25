import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css';
import logo from '../../assets/logo2.png'; // Remplace par ton vrai chemin

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo + About */}
        <div className="footer-section about" data-aos="fade-up">
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' , textTransform: 'uppercase'}}> Logitechnica </p>
          <p >est une agence web spécialisée dans le développement de solutions digitales sur mesure , Nous accompagnons les entreprises vers le succès digital avec des solutions web et IT performantes.</p>
        </div>

        {/* Navigation */}
        <div className="footer-section links" data-aos="fade-up" data-aos-delay="100">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/a-propos">À propos</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section contact" data-aos="fade-up" data-aos-delay="200">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:contactlogitecnica@gmail.com">contactlogitecnica@gmail.com</a></p>
          <p>Téléphone: <a href="tel:+21698348509">+216 98 348 509</a></p>
          <p>Adresse: Résidence Yousra B4-4, Le Bardo 2000, Tunis</p>
        </div>

        {/* Socials */}
        <div className="footer-section social" data-aos="fade-up" data-aos-delay="300">
          <h4>Suivez-nous</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Logitechnica. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
