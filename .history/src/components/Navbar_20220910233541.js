import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
      <div className='menuIcon'>
      <ul className='navbar-list'>
        <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/">About</NavLink></li>
        <li></li>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Home</NavLink>


         </li>
      </ul>
      </div>
    </nav>
    
  )
}

export default Navbar
