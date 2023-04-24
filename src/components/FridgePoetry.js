import React from 'react'

function FridgePoetry({ children, color }) {
    return (
        <div style={{
            boxSizing: "border-box",
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            /* Truncate long text with an ellipsis */
            padding: "2px 10px",
            display: "inline-block",
            width: "auto",
            borderRadius: "5px",
            marginBottom: "0",
            paddingBottom:"0",
            backgroundColor: color,
        }}>
            {children}
        </div>
    )
}

export default FridgePoetry