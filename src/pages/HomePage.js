import React, { useState } from "react";
import Info from "contents/Info/Info";
import Team from "contents/Team/Team";

import { Helmet } from "react-helmet";
import "../styles/imprint.css";
import "../styles/fonts.css";
import "../styles/pages.css";
// import "../styles/responsive.css";

import Imprint from "contents/Imprint";
import Termine from "contents/Termine/Termine";
import LineUp from "contents/LineUp/LineUp";
import Header from "components/Header/Header";
import { useMobile } from "hooks/useMediaQuery";
import Landing from "contents/Landing/Landing";
import Blog from "contents/Blog/Blog";
import FridgePoetry from "components/FridgePoetry";
import Shop from "contents/Shop/Shop";
import Programm from "contents/Programm/Programm";
import { StandardFooter } from "components/Footer";

function PageSwitch({ page, color, setBackFunction, backFunction }) {
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
      return <LineUp setBackFunction={setBackFunction} color={color}></LineUp>;
    // return shop />
    case "shop":
      return <Shop></Shop>;
    case "blog":
      return <Blog setBackFunction={setBackFunction} />;
    case "program":
      return <Programm setBackFunction={setBackFunction} color={color} backFunction={backFunction} />
    default:
      return <Landing color={color}></Landing>;
  }
}

export default function HomePage() {
  const [currentColor, setCurrentColor] = useState("skyblue");

  const [activePage, setActivePage] = useState("game");

  const isMobile = useMobile();

  const [backFunction, setBackFunction] = useState(null);

  const hideFooter = isMobile || (activePage === "program")

  return (
    <div
      style={{
        background:
          currentColor === "skyblue" ? "url('blue-sky.jpg')" : currentColor,
        backgroundSize: currentColor === "skyblue" ? "cover" : "auto auto",
        cursor: "url(MouseHand-Normal_small.png) 32 0, grab",
        width: "100vw",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        overflowY: "auto",
        fontFamily: "BastardoRegular",
      }}
      className="app-screen-frame"
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
          borderRadius: "10px",
          overflowY: "auto",
        }}
      >
        <main style={{ height: "100%" }}>
          <PageSwitch
            setBackFunction={setBackFunction}
            backFunction={backFunction}
            page={activePage}
            color={currentColor}
          ></PageSwitch>
        </main>
      </div>

      <StandardFooter hideFooter={hideFooter} currentColor={currentColor}/>
    </div>
  );
}
