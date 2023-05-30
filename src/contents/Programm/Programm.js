import { useMobile } from "hooks/useMediaQuery";
import { Helmet } from "react-helmet";
import ProgrammSmall from "./ProgrammSmall";
import ProgrammLarge from "./ProgrammLarge";
import React from "react";



function Programm({ setBackFunction, color }) {

    const isMobile = useMobile();

    return (
        <>
            <Helmet>
                <title>PROSANOVA 2023 | LineUp</title>
                <meta
                    name="description"
                    content="Prosanova 2023, Festival für junge Literatur | Team"
                />
            </Helmet>
            {isMobile ? <ProgrammSmall /> : <ProgrammLarge />}
        </>
    );
}

export default Programm