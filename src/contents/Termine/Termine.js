import React, { useState } from "react";
import "../../styles/imprint.css";
import "../../styles/fonts.css";
import "../../styles/pages.css";
import "../../styles/termine.css";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import { TermineLargeButton, TermineLargeSection } from "./TermineLargeComponents";
import { TermineInformation } from "./TermineInformation";
import { useMobile } from "hooks/useMediaQuery";
import TermineLarge from "./TermineLarge";
import TermineSmall from "./TermineSmall";

function Termine({ setBackFunction, color }) {

  const [expandedSection, setExpandedSection] = useState("");

  const isMobile = useMobile()

  const termineLarge = <TermineLarge color={color} setExpandedSection={setExpandedSection} expandedSection={expandedSection} />
  const termineSmall = <TermineSmall color={color} setBackFunction={setBackFunction} setExpandedSection={setExpandedSection} expandedSection={expandedSection} />

  return (
    <>
      <Helmet>
        <title>PROSANOVA 2023 | Termine</title>
        <meta
          name="description"
          content="Prosanova 2023, Festival für junge Literatur | Termine"
        />
      </Helmet>

      {isMobile ? termineSmall : termineLarge}
    </>
  );
}

export default Termine;
