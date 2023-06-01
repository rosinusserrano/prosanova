import React, { useState } from 'react'
import { ProgrammAmFreitag } from './ProgrammInformation'
import ProgrammTagChoice from './components_large/ProgrammTagChoice';
import ProgrammLargeMain from './components_large/ProgrammLargeMain';

function ProgrammLarge({ color }) {

    const [day, setDay] = useState("");


    return (
        <div className='inside-main-content-wrapper'
            style={{
                display: "grid",
                gridTemplateAreas: "'overlay'",
                height: "100%",
                width: "100%"
            }}>
            <div style={{
                display: day == "" ? "block" : "none",
                gridArea: "overlay",
                height: "100%"
            }}>
                <ProgrammTagChoice setDayFunction={setDay} />
            </div>
            <div style={{
                display: day == "friday" ? "block" : "none",
                gridArea: "overlay"
            }}>
                <ProgrammLargeMain ProgrammFuerTag={ProgrammAmFreitag} />
            </div>
            <div style={{
                display: day == "saturday" ? "block" : "none",
                gridArea: "overlay"
            }}>
                <ProgrammLargeMain ProgrammFuerTag={ProgrammAmFreitag} />
            </div>
            <div style={{
                display: day == "sunday" ? "block" : "none",
                gridArea: "overlay"
            }}>
                <ProgrammLargeMain ProgrammFuerTag={ProgrammAmFreitag} />
            </div>
        </div>
    )
}

export default ProgrammLarge