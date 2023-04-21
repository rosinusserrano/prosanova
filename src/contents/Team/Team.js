import React, { useEffect } from "react";
import "../../styles/imprint.css";
import "../../styles/fonts.css";
import "../../styles/pages.css";
import { Helmet } from "react-helmet";
import WigglyButton from "components/WigglyButton";
import { TeamMemberImage, TeamMemberSection } from "./TeamComponents";
import { Leitung, Praktikant_innen } from "./TeamInformation"
import { useMobile } from "hooks/useMediaQuery";

function Team({ color }) {

  const isMobile = useMobile()

  useEffect(() => {
    const div = document.getElementById("div-with-bios");
    const allSections = div.getElementsByTagName("section");
    for (let i = 0; i < allSections.length; i++) {
      allSections[i].style.color = "black";
    }
  }, [color]);

  return (
    <>
      <Helmet>
        <title>PROSANOVA 2023 | Team</title>
        <meta
          name="description"
          content="Prosanova 2023, Festival für junge Literatur | Team"
        />
      </Helmet>

      <div className="inside-main-content-wrapper"
        style={{
          display: "flex",
          maxWidth: "100%",
          maxHeight: "100%",
          flexDirection: "row",
          gap: "1rem"
        }}>
        <div className="  inside-page-padding background-color-grey border-radius font-size-1 scrollable-element no-scroll-bar"
          style={{ flexGrow: 2, flexBasis: 0 }}>
          <div className="team-grid">
            <div className="grid-3-column txt-align-center">
              <span className="font-script font-size-3">K</span>ünstlerische{" "}
              <span className="font-script font-size-3">L</span>eitung{" "}
            </div>

            {Leitung.map(({ imgSrc, sectionId, altText }) => {
              return (
                <TeamMemberImage imgSrc={imgSrc}
                  altText={altText}
                  sectionId={sectionId}
                  color={color}
                  key={`${sectionId}_memberimage`}
                />)
            })}

            <div className="grid-3-column txt-align-center">
              <span className="font-script font-size-3">P</span>raktikant*innen{" "}
            </div>

            {Praktikant_innen.map(({ imgSrc, sectionId, altText }) => {
              return (
                <TeamMemberImage imgSrc={imgSrc}
                  altText={altText}
                  sectionId={sectionId}
                  color={color}
                  key={`${sectionId}_memberimage`}
                />)
            })}

          </div>

          <div className="added-padding"></div>
        </div>

        <div
          id="div-with-bios"
          className="background-color-grey inside-page-padding border-radius font-size-1 scrollable-element no-scroll-bar"
          style={{ flexGrow: 3, flexBasis: 0 }}>
          {Leitung.map(({ sectionId, sectionContent, name1, name2 }) => {
            return (
              <TeamMemberSection sectionId={sectionId}
                sectionContent={sectionContent}
                name1={name1}
                name2={name2}
                key={`${sectionId}_membersection`}
              />)
          })}

          {Praktikant_innen.map(({ sectionId, sectionContent, name1, name2 }) => {
            return (
              <TeamMemberSection sectionId={sectionId}
                sectionContent={sectionContent}
                name1={name1}
                name2={name2}
                key={`${sectionId}_membersection`}
              />)
          })}

          <div className="added-padding"></div>
        </div>
      </div>
    </>
  );
}

export default Team;
