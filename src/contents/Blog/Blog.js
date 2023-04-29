import { useMobile } from 'hooks/useMediaQuery'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import BlogSmall from './BlogSmall'
import BlogLarge from './BlogLarge'

function Blog({setBackFunction}) {

    const [expandedPostTitle, setExpandedPostTitle] = useState(null);

    const isMobile = useMobile()

    return (
        <>
            <Helmet>
                <title>PROSANOVA 2023 | Team</title>
                <meta
                    name="description"
                    content="Prosanova 2023, Festival für junge Literatur | Blog"
                />
            </Helmet>

            {isMobile ?
                <BlogSmall expandedPostTitle={expandedPostTitle} setExpandedPostTitle={setExpandedPostTitle} setBackFunction={setBackFunction} />
                : <BlogLarge expandedPostTitle={expandedPostTitle} setExpandedPostTitle={setExpandedPostTitle} />}
        </>
    )
}

export default Blog