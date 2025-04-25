import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 2500);
    return () => clearTimeout(timeout);
  }, []);

  if (loaded) return null;

  return (
    <div className="loaderWrapper">
      <div className="loaderContent">
        <svg className="spinner" viewBox="0 0 50 50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
          />
        </svg>
        <div className="loaderText">Logitechnica</div>
      </div>
    </div>
  );
};

export default Loader;
