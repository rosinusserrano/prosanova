import React from 'react'

function HeaderSmall({setActivePage}) {
    return (
        <header>
            <div className='grid-column-start-1 background-color-grey' style={{height: "30px", width: "30px"}}></div>
            <div className="Logo-Header-Wrapper grid-column-start-5">
                <div>  <img src={'images/PROSANOVA-Logo-Klein.png'} alt="Logo Small" onClick={() => setActivePage("game")} /></div>
            </div>
            {/* <div style={{width: "100%", height: "50px"}} className='background-color-grey grid-5-column'></div> */}
        </header>
    )
}

export default HeaderSmall