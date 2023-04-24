import React from 'react'
import { BlogSection, BlogSmallButton } from './BlogComponents'
import { Posts } from './BlogPosts'

function BlogSmall({ expandedPostTitle, setExpandedPostTitle, setBackFunction }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateAreas: "'overlay'",
      height: "100%",
      width: "100%",
    }}>
      <div style={{
        gridArea: "overlay",
        display: "flex",
        gap: "0.3rem",
        fontSize: "1.5rem",
        flexDirection: "column",
      }}>
        {Posts.map(({ author, title }) =>
          <BlogSmallButton
              author={author}
              title={title}
              expandedPostTitle={expandedPostTitle}
              setExpandedPostTitle={setExpandedPostTitle}
              setBackFunction={setBackFunction}
              />)}
      </div>

      {Posts.map(({ title, contentJSX }) =>
        <BlogSection title={title} contentJSX={contentJSX} expandedPostTitle={expandedPostTitle} />)}
    </div>
  )
}

export default BlogSmall