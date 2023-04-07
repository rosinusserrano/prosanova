import { motion } from 'framer-motion';
import React, { useState } from 'react'

function LineUp() {
    return (
        <div className=" inside-main-content-wrapper ">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <LineUpItem />
                <LineUpItem />
                <LineUpItem />
                <LineUpItem />
                <LineUpItem />
                <LineUpItem />
                <LineUpItem />
                <LineUpItem />
                <LineUpItem />
                <LineUpItem />
                <LineUpItem />
                <LineUpItem />
                <LineUpItem />
                <LineUpItem />
                <LineUpItem />
                <LineUpItem />
                <LineUpItem />
                <LineUpItem />
            </div>
            {/* <div className="  inside-page-padding background-color-grey border-radius font-size-5 grid-6-column-mobile grid-6-column scrollable-element grid-child grid-row-start-2 ">
                <div>
                    PROSANOVA 2023 ist ein Festival für junge Literatur, das vom 23. -
                    25. Juni 2023 in Hildesheim stattfindet. <br></br> <br></br>Seit 2005 findet
                    das bundesweit größte und bekannteste Event für junge,
                    deutschsprachige Gegenwartsliteratur im Rhythmus von drei Jahren in
                    Hildesheim - mitten in Niedersachsen - statt. 40 junge
                    Gegenwartsautor*innen sind eingeladen, ihr Schreiben, ihre Texte und
                    literarischen Verfahren in Hildesheim zu inszenieren und in über 30
                    Veranstaltungen einem breiten Publikum aus Fachbesucher*innen des
                    Literaturbetriebs, Hildesheimer Bürger*innen, Studierenden sowie
                    überregionalen Pressevertreter*innen vorzustellen.
                </div>

            </div>

            <div className=" inside-page-padding border-radius font-size-5 grid-6-column-mobile  grid-child grid-6-column scrollable-element ">
                <div>
                    <span className="font-b-bold">Schlechte Wörter</span><br></br> <br></br> Die diesjährige Ausgabe des Prosanovas findet unter
                    dem Motto Schlechte Wörter statt. Der titelgebende Kurzprosatext von
                    Ilse Aichinger gibt uns den Anlass für eine Suche nach den Wörtern -
                    überall. Wir hinterfragen Eindeutigkeit und suchen nach
                    Mehrdeutigkeit, wir wollen ein neues Terrain für die Rezeption von
                    Text erproben. Was passiert, wenn wir Texte als Räume begreifen, die
                    wir begehen und von allen Seiten betrachten können?
                </div>
            </div> */}
        </div>
    );
}

export default LineUp


function LineUpItem() {
    const [collapsed, collapse] = useState(true)
    return (
        <motion.div onClick={() => collapse(!collapsed)} animate={ collapsed ? { height: "150px", width: "400px" } : {
            height: "400px",
            width: "800px"
        }} style={{ height: "150px", width: "400px" }} className='inside-page-padding background-color-grey border-radius font-size-5'>Line Up Item</motion.div>
    );
}