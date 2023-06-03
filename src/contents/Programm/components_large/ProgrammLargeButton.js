import { BACKGROUNDCOLOR } from "constants"
import React from "react"
import { ProgramTypeToColor, makeProgramID } from "../ProgrammInformationV2"
import { useTablet } from "hooks/useMediaQuery"

export function ProgrammLargeButton({ type, time, location, title, people, description, hoveredButton, setHoveredButton, setClickedButton, animationControls }) {

    const isTablet = useTablet()

    const hovered = hoveredButton === makeProgramID(title, time, location) && Object.keys(ProgramTypeToColor).includes(type)

    return <div style={{
        width: "100%",
        display: "flex",
        gap: "0.3rem",
        cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
    }}
        onPointerOver={() => {
            console.log(makeProgramID(title, time, location))
            setHoveredButton(makeProgramID(title, time, location))
        }}
        onPointerLeave={() => setHoveredButton("")}
        onClick={() => {
            if (description !== "") {
                setClickedButton(makeProgramID(title, time, location))
                animationControls.start({ flex: "2 1 0" })
            }
        }}>
        <div style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            placeItems: "start",
            flex: isTablet ? "4 1 0" : "2 1 0",
            backgroundColor: hovered ? ProgramTypeToColor[type] : BACKGROUNDCOLOR,
            color: hovered ? "white" : "black"
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
            backgroundColor: hovered ? ProgramTypeToColor[type] : BACKGROUNDCOLOR,
            color: hovered ? "white" : "black"
        }} className='border-radius background-color-grey'>
            <div>
                <span className='font-b-bold'>{title === "" ? people : title}</span><br />
                <span>
                    {title === "" || title === <></> ? "" : people}
                </span>
            </div>
        </div>
    </div>
}