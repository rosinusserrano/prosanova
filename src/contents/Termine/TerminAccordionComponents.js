import React from "react"
import "../../styles/pages.css"
import { motion } from "framer-motion";

export function TerminAccordionButton({ date, title, onClick }) {

    return (
        <div className="grid-tab-column-1  font-size-1 grid-6-column-mobile grid-1-column  grid-child"
            onClick={onClick}>
            <motion.div
                className="font-montiac-mono inside-page-padding border-radius font-size-3"
                style={{
                    marginTop: "0.5rem",
                    textAlign: "center",
                    color: "white"
                }}>
                {date}
            </motion.div>
            <motion.div className="inside-page-padding border-radius font-size-1 font-montiac-italic"
                style={{
                    marginTop: "0.5rem",
                    textAlign: "center",
                    color: "white"
                }}>
                {title}
            </motion.div>
        </div>
    )
}

export function TerminAccordionSection({ children, expandedSection, thisSection }) {
    const variants = {
        collapsed: {
            // opacity: 0,
            // y: 1000,
            transition: {
                duration: 0.5
            },
            rotateX: 90,
            // rotateY: 0,
            // rotateZ: 0,
        },
        expanded: {
            // y: 0,
            // opacity: 1,
            transition: {
                duration: 0.5
            },
            rotateX: 0,
            // rotateY: 0,
            // rotateZ: 10,
        }
    }
    return (
        <motion.div variants={variants} animate={expandedSection == thisSection ? 'expanded' : "collapsed"}
            className="font-montiac-mono no-scroll-bar grid-6-column-mobile mobile-grid-row-start-2 termine-text background-color-grey inside-page-padding border-radius scrollable-element grid-tab-column-1 grid-1-column">
            {children}
        </motion.div>
    );
}