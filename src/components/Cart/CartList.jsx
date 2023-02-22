import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../Store/cart-slice'


import classes from './CartList.module.css'

const CartList = () => {
  const cartItems = useSelector(state=>state.cart.items)
  const dispatch = useDispatch()



  return (
    <ul className={classes.cartListWrapper}>
      {
        cartItems.map((item)=>{

          const {name , price , id , totalPrice , quantity} = item;

          const addToCartHandler = ()=>{
            dispatch(cartActions.addItemsToCart({
              name,
              price,
              id
            }))
          };

          const removeItemHandler = ()=>{
            dispatch(cartActions.removeItemFromCart(id))
          }
          return(
        <li key={id} className={classes.cartList}>
            <div className={classes.cartItemDetails}>
            <span className={classes.itemName}>{name}</span>
            <span className={classes.itemPrice}>{`$${price}`}</span>
            <span className={classes.itemPrice}>{`$${totalPrice}`}</span>

            </div>

            <div className={classes.actionsContainer}>
                <span className={classes.itemQuantity}>
                    Qty : {`x${quantity}`}
                </span>  

                <div className={classes.actions}>
                <button className={classes.addBtn} onClick={addToCartHandler}>+</button>
                <button className={classes.minusBtn} onClick={removeItemHandler}>-</button>
                </div>
            </div>  
        </li>
          )
        })
      }
    </ul>
  )
}

export default CartList