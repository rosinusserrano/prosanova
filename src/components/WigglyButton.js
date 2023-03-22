import { motion } from 'framer-motion'
import React from 'react'

export default function WigglyButton(props) {
    const buttonStyle = {
        borderRadius: "8px",
        backgroundColor: "white",
        alignSelf: "flex-start",
        padding: "3px 5px",
        rotate: 0
    }
    return (
        <motion.div style={buttonStyle} whileHover={{
            rotate: [-7, 7],
            transition: { duration: .1, repeat: Infinity, repeatType: "reverse" }
        }}>
            {props.children}
        </motion.div>
    )
}
