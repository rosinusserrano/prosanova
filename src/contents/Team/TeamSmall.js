import React, { useState } from 'react'

import { TextOnTop, Leitung, Praktikant_innen } from './TeamInformation'
import { PrettyName, TeamMemberImage, TeamMemberImageSmall, TeamMemberSection } from './TeamComponents'

function TeamSmall({ color, setBackFunction }) {
    const [openSection, setOpenSection] = useState(null)

    console.log(setBackFunction)

    return (
        <div style={{
            display: "grid",
            height: "100%",
            width: "100%",
            gridTemplateAreas: "'overlay'",
            gridTemplateColumns: "repeat(1, 1fr)"
        }}>
            <div style={{
                gridArea: "overlay",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                height: "100%",
                overflow: "scroll"
            }}>
                <div style={{
                    flex: "1 1 auto",
                    overflow: "scroll"
                }}
                    className='border-radius background-color-grey font-size-1'>
                    <div style={{ padding: "2rem" }}>{TextOnTop}</div>
                </div>
                <div className='border-radius background-color-grey'
                    onClick={() => { setOpenSection("leitung"); setBackFunction(() => () => { setOpenSection(null); setBackFunction(null) }) }}>
                    <div style={{ textAlign: "center" }}>
                        <PrettyName name="Künstlerische" appendWhiteSpace={true} /> <PrettyName name="Leitung" />
                    </div>
                </div>
                <div style={{ height: "" }}
                    className='border-radius background-color-grey'
                    onClick={() => { setOpenSection("praktikant_innen"); setBackFunction(() => () => { setOpenSection(null); setBackFunction(null) }) }}>
                    <div style={{ textAlign: "center" }}>
                        <PrettyName name="Praktikant*innen" />
                    </div>
                </div>
            </div>

            <div className='border-radius background-color-grey'
                style={{
                    gridArea: "overlay",
                    padding: "2rem",
                    overflow: "scroll",
                    display: openSection == "leitung" ? "block" : "none",
                }}>

                <div style={{
                    gridColumn: "span 3",
                    gridRow: "span 2"
                }}>
                    <img src='images/KL_Team.jpg' style={{ height: "100%", width: "100%" }} className='border-radius' />
                </div>

                <div style={{ textAlign: "center", margin: "1rem 0" }}>
                    <PrettyName name={"Künstlerische"} /> <PrettyName name={"Leitung"} />
                </div>

                {Leitung.map(({ sectionId, sectionContent, name1, name2, altText, imgSrc, imgObjectPosition }) => (<>
                    <TeamMemberImageSmall
                        altText={altText}
                        imgSrc={imgSrc}
                        sectionId={sectionId}
                        color={color}
                        imgObjectPosition={imgObjectPosition}
                    />
                    <TeamMemberSection sectionId={sectionId}
                        sectionContent={sectionContent}
                        name1={name1}
                        name2={name2}
                        key={`${sectionId}_membersection`}
                    />
                </>))}
            </div>

            <div className='border-radius background-color-grey'
                style={{
                    gridArea: "overlay",
                    padding: "2rem",
                    overflow: "scroll",
                    display: openSection == "praktikant_innen" ? "block" : "none"
                }}>
                <div style={{
                    textAlign: "center"
                }}>
                    <PrettyName name={"Praktikant*innen"} />
                </div>
                {Praktikant_innen.map(({ sectionId, sectionContent, name1, name2, altText, imgSrc, imgObjectPosition }) => (<>
                    <TeamMemberImageSmall
                        altText={altText}
                        imgSrc={imgSrc}
                        sectionId={sectionId}
                        color={color}
                        imgObjectPosition={imgObjectPosition}
                    />
                    <TeamMemberSection sectionId={sectionId}
                        sectionContent={sectionContent}
                        name1={name1}
                        name2={name2}
                        key={`${sectionId}_membersection`}
                    />
                </>))}
            </div>
        </div>
    )
}

export default TeamSmall