import React, { useState } from 'react'
import { LineUpInformation } from './LineUpInformation'
import { BACKGROUNDCOLOR } from 'constants'
import { MusikInformation } from './MusikInformation'
import { ModerationInformation } from './ModerationInformation'
import { PrettyName } from 'contents/Team/TeamComponents'

function LineUpSmall({ openLineUp, setOpenLineUp, setBackFunction, color }) {
    const lineUpInfo = LineUpInformation
    lineUpInfo.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0))

    const musikInfo = MusikInformation
    musikInfo.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0))

    const moderationInfo = ModerationInformation
    moderationInfo.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0))

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
                width: "100%",
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

                <div style={{
                    display: "flex",
                    placeItems: "center",
                    justifyContent: "center",
                    padding: "2rem 0px 1rem 0px"
                }}
                    className='font-size-1'> <PrettyName name={"Musik"} /> </div>

                {
                    musikInfo.map(({ title, subtitle }) => {
                        return <LineUpSmallButton
                            title={title}
                            subtitle={subtitle}
                            setBackFunction={setBackFunction}
                            setOpenLineUp={setOpenLineUp}
                            color={color}
                        />
                    })
                }

                <div style={{
                    display: "flex",
                    placeItems: "center",
                    justifyContent: "center",
                    padding: "2rem 0px 1rem 0px"
                }}
                    className='font-size-1'> <PrettyName name={"Moderation"} /> </div>

                {
                    moderationInfo.map(({ title, subtitle }) => {
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

            {lineUpInfo.map(({ title, contentJSX }) => {
                return <div className='border-radius background-color-grey' style={{
                    gridArea: "overlay",
                    display: openLineUp == title ? "block" : "none",
                    height: "100%",
                    width: "100%",
                }}>
                    {contentJSX}
                </div>
            })}

            {musikInfo.map(({ title, contentJSX }) => {
                return <div className='border-radius background-color-grey' style={{
                    gridArea: "overlay",
                    display: openLineUp == title ? "block" : "none",
                    height: "100%",
                    width: "100%",
                }}>
                    {contentJSX}
                </div>
            })}

            {moderationInfo.map(({ title, contentJSX }) => {
                return <div className='border-radius background-color-grey' style={{
                    gridArea: "overlay",
                    display: openLineUp == title ? "block" : "none",
                    height: "100%",
                    width: "100%",
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
            setTouch(true)
        }}
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