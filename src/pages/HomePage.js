import React, { useState } from "react";
import Letters3DGame from "contents/Letters3DGame/Letters3DGame";
import Info from "contents/Info";
import Team from "contents/Team/Team";

import { Helmet } from "react-helmet";
import "../styles/imprint.css";
import "../styles/fonts.css";
import "../styles/pages.css";
// import "../styles/responsive.css";

import { slide as Menu } from 'react-burger-menu';
import Imprint from "contents/Imprint";
import Termine from "contents/Termine/Termine";
import LineUp from "contents/LineUp";
import Header from "components/Header/Header";
import { motion } from "framer-motion";


function PageSwitch({ page, color }) {
  switch (page) {
    case "info":
      return <Info></Info>
    case "imprint":
      return <Imprint></Imprint>
    case "termine":
      return <Termine></Termine>
    case "team":
      return <Team color={color}></Team>
    case "game":
      // return <Letters3DGame></Letters3DGame>
      return <LineUp />
    case "lineup":
      return <LineUp></LineUp>
    default:
      return <Letters3DGame></Letters3DGame>
  }
}


export default function HomePage() {
  const [currentColor, setCurrentColor] = useState("teal");

  const [activePage, setActivePage] = useState("game")

  return (
    <div style={
      {
        background: currentColor === "teal" ? "url('blue-sky.jpg')" : currentColor,
        backgroundSize: currentColor === "teal" ? "cover" : "auto auto",
        cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
        width: "100vw",
        height: "100vh",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        overflow: "auto",
        fontFamily: "BastardoRegular"
      }}>
      {/* <Balloon></Balloon> */}
      <Helmet>
        <title>PROSANOVA 2023</title>
        <meta
          name="description"
          content="Prosanova 2023. Festival für junge Literatur."
        />
      </Helmet>

      <div className="header-wrapper">
        <Header setActivePage={setActivePage} setCurrentColor={setCurrentColor} />
      </div>

      <motion.div style={{
        flexGrow: 1,
        zIndex: 100,
        borderRadius: "25px",
        overflow: "hidden",
      }}>
        <main style={{height: "100%"}}>
          <PageSwitch page={activePage} color={currentColor}></PageSwitch>
        </main>
      </motion.div>
    </div>
  );
}
