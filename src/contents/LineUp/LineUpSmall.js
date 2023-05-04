import React, { useState } from 'react'
import { LineUpInformation } from './LineUpInformation'
import { BACKGROUNDCOLOR } from 'constants'

function LineUpSmall({ openLineUp, setOpenLineUp, setBackFunction, color }) {
    const lineUpInfo = LineUpInformation
    lineUpInfo.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
    return (
        <div style={{
            display: "grid",
            gridTemplateAreas: "'overlay'",
            height: "100%",
            width: "100%"
        }}>

            <div style={{
                gridArea: "overlay",
                display: openLineUp == "" ? "flex" : "none",
                flexDirection: "column",
                gap: "1rem",
                height: "100%",
                overflowY: "auto",
            }}>
                {
                    lineUpInfo.map(({ title, subtitle }) => {
                        return <LineUpSmallButton
                            title={title}
                            subtitle={subtitle}
                            setBackFunction={setBackFunction}
                            setOpenLineUp={setOpenLineUp}
                            color={color}
                        />
                    })
                }
            </div>

            {LineUpInformation.map(({ title, contentJSX }) => {
                return <div  className='border-radius background-color-grey' style={{
                    gridArea: "overlay",
                    display: openLineUp == title ? "block" : "none",
                }}>
                    {contentJSX}
                </div>
            })}

        </div>
    )
}

export default LineUpSmall


function LineUpSmallButton({ title, subtitle, setOpenLineUp, color, setBackFunction }) {

    const [touch, setTouch] = useState(false)
    return <div style={{
        textAlign: "center",
        padding: "0.7rem",
        backgroundColor: touch ? "transparent" : BACKGROUNDCOLOR,
        color: touch ? "white" : "black",
        fontSize: "1.5rem"
    }}
        className='border-radius'
        onTouchStart={() => {
            setTouch(true)}}
        onTouchEnd={() => setTouch(false)}
        onClick={() => {
            setOpenLineUp(title);
            setBackFunction(() => () => {
                setOpenLineUp("");
                setBackFunction(null)
            });
        }}>
        {title} <br />
        {subtitle}
    </div>
}