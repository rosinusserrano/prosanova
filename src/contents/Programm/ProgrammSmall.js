import React from 'react'
import ProgrammSmallTagChoice from './components_small/ProgrammSmallTagChoice'
import ProgrammSmallMain from './components_small/ProgrammSmallMain'
import { ProgrammAmFreitag, ProgrammAmSamstag, ProgrammAmSonntag } from './ProgrammInformation'

function ProgrammSmall({ setDay, day, setBackFunction, backFunction }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateAreas: "'overlay'",
      height: "100%"
    }}>
      <div style={{ gridArea: "overlay", display: day === "" ? "block" : "none" }}>
        <ProgrammSmallTagChoice setDayFunction={setDay} setBackFunction={setBackFunction} />
      </div>
      <div style={{
        gridArea: "overlay",
        display: day === "friday" ? "block" : "none"
      }}>
        <ProgrammSmallMain ProgrammFuerTag={ProgrammAmFreitag} setBackFunction={setBackFunction} backFunction={backFunction} />
      </div>
      <div style={{
        gridArea: "overlay",
        display: day === "saturday" ? "block" : "none"
      }}>
        <ProgrammSmallMain ProgrammFuerTag={ProgrammAmSamstag} setBackFunction={setBackFunction} backFunction={backFunction} />
      </div>
      <div style={{
        gridArea: "overlay",
        display: day === "sunday" ? "block" : "none"
      }}>
        <ProgrammSmallMain ProgrammFuerTag={ProgrammAmSonntag} setBackFunction={setBackFunction} backFunction={backFunction} />
      </div>
    </div>
  )
}

export default ProgrammSmall