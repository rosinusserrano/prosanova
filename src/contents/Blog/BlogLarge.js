import React from 'react'
import { Posts } from './BlogPosts'
import { BlogLargeButton, BlogLargeSection } from './BlogLargeComponents'

function BlogLarge({ expandedPostTitle, setExpandedPostTitle }) {
    return (
        <div className='inside-main-content-wrapper'
            style={{
                display: "flex",
                height: "100%",
                gap: "1rem"
            }}>
            <div style={{
                flex: "1 1 0",
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem"
            }}>
                {Posts.map(({ author, title }) =>
                    <BlogLargeButton author={author} title={title} expandedPostTitle={expandedPostTitle} setExpandedPostTitle={setExpandedPostTitle} />)}
            </div>

            <div style={{
                flex: "2 2 0",
                display: "grid",
                gridTemplateAreas: "'overlay'",
                height: "100%"
            }}>
                {Posts.map(({ title, contentJSX }) =>
                    <BlogLargeSection title={title} contentJSX={contentJSX} expandedPostTitle={expandedPostTitle} />)}
            </div>
        </div>
    )
}

export default BlogLarge