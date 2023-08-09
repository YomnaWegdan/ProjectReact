import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <NavLink to="/footer" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"></svg>
      </NavLink>
      <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
    </div>
  </footer>
    </>
  )
}

export default Footer
