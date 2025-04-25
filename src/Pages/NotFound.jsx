import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NotFound.css';

const NotFound = () => {
  return (
    <motion.div
      className="notfound"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>404</h1>
      <p>Oups... cette page n'existe pas</p>
      <Link to="/" className="notfound-link">Retour à l'accueil</Link>
    </motion.div>
  );
};

export default NotFound;
