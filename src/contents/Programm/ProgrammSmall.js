import React from 'react'
import ProgrammSmallTagChoice from './components_small/ProgrammSmallTagChoice'
import ProgrammSmallMain from './components_small/ProgrammSmallMain'
import { ProgrammAmFreitag, ProgrammAmSamstag, ProgrammAmSonntag } from './ProgrammInformationV2'

function ProgrammSmall({ setDay, day, setBackFunction, backFunction }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateAreas: "'overlay'",
      height: "100%"
    }}>
      <div style={{
        gridArea: "overlay", display: day === "" ? "block" : "none",
        height: "100%",
        overflowY: "auto"
      }}>
        <ProgrammSmallTagChoice setDayFunction={setDay} setBackFunction={setBackFunction} />
      </div>
      <div style={{
        gridArea: "overlay",
        display: day === "friday" ? "block" : "none",
        height: "100%",
        overflowY: "auto"
      }}>
        <ProgrammSmallMain ProgrammFuerTag={ProgrammAmFreitag} setBackFunction={setBackFunction} backFunction={backFunction} />
      </div>
      <div style={{
        gridArea: "overlay",
        display: day === "saturday" ? "block" : "none",
        height: "100%",
        overflowY: "auto"
      }}>
        <ProgrammSmallMain ProgrammFuerTag={ProgrammAmSamstag} setBackFunction={setBackFunction} backFunction={backFunction} />
      </div>
      <div style={{
        gridArea: "overlay",
        display: day === "sunday" ? "block" : "none",
        height: "100%",
        overflowY: "auto"
      }}>
        <ProgrammSmallMain ProgrammFuerTag={ProgrammAmSonntag} setBackFunction={setBackFunction} backFunction={backFunction} />
      </div>
    </div>
  )
}

export default ProgrammSmall