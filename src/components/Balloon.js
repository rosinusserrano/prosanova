import { motion } from 'framer-motion'
import React from 'react'

export default function Balloon() {
    return (
        <motion.div style={{ width: "120px", height: "460px", position: "absolute", backgroundColor: "red", x: "80vw" }}
            animate={
                { 
                    y: ["100vh", "-100vh"],
                    transition: {duration: 10, repeat: Infinity},
                }}>
            Ballon
        </motion.div>
    )
}
