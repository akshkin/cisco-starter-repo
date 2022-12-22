import React from 'react'
import "./exhibit.styles.css"

function Exhibit({ children }) {
  return (
    <div className='card-container'>
      <h2>Heading</h2>
      <div>{children}</div>
    </div>
  )
}

export default Exhibit