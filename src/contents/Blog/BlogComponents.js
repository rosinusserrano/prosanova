import { BACKGROUNDCOLOR } from "constants";
import React, { useState } from "react";

export function BlogLargeButton({
  author,
  title,
  setExpandedPostTitle,
  expandedPostTitle,
}) {

  const [hovered, setHovered] = useState(false)
   
  return (
   <div
      className="border-radius font-size-1"
      style={{
        padding: "1rem",
        textAlign: "center",
        marginBottom: "0.5rem",
        cursor: "url(MouseHand-Klick_small.png) 32 0, auto",
        backgroundColor:
          expandedPostTitle == title || hovered ? "transparent" : BACKGROUNDCOLOR,
      }}
      onClick={() => setExpandedPostTitle(title)}
      onPointerOver={() => {
        setHovered(true)
      }}
      onPointerLeave={() => {
        setHovered(false)
      }}
    >
      <span style={{ fontFamily: "Montiac-Italic" }}>{title}</span>
      <br />
      <span style={{ fontFamily: "BastardoRegular" }}>{author}</span>
    </div>
  );
}

export function BlogSmallButton({
  author,
  title,
  setExpandedPostTitle,
  expandedPostTitle,
  setBackFunction,
}) {
  return (
    <div
      className="border-radius "
      style={{
        marginBottom: "0.5rem",

        textAlign: "center",
        backgroundColor:
          expandedPostTitle == title ? "transparent" : BACKGROUNDCOLOR,
      }}
      onClick={() => {
        setExpandedPostTitle(title);
        setBackFunction(() => () => {
          setExpandedPostTitle(null);
        });
      }}
    >
      <span style={{ fontFamily: "Montiac-Italic" }}>{title}</span>
      <br />
      <span style={{ fontFamily: "BastardoRegular" }}>{author}</span>
    </div>
  );
}

export function BlogSection({ title, contentJSX, expandedPostTitle }) {
  return (
    <div
      style={{
        gridArea: "overlay",
        display: expandedPostTitle == title ? "block" : "none",
        padding: "1rem 2rem",
        fontFamily: "BastardoRegular",
      }}
      className="background-color-grey border-radius font-size-1 scrollable-element "
    >
      {contentJSX}
    </div>
  );
}
