import React from 'react'
import { InfoBubble1Text, InfoBubble2Text } from './InfoInfo'

function InfoLarge() {
    return (
        <>
            <div className="inside-main-content-wrapper" style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                height: "100%"
            }}>
                <div className="inside-page-padding background-color-grey border-radius font-size-5 scrollable-element"
                    style={{
                        flexGrow: "revert",
                    }}>
                    {InfoBubble1Text}
                </div>
                <div className="inside-page-padding border-radius font-size-5 scrollable-element background-color-grey"
                    style={{
                        flexGrow: "revert",
                    }}>
                    {InfoBubble2Text}
                    <div style={{
                    }}>
                        <img style={{
                            width: "15%",
                            rotate: "20deg",
                            marginLeft: "75%"
                        }} src='images/Schlechte_Woerter_Sticker.gif' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoLarge