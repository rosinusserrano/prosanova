import React from 'react'
import { ProgrammInformation } from './ProgrammInformation'

export default function ProgrammVeryLarge() {
  const displayedHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4]
  return (
    <div className='inside-main-content-wrapper'
      style={{
        height: "100%"
      }}>
      <div style={{ display: "grid", gridTemplateAreas: "'overlay'" }}>
        <ProgrammTimeAxis displayedHours={displayedHours} />
        <ProgrammBubbles displayedHours={displayedHours} />
      </div>

    </div>
  )
}

function ProgrammBubbles({ displayedHours }) {

  return <div
    style={{
      gridArea: "overlay",
      display: "grid",
      marginLeft: "3rem",
      gridTemplateRows: `repeat(${displayedHours.length * 4}, 0.8rem)`,
      gridTemplateColumns: `repeat(8, 12.5%)`
    }}>
    {ProgrammInformation.map((obj) => <ProgrammBubble programmInfo={obj} displayedHours={displayedHours} />)}
  </div>
}

function ProgrammBubble({ programmInfo, displayedHours }) {
  const { gridRowStart, gridRowEnd } = getRowSpan({ time: programmInfo.time, displayedHours: displayedHours })
  const gridColumn = getColumn({ location: programmInfo.location })
  return <div className='border-radius background-color-grey font-size-6'
    style={{ gridRowStart: gridRowStart, gridRowEnd: gridRowEnd, gridColumn: gridColumn, padding: "0.5rem" }}>
    {programmInfo.title}
  </div>
}

function getRowSpan({ time, displayedHours }) {
  const [from, to] = time.split(" - ")
  const [fromHour, fromMinute] = from.split(":").map((str) => parseInt(str))
  const [toHour, toMinute] = to.split(":").map((str) => parseInt(str))
  var gridRowStart = ((fromHour - displayedHours[0]) * 4) + ((fromMinute / 15))
  var gridRowEnd = (toHour - displayedHours[0]) * 4 + (toMinute / 15) - 1
  return {
    gridRowStart,
    gridRowEnd
  }
}

function getColumn({ location }) {
  const locationColumnIndex = {
    "Aula": 1,
    "Klassenzimmer": 2
  }
  return locationColumnIndex[location]
}

function ProgrammTimeAxis({ displayedHours }) {
  return <div
    style={{
      gridArea: "overlay"
    }}>
    <div style={{
      display: "flex",
      flexDirection: "column",
    }}>

      {displayedHours.map(hour => hour === 4 ? <ProgrammTimeAxisHour hour={hour} endWithLine={false} /> : <ProgrammTimeAxisHour hour={hour} />)}

    </div>
  </div>
}


function ProgrammTimeAxisHour({ hour, endWithLine = true }) {
  return <>
    <div style={{
      width: "100%",
      height: "calc(3.2rem - 1px)",
      display: "flex",
      alignItems: "center",
      color: "#ddd"
    }}><div>{hour}:00</div></div>

    {endWithLine ? <div style={{
      width: "100%",
      height: "1px",
      backgroundColor: "#ddd"
    }} /> : <></>}
  </>
}
