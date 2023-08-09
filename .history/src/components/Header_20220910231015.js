import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <NavLink to="/">
        <img src='../ima/thapa_logo.png' alt=''/>
        </NavLink>
       
    </header>
  )
}

export default Header
