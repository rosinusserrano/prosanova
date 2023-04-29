import React from 'react'
import { LineUpInformation } from './LineUpInformation'

function LineUpSmall({ openLineUp, setOpenLineUp, setBackFunction, color }) {
    return (
        <div style={{
            display: "grid",
            gridTemplateAreas: "'overlay'",
            height: "100%",
            width: "100%"
        }}>

            <div style={{
                gridArea: "overlay",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                height: "100%",
                overflowY: "auto",
            }}>
                {
                    LineUpInformation.map(({ title, subtitle }) => {
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
    return <div style={{
        textAlign: "center",
        color: color
    }}
        className='border-radius background-color-grey'
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