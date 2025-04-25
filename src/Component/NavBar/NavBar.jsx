import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => setIsActive(!isActive);
  const closeMenu = (path) => {
    setIsActive(false);
    navigate(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => navigate('/')}>
          <img src="/logo1.png" alt="Logo" />
          <span>Logitechnica</span>
        </div>

        <ul className={`nav-links ${isActive ? 'active' : ''}`}>
          <li onClick={() => closeMenu('/')}>Accueil</li>
          <li onClick={() => closeMenu('/a-propos')}>A propos</li>
          <li onClick={() => closeMenu('/services')}>Services</li>
          <li onClick={() => closeMenu('/contact')}>Contact</li>
        </ul>

        <div className="btn-right">
          <button className="btn-start" onClick={() => navigate('/contact')}>
            Commencer
          </button>
        </div>

        <div className="hamburger" onClick={toggleNav}>
          {isActive ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
