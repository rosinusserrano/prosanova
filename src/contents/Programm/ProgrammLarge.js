import React, { useState } from 'react'
import { ProgrammAmFreitag, ProgrammAmSamstag, ProgrammAmSonntag } from './ProgrammInformationV2'
import ProgrammTagChoice from './components_large/ProgrammLargeTagChoice';
import ProgrammLargeMain from './components_large/ProgrammLargeMain';
import { StandardFooter } from 'components/Footer';
import ProgrammLargeFooter from './components_large/ProgrammLargeFooter';
import { useAnimationControls } from 'framer-motion';

function ProgrammLarge({ color, setDay, day }) {

    const controls = useAnimationControls()

    const [filteredTags, setFilteredTags] = useState([])

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
                    <ProgrammLargeMain ProgrammFuerTag={ProgrammAmFreitag} animationControls={controls}
                        filteredTags={filteredTags}
                    />
                </div>
                <div style={{
                    display: day === "saturday" ? "block" : "none",
                    gridArea: "overlay",
                    height: "100%",
                    overflowY: "auto"
                }}>
                    <ProgrammLargeMain ProgrammFuerTag={ProgrammAmSamstag} animationControls={controls}
                        filteredTags={filteredTags} />
                </div>
                <div style={{
                    display: day === "sunday" ? "block" : "none",
                    gridArea: "overlay",
                    height: "100%",
                    overflowY: "auto"
                }}>
                    <ProgrammLargeMain ProgrammFuerTag={ProgrammAmSonntag} animationControls={controls}
                        filteredTags={filteredTags}
                    />
                </div>
            </div>
            {day === "" ? <StandardFooter currentColor={color} />
                : <ProgrammLargeFooter
                    day={day}
                    setDay={setDay}
                    animationControls={controls}
                    filteredTags={filteredTags}
                    setFilteredTags={setFilteredTags}
                />}
        </div>
    )
}

export default ProgrammLarge