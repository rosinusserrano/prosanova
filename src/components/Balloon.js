import { motion } from 'framer-motion'
import React from 'react'
import "../styles/responsive.css"
import "../styles/pages.css"

export default function Balloon() {
    return (
        <motion.div  style={{ zIndex: "300", width: "auto", height: "auto", position: "absolute",  x: "40vw", }}

            animate={
                { 
                    y: ["140vh", "-400vh"],
                    transition: {delay: 3, duration: 19, repeat: Infinity},
                }}>
                    <img className='ballon'  src={'images/ballon.png'} alt="Ballon" />

        </motion.div>
    )
}
