import React from 'react'

function ProgrammSmallContent({ title, description, type }) {
  return (
    <div style={{
      height: "100%",
      overflowY: "auto",
      padding: "1rem"
    }}
      className='border-radius background-color-grey'>
      <span className='font-size-5 font-b-bold'>{title}</span><br />
      <span>{description}</span><br />
      <span>{description}</span><br />
      <span>{description}</span><br />
      <span>{description}</span><br />
      <span>{description}</span><br />
      <span>{description}</span><br />
    </div>
  )
}

export default ProgrammSmallContent