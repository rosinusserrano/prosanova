import React from 'react'

function BurgerMenuIcon() {
  return (
    <div
    style={{
        display: "flex",
        height: "100%",
        gap: "0.2rem",
        flexDirection: "column",
        justifyContent: "space-between"
    }}>
        <div className="border-radius background-color-grey" style={{width: "100%", height: "20%"}}></div>
        <div className="border-radius background-color-grey" style={{width: "100%", height: "20%"}}></div>
        <div className="border-radius background-color-grey" style={{width: "100%", height: "20%"}}></div>
    </div>
  )
}

export default BurgerMenuIcon