import React from 'react';
import Imprint from '../components/Imprint';
import '../imprint.css';
import { Link, Routes } from 'react-router-dom';

function ImprintPage() {
  return (
    <>
      <div>
        <h1>My Website</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
</div>
    </>
  );
 
}

export default ImprintPage;
