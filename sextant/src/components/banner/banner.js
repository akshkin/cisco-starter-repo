import React from 'react'
import "./banner.styles.css"
import {ReactComponent as Logo} from "../../assets/cisco-logo.svg"

function Banner() {
  return (
    <header>
      <Logo className="logo"/>
      <h1>Sextant Network Dashboard</h1>
    </header>
  )
}

export default Banner