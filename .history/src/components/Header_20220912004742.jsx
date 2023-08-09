import React from 'react'
import { NavLink } from 'react-router-dom'



function HeNavLinkder() {
  return (
<>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid py-2">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NavLink class="nav-link active" aria-current="page" href="#">Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" href="#">Product</NavLink>
          </li>
          <li class="nav-item">
          <NavLink class="nav-link" href="#">About</NavLink>
        </li>
        <li class="nav-item">
        <NavLink class="nav-link" href="#">Contact</NavLink>
      </li>
          
         
        </ul>
        <NavLink class="navbar-brand" href="#">Navbar</NavLink>

      </div>
    </div>
  </nav>
</>
  )
}

export default Header
