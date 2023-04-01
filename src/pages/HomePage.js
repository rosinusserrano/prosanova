import React, { useState } from "react";
import { motion } from "framer-motion";
import WigglyButton from "components/WigglyButton";
import Balloon from "components/Balloon";
import Letters3DGame from "components/Letters3DGame";
import Imprint from "components/ImprintPage";
import Info from "components/Info";
import Team from "components/Team";

import { Helmet } from "react-helmet";
import "../styles/imprint.css";
import "../styles/fonts.css";
import "../styles/pages.css";
import "../styles/responsive.css";


import LogoLarge from '../PROSANOVA-Logo1-groß.png';
import LogoSmall from '../PROSANOVA-Logo-Klein.png';
import { slide as Menu } from 'react-burger-menu';
import ImprintPage from "components/ImprintPage";
import Termine from "components/Termine";





export default function HomePage() {
  const [currentColor, setCurrentColor] = useState("#BFA9ED");


  return (
    <body style={{ backgroundColor: currentColor }}>
      {/* <Balloon></Balloon> */}

      <div className="page-grid">
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

              <WigglyButton>
                <div className="menu-button font-size-1 button-color-1">Info</div>
              </WigglyButton>
              <WigglyButton>
                <div className="menu-button font-size-1 button-color-3">Programm</div>
              </WigglyButton>
              <WigglyButton>
                <div className="menu-button font-size-1 button-color-5">Termine</div>
              </WigglyButton>
              <WigglyButton>
                <div className="menu-button font-size-1 button-color-4">Line-Up</div>
              </WigglyButton>
              <WigglyButton>
                <div className="menu-button font-size-1 button-color-2">Team</div>
              </WigglyButton>
              <WigglyButton>
                <div className="menu-button font-size-2 button-color-1">imprint</div>
              </WigglyButton>
            </div>

            <div className="mobile-menu">
              <Menu  >
                <div className="menu-button font-size-1 button-color-1">Info</div>

                <div className="menu-button font-size-1 button-color-3">Programm</div>

                <div className="menu-button font-size-1 button-color-5">Termine</div>

                <div className="menu-button font-size-1 button-color-4">Line-Up</div>

                <div className="menu-button font-size-1 button-color-2">Team</div>

                <div className="menu-button font-size-2 button-color-1">imprint</div>

              </Menu>
            </div>
            <div className="Logo-Header-Wrapper grid-column-start-5">

              <div>  <img className="logo-large" src={LogoLarge} alt="Logo Large" /></div>
              <div>  <img className="logo-small" src={LogoSmall} alt="Logo Small" /></div>

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
                  className="switch-color-button background-color-"
                  onClick={() => setCurrentColor("green")}
                >
                </div>
              </div>
            </div>
          </header>
        </div>

        <div className="grid-5-column  main-content-wrapper ">
          <main className=" main-content-wrapper">
            <Team></Team>

          </main>
        </div>
      </div>
    </body>
  );
}
