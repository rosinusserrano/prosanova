import React from "react";
import { Link } from 'react-router-dom';

import '../styles/imprint.css';
import '../styles/fonts.css';
import '../styles/pages.css';

export default function Navbar() {

    return (
        <div className='navbar'>

            <Link className='button' target='_blank' to='https://www.instagram.com/prosanovafestival/'>Instagram</Link>
            <Link className='button' target='_blank' to='https://prosanova-festival.net'>pn20</Link>

        </div>


    )




}