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
                <img
                    style={{
                        width: "100%",
                        maxWidth: "100%",
                        height: "auto"
                    }}
                    src={imgSrc}
                    alt={altText}
                    className="border-radius"
                />
        </WigglyButton>
    )
}


export function TeamMemberImageSmall({ altText, imgSrc, sectionId, color }) {

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
        <div onClick={() => scrollToPos(sectionId)}>
            <img
                style={{
                    width: "100%",
                    maxWidth: "100%",
                    aspectRatio: "3 / 2",
                    objectFit: "cover",
                    objectPosition: "50% 7%"
                }}
                src={imgSrc}
                alt={altText}
                className="border-radius"
            />
        </div>
    )
}


export function TeamMemberSection({ sectionId, sectionContent, name1, name2 }) {
    const name1Names = name1.split(" ")
    const name2Names = name2.split(" ")
    return (
        <section id={sectionId} style={{ lineHeight: "100%", margin: "3rem 0", borderRadius: "10px" }}>
            {name1Names.map((n) => <PrettyName name={n} />)}
            {name2Names.slice(0, name2Names.length - 1).map((n) => <PrettyName name={n} />)}
            {name2Names.slice(name2Names.length - 1).map((n) => <PrettyName name={n} appendWhiteSpace={false} />)}
            {sectionContent}
        </section>
    );
}


export function PrettyName({ name, appendWhiteSpace = true }) {
    const firstLetterName = name.slice(0, 1)
    const remainderName = name.slice(1)
    return (firstLetterName == firstLetterName.toUpperCase() ? <>
        <span className=" font-script font-size-3">{firstLetterName}</span>{remainderName}{appendWhiteSpace ? " " : ""}
    </> : <>{name}{appendWhiteSpace ? " " : ""}</>)
}

