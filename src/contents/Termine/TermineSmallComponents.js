import React from "react";


export function TermineSmallButton({ expandedSection, setExpandedSection, date, title, setBackFunction, color }) {
    return <div style={{
        textAlign: "center",
        color: color,
    }}
    className="border-radius background-color-grey"
    onClick={() => {
        setExpandedSection(date)
        setBackFunction(() => () => {setExpandedSection(""); setBackFunction(null)})}}>
        <span className="font-montiac-mono font-size-3">{date}</span>
        <br />
        <span className="font-size-1 font-montiac-italic">{title}</span>
    </div>
}