import React from 'react';
import ImprintPage from './ImprintPage';


import '../styles/imprint.css';
import '../styles/fonts.css';
import '../styles/pages.css';

import { Link, Routes } from 'react-router-dom';







function Imprint() {
  return (

    <div className="imprint-container">
      <Link className="imprint-item" to="/imprint">
        imprint
      </Link>

    </div>

  );
}

export default Imprint;