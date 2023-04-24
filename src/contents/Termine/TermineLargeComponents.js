import React from "react"
import "../../styles/pages.css"
import { BACKGROUNDCOLOR } from "constants";
import { PrettyName } from "contents/Team/TeamComponents";

export function TermineLargeButton({ date, title, onClick, expandedSection, color }) {

    const gapPercent = 1

    const isExpanded = expandedSection == date

    return (
        <div className="font-size-1"
            onClick={onClick}
            style={{
                display: "flex",
                gap: `${gapPercent}%`,
                cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
            }}>
            <div
                className="font-montiac-mono border-radius"
                style={{
                    textAlign: "center",
                    color: isExpanded ? "white" : color,
                    verticalAlign: "middle",
                    display: "flex",
                    width: `${50 - (gapPercent / 2)}%`,
                    padding: "0.3rem",
                    fontSize: "min(4vw, 3rem)",
                    backgroundColor: isExpanded ? "transparent" : BACKGROUNDCOLOR
                }}>
                <p style={{margin: "auto"}}>{date}</p>
            </div>
            <div className="border-radius font-size-1 font-montiac-italic"
                style={{
                    textAlign: "center",
                    color: isExpanded ? "white" : color,
                    display: "flex",
                    width: `${50 - (gapPercent / 2)}%`,
                    padding: "0.3rem",
                    backgroundColor: isExpanded ? "transparent" : BACKGROUNDCOLOR
                }}>
                <p style={{margin: "auto",
                    wordWrap: "break-word",
                    width: "100%"}}>{title.map((val) => <PrettyName name={val} fontSizeClass="font-size-1"/>)}</p>
            </div>
        </div>
    )
}

export function TermineLargeSection({ children, expandedSection, thisSection }) {
    return (
        <div className="font-montiac-mono termine-text background-color-grey inside-page-padding border-radius scrollable-element"
        style={{
            gridArea: "overlay",
            display: expandedSection == thisSection ? "block" : "none",
        }}>
            {children}
        </div>
    );
}