import React, { useState } from 'react'

import { TextOnTop, Leitung, Praktikant_innen } from './TeamInformation'
import { PrettyName, TeamMemberImage, TeamMemberSection } from './TeamComponents'

function TeamSmall({ color, setBackFunction }) {
    const [openSection, setOpenSection] = useState(null)

    console.log(setBackFunction)

    return (
        <div style={{
            display: "grid",
            height: "100%",
            overflow: "scroll",
            width: "100%",
            gridTemplateAreas: "'overlay'",
            gridTemplateColumns: "repeat(1, 1fr)"
        }}>
            <div style={{
                gridArea: "overlay",
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
            }}>
                <div style={{
                    flexGrow: 1
                }}
                    className='border-radius background-color-grey'>
                    {TextOnTop}
                </div>
                <div style={{ height: "3rem" }}
                    className='border-radius background-color-grey'
                    onClick={() => {setOpenSection("leitung"); setBackFunction(() => () => {setOpenSection(null); setBackFunction(null)})}}>
                    Künstlerische Leitung
                </div>
                <div style={{ height: "3rem" }}
                    className='border-radius background-color-grey'
                    onClick={() => {setOpenSection("praktikant_innen"); setBackFunction(() => () => {setOpenSection(null); setBackFunction(null)})}}>
                    Praktikant*innen
                </div>
            </div>

            <div className='border-radius background-color-grey'
                style={{
                    gridArea: "overlay",
                    padding: "0px 0.5rem 0px 0.5rem",
                    display: openSection == "leitung" ? "block": "none"
                }}>
                <PrettyName name={"Künstlerische"} /> <PrettyName name={"Leitung"} />
                {Leitung.map(({ sectionId, sectionContent, name1, name2, altText, imgSrc }) => (<>
                    <TeamMemberImage
                        altText={altText}
                        imgSrc={imgSrc}
                        sectionId={sectionId}
                        color={color} />
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
                    padding: "0px 0.5rem 0px 0.5rem",
                    display: openSection == "praktikant_innen" ? "block": "none"  
                }}>
                <PrettyName name={"Praktikant*innen"} />
                {Praktikant_innen.map(({ sectionId, sectionContent, name1, name2, altText, imgSrc }) => (<>
                    <TeamMemberImage
                        altText={altText}
                        imgSrc={imgSrc}
                        sectionId={sectionId}
                        color={color} />
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