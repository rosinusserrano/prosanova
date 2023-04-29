import React, { useState } from 'react'
import { LineUpInformation } from './LineUpInformation'
import "../../styles/lineup.css"
import { BACKGROUNDCOLOR } from 'constants'

function LineUpLarge({ openLineUp, color, setOpenLineUp }) {
    return (
        <div className='inside-main-content-wrapper' style={{
            display: "flex",
            gap: "1rem",
            height: "100%"
        }}>
            <div style={{
                flex: "4 1 0",
                height: "100%",
                width: "100%",
                display: "grid",
                gridTemplateAreas: "'overlay'",
            }}>

                {LineUpInformation.map(({ title, contentJSX }) => {
                    return <div className='border-radius background-color-grey' style={{
                        gridArea: "overlay",
                        display: title == openLineUp ? "block" : "none"
                    }}>
                        {contentJSX}
                    </div>
                })}

            </div>

            <div style={{
                flex: "7 1 0",
                height: "100%",
                width: "100%"
            }}>
                <div className='lineup-grid'>
                    {LineUpInformation.map(({ title, subtitle }) => <LineUpLargeButton
                        title={title}
                        subtitle={subtitle}
                        setOpenLineUp={setOpenLineUp}
                        color={color} openLineUp={openLineUp} />)}
                </div>
            </div>
        </div>
    )
}

export default LineUpLarge


function LineUpLargeButton({ title, subtitle, setOpenLineUp, color, openLineUp }) {

    const [hovered, setHovered] = useState(false)

    return <div style={{
        textAlign: "center",
        color: openLineUp == title || hovered ? "white" : "black",
        backgroundColor: openLineUp == title || hovered ? "transparent" : BACKGROUNDCOLOR,
        cursor: "url(MouseHand-Klick_small.png) 32 0, auto"
    }}
        className='border-radius'
        onClick={() => {
            setOpenLineUp(title == openLineUp ? "" : title);
        }}
        onPointerOver={() => {
            setHovered(true)
        }}
        onPointerLeave={() => {
            setHovered(false)
        }}>
        {title} <br />
        {subtitle}
    </div>
}