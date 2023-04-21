import { motion } from 'framer-motion'
import { useWindowSize } from 'hooks/useWindowSize';
import React, { useState } from 'react'

function HeaderSmall({ setActivePage }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <header>
            <div className="collapsed-header-grid">
                <div style={{ gridArea: "overlay" }}>
                    <div className='background-color-grey'
                        style={{
                            height: "30px",
                            width: "30px",
                        }}
                        onClick={() => setExpanded(!expanded)}></div>
                    <div className="Logo-Header-Wrapper">
                        <div>
                            <img src={'images/PROSANOVA-Logo-Klein.png'} alt="Logo Small" onClick={() => setActivePage("game")} />
                        </div>
                    </div>
                </div>
                <motion.div layout variants={{
                    collapsed: {
                        width: "100%",
                        height: 0
                    },
                    expanded: {
                        width: "100%",
                        height: "100%"
                    }
                }}
                    initial={"collapsed"}
                    animate={expanded ? "expanded" : "collapsed"}
                    style={
                        {
                            // gridColumnStart: 1,
                            // gridRow: 1,
                            // gridColumnEnd: 5,
                            gridArea: "overlay",
                            pointerEvents: "none",
                            zIndex: 20,
                            overflow: "clip",
                            textOverflow: "clip"
                        }
                    }
                    className='background-color-grey grid-5-column'>
                    <p>
                        thh
                        ddwd
                        dasd
                        asdsadas
                        sadasdasd
                        asdsadasdsasdasd
                        sadasdasdsadas
                        asdsadasdsasdasd
                        asdsadas
                        thh
                        ddwd
                        dasd
                        asdsadas
                        sadasdasd
                        asdsadasdsasdasd
                        sadasdasdsadas
                        asdsadasdsasdasd
                        asdsadas
                        thh
                        ddwd
                        dasd
                        asdsadas
                        sadasdasd
                        asdsadasdsasdasd
                        sadasdasdsadas
                        asdsadasdsasdasd
                        asdsadas
                        thh
                        ddwd
                        dasd
                        asdsadas
                        sadasdasd
                        asdsadasdsasdasd
                        sadasdasdsadas
                        asdsadasdsasdasd
                        asdsadas
                        thh
                        ddwd
                        dasd
                        asdsadas
                        sadasdasd
                        asdsadasdsasdasd
                        sadasdasdsadas
                        asdsadasdsasdasd
                        asdsadas
                        thh
                        ddwd
                        dasd
                        asdsadas
                        sadasdasd
                        asdsadasdsasdasd
                        sadasdasdsadas
                        asdsadasdsasdasd
                        asdsadas
                        thh
                        ddwd
                        dasd
                        asdsadas
                        sadasdasd
                        asdsadasdsasdasd
                        sadasdasdsadas
                        asdsadasdsasdasd
                        asdsadas
                    </p>
                </motion.div>
            </div>
        </header>
    )
}

export default HeaderSmall