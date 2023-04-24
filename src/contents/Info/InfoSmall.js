import React from 'react'
import { InfoBubble1Text, InfoBubble2Text } from './InfoInfo'

function InfoSmall() {
    return (
        <div className="inside-main-content-wrapper" style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            height: "100%"
        }}>
            <div className="inside-page-padding background-color-grey border-radius font-size-1 scrollable-element"
                style={{
                    flexGrow: "revert",
                }}>
                {InfoBubble1Text}
                <br/><br/><br/>
                {InfoBubble2Text}
            </div>
        </div>
    )
}

export default InfoSmall