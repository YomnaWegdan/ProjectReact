import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


function CartBtn() {
  const state= useSelector((state)=> state.a)
  return (
    <Fragment>
        <NavLink to='/cart' className='btn btn-outline-primary ms-2'>
        <span className='fa fa-shopping-cart me-1'> Cart(0)
        </span>
      
        </NavLink>
    </Fragment>
  )
}

export default CartBtn
