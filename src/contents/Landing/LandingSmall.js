import FridgePoetry from 'components/FridgePoetry'
import React from 'react'

function LandingSmall({ color }) {

    const today = new Date()
    const festivalDate = new Date("2023-06-23")
    const daysDiff = Math.round(((festivalDate - today) / 1000 / 60 / 60 / 24) + 1) - 0

    return (
        <div className='inside-main-content-wrapper border-radius background-color-grey inside-page-padding font-size-1'
            style={{
                height: "100%",
                width: "100%",
                overflow: "scroll"
            }}>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                width: "100%"
            }}>
                {daysDiff > 0 ? <>
                    <FridgePoetry color="white">noch</FridgePoetry>
                    <FridgePoetry color={color}>{daysDiff}</FridgePoetry>
                    <FridgePoetry color="white">Tage</FridgePoetry>
                    <FridgePoetry color="white">bis</FridgePoetry>
                    <FridgePoetry color="white">zum</FridgePoetry>
                </> : (
                    daysDiff > -3 ? <>
                        <FridgePoetry color="white">Der</FridgePoetry>
                        <FridgePoetry color={color}>{(daysDiff * -1) + 1}.</FridgePoetry>
                        <FridgePoetry color="white">Tag</FridgePoetry>
                        <FridgePoetry color="white">des</FridgePoetry>
                        <FridgePoetry color="white">PROSANOVA</FridgePoetry>
                    </> : <>
                        <FridgePoetry color={color}>{(daysDiff * -1) - 2}</FridgePoetry>
                        <FridgePoetry color="white">{(daysDiff * -1) - 2 > 1 ? "Tage" : "Tag"}</FridgePoetry>
                        <FridgePoetry color="white">seit</FridgePoetry>
                        <FridgePoetry color="white">dem</FridgePoetry>
                        <FridgePoetry color="white">PROSANOVA</FridgePoetry>
                    </>
                )}
                <FridgePoetry color="white">Festival</FridgePoetry>
                <FridgePoetry color="white">für</FridgePoetry>
                <FridgePoetry color="white">junge</FridgePoetry>
                <FridgePoetry color="white">Literatur</FridgePoetry>
                <FridgePoetry color="white">am</FridgePoetry>
                <FridgePoetry color="white">23.-25. Juni</FridgePoetry>
                <FridgePoetry color="white">in</FridgePoetry>
                <FridgePoetry color="white">Hildesheim</FridgePoetry>
                <div style={{
                    width: "100%"
                }}>
                    <img style={{
                        width: "100%"
                    }} src='images/Schlechte_Woerter_Sticker.gif' />
                </div>
            </div>
        </div>
    )
}

export default LandingSmall