
import { BACKGROUNDCOLOR } from 'constants'
import { useMobile } from 'hooks/useMediaQuery'
import React, { useState } from 'react'

function ProgrammTagChoice({ setDayFunction }) {

    const [hoveredButton, setHoveredButton] = useState("")

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "1.5rem"
            }}>
                <div className='border-radius background-color-grey'
                    onClick={() => setDayFunction("friday")}
                    onPointerOver={() => setHoveredButton("friday")}
                    onPointerLeave={() => setHoveredButton("")}
                    style={{
                        textAlign: "center",
                        padding: "0.5rem 3rem",
                        cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
                        backgroundColor: hoveredButton === "friday" ? "transparent" : BACKGROUNDCOLOR
                    }}>
                    <span className='font-b-bold'>Freitag</span><br />
                    <span >23.06.2023</span>
                </div>
                <div className='border-radius background-color-grey'
                    onClick={() => setDayFunction("saturday")}
                    onPointerOver={() => setHoveredButton("saturday")}
                    onPointerLeave={() => setHoveredButton("")}
                    style={{
                        textAlign: "center",
                        padding: "0.5rem 3rem",
                        cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
                        backgroundColor: hoveredButton === "saturday" ? "transparent" : BACKGROUNDCOLOR
                    }}>
                    <span className='font-b-bold'>Samstag</span><br />
                    <span >24.06.2023</span>
                </div>
                <div className='border-radius background-color-grey'
                    onClick={() => setDayFunction("sunday")}
                    onPointerOver={() => setHoveredButton("sunday")}
                    onPointerLeave={() => setHoveredButton("")}
                    style={{
                        textAlign: "center",
                        padding: "0.5rem 3rem",
                        cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
                        backgroundColor: hoveredButton === "sunday" ? "transparent" : BACKGROUNDCOLOR
                    }}>
                    <span className='font-b-bold'>Sonntag</span><br />
                    <span >25.06.2023</span>
                </div>
            </div>
            {/* <div style={{height: "4rem"}} ></div>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <div className='border-radius background-color-grey'
                    onPointerOver={() => setHoveredButton("pdf")}
                    onPointerLeave={() => setHoveredButton("")}
                    style={{
                        textAlign: "center",
                        padding: "0.5rem 3rem",
                        cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
                        backgroundColor: hoveredButton === "pdf" ? "transparent" : BACKGROUNDCOLOR
                    }}>
                    <span >Timetable als PDF<br />herunterladen</span>

                </div>
            </div> */}
        </div>
    )
}

export default ProgrammTagChoice