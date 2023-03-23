import React, { useState } from 'react'
import { motion } from 'framer-motion'
import WigglyButton from 'components/WigglyButton'
import Balloon from 'components/Balloon'
import Letters3DGame from 'components/Letters3DGame'

export default function HomePage() {
  const [currentColor, setCurrentColor] = useState("blue")
  return (
    <div style={{ padding: "20px", backgroundColor: currentColor, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Balloon></Balloon>
      <header style={{ display: "inline-flex", justifyContent: "space-between", width: "100%", backgroundColor: "#ddd", flex: .5 }}>
        <div style={{ width: "25%", display: "flex", flexFlow: "row wrap", justifyContent: "space-evenly" }}>
          <WigglyButton>Info</WigglyButton>
          <WigglyButton>Programm</WigglyButton>
          <WigglyButton>Termine</WigglyButton>
          <WigglyButton>Imprint</WigglyButton>
          <WigglyButton>Line-Up</WigglyButton>
          <WigglyButton>Team</WigglyButton>
          <WigglyButton>Blog</WigglyButton>
        </div>
        <div>
          <p>PROSANOVA</p>
          <div style={{ display: "inline-flex", justifyContent: "space-evenly" }}>
            <div style={{ backgroundColor: "yellow", height: "25px", width: "25px", borderRadius: "50%" }} onClick={() => setCurrentColor("yellow")}></div>
            <div style={{ backgroundColor: "blue", height: "25px", width: "25px", borderRadius: "50%" }} onClick={() => setCurrentColor("blue")}></div>
            <div style={{ backgroundColor: "red", height: "25px", width: "25px", borderRadius: "50%" }} onClick={() => setCurrentColor("red")}></div>
            <div style={{ backgroundColor: "green", height: "25px", width: "25px", borderRadius: "50%" }} onClick={() => setCurrentColor("green")}></div>
          </div>
        </div>
      </header>
      <main style={{ width: "100%", backgroundColor: "#ddd", marginTop: "15px", flex: 18 }}>
        <Letters3DGame></Letters3DGame>
      </main>
    </div>
  )
}
