import React, { useState } from 'react'
import { ProgrammLargeButton } from './ProgrammLargeButton'
import { motion } from 'framer-motion'
import { ProgramTypeToColor, makeProgramID } from '../ProgrammInformationV2'

function ProgrammLargeMain({ ProgrammFuerTag, animationControls }) {
    const [hoveredButton, setHoveredButton] = useState("")
    const [clickedButton, setClickedButton] = useState("")
    return (
        <div className='inside-main-content-wrapper'
            style={{
                display: "flex",
                gap: "0.3rem",
                height: "100%",
                overflowY: "auto",
                borderRadius: "10px"
            }}>
            <motion.div
                initial={{ flex: "0 0 0" }}
                style={{

                    display: "grid",
                    gridTemplateAreas: "'overlay'",
                    height: "100%",
                    overflowY: "auto"
                }}
                animate={animationControls}>
                {ProgrammFuerTag.map(({ title, description, location, time }) =>
                    <div className='border-radius background-color-grey inside-page-padding'
                        style={{
                            gridArea: "overlay",
                            display: clickedButton === makeProgramID(title, time, location) ? "block" : "none",
                            overflowY: "auto",
                            overflowX: "hidden",
                            fontSize: "2vw"
                        }}>
                        {
                            description !== "PARTY"
                                ?
                                <div style={{ overflowY: "auto", overflowX: "hidden", maxWidth: "100%" }}>
                                    <span style={{ maxWidth: "100%" }} className='font-b-bold font-size-5'>{title}</span><br />
                                    {description}
                                </div>
                                :
                                <div style={{
                                    display: "flex",
                                    height: "100%",
                                    justifyContent: "center",
                                    placeItems: "center"
                                }}>
                                    <motion.div
                                    style={{
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1,
                                        repeatType: "loop",
                                        ease: "linear",
                                        bounce: false
                                    }}
                                    initial={{
                                        rotate: 0
                                    }}
                                    animate={{
                                        rotate: 360
                                    }}>
                                    PARTY
                                    </motion.div>
                                </div>
                        }
                    </div>
                )}
            </motion.div>
            <div style={{
                flex: "3 1 0",
                overflowY: "auto",
                overflowX: "hidden"
            }}>
                {ProgrammFuerTag.map(({ location, title, time, people, type, description }) => <>
                    <ProgrammLargeButton
                        location={location}
                        time={time}
                        title={title}
                        people={people}
                        type={type}
                        description={description}
                        hoveredButton={hoveredButton}
                        setHoveredButton={setHoveredButton}
                        setClickedButton={setClickedButton}
                        animationControls={animationControls}
                    />
                    <div style={{ height: "0.3rem" }} />
                </>)}
            </div>
        </div>
    )
}

export default ProgrammLargeMain