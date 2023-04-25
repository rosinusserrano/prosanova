import { PrettyName } from "contents/Team/TeamComponents";
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
        <span className="font-montiac-mono font-size-4">{date}</span>
        <br />
        {/* <span className="font-size-1 font-montiac-italic">{title}</span> */}
        {title.map((titleSegment) => <PrettyName name={titleSegment} fontSizeClass="font-size-5"
        />)}
    </div>
}