import React from 'react'
import { useDispatch } from 'react-redux'

import { cartActions } from '../../../Store/cart-slice'
import classes from './ItemList.module.css'

const ItemList = (props) => {
const dispatch = useDispatch()


  const {name , price , id } = props

  const addItemToCartHandler = ()=>{
    dispatch(cartActions.addItemsToCart({
      name , 
      price , 
      id,
    }))
  }
  return (
    <ul className={classes.listWrapper}>
        <li className={classes.itemList}>

            <div className={classes.itemDetails}>
                <span className={classes.itemName}>{name}</span>
                <span className={classes.itemPrice}>{`$${price}`}</span> 
                    <button className={classes.addToCartBtn} onClick={addItemToCartHandler}>
                    Add To Cart
                    </button>
            </div>

                      

        </li>
    </ul>
  )
}

export default ItemList