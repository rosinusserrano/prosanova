import { useControls } from 'leva'
import React from 'react'

function BackButton({color}) {

    const baseStyle = {
        height: "100%",
        width: "100%",
        gridArea: "overlay",
        transformOrigin: "2px 50%",
    }

    const { borderRadius, degree, width, translateX} = useControls({
        borderRadius: "10px",
        degree: {value: 45, step: 1},
        width: "50%",
        translateX: {value: 0, step: 1},
    })
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
            className='background-color-grey'>
            <div style={{
                height: "5px",
                display: "grid",
                margin: "auto",
                width: width,
                gridTemplateAreas: "'overlay'",
                transform: `translateX(${translateX}px)`
            }}>
                <div style={{
                    ...baseStyle,
                    backgroundColor: color,
                    borderRadius: borderRadius,
                    transform: `rotate(${degree}deg)`}}></div>
                <div style={{
                    ...baseStyle,
                    backgroundColor: color,
                    borderRadius: borderRadius,
                    transform: `rotate(${-degree}deg)`}}></div>
            </div>
        </div>
    )
}

export default BackButton