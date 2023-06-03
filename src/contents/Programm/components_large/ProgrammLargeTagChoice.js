
import { BACKGROUNDCOLOR } from 'constants'
import React, { useState } from 'react'

function ProgrammTagChoice({ setDayFunction }) {

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
                <ProgrammLargeTagChoiceButton
                    day="Freitag" date="23.06.2023"
                    onClick={() => setDayFunction("friday")}
                />
                <ProgrammLargeTagChoiceButton
                    day="Samstag" date="24.06.2023"
                    onClick={() => setDayFunction("saturday")}
                />
                <ProgrammLargeTagChoiceButton
                    day="Sonntag" date="25.06.2023"
                    onClick={() => setDayFunction("sunday")}
                />
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


function ProgrammLargeTagChoiceButton({ day, date, onClick }) {
    const [hovered, setHovered] = useState(false)

    return < div className='border-radius background-color-grey'
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        style={{
            textAlign: "center",
            padding: "0.5rem 3rem",
            cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
            backgroundColor: hovered ? "transparent" : BACKGROUNDCOLOR,
            borderRadius: "50px"
        }}>
        <span className='font-b-bold font-size-1'>{day}</span><br />
        <span className=''>{date}</span>
    </div >
}

export default ProgrammTagChoice