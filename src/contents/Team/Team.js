import React, { useEffect } from "react";
import "../../styles/imprint.css";
import "../../styles/fonts.css";
import "../../styles/pages.css";
import { Helmet } from "react-helmet";
import WigglyButton from "components/WigglyButton";
import { TeamMemberImage, TeamMemberSection } from "./TeamComponents";
import { Leitung, Praktikant_innen } from "./TeamInformation"

function Team({ color }) {

  function scrollToPos(section_id) {
    const div = document.getElementById("div-with-bios");
    const section = document.getElementById(section_id);
    div.scrollTo({
      top: section.offsetTop - div.getBoundingClientRect().height * 0.1,
      behavior: "smooth",
    });
    const allSections = div.getElementsByTagName("section");
    for (let i = 0; i < allSections.length; i++) {
      allSections[i].style.color = "black";
    }
    section.style.color = color;
  }

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

      <div className="inside-main-content-wrapper">
        <div className="  inside-page-padding background-color-grey border-radius font-size-1 scrollable-element no-scroll-bar"
        style={{
          display: "flex",
          maxWidth: "100%",
          flexDirection: "row"
        }}>
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
          className="background-color-grey inside-page-padding border-radius font-size-1 grid-6-column-mobile  grid-child grid-3-column scrollable-element no-scroll-bar"
        >
          {Leitung.map(({ sectionId, sectionContent, name1, name2 }) => {
            return (
              <TeamMemberSection sectionId={sectionId}
                sectionContent={sectionContent}
                name1={name1}
                name2={name2}
                key={`${sectionId}_memberimage`}
              />)
          })}

          {Praktikant_innen.map(({ sectionId, sectionContent, name1, name2 }) => {
            return (
              <TeamMemberSection sectionId={sectionId}
                sectionContent={sectionContent}
                name1={name1}
                name2={name2}
                key={`${sectionId}_memberimage`}
              />)
          })}
          
          <div className="added-padding"></div>
        </div>
      </div>
    </>
  );
}

export default Team;
