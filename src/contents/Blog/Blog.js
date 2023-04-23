import { useMobile } from 'hooks/useMediaQuery'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import BlogSmall from './BlogSmall'
import BlogLarge from './BlogLarge'

function Blog() {

    const [expandedPostTitle, setExpandedPostTitle] = useState(null);

    const isMobile = useMobile()

    return (
        <>
            <Helmet>
                <title>PROSANOVA 2023 | Team</title>
                <meta
                    name="description"
                    content="Prosanova 2023, Festival für junge Literatur | Team"
                />
            </Helmet>

            {isMobile ?
                <BlogSmall expandedPostTitle={expandedPostTitle} setExpandedPostTitle={setExpandedPostTitle} />
                : <BlogLarge expandedPostTitle={expandedPostTitle} setExpandedPostTitle={setExpandedPostTitle}/>}
        </>
    )
}

export default Blog