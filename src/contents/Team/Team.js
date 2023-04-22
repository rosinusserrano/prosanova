import React, { useEffect } from "react";
import "../../styles/imprint.css";
import "../../styles/fonts.css";
import "../../styles/pages.css";
import { Helmet } from "react-helmet";
import WigglyButton from "components/WigglyButton";
import { TeamMemberImage, TeamMemberSection } from "./TeamComponents";
import { Leitung, Praktikant_innen } from "./TeamInformation"
import { useMobile } from "hooks/useMediaQuery";
import TeamSmall from "./TeamSmall";
import TeamLarge from "./TeamLarge";

function Team({ color, setBackFunction }) {

  const isMobile = useMobile()

  return (
    <>
      <Helmet>
        <title>PROSANOVA 2023 | Team</title>
        <meta
          name="description"
          content="Prosanova 2023, Festival für junge Literatur | Team"
        />
      </Helmet>

      {isMobile ? <TeamSmall setBackFunction={setBackFunction} color={color} /> : <TeamLarge color={color} />}

    </>
  );
}

export default Team;
