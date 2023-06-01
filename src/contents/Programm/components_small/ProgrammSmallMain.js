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
      height: "100%"
    }}>
      <div style={{
        display: clickedButton === "" ? "flex" : "none",
        flexDirection: "column",
        gridArea: "overlay",
        height: "100%"
      }}>
        {ProgrammFuerTag.map(({ type, title, time, location, people }) => {
          return <ProgrammSmallButton
            setClickedButton={setClickedButton}
            type={type}
            time={time}
            title={title}
            location={location}
            people={people}
            setBackFunction={setBackFunction}
            backFunction={backFunction}
          />
        })}
      </div>
      {ProgrammFuerTag.map(({ title, description, time, location }) =>
        <div style={{
          height: "100%",
          gridArea: "overlay",
          display: clickedButton === makeProgramID(title, time, location) ? "block" : "none"
        }}>
          <ProgrammSmallContent title={title} description={description} />
        </div>)}
    </div>
  )
}

export default ProgrammSmallMain