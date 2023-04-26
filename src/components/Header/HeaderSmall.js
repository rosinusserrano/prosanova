import WigglyButton from "components/WigglyButton";
import { motion } from "framer-motion";
import { useWindowSize } from "hooks/useWindowSize";
import React, { useState } from "react";
import BurgerMenuIcon from "./BurgerMenuIcon";
import BackButton from "./BackButton";


function HeaderSmall({
  setActivePage,
  setCurrentColor,
  color,
  backFunction,
  setBackFunction,
}) {
  const [expanded, setExpanded] = useState(false);

  const backButtonVisible = backFunction != null;

  return (
    <header>
      <div
        style={{
          zIndex: 10,
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gridTemplateAreas: '"overlay"',
          minHeight: "5rem",
        }}
      >
        <div
          style={{
            gridArea: "overlay",
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            gap: "1rem",
            marginLeft: "1rem",
          }}
        >
          <div
            style={{
              height: "3rem",
              width: "50px",
            }}
            onClick={() => setExpanded(!expanded)}
          >
            <BurgerMenuIcon />
          </div>
          <div
            style={{
              height: "3rem",
              width: "50px",
            }}
          >
            {backButtonVisible ? (
              <BackButton
                onClick={() => {
                  backFunction();
                  setBackFunction(null);
                }}
                color={color}
              />
            ) : (
              <></>
            )}
          </div>
          <div style={{ flexGrow: 1 }} />
          <div style={{ zIndex: 5000, }} className="Logo-Header-Wrapper">
            <div>
              <img style={{ marginRight: '0.5rem', filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))', }}
                src={"images/PROSANOVA-Logo-Klein.png"}
                alt="Logo Small"
                onClick={() => {setActivePage("game"); setCurrentColor("skyblue");}}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            gridArea: "overlay",
            zIndex: 20,
            overflow: "clip",
            textOverflow: "clip",
            display: expanded ? "flex" : "none",
          }}
          className="background-color-grey border-radius"
        >
          <div style={{
            display: 'flex',
            gap: "0.4rem",
            margin: '1.5rem',
            alignItems: 'center',
            width: '70%',
            flexWrap: 'wrap',
            alignItems: 'stretch',
          }}>
            <WigglyButton
              onClick={() => {
                setActivePage("game");
                setCurrentColor("skyblue");
                setExpanded(false);
              }}
            >
              <div style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                /* Truncate long text with an ellipsis */
                padding: '3px 3px',
                display: 'inline-block',
                width: 'auto',
                borderRadius: '5px',
                height: '75%',

                backgroundColor: 'white',
              }} className=" button-color-sky"><img src="images/homebutton.svg" /></div>
            </WigglyButton>
            <WigglyButton
              onClick={() => {
                setActivePage("info");
                setCurrentColor("#BFA9ED");
                setExpanded(false);
              }}
            >
              <div className="menu-button font-size-1 button-color-1">Info</div>
            </WigglyButton>

            <WigglyButton
              onClick={() => {
                setActivePage("termine");
                setCurrentColor("#F97DD0");
                setExpanded(false);
              }}
            >
              <div className="menu-button font-size-1 button-color-5">
                Termine
              </div>
            </WigglyButton>
            <WigglyButton
              onClick={() => {
                setActivePage("team");
                setCurrentColor("#C18167");
                setExpanded(false);
              }}
            >
              <div className="menu-button font-size-1 button-color-2">Team</div>
            </WigglyButton>
            <WigglyButton
              onClick={() => {
                setActivePage("blog");
                setCurrentColor("#C8BF9B");
                setExpanded(false);
              }}
            >
              <div className="menu-button font-size-1 button-color-3">Blog</div>
            </WigglyButton>
            <WigglyButton
              onClick={() => {
                setActivePage("shop");
                setCurrentColor("#E3CC4E");
              }}
            >
              <div className="menu-button font-size-1 button-color-4">Shop</div>
            </WigglyButton>
            <WigglyButton onClick={() => window.open("/LeichteSprache.pdf")}>
              <div className="menu-button font-size-2 button-color-1">
                Leichte Sprache
              </div>
            </WigglyButton>
            <WigglyButton
              onClick={() => {
                setActivePage("imprint");
                setCurrentColor("#E3CC4E");
                setExpanded(false);
              }}
            >
              <div className="menu-button font-size-2 button-color-4">
                Imprint
              </div>
            </WigglyButton>
            <WigglyButton
              onClick={() => window.open("https://www.instagram.com/prosanovafestival/", "_blank")}
            >
              <div style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                /* Truncate long text with an ellipsis */
                padding: '3px 3px',
                display: 'inline-block',
                width: 'auto',
                borderRadius: '5px',
                height: '75%',

                backgroundColor: 'white',
              }} className="button-color-1"><img src="images/instagramlogo.svg" /></div>
            </WigglyButton>
          </div>


        </div>
      </div>
    </header>
  );
}

export default HeaderSmall;
