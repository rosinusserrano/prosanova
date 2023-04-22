import { useControls } from 'leva'
import React from 'react'

function BackButton({color, onClick}) {

    const baseStyle = {
        height: "100%",
        width: "100%",
        gridArea: "overlay",
        transformOrigin: "2px 50%",
        borderRadius: "10px",
    }

    const degree = 45


    return (
        <div style={{
            height: "100%",
            width: "100%",
            borderRadius: `10px`,
            boxShadow: `inset 5px 5px 10px rgba(0, 0, 0, 0.25)`,
            justifyContent: "center",
            alignContent: "center",
            display: "flex"
        }}
            className='background-color-grey'
            onClick={onClick}>
            <div style={{
                height: "5px",
                display: "grid",
                margin: "auto",
                width: "40%",
                gridTemplateAreas: "'overlay'",
                transform: `translateX(${2}px)`
            }}>
                <div style={{
                    ...baseStyle,
                    backgroundColor: color,
                    transform: `rotate(${degree}deg)`}}></div>
                <div style={{
                    ...baseStyle,
                    backgroundColor: color,
                    transform: `rotate(${-degree}deg)`}}></div>
            </div>
        </div>
    )
}

export default BackButton