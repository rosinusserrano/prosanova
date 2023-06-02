import React, { useState } from 'react'
import { ProgrammAmFreitag, ProgrammAmSamstag, ProgrammAmSonntag } from './ProgrammInformation'
import ProgrammTagChoice from './components_large/ProgrammTagChoice';
import ProgrammLargeMain from './components_large/ProgrammLargeMain';
import { StandardFooter } from 'components/Footer';
import ProgrammLargeFooter from './components_large/ProgrammLargeFooter';
import { useAnimationControls } from 'framer-motion';

function ProgrammLarge({ color }) {

    const [day, setDay] = useState("");

    const controls = useAnimationControls()

    return (
        <div style={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            height: "100%",
            overflowY: "auto"
        }}>
            <div className='inside-main-content-wrapper'
                style={{
                    flex: "1",
                    display: "grid",
                    gridTemplateAreas: "'overlay'",
                    width: "100%",
                    height: "100%",
                    overflowY: "auto"
                }}>
                <div style={{
                    display: day === "" ? "block" : "none",
                    gridArea: "overlay",
                }}>
                    <ProgrammTagChoice setDayFunction={setDay} />
                </div>
                <div style={{
                    display: day === "friday" ? "block" : "none",
                    gridArea: "overlay",
                    height: "100%",
                    overflowY: "auto"
                }}>
                    <ProgrammLargeMain ProgrammFuerTag={ProgrammAmFreitag} animationControls={controls} />
                </div>
                <div style={{
                    display: day === "saturday" ? "block" : "none",
                    gridArea: "overlay",
                    height: "100%",
                    overflowY: "auto"
                }}>
                    <ProgrammLargeMain ProgrammFuerTag={ProgrammAmSamstag} animationControls={controls} />
                </div>
                <div style={{
                    display: day === "sunday" ? "block" : "none",
                    gridArea: "overlay",
                    height: "100%",
                    overflowY: "auto"
                }}>
                    <ProgrammLargeMain ProgrammFuerTag={ProgrammAmSonntag} animationControls={controls} />
                </div>
            </div>
            {day === "" ? <StandardFooter currentColor={color} /> : <ProgrammLargeFooter day={day} setDay={setDay} animationControls={controls} />}
        </div>
    )
}

export default ProgrammLarge