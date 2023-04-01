import { motion } from 'framer-motion'
import React from 'react'

export default function WigglyButton(props) {
    const buttonStyle = {
     
        rotate: 0
    }
    return (
        <motion.div style={buttonStyle} whileHover={{
            rotate: [-7, 7],
            transition: { duration: .2, repeat: Infinity, repeatType: "reverse" }
        }}>
            {props.children}
        </motion.div>
    )
}
