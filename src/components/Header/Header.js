import WigglyButton from 'components/WigglyButton';
import useMediaQuery from 'hooks/useMediaQuery';
import React from 'react'
import HeaderSmall from './HeaderSmall';
import HeaderLarge from './HeaderLarge';

function Header({ setActivePage, setCurrentColor, color, backFunction, setBackFunction }) {
    const isMobile = useMediaQuery("only screen and (max-width: 767px)")
    return (
        isMobile ?
            <HeaderSmall setBackFunction={setBackFunction} backFunction={backFunction} color={color} setActivePage={setActivePage} setCurrentColor={setCurrentColor} />
            : <HeaderLarge setActivePage={setActivePage} setCurrentColor={setCurrentColor} />)


    {/* <div className="mobile-menu">
                <Menu>
                    <div className="menu-button font-size-1 button-color-1" onClick={() => { setActivePage("info"); setCurrentColor("#BFA9ED") }}>Info</div>

                    <div className="menu-button font-size-1 button-color-5" onClick={() => { setActivePage("termine"); setCurrentColor("#F97DD0") }}>Termine</div>

                    <div className="menu-button font-size-1 button-color-2" onClick={() => { setActivePage("team"); setCurrentColor("#C18167") }}>Team</div>

                    <div className="menu-button font-size-2 button-color-4" onClick={() => { setActivePage("imprint"); setCurrentColor("#E3CC4E") }}>imprint</div>

                </Menu>
            </div> */}
    //     <div className="Logo-Header-Wrapper grid-column-start-5">

    //         <div>  <img className="logo-large" src={'images/PROSANOVA-Logo1-groß.png'} alt="Logo Large" onClick={() => setActivePage("game")} /></div>


    //         <div className="color-button-wrapper">
    //             <div className="switch-color-button background-color-1"

    //                 onClick={() => setCurrentColor("#BFA9ED")}
    //             ></div>
    //             <div className="switch-color-button background-color-2"

    //                 onClick={() => setCurrentColor("#C18167")}
    //             ></div>
    //             <div className="switch-color-button background-color-3"

    //                 onClick={() => setCurrentColor("#C8BF9B")}
    //             ></div>
    //             <div className="switch-color-button background-color-4"

    //                 onClick={() => setCurrentColor("#E3CC4E")}
    //             >
    //             </div>
    //             <div className="switch-color-button background-color-5"

    //                 onClick={() => setCurrentColor("#F97DD0")}
    //             >
    //             </div>
    //             <div
    //                 className="switch-color-button"
    //                 style={{ background: "url('blue-sky.jpg')" }}
    //                 onClick={() => setCurrentColor("teal")}
    //             >
    //             </div>
    //         </div>
    //     </div>
    // </header>
    // )
}

export default Header