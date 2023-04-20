import WigglyButton from 'components/WigglyButton';
import React from 'react'

function HeaderLarge({setActivePage, setCurrentColor}) {
    return (
        <header className="border-radius background-color-grey">
            <div className="Menu-Wrapper ">
                <WigglyButton onClick={() => { setActivePage("info"); setCurrentColor("#BFA9ED") }}>
                    <div className="menu-button font-size-1 button-color-1">Info</div>
                </WigglyButton>
                <WigglyButton onClick={() => { setActivePage("lineup"); setCurrentColor("#BFA9ED") }}>
                    <div className="menu-button font-size-1 button-color-1">Line-Up</div>
                </WigglyButton>
                <WigglyButton onClick={() => { setActivePage("termine"); setCurrentColor("#F97DD0") }}>
                    <div className="menu-button font-size-1 button-color-5">Termine</div>
                </WigglyButton>
                <WigglyButton onClick={() => { setActivePage("team"); setCurrentColor("#C18167") }}>
                    <div className="menu-button font-size-1 button-color-2">Team</div>
                </WigglyButton>
                <WigglyButton onClick={() => { setActivePage("imprint"); setCurrentColor("#E3CC4E") }}>
                    <div className="menu-button font-size-2 button-color-4">imprint</div>
                </WigglyButton>
            </div>
            <div className="Logo-Header-Wrapper grid-column-start-5">
                    <div>  <img className="logo-large" src={'images/PROSANOVA-Logo1-groß.png'} alt="Logo Large" onClick={() => setActivePage("game")} /></div>
                    <div className="color-button-wrapper">
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
                            onClick={() => setCurrentColor("teal")}
                        >
                        </div>
                    </div>
                </div>
        </header>
    )
}

export default HeaderLarge