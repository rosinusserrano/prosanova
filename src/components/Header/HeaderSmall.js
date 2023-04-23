import WigglyButton from 'components/WigglyButton';
import { motion } from 'framer-motion'
import { useWindowSize } from 'hooks/useWindowSize';
import React, { useState } from 'react'
import BurgerMenuIcon from './BurgerMenuIcon';
import BackButton from './BackButton';

function HeaderSmall({ setActivePage, setCurrentColor, color, backFunction, setBackFunction }) {
    const [expanded, setExpanded] = useState(false);

    const backButtonVisible = backFunction != null

    return (
        <header>
            <div
                style={{
                    zIndex: 10,
                    display: "grid",
                    gridTemplateColumns: "repeat(1, 1fr)",
                    gridTemplateAreas: '"overlay"',
                    minHeight: "5rem",
                }}>
                <div style={{
                    gridArea: "overlay",
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                    gap: "1rem"
                }}
                >
                    <div
                        style={{
                            height: "3rem",
                            width: "50px",
                        }}
                        onClick={() => setExpanded(!expanded)}>
                        <BurgerMenuIcon />
                    </div>
                    <div style={{
                        height: "3rem",
                        width: "50px"
                    }}>
                        {backButtonVisible ? <BackButton onClick={() => {
                            backFunction()
                            setBackFunction(null)
                        }} color={color} /> : <></>}
                    </div>
                    <div style={{ flexGrow: 1 }} />
                    <div className="Logo-Header-Wrapper">
                        <div>
                            <img src={'images/PROSANOVA-Logo-Klein.png'} alt="Logo Small" onClick={() => setActivePage("game")} />
                        </div>
                    </div>
                </div>
                <div style={
                    {
                        gridArea: "overlay",
                        zIndex: 20,
                        overflow: "clip",
                        textOverflow: "clip",
                        display: expanded ? "flex" : "none",
                        flexWrap: "wrap",
                        gap: "0.4rem",
                        padding: "0.5rem"
                    }
                }
                    className='background-color-grey border-radius'>
                    <WigglyButton onClick={() => {
                        setActivePage("info");
                        setCurrentColor("#BFA9ED");
                        setExpanded(false)
                    }}>
                        <div className="menu-button font-size-1 button-color-1">Info</div>
                    </WigglyButton>
                    <WigglyButton onClick={() => { setActivePage("lineup"); setCurrentColor("#BFA9ED"); setExpanded(false) }}>
                        <div className="menu-button font-size-1 button-color-1">Line-Up</div>
                    </WigglyButton>
                    <WigglyButton onClick={() => { setActivePage("termine"); setCurrentColor("#F97DD0"); setExpanded(false) }}>
                        <div className="menu-button font-size-1 button-color-5">Termine</div>
                    </WigglyButton>
                    <WigglyButton onClick={() => { setActivePage("team"); setCurrentColor("#C18167"); setExpanded(false) }}>
                        <div className="menu-button font-size-1 button-color-2">Team</div>
                    </WigglyButton>
                    <WigglyButton onClick={() => { setActivePage("blog"); setCurrentColor("#E3CC4E"); setExpanded(false) }}>
                        <div className="menu-button font-size-1 button-color-3">Blog</div>
                    </WigglyButton>
                    <WigglyButton onClick={() => { setActivePage("imprint"); setCurrentColor("#E3CC4E"); setExpanded(false) }}>
                        <div className="menu-button font-size-2 button-color-4">imprint</div>
                    </WigglyButton>
                </div>
            </div>
        </header>
    )
}

export default HeaderSmall