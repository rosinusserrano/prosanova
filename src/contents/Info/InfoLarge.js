import React from 'react'
import { InfoBubble1Text, InfoBubble2Text } from './InfoInfo'

function InfoLarge() {
    return (
        <>

            <div className="inside-main-content-wrapper" style={{
                display: "flex",
                flexDirection: "row",

                gap: "1rem",
                height: "100%"
            }}>
                <div className="inside-page-padding background-color-grey border-radius font-size-5 scrollable-element"
                    style={{
                        flexBasis: '70%',

                        flexGrow: "revert",
                    }}>
                    {InfoBubble1Text}     <div style={{
                    }}>
                        <img style={{
                            width: "80%",
                            rotate: "20deg",
                        }} src='images/Schlechte_Woerter_Sticker.gif' />
                    </div>
                </div>
                <div className="inside-page-padding border-radius font-size-5 scrollable-element background-color-grey"
                    style={{
                        flexBasis: '30%',

                        flexGrow: "revert",
                    }}>
                    {InfoBubble2Text}
               
                </div>
            </div>
        </>
    )
}

export default InfoLarge