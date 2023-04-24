import { useMobile } from 'hooks/useMediaQuery'
import React from 'react'
import LandingSmall from './LandingSmall'
import Letters3DGame from './Letters3DGame/Letters3DGame'

function Landing({color}) {

    const isMobile = useMobile()

    return isMobile ? <LandingSmall color={color}/> : <Letters3DGame />
}

export default Landing