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

export function BlogSmallButton({author, title, setExpandedPostTitle, expandedPostTitle, setBackFunction }){
    return (
        <div className="border-radius"
        style={{
            textAlign: "center",
            backgroundColor: expandedPostTitle == title ? "transparent": BACKGROUNDCOLOR
        }}
        onClick={() => {
            setExpandedPostTitle(title)
            setBackFunction(() => () => {setExpandedPostTitle(null)})}}>
        {title}<br/>{author}
        </div>
    )
}


export function BlogSection({title, contentJSX, expandedPostTitle}){
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