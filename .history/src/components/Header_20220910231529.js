import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'

function Header() {
  return (
    <header>
        <NavLink to="/">
        <img src='./images/thapa_logo.png' alt=''/>
        </NavLink>
        <Nav
       
    </header>
  )
}

export default Header
