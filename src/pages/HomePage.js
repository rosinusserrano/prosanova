import React, { useState } from "react";
import Info from "contents/Info/Info";
import Team from "contents/Team/Team";

import { Helmet } from "react-helmet";
import "../styles/imprint.css";
import "../styles/fonts.css";
import "../styles/pages.css";
// import "../styles/responsive.css";

import { slide as Menu } from "react-burger-menu";
import Imprint from "contents/Imprint";
import Termine from "contents/Termine/Termine";
import LineUp from "contents/LineUp";
import Header from "components/Header/Header";
import { motion } from "framer-motion";
import { useMobile } from "hooks/useMediaQuery";
import Landing from "contents/Landing/Landing";
import Blog from "contents/Blog/Blog";
import Shop from "contents/Shop";
import FridgePoetry from "components/FridgePoetry";

function PageSwitch({ page, color, setBackFunction }) {
  switch (page) {
    case "info":
      return <Info></Info>;
    case "imprint":
      return <Imprint></Imprint>;
    case "termine":
      return <Termine color={color} setBackFunction={setBackFunction}></Termine>
    case "team":
      return <Team setBackFunction={setBackFunction} color={color}></Team>;
    case "game":
      return <Landing color={color}></Landing>;
    // return <LineUp />
    case "lineup":
      return <LineUp></LineUp>;
    // return shop />
    case "shop":
      return <Shop setBackFunction={setBackFunction} color={color}></Shop>;
    case "blog":
      return <Blog setBackFunction={setBackFunction} />;
    default:
      return <Landing color={color}></Landing>;
  }
}

export default function HomePage() {
  const [currentColor, setCurrentColor] = useState("skyblue");

  const [activePage, setActivePage] = useState("game");

  const isMobile = useMobile();

  const [backFunction, setBackFunction] = useState(null);

  const today = new Date()
  const festivalDate = new Date("2023-06-23")
  const daysDiff = Math.round((festivalDate - today) / 1000 / 60 / 60 / 24)

  return (
    <div
      style={{
        background:
          currentColor === "skyblue" ? "url('blue-sky.jpg')" : currentColor,
        backgroundSize: currentColor === "skyblue" ? "cover" : "auto auto",
        cursor: "url(MouseHand-Normal_small.png) 32 0, auto",
        width: "100vw",
        height: "100vh",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        overflowY: "auto", 
         fontFamily: "BastardoRegular",
      }}
    >
      {/* <Balloon></Balloon> */}
      <Helmet>
        <title>PROSANOVA 2023</title>
        <meta
          name="description"
          content="Prosanova 2023. Festival für junge Literatur."
        />
      </Helmet>

      <div className="header-wrapper">
        <Header
          setBackFunction={setBackFunction}
          backFunction={backFunction}
          color={currentColor}
          setActivePage={setActivePage}
          setCurrentColor={setCurrentColor}
        />
      </div>

      <div
        style={{
          flexGrow: 1,
          zIndex: 100,
          borderRadius: "25px",
          overflowY:"auto",
        }}
      >
        <main style={{ height: "100%", overflowY: "auto",}}>
          <PageSwitch
            setBackFunction={setBackFunction}
            page={activePage}
            color={currentColor}
          ></PageSwitch>
        </main>
      </div>

      <footer
        className="background-color-grey border-radius"
        style={{
          minHeight: "4rem",
          maxHeight: "4rem",
          height: "4rem",
          display: isMobile ? "none" : "grid",

          // height: 'auto',
          fontFamily: "BastardoRegular",
        }}
      >
        <div 
          style={{
            display: isMobile ? "none" : "grid",
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
    </div>
  );
}
