import React, { useState } from 'react'
import { ProgramTypeToColor, makeProgramID } from '../ProgrammInformation'
import { BACKGROUNDCOLOR } from 'constants'

function ProgrammSmallButton({ time, type, location, title, people, setClickedButton, setBackFunction, backFunction }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className='border-radius background-color-grey'
      style={{
        marginBottom: "0.5rem",
        padding: "1rem",
        backgroundColor: hovered ? ProgramTypeToColor[type] : BACKGROUNDCOLOR
      }}
      onPointerLeave={() => setHovered(false)}
      onPointerOver={() => setHovered(true)}
      onClick={() => {
        setClickedButton(makeProgramID(title, time, location))
        setBackFunction(() => () => {
          setClickedButton("")
          setBackFunction(() => () => backFunction())
        })
      }}>
      <span className='font-size-2'>{people}</span><br />
      <span className='font-size-1 font-b-bold'>{title}</span><br />
      <span className='font-size-2 font-montiac-mono'>{time}{" | "}{location}</span>
    </div>
  )
}

export default ProgrammSmallButton