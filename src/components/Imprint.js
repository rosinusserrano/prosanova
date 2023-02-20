import React from 'react';

import './imprint.css';
import './fonts.css';

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