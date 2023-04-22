import React from "react";


export function TermineSmallButton({ expandedSection, setExpandedSection, date, title }) {
    return <div style={{
        textAlign: "center",
    }}
    className="border-radius background-color-grey"
    onClick={() => setExpandedSection(date)}>
        <span className="font-montiac-mono font-size-3">{date}</span>
        <br />
        <span className="font-size-1 font-montiac-italic">{title}</span>
    </div>
}