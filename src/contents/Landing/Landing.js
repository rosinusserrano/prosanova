import { useMobile } from 'hooks/useMediaQuery'
import React from 'react'
import LandingSmall from './LandingSmall'
import Letters3DGame from './Letters3DGame/Letters3DGame'

function Landing() {

    const isMobile = useMobile()

    return isMobile ? <LandingSmall /> : <Letters3DGame />
}

export default Landing