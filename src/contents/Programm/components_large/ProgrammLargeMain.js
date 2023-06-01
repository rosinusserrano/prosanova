import React, { useState } from 'react'
import { ProgrammLargeButton } from './ProgrammLargeButton'

function ProgrammLargeMain({ProgrammFuerTag}) {
    const [hoveredButton, setHoveredButton] = useState("")
    const [clickedButton, setClickedButton] = useState("")
  return (
    <div className='inside-main-content-wrapper'
            style={{
                display: "flex",
                height: "100%",
                gap: "0.3rem"
            }}>
            <div style={{
                flex: "2 1 0",
                display: "grid",
                gridTemplateAreas: "'overlay'"
            }}>
                {ProgrammFuerTag.map(({title, description}) =>
                <div className='border-radius background-color-grey inside-page-padding'
                    style={{
                        gridArea: "overlay",
                        display: clickedButton === title ? "block" : "none"
                    }}>
                    <span className='font-b-bold font-size-5'>{title}</span><br/>
                    {description}
                </div>)}
            </div>
            <div style={{
                flex: "3 1 0"
            }}>
                {ProgrammFuerTag.map(({ location, title, time, people, type }) => <>
                    <ProgrammLargeButton
                        location={location}
                        time={time}
                        title={title}
                        people={people}
                        type={type}
                        hoveredButton={hoveredButton}
                        setHoveredButton={setHoveredButton}
                        setClickedButton={setClickedButton}
                    />
                    <div style={{height: "0.3rem"}} />
                </>)}
            </div>
        </div>
  )
}

export default ProgrammLargeMain