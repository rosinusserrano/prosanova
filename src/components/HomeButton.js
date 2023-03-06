import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/imprint.css';
import '../styles/fonts.css';
import '../styles/pages.css';

export default function HomeButton() {
  return (
    <div className='homebuttonwrapper'>
    <Link className='homebutton' to='/'>home</Link>

    </div>
    
  )
}
