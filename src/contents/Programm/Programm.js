import { useMobile } from "hooks/useMediaQuery";
import { Helmet } from "react-helmet";
import ProgrammSmall from "./ProgrammSmall";
import ProgrammLarge from "./ProgrammLarge";
import React, { useState } from "react";



function Programm({ setBackFunction, color, backFunction }) {

    const isMobile = useMobile();

    const [day, setDay] = useState("");

    return (
        <>
            <Helmet>
                <title>PROSANOVA 2023 | Programm</title>
                <meta
                    name="description"
                    content="Prosanova 2023, Festival für junge Literatur | Programm"
                />
            </Helmet>
            {isMobile ? <ProgrammSmall day={day} setDay={setDay}
                setBackFunction={setBackFunction}
                backFunction={backFunction}
            /> : <ProgrammLarge color={color} day={day} setDay={setDay} />}
        </>
    );
}

export default Programm