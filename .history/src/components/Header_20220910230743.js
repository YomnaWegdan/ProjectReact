import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <NavLink to="/">
        <img src='../images/thapa_logo' alt=''/>
        </NavLink>
       
    </header>
  )
}

export default Header
