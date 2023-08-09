import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

function CartBtn() {
  return (
    <Fragment>
        <NavLink className='btn btn-outline-primary'>
        <span className='fa fa-shopping-cart me-1'> 
        </span>
      
        </NavLink>
    </Fragment>
  )
}

export default CartBtn
