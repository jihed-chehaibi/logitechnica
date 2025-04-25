import React from 'react';
import './Contact.css';
import NavBar from '../Component/NavBar/NavBar';
import Footer from '../Component/Footer/Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <NavBar />

      {/* HERO */}
      <div className="contact-hero">
        <h1>Entrer en <span>contact</span></h1>
        <p>Nous sommes toujours disponibles pour discuter de votre projet.</p>
      </div>

      {/* COORDONNÉES */}
      <section className="contact-info-section">
        <div className="contact-info-card animated-icon">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <a href="mailto:Contactlogitecnica@gmail.com">
            Contactlogitecnica@gmail.com
          </a>
        </div>

        <div className="contact-info-card animated-icon">
          <FaPhone className="icon" />
          <h3>Téléphone</h3>
          <a href="tel:+21698348509">+216 98 348 509</a>
        </div>

        <div className="contact-info-card animated-icon">
          <FaMapMarkerAlt className="icon" />
          <h3>Adresse</h3>
          <p>Résidence Yousra B4-4, Le Bardo 2000, Tunis</p>
        </div>
      </section>

      {/* TIMELINE + MAP CÔTE À CÔTE */}
      <section className="contact-bottom-row">
        {/* Timeline */}
        <div className="timeline-wrapper">
          <h2>Comment nous contacter</h2>
          <div className="timeline">
            <div className="timeline-step">
              <div className="dot"></div>
              <p>📧 Envoyez-nous un email avec vos besoins</p>
            </div>
            <div className="timeline-step">
              <div className="dot"></div>
              <p>📞 Appelez-nous pour une première discussion</p>
            </div>
            <div className="timeline-step">
              <div className="dot"></div>
              <p>💬 Échange rapide via WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-wrapper">
          <h3>📍 Où nous trouver</h3>
          <iframe
            title="Localisation"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.672774648274!2d10.18153261515647!3d36.80649517994957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302c9d889efc8e9%3A0xd3a370330d26a9a0!2sTunis!5e0!3m2!1sfr!2stn!4v1616070047032!5m2!1sfr!2stn"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* BOUTON WHATSAPP FLOTTANT */}
      <a
        href="https://wa.me/21698348509"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

      <Footer />
    </>
  );
};

export default Contact;
