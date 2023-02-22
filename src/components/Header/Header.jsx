import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../Store/ui-slice';
import classes from './Header.module.css'


const Header = () => {
  const dispatch = useDispatch()
  const itemsTotalQuantity = useSelector((state)=>state.cart.totalQuantity);

  const cartToogleHandler = ()=>{
    dispatch(uiActions.toogle())
  }

  return (
    <nav className={classes.navbar}>
        <span className={classes.logo}>Ali Express</span>
        <button className={classes.cartButton} onClick={cartToogleHandler}>
            My Cart <span className={classes.totalItems}>{itemsTotalQuantity}</span>
        </button>
    </nav>
  )
}

export default Header