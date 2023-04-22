import React from "react"
import "../../styles/pages.css"
import { motion } from "framer-motion";
import { BACKGROUNDCOLOR } from "constants";

export function TerminAccordionButton({ date, title, onClick, expandedSection }) {

    const gapPercent = 1

    const isExpanded = expandedSection == date

    return (
        <div className="font-size-1"
            onClick={onClick}
            style={{
                display: "flex",
                gap: `${gapPercent}%`
            }}>
            <div
                className="font-montiac-mono border-radius"
                style={{
                    textAlign: "center",
                    color: isExpanded ? "white" : "black",
                    verticalAlign: "middle",
                    // flex: "1 0 0",
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
                    color: isExpanded ? "white" : "black",
                    // flex: "1 0 0",
                    width: `${50 - (gapPercent / 2)}%`,
                    padding: "0.3rem",
                    backgroundColor: isExpanded ? "transparent" : BACKGROUNDCOLOR
                }}>
                {title}
            </div>
        </div>
    )
}

export function TerminAccordionSection({ children, expandedSection, thisSection }) {
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