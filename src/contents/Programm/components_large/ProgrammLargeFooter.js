import FridgePoetry from 'components/FridgePoetry'
import React, { useState } from 'react'
import { ProgramTypeToColor } from '../ProgrammInformation'
import { BACKGROUNDCOLOR } from 'constants'
import { useTablet } from 'hooks/useMediaQuery'

function ProgrammLargeFooter({ day, setDay, animationControls }) {
    const [hoveredButton, setHoveredButton] = useState("")
    const isTablet = useTablet()
    const height = isTablet ? "2rem" : "3rem"
    return (
        <footer
            className=""
            style={{
                minHeight: height,
                maxHeight: height,
                height: height,
                display: "flex",
                gap: "0.5rem"
            }}
        >
            <div style={{
                display: "flex",
                padding: "0.5rem",
                placeItems: "center",
                justifyContent: "center",
                backgroundColor: hoveredButton === "back" ? "transparent" : BACKGROUNDCOLOR,
                cursor: "url(MouseHand-Klick_small.png) 32 0, pointer"
            }} className='border-radius background-color-grey font-b-bold'
                onPointerOver={() => setHoveredButton("back")}
                onPointerLeave={() => setHoveredButton("")}
                onClick={() => {
                    animationControls.start({ flex: "0 0 0" })
                    setDay(getPreviousDay(day, {}))
                }}>
                {getPreviousDay(day, { germanAllCaps: true })}
            </div>
            <div style={{
                flexGrow: 1,
                display: "flex",
                placeItems: "center",
                paddingLeft: isTablet ? "0.7rem"  :"2rem",
                gap: isTablet ? "0.2rem" : "0.6rem"
            }} className={`border-radius ${isTablet ? "font-size-2" : "font-size-1"} background-color-grey`}>
                {Object.keys(ProgramTypeToColor).map(
                    (type) => <FridgePoetry color={ProgramTypeToColor[type]}>{type}</FridgePoetry>)}
            </div>
            <div style={{
                display: day === "sunday" ? "none" : "flex",
                padding: "0.5rem",
                placeItems: "center",
                justifyContent: "center",
                backgroundColor: hoveredButton === "next" ? "transparent" : BACKGROUNDCOLOR,
                cursor: "url(MouseHand-Klick_small.png) 32 0, pointer"
            }} className='border-radius background-color-grey font-b-bold'
                onPointerOver={() => setHoveredButton("next")}
                onPointerLeave={() => setHoveredButton("")}
                onClick={() => {
                    animationControls.start({ flex: "0 0 0" })
                    setDay(getNextDay(day, {}))
                }}>
                {getNextDay(day, { germanAllCaps: true })}
            </div>
        </footer>
    )
}

function getNextDay(currentDay, { germanAllCaps = false }) {
    if (currentDay === "friday") {
        if (germanAllCaps) {
            return "SAMSTAG"
        } else {
            return "saturday"
        }
    } else if (currentDay === "saturday") {
        if (germanAllCaps) {
            return "SONNTAG"
        } else {
            return "sunday"
        }
    } else if (currentDay === "sunday") {
        if (germanAllCaps) {
            return "MONTAG"
        } else {
            return "monday"
        }
    }
}

function getPreviousDay(currentDay, { germanAllCaps = false }) {
    console.log(currentDay)
    if (currentDay === "friday") {
        if (germanAllCaps) {
            return "ZURÜCK"
        } else {
            return ""
        }
    } else if (currentDay === "saturday") {
        if (germanAllCaps) {
            return "FREITAG"
        } else {
            return "friday"
        }
    } else if (currentDay === "sunday") {
        if (germanAllCaps) {
            return "SAMSTAG"
        } else {
            return "saturday"
        }
    }
}

export default ProgrammLargeFooter