import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import * from 'bootstrap'



function Navbar() {
  return (
    <nav>
      <div className='menuIcon'>
      <ul className='navbar-list'>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>

      </ul>
      </div>
    </nav>
    
  )
}

export default Navbar
