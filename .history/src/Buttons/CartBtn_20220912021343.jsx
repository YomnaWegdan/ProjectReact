import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

function CartBtn() {
  return (
    <Fragment>
        <NavLink to='/' className='btn btn-outline-primary -2'>
        <span className='fa fa-shopping-cart me-1'> 
        </span>
      
        </NavLink>
    </Fragment>
  )
}

export default CartBtn