import { motion } from 'framer-motion';
import { useMobile } from 'hooks/useMediaQuery';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import LineUpSmall from './LineUpSmall';
import LineUpLarge from './LineUpLarge';

function LineUp({ setBackFunction, color }) {

    const isMobile = useMobile();

    const [openLineUp, setOpenLineUp] = useState("")

    return (
        <>
            <Helmet>
                <title>PROSANOVA 2023 | LineUp</title>
                <meta
                    name="description"
                    content="Prosanova 2023, Festival für junge Literatur | Team"
                />
            </Helmet>
            {isMobile ? <LineUpSmall openLineUp={openLineUp}
                setOpenLineUp={setOpenLineUp}
                setBackFunction={setBackFunction}
                color={color} />
                : <LineUpLarge
                    openLineUp={openLineUp}
                    color={color}
                    setOpenLineUp={setOpenLineUp} />}
        </>
    );
}

export default LineUp