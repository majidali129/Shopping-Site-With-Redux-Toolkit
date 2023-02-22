import React from "react";
import { useSelector } from "react-redux";


import classes from "./Cart.module.css";
import CartList from "./CartList";

const Cart = () => {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cartItems = useSelector((state) => state.cart.items);
  const cartIsImpty = cartItems.length > 0;


  return (
    <>
      {cartIsVisible && cartIsImpty && (
        <div className={classes.cartContainer}>
          <div className={classes.cartItemWrapper}>
            <CartList />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
