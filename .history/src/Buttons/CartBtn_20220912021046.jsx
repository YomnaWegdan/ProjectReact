import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

function CartBtn() {
  return (
    <Fragment>
        <NavLink className='btn btn-outline-primary'>
        <span className='fa fa-shopp'>
        </span>
      
        </NavLink>
    </Fragment>
  )
}

export default CartBtn
