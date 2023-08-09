import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


function CartBtn() {
  //we get the state of addItems
  const state= useSelector((state)=> state.addItems)
  return (
    <Fragment>
        <NavLink to='/cart' className='btn btn-outline-primary ms-2'>
        <span className='fa fa-shopping-cart me-1'> Cart(s)
        </span>
      
        </NavLink>
    </Fragment>
  )
}

export default CartBtn
