import FridgePoetry from 'components/FridgePoetry'
import React, { useState } from 'react'
import { ProgramTypeToColor } from '../ProgrammInformationV2'
import { BACKGROUNDCOLOR } from 'constants'
import { useTablet } from 'hooks/useMediaQuery'
import WigglyButton from 'components/WigglyButton'

function ProgrammLargeFooter({ day, setDay, animationControls, filteredTags, setFilteredTags }) {
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
                    setDay(getPreviousDay(day, isTablet, {}))
                }}>
                {getPreviousDay(day, isTablet, { germanAllCaps: true })}
            </div>
            <div style={{
                flexGrow: 1,
                display: "flex",
                placeItems: "center",
                paddingLeft: "0.7rem",
                gap: isTablet ? "0.2rem" : "0.6rem",
                color: "white"
            }} className={`border-radius ${isTablet ? "font-size-2" : "font-size-1"} background-color-grey`}>
                {Object.keys(ProgramTypeToColor).map(
                    (type) => <WigglyButton onClick={() => {
                        if (filteredTags.includes(type)) {
                            const newFilteredTags = filteredTags
                            newFilteredTags.splice(newFilteredTags.indexOf(type), 1)
                            setFilteredTags([...newFilteredTags])
                            animationControls.start({ flex: "0 0 0" })
                        } else {
                            setFilteredTags([...filteredTags, type])
                            animationControls.start({ flex: "0 0 0" })
                        }
                    }}>
                        <FridgePoetry
                            color={filteredTags.includes(type) || filteredTags.length === 0 ? ProgramTypeToColor[type] : "white"}>
                            {type}
                        </FridgePoetry>
                    </WigglyButton>)}
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
                    setDay(getNextDay(day, isTablet, {}))
                }}>
                {getNextDay(day, isTablet, { germanAllCaps: true })}
            </div>
        </footer>
    )
}

function getNextDay(currentDay, isTablet, { germanAllCaps = false }) {
    if (currentDay === "friday") {
        if (germanAllCaps) {
            return isTablet ? "SA" : "Samstag"
        } else {
            return "saturday"
        }
    } else if (currentDay === "saturday") {
        if (germanAllCaps) {
            return isTablet ? "SO" : "SONNTAG"
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

function getPreviousDay(currentDay, isTablet, { germanAllCaps = false }) {
    if (currentDay === "friday") {
        if (germanAllCaps) {
            return "ZURÜCK"
        } else {
            return ""
        }
    } else if (currentDay === "saturday") {
        if (germanAllCaps) {
            return isTablet ? "FR" : "FREITAG"
        } else {
            return "friday"
        }
    } else if (currentDay === "sunday") {
        if (germanAllCaps) {
            return isTablet ? "SA" : "SAMSTAG"
        } else {
            return "saturday"
        }
    }
}

export default ProgrammLargeFooter