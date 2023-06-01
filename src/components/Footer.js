import React from 'react'
import FridgePoetry from './FridgePoetry'

export function StandardFooter({ currentColor, hideFooter = false }) {
    const today = new Date()
    const festivalDate = new Date("2023-06-23")
    const daysDiff = Math.round((festivalDate - today) / 1000 / 60 / 60 / 24)

    return (
        <footer
            className="background-color-grey border-radius"
            style={{
                minHeight: "4rem",
                maxHeight: "4rem",
                height: "4rem",
                display: hideFooter ? "none" : "grid",

                // height: 'auto',
                fontFamily: "BastardoRegular",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    overflowY: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div className="footer-text"
                    style={{
                        fontSize: "1.5rem",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                        gap: "0.3rem",
                        margin: "1rem",
                    }}
                >
                    <FridgePoetry color="white">noch</FridgePoetry>
                    <FridgePoetry color={currentColor}>{daysDiff}</FridgePoetry>
                    <FridgePoetry color="white">Tage</FridgePoetry>
                    <FridgePoetry color="white">bis</FridgePoetry>
                    <FridgePoetry color="white">zum</FridgePoetry>
                </div>

                <div className="footer-text"
                    style={{
                        fontSize: "1.5rem",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "flex-center",
                        gap: "0.3rem",
                        margin: "1rem",
                        justifyContent: "center",
                    }}>
                    <FridgePoetry color="white">Festival </FridgePoetry>
                    <FridgePoetry color="white"> für </FridgePoetry>
                    <FridgePoetry color="white"> junge</FridgePoetry>

                    <FridgePoetry color="white">Literatur</FridgePoetry>
                </div>
                <div className="footer-text"
                    style={{
                        fontSize: "1.5rem",
                        display: "flex",
                        alignItems: "flex-end",
                        gap: "0.3rem",
                        margin: "1rem",
                        justifyContent: "end",

                    }}>            <FridgePoetry color="white">am</FridgePoetry>
                    <FridgePoetry color="white">23.-25. Juni</FridgePoetry>
                    <FridgePoetry color="white">in</FridgePoetry>
                    <FridgePoetry color="white">Hildesheim</FridgePoetry>
                </div>
            </div>
        </footer>
    )
}