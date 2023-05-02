import React from "react";
import "../styles/imprint.css";
import "../styles/fonts.css";
import "../styles/pages.css";
import { Helmet } from "react-helmet";

function Shop() {
  return (
    <>
      <Helmet>
        <title>PROSANOVA 2023 | Info</title>
        <meta
          name="description"
          content="Prosanova 2023, Festival für junge Literatur | Impressum"
        />
      </Helmet>

      <div className="inside-main-content-wrapper" style={{
        display: 'grid',
        height: "100%",
        placeItems: 'center'
      }}>
        <div style={{ display: 'block', }}>
   <a style={{ color: "black", textDecoration:"none", margin: '1rem', cursor: "url(MouseHand-Klick_small.png) 32 0, auto", }} className="font-size-1 background-color-grey shopButtons"  href="https://tickets.hoemepage.com/event/prosanova-23-dzf5c8" target="_blank">Early Bird Tickets</a>


        </div>
      </div>
    </>
  );
}

export default Shop;
