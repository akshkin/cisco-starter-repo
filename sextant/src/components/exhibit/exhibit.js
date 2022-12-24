import React from 'react'
import "./exhibit.styles.css"

function Exhibit({ title, children }) {
  return (
    <div className='card-container'>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  )
}

export default Exhibit