import React from "react";
import "../styles/imprint.css";
import "../styles/fonts.css";
import "../styles/pages.css";
import { Helmet } from "react-helmet";

import { Link, Routes } from "react-router-dom";

function Termine() {
  return (
    <>
      <Helmet>
        <title>PROSANOVA 2023 | Impressum</title>
        <meta
          name="description"
          content="Prosanova 2023, Festival für junge Literatur | Impressum"
        />
      </Helmet>

      <div className=" page-grid-inside-5-cl  ">
        <div className="    font-size-1 grid-6-column-mobile grid-1-column  grid-child  ">
        <div className="inside-page-padding termine-Datum border-radius font-size-3">30/3</div>
        <div className="inside-page-padding border-radius termine-titel font-size-3 font-script">Bekenntnisse an das Misstrauen</div>

        </div>


      </div>
    </>
  );
}

export default Termine;
