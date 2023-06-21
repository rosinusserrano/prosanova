import { BACKGROUNDCOLOR } from 'constants'
import React, { useState } from 'react'

function ProgrammSmallTagChoice({ setDayFunction, setBackFunction }) {
    const [hoveredButton, setHoveredButton] = useState("")
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "0 2rem",
            placeItems: "center",
            justifyContent: "center",
            height: "100%"
        }}>
            <div className='border-radius background-color-grey'
                onClick={() => {
                    setDayFunction("friday");
                    setBackFunction(() => () => {
                        setDayFunction("")
                        setBackFunction(null)
                    })
                }}
                onPointerOver={() => setHoveredButton("friday")}
                onPointerLeave={() => setHoveredButton("")}
                style={{
                    textAlign: "center",
                    padding: "0.5rem 3rem",
                    cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
                    backgroundColor: hoveredButton === "friday" ? "transparent" : BACKGROUNDCOLOR,
                    maxWidth: "15rem"
                }}>
                <span className='font-b-bold'>Freitag</span><br />
                <span >23.06.2023</span>
            </div>
            <div className='border-radius background-color-grey'
                onClick={() => {
                    setDayFunction("saturday")
                    setBackFunction(() => () => {
                        setDayFunction("")
                        setBackFunction(null)
                    })
                }}
                onPointerOver={() => setHoveredButton("saturday")}
                onPointerLeave={() => setHoveredButton("")}
                style={{
                    textAlign: "center",
                    padding: "0.5rem 3rem",
                    cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
                    backgroundColor: hoveredButton === "saturday" ? "transparent" : BACKGROUNDCOLOR,
                    maxWidth: "15rem"
                }}>
                <span className='font-b-bold'>Samstag</span><br />
                <span >24.06.2023</span>
            </div>
            <div className='border-radius background-color-grey'
                onClick={() => {
                    setDayFunction("sunday")
                    setBackFunction(() => () => {
                        setDayFunction("")
                        setBackFunction(null)
                    })
                }}
                onPointerOver={() => setHoveredButton("sunday")}
                onPointerLeave={() => setHoveredButton("")}
                style={{
                    textAlign: "center",
                    padding: "0.5rem 3rem",
                    cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
                    backgroundColor: hoveredButton === "sunday" ? "transparent" : BACKGROUNDCOLOR,
                    maxWidth: "15rem"
                }}>
                <span className='font-b-bold'>Sonntag</span><br />
                <span >25.06.2023</span>
            </div>
            <div className='border-radius background-color-grey'
                onPointerOver={() => setHoveredButton("programpdf")}
                onPointerLeave={() => setHoveredButton("")}
                onClick={() => window.open(`/Timetable_PN23.pdf`, "_blank")}
                style={{
                    textAlign: "center",
                    padding: "0.5rem 3rem",
                    cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
                    backgroundColor: hoveredButton === "programpdf" ? "transparent" : BACKGROUNDCOLOR,
                    maxWidth: "15rem",
                    marginTop: "1rem"
                }}>
                <span >Programmheft als PDF herunterladen</span>

            </div>
            <div className='border-radius background-color-grey'
                onPointerOver={() => setHoveredButton("timetablepdf")}
                onPointerLeave={() => setHoveredButton("")}
                onClick={() => window.open(`/Programmheft_PN23.pdf`, "_blank")}
                style={{
                    textAlign: "center",
                    padding: "0.5rem 3rem",
                    cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
                    backgroundColor: hoveredButton === "timetablepdf" ? "transparent" : BACKGROUNDCOLOR,
                    maxWidth: "15rem",
                    marginTop: "1rem"
                }}>
                <span >Timetable als PDF herunterladen</span>

            </div>
        </div>
    )
}

export default ProgrammSmallTagChoice