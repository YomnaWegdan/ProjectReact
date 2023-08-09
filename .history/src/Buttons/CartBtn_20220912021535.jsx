import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

function CartBtn() {
  return (
    <Fragment>
        <NavLink to='/cart' className='btn btn-outline-primary ms-1'>
        <span className='fa fa-shopping-cart me-1'> Cart()
        </span>
      
        </NavLink>
    </Fragment>
  )
}

export default CartBtn
