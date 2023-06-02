import FridgePoetry from 'components/FridgePoetry'
import React from 'react'
import { ProgramTypeToColor } from '../ProgrammInformation'

function ProgrammSmallContent({ title, description, type }) {
  return (
    <div style={
      {
        height: "100%",
        overflowY: "auto"
      }
    }>
      <div style={{
        height: "90%",
        overflowY: "auto",
        padding: "1rem"
      }}
        className='border-radius background-color-grey'>
        <span className='font-size-5 font-b-bold'>{title}</span><br />
        <span>{description}</span><br />
      </div>
      <div style={{
        height: "10%",
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