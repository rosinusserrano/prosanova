import React, { useState } from 'react'
import ProgrammSmallButton from './ProgrammSmallButton'
import ProgrammSmallContent from './ProgrammSmallContent'
import { makeProgramID } from '../ProgrammInformation'

function ProgrammSmallMain({ ProgrammFuerTag, setBackFunction, backFunction }) {
  const [clickedButton, setClickedButton] = useState("")
  return (
    <div style={{
      display: "grid",
      gridTemplateAreas: "'overlay'",
      height: "100%",
      overflowY: "auto"
    }}>
      <div style={{
        display: clickedButton === "" ? "flex" : "none",
        flexDirection: "column",
        gridArea: "overlay",
        height: "100%",
        overflowY: "auto"
      }}>
        {ProgrammFuerTag.map(({ type, title, time, location, people, description }) => {
          return <ProgrammSmallButton
            setClickedButton={setClickedButton}
            type={type}
            time={time}
            title={title}
            location={location}
            people={people}
            setBackFunction={setBackFunction}
            backFunction={backFunction}
            description={description}
          />
        })}
      </div>
      {ProgrammFuerTag.map(({ title, description, time, location, type }) =>
        <div style={{
          height: "100%",
          overflowY: "auto",
          gridArea: "overlay",
          display: clickedButton === makeProgramID(title, time, location) ? "block" : "none"
        }}>
          <ProgrammSmallContent title={title} description={description} type={type}/>
        </div>)}
    </div>
  )
}

export default ProgrammSmallMain