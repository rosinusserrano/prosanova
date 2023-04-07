import WigglyButton from "components/WigglyButton";
import React from "react";


export function TeamMemberImage({ altText, imgSrc, sectionId, color }) {

    function scrollToPos(sectionId) {
        const div = document.getElementById("div-with-bios");
        const section = document.getElementById(sectionId);
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

    return (
        <WigglyButton onClick={() => scrollToPos(sectionId)}>
            <div className="team-image">
                <img
                    src={imgSrc}
                    alt={altText}
                    className="border-radius grid-1-column"
                />
            </div>
        </WigglyButton>
    )
}


export function TeamMemberSection({sectionId, sectionContent, name1, name2}){
    const firstLetterName1 = name1.slice(0,1)
    const remainderName1 = name1.slice(1)
    const firstLetterName2 = name2.slice(0,1)
    const remainderName2 = name2.slice(1)
    return (
        <section id={sectionId} className="team-txt">
            <span className=" font-script font-size-3">{firstLetterName1}</span>{remainderName1}
            <span className="font-script font-size-3">{firstLetterName2}</span>{remainderName2}
            {sectionContent}
          </section>
    );
}

