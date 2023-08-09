import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Navbar'

function Header() {
  return (
    <header>
        <NavLink to="/">
        <img src='./images/thapa_logo.png' alt=''/>
        </NavLink>
        <Navbar/>
       
    </header>
  )
}

export default Header
