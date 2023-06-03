import FridgePoetry from 'components/FridgePoetry'
import React from 'react'
import { ProgramTypeToColor } from '../ProgrammInformation'
import { motion } from 'framer-motion'

function ProgrammSmallContent({ title, description, type }) {
  return (
    <div style={
      {
        height: "100%",
        overflowY: "auto",
        fontSize: "4vw"
      }
    }>
      {description !== "PARTY"
        ?
        <div style={{
          height: "85%",
          overflowY: "auto",
          padding: "1rem"
        }}
          className='border-radius background-color-grey'>
          <span className='font-size-5 font-b-bold'>{title}</span><br />
          <span>{description}</span><br />
        </div>
        :
        <div style={{
          height: "85%",
          overflowY: "auto",
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          placeItems: "center"
        }}
          className='border-radius background-color-grey'>
          <motion.div
            initial={{
              rotate: 0
            }}
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              bounce: false
            }}
          >PARTY</motion.div>
        </div>}
      <div style={{
        height: "15%",
        display: "flex",
        placeItems: "center",
        justifyContent: "center",
        color: "white"
      }}
        className='font-size-1'>
        <FridgePoetry color={ProgramTypeToColor[type]}>{type}</FridgePoetry>
      </div>
    </div>
  )
}

export default ProgrammSmallContent