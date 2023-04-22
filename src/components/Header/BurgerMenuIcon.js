import React from 'react'

function BurgerMenuIcon() {
  const shadow = "inset 1px 1px 7px rgba(0, 0, 0, 0.25)"
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        gap: "0.2rem",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
      <div className="background-color-grey" style={{
        width: "100%",
        height: "20%",
        borderRadius: "20px",
        boxShadow: shadow
      }}></div>
      <div className="background-color-grey" style={{
        width: "100%",
        height: "20%",
        borderRadius: "20px",
        boxShadow: shadow
      }}></div>
      <div className="background-color-grey" style={{
        width: "100%",
        height: "20%",
        borderRadius: "20px",
        boxShadow: shadow
      }}></div>
    </div>
  )
}

export default BurgerMenuIcon