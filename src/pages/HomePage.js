import React, { useState } from "react";
import WigglyButton from "components/WigglyButton";
import Balloon from "components/Balloon";
import Letters3DGame from "contents/Letters3DGame/Letters3DGame";
import Info from "contents/Info";
import Team from "contents/Team/Team";

import { Helmet } from "react-helmet";
import "../styles/imprint.css";
import "../styles/fonts.css";
import "../styles/pages.css";
import "../styles/responsive.css";

import { slide as Menu } from 'react-burger-menu';
import Imprint from "contents/Imprint";
import Termine from "contents/Termine/Termine";
import LineUp from "contents/LineUp";


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
      return <Letters3DGame></Letters3DGame>
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
    <body style={{ background: currentColor === "teal" ? "url('blue-sky.jpg')" : currentColor, backgroundSize: currentColor === "teal" ? "cover" : "auto auto" }}>
      {/* <Balloon></Balloon> */}

      <div style={{
        margin: "1rem",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        columnGap: "2rem",
        rowGap: "1rem",
        overflow: "auto",
        fontFamily: "BastardoRegular"
      }}>
        <Helmet>
          <title>PROSANOVA 2023</title>
          <meta
            name="description"
            content="Prosanova 2023. Festival für junge Literatur."
          />
        </Helmet>

        <div className="header-wrapper grid-5-column ">

          <header className="border-radius">

            <div className="Menu-Wrapper ">
              <WigglyButton onClick={() => { setActivePage("info"); setCurrentColor("#BFA9ED") }}>
                <div className="menu-button font-size-1 button-color-1">Info</div>
              </WigglyButton>
              <WigglyButton onClick={() => { setActivePage("lineup"); setCurrentColor("#BFA9ED") }}>
                <div className="menu-button font-size-1 button-color-1">Line-Up</div>
              </WigglyButton>
              <WigglyButton onClick={() => { setActivePage("termine"); setCurrentColor("#F97DD0") }}>
                <div className="menu-button font-size-1 button-color-5">Termine</div>
              </WigglyButton>
              <WigglyButton onClick={() => { setActivePage("team"); setCurrentColor("#C18167") }}>
                <div className="menu-button font-size-1 button-color-2">Team</div>
              </WigglyButton>
              <WigglyButton onClick={() => { setActivePage("imprint"); setCurrentColor("#E3CC4E") }}>
                <div className="menu-button font-size-2 button-color-4">imprint</div>
              </WigglyButton>
            </div>

            <div className="mobile-menu">
              <Menu>
                <div className="menu-button font-size-1 button-color-1" onClick={() => { setActivePage("info"); setCurrentColor("#BFA9ED") }}>Info</div>

                <div className="menu-button font-size-1 button-color-5" onClick={() => { setActivePage("termine"); setCurrentColor("#F97DD0") }}>Termine</div>

                <div className="menu-button font-size-1 button-color-2" onClick={() => { setActivePage("team"); setCurrentColor("#C18167") }}>Team</div>

                <div className="menu-button font-size-2 button-color-4" onClick={() => { setActivePage("imprint"); setCurrentColor("#E3CC4E") }}>imprint</div>

              </Menu>
            </div>
            <div className="Logo-Header-Wrapper grid-column-start-5">

              <div>  <img className="logo-large" src={'images/PROSANOVA-Logo1-groß.png'} alt="Logo Large" onClick={() => setActivePage("game")} /></div>
              <div>  <img className="logo-small" src={'images/PROSANOVA-Logo-Klein.png'} alt="Logo Small" onClick={() => setActivePage("game")} /></div>

              <div className="color-button-wrapper">
                <div className="switch-color-button background-color-1"

                  onClick={() => setCurrentColor("#BFA9ED")}
                ></div>
                <div className="switch-color-button background-color-2"

                  onClick={() => setCurrentColor("#C18167")}
                ></div>
                <div className="switch-color-button background-color-3"

                  onClick={() => setCurrentColor("#C8BF9B")}
                ></div>
                <div className="switch-color-button background-color-4"

                  onClick={() => setCurrentColor("#E3CC4E")}
                >
                </div>
                <div className="switch-color-button background-color-5"

                  onClick={() => setCurrentColor("#F97DD0")}
                >
                </div>
                <div
                  className="switch-color-button"
                  style={{ background: "url('blue-sky.jpg')" }}
                  onClick={() => setCurrentColor("teal")}
                >
                </div>
              </div>
            </div>
          </header>
        </div>

        <div className="grid-5-column  main-content-wrapper main-content-div">
          <main className=" main-content-wrapper">
            <PageSwitch page={activePage} color={currentColor}></PageSwitch>

          </main>
        </div>
      </div>
    </body>
  );
}
