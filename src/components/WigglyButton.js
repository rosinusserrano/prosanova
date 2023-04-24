import { motion } from 'framer-motion'
import React from 'react'

export default function WigglyButton({children, onClick}) {
    const buttonStyle = {
        cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
        rotate: 0
    }
    return (
        <motion.div style={buttonStyle} whileHover={{
            rotate: [-7, 7],
            transition: { duration: .2, repeat: Infinity, repeatType: "reverse" }
        }} onClick={onClick}>
            {children}
        </motion.div>
    )
}
