import React, { useState } from 'react'
import { LineUpInformation } from './LineUpInformation'
import "../../styles/lineup.css"
import { BACKGROUNDCOLOR } from 'constants'

function LineUpLarge({ openLineUp, color, setOpenLineUp }) {
    const lineUpInfo = LineUpInformation
    lineUpInfo.sort((a,b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0))
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

                {lineUpInfo.map(({ title, contentJSX }) => {
                    return <div className='border-radius background-color-grey scrollable-element' style={{
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
                width: "100%",
                overflowY: "auto"
            }}>
                <div className='lineup-grid font-size-1 scrollable-element'>
                    {lineUpInfo.map(({ title, subtitle }) => <LineUpLargeButton
                        title={title}
                        subtitle={subtitle }
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
        display: "flex",
        padding: "0.5rem",
        textAlign: "center",
        justifyItems: "center",
        alignItems: "center",
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
        <div style={{
            textAlign: "center",
            width: "100%"
        }}>
            {title} <br />
            {subtitle}
        </div>
    </div>
}