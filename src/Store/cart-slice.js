import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
    items : [],
    totalQuantity : 0,

},
    reducers : {
        addItemsToCart(state , actions){
            const newItem = actions.payload;
            const existingItem = state.items.find((item)=> item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    name : newItem.name,
                    price : newItem.price,
                    id : newItem.id,
                    quantity : 1,
                    totalPrice : newItem.price
                })
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },

        removeItemFromCart(state , actions){
            const targetID = actions.payload;
            const existingItem = state.items.find(item=> item.id === targetID);
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item=> item.id !== targetID)
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;