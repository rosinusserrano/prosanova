import React from 'react'
import { TermineLargeButton, TermineLargeSection } from './TermineLargeComponents'
import { TermineInformation } from './TermineInformation'

function TermineLarge({expandedSection, setExpandedSection, color}) {
  return (
    <div className="inside-main-content-wrapper"
        style={{
          display: "flex",
          gap: "1rem",
          height: "100%"
        }}>

        <div style={{
          flex: "2 2 0",
          display: "flex",
          flexDirection: "column",
          gap: "0.4rem"
        }}>
          {TermineInformation.map(({ date, title }) => {
            return <TermineLargeButton 
              date={date}
              title={title}
              onClick={() => {setExpandedSection(expandedSection == date ? "" : date)}}
              key={`${date}_${title}`}
              expandedSection={expandedSection}
              color={color}
              />
          }
          )}
        </div>

        <div style={{
          flex: "3 3 0",
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateAreas: "'overlay'"
        }}>
          {TermineInformation.map(({ contentJSX, date }) => {
            return <TermineLargeSection thisSection={date} expandedSection={expandedSection}>
              {contentJSX}
            </TermineLargeSection>
          })}
        </div>

      </div>
  )
}

export default TermineLarge