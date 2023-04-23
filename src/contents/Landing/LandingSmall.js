import FridgePoetry from 'components/FridgePoetry'
import React from 'react'

function LandingSmall() {
    return (
        <div className='inside-main-content-wrapper border-radius background-color-grey inside-page-padding font-size-1'
            style={{
                height: "100%",
                width: "100%",
            }}>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
            }}>
                <FridgePoetry color="white">noch</FridgePoetry>
                <FridgePoetry color="skyblue">76</FridgePoetry>
                <FridgePoetry color="white">Tage</FridgePoetry>
                <FridgePoetry color="white">bis</FridgePoetry>
                <FridgePoetry color="white">zum</FridgePoetry>
                <FridgePoetry color="white">Festival</FridgePoetry>
                <FridgePoetry color="white">für</FridgePoetry>
                <FridgePoetry color="white">junge</FridgePoetry>
                <FridgePoetry color="white">Literatur</FridgePoetry>
                <FridgePoetry color="white">am</FridgePoetry>
                <FridgePoetry color="white">23.-25. Juni</FridgePoetry>
                <FridgePoetry color="white">in</FridgePoetry>
                <FridgePoetry color="white">Hildesheim</FridgePoetry>
            </div>
        </div>
    )
}

export default LandingSmall