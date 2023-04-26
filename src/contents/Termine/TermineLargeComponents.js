import React, { useState } from "react"
import "../../styles/pages.css"
import { BACKGROUNDCOLOR } from "constants";
import { PrettyName } from "contents/Team/TeamComponents";

export function TermineLargeButton({ date, title, onClick, expandedSection, color }) {

    const gapPercent = 1

    const isExpanded = expandedSection == date

    const [hovered, setHovered] = useState(false)

    return (
        <div className="font-size-1"
            onClick={onClick}
            style={{
                display: "flex",
                gap: `${gapPercent}%`,
                cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
            }}
            onPointerOver={() => {
                setHovered(true)
            }}
            onPointerLeave={() => {
                setHovered(false)
            }}>
            <div
                className="font-montiac-mono border-radius"
                style={{
                    textAlign: "center",
                    color: isExpanded || hovered ? "white" : color,
                    verticalAlign: "middle",
                    display: "flex",
                    width: `${50 - (gapPercent / 2)}%`,
                    padding: "0.3rem",
                    fontSize: "min(4vw, 3rem)",

                    backgroundColor: isExpanded || hovered ? "transparent" : BACKGROUNDCOLOR
                }}>
                <p style={{ margin: "auto" }}>{date}</p>
            </div>
            <div className="border-radius font-size-1 font-regular"
                style={{
                    textAlign: "center",
                    color: isExpanded || hovered ? "white" : color,
                    display: "flex",
                    width: `${50 - (gapPercent / 2)}%`,
                    padding: "0.3rem",
                    lineHeight: "100%",
                    backgroundColor: isExpanded || hovered ? "transparent" : BACKGROUNDCOLOR
                }}>
                <p style={{
                    margin: "auto",
                    wordWrap: "break-word",
                    width: "100%"
                }}>{title.map((val) => <PrettyName name={val} fontSizeClass="font-size-1" />)}</p>
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