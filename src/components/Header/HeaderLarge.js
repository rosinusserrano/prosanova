import WigglyButton from 'components/WigglyButton';
import React from 'react'

function HeaderLarge({ setActivePage, setCurrentColor }) {
    return (
        <header className="border-radius background-color-grey"
            style={{
                display: "flex",
                justifyContent: "space-between"
            }}>
            <div className="Menu-Wrapper"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignContent: "flex-end",
                    width: "300px",
                    gap: "0.3rem",
                    margin: "1rem",
                    height: "100%",
                }}>
                <WigglyButton onClick={() => { setActivePage("info"); setCurrentColor("#BFA9ED") }}>
                    <div className="menu-button font-size-1 button-color-1">Info</div>
                </WigglyButton>
               
                <WigglyButton onClick={() => { setActivePage("termine"); setCurrentColor("#F97DD0") }}>
                    <div className="menu-button font-size-1 button-color-5">Termine</div>
                </WigglyButton>
                <WigglyButton onClick={() => { setActivePage("team"); setCurrentColor("#C18167") }}>
                    <div className="menu-button font-size-1 button-color-2">Team</div>
                </WigglyButton>
                <WigglyButton onClick={() => { setActivePage("blog"); setCurrentColor("#C8BF9B") }}>
                    <div className="menu-button font-size-1 button-color-3">Blog</div>
                </WigglyButton>
                <WigglyButton onClick={() => { setActivePage("shop"); setCurrentColor("#E3CC4E") }}>
                    <div className="menu-button font-size-1 button-color-4">Shop</div>
                </WigglyButton>
                <WigglyButton onClick={() => { setActivePage("imprint"); setCurrentColor("#E3CC4E") }}>
                    <div className="menu-button font-size-2 button-color-4">imprint</div>
                </WigglyButton>
            </div>
            <div className="Logo-Header-Wrapper grid-column-start-5"
                style={{
                    justifySelf: "end",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "0.2rem",
                    marginRight: "1.1rem",
                }}>
                <div>  <img className="logo-large" src={'images/PROSANOVA-Logo1-groß.png'} alt="Logo Large" onClick={() => setActivePage("game")} /></div>
                <div className="color-button-wrapper"
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "0.3rem",
                        marginRight: "0.3rem"
                    }}>
                    <div className="switch-color-button background-color-1"
                        onClick={() => setCurrentColor("#BFA9ED")}
                    ></div>
                    <div className="switch-color-button background-color-2"
                        onClick={() => setCurrentColor("#C18167")}
                    ></div>
                    <div className="switch-color-button background-color-3"
                        onClick={() => setCurrentColor("#C8BF9B")}
                    ></div>
                    <div className="switch-color-button background-color-4"
                        onClick={() => setCurrentColor("#E3CC4E")}
                    >
                    </div>
                    <div className="switch-color-button background-color-5"
                        onClick={() => setCurrentColor("#F97DD0")}
                    >
                    </div>
                    <div
                        className="switch-color-button"
                        style={{ background: "url('blue-sky.jpg')" }}
                        onClick={() => setCurrentColor("skyblue")}
                    >
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderLarge