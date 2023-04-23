import { BACKGROUNDCOLOR } from "constants";
import React from "react";


export function BlogLargeButton({author, title, setExpandedPostTitle, expandedPostTitle}){
    return (
        <div className="border-radius"
        style={{
            textAlign: "center",
            backgroundColor: expandedPostTitle == title ? "transparent": BACKGROUNDCOLOR
        }}
        onClick={() => setExpandedPostTitle(title)}>
        {title}<br/>{author}
        </div>
    )
}


export function BlogLargeSection({title, contentJSX, expandedPostTitle}){
    return (
        <div style={{
            gridArea: "overlay",
            display: expandedPostTitle == title ? "block": "none",
        }}
        className="background-color-grey border-radius">
            {contentJSX}
        </div>
    )
}