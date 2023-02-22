import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemsToCart(state, actions) {
      const newItem = actions.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          name: newItem.name,
          price: newItem.price,
          id: newItem.id,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeItemFromCart(state, actions) {
      const targetID = actions.payload;
      const existingItem = state.items.find((item) => item.id === targetID);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== targetID);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});


export const cartActionCreator = (cart) => {
    
  return async (dispatch) => {

    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Data is being ready to sent!",
      })
    );

    const sendRequist = async () => {
      const response = await fetch(
        "https://firstreactapplication-477cd-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    };

    try {
      await sendRequist();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Data has been set successfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data has been failed",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
