import React from 'react';
import ImprintPage from './pages/imprintpage';


import './imprint.css';
import { Link, Routes } from 'react-router-dom';







function Imprint() {
  return (

    <div className="imprint-container">
      <Link className="imprint-item" to="/imprint">
        Imprint
      </Link>

    </div>

  );
}

export default Imprint;