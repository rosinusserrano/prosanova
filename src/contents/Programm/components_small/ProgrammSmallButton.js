import React, { useState } from 'react'
import { ProgramTypeToColor, makeProgramID } from '../ProgrammInformationV2'
import { BACKGROUNDCOLOR } from 'constants'

function ProgrammSmallButton({ time, type, location, title, people, description, setClickedButton, setBackFunction, backFunction }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className='border-radius background-color-grey'
      style={{
        marginBottom: "0.5rem",
        padding: "1rem",
        backgroundColor: hovered ? ProgramTypeToColor[type] : BACKGROUNDCOLOR,
        color: hovered && Object.keys(ProgramTypeToColor).includes(type) ? "white" : "black"
      }}
      onPointerLeave={() => setHovered(false)}
      onPointerOver={() => setHovered(true)}
      onClick={() => {
        if (description !== "") {
          console.log(description)
          setClickedButton(makeProgramID(title, time, location));
          setBackFunction(() => () => {
            setClickedButton("")
            setBackFunction(() => () => backFunction())
          });
        }
      }}>
      <span className='font-size-2'>{title === "" ? "" : people}</span><br />
      <span className='font-size-1 font-b-bold'>{title === "" ? people : title}</span><br />
      <span className='font-size-2 font-montiac-mono'>{time}{" | "}{location}</span>
    </div>
  )
}

export default ProgrammSmallButton