import { BACKGROUNDCOLOR } from "constants"
import React from "react"
import { ProgramTypeToColor } from "../ProgrammInformation"

export function ProgrammLargeButton({ type, time, location, title, people, hoveredButton, setHoveredButton, setClickedButton }) {
    return <div style={{
        width: "100%",
        display: "flex",
        gap: "0.3rem",
        cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
    }}
        onPointerOver={() => setHoveredButton(title)}
        onPointerLeave={() => setHoveredButton("")}
        onClick={() => setClickedButton(title)}>
        <div style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            placeItems: "center",
            backgroundColor: hoveredButton === title ? ProgramTypeToColor[type] : BACKGROUNDCOLOR
        }} className='border-radius background-color-grey font-montiac-mono'>
            <div>
                <span>{time}</span>
                <br />
                <span>{location}</span>
            </div>
        </div>
        <div style={{
            flex: "7 1 0",
            padding: "1rem 0.5rem",
            paddingLeft: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: hoveredButton === title ? ProgramTypeToColor[type] : BACKGROUNDCOLOR
        }} className='border-radius background-color-grey'>
            <div>
                <span className='font-b-bold'>{title}</span><br />
                <span>
                    {people}
                </span>
            </div>
        </div>
    </div>
}