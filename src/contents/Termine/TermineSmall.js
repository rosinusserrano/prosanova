import React from 'react'
import { TermineInformation } from './TermineInformation'
import { TermineSmallButton } from './TermineSmallComponents'
import { TermineLargeSection } from './TermineLargeComponents'

function TermineSmall({ expandedSection, setExpandedSection, setBackFunction, color }) {
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
                gap: "0.5rem",
                flexDirection: "column",
                overflow: "scroll"
            }}>
                {TermineInformation.map(({ date, title }) => {
                    return <TermineSmallButton
                        date={date}
                        title={title}
                        expandedSection={expandedSection}
                        setExpandedSection={setExpandedSection}
                        setBackFunction={setBackFunction}
                        color={color}
                        />
                })}
            </div>
            
            {TermineInformation.map(({ contentJSX, date }) => {
            return <TermineLargeSection thisSection={date} expandedSection={expandedSection}>
              {contentJSX}
            </TermineLargeSection>
          })}
        </div>
    )
}

export default TermineSmall