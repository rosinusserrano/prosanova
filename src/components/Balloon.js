import { motion } from 'framer-motion'
import React from 'react'
import BallonImage from '../ballon.png'
import "../styles/responsive.css"
import "../styles/pages.css"

export default function Balloon() {
    return (
        <motion.div  style={{ zIndex: "300", width: "auto", height: "auto", position: "absolute",  x: "40vw", }}

            animate={
                { 
                    y: ["140vh", "-140vh"],
                    transition: {duration: 10, repeat: Infinity},
                }}>
                    <img className='ballon'  src={BallonImage} alt="Ballon" />

        </motion.div>
    )
}
