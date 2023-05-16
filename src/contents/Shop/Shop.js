import { useMobile } from 'hooks/useMediaQuery'
import React from 'react'
import ShopSmall from './ShopSmall';
import ShopLarge from './ShopLarge';

function Shop() {
    const isMobile = useMobile();

    return (
        isMobile ? <ShopSmall /> : <ShopLarge />
    )
}

export default Shop